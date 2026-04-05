import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import foto from "../assets/foto.jpg";

export default function Hero() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 bg-gradient-to-b from-black to-purple-900 text-center md:text-left"
    >

      <div className="max-w-xl">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold flex gap-3"
        >
          <span className="text-gray-300">Fernanda</span>

          <span className="text-gray-300">
            Andrade
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl mt-4 text-gray-300"
        >
          Desenvolvedora de Software
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-400"
        >
          Desenvolvedora focada em desenvolvimento de software, com experiência em Java,
          criação de APIs REST com Spring Boot e desenvolvimento de interfaces modernas
          utilizando React. Tenho interesse em backend, arquitetura de sistemas e boas
          práticas de desenvolvimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-6 mt-8 justify-center md:justify-start flex-wrap"
        >

          <a
            href="https://github.com/anandaandradedev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-violet-800 px-5 py-2 rounded-full hover:bg-purple-500 transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/fernandaandradedevops/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-violet-800 px-5 py-2 rounded-full hover:bg-purple-500 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="fernanda-andrade-dev.pdf" 
            download
            className="flex items-center gap-2 bg-violet-800 px-5 py-2 rounded-full hover:bg-purple-500 transition"
          >
            Baixar CV
          </a>

        </motion.div>

      </div>

      <motion.img
        src={foto}
        alt="Fernanda Andrade"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
      />

    </section>
  );
}