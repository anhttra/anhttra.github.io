import React from "react";
import { Linkedin, Facebook, Github, LucideProps } from "lucide-react";
import { buttonVariants } from "@site/src/components/ui/button";
import Link from "@docusaurus/Link";

type Props = {};

type SocialLinkProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  to: string;
};

const SocialLink = ({ Icon, to }: SocialLinkProps) => {
  return (
    <Link
      to={to}
      className="
    border-solid border-[1px] rounded-full
    w-[50px] h-[50px] 
    flex items-center justify-center  
    text-black dark:text-white dark:hover:text-teal-400
    "
    >
      <Icon className="" size={28} />
    </Link>
  );
};

const HomepageProfile = (props: Props) => {
  return (
    <header className="flex items-center justify-center py-10 gap-4 w-[calc(100%-2rem)] mx-auto md:max-w-[1100px] border-gray-400 border-solid border-0 border-b-[1px]">
      <img
        src="logo/avatar.jpg"
        alt="Avatar"
        className="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-full"
      />
      <div className="flex flex-col items-start">
        <h1 className="text-xl md:text-3xl">Anh T. Tra</h1>
        <p className="text-md md:text-xl">Yet Another AI Engineer</p>
        <div className="flex gap-2 md:gap-4">
          <SocialLink
            Icon={Linkedin}
            to="https://www.linkedin.com/in/anhttra"
          />
          <SocialLink
            Icon={Facebook}
            to="https://www.facebook.com/trunganh0111"
          />
          <SocialLink Icon={Github} to="https://github.com/anhttra" />
        </div>
      </div>
    </header>
  );
};

export default HomepageProfile;
