import { useState } from "react";
import { ArrowDownRight, Check, ImageOff } from "lucide-react";
import { storeInfo } from "../data/storeData.js";

const reasonsToVisit = [
  "African and Caribbean product selection",
  "Variety across grocery categories",
  "A convenient Moston location",
  "Friendly service as a focus",
];

function AboutSection() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      aria-labelledby="about-heading"
      className="scroll-mt-8 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-8"
      id="about"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-lg bg-lime-100">
          {!imageFailed ? (
            <img
              alt="Grocery products arranged in a shop"
              className="aspect-[4/3] size-full object-cover"
              loading="lazy"
              onError={() => setImageFailed(true)}
              src={storeInfo.aboutImage}
            />
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center text-brand-green/55">
              <ImageOff aria-hidden="true" className="size-10" />
            </div>
          )}
          <span className="absolute bottom-4 left-4 rounded-sm bg-brand-yellow px-3 py-2 text-xs font-bold uppercase tracking-wide text-brand-ink">
            Local to Moston
          </span>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-bright">
            A local grocery store
          </p>
          <h2
            className="mt-2 text-3xl font-extrabold leading-tight text-brand-green sm:text-4xl"
            id="about-heading"
          >
            {storeInfo.name}
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-ink/75">
            We serve customers looking for African and Caribbean groceries in
            Moston, Manchester. Visit us to explore a range of foods and
            accessories from across Africa and the Caribbean.
          </p>
          <a
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-brand-green px-4 py-2.5 text-sm font-bold text-brand-green transition-colors hover:bg-brand-green/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green motion-reduce:transition-none"
            href="#location"
          >
            Learn More
            <ArrowDownRight aria-hidden="true" className="size-4" />
          </a>

          <div className="mt-9 border-t border-brand-green/15 pt-6">
            <h3 className="text-lg font-extrabold text-brand-ink">
              Why Shop With Us?
            </h3>
            <ul className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {reasonsToVisit.map((reason) => (
                <li className="flex items-start gap-2.5" key={reason}>
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-brand-bright"
                  />
                  <span className="text-sm leading-5 text-brand-ink/75">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
