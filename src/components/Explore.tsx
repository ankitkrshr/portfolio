"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy, Link as LinkIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Explore = () => {
  const cards = [
    {
      title: "Guestbook",
      desc: "Leave your mark and see what others have to say",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      link: "/guestbook",
      color: "text-purple-400"
    },
    {
      title: "Achievements",
      desc: "Milestones, certifications, and accomplishments",
      icon: <Trophy className="w-8 h-8 text-orange-400" />,
      link: "/achievements",
      color: "text-orange-400"
    },
    {
      title: "My Links",
      desc: "Find me across the web and social platforms",
      icon: <LinkIcon className="w-8 h-8 text-blue-400" />,
      link: "/links",
      color: "text-blue-400"
    }
  ];

  return (
    <section id="explore" className="w-full py-32 px-6 flex justify-center z-10 relative">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">More to <span className="text-primary italic font-serif">Explore</span></h2>
          <p className="text-foreground/60 text-lg">Check out these additional resources and connect with me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={card.link}>
                <div className="glass p-10 rounded-[2rem] flex flex-col items-center text-center gap-6 hover:glass-strong transition-all duration-300 hover:-translate-y-2 group h-full">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${card.color}`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${card.color}`}>{card.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className={`mt-auto text-sm font-bold flex items-center gap-2 ${card.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
