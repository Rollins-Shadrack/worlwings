import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link, useLocation } from "react-router-dom";
import Container from "@/components/Container";

const Navbar = ({ data }) => {
  const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
   const pathname = location.pathname

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-[999]">
      <nav className={`py-2  ${isSticky ? "sticky top-0 left-0 right-0 border shadow-xl bg-white duration-300 z-[999]" : ""}`}>
        <Container className="flex justify-between items-center text-base ">
          <Link className="" href="/">
            <img src={data.logo} className="w-32 h-18 object-cover" alt="rollinscodes.com" />
          </Link>

          {/* Navbar items for large screens */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {data.navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className={`block text-base text-brandDark hover:text-brandPrimary ${pathname === path && "font-medium"}  whitespace-nowrap`}>
                {link}
              </Link>
            ))}
          </ul>

          {/* menu btns */}
          <div className="md:hidden">
            <DropdownMenu className="">
              <DropdownMenuTrigger asChild>
                <button className="focus:outline-none text-brandDark focus:text-brandSecondDark">
                  <MenuIcon className="h-10 w-10 " />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-4 ">
                <DropdownMenuGroup>
                  {data.navItems.map(({ link, path }) => (
                    <Link
                      to={path}
                      key={path}
                      className={`block text-base text-brandDark hover:text-brandPrimary  whitespace-nowrap ${pathname === path && "font-medium"}`}>
                      <DropdownMenuItem key={link}>
                        {link}

                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
