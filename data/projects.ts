export type Category =
  | "Hospital"
  | "Travel"
  | "Car Service"
  | "Finance"
  | "Education"
  | "Food"
  | "Ecommerce";

export type Project = {
  id: string;
  title: string;
  category: Category;
  description: string;
  desktopSrc: string;
  mobileSrc: string;
};

export const categories: Category[] = [
  "Hospital",
  "Travel",
  "Car Service",
  "Finance",
  "Education",
  "Food",
  "Ecommerce",
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "MediCare Plus",
    category: "Hospital",
    description: "Hospital appointment, lab reports, and telemedicine.",
    desktopSrc: "image1.jpeg",
    mobileSrc: "/healthcare-mobile-app.png",
  },
  {
    id: "p2",
    title: "SkyRoute",
    category: "Travel",
    description: "Travel bookings with realtime flight status.",
    desktopSrc: "image1.jpeg",
    mobileSrc: "/placeholder-hqdr8.png",
  },
  {
    id: "p3",
    title: "WrenchWorks",
    category: "Car Service",
    description: "Garage scheduling and invoicing for auto services.",
    desktopSrc: "image1.jpeg",
    mobileSrc: "/placeholder-rn1ul.png",
  },
  {
    id: "p4",
    title: "FundSight",
    category: "Finance",
    description: "Investments, budgeting, and analytics dashboards.",
    desktopSrc: "image1.jpeg",
    mobileSrc: "/placeholder-kks89.png",
  },
  {
    id: "p5",
    title: "LearnLoop",
    category: "Education",
    description: "Courses, live classes, and progress tracking.",
    desktopSrc: "image1.jpeg",
    mobileSrc: "/placeholder-27qt3.png",
  },
  {
    id: "p6",
    title: "TasteHub",
    category: "Food",
    description: "Food delivery and restaurant discovery.",
    desktopSrc: "image1.jpeg",
    mobileSrc: "/food-ordering-app.png",
  },
  {
    id: "p7",
    title: "ShopForge",
    category: "Ecommerce",
    description: "Modern storefront and product curation.",
    desktopSrc: "image1.jpeg",
    mobileSrc: "/placeholder-u3fao.png",
  },
];
