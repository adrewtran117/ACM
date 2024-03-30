import React from "react";
import SectionHeading from "../Sections/SectionHeading";
import SectionContent from "../Sections/SectionContent";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";
import Button from "@/app/Button/Button";

type Props = {};

export default function Sponsors({}: Props) {
  return (
    <SectionContent sectionId="sponsors">
      <SectionHeading>Sponsors</SectionHeading>
      <Text className="font-bold text-center" size="large">
        OwlHacks is made possible by its sponsors.
      </Text>
      <Button height={50} onClick={() => {}}>
        Become a Sponsor
      </Button>
    </SectionContent>
  );
}