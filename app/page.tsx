import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full wrapper-1">
      <div className="amogus flex h-full w-full">
        <div className="flex flex-wrap px-8 mx-auto h-full max-w-2xl justify-between">
          <Navbar></Navbar>

          <main className="flex flex-col intro w-full justify-center">
            <div className="flex w-full justify-evenly">
              <div>
                <h3 className="pt-14 text-2xl  text-gray-400 moveUpAni">
                  Full Stack Developer <br /> & Sysadmin
                </h3>
                <div className=" rounded w-50 flex moveUpAni items-end py-3">
                  <Image
                    src="/location.svg"
                    alt="Prasoon's Location"
                    width={16}
                    height={16}
                    className="w-6 h-6 sm:w-6 sm:h-6 "
                  />
                  <p className="ml-2 text-md font-thin inline-block align-bottom text-gray-400">
                    North Macedonia
                  </p>
                </div>
              </div>
              <Image
                className="moveUpAni hover-size rounded-full"
                src="/cute.png"
                alt="profile.png"
                width={200}
                height={50}
              ></Image>
            </div>

            {/* Typescript, Vue, React, Laravel, Nextjs, Tailwind */}
            {/* Nodejs, Expressjs, Socket.io */}
            {/* Javascript, Python, Rust, C++ */}
            {/* Docker, Git, Blockchain */}

            <div className="flex justify-center items-center mt-4 max-w-xl moveUpAni">
              {/* Desktop grid */}
              <div className="hidden grid-cols-3 sm:grid md:grid-cols-5">
                {[
                  { name: "Vue", icon: "/svgs/vue.svg" },
                  { name: "React", icon: "/svgs/react.svg" },
                  // { name: "Nextjs", icon: "/svgs/nextjs.svg" },
                  { name: "Laravel", icon: "/svgs/laravel.svg" },
                  { name: "Tailwind", icon: "/svgs/tailwind.svg" },
                  { name: "Nodejs", icon: "/svgs/node.svg" },
                  // { name: "Express", icon: "/svgs/express.svg" },
                  // { name: "Socket.io", icon: "/svgs/socketio.svg" },
                  { name: "TypeScript", icon: "/svgs/typescript.svg" },
                  // { name: "JavaScript", icon: "/svgs/javascript.svg" },
                  { name: "Python", icon: "/svgs/python.svg" },
                  { name: "Rust", icon: "/svgs/rust.svg" },
                  { name: "Docker", icon: "/svgs/docker.svg" },
                  // { name: "Git", icon: "/svgs/git.svg" },
                  { name: "Blockchain", icon: "/svgs/blockchain.svg" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="tech-hover -ml-px -mt-px p-6 relative flex aspect-square select-none flex-col items-center justify-center hover:bg-gray-600/20"
                  >
                    {/* Hover effect on the image */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="group group-hover:scale-110 group-hover:-translate-y-1 size-11 transition-transform duration-300"
                    />
                    {/* Fade-in animation */}
                    <div className="mt-3 text-muted-foreground text-xs text-gray-400 font-semibold">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile-friendly list */}
              <div className="flex flex-wrap gap-2 sm:hidden">
                {[
                  { name: "Vue", icon: "/svgs/vue.svg" },
                  { name: "React", icon: "/svgs/react.svg" },
                  { name: "Nextjs", icon: "/svgs/nextjs.svg" },
                  { name: "Laravel", icon: "/svgs/laravel.svg" },
                  { name: "Tailwind CSS", icon: "/svgs/tailwind.svg" },
                  // { name: "Node", icon: "/svgs/node.svg" },
                  { name: "Express", icon: "/svgs/express.svg" },
                  { name: "Socket.io", icon: "/svgs/socketio.svg" },
                  { name: "TypeScript", icon: "/svgs/typescript.svg" },
                  // { name: "JavaScript", icon: "/svgs/javascript.svg" },
                  { name: "Python", icon: "/svgs/python.svg" },
                  { name: "Rust", icon: "/svgs/rust.svg" },
                  { name: "Docker", icon: "/svgs/docker.svg" },
                  // { name: "Git", icon: "/svgs/git.svg" },
                  { name: "Blockchain", icon: "/svgs/blockchain.svg" },
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="tech-hover flex min-w-fit items-center rounded-md border bg-muted p-1 font-mono text-foreground transition-transform hover:scale-105"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="size-4 transition-transform duration-300 hover:rotate-6"
                    />
                    <p className="ml-2 text-xs">{tech.name}</p>
                  </span>
                ))}
              </div>
            </div>

            <span className="text-gray-400 mt-2 moveUpAni">
              Featured projects
            </span>

            <div className="my-3 grid grid-cols-2 gap-4 moveUpAni">
              <div className="project-hover col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
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
              <div className="project-hover col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:bg-primary/[0.03] sm:col-span-1 hover:dark:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
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
            </div>
            <a
              className="group flex items-center gap-1 font-semibold hover:text-muted-foreground moveUpAni"
              href="/projects"
            >
              More projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </a>
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
