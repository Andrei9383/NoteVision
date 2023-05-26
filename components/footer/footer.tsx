//@ts-nocheck
import React from "react";
import { useRouter } from "next/router";

export default function Footer(): JSX.Element {
  const router = useRouter();

  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 bottom-0 w-[96%] ml-[2%]">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://notevision.ro/" className="hover:underline">NoteVision™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="https://www.github.com/Andrei9383/NoteVision" className="mr-4 hover:underline md:mr-6">GitHub</a>
        </li>
        <li>
            <a href="/contact" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
  );
}
