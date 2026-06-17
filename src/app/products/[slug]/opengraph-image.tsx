import { ImageResponse } from "next/og";
import { getProduct, products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const alt = "Geotech Digital Horizon Limited product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const paper = "#080b0e";
const ink = "#f3f6f2";
const slate = "#c9d1cb";
const graphite = "#99a39c";
const mint = "#38f0b2";

export default async function ProductOg({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  const name = product?.name ?? siteConfig.name;
  const tagline = product?.tagline ?? siteConfig.tagline;
  const category = product?.category ?? "Digital product";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: paper,
          backgroundImage:
            "radial-gradient(55% 55% at 88% 0%, rgba(56,240,178,0.18) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 64px 64px, 64px 64px",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 4,
            color: graphite,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" style={{ marginRight: 16 }}>
              <g stroke={slate} strokeWidth={7.5} strokeLinecap="square" strokeLinejoin="miter">
                <path d="M78 26 H26 V74 H74 V50 H52" />
                <path d="M64 38 H38 V62 H57" />
              </g>
              <circle cx="49" cy="50" r="9" fill={ink} />
              <circle cx="49" cy="50" r="5.5" fill={mint} />
            </svg>
            Geotech Digital Horizon Limited
          </div>
          <div>{category}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 150,
              fontWeight: 700,
              color: ink,
              letterSpacing: -4,
            }}
          >
            {name}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: slate, marginTop: 8 }}>
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: graphite }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, backgroundColor: mint }} />
          A product built &amp; run by Geotech Digital Horizon Limited
        </div>
      </div>
    ),
    { ...size },
  );
}
