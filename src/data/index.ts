import {HomeIcon, MapIcon} from "@heroicons/vue/24/outline"
  

  import Vue from "@/public/svg/vue-9.svg";
  import Node from "@/public/svg/node.svg";
  
  export const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: HomeIcon,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: MapIcon,
    },
  ];
  

  
  export const skillsItems = [
    {
      name: "Vue",
      description:
        "Worked in many vue projects for different sectors",
      logo: Vue,
    },
    {
      name: "Node",
      description:
        "Developed and mantained backend services",
      logo: Node,
    },
  ];
  