import Link from "next/link";

export default function Background() {
  return (
    <nav className="w-full flex justify-between p-4 navbar-slide">
      <a
        href="/"
        className="bg-white text-black text-3xl font-semibold p-1 title"
      >
        electrikoh.dev
      </a>
      <ul className="flex">
        <li>
          <Link
            href={"/"}
            className="relative flex items-center justify-center px-2 py-0.5 text-center text-lg text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"projects"}
            className="relative flex items-center justify-center px-2 py-0.5 text-center text-lg text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href={"about"}
            className="relative flex items-center justify-center px-2 py-0.5 text-center text-lg text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
