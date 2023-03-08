import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://avatars.githubusercontent.com/u/75860261?s=400&u=7ac6805c908f7374b50e758254f4964e6b68a76d&v=4"
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
          />
        </Link>
        <h1>SKAD's Blog</h1>
      </div>

      <div>
        <Link
          href="https://github.com/skad12"
          className="flex items-center px-5 py-3 text-sm text-center text-green-700 bg-gray-900 rounded-full md:text-base"
        >
          Suscribe to my Channel
        </Link>
      </div>
    </header>
  );
};

export default Header;
