"use client";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aboutParagraph, firstName, lastName, name } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import avatarImg from "@/public/assets/avatar.png";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";
import React from "react";
const About = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
            <Image src={avatarImg} alt="" className="z-20 relative" />
            <div className="w-full h-[65px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary via-primary/70 z-30" />
            <div className="absolute top-[80px] -left-[40px] z-10">
              <Blob containerStyles={"w-[430px] h-[430px]"} />
            </div>

            <div className="absolute bottom-[20px] left-[50%] transform -translate-x-1/2 z-40">
              <div className="backdrop-blur-md bg-white/5 rounded-full px-6 py-3 border border-white/10 shadow-lg">
                <Socials
                  containerStyles="flex gap-6 items-center justify-center"
                  iconStyles="w-[52px] h-[52px] text-[24px] text-accent hover:text-accent-hover transition-all duration-300 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 hover:scale-110 active:scale-95 backdrop-blur-sm border border-transparent hover:border-white/20"
                />
              </div>
            </div>
          </div>
          <ScrollArea className="w-full h-[680px]">
            <div className="">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">{firstName} </span>
                {lastName}
              </h2>
              <p className="pr-10 mb-12 text-justify text-sm md:text-base">
                {aboutParagraph}
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
