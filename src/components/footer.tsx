import type { SiteCopy } from "@/content/site";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/layout";
import { cn } from "@/lib/cn";

export function Footer({ copy }: { copy: SiteCopy }) {
  const year = new Date().getFullYear();
  const copyright = copy.footer.copyright.replace("{year}", String(year));

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <BrandLogo alt={copy.brand.name} size="md" />
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide text-slate-900">
                  {copy.brand.name}
                </div>
                <div className="text-[11px] tracking-wide text-slate-600">
                  {copy.brand.tagline}
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm leading-relaxed text-slate-600">
              {copy.hero.subheadline}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterCol title={copy.footer.quickLinks}>
              {copy.nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-slate-600 hover:text-[rgb(var(--accent))]"
                >
                  {n.label}
                </a>
              ))}
            </FooterCol>
            <FooterCol title={copy.footer.servicesLinks}>
              {copy.services.items.slice(0, 6).map((s) => (
                <a
                  key={s.title}
                  href="#services"
                  className="text-sm text-slate-600 hover:text-[rgb(var(--accent))]"
                >
                  {s.title}
                </a>
              ))}
            </FooterCol>
            <FooterCol title={copy.footer.contact}>
              <div className="text-sm text-slate-600">
                <div>Suite 302, Suvd Center 34, Juulchnii Street, 3rd khoroo, Chingeltei District, Ulaanbaatar, Mongolia</div>
                <div className="mt-2">+976 99032682 89059019</div>
                <div className="mt-2">info@bayasakhsurvey.mn</div>
              </div>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 active:brightness-90"
              >
                {copy.hero.secondaryCta}
              </a>
            </FooterCol>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-500">{copyright}</div>
          <div className="text-xs text-slate-500">
            <span className={cn("font-semibold text-slate-700")}>
              {copy.brand.name}
            </span>{" "}
            — engineering-grade geodetic delivery.
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid content-start gap-3">
      <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
        {title}
      </div>
      <div className="grid gap-2">{children}</div>
    </div>
  );
}

