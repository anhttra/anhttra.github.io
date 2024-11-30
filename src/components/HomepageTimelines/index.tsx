import React from "react";
import Heading from "@theme/Heading";

import TimelineCard from "./timeline-card";

type Props = {};

type TimelineItem = {
  startDate: string;
  endDate: string;
  iconSrc: string;
  desc: string;
};

const TimelineList: TimelineItem[] = [
  {
    startDate: "12/23",
    endDate: "06/24",
    iconSrc: "logo/spartan-logo.svg",
    desc: "Worked at Spartan Dev as Staff AI Engineer.",
  },
  {
    startDate: "09/20",
    endDate: "06/23",
    iconSrc: "logo/dsoft-logo.svg",
    desc: "I was the Head of THOR Lab at D-Soft JSC. I had developed core AI modules, especially Image Processing and Video Analysis using Deep Learning for the company's products and customer's projects. I had designed architectures of CV & NLP systems using the latest AI/DL technologies. I had managed a R&D Lab (~ 20 mem. including AI engineers and interns).",
  },
  {
    startDate: "08/19",
    endDate: "08/20",
    iconSrc: "logo/dsoft-logo.svg",
    desc: "I was the R&D Group Leader (AI Division) at D-Soft JSC. My main role was Senior Research AI Engineer and Technical Project Manager. I had developed and improved performances of Person Detection, Person Tracking, Face Recognition, Age/Gender Estimation models. I had also designed and implemented back-ends for AI systems.",
  },
  {
    startDate: "01/19",
    endDate: "06/19",
    iconSrc: "logo/hitachi-logo.png",
    desc: "I was a Senior Consultant (SC2) at Hitachi Consulting Vietnam (now Hitachi Vantara VN). I had led the AI RD team which focuses on designing and consulting Digital Transformation solutions. My team had applied state-of-the-art ML/DL algorithms of Image/Video Analysis and Natural Language Processing. I had also worked in Data Insight, Cloud Computing and Edge Computing.",
  },
  {
    startDate: "11/17",
    endDate: "12/18",
    iconSrc: "logo/hitachi-logo.png",
    desc: "I was a Seninor Consultant (SC1) at Hitachi Consulting Vietnam (now Hitachi Vantara VN). I have worked in DL based Gait Recognition, Recommender System, Image Analysis projects. My role was to propose ML/DL technical solutions for Smart Agriculture, Predictive Maintenance, and Video Object Detection.",
  },
  {
    startDate: "08/13",
    endDate: "02/18",
    iconSrc: "logo/ntu-logo.webp",
    desc: "I was PhD. Student at Interdisciplinary Graduate School, Nanyang Technological University, Singapore. I was belong to Rapid-Rich Object Search Laboratory (RoseLab). I had completed Computer Sciences courses with focus on learning Digital Image Signal Processing. I had performed four years of studies and published one research paper, before exiting program.",
  },
  {
    startDate: "06/12",
    endDate: "02/13",
    iconSrc: "logo/acronic-logo.jpeg",
    desc: "I was a Hardware Engineer at Acronics System Inc. I had designed FPGA IP Cores using Verilog HDL on Altera/Xilinx devices and programmed embedded system algorithms using C/C++ on Microchip MCUs.",
  },
  {
    startDate: "08/07",
    endDate: "06/12",
    iconSrc: "logo/bkdn-logo.png",
    desc: "I got my bachelor degree of Telecommunication (with Computer Science Minor) at Faculty of Electronic and Telecommunication, Danang University of Technology, Vietnam. My GPA is 3.47/4.00.",
  },
];

const HomepageTimelines = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-start max-w-[1000px] px-4 md:px-10">
        <h2 className="text-2xl pb-2">
          <mark>My Sacred Timeline ...</mark>
        </h2>
        {TimelineList.map((props, idx) => (
          <TimelineCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
};

export default HomepageTimelines;
