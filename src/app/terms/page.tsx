import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${siteConfig.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <SectionLabel>Legal</SectionLabel>
      <h1 className="mt-5 font-display text-4xl text-ink md:text-5xl">Terms of Service</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
        Last updated · {new Date().getFullYear()}
      </p>

      <div className="mt-10 space-y-6 leading-relaxed text-graphite [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink">
        <p>
          These terms govern your use of the {siteConfig.name} website. By using
          this site you agree to them.
        </p>

        <h2>Use of this site</h2>
        <p>
          The content here is provided for information about our services and
          products. You may not copy, resell or misrepresent it as your own.
        </p>

        <h2>Our work</h2>
        <p>
          Project enquiries made through this site are not a binding agreement.
          Any engagement is governed by a separate scope and contract agreed in
          writing before work begins.
        </p>

        <h2>Third-party links</h2>
        <p>
          This site links to our products and to client work hosted elsewhere.
          We&rsquo;re not responsible for the content or practices of those
          external sites.
        </p>

        <h2>Liability</h2>
        <p>
          This website is provided &ldquo;as is&rdquo;. To the extent permitted by
          law, {siteConfig.name} is not liable for any loss arising from its use.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a className="text-ink underline decoration-mint underline-offset-4" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
