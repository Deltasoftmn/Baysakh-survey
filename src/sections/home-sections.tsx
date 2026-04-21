"use client";

import Image from "next/image";
import React from "react";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import type { SiteCopy } from "@/content/site";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { Container, Section } from "@/components/layout";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/cn";

export function HeroSection({ copy }: { copy: SiteCopy }) {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[rgb(var(--brand-2))]"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/banner.png)" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/35 to-[rgb(var(--brand-2))]" />
      <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(900px_360px_at_18%_18%,rgba(245,126,32,0.22),transparent_60%)]" />

      <Container className="min-h-[88vh] pt-24 sm:min-h-[92vh] sm:pt-32 lg:pt-36">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/85 ring-1 ring-white/15 backdrop-blur">
                <span className="size-1.5 rounded-full bg-[rgb(var(--accent))]" />
                {copy.brand.legal}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance font-[var(--font-condensed)] text-[28px] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                {copy.hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
                {copy.hero.subheadline}
              </p>
            </Reveal>
            <Reveal delay={0.20}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#projects" variant="primary" className="px-6">
                  {copy.hero.primaryCta}
                  <ArrowRight className="size-4" />
                </Button>
                <Button href="#contact" variant="secondary" className="px-6">
                  {copy.hero.secondaryCta}
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/12 backdrop-blur sm:p-5">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {copy.about.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-black/20 p-4 ring-1 ring-white/10"
                    >
                      <div className="font-[var(--font-condensed)] text-2xl font-bold tracking-tight text-white">
                        {s.value}
                      </div>
                      <div className="mt-1 text-sm leading-snug text-white/70">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs leading-relaxed text-white/60">
                  {copy.brand.tagline}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutSection({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                kicker={copy.about.kicker}
                title={copy.about.title}
                body={copy.about.body}
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_35px_-20px_rgba(2,6,23,0.35)] sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-[rgb(var(--brand))]/10 text-[rgb(var(--brand))] ring-1 ring-[rgb(var(--brand))]/15">
                      <Icon name="crosshair" className="size-5" />
                    </div>
                    <div className="text-sm font-semibold tracking-wide text-slate-900">
                      {copy.about.missionTitle}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {copy.about.missionBody}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.10}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_35px_-20px_rgba(2,6,23,0.35)] sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-[rgb(var(--brand))]/10 text-[rgb(var(--brand))] ring-1 ring-[rgb(var(--brand))]/15">
                      <Icon name="shield-check" className="size-5" />
                    </div>
                    <div className="text-sm font-semibold tracking-wide text-slate-900">
                      {copy.about.visionTitle}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {copy.about.visionBody}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
                <div className="grid gap-5 sm:grid-cols-3">
                  {copy.about.stats.map((s) => (
                    <div key={s.label} className="min-w-0">
                      <div className="font-[var(--font-condensed)] text-2xl font-bold tracking-tight text-slate-900">
                        {s.value}
                      </div>
                      <div className="mt-1 text-sm leading-snug text-slate-600">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ServicesSection({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="services" className="bg-slate-50">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={copy.services.kicker}
            title={copy.services.title}
            body={copy.services.body}
          />
        </Reveal>

        <div className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.services.items.map((s, idx) => (
            <Reveal key={s.title} delay={Math.min(0.18, idx * 0.04)}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_-26px_rgba(2,6,23,0.35)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_-34px_rgba(2,6,23,0.45)] sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-[rgb(var(--brand))]/10 text-[rgb(var(--brand))] ring-1 ring-[rgb(var(--brand))]/15 transition group-hover:bg-[rgb(var(--brand))] group-hover:text-white">
                    <Icon name={s.icon} className="size-6" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 grow">
                    <div className="text-sm font-semibold leading-snug tracking-wide text-slate-900">
                      {s.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ProjectsSection({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="projects" className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={copy.projects.kicker}
            title={copy.projects.title}
            body={copy.projects.body}
          />
        </Reveal>

        <div className="mt-10 grid auto-rows-fr gap-5 lg:grid-cols-2">
          {copy.projects.items.map((p, idx) => (
            <Reveal key={p.title} delay={Math.min(0.18, idx * 0.04)}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-[0_20px_70px_-46px_rgba(2,6,23,0.6)]">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(600px_240px_at_18%_22%,rgba(245,126,32,0.25),transparent_60%)]" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold tracking-[0.18em] text-white/65">
                        {p.timeframe}
                      </div>
                      <div className="mt-2 text-balance text-base font-semibold tracking-tight text-white sm:text-lg">
                        {p.title}
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-semibold tracking-wide text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
                    >
                      {copy.projects.cta}
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                    {p.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function CapabilitiesSection({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="capabilities" className="bg-slate-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                kicker={copy.capabilities.kicker}
                title={copy.capabilities.title}
                body={copy.capabilities.body}
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
              {copy.capabilities.items.map((c, idx) => (
                <Reveal key={c.title} delay={Math.min(0.18, idx * 0.05)}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_-26px_rgba(2,6,23,0.35)]">
                    <div className="flex items-start gap-4">
                      <div className="grid size-11 place-items-center rounded-xl bg-[rgb(var(--brand))]/10 text-[rgb(var(--brand))] ring-1 ring-[rgb(var(--brand))]/15">
                        <Icon name={c.icon} className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold tracking-wide text-slate-900">
                          {c.title}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function EquipmentSection({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="equipment" className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={copy.equipment.kicker}
            title={copy.equipment.title}
            body={copy.equipment.body}
          />
        </Reveal>

        <div className="mt-10">
          <div className="hidden grid-cols-2 gap-5 lg:grid">
            {copy.equipment.items.map((e, idx) => (
              <Reveal key={e.title} delay={Math.min(0.18, idx * 0.05)}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 place-items-center rounded-xl bg-white text-[rgb(var(--brand))] ring-1 ring-black/5">
                      <Icon name={e.icon} className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-wide text-slate-900">
                        {e.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
              {copy.equipment.items.map((e) => (
                <div
                  key={e.title}
                  className="w-[84%] shrink-0 snap-start rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 place-items-center rounded-xl bg-white text-[rgb(var(--brand))] ring-1 ring-black/5">
                      <Icon name={e.icon} className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-wide text-slate-900">
                        {e.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 text-xs text-slate-500">
              {copy.equipment.kicker}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function TeamSection({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="team" className="bg-slate-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                kicker={copy.team.kicker}
                title={copy.team.title}
                body={copy.team.body}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-7">
                <Button href="#contact" variant="ghost" className="px-6">
                  {copy.team.cta}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
              {copy.team.items.map((t, idx) => (
                <Reveal key={t.name} delay={Math.min(0.18, idx * 0.05)}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_-26px_rgba(2,6,23,0.35)] sm:p-6">
                    <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                      {t.role}
                    </div>
                    <div className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                      {t.name}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                      {t.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function buildMailto(values: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const subject = "Bayasakh Survey — Cooperation request";
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    "",
    "Project details:",
    values.message
  ].join("\n");

  return `mailto:info@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactSection({ copy }: { copy: SiteCopy }) {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  return (
    <Section id="contact" className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={copy.contact.kicker}
            title={copy.contact.title}
            body={copy.contact.body}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
              <div className="text-sm font-semibold tracking-wide text-slate-900">
                {copy.contact.formTitle}
              </div>
              <form
                className="mt-5 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = buildMailto(form);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label={copy.contact.formFields.name}
                    value={form.name}
                    onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                    placeholder={copy.contact.formFields.name}
                  />
                  <Field
                    label={copy.contact.formFields.email}
                    value={form.email}
                    onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                    placeholder="name@company.com"
                  />
                </div>
                <Field
                  label={copy.contact.formFields.phone}
                  value={form.phone}
                  onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                  placeholder="+976 ..."
                />
                <Field
                  label={copy.contact.formFields.message}
                  value={form.message}
                  onChange={(v) => setForm((p) => ({ ...p, message: v }))}
                  placeholder={copy.contact.formFields.message}
                  multiline
                />
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:brightness-95 active:brightness-90 sm:w-auto"
                  >
                    {copy.contact.formFields.submit}
                    <ArrowRight className="size-4" />
                  </button>
                  <div className="mt-2 text-xs text-slate-500">
                    {copy.contact.emailLabel}:{" "}
                    <span className="font-semibold">info@example.com</span> (placeholder)
                  </div>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="grid gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_-26px_rgba(2,6,23,0.35)] sm:p-6">
                <div className="text-sm font-semibold tracking-wide text-slate-900">
                  {copy.contact.infoTitle}
                </div>
                <div className="mt-4 grid gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 text-[rgb(var(--brand))]" />
                    <div>
                      <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                        {copy.contact.addressLabel}
                      </div>
                      <div className="mt-1">
                        Ulaanbaatar, Mongolia (placeholder)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 text-[rgb(var(--brand))]" />
                    <div>
                      <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                        {copy.contact.phoneLabel}
                      </div>
                      <div className="mt-1">+976 0000 0000 (placeholder)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 text-[rgb(var(--brand))]" />
                    <div>
                      <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                        {copy.contact.emailLabel}
                      </div>
                      <div className="mt-1">info@example.com (placeholder)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
                <div className="text-sm font-semibold tracking-wide text-slate-900">
                  {copy.contact.mapTitle}
                </div>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="bg-grid h-48 w-full bg-white" />
                </div>
                <div className="mt-3 text-xs text-slate-500">
                  Google Maps embed placeholder (static site).
                </div>
              </div>

              <div className="rounded-2xl bg-[rgb(var(--brand-2))] p-4 text-white sm:p-6">
                <div className="text-xs font-semibold tracking-[0.18em] text-white/70">
                  {copy.contact.ctaTitle}
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight">
                  {copy.brand.legal}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/75">
                  {copy.contact.ctaBody}
                </div>
                <div className="mt-5">
                  <Button href="#projects" variant="secondary" className="px-6">
                    {copy.hero.primaryCta}
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  multiline
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
}) {
  const shared =
    "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]/40";

  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold tracking-wide text-slate-700">
        {label}
      </span>
      {multiline ? (
        <textarea
          className={cn(shared, "min-h-28 resize-y")}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={shared}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

