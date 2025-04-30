import MainBody from "./components/MainBody";
import Sidebar from "./components/Sidebar";

export default function ChatPage() {
  return (
    <div className=" w-full h-screen bg-[#20232b] flex flex-col">
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>

        <div className="pt-[.3rem] w-full">
          <MainBody />
        </div>
      </div>
    </div>
  );
}
