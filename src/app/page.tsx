"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Search,
  PhoneIcon as WhatsApp,
} from "lucide-react";
import Skills from "./components/skills-grid";
import { PortfolioCard } from "./components/PortfolioCard";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Haven",
      description:
        "Designed and developed a visually engaging restaurant website for Haven's Kitchen, highlighting authentic Nigerian cuisine and traditions. Focused on delivering a seamless user experience with modern design aesthetics.",
      image: "/haven.png",
      link: "https://haven-s-kitchen.vercel.app/",
    },
    {
      id: 2,
      title: "Spheravault",
      description:
        "Built a sleek and modern platform for Sphera Vault, focused on transforming financial futures through a cutting-edge investment platform. Designed for simplicity, scalability, and user engagement, with seamless access to tools for starting investments.",
      image: "/sphera.png",
      link: "https://spheravault.com/",
    },
    {
      id: 3,
      title: "Zypo",
      description:
        "Created an intuitive and engaging educational platform for Xypo, emphasizing accessible learning and knowledge-sharing. The design features a modern and inviting interface that connects users with resources effortlessly.",
      image: "/xypo.png",
      link: "https://zypo.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 ">
      <header className="fixed top-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-sm z-10">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-amber-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
            </svg>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`capitalize ${
                    activeSection === section
                      ? "text-amber-500"
                      : "text-gray-300 hover:text-amber-500"
                  } transition-colors`}
                >
                  {section}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-1">
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent text-gray-300 outline-none w-32 md:w-48"
            />
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-6 md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-300">I&apos;m</span>{" "}
                <span className="text-amber-500">Bamidele Idowu</span>
              </h1>
              <p className="text-xl text-gray-300">Front End Developer</p>
              <Link
                href="#contact"
                className="inline-block px-6 py-2 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-colors rounded-md"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-12 md:mt-0 md:w-1/2 relative">
              <Image
                src="/dele.jpg"
                alt="Profile"
                width={500}
                height={500}
                className="rounded-lg grayscale contrast-125"
                priority
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center bg-zinc-800"
        >
          <div className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-gray-200 mb-8">About</h2>
            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-1 bg-amber-500"></div>
              <p className="text-gray-300 text-lg max-w-3xl pt-8">
                I’m a front-end developer passionate about crafting
                user-friendly interfaces and seamless digital experiences. With
                expertise in React, Next.js, and Tailwind CSS,{" "}
                <span className="text-amber-500">
                  I bring designs to life with clean, responsive, and visually
                  compelling code.
                </span>{" "}
                I love building projects that not only solve problems but also
                impress, like an interactive photo album website or dynamic
                analytics dashboards. Currently, I’m exploring real-time system
                management with C++, developing software that bridges the gap
                between motion systems and insightful reporting. My curiosity
                doesn’t stop there—I’m diving into cognitive psychology,
                fascinated by how people think and behave, which fuels my desire
                to create more human-centered designs.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-amber-500 mb-8">
              My Skills
            </h2>
            <Skills />
          </div>
        </section>

        <section id="portfolio" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-amber-500 mb-6">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((project) => (
                <PortfolioCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center bg-zinc-800"
        >
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center gap-4 justify-center mb-12">
                <div className="h-[1px] flex-1 bg-amber-500/20"></div>
                <h2 className="text-3xl font-bold text-amber-500">
                  Contact Me
                </h2>
                <div className="h-[1px] flex-1 bg-amber-500/20"></div>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:bamideleaug2002@gmail.com"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Bamideleaug2002@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:-+234 8077382828"
                    className="hover:text-amber-500 transition-colors"
                  >
                    +234 8077382828
                  </a>
                </div>
                {/* <div className="flex items-center justify-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Toledo, United States</span>
                </div> */}
              </div>

              <div className="flex justify-center gap-4">
                {/* <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a> */}
                <a
                  href="https://x.com/delegram_xx"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bamidele-idowu-3a48941ab/"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.link/eh9vbd"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <WhatsApp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
