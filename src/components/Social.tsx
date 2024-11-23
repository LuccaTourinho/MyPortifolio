'use client';

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/LuccaTourinho"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/luccatourinho/"}
]

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
  }

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => { 
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
    })}
    </div>
  );
}

export default Social;
