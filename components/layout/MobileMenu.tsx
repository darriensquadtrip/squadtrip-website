"use client";

import Link from "next/link";
import { NAV_ITEMS, SIGNUP_URL, LOGIN_URL } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="md:hidden border-t border-gray-100 bg-white">
      <div className="px-4 py-4 space-y-3">
        {NAV_ITEMS.map((item) =>
          "external" in item && item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block text-base font-medium text-gray-600 hover:text-purple py-2"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block text-base font-medium text-gray-600 hover:text-purple py-2"
            >
              {item.label}
            </Link>
          )
        )}
        <hr className="border-gray-200" />
        <a
          href={LOGIN_URL}
          className="block text-base font-medium text-gray-600 hover:text-purple py-2"
        >
          Log in
        </a>
        <a
          href={SIGNUP_URL}
          className="block w-full text-center rounded-lg bg-purple px-5 py-3 text-base font-semibold text-white hover:bg-purple-dark transition-colors"
        >
          Sign up for free
        </a>
      </div>
    </div>
  );
}
