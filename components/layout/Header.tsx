"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SIGNUP_URL, LOGIN_URL } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  // Close on Escape + focus trapping
  useEffect(() => {
    if (!mobileOpen) return;

    // Focus first link on open
    const nav = mobileNavRef.current;
    if (nav) {
      const firstFocusable = nav.querySelector<HTMLElement>("a, button");
      firstFocusable?.focus();
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobile();
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && nav) {
        const focusable = nav.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <header className="header" role="banner">
        <div className="header-container">
          <Link href="/" className="logo">
            <Image
              src="/images/logos/squad-trip-logo-02.png"
              alt="SquadTrip"
              width={150}
              height={53}
              priority
            />
          </Link>

          <nav className="nav" role="navigation" aria-label="Main navigation">
            {NAV_ITEMS.map((item) =>
              "external" in item && item.external ? (
                <div key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </div>
              ) : (
                <div key={item.label} className="nav-item">
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </div>
              )
            )}
          </nav>

          <div className="header-cta">
            <a href={LOGIN_URL} className="btn-login">
              Log in
            </a>
            <a href={SIGNUP_URL} className="btn-signup">
              Sign up for free
            </a>
          </div>

          <button
            ref={toggleBtnRef}
            className={`mobile-menu-toggle${mobileOpen ? " active" : ""}`}
            onClick={toggleMobile}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        ref={mobileNavRef}
        className={`mobile-nav-overlay${mobileOpen ? " active" : ""}`}
        id="mobileNav"
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Mobile navigation"
      >
        <button
          className="mobile-nav-close"
          onClick={closeMobile}
          aria-label="Close menu"
        >
          &times;
        </button>
        <div className="mobile-nav-section">
          {NAV_ITEMS.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} onClick={closeMobile}>
                {item.label}
              </Link>
            )
          )}
        </div>
        <div className="mobile-cta">
          <a href={LOGIN_URL} className="btn-login">
            Log in
          </a>
          <a href={SIGNUP_URL} className="btn-signup-mobile">
            Sign up for free
          </a>
        </div>
      </div>
    </>
  );
}
