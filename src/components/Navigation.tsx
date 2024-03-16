"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";

const menuItems = ["Menu", "Contacto"];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Cacaofood</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href={pathname === "/menu" ? "/menu" : "/menu"}
              aria-current="page"
            >
              Menu
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/contacto"
              isDisabled={pathname === "/contacto" ? true : false}
            >
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="success" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link color="foreground" className="w-full" href="/" size="lg">
              Home
            </Link>
            {menuItems.map((item, index) => (
              <Link
                color="foreground"
                className="w-full"
                href={`/${item.toLowerCase()}`}
                size="lg"
                key={index}
              >
                {item}
              </Link>
            ))}
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
