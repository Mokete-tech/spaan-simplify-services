export const categories = [
  {
    id: "home-maintenance",
    name: "Home Maintenance & Repair",
    subcategories: [
      "Handyman Services",
      "Pest Control",
      "Painting",
      "Plumbing",
      "Electrical",
      "Roof Repairs",
      "Cabinet Installation",
    ],
  },
  {
    id: "outdoor",
    name: "Outdoor & Landscaping",
    subcategories: [
      "Lawn Care",
      "Tree & Bush Trimming",
      "Snow Removal",
      "Gardening",
      "Pressure Washing",
      "Irrigation Systems",
      "Outdoor Structures",
    ],
  },
  {
    id: "cleaning",
    name: "Cleaning Services",
    subcategories: [
      "House Cleaning",
      "Deep Cleaning",
      "Window Cleaning",
      "Carpet Cleaning",
      "Post-Construction Cleanup",
      "Commercial Cleaning",
      "Specialized Sanitization",
    ],
  },
  {
    id: "moving",
    name: "Moving & Storage",
    subcategories: [
      "Packing & Unpacking",
      "Local/Long-Distance Moving Help",
      "Furniture Assembly/Disassembly",
      "Storage Organization",
      "Heavy Lifting",
      "Vehicle Transport",
    ],
  },
  {
    id: "digital",
    name: "Digital & Creative Services",
    subcategories: [
      "Website Development",
      "Graphic Design",
      "Social Media Management",
      "Content Writing",
      "Video Editing",
      "SEO Services",
      "App Development",
      "Digital Marketing",
    ],
  },
  {
    id: "odd-jobs",
    name: "Odd Jobs & General Labor",
    subcategories: [
      "Miscellaneous Tasks",
      "Carpentry",
      "Demolition",
      "Labor Assistance",
      "Furniture Repair",
      "Fence Installation",
    ],
  },
  {
    id: "auto",
    name: "Auto Services",
    subcategories: [
      "Car Washing & Detailing",
      "Tire Changing",
      "Basic Vehicle Maintenance",
      "Jump Starts",
      "Oil Changes",
    ],
  },
  {
    id: "event",
    name: "Event & Retail Support",
    subcategories: [
      "Event Setup/Tear Down",
      "Retail Shelf Stocking",
      "Pop-Up Stand Assembly",
      "Event Photography",
      "Catering Assistance",
    ],
  },
  {
    id: "personal",
    name: "Personal & Pet Services",
    subcategories: [
      "Dog Walking/Petting",
      "Meal Prep Assistance",
      "Grocery Shopping",
      "Personal Assistance",
      "Tutoring",
    ],
  },
  {
    id: "professional",
    name: "Professional Services",
    subcategories: [
      "Accounting & Bookkeeping",
      "Legal Assistance",
      "Business Consulting",
      "Translation Services",
      "Administrative Support",
    ],
  },
  {
    id: "industrial",
    name: "Industrial & Commercial",
    subcategories: [
      "Warehouse Picking/Packing",
      "Factory Labor",
      "Office Cleaning",
      "Equipment Maintenance",
      "Safety Inspections",
    ],
  },
];

export const featuredServices = [
  {
    id: "1",
    title: "Professional House Cleaning Service",
    provider: {
      name: "CleanCo Pro",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.9,
      reviews: 320,
      verified: true,
    },
    category: "Cleaning",
    price: 450,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true,
    location: "South Africa", // Added location
    isDigital: false, // Not a digital service
  },
  {
    id: "2",
    title: "Garden Landscaping and Maintenance",
    provider: {
      name: "Green Thumb",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.7,
      reviews: 185,
      verified: true,
    },
    category: "Landscaping",
    price: 850,
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "South Africa", // Added location
    isDigital: false, // Not a digital service
  },
  {
    id: "3",
    title: "Residential Electrical Repair",
    provider: {
      name: "PowerFix",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.8,
      reviews: 210,
      verified: true,
    },
    category: "Home Maintenance",
    price: 600,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "South Africa", // Added location
    isDigital: false, // Not a digital service
  },
  {
    id: "4",
    title: "Local Moving & Delivery Service",
    provider: {
      name: "Swift Movers",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.6,
      reviews: 150,
      verified: true,
    },
    category: "Moving",
    price: 1200,
    image: "https://images.unsplash.com/photo-1600518758237-5d6ac78b5345?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "South Africa", // Added location
    isDigital: false, // Not a digital service
  },
  {
    id: "5",
    title: "Website Development & Design",
    provider: {
      name: "WebWizards",
      avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.9,
      reviews: 278,
      verified: true,
    },
    category: "Digital Services",
    price: 3500,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true,
    location: "Global", // Digital service is global
    isDigital: true, // This is a digital service
  },
  {
    id: "6",
    title: "Mobile App Development",
    provider: {
      name: "AppCraft Solutions",
      avatar: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.8,
      reviews: 195,
      verified: true,
    },
    category: "Digital Services",
    price: 7800,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "Global", // Digital service is global
    isDigital: true, // This is a digital service
  },
  {
    id: "7",
    title: "Social Media Marketing",
    provider: {
      name: "Digital Boost",
      avatar: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.7,
      reviews: 162,
      verified: true,
    },
    category: "Digital Services",
    price: 2400,
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "Global", // Digital service is global
    isDigital: true, // This is a digital service
  },
  {
    id: "8",
    title: "Plumbing Services & Repairs",
    provider: {
      name: "FlowFix Plumbers",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.8,
      reviews: 204,
      verified: true,
    },
    category: "Home Maintenance",
    price: 550,
    image: "https://images.unsplash.com/photo-1606274741559-d322310fa2b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "South Africa", // Added location
    isDigital: false, // Not a digital service
  },
  {
    id: "9",
    title: "Graphic Design & Branding",
    provider: {
      name: "Creative Designs",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.9,
      reviews: 187,
      verified: true,
    },
    category: "Digital Services",
    price: 1800,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true,
    location: "Global", // Digital service is global
    isDigital: true, // This is a digital service
  }
];
