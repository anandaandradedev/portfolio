import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1yol75h",
      "template_rqt5fp9",
      form.current,
      "Yt359WQv4xj90oq9u"
    )
    .then(() => {
      setStatus("Mensagem enviada com sucesso! 🚀");
      form.current.reset();
    })
    .catch((error) => {
      console.error("Erro EmailJS:", error);
      setStatus("Erro ao enviar mensagem. Tente novamente.");
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >

      <h1 className="text-4xl font-bold mb-8">
        Contato
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full max-w-md gap-4"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Seu nome"
          required
          className="p-3 rounded bg-violet-200 border border-gray-700"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Seu email"
          required
          className="p-3 rounded bg-violet-200 border border-gray-700"
        />

        <textarea
          name="message"
          placeholder="Mensagem"
          rows="5"
          required
          className="p-3 rounded bg-violet-200 border border-gray-700"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-300 hover:bg-purple-700 transition px-6 py-3 rounded font-semibold"
        >
          Enviar
        </button>

        {status && (
          <p className="text-center mt-2 text-sm text-red-300">
            {status}
          </p>
        )}

      </form>

    </section>
  );
}