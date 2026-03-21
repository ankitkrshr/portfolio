"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Instagram, Twitter, ArrowRight } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      title: "Email",
      value: "sankitr1375@gmail.com",
      link: "mailto:sankitr1375@gmail.com",
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      color: "text-blue-400 border-blue-400/20 bg-blue-400/5 group-hover:bg-blue-400/10"
    },
    {
      title: "Phone",
      value: "+91 6200141230",
      link: "tel:+916200141230",
      icon: <Phone className="w-6 h-6 text-green-400" />,
      color: "text-green-400 border-green-400/20 bg-green-400/5 group-hover:bg-green-400/10"
    },
    {
      title: "LinkedIn",
      value: "ankitkrshr",
      link: "https://linkedin.com/in/ankitkrshr",
      icon: <Linkedin className="w-6 h-6 text-sky-500" />,
      color: "text-sky-500 border-sky-500/20 bg-sky-500/5 group-hover:bg-sky-500/10"
    },
    {
      title: "GitHub",
      value: "ankitkrshr",
      link: "https://github.com/ankitkrshr",
      icon: <Github className="w-6 h-6 text-purple-400" />,
      color: "text-purple-400 border-purple-400/20 bg-purple-400/5 group-hover:bg-purple-400/10"
    },
    {
      title: "Instagram",
      value: "@ankitkrshr",
      link: "https://instagram.com/ankitkrshr",
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      color: "text-pink-500 border-pink-500/20 bg-pink-500/5 group-hover:bg-pink-500/10"
    },
    {
      title: "X (Twitter)",
      value: "@Ankit_knight84",
      link: "https://x.com/Ankit_knight84",
      icon: <Twitter className="w-6 h-6 text-foreground/80" />,
      color: "text-foreground border-white/20 bg-white/5 group-hover:bg-white/10"
    }
  ];

  return (
    <section id="contact" className="w-full py-32 px-6 flex justify-center z-10 relative">
      <div className="max-w-5xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's <span className="text-primary italic font-serif">Connect</span></h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-4">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.link}
              target={method.title === "Email" || method.title === "Phone" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-[2rem] flex items-center gap-4 group hover:glass-strong transition-all duration-700 ease-out hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] hover:border-primary/50 cursor-pointer min-h-[120px]"
            >
              <div className={`p-3 rounded-2xl border transition-colors duration-500 shrink-0 ${method.color}`}>
                {method.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground/50 mb-1 tracking-wider uppercase">{method.title}</p>
                <h3 className="text-base md:text-lg font-bold tracking-tight break-all leading-tight">{method.value}</h3>
              </div>
              <ArrowRight className="w-5 h-5 text-foreground/20 group-hover:text-foreground/80 group-hover:translate-x-1 transition-all shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
