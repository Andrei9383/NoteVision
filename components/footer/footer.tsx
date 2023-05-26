import React from "react";
import { useRouter } from "next/router";

export default function Footer(): JSX.Element {
  const router = useRouter();
  function handleAbout(): void {
    void router.push("/about");
  }
  function handleContact(): void {
    void router.push("/contact");
  }
  return (
    <footer className="bg-gray-700 inset-x-0 bottom-0 ">
      <div className="w-full h-[5%] flex py-4 px-4 overflow-hidden sm:px-6 lg:px-8]">
        <p className="my-2 grow text-center text-base text-gray-400">
          &copy; 2023 NoteVision, Inc. All rights reserved.
        </p>
        <span className="place-self-end">
          <button
            onClick={handleAbout}
            className="text-gray-400 hover:text-gray-200 mx-2"
          >
            About
          </button>
          <button
            onClick={handleContact}
            className="text-gray-400 hover:text-gray-200 mx-2"
          >
            Contact
          </button>
        </span>
      </div>
    </footer>
  );
}
