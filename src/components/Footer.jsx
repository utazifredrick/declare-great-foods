import { MapPin, Phone, ShoppingCart } from "lucide-react";
import { storeInfo } from "../data/storeData.js";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Find Us", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-brand-ink px-5 pb-6 pt-12 text-white sm:px-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-12">
          <div>
            <a
              aria-label={`${storeInfo.name} home`}
              className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
              href="#home"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-brand-green text-brand-yellow">
                <ShoppingCart aria-hidden="true" className="size-6" />
              </span>
              <span>
                <span className="block text-lg font-extrabold leading-tight text-white">
                  {storeInfo.name}
                </span>
                <span className="mt-1 block text-xs text-white/65">
                  {storeInfo.subtitle}
                </span>
              </span>
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-brand-yellow">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="rounded-sm text-sm text-white/80 transition-colors hover:text-brand-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow motion-reduce:transition-none"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-brand-yellow">
              Visit or call
            </h2>
            <address className="mt-4 flex items-start gap-2 text-sm not-italic leading-6 text-white/80">
              <MapPin
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-brand-yellow"
              />
              <span>{storeInfo.address}</span>
            </address>
            <ul className="mt-3 grid gap-2">
              {storeInfo.phoneNumbers.map((phone) => (
                <li key={phone.href}>
                  <a
                    className="inline-flex items-center gap-2 rounded-sm text-sm text-white/80 transition-colors hover:text-brand-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow motion-reduce:transition-none"
                    href={phone.href}
                  >
                    <Phone
                      aria-hidden="true"
                      className="size-4 text-brand-yellow"
                    />
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pt-5 text-xs text-white/60">
          © {currentYear} {storeInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
