// Copyright Aditya Tiwari 2026. All Rights Reserved.
// Project: Folio
// Author contact: https://www.linkedin.com/in/adityatiwari/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Aditya Tiwari",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://adityatiwari.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "adityatiwari21766@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/adityaehhhh/",
  github: "https://github.com/adityaehhhh",
  instagram: "https://www.instagram.com/adityaehhhh/",
  twitter: "https://x.com/AdityaTheGenZ",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Res-Q-Rush - Ontime Emergency Response",
    image: "/projects/res.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Res-Q-Rush connects you to the nearest hospitals and ambulances when every second matters.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://res-q-rush.vercel.app/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "NeuroBloom - AI-Powered Mental Wellness",
    image: "/projects/neuro.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "AI-Powered Mental Wellness Platform",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://neuro-bloom-xc4e.vercel.app/",
    tech: ["react", "MongoDB", "gsap", "tailwind"],
  },
  {
    name: "Escorts Kubota - Tractor Identification Scanner",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Tractor Identification Scanner for Escorts Kubota Pvt. Ltd.",
    gradient: ["#245B57", "#004741"],
    url: "https://escorts-summer-internship.vercel.app/scanner",
    tech: ["react", "PostgresSQL", "gsap"],
  },
  {
    name: "NewsIntel - AI-Powered News Analysis",
    image: "/projects/NewsIntel.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "AI-Powered News Analysis Platform to Combat Misinformation",
    gradient: ["#003052", "#167187"],
    url: "https://github.com/adityaehhhh/NewsIntel",
    tech: ["tailwind", "react", "gsap", "Python"],
  },
  {
    name: "KNNX - Transaction Assurance Platform",
    image: "/projects/knnx.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Transaction Assurance Platform",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://knnx.com/",
    tech: ["tailwind", "next", "typescript"],
  },
  {
    name: "Narrative Nexus - AI Text Analyser and Summarizer",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "AI-Powered Text Analysis and Summarization Platform",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://github.com/adityaehhhh/Infosys-Narrative-Nexus",
    tech: ["Python"],
  },
  {
    name: "Avshesha Anveshanam - The Space Debris Tracker",
    image: "/projects/debri.png",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Space Debris Tracker for Ashoka SpaceCon 3.0",
    gradient: ["#5E4C06", "#746528"],
    url: "https://github.com/adityaehhhh/Debris-Detector",
    tech: ["Python"],
  },
  {
    name: "Stranger Things - An Ultimate Fan Hub",
    image: "/projects/st.png",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "An Ultimate Fan Hub for Stranger Things",
    gradient: ["#5E4C06", "#746528"],
    url: "https://stranger-things-flax.vercel.app/",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "Valorant - An Ultimate Arena",
    image: "/projects/valo.png",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "An Ultimate Arena for Valorant",
    gradient: ["#5E4C06", "#746528"],
    url: "https://valo-website.vercel.app/",
    tech: ["react", "tailwind", "gsap"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "MongoDB",
    "gsap",
    "tailwind",
    "Python",
    "html",
    "css",
    "MySQL",
    "PostgresSQL",
    "Docker"
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2026",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Mentor at Social Winter of Code",
    size: ItemSize.SMALL,
    subtitle:
      "My role is to guide and mentor students for their open source contributions in projects.",
    image: "/timeline/swoc.png",
    slideImage: "/timeline/swoc (2).png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Infosys Springboard (Intern)",
    size: ItemSize.SMALL,
    subtitle:
      "Selected Amongst 60L+ applicants for a competitive internship program. Worked on a project for building a design system to predict news correctness using machine learning.",
    image: "/timeline/infosys.webp",
    slideImage: "/timeline/info.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Team Lead ( ACM GGSIPU Chapter )",
    size: ItemSize.SMALL,
    subtitle:
      "Led a team of 10+ members in organizing events and managing the ACM GGSIPU chapter.",
    image: "/timeline/acm.webp",
    slideImage: "/timeline/acm.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Voyage (Winner)",
    size: ItemSize.SMALL,
    subtitle:
      "Won the UX Voyage competition organized by NSUT, showcasing my skills in user experience design and problem-solving.",
    image: "/timeline/nsut.png",
    slideImage: "/timeline/ux.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance",
    image: "/timeline/knnx.svg",
    slideImage: "/timeline/knnx.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  

  {
    type: NodeTypes.CHECKPOINT,
    title: "Infosys Springboard 6.0 (Learner)",
    size: ItemSize.SMALL,
    subtitle:
      "Changed my field from developement to AI/ML. Completed 6 months of intensive training and project work in AI/ML.",
    image: "/timeline/infosys.webp",
    slideImage: "/timeline/infosys.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Code For Bharat 2.0 (Finalist)",
    size: ItemSize.SMALL,
    subtitle:
      "Top 3 amongst 1,63000+ applicants for a national level coding competition organized by Govt. of India and HackWithIndia.",
    image: "/timeline/code.webp",
    slideImage: "/timeline/code.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Pixel Pallete (Finalist)",
    size: ItemSize.SMALL,
    subtitle:
      "Secured 2nd position in Pixel Pallete, a UI/UX design competition organized by Manipal University.",
    image: "/timeline/manipal.webp",
    slideImage: "/timeline/pixel.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "SpaceCon 3.0 (Winner)",
    size: ItemSize.SMALL,
    subtitle:
      "Won SpaceCon 3.0, a space-themed hackathon organized by Ashoka University.",
    image: "/timeline/ashoka.webp",
    slideImage: "/timeline/space.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Escorts Kubota Pvt. Ltd. (Intern)",
    size: ItemSize.SMALL,
    subtitle:
      "Won SpaceCon 3.0, a space-themed hackathon organized by Ashoka University.",
    image: "/timeline/escorts.webp",
    slideImage: "/timeline/escorts.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Member (ACM GGSIPU Chapter)",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed in organizing events and managing the ACM GGSIPU chapter.",
    image: "/timeline/acm.webp",
    slideImage: "/timeline/acm.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "NITI Policy Hackathon (Winner)",
    size: ItemSize.SMALL,
    subtitle:
      "Won the NITI Policy Hackathon organized by NITI Aayog at Kirori Mal College, Delhi University.",
    image: "/timeline/niti.webp",
    slideImage: "/timeline/niti.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Love Babbar Web Development Course (Learner)",
    size: ItemSize.SMALL,
    subtitle:
      "Started Learning about web development precisely MERN Stack. Completed 10+ projects on web development.",
    image: "/timeline/babbar.gif",
    slideImage: "/timeline/babbar.webp",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "Joined GGSIPU (Student)",
    size: ItemSize.SMALL,
    subtitle:
      "Started my journey as a student at GGSIPU. Pursuing B.Tech in Computer Science and Engineering.",
    image: "/timeline/ipu.png",
    slideImage: "/timeline/ipu.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
