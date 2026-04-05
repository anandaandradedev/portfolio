export default function Services() {
  return (
    <section id="services" className="min-h-screen px-10 py-20">

      <h1 className="text-4xl font-bold text-center mb-12">
        Áreas de Atuação
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-violet-200 p-8 rounded-xl hover:scale-105 transition shadow-lg">
          <h2 className="text-xl font-bold mb-2">Desenvolvimento Front-end</h2>
          <p className="text-black-900">
            Atuo no desenvolvimento e manutenção de interfaces web, criando telas
            modernas, responsivas e focadas na experiência do usuário. Desenvolvo interfaces
            com base em templates do Figma, aplicando boas práticas de UI/UX. Utilizo
            tecnologias como React, Next.js, React Native, JavaScript, Tailwind CSS, Styled
            Components, e também realizo integrações com APIs,
            colaborando no processo de integração com o back-end.
          </p>
        </div>

        <div className="bg-violet-200 p-8 rounded-xl hover:scale-105 transition shadow-lg">
          <h2 className="text-xl font-bold mb-2">Desenvolvimento Back-end</h2>
          <p className="text-black-900">
          Tenho experiência no desenvolvimento da parte lógica de aplicações, criando APIs e
          funcionalidades responsáveis pela comunicação entre o sistema e o banco de dados.
          Durante meus estudos e projetos, utilizei tecnologias como Java com Spring Boot,
          Node.js e SQL para construção de APIs REST e manipulação de dados. Também tenho
          experiência com integração entre front-end e back-end e versionamento de código
          com Git, aplicando na prática conhecimentos adquiridos no curso técnico em
          Informática.
          </p>
        </div>

        <div className="bg-violet-200 p-8 rounded-xl hover:scale-105 transition shadow-lg">
          <h2 className="text-xl font-bold mb-2">Integração de Sistemas</h2>
          <p className="text-black-900">
            Integração entre front-end e back-end através de APIs REST,
            consumo de serviços e comunicação entre aplicações. 
            Tenho experiência na integração entre diferentes partes de uma aplicação, conectando
            o front-end com o back-end por meio de APIs. Durante meus projetos, trabalhei com
            consumo e criação de APIs REST, utilizando tecnologias como Java com Spring Boot,
            Node.js e JavaScript. Também realizei integração com bancos de dados utilizando SQL,
            permitindo que as aplicações troquem informações de forma organizada e funcional.
            

          </p>
        </div>

      </div>

    </section>
  )
}