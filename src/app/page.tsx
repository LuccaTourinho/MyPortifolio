'use client';

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home: React.FC = () => {
  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';  
    link.download = 'cv.pdf';  
    link.click();  
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Full-Stack Developer</span>
            <h1>
              Hello I`m <br/><span className="text-accent">Lucca Tourinho</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-foreground/80">
              I build full-stack applications, handling everything from database design to user interfaces, using the latest and most effective technologies.
            </p>

            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant={"outline"} 
                size={"lg"} 
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles={"flex gap-6"} 
                  iconStyles={"w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-foreground transition-all duration-500"}
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home;

