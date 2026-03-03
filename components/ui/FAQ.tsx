"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <ScrollReveal>
          <h2>{title}</h2>
        </ScrollReveal>

        {items.map((item, index) => (
          <div
            key={index}
            className={`faq-item${openIndex === index ? " open" : ""}`}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span className="icon">+</span>
            </button>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
