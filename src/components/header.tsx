"use client";

import Link from "next/link";
import React from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/i18n/language-provider";
import { getCopy } from "@/content/site";
import { Container } from "@/components/layout";
import { BrandLogo } from "@/components/brand-logo";

export function Header() {
  const { lang, setLang } = useLanguage();
  const copy = getCopy(lang);
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled
          ? "bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-14 items-center justify-between sm:h-16">
        <Link
          href="#home"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <BrandLogo
            alt={copy.brand.name}
            onLightBackground={scrolled}
            size="sm"
            priority
          />
          <div className="min-w-0 leading-tight">
            <div
              className={cn(
                "truncate text-[13px] font-semibold tracking-wide sm:text-sm",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              {copy.brand.name}
            </div>
            <div
              className={cn(
                "hidden truncate text-[11px] tracking-wide sm:block",
                scrolled ? "text-slate-600" : "text-white/70"
              )}
            >
              {copy.brand.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {copy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide transition hover:text-[rgb(var(--accent))]",
                scrolled ? "text-slate-700" : "text-white/85"
              )}
            >
              {item.label}
            </a>
          ))}

          <div className="ml-1 flex items-center gap-1 rounded-md bg-black/5 p-1 ring-1 ring-black/5">
            <button
              type="button"
              onClick={() => setLang("mn")}
              className={cn(
                "rounded px-2.5 py-1 text-xs font-semibold tracking-wide transition",
                lang === "mn"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-700 hover:bg-white/70"
              )}
              aria-pressed={lang === "mn"}
            >
              MN
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "rounded px-2.5 py-1 text-xs font-semibold tracking-wide transition",
                lang === "en"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-700 hover:bg-white/70"
              )}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-md p-2 ring-1 transition lg:hidden",
            scrolled
              ? "ring-black/10 hover:bg-black/[0.03]"
              : "ring-white/20 hover:bg-white/10 text-white"
          )}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" />
        </button>
      </Container>

      {mounted && copy.nav.length
        ? createPortal(
            <div
              className={cn(
                "lg:hidden",
                open ? "pointer-events-auto" : "pointer-events-none"
              )}
              aria-hidden={!open}
            >
              <div
                className={cn(
                  "fixed inset-0 z-[999] bg-black/50 transition",
                  open ? "opacity-100" : "opacity-0"
                )}
                onClick={() => setOpen(false)}
              />
              <div
                className={cn(
                  "fixed right-0 top-0 z-[1000] h-full w-[min(92vw,420px)] bg-white shadow-2xl transition",
                  open ? "translate-x-0" : "translate-x-full"
                )}
              >
                <div className="flex h-16 items-center justify-between gap-3 px-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <BrandLogo alt={copy.brand.name} size="xs" />
                    <div className="min-w-0 truncate text-sm font-semibold tracking-wide">
                      {copy.brand.legal}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-md p-2 ring-1 ring-black/10 hover:bg-black/[0.03]"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </button>
                </div>
                <div className="px-5 pb-8">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xs font-semibold tracking-wide text-slate-500">
                      Language
                    </span>
                    <div className="flex items-center gap-1 rounded-md bg-slate-50 p-1 ring-1 ring-black/5">
                      <button
                        type="button"
                        onClick={() => setLang("mn")}
                        className={cn(
                          "rounded px-2.5 py-1 text-xs font-semibold tracking-wide",
                          lang === "mn"
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-700 hover:bg-white"
                        )}
                      >
                        MN
                      </button>
                      <button
                        type="button"
                        onClick={() => setLang("en")}
                        className={cn(
                          "rounded px-2.5 py-1 text-xs font-semibold tracking-wide",
                          lang === "en"
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-700 hover:bg-white"
                        )}
                      >
                        EN
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-1">
                    {copy.nav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="rounded-md px-3 py-2.5 text-sm font-semibold tracking-wide text-slate-800 hover:bg-slate-50"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-semibold tracking-wide text-slate-500">
                      {lang === "mn" ? "Товч мэдээлэл" : "Quick note"}
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      {copy.brand.tagline}
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  );
}

