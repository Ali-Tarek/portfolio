import Link from "next/link";
import { socials } from "@/lib/constants";
import React from "react";

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            className={iconStyles}
            href={item.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
