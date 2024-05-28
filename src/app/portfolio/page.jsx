"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-green-300 to-blue-300",
    title: "DineIntel",
    desc: "This is a website I made for DineIntel, an app that revolutionizing dining through tech innovation.",
    img: "/testdine.png",
    stack: "React, Next.js, Node.js, Firebase, Stripe, TailwindCSS, Shadcn",
    link: "https://testdine.vercel.app",
  },
  {
    id: 2,
    color: "from-green-300 to-blue-300",
    title: "POC Event",
    desc: "I made this website for a non-profit organization. I worked with their UI design team and implemented their Figma designs.",
    img: "/poc.png",
    stack: "WordPress, PHP, MySQL, jQuery",
    link: "https://pocevent.com",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Travel Advisor App",
    desc: "This is a project I made to practice use of multiple APIs interacting together.",
    img: "/travel.png",
    stack: "React, Material UI, Travel Advisor API, Google Maps API",
    link: "https://travsamp.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "My Former Portfolio",
    desc: "This is one of my former portfolios. It has a sleek design and slide-in animations.",
    img: "/myname.png",
    stack: "HTML, CSS, JavaScript, jQuery",
    link: "https://masterfed.com/myname",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-8xl text-center">
          My Projects
        </div>
        <div className="flex flex-col gap-4 items-center overflow-hidden">
            <div className="flex items-center justify-center" />
            {items.map((item) => (
              <div
                className='flex items-center justify-center last:pb-24 px-8'
                key={item.id}
              >
                <div className="flex flex-col md:flex-row gap-8 pt-8 md:pt-16 text-white">
                  <div className="">
                    <Image src={item.img} alt="" width={400} height={300} sizes="(max-width: 768px) 320px, (max-width: 1200px) 400px" blurDataURL={item.img} placeholder="blur" loading="lazy"/>
                  </div>
                  <div className="">
                    <h1 className="text-xl font-bold md:text-3xl text-black">{item.title}</h1>
                    <p className="w-80 md:w-96 lg:w-[400px] text-black mb-4">{item.desc}</p>
                    <p className="w-80 md:w-96 lg:w-[400px] text-black"><span className="font-bold">Tech Stack: </span>{item.stack}</p>
                    <Link href={item.link} className="flex justify-start -mx-4">
                      <button className="p-4 text-sm md:text-md lg:text-lg bg-transparent text-black ring-1 font-semibold m-4 rounded hover:bg-blue-900 hover:text-white">See Demo</button>
                    </Link>
                  </div>
                  <hr></hr>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center text-center pt-8 md:pt-16">
        <h1 className="text-4xl md:text-6xl">Do you have a Job or Project for me?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[400px] md:h-[400px]"
          >
            <defs>
              <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front End Web Developer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
            <span>Hire Me</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
