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
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 bottom-0 w-[96%] ml-[2%]">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://notevision.ro/" class="hover:underline">NoteVision™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="https://www.github.com/Andrei9383/NoteVision" class="mr-4 hover:underline md:mr-6">GitHub</a>
        </li>
        <li>
            <a href="/contact" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
  );
}
