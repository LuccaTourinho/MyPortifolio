'use client';

import { motion } from "framer-motion";

const totalSteps = 13;

const Stairs = () => {
  return (
    <>
        {[...Array(totalSteps)].map((_, index) => {
            return (
                <motion.div 
                    key={index} 
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    exit={{ left: ["100%", "0%"] }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: (totalSteps - index - 1) * 0.05,
                    }}
                    className={`w-full h-full relative ${index % 2 === 0 ? 'bg-primary' : 'bg-foreground'}`}
                />
            );
        })} 
    </>
  )
}

export default Stairs;
