"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-green-300",
    title: "Richies Royal",
    desc: "I made this website for a company that sells robots.",
    img: "/richies.png",
    link: "https://richiesroyal.com",
  },
  {
    id: 2,
    color: "from-green-300 to-blue-300",
    title: "POC Event",
    desc: "I made this website for a non-profit organization. I worked with their UI design team and implemented their Figma designs.",
    img: "/poc.png",
    link: "https://pocevent.com",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Travel Advisor App",
    desc: "This is a project I made to practice use of multiple APIs interacting together.",
    img: "/travel.png",
    link: "https://travsamp.vercel.app/",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Regrev",
    desc: "This is a sample landing page that I made for a startup tech company. I am currently working on their company website.",
    img: "/regrev.png",
    link: "https://regrevt.vercel.app/",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "My Former Portfolio",
    desc: "This is one of my former portfolios. It has a sleek design and slide-in animations.",
    img: "/myname.png",
    link: "https://masterfed.com/myname",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="md:h-[800vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-8xl text-center">
          My Projects
        </div>
        <div className="hidden md:flex sticky top-0 h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center last:px-20 bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl mt-4">
                    {item.title}
                  </h1>
                  <div className="relative -mt-4 w-80 h-48 md:w-96 md:h-64 lg:w-[400px] lg:h-[230px]">
                    <Image src={item.img} alt="" fill sizes="(max-width: 768px) 320px, (max-width: 1200px) 400px"/>
                  </div>
                  <p className="w-80 md:w96 lg:w-[400px] lg:text-lg">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-start -mx-4 -mt-4">
                    <button className="p-4 text-sm md:text-md lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-blue-900 hover:text-white">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Portfoio */}
      <div className="md:hidden bg-red-300 pt-10">
        {items.map((item) => (
          <div
              className={`flex justify-center pb-10 bg-gradient-to-b ${item.color}`}
              key={item.id}
            >
              <div className="flex flex-col text-white">
                <h1 className="text-xl font-bold mt-4">
                  {item.title}
                </h1>
                <div className="relative w-72 h-40">
                  <Image src={item.img} alt="" fill sizes="(max-width: 767px) 288px, (max-width: 1200px) 400px"/>
                </div>
                <p className="w-72 mt-1">
                  {item.desc}
                </p>
                <Link href={item.link} className="flex justify-start -mx-4 -mt-1">
                  <button className="p-4 text-sm bg-white text-gray-600 font-semibold m-4 rounded hover:bg-blue-900 hover:text-white">See Demo</button>
                </Link>
              </div>
              <hr></hr>
          </div>
        ))}
      </div>
      {/* End of Mobile Portfoio */}

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center md:pt-8">
        <h1 className="text-4xl md:text-6xl">Do you have a Job or Project for me?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                FrontEnd Web Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            <span>Hire Me</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
