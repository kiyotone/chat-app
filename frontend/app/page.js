"use client"; // Make sure this is at the top if you're using the App Router

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const router = useRouter();
  // check if user is logged in
  const user = Cookies.get("username");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className="text-4xl font-bold text-center">
        Welcome to the Chatbot
      </span>
      <span className="text-2xl font-bold text-center">
        {user ? `Hello, ${user}` : "Please Log In"}
      </span>
      {user ? (
        <button
          className="text-white bg-purple-600 rounded-md hover:bg-purple-700 text-3xl px-10 py-3"
          onClick={() => {
            Cookies.remove("username");
            router.push("/");
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="text-white bg-purple-600 rounded-md hover:bg-purple-700 text-3xl px-10 py-3"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
