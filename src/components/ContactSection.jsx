import { MessageCircle, Phone } from "lucide-react";
import { storeInfo, whatsappUrl } from "../data/storeData.js";

function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="scroll-mt-8 bg-brand-green px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-8"
      id="contact"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
            Questions or enquiries?
          </p>
          <h2
            className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl"
            id="contact-heading"
          >
            Get in touch with the store
          </h2>
          <p className="mt-4 text-base leading-7 text-white/80">
            Call the store or open WhatsApp to contact us. A message is not sent
            automatically.
          </p>
          <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {storeInfo.phoneNumbers.map((phone) => (
              <li key={phone.href}>
                <a
                  className="inline-flex min-h-8 items-center gap-2 rounded-sm text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-brand-yellow hover:decoration-brand-yellow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow motion-reduce:transition-none"
                  href={phone.href}
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {phone.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-md bg-brand-yellow px-5 py-3 text-sm font-extrabold text-brand-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow motion-reduce:transform-none motion-reduce:transition-none md:self-center"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden="true" className="size-5" />
          Contact on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
