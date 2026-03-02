"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-bg-light">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Trusted by over 2,000 group trip organizers
        </h2>

        <div className="relative">
          <blockquote className="min-h-[120px]">
            <p className="text-xl text-gray-700 italic leading-relaxed">
              &ldquo;{TESTIMONIALS[current].quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-semibold text-gray-900">
                {TESTIMONIALS[current].author}
              </p>
              <p className="text-sm text-gray-500">
                {TESTIMONIALS[current].company}
              </p>
            </footer>
          </blockquote>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-purple" : "bg-gray-300"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
