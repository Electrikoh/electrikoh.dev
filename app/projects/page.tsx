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

          <main className="flex flex-col intro w-full justify-center gap-2 mt-4 moveUpAni">
            <div className="my-3 grid grid-cols-2 gap-4">
              <div className="col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                <a
                  href="https://github.com/Electrikoh/social-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <img
                        src="/nakjologo.png"
                        alt="Github image"
                        className="aspect-video size-full rounded-lg shadow"
                      />
                      <div className="mt-1 font-medium text-lg">Nakjo</div>
                    </div>
                  </div>
                  <div className="mt-2 line-clamp-4 text-sm">
                    A chatting app similar to discord, but with some unique
                    features. In development.
                  </div>
                </a>
              </div>
              <div className="col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                <a
                  href="https://electrikoh.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <img
                        src="/electrikohdev.png"
                        alt="electrikoh.dev"
                        className="aspect-video size-full rounded-lg shadow"
                      />
                      <div className="mt-1 font-medium text-lg">
                        electrikoh.dev
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 line-clamp-4 text-sm">
                    A revamped portfolio with a simpler look
                  </div>
                </a>
              </div>
              {/* Project 1 */}
              <div className="col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                <a
                  href="https://vozackiispiti.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <img
                        src="/vozackiispiti.png"
                        alt="Vozacki ispiti"
                        className="aspect-video size-full rounded-lg shadow"
                      />
                      <div className="mt-1 font-medium text-lg">
                        Vozacki Ispiti
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 line-clamp-4 text-sm">
                    Detailed statistics on drivers license exams in Macedonia
                  </div>
                </a>
              </div>
              <div className="col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                <a
                  href="https://github.com/Electrikoh/discordeno-template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <img
                        src="/github.png"
                        alt="Github image"
                        className="aspect-video size-full rounded-lg shadow"
                      />
                      <div className="mt-1 font-medium text-lg">
                        Discord bot template
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 line-clamp-4 text-sm">
                    An efficient discord bot template made using the discordeno
                    library
                  </div>
                </a>
              </div>
              <div className="col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                <a
                  href="https://discord.gg/man8dDCjzz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <img
                        src="/surviviaio.png"
                        alt="Surviva.io"
                        className="aspect-video size-full rounded-lg shadow"
                      />
                      <div className="mt-1 font-medium text-lg">
                        Survivia.io
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 line-clamp-4 text-sm">
                    A 2.5D block survival game with a unique artstyle. Project
                    was never finished
                  </div>
                </a>
              </div>
              <div className="col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                <a
                  href="https://electrikoh.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <img
                        src="/oldportfolio.png"
                        alt="Old portfolio"
                        className="aspect-video size-full rounded-lg shadow"
                      />
                      <div className="mt-1 font-medium text-lg">
                        Old portfolio
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 line-clamp-4 text-sm">
                    A more cluttered and less professional version of this one
                  </div>
                </a>
              </div>
              {/* Project 2 */}
            </div>
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
