"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { MoveUpRight } from "lucide-react";

// import images
import logoImg from "/public/logo-inline.png";
import { navItems, navItems_, socialLinks } from "@/constants";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "./ui/button";
import React from "react";
import { beba } from "@/constants/fonts";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname().replace(/fr|en/, "");

  return (
    <>
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="py-4 flex items-center justify-between -mt-10">
        <Link href={"/"}>
          <Image src={logoImg} alt="logo" className="w-[200px] -ml-4" />
        </Link>

        <ul className={`hidden lg:flex gap-4`}>
          {navItems_.map((link) => (
            <li key={link.to}>
              <Link
                href={link.to}
                className={clsx(
                  `transition-all duration-300`,
                  pathname === link.to
                    ? "text-u-yellow hover:text-u-yellow"
                    : "hover:text-yellow-200"
                )}
              >
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-8">
          <a href="#contact" className="w-max hidden sm:block">
            <Button className="bg-white text-black rounded-xl px-4 py-2 border border-night hover:bg-slate-100 transition-all duration-300 active:scale-105">
              Nous contacter
            </Button>
          </a>
          <button
            type="button"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden h-10"
          >
            {!isOpen ? (
              <span className="flex flex-col items-end">
                <span className="h-1 w-8 bg-white rounded-full mb-1.5 block" />
                <span className="h-1 w-9 bg-white rounded-full mb-1.5 block" />
                <span className="h-1 w-10 bg-u-yellow-100 rounded-full mb-1.5 block" />
              </span>
            ) : (
              <span className="block">
                <span className="h-1 w-10 bg-white rounded-full mb-1.5 block -rotate-45" />
                <span className="h-1 w-10 bg-u-yellow rounded-full mb-1.5 block rotate-45 -translate-y-2" />
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navigation;

function NavMobile({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname().replace(/fr|en/, "");
  return (
    <section
      className={clsx(
        "bg-u-yellow p-2 rounded-xl fixed h-screen inset-0 z-50 overflow-hidden lg:hidden transition-all duration-300",
        isOpen ? "block" : "hidden"
      )}
    >
      <nav className="flex flex-col items-center justify-center bg-night rounded-xl h-full w-full">
        <div className="main">
          <div className="p-6 px-4 flex items-center justify-between -top-10 fixed z-50 inset-x-0">
            <Link href={"/"} onClick={() => setIsOpen(false)} className="">
              <Image src={logoImg} alt="logo" className="w-[200px]" />
            </Link>
            <button
              type="button"
              aria-label="menu"
              onClick={() => setIsOpen(!isOpen)}
              className="h-10 mr-4 block"
            >
              <span className="block">
                <span className="h-1 w-10 bg-white rounded-full mb-1.5 block -rotate-45" />
                <span className="h-1 w-10 bg-u-yellow rounded-full mb-1.5 block rotate-45 -translate-y-2" />
              </span>
            </button>
          </div>

          <ul className={`flex flex-col gap-2 text-center ${beba.className}`}>
            {navItems.map((link) => (
              <li key={link.to}>
                <Link
                  href={link.to}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    `transition-all duration-300 text-3xl`,
                    pathname === link.to
                      ? "text-u-yellow hover:text-u-yellow"
                      : "hover:text-yellow-200"
                  )}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}
