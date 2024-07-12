import React from "react";
import SectionHeading from "../Sections/SectionHeading";
import SectionContent from "../Sections/SectionContent";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";
import Button from "@/app/_components/Button/Button";

type Props = {};

export default function Sponsors({}: Props) {
  return (
    <SectionContent sectionId="sponsors">
      <SectionHeading>Sponsors</SectionHeading>
      <Text
        className="font-bold text-center text-skin-secondary tracking-tight"
        size="large"
      >
        OwlHacks is made possible by its sponsors.
      </Text>

      <div className="flex items-center">
          <img
          className="w-52 h-52"
          src="https://static.mlh.io/brand-assets/sponsors/stand-out-stickers/stand-out-stickers-logo.svg" alt="" />
      </div>

      <Button
        height={50}
        onClick={() => {}}
        ismotion
        variants={{ onclick: { scale: 1.1 } }}
        whileTap="onclick"
      >
        Become a Sponsor
      </Button>
    </SectionContent>
  );
}
