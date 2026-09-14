const newProductInquiryMessages: Record<string, string> = {
  "Tomato Powder": "Hello, I am interested in Tomato Powder for bulk supply. Please share your specifications, MOQ, packaging options and quotation.",
  "Ginger Powder": "Hello, I am interested in Ginger Powder for bulk supply. Please share your specifications, MOQ, packaging options and quotation.",
  "Red Chilli Powder": "Hello, I am interested in Red Chilli Powder for bulk supply. Please share your specifications, MOQ, packaging options and quotation.",
};

export const siteConfig = {
  name: "Ashirwad Agro Exports",
  shortName: "Ashirwad Agro",
  logo: "/company-logo.webp",
  description: "Premium Indian Agricultural Products for Global Markets. B2B bulk supply of ingredients and spices.",
  contact: {
    email: "sales@aashirwadagroexports.com",
    phone: "+919739469814", 
    address: "Mama Bhanja Ka Talab, Rewa Road, Prayagraj, Uttar Pradesh - 211008, India",
  },
  whatsapp: {
    primary: "+919739469814",
    directBusiness: "+919844166890",
    generalMessage: "Hello, I am interested in your agricultural products. Please share price, MOQ, packaging options and export details.",
    productMessage: (productName: string) =>
      newProductInquiryMessages[productName] ??
      `Hello, I am interested in your ${productName}. Please share price, MOQ, packaging options and export details.`,
    directBusinessMessage: "Hello, I would like to discuss a specific business requirement with Ashirwad Agro Exports. I have a custom proposal/deal to discuss.",
  },
  video: {
    poster: "/hero-spices.jpg",
    src: "/video/ashirwad-export-film.mp4",
    blurPx: 3,
    scale: 1.03,
  },
  founder: {
    name: "Piyosh Kumar Tiwari",
    title: "Founder",
    image: "/founder-portrait.webp?v=2",
    bio: "Piyosh Kumar Tiwari leads Ashirwad Agro Exports with a vision of connecting Indian agricultural products with international B2B opportunities. His approach emphasizes clear communication and careful discussion of each buyer's commercial requirements."
  },
  achievements: [
    {
      id: "quality-sourcing",
      title: "Quality-Focused Sourcing Approach",
      description: "Dedicated to discussing and aligning with buyer-specific quality parameters."
    },
    {
      id: "b2b-focus",
      title: "International B2B Focus",
      description: "Focused entirely on serving international importers, distributors, wholesalers, and commercial buyers."
    },
    {
      id: "global-vision",
      title: "Global Market Vision",
      description: "Building long-term opportunities for Indian agricultural products in international markets."
    },
    {
      id: "buyer-alignment",
      title: "Buyer Requirement Alignment",
      description: "Centering operations around professional communication and buyer-oriented supply solutions."
    },
    {
      id: "product-portfolio",
      title: "Product Portfolio",
      description: "Offering Indian spices, spice powders, dehydrated products, and selected agricultural ingredients."
    },
    {
      id: "long-term-relationships",
      title: "Long-Term Relationship Focus",
      description: "Committed to building transparent and lasting relationships with international B2B buyers."
    }
  ],
  products: [
    {
      id: "onion-powder",
      slug: "onion-powder",
      name: "Onion Powder",
      shortDescription: "Dehydrated onion powder available for commercial requirement discussion.",
      image: "/hero-spices.jpg", 
      imageSpecific: "/onion-powder.jpg",
      applications: ["Spice blends", "Sauces & gravies", "Snack seasonings", "Ready-to-eat meals", "Meat processing"],
      specifications: "[Specification placeholders to be discussed per buyer requirements]",
      packaging: "[Packaging options arranged per order volume and logistics]",
    },
    {
      id: "garlic-powder",
      slug: "garlic-powder",
      name: "Garlic Powder",
      shortDescription: "Garlic powder available for bulk commercial supply discussion.",
      image: "/hero-spices.jpg",
      imageSpecific: "/garlic-powder.jpg",
      applications: ["Marinades", "Soups & sauces", "Snack flavoring", "Meat packing", "Condiments"],
      specifications: "[Specification placeholders to be discussed per buyer requirements]",
      packaging: "[Packaging options arranged per order volume and logistics]",
    },
    {
      id: "coriander-powder",
      slug: "coriander-powder",
      name: "Coriander Powder",
      shortDescription: "Ground coriander powder available for bulk commercial supply discussion.",
      image: "/hero-spices.jpg",
      imageSpecific: "/coriander-powder.jpg",
      applications: ["Curry powders", "Bakery products", "Sausage manufacturing", "Pickling", "Marinades"],
      specifications: "[Specification placeholders to be discussed per buyer requirements]",
      packaging: "[Packaging options arranged per order volume and logistics]",
    },
    {
      id: "moringa-powder",
      slug: "moringa-powder",
      name: "Moringa Powder",
      shortDescription: "Moringa powder available for bulk commercial supply discussion.",
      image: "/hero-spices.jpg",
      imageSpecific: "/moringa-powder.jpg",
      applications: ["Health supplements", "Smoothie blends", "Tea manufacturing", "Nutritional bars", "Fortified foods"],
      specifications: "[Specification placeholders to be discussed per buyer requirements]",
      packaging: "[Packaging options arranged per order volume and logistics]",
    },
    {
      id: "spice-powders",
      slug: "spice-powders",
      name: "Spice Powders",
      shortDescription: "Various Indian spice powders available for requirement discussion.",
      image: "/hero-spices.jpg",
      imageSpecific: "/other-spices.jpg",
      applications: ["Spice blends", "Food processing", "Catering", "Wholesale distribution", "Restaurant supply"],
      specifications: "[Specification placeholders to be discussed per buyer requirements]",
      packaging: "[Packaging options arranged per order volume and logistics]",
    },
    {
      id: "masala-spice-blends",
      slug: "masala-spice-blends",
      name: "Masala / Spice Blends",
      shortDescription: "Masala and spice blends available for requirement discussion.",
      image: "/hero-spices.jpg",
      imageSpecific: "/other-spices.jpg",
      applications: ["Commercial kitchens", "Retail repacking", "Ready-to-eat meals", "Marinades", "Snack manufacturing"],
      specifications: "[Specification placeholders to be discussed per buyer requirements]",
      packaging: "[Packaging options arranged per order volume and logistics]",
    },
    {
      id: "tomato-powder",
      slug: "tomato-powder",
      name: "Tomato Powder",
      shortDescription: "Tomato powder available for bulk commercial supply and buyer requirement discussion.",
      image: "/hero-spices.jpg",
      imageSpecific: "/tomato-powder.jpg",
      applications: ["Food processing", "Sauces & seasonings", "Commercial ingredient supply"],
      specifications: "[Specifications to be discussed according to buyer requirements]",
      packaging: "[Packaging options to be discussed according to order requirements]",
    },
    {
      id: "ginger-powder",
      slug: "ginger-powder",
      name: "Ginger Powder",
      shortDescription: "Ginger powder available for bulk commercial supply and buyer requirement discussion.",
      image: "/hero-spices.jpg",
      imageSpecific: "/ginger-powder.jpg",
      applications: ["Food processing", "Spice blends", "Commercial ingredient supply"],
      specifications: "[Specifications to be discussed according to buyer requirements]",
      packaging: "[Packaging options to be discussed according to order requirements]",
    },
    {
      id: "red-chilli-powder",
      slug: "red-chilli-powder",
      name: "Red Chilli Powder",
      shortDescription: "Red chilli powder available for bulk commercial supply and buyer requirement discussion.",
      image: "/hero-spices.jpg",
      imageSpecific: "/red-chilli-powder.jpg",
      applications: ["Food processing", "Seasoning blends", "Commercial ingredient supply"],
      specifications: "[Specifications to be discussed according to buyer requirements]",
      packaging: "[Packaging options to be discussed according to order requirements]",
    }
  ]
};
