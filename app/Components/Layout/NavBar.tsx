"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ---------------------------------------------
// Navigation data
// - All items currently have hasSubmenu: false
// - Structure supports submenus in the future
// ---------------------------------------------
const navigationItems = {
  announcementBar: {
    text: "Kickstart your project with PEXDynamics — fast, reliable, and industry-grade solutions",
    linkText: "Learn more",
    linkPath: "/shipping"
  },
  actionButton: {
    name: "Get Started",
    path: "/get-started"
  },
  mainLinks: [
    { name: "HOME", path: "/", hasSubmenu: false },
    { name: "3D PRINTING", path: "/underconstruction", hasSubmenu: false },
    { name: "PCB DESIGN", path: "/underconstruction", hasSubmenu: false },
    { name: "CONNECT", path: "/underconstruction", hasSubmenu: false },
    { name: "ABOUT", path: "/underconstruction", hasSubmenu: false }

    // Example (keep for future):
    // {
    //   name: "Products",
    //   path: null,
    //   hasSubmenu: true,
    //   submenuId: "products",
    //   items: [
    //     { name: "Printers", description: "Industrial & desktop", path: "/products/printers" },
    //     { name: "Materials", description: "PLA, ABS, resins", path: "/products/materials" }
    //   ]
    // }
  ]
};

// ---------------------------------------------
// Types
// ---------------------------------------------
type NavItem = {
  name: string | null;
  path: string | null;
  hasSubmenu: boolean;
  submenuId?: string;
  items?: Array<{ name: string; description?: string; path: string }>;
};

// ---------------------------------------------
// Navbar Component 
// ---------------------------------------------
const Navbar: React.FC = () => {
  const pathname = usePathname();

  // Mobile menu open/close state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optional submenu state (desktop hover OR mobile expand)
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const handleMobileMenuToggle = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Announcement Bar (optional) */}
      <div className="flex justify-center items-center py-2 bg-[#171F2D] text-white text-sm max-sm:py-3 max-sm:px-3 ">
        <p className="px-4 text-white/85 font-light text-[13px] max-sm:text-xs max-sm:px-2 max-sm:text-[10px] ">
          {navigationItems.announcementBar.text}
        </p>
        <Link href="https://wa.me/+94789477961" 
    target="_blank"
    rel="noopener noreferrer" className="flex items-center gap-2 max-sm:hidden">
          <span className="font-medium tracking-wide max-sm:text-xs underline underline-offset-3 text-[13px]">
            {navigationItems.announcementBar.linkText}
          </span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      {/* Navigation Bar */}
      <div className="">
        <div
          className="flex px-4 py-[7px] items-center justify-between bg-white 
           max-sm:px-2 border border-white/40 shadow-sm"
        >
          {/* Logo */}
          <Link href="/" aria-label="Go to homepage" className="shrink-0 pl-10">
            <Image
              className="h-auto w-38 max-sm:w-28"
              src="assets/logos/primary_logo.png"
              alt="paraqum-primary-logo"
              width={158}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:gap-8 lg:gap-20 lg:pr-15 items-center text-[14px] text-black/70 relative">
            {(navigationItems.mainLinks as NavItem[]).map((item) => {
              const isActive = item.path && pathname === item.path;

              // If hasSubmenu in future, render a hoverable dropdown (no animations)
              if (item.hasSubmenu && item.items?.length) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setOpenMenu(item.submenuId ?? null)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className="cursor-pointer font-medium text-black/70 hover:text-black flex items-center gap-1">
                      {item.name}
                      <span aria-hidden>▾</span>
                    </button>
                    {/* Dropdown (hidden for now since all are hasSubmenu:false) */}
                    {openMenu === item.submenuId && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl w-[600px] p-6 border">
                        <div className="grid grid-cols-2 gap-4">
                          {item.items.map((sub) => (
                            <Link key={sub.name} href={sub.path} className="rounded-xl p-3 hover:bg-gray-50">
                              <div className="text-sm font-semibold text-gray-900">{sub.name}</div>
                              {sub.description && (
                                <p className="text-[11px] text-gray-600 mt-1">{sub.description}</p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Regular link
              return (
                <>
                  { (item.name === "3D PRINTING" || item.name === "PCB DESIGN") ? (
                    <Link
                      key={item.name}
                      href={item.path || "/"}
                      className={`cursor-pointer font-medium text-[13px]  hover:text-black tracking-normal ${
                        isActive ? "text-black" : "text-black/80"
                      }`}
                    >
                      <span className="font-['Inter'] font-bold text-[13px] text-[#ED1F24] ">
          {item.name?.split(" ")[0]}
        </span>{" "}
        {item.name?.split(" ")[1]}
                    </Link>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.path || "/"}
                      className={`cursor-pointer text-[13px] font-medium hover:text-black ${
                        isActive ? "text-black" : "text-black/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              );
              
            })}

            {/* <Link href={navigationItems.actionButton.path} className="ml-2">
              <button className="flex bg-[#0A103F] text-white px-5 py-2 rounded-3xl font-medium">
                {navigationItems.actionButton.name}
              </button>
            </Link> */}
          </nav>

          {/* Mobile menu toggle (no animation) */}
          <button
            type="button"
            className="md:hidden p-2 pr-3 cursor-pointer relative w-12 h-10 flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Toggle navigation</span>
            {/* Simple icon swap using text; replace with <Image> if you have icons */}
            {mobileMenuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-2xl leading-none">≡</span>
            )}
          </button>
        </div>

        {/* MOBILE MENU PANEL (no animation) */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 bg-white text-black rounded-2xl shadow-2xl w-full p-5 border"
          >
            <div className="flex flex-col gap-4 text-sm font-medium">
              {(navigationItems.mainLinks as NavItem[]).map((item) => {
                const isActive = item.path && pathname === item.path;

                // If submenu exists in future, allow expand/collapse (no animations)
                if (item.hasSubmenu && item.items?.length) {
                  const expanded = expandedMobileSection === (item.submenuId || item.name);
                  return (
                    <div key={item.name} className="w-full">
                      <button
                        className="flex items-center justify-between w-full bg-gray-100 rounded-md p-2 font-semibold"
                        onClick={() =>
                          setExpandedMobileSection((prev) =>
                            prev === (item.submenuId || item.name) ? null : item.submenuId || item.name
                          )
                        }
                        aria-expanded={expanded}
                        aria-controls={`section-${item.submenuId || item.name}`}
                      >
                        {item.name}
                        <span aria-hidden>{expanded ? "▴" : "▾"}</span>
                      </button>
                      {expanded && (
                        <div id={`section-${item.submenuId || item.name}`} className="mt-2 pl-2 grid grid-cols-2 gap-3 text-[13px] text-gray-700">
                          {item.items.map((sub) => (
                            <Link key={sub.name} href={sub.path} onClick={() => setMobileMenuOpen(false)}>
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Regular mobile link
                return (
                  <Link
                    key={item.name}
                    href={item.path || "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-2 py-2 rounded-md ${isActive ? "bg-gray-100 text-black" : "text-black/80 hover:bg-gray-50"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <Link href={navigationItems.actionButton.path} onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-[#0A103F] text-white px-5 py-2 rounded-3xl font-medium">
                  {navigationItems.actionButton.name}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
