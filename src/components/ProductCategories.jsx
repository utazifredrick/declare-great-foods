import { useState } from "react";
import { ArrowRight, ImageOff } from "lucide-react";
import { categories, exampleProducts } from "../data/products.js";

function CategoryCard({ category, selected, onSelect }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <button
      aria-pressed={selected}
      className={`group overflow-hidden rounded-lg border text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright motion-reduce:transform-none motion-reduce:transition-none ${selected ? "border-brand-green ring-2 ring-brand-green/20" : "border-brand-ink/10"}`}
      onClick={() => onSelect(category.id)}
      type="button"
    >
      <span
        className={`relative block aspect-[4/3] overflow-hidden ${category.fallbackColor}`}
      >
        {!imageFailed ? (
          <img
            alt={category.imageAlt}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
            loading="lazy"
            onError={() => setImageFailed(true)}
            src={category.image}
          />
        ) : (
          <span className="flex size-full items-center justify-center text-brand-green/55">
            <ImageOff aria-hidden="true" className="size-8" />
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-3 pt-10 text-xs font-semibold text-white">
          Browse category
        </span>
      </span>
      <span className="flex min-h-14 items-center justify-between gap-3 px-4 py-3">
        <span className="text-sm font-bold text-brand-ink sm:text-base">
          {category.name}
        </span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 text-brand-green transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
        />
      </span>
    </button>
  );
}

function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleProducts =
    activeCategory === "all"
      ? exampleProducts
      : exampleProducts.filter(
          (product) => product.categoryId === activeCategory,
        );

  return (
    <section
      aria-labelledby="products-heading"
      className="scroll-mt-8 bg-brand-paper px-5 py-16 sm:px-8 sm:py-20 lg:px-8"
      id="products"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-bright">
            Find what you need
          </p>
          <h2
            className="mt-2 text-3xl font-extrabold leading-tight text-brand-green sm:text-4xl"
            id="products-heading"
          >
            Explore Our Products
          </h2>
          <p className="mt-3 text-sm leading-6 text-brand-ink/70 sm:text-base">
            Browse categories of African and Caribbean groceries and essentials.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              category={category}
              key={category.id}
              onSelect={setActiveCategory}
              selected={activeCategory === category.id}
            />
          ))}
        </div>

        <div className="mt-12 border-t border-brand-green/15 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-xl font-extrabold text-brand-ink sm:text-2xl">
              {activeCategory === "all"
                ? "Example products"
                : categories.find((category) => category.id === activeCategory)
                    ?.name}
            </h3>
            <button
              aria-pressed={activeCategory === "all"}
              className={`min-h-10 rounded-md border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green motion-reduce:transition-none ${activeCategory === "all" ? "border-brand-green bg-brand-green text-white" : "border-brand-green/30 bg-white text-brand-green hover:bg-brand-green/5"}`}
              onClick={() => setActiveCategory("all")}
              type="button"
            >
              All Products
            </button>
          </div>

          <ul
            aria-live="polite"
            className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            {visibleProducts.map((product) => (
              <li
                className="rounded-md border border-brand-ink/10 bg-white px-4 py-3"
                key={`${product.categoryId}-${product.name}`}
              >
                <span className="block text-sm font-bold text-brand-ink">
                  {product.name}
                </span>
                <span className="mt-1 block text-xs text-brand-ink/60">
                  {
                    categories.find(
                      (category) => category.id === product.categoryId,
                    )?.name
                  }
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-brand-ink/65">
            Illustrative examples only. Product availability and prices should
            be confirmed with the store.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;
