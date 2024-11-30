'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectItem,
  SelectLabel, 
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

import { motion } from "framer-motion";
import { SelectGroup } from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+55 71 9 8761-5195',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'luccatourinho@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: '41830-590, Pituba, Salvador, Bahia, Brazil',
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-sky-950 rounded-xl">
              <h3 className="text-4xl text-accent">Here is how you contact me</h3>
              <p className="text-foreground/60">
                Interested in web development, API integration, or scaling your project? Let me know how I can assist you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>

              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">API Development</SelectItem>
                    <SelectItem value="mst">Optimization or Scaling</SelectItem>
                    <SelectItem value="Maintenance or Support">Maintenance or Support</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea 
                className="h-[200px]"
                placeholder="Write your message here."
              />

              <Button size={"md"} className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
            
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li 
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-sky-950 text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[25px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/60">
                        {item.title}
                      </p>
                      <h3 className="text-xl">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
