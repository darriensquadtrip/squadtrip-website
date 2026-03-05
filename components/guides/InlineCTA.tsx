import { getSignupUrl } from "@/lib/constants";

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
  const signupUrl = getSignupUrl("guides", "inline-mdx", slug);

  return (
    <div className="not-prose my-10 rounded-xl border border-purple/20 bg-purple/5 p-6 sm:p-8">
      <p className="text-base font-semibold text-gray-900 mb-2">{heading}</p>
      <p className="text-sm text-gray-600 mb-4">{body}</p>
      <a href={signupUrl} className="btn-primary inline-block text-sm">
        {buttonText}
      </a>
    </div>
  );
}
