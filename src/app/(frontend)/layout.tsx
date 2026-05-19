import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/layout/header";
import Footer from "./components/layout/Footer";
import { LivePreviewGate } from "@/components/LivePreviewListener/LivePreviewGate";
import { ChunkLoadRecovery, chunkLoadRecoveryScript } from "@/components/ChunkLoadRecovery";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../global.css";

const neueMontreal = localFont({
  src: [
    {
      path: "../../assets/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal", // "medium" is invalid, must be "normal"
    },
    {
      path: "../../assets/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal", // "bold" is invalid, must be "normal"
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valar Digital",
  description: "Beyond an Agency, We're the Team That Builds Beside You.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com'),
  openGraph: {
    title: "Valar Digital",
    description: "Beyond an Agency, We're the Team That Builds Beside You.",
    type: 'website',
    url: '/',
    siteName: 'Valar Digital',
    images: [
      {
        url: '/Images/valar_logo.png?v=4',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${neueMontreal.variable} antialiased font-sans`}>
        <Script
          id="chunk-load-recovery"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: chunkLoadRecoveryScript }}
        />
        <ChunkLoadRecovery />
        <Script id="linkedin-insight-tag" strategy="afterInteractive">
          {`_linkedin_partner_id = "9044801";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function (l) {
  if (!l) {
    window.lintrk = function (a, b) {
      window.lintrk.q.push([a, b]);
    };
    window.lintrk.q = [];
  }
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);
})(window.lintrk);`}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=9044801&fmt=gif" />',
          }}
        />
        <LivePreviewGate />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
