'use client';

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Web Development",
    description: "Build complete web applications, including interactive front-end interfaces and robust back-end systems.",
    href: "/contact",
  },
  {
    num: "02",
    title: "API Development and Integration",
    description: "Create and integrate APIs to connect applications or enable communication between systems.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Performance Optimization and Scalability",
    description: "Enhance the performance of existing systems and ensure they scale to handle growing user demands.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Application Maintenance and Support",
    description: "Provide ongoing support, bug fixes, and feature enhancements for existing applications.",
    href: "/contact",
  },
];


const Services = () => {
  return (
      <section className="'min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div 
            initial={{opacity: 0}}
            animate={{
              opacity: 1, 
              transition: {
                delay: 2.4,
                duration: 0.4,
                ease: "easeInOut",
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div key={index} className="flex-1 flex flex-col justify-between gap-6 group">
                  {/* Top */}
                  <div className="w-full flex items-center justify-between">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link 
                      href={service.href} 
                      className={`
                          w-[70px] h-[70px] rounded-full 
                          bg-foreground group-hover:bg-accent text-accent group-hover:text-foreground
                          transition-all duration-500 
                          flex items-center justify-center 
                          hover:-rotate-45`}
                    >
                      <BsArrowDownRight className="text-3xl"/>
                    </Link>
                  </div>

                  {/* Title */}
                  <h2 className="text-[42px] font-bold leading-none group-hover:">{service.title}</h2>

                  {/* Description */}
                  <p className="text-foreground/60">{service.description}</p>

                  {/* Border */}
                  <div className="border-b border-foreground/20 w-full">
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>
  )
}

export default Services
