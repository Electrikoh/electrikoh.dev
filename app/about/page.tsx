import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full wrapper-1 overflow-hidden">
      <div className="amogus flex h-full w-full overflow-y-scroll hidding-scroll">
        <div className="flex flex-wrap px-8 mx-auto h-full max-w-2xl justify-between  ">
          <Navbar></Navbar>

          <main className="flex flex-col intro w-full justify-center gap-2 mt-6 moveUpAni">
            <ul className="w-full bg-gray-700/10 p-4 flex flex-col gap-2 text-lg border-l-4 border-l-blue-400 rounded-md">
              <li className="flex gap-2">
                <img src="/svgs/laptop.svg" alt="" width={32} />
                19, Software engineer @ FINKI
              </li>
              <li className="flex gap-2">
                <img src="/svgs/lightbulb.svg" alt="" width={32} />
                Love learning new things
              </li>
              <li className="flex gap-2">
                <img src="/svgs/ladder.svg" alt="" width={32} />
                Self-hosting when needed
              </li>
            </ul>
            <ul className="w-full bg-gray-700/10 p-4 flex flex-col gap-2 text-lg border-l-4 border-l-blue-400 rounded-md">
              <li className="flex gap-2">
                <img src="/svgs/tv.svg" alt="" width={32} />
                Anime enthusiast
              </li>
              <li className="flex gap-2">
                <img src="/svgs/music.svg" alt="" width={32} />
                Enjoy all types of music
              </li>
              <li className="flex gap-2">
                <img src="/svgs/paint.svg" alt="" width={32} />
                Draw here and there
              </li>
            </ul>
            <ul className="w-full bg-gray-700/10 p-4 flex flex-col gap-2 text-lg border-l-4 border-l-blue-400 rounded-md">
              <li className="flex gap-2">
                <img src="/svgs/speaking.svg" alt="" width={32} />
                Philosopher & professional yapper
              </li>
              <li className="flex gap-2">
                <img src="/svgs/heart.svg" alt="" width={32} />
                Like genuine people
              </li>
            </ul>
          </main>

          <footer className="py-8 w-full flex flex-col justify-end ">
            <hr className="w-full border-t border-gray-300/20 my-4" />

            <div className="flex items-center justify-center text-muted-foreground hover:text-primary">
              <span className="">
                <Image
                  src="/githubIcon.svg"
                  alt="Prasoon's Github"
                  className="w-7 h-7 sm:w-7 sm:h-7"
                  width={16}
                  height={16}
                />
              </span>
              <p className="ml-2 hidden sm:block">GitHub</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
