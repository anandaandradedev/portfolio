import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiJavascript } from "react-icons/si";

export default function Tech() {
  return (
    <section id="tech" className="py-20 text-center">

      <h1 className="text-4xl font-bold mb-10">
        Tecnologias
      </h1>

      <div className="flex flex-wrap justify-center gap-10 text-6xl text-purple-500">

        {[FaJava, SiSpringboot, FaReact, SiJavascript, FaHtml5, FaCss3Alt].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Icon />
          </motion.div>
        ))}

      </div>

    </section>
  )
}