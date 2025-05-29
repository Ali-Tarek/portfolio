"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import React, { useState } from "react";
import { email, location, phone } from "@/lib/constants";

const contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  If you have any questions or want to work together, feel free
                  to reach out. I'm always open to discussing new projects and
                  collaborations.
                </p>
              </div>
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>{phone}</span>
                </div>{" "}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>{email}</span>
                </div>{" "}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>{location}</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <form
                className="flex flex-col gap-6 items-start"
                onSubmit={onSubmitHandler}
              >
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@domain.com"
                    required
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="message">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className="min-h-[160px] bg-white/5 border-white/10 max-w-full focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                    required
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="text-accent text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-400 text-sm">
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-lg btn-accent self-center sm:self-start disabled:opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
