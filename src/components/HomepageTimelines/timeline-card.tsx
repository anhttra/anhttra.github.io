import React from "react";
import clsx from "clsx";

import styles from "./timeline-card.module.css";

interface Props {
  startDate: string;
  endDate: string;
  iconSrc: string;
  desc: string;
}

const TimelineCard = ({ startDate, endDate, iconSrc, desc }: Props) => {
  return (
    <div className="flex">
      <div className="relative border-solid border-0 border-r-[1px]">
        <div className="w-[100px] md:w-[150px] pr-3">
          <img
            src={iconSrc}
            className={
              "w-[100%] rounded dark:border-white dark:border-[1px] " +
              (iconSrc.endsWith("svg")
                ? "bg-gray-800 px-1 py-2 dark:border-solid"
                : "")
            }
          />
        </div>
        <span className="absolute top-[3px] right-[-7px] h-[13px] w-[13px] bg-white dark:bg-black  rounded-full border-solid border-2"></span>
      </div>
      <div className="pl-3">
        <div className="text-sm">
          {startDate}-{endDate}
        </div>
        <div className="w-full pb-4 text-justify">{desc}</div>
      </div>
    </div>
  );
};

export default TimelineCard;
