import { Clock3, MapPin, Navigation } from "lucide-react";
import { storeInfo, weeklyHours } from "../data/storeData.js";

function StoreInformation() {
  return (
    <section
      aria-label="Store location and opening hours"
      className="scroll-mt-8 bg-brand-paper px-5 py-16 sm:px-8 sm:py-20 lg:px-8"
      id="location"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-bright">
            Visit our shop
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-brand-green sm:text-4xl">
            Store Information
          </h2>
        </div>

        <div className="grid gap-10 border-y border-brand-green/15 py-8 md:grid-cols-2 md:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-green/8 text-brand-green">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-xl font-extrabold text-brand-ink">Find Us</h3>
            </div>
            <address className="mt-5 max-w-sm text-base not-italic leading-7 text-brand-ink/75">
              {storeInfo.address}
            </address>
            <a
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-brand-green px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green motion-reduce:transition-none"
              href={storeInfo.directionsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Navigation aria-hidden="true" className="size-4" />
              Get Directions
            </a>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-yellow/55 text-brand-green">
                <Clock3 aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-xl font-extrabold text-brand-ink">
                Opening Hours
              </h3>
            </div>
            <dl className="mt-4 divide-y divide-brand-green/10">
              {weeklyHours.map(({ day, hours }) => (
                <div
                  className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 py-2.5 text-sm"
                  key={day}
                >
                  <dt className="font-semibold text-brand-ink">{day}</dt>
                  <dd className="text-right text-brand-ink/70">{hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreInformation;
