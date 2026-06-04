import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <SectionLabel>Legal</SectionLabel>
      <h1 className="mt-5 font-display text-4xl text-ink md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
        Last updated · {new Date().getFullYear()}
      </p>

      <div className="mt-10 space-y-6 leading-relaxed text-graphite [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink">
        <p>
          {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
          privacy. This page explains what we collect when you use this website
          and contact us.
        </p>

        <h2>What we collect</h2>
        <p>
          When you submit the contact form we collect your name, email address
          and the project details you choose to share. We use this solely to
          respond to your enquiry.
        </p>

        <h2>How we use it</h2>
        <p>
          We use your information to reply to you, scope potential work and keep
          a record of our correspondence. We do not sell your data, and we do not
          share it with third parties except trusted tools used to operate our
          business (such as email delivery).
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask us to access or delete the information you&rsquo;ve shared
          at any time by emailing{" "}
          <a className="text-ink underline decoration-mint underline-offset-4" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Reach us at {siteConfig.email}. We&rsquo;re
          based in {siteConfig.location.city}, {siteConfig.location.country}.
        </p>
      </div>
    </div>
  );
}
