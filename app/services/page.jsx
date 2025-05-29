"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowOutward } from "react-icons/md";
import { services } from "@/lib/constants";
import Link from "next/link";
import React from "react";
const Services = () => {
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
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            Custom <span className="text-accent">Web Solutions</span> to Boost
            Your Business
          </h2>
          <button className="btn btn-lg btn-accent flex gap-2 ">
            <Link href="/contact">Let's work now.</Link>{" "}
            <MdArrowOutward className="text-2xl" />
          </button>
        </div>

        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-[320px]"
        >
          {services.map((service, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-secondary/90 w-full h-64 sm:h-72 rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-12">
                    <h4 className="h4">{service.id}</h4>
                    <div className="bg-accent rounded-full flex hover:bg-accent-hover items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2">
                      <h5 className="">{service.title}</h5>
                    </div>
                  </div>
                  <h5 className="font-medium text-gray-300 text-sm sm:text-sm md:text-base lg:text-lg">
                    {service.description}
                  </h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Services;
