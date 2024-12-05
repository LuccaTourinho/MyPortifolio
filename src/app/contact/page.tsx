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

import {
  ContactSchema,
  ContactType,
  validateField,
} from "../../lib/definitions";

import { useState, useEffect} from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


interface InfoValues {
  icon: JSX.Element;
  title: string;
  description: string;
}

const info: InfoValues[] = [
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
];

const Contact: React.FC = () => { 
  const [alert, setAlert] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string | null>>({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { 
      isSubmitting,
      errors
    },
    trigger,
    reset
  } = useForm<ContactType>({
    resolver: zodResolver(ContactSchema)
  });

  useEffect(() => {
    ['firstName', 'lastName', 'email', 'phone', 'service', 'message'].forEach((fieldChoosen) => {
      handleValidation(fieldChoosen as keyof ContactType, '');
    });
  }, []);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  // useEffect(() => {
  //   trigger();
  // }, [trigger]);

  const handleValidation = (field: keyof ContactType, value: string) => {
    try {
      setValue(field, value);
      const validation = validateField(field, value); 
  
      if (validation.success) {
        setFieldErrors((prev) => ({
          ...prev,
          [field]: null, 
        }));
      } else {
        const errorMessages = validation.error.errors.map((error) => error.message).join(" \n");
      
        setFieldErrors((prev) => ({
          ...prev,
          [field]: errorMessages,  
        }));
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map((err) => err.message).join(" \n");

        setFieldErrors((prev) => ({
          ...prev,
          [field]: errorMessages || "Unknown error",
        }));
      } else {
        console.error("Unexpected error: ", error); 
      }
    }
  };

  const formatErrorMessages = (errors: string) => {
    return errors.split('\n').map((line, index) => (
      <span key={index}>{line}<br /></span>
    ));
  };

  const onSubmit = async (data: ContactType) => {
    console.log(data);
    try {
      console.log("Form submitted:", data);
      setAlert("Message sent successfully!");
    } catch (error) {
      console.error('Error:', error);
      setAlert('An error occurred while submitting the form.');
    } finally {
      reset();
    }
  };


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
            <form
              onSubmit={handleSubmit(onSubmit)} 
              className="flex flex-col gap-6 p-10 bg-sky-950 rounded-xl"
            >
              <h3 className="text-4xl text-accent">Here is how you contact me</h3>
              <p className="text-foreground/60">
                Interested in web development, API integration, or scaling your project? Let me know how I can assist you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* First Name */}
                <div className="flex flex-col gap-1">
                  <Input
                    type="text"
                    placeholder="First Name"
                    {...register('firstName')}
                    onChange={(e) => handleValidation("firstName", e.target.value)}
                  />
                  {fieldErrors.firstName && (
                    <p className="text-foreground text-xs">{formatErrorMessages(fieldErrors.firstName)}</p>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1">
                  <Input
                    type="text"
                    placeholder="Last Name"
                    {...register('lastName')}
                    onChange={(e) => handleValidation("lastName", e.target.value)}
                  />
                  {fieldErrors.lastName && (
                    <p className="text-foreground text-xs">{formatErrorMessages(fieldErrors.lastName)}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                    onChange={(e) => handleValidation("email", e.target.value)}
                  />
                  {fieldErrors.email && (
                    <p className="text-foreground text-xs">{formatErrorMessages(fieldErrors.email)}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <Input
                    type="text"
                    placeholder="Phone"
                    {...register('phone')}
                    onChange={(e) => handleValidation("phone", e.target.value)}
                  />
                  {fieldErrors.phone && (
                    <p className="text-foreground text-xs">{formatErrorMessages(fieldErrors.phone)}</p>
                  )}
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1">
                <Select onValueChange={(value) => handleValidation("service", value)}>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      {['Web Development', 'API Development', 'Optimization or Scaling', 'Maintenance or Support'].map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldErrors.service && (
                  <p className="text-foreground text-xs">{formatErrorMessages(fieldErrors.service)}</p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <Textarea 
                  className="h-[200px]"
                  // name="message"
                  placeholder="Write your message here."
                  {...register("message")}
                  onChange={(e) => handleValidation("message", e.target.value)}
                />
                {fieldErrors.message && (
                  <p className="text-foreground text-xs">{formatErrorMessages(fieldErrors.message)}</p>
                )}
              </div>

              {/* Button */}
              <div className="flex flex-col gap-1">
                <Button
                  size="md"
                  className={`max-w-40`}
                  disabled={isSubmitting} 
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {alert && <p className="text-foreground text-xs">{alert}</p>}
                {/* {Object.values(errors).map((error, index) => (
                  <p key={index} className="text-foreground text-xs">
                    {error?.message}
                  </p>
                ))} */}
              </div>
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
