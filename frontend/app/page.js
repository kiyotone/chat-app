"use client"; // Make sure this is at the top if you're using the App Router

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const user = "Kirtan";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className="text-4xl font-bold text-center">
        Welcome to the Chatbot
      </span>
      <span className="text-2xl font-bold text-center">
        {user ? `Hello, ${user}` : "Please log in"}
      </span>
      <button
        onClick={() => router.push("/chat")}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Go To Chat
      </button>
    </div>
  );
}
