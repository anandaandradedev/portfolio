import { FaGithub } from "react-icons/fa";
import reis from "../assets/reis.jpg";
import ifce from "../assets/ifce.jpg";
import argos from "../assets/argos.jpg";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-16">
        Trabalhos
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* CARD 1 - REIS PATENTES */}
        <div className="bg-violet-200 p-8 rounded-2xl shadow-lg border border-purple-800 hover:scale-105 transition">

          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-[0_0_30px_#a855f7]">
              <img
                src={reis}
                alt="Reis Patentes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold text-center">
            Reis Patentes
          </h2>

          <p className="text-purple-400 text-center text-sm mt-1">
            Projeto desenvolvido para empresa
          </p>

          <p className="text-black-400 text-sm text-center mb-6 mt-4">
            Já atuei no desenvolvimento de uma plataforma web com dashboards
            gerenciais, implementando autenticação JWT, controle de acesso por
            papéis (RBAC) e APIs para métricas comerciais e operacionais.
            Também participei da construção das interfaces em React integradas
            ao backend.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">React</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">Node</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">PostgreSQL</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">Redis</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">JWT</span>
          </div>

        </div>


        {/* CARD 2 - PROJETO IFCE */}
        <div className="bg-violet-200 p-8 rounded-2xl shadow-lg border border-purple-800 hover:scale-105 transition">

          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-[0_0_30px_#a855f7]">
              <img
                src={ifce}
                alt="Projeto IFCE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold text-center">
            Sistema de Gerenciamento de Produtos
          </h2>

          <p className="text-purple-400 text-center text-sm mt-1">
            Projeto acadêmico • IFCE
          </p>

          <p className="text-black-400 text-sm text-center mb-6 mt-4">
            Projeto desenvolvido no curso técnico do IFCE, consistindo em uma
            aplicação web com API REST em Java Spring Boot para gerenciamento
            de produtos e um frontend em HTML, CSS e JavaScript responsável
            por consumir e exibir os dados da API.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">Java</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">Spring Boot</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">REST API</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">Maven</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">H2</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">HTML</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">CSS</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">JavaScript</span>
          </div>

          <div className="flex justify-center">
            <a href="https://github.com/dinhadesu/web2" className="flex items-center gap-2 text-purple-400 hover:underline">
              <FaGithub /> Ver código
            </a>
          </div>

        </div>


        {/* CARD 3 - ARGOS */}
        <div className="bg-violet-200 p-8 rounded-2xl shadow-lg border border-purple-800 hover:scale-105 transition">

          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-[0_0_30px_#a855f7]">
              <img
                src={argos}
                alt="Projeto Argos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold text-center">
            Argos – Monitoramento Inteligente de Motores
          </h2>

          <p className="text-purple-400 text-center text-sm mt-1">
            Competição tecnológica • SENAI
          </p>

          <p className="text-black-400 text-sm text-center mb-6 mt-4">
            Participei do desenvolvimento do projeto Argos durante uma
            competição no SENAI. O sistema consiste em um monitoramento
            térmico inteligente para motores trifásicos utilizando sensores
            de temperatura conectados a um ESP32, permitindo acompanhar em
            tempo real o aquecimento dos motores e prevenir falhas.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">ESP32</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">IoT</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">Sensores</span>
            <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">Monitoramento</span>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/posts/douglaamoura_inova%C3%A7%C3%A3o-e-mentoria-conduzindo-a-pr%C3%B3xima-activity-7389987013921361920-knJB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFc5yjUBf6NrMw9WFP5DcoNu5Lis4mBknj4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:underline"
            >
              Ver publicação
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}