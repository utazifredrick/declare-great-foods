import { useState } from "react";
import { ArrowDownRight, MapPin } from "lucide-react";
import { storeInfo } from "../data/storeData.js";

function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-brand-green sm:min-h-[620px]"
      id="home"
    >
      {!imageFailed && (
        <img
          alt="Fresh fruit and vegetables in a grocery market"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
          fetchPriority="high"
          onError={() => setImageFailed(true)}
          src={storeInfo.heroImage}
        />
      )}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,40,22,0.94)_0%,rgba(0,55,28,0.82)_48%,rgba(0,49,25,0.35)_100%)]" />
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow sm:text-sm">
            <MapPin aria-hidden="true" className="size-4" />
            Moston, Manchester
          </p>
          <h1
            className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-7xl"
            id="hero-heading"
          >
            Your Home for African &amp; Caribbean Foods in Manchester
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Fresh groceries, authentic products, and everything you need from
            Africa and the Caribbean — all in one place!
          </p>
          <a
            className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-md bg-brand-yellow px-5 py-3 text-sm font-extrabold text-brand-ink shadow-lg shadow-black/15 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow motion-reduce:transform-none motion-reduce:transition-none sm:text-base"
            href="#products"
          >
            Explore Our Products
            <ArrowDownRight aria-hidden="true" className="size-5" />
          </a>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-2 w-2/5 bg-brand-yellow"
      />
    </section>
  );
}

export default Hero;
