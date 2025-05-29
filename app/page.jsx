"use client";
import Blob from "@/components/Blob";
import { motion } from "framer-motion";
import Image from "next/image";
import avatarImg from "@/public/assets/avatar.png";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
import Link from "next/link";
import React from "react";
import {
  email,
  name,
  phone,
  typingSequence,
  firstName,
  briefDescription,
} from "@/lib/constants";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      className="flex items-center h-screen"
    >
      <Pattern />
      <div className="flex flex-col xl:flex-row w-full items-center justify-between">
        {/* Avatar Section - Appears first on mobile */}
        <div className="flex-1 relative z-20 w-full max-w-[180px] sm:max-w-[240px] md:max-w-[300px] xl:max-w-full xl:order-2 mb-8 xl:mb-0">
          {/* Show Blob on all screen sizes */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Blob containerStyles="w-full h-full" />

            <Image
              src={avatarImg}
              alt="Portrait"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
              quality={95}
              className="absolute inset-0 object-cover object-center mx-auto scale-90 xl:scale-85 translate-x-4"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-primary/80 via-primary/70 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Text Content - Appears second on mobile */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left xl:order-1">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I'm {firstName},
            <br />
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px] px-2 sm:px-0">
            {briefDescription}
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-2">
              <Link href="/contact">Let's work together.</Link>
              <MdArrowOutward className="text-xl" />
            </div>
          </button>
          {/* Contact Section */}
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-8 xl:items-center mb-12 xl:mb-0">
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>{phone}</span>
            </div>
            {""}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>{email}</span>
            </div>
          </div>
          {/* Socials */}
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2
             2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] 
            flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
