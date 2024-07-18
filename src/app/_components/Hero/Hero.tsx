"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../Navbar/Navbar";
import SectionContent from "../Sections/SectionContent";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <Navigation></Navigation>
      <SectionContent sectionId="home">
        <Image
          src="/hero_content/background.png"
          alt="Hero Logo"
          width={1920}
          height={1080}
          quality={100}
          className="rounded-2xl w-full lg:h-[750px] h-[500px] block"

        />
        {/* <div
          className="rounded-2xl bg-[#563853] w-full lg:h-[950px] h-[400px] block"
          id="sky"
        ></div> */}
      </SectionContent>
    </>
  );
}
