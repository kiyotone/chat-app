import { useEffect, useRef, useState } from "react";

// Helper to connect WebSocket with async/await
function connectWebSocketAsync(url, socketRef) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    socketRef.current = socket;

    socket.onopen = () => {
      resolve(socket);
    };
    socket.onerror = (err) => {
      reject(err);
    };
  });
}

export default function useReliableWebSocket(wsUrl) {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("connecting");
  const retryAttemptRef = useRef(0);
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    isUnmountedRef.current = false;

    const connect = async () => {
      if (socketRef.current) {
        socketRef.current.onclose = null;
        socketRef.current.onerror = null;
        socketRef.current.onmessage = null;
        socketRef.current.close();
      }

      setStatus("connecting");

      try {
        const socket = await connectWebSocketAsync(wsUrl, socketRef);
        setStatus("connected");
        retryAttemptRef.current = 0;

        socket.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data]);
          } catch (e) {
            // Optionally handle parse error
          }
        };

        socket.onclose = (event) => {
          if (isUnmountedRef.current) return;
          setStatus("disconnected");
          retryAttemptRef.current += 1;
          const retryDelay = Math.min(1000 * retryAttemptRef.current, 10000);
          setTimeout(connect, retryDelay);
        };

        socket.onerror = (event) => {
          if (isUnmountedRef.current) return;
          setStatus("error");
        };
      } catch (err) {
        if (isUnmountedRef.current) return;
        setStatus("error");
        retryAttemptRef.current += 1;
        const retryDelay = Math.min(1000 * retryAttemptRef.current, 10000);
        setTimeout(connect, retryDelay);
      }
    };

    connect();

    return () => {
      isUnmountedRef.current = true;
      setStatus("disconnected");
      if (socketRef.current) {
        socketRef.current.onclose = null;
        socketRef.current.onerror = null;
        socketRef.current.onmessage = null;
        socketRef.current.close();
      }
    };
  }, [wsUrl]);

  const sendMessage = (message) => {
    const socket = socketRef.current;
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ message }));
    }
  };

  return { messages, status, sendMessage };
}
