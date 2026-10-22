import { Clock3, MapPin } from "lucide-react";
import { storeInfo } from "../data/storeData.js";

function TopBar() {
  return (
    <div className="bg-brand-green text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-x-6 gap-y-1 px-4 py-2 text-[11px] leading-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
          {storeInfo.phoneNumbers.map((phone) => (
            <a
              className="rounded-sm font-semibold text-white transition-colors hover:text-brand-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow motion-reduce:transition-none"
              href={phone.href}
              key={phone.href}
            >
              {phone.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center justify-end gap-5 text-white/90 md:flex">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <Clock3 aria-hidden="true" className="size-3.5 text-brand-yellow" />
            {storeInfo.openingHours}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin
              aria-hidden="true"
              className="size-3.5 shrink-0 text-brand-yellow"
            />
            {storeInfo.address}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
