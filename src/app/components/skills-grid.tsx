'use client'

import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

interface Skill {
  name: string
  icon: string
  color: string
}

const skills: Skill[] = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "bg-orange-500/10" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "bg-blue-500/10" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-yellow-500/10" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-cyan-500/10" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "bg-gray-500/10" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "bg-teal-500/10" },
]

type MotionDivProps = HTMLMotionProps<"div">

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => {
        const motionProps: MotionDivProps = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: index * 0.1 },
          className: `relative flex flex-col items-center justify-center p-6 rounded-lg ${skill.color} backdrop-blur-sm`
        }

        return (
          <motion.div key={skill.name} {...motionProps}>
            <div className="w-12 h-12 mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm text-center font-medium text-gray-200">{skill.name}</span>
          </motion.div>
        )
      })}
    </div>
  )
}

