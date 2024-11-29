'use client';

import { motion } from "framer-motion";
import React, { useState} from "react";

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: `
      project 1 description
    `,
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "TypeScript",
      },
      {
        name: "TailwindCSS",
      }
    ],
    image: "/teste.png",
    link: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: `
      project 2 description
    `,
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: "/teste.png",
    link: "",
    github: "",
  },
  {
    num: "03",
    category: "API",
    title: "project 3",
    description: `
      project 3 description
    `,
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: "/teste.png",
    link: "",
    github: "",
  },
]

interface Swiper {
  activeIndex: number;
}

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: Swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-foreground/60">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li 
                      key={index} 
                      className="text-xl text-accent"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-foreground/20"></div>
              <div className="flex items-center gap-4">
                {/* Link to project */}
                <Link href={project.link}>
                  <TooltipProvider
                    delayDuration={100}
                  >
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-sky-950 flex items-center justify-center group">
                        <BsArrowUpRight className="text-foreground text-3xl group-hover:text-accent transition-all duration-500:"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Go to project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Link to github */}
                <Link href={project.github}>
                  <TooltipProvider
                    delayDuration={100}
                  >
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-sky-950 flex items-center justify-center group">
                        <BsGithub className="text-foreground text-3xl group-hover:text-accent transition-all duration-500:"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="xl:h-[520px] mb-12" 
                onSlideChange={handleSlideChange}
              >
                {projects.map((item, index) => {
                  return (
                    <SwiperSlide 
                      key={index}
                      className="w-full"
                    >
                      <div className="h-[460px] relative group flex justify-center items-center bg-sky-950">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-background/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image src={item.image} fill className="object-cover" alt="project image"/>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
                <WorkSliderBtns 
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                  btnStyles="bg-accent hover:bg-accent/70 text-foreground text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500" 
                  iconsStyles="text-foreground text-3xl"
                />
              </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
