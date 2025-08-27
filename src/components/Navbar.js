import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 bg-[#1a1a1a] w-full z-50 px-8 h-18">
      <p id="pLogo" className="text-[#FFEFEF] font-bold text-4xl">
        LOGO PÁGINA
      </p>

      <nav className="flex justify-center flex-grow ">
        <ul className="flex items-center gap-8 text-[#FFEFEF] font-medium text-[16px] tracking-wider">
          <li className=" text-[#D64541]">
            <Link href="/">HOME</Link>
          </li>

          <li className="flex items-center gap-1 cursor-pointer">
            <Link href="/">SHOP</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li className="flex items-center gap-1 cursor-pointer">
            <Link href="/">MARCAS</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <Link href="/">NOVEDADES</Link>
          </li>

          <li>
            <Link href="/">ABOUT</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4 ml-6">
        <div className="flex items-center bg-[#FFEFEF] text-[#1a1a1a]/80 rounded-full px-3 py-1 w-[350px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="BUSCAR"
            className="outline-none text-xl w-full pl-2 tracking-widest "
          />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFEFEF"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
