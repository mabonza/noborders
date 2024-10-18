import img from "/public/supply.webp";
import passportImg from "/public/passport2.webp";
import sellImg from "/public/services/serv8.webp";

export const locales = ["fr", "en"];

export const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Nos services", to: "/services" },
  { label: "A propos de nous", to: "#about" },
  { label: "Demander un devis", to: "#contact" },
];

export const navItems_ = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "A propos", to: "#about" },
];

export const socialLinks = [
  { name: "Linkedin", link: "/", icon: "" },
  { name: "Facebook", link: "/", icon: "" },
];

export const services = [
  {
    name: "Expertise en logistique et chaine d'approvisionnement",
    text: "Dans la chaîne d’approvisionnement nous offrons une optimisation de la gestion des stocks, l’évaluation des performances des fournisseurs et l’optimisation du réseau de transport.",
    img: img,
  },
  {
    name: "Fourniture des produits",
    text: "Nous vendons des équipements de sécurité, des outils industriels, des fournitures spécialisées et d'autres accessoires pour les entreprises et les particuliers.",
    img: sellImg,
  },
  {
    name: "Assistance Visa en RDC",
    text: "Service professionnel et fiable d’assistance pour tous les types de visas à destination de la République démocratique du Congo, garantissant des préparatifs de voyage en douceur et sans tracas.",
    img: passportImg,
  },
];

export const accordionItems = [
  {
    title: "Equipe Expérimentée",
    content: "Des professionnels chevronnés en logistique.",
  },
  {
    title: "Solutions Innovantes",
    content: "Technologies et pratiques de pointe",
  },
  {
    title: "Flexibilité et Réactivité",
    content: "Adaptation rapide aux besoins.",
  },
  {
    title: "Qualité Garantie",
    content: "Services de haute qualité pour votre satisfaction.",
  },
  {
    title: "Approche Personnalisée",
    content: "Solutions sur mesure pour chaque client.",
  },
];
