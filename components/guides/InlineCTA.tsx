"use client";

import { SignupLink } from "@/components/common/SignupLink";

interface InlineCTAProps {
  heading?: string;
  body?: string;
  buttonText?: string;
  slug?: string;
}

export function InlineCTA({
  heading = "Planning a group trip?",
  body = "Create a booking page, collect payments, and track who paid — all in one place.",
  buttonText = "Get started for free",
  slug = "guide",
}: InlineCTAProps) {
  return (
    <div className="not-prose my-10 rounded-xl border border-purple/20 bg-purple/5 p-6 sm:p-8">
      <p className="text-base font-semibold text-gray-900 mb-2">{heading}</p>
      <p className="text-sm text-gray-600 mb-4">{body}</p>
      <SignupLink source="guides" medium="inline-mdx" campaign={slug} className="btn-primary inline-block text-sm">
        {buttonText}
      </SignupLink>
    </div>
  );
}
