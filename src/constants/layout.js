import logo from '@/assets/logo.png'
import { Facebook, Instagram } from 'lucide-react';

export const navbaritems = {
  logo: logo,
  navItems: [
    { link: "Home", path: "/" },
    { link: "Immigration", path: "/immigration" },
    { link: "About Us", path: "/about-us" },
    { link: "Contact Us", path: "/contact-us" },
  ],
};

export const footerItems = {
  brand: logo,
  text1: "We are part of the World Wings family.",
  text2: " 2024. All rights reserved.",
  socials: [
    {
      icon: Facebook,
      link: "",
    },
    {
      icon: Instagram,
      link: "",
    },
  ],
};