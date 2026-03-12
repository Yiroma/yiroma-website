import { Briefcase, MessageCircle } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/ui/SocialIcons";

export const userContact = {
  firstname: "Romaric",
  lastname: "Yi",
  nickname: "Yiroma",
  businessStatus: "Micro-entreprise",
  businessLabel: "EI",
  siret: "984 160 515 00016",
  address: "10 Bis, Chemin des Levrettes, 45110 Châteauneuf-sur-Loire, FRANCE",
  email: "contact@yiroma.fr",
  url: "https://yiroma.fr",
  phone: "+33695386099",
  location: "Châteauneuf-sur-Loire (45)",
  local: "Présentiel : région orléanaise",
  remote: "Remote : toute la France",
};

export const hostContact = {
  hostname: "Hostinger International Ltd.",
  address: "61, Lordou Vironos Street, 6023 Larnaca, Chypre",
  url: "https://www.hostinger.fr/contact",
  phone: "",
};

export const socialLinks = [
  {
    href: "https://linkedin.com/in/yiromaric",
    label: "LinkedIn",
    icon: IconLinkedin,
  },
  {
    href: "https://github.com/Yiroma",
    label: "GitHub",
    icon: IconGithub,
  },
  {
    href: "https://www.malt.fr/profile/romaricyi",
    label: "Malt",
    icon: Briefcase,
  },
  {
    href: "https://wa.me/33695386099",
    label: "WhatsApp",
    icon: MessageCircle,
  },
];
