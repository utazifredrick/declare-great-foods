import { BadgeCheck, HeartHandshake, Store, Tags } from "lucide-react";

const trustFeatures = [
  {
    title: "Authentic Products",
    description: "African and Caribbean foods and accessories.",
    Icon: BadgeCheck,
  },
  {
    title: "Wide Range",
    description: "Explore products across a variety of categories.",
    Icon: Store,
  },
  {
    title: "Trusted Local Store",
    description: "Serving customers in Moston, Manchester.",
    Icon: HeartHandshake,
  },
  {
    title: "Great Value",
    description: "A local place to explore everyday essentials.",
    Icon: Tags,
  },
];

function TrustFeatures() {
  return (
    <section
      aria-label="Store highlights"
      className="border-b border-brand-green/10 bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-7 px-5 py-8 sm:px-8 md:grid-cols-4 lg:px-8 lg:py-10">
        {trustFeatures.map(({ title, description, Icon }) => (
          <div className="flex items-start gap-3" key={title}>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-green/8 text-brand-green">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="text-sm font-bold leading-snug text-brand-ink sm:text-base">
                {title}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-brand-ink/65 sm:text-sm">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustFeatures;
