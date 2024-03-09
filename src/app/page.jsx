"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Typical from 'react-typical'

const Homepage = () => {

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-8">
        {/* IMAGE CONTAINER */}
        <div className="hidden lg:flex h-1/2 lg:h-full md:w-1/2 relative">
          <Image src="/laptop.jpg" alt="" fill className="object-contain" priority={true} sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px"/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center text-center lg:text-left pt-40 sm:pt-16 lg:pt-0">
          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl font-bold">
            Transforming Ideas into&nbsp;
            <Typical
              steps={['Websites', 1000, 'Landing Pages', 1000, 'Web Apps', 1000, 'E-Commerce Stores', 1000]}
              loop={Infinity}
              wrapper="p"
              className="text-2xl md:text-4xl text-blue-700"
            />
             to Optimize Your Growth.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to Masterfed.
            Here, we take pride in creating efficient and elegant projects.
            Our attention to details means that we go above and beyond to deliver products that fulfil the clients needs and specifications.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center lg:justify-start">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-blue-900">
                My Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black hover:bg-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
