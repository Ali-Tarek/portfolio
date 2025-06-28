import { firstName } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="text-2xl font-bold">
      {firstName}
      <span className="text-accent text-4xl">.</span>
    </Link>
  );
};

export default Logo;
