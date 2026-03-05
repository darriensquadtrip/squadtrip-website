"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/guides";

interface GuideFAQProps {
  items: FAQItem[];
}

export function GuideFAQ({ items }: GuideFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-12 mb-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {items.map((item, index) => (
          <div key={index}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-gray-900 hover:text-purple transition-colors"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              aria-expanded={openIndex === index}
            >
              <span className="pr-4">{item.question}</span>
              <span
                className={`shrink-0 text-xl leading-none transition-transform duration-200 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index
                  ? "max-h-96 pb-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
