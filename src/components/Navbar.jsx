import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-purple-500">
        Fernanda Dev
      </h1>

      {/* BOTÃO MOBILE */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MENU */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center gap-6 text-gray-300 text-sm transition-all duration-300 ${
          open ? "block" : "hidden md:flex"
        }`}
      >
        <li><a href="#sobre" className="hover:text-purple-400">Sobre</a></li>
        <li><a href="#tech" className="hover:text-purple-400">Tecnologias</a></li>
        <li><a href="#services" className="hover:text-purple-400">Serviços</a></li>
        <li><a href="#projects" className="hover:text-purple-400">Trabalhos</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contato</a></li>
      </ul>

    </nav>
  );
}