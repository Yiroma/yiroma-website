import { Briefcase, MessageCircle } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/layout/Footer";

export const userContact = {
  email: "yiromaric@gmail.com",
  phone: "+33695386099",
  location: "Châteauneuf-sur-Loire (45)",
  local: "Présentiel : région orléanaise",
  remote: "Remote : toute la France",
};

export const socialLinks = [
  { href: "https://www.malt.fr/profile/romaricyi", label: "Malt", icon: Briefcase },
  { href: "https://linkedin.com/in/yiromaric", label: "LinkedIn", icon: IconLinkedin },
  { href: "https://github.com/Yiroma", label: "GitHub", icon: IconGithub },
  { href: "https://wa.me/33695386099", label: "WhatsApp", icon: MessageCircle },
];
