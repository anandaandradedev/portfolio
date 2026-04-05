export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 flex justify-between items-center px-10 py-4">

      <h1 className="text-xl font-bold text-purple-500">
        Fernanda Dev
      </h1>

      <ul className="flex gap-6 text-sm text-gray-300">

        <li><a href="#sobre" className="hover:text-purple-400 transition">Sobre</a></li>
        <li><a href="#tech" className="hover:text-purple-400 transition">Tecnologias</a></li>
        <li><a href="#services" className="hover:text-purple-400 transition">Serviços</a></li>
        <li><a href="#projects" className="hover:text-purple-400 transition">Trabalhos</a></li>
        <li><a href="#contact" className="hover:text-purple-400 transition">Contato</a></li>

      </ul>

    </nav>
  )
}