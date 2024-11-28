'use client';

import { 
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaJs,
  FaNodeJs,
  FaPhp,
  FaJava, 
} from 'react-icons/fa';

import { 
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si';

import { 
  BiLogoSpringBoot 
} from "react-icons/bi";

import Image from 'next/image';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@radix-ui/react-tabs';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from '@radix-ui/react-tooltip';

const about = {
  title: "About me",
  description: `
    I am a passionate and dedicated web developer with over a year of experience. 
    I specialize in full web development. 
    Whether you need a new application built from scratch or ongoing maintenance for existing projects, 
    I am available for freelance work to bring your ideas to life.
  `,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Lucca Tourinho",
    },
    {
      fieldName: "Phone",
      fieldValue: "+55 71 98761-5195",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Portuguese",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "luccatourinho@gmail.com",
    },
  ]
};

const experience = {
  title: "Work Experience",
  description: `
    Throughout my career, I have gained valuable experience working as a Full Stack Developer, both as an intern and as a freelancer. 
    I have contributed to various projects, ranging from full web application development to API design and integration. 
    These opportunities have honed my technical skills and reinforced my ability to adapt and meet diverse project requirements.
  `,
  items: [
    {
      company: "W5i",
      position: "Full Stack Developer Intern",
      duration: "2023 - 2024",
    },
    {
      company: "Salgados de Vó",
      position: "Full Stack Developer Freelance",
      duration: "2024 - 2025",
    },
    {
      company: "João Vitor Carvalho",
      position: "Api Development Freelance",
      duration: "2024 - 2025",
    },
  ]
};

const education = {
  title: "My Education",
  description: `
    My educational journey reflects my passion for technology and continuous learning. 
    I am currently pursuing a degree in Computer Science. 
    Alongside formal education, I have expanded my skill set through online courses, focusing on programming languages like Javascript, Java and PHP, as well as database systems like PostgreSQL. 
    My technical background began with a diploma in Mechatronics from SENAI-CIMATEC, where I developed a multidisciplinary understanding of electronics, and programming.
  `,
  items: [
    {
      institution: "Estácio",
      course: "Computer Science",
      duration: "2023 - Present",
    },
    {
      institution: "Online Courses",
      course: "PostgreSQL, Java, Php and Etc...",
      duration: "2022 - 2023",
    },
    {
      institution: "SENAI - CIMATEC",
      course: "Diploma in Mechatronics",
      duration: "2018 - 2019",
    }
  ]
}

const skills = {
  title: "My Skills",
  description: `
    Over the course of my journey as a developer, I have acquired a diverse set of skills spanning both front-end and back-end technologies. 
    Additionally, I have experience working with relational databases such as PostgreSQL and MySQL, ensuring robust data management. 
    This well-rounded skill set allows me to approach projects holistically and deliver end-to-end solutions.
  `,
  items: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "Spring Boot",
      icon: <BiLogoSpringBoot />,
    },
    {
      name: "PHP",
      icon: <FaPhp />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className='flex flex-col w-full max-w-[380px] max-auto xl:mx-0 gap-6'
          >
            <TabsTrigger 
              value='experience'
              className={`
                inline-flex items-center w-full bg-sky-950 
                justify-center whitespace-nowrap text-foreground 
                rounded-lg p-3 text-balance font-medium ring-offset-white 
                transition-all disabled:pointer-events-none disabled:opacity-50 
                data-[state=active]:bg-accent data-[state=active]:text-foreground 
                data-[state=active]:font-bold data-[state=active]:shadow-sm
              `}
            >
              Experience
            </TabsTrigger>
            <TabsTrigger 
              value='education'
              className={`
                inline-flex items-center w-full bg-sky-950 
                justify-center whitespace-nowrap text-foreground 
                rounded-lg p-3 text-balance font-medium ring-offset-white 
                transition-all disabled:pointer-events-none disabled:opacity-50 
                data-[state=active]:bg-accent data-[state=active]:text-foreground 
                data-[state=active]:font-bold data-[state=active]:shadow-sm
              `}
            >
              Education
            </TabsTrigger>
            <TabsTrigger 
              value='skills'
              className={`
                inline-flex items-center w-full bg-sky-950 
                justify-center whitespace-nowrap text-foreground 
                rounded-lg p-3 text-balance font-medium ring-offset-white 
                transition-all disabled:pointer-events-none disabled:opacity-50 
                data-[state=active]:bg-accent data-[state=active]:text-foreground 
                data-[state=active]:font-bold data-[state=active]:shadow-sm
              `}
            >
              Skills
            </TabsTrigger>
            <TabsTrigger 
              value='about'
              className={`
                inline-flex items-center w-full bg-sky-950
                justify-center whitespace-nowrap text-foreground 
                rounded-lg p-3 text-balance font-medium ring-offset-white 
                transition-all disabled:pointer-events-none disabled:opacity-50 
                data-[state=active]:bg-accent data-[state=active]:text-foreground 
                data-[state=active]:font-bold data-[state=active]:shadow-sm
              `}
            >
              About me
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className='min-h-[70vh] w-full'>
            {/* Experience */}
            <TabsContent
              value='experience'
              className={`
                w-full min-h-[480px] ring-offset-white focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 
                dark:ring-offset-background dark:focus-visible:ring-foreground
              `}
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-foreground/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-col-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className='bg-sky-950 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-foreground/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent
              value='education'
              className={`
                w-full min-h-[480px] ring-offset-white focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 
                dark:ring-offset-background dark:focus-visible:ring-foreground
              `}
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-foreground/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-col-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className='bg-sky-950 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] text-center lg:text-left'>{item.course}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-foreground/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent
              value='skills'
              className={`
                w-full h-full ring-offset-white focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 
                dark:ring-offset-background dark:focus-visible:ring-foreground
              `}
            >
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {skills.title}
                  </h3>
                  <p className='max-w-[600px] text-foreground/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                    <ul className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]'>
                      {skills.items.map((item, index) => {
                        return (
                          <li 
                            key={index} 
                            className=''
                          >
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-sky-950 rounded-xl flex justify-center items-center group'>
                                  <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className='capitalize'>{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value='about'
              className={`
                w-full min-h-[480px] ring-offset-white focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 
                dark:ring-offset-background dark:focus-visible:ring-foreground text-center xl:text-left
              `}
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-foreground/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-foreground/60'>{item.fieldName}</span>
                        <span className='font-extrabold'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
