import { useState } from "react";
import { Menu, MessageCircle, Phone, ShoppingCart, X } from "lucide-react";
import { storeInfo, whatsappUrl } from "../data/storeData.js";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="relative z-30 bg-white shadow-[0_3px_14px_rgba(23,35,27,0.08)]"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          aria-label={`${storeInfo.name} home`}
          className="flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright"
          href="#home"
          onClick={closeMenu}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-green text-brand-yellow">
            <ShoppingCart
              aria-hidden="true"
              className="size-6"
              strokeWidth={2.3}
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg font-extrabold leading-tight text-brand-green sm:text-xl">
              {storeInfo.name}
            </span>
            <span className="hidden text-xs font-medium text-brand-ink/65 sm:block">
              {storeInfo.subtitle}
            </span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigationLinks.map((link) => (
            <a
              className="rounded-sm py-2 text-sm font-semibold text-brand-ink transition-colors hover:text-brand-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright motion-reduce:transition-none"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-brand-green px-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green motion-reduce:transition-none"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </a>
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-brand-green px-3.5 text-sm font-bold text-brand-green transition-colors hover:bg-brand-green/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green motion-reduce:transition-none"
            href={storeInfo.phoneNumbers[0].href}
          >
            <Phone aria-hidden="true" className="size-4" />
            Call
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-brand-green transition-colors hover:bg-brand-green/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green motion-reduce:transition-none lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`${menuOpen ? "block" : "hidden"} border-t border-brand-green/10 bg-white px-4 pb-5 pt-2 lg:hidden sm:px-6`}
        id="mobile-navigation"
      >
        <ul className="mx-auto max-w-7xl divide-y divide-brand-green/10">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                className="block rounded-sm py-3 text-base font-semibold text-brand-ink transition-colors hover:text-brand-bright focus-visible:outline-2 focus-visible:outline-brand-bright motion-reduce:transition-none"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-4 flex max-w-7xl gap-3">
          <a
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md bg-brand-green px-4 text-sm font-bold text-white transition-colors hover:bg-brand-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green motion-reduce:transition-none"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </a>
          <a
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border border-brand-green px-4 text-sm font-bold text-brand-green transition-colors hover:bg-brand-green/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green motion-reduce:transition-none"
            href={storeInfo.phoneNumbers[0].href}
          >
            <Phone aria-hidden="true" className="size-4" />
            Call
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
