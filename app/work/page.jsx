"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { projects, categories } from "@/lib/constants";

import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const work = () => {
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
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        <Tabs
          defaultValue="Full Stack"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-[max] xl:h-[460px] "
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full px-4">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                <h3 className="h3">{project.title}</h3>
                                <p className="text-white/60 ">
                                  {project.description}
                                </p>
                                <div className="">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <TooltipProvider key={index}>
                                          <Tooltip>
                                            <TooltipTrigger className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer bg-[#a883ff]/13 group">
                                              <div className="text-xl group-hover:text-accent transition-all duration-300 ">
                                                {item.icon}
                                              </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="">
                                              <p>{item.name}</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      );
                                    })}
                                  </ul>
                                </div>
                                <div className="flex sm:flex-row gap-4 items-start mb-12 xl:mb-0">
                                  {project.link && (
                                    <Link href={project.link} target="_blank">
                                      <button className="btn btn-accent px-6">
                                        <MdArrowOutward className="text-lg" />
                                        {/* <span>Live Project</span> */}
                                      </button>
                                    </Link>
                                  )}{" "}
                                  {project.github && (
                                    <Link href={project.github} target="_blank">
                                      <button className="btn btn-white px-6">
                                        <FaGithub className="text-lg" />
                                        {/* <span>Github Repo</span> */}
                                      </button>
                                    </Link>
                                  )}
                                </div>
                              </div>
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default work;
