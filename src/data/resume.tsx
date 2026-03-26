import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// ============================================================================
// 1. ACTIVE ICONS
// Process: Import components built manually in the components/ui/svgs folder.

import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Wordpress } from "@/components/ui/svgs/wordpress";
// ============================================================================

// ============================================================================
// 2. REACT ICONS ALTERNATIVE METHOD
// Process: Run npm install react-icons. Import icons from the specific pack.

import {
  SiGo,
  SiMongodb,
  SiCplusplus,
  SiExpress,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
// ============================================================================

export const DATA = {
  name: "Ittehad Ahmed Tausif",
  initials: "IAT",
  url: "https://github.com/IttehadT/",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  description:
    "Passionate about leveraging technology to drive innovation and solving challenges to create positive impact.",
  summary:
    "I am an undergraduate Computer Science Engineer at BRAC University (CGPA 3.90), expected to graduate in 2027. Currently, I serve as a Student Mentor for the First Year Advising Team (FYAT) and an Associate for BRACU Duburi AUV. I am passionate about programming, having skills in Python, Java, and C, and I love building web interfaces.",
  avatarUrl: "/me.png",

  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
    { name: "WordPress", icon: Wordpress },

    // ============================================================================
    // 2. REACT ICONS 
    { name: "C++", icon: SiCplusplus },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express", icon: SiExpress },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Vercel", icon: SiVercel },
    // ============================================================================ 
    

    // ============================================================================
    // 3. URL BASED ICONS COMMENTED OUT
    // Process: Create an anonymous function passing props and returning an image tag.
    // {
    //   name: "C++",
    //   icon: (props: any) => (
    //     <img
    //     {...props}
    //     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    //     alt="C++"
    //     />
    //   ),
    // },
    // ============================================================================
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ittehadtausif@gmail.com",
    tel: "+8801569123676",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/IttehadT/",
        icon: Icons.github,
        navbar: true, // Set to true to show this in the floating dock
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME", // <-- UPDATE THIS
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/YOUR_TWITTER_USERNAME", // <-- UPDATE THIS
        icon: Icons.x,
        navbar: false, // Set to false if you don't use Twitter
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/c/YOUR_YOUTUBE_CHANNEL", // <-- UPDATE THIS
        icon: Icons.youtube,
        navbar: false, // Set to false if you don't want this showing
      },
      email: {
        name: "Send Email",
        url: "mailto:ittehadtausif@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "First Year Advising Team (FYAT)",
      href: "https://www.bracu.ac.bd/", 
      badges: [],
      // location: "Dhaka, Bangladesh",
      title: "Student Mentor",
      logoUrl: "/bracu.png", 
      start: "2025",
      end: "Present",
      description:
        "Officially appointed to guide and support freshers, providing academic and campus-life assistance under the Office of Academic Advising (OAA), BRACU.",
    },
    {
      company: "Code in Place by Stanford",
      href: "https://codeinplace.stanford.edu/",
      badges: ["Remote"],
      // location: "Remote - Stanford, CA",
      title: "Section Leader - Mentor",
      logoUrl: "/me.png", 
      start: "2025",
      end: "2025",
      description:
        "Supported students through the first half of Stanford University's CS106A. Built extended skills, practiced teaching, and showed Python mastery.",
    },
    {
      company: "BRACU Duburi AUV",
      href: "https://www.facebook.com/bracuduburi/", 
      badges: [],
      // location: "Dhaka, Bangladesh",
      title: "Associate - Web Design & Development",
      logoUrl: "/duburi.png", 
      start: "2023",
      end: "Present",
      description:
        "Developed responsive web interfaces, ensured efficiency and scalability, and enhanced functionality and user experience through teamwork.",
    },
  ],
  
  education: [
    {
      school: "BRAC University",
      href: "https://www.bracu.ac.bd/",
      degree: "B. Sc. in Computer Science and Engineering",
      result: "CGPA: Pore bolbo :(",
      logoUrl: "/bracu.png",
      start: "2023",
      end: "2027",
      expectedGraduation: "Sep, 2027",
    },
    {
      school: "Dhaka Residential Model College",
      href: "http://www.drmc.edu.bd/",
      degree: "Higher Secondary Certificate - HSC",
      result: "GPA: 5.00",
      logoUrl: "/drmc.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Dhaka Residential Model College",
      href: "http://www.drmc.edu.bd/",
      degree: "Secondary School Certificate - SSC",
      result: "GPA: 5.00",
      logoUrl: "/drmc.png",
      start: "2018",
      end: "2020",
    },
  ],

  // projects: [
  //   {
  //     title: "Chat Collect",
  //     href: "https://chatcollect.com",
  //     dates: "Jan 2024 - Feb 2024",
  //     active: true,
  //     description:
  //       "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://chatcollect.com",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  //   },    
  // ],

  projects: [
    {
      title: "BRACU Utilities App",
      href: "",
      dates: "2026",
      active: true,
      description: "Developing a web application for BRAC University students featuring a CGPA calculator and a FYAT Routine Mapper.",
      technologies: ["Next.js", "React", "TailwindCSS"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Live Precious Metals Tracker",
      href: "",
      dates: "2026",
      active: true,
      description: "Building a platform to track live gold and silver prices utilizing web scraping, secure data storage, and data visualization.",
      technologies: ["Python", "Flask", "PostgreSQL", "BeautifulSoup"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI Integration Platform",
      href: "",
      dates: "2026",
      active: true,
      description: "Creating a comprehensive web application featuring OAuth authentication, an AI chatbot, and interactive graphics.",
      technologies: ["Next.js", "React", "OAuth"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Interactive Developer Portfolio",
      href: "https://github.com/IttehadT/My-Portfolio",
      dates: "2026",
      active: true,
      description: "Customizing and deploying a modern portfolio website utilizing Next.js, Magic UI, and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/IttehadT/My-Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],


  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],

  coCurricular: [
    {
      company: "Robotics Club of BRAC University",
      href: "www.crabu.app", 
      badges: ['Research', 'Management'],
      // location: "Dhaka, Bangladesh",
      title: "Apprentice of Research and Project Management",
      logoUrl: "/robu.png", 
      start: "2023",
      end: "Present",
      description: "Collaborated on research initiatives and assisted in managing club projects.",
      images: [{ title: "Profile Picture", url: '/me.png' }], // Completely optional, left empty here
    },
    {
      company: "BRAC University Computer Club",
      href: "https://www.bucc.com", // Replace with actual URL if available
      badges: [],
      // location: "Dhaka, Bangladesh",
      title: "Member of Event Management",
      logoUrl: "/bucc.png", 
      start: "2023",
      end: "Present",
      description: "Organized and managed technical events, workshops, and seminars for university students. Check out our recent tech fest promotions below!",
      images: [
        { title: "Tech Fest Banner", url: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg" },
        { title: "Workshop Poster", url: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png" }
      ],
    },
    {
      company: "BRAC University Adventure Club",
      href: "",
      badges: ["Leadership"],
      // location: "Dhaka, Bangladesh",
      title: "Member of Human Resource",
      logoUrl: "/buac.png", 
      start: "2023",
      end: "Present",
      description: "Assisted in recruiting new members, organizing team-building activities, and managing club personnel.",
      images: [],
    },
    {
      company: "Bangladesh National Cadet Corps",
      href: "",
      badges: [],
      // location: "Dhaka, Bangladesh",
      title: "Cadet Corporal of 1 BNCC Battalion",
      logoUrl: "/bncc.png", 
      start: "2015",
      end: "2018",
      description: "Led cadet squads, participated in national drills, and developed strong disciplinary and leadership qualities.",
      images: [],
    },
    {
      company: "DGBHS Red Crescent Society",
      href: "",
      badges: ['Test'],
      // location: "Dhaka, Bangladesh",
      title: "Red Crescent Youth",
      logoUrl: "/redcrescent.png", 
      start: "2015",
      end: "2016",
      description: "Participated in humanitarian activities, disaster management training, and first-aid camps.",
      images: [],
    },
  ],

  awards: [
    "100% Scholarship BRAC University",
    "Placed on VC List 4 times",
    "Placed on Dean List 3 times",
    "Bronze The Duke of Edinburgh",
  ],
  languages: [
    { name: "Bangla", proficiency: "Fluent" },
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Verbal Proficiency" },
    { name: "Urdu", proficiency: "Verbal Proficiency" },
  ],
  hobbies: ["Swimming", "Cycling", "Gaming", "Driving"],
} as const;
