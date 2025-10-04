import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WeddingInviteScripts from "@/components/WeddingInviteScript";
import { LightboxProvider } from "@/context/lightbox-context";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiệp cưới Vương & Nhung",
  description:
    "Trân trọng kính mời quý khách tới tham dự đám cưới của chúng tôi.",
  openGraph: {
    title: "Thiệp cưới Vương & Nhung",
    description:
      "Trân trọng kính mời quý khách tới tham dự đám cưới của chúng tôi.",
    url: "https://wedding.vuongnguyen.info",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/Latest/4M8A9372.JPG?tr=w-1200,h-630,fo-auto",
        width: 1200,
        height: 630,
        alt: "Thiệp cưới Vương & Nhung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiệp cưới Vương & Nhung",
    description:
      "Trân trọng kính mời quý khách tới tham dự đám cưới của chúng tôi.",
    images: [
      "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/Latest/4M8A9372.JPG?tr=w-1200,h-630,fo-auto",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style_ladi.css" />
        <link rel="stylesheet" href="/css/style_page.css" />
        <link rel="stylesheet" href="/css/style_element.css" />
        <link rel="stylesheet" href="/css/style_lazyload.css" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />
        <meta name="keywords" content="" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ladi_viewport=function(b){var a=document;b=b?b:'innerWidth';var c=window[b];var d=c<768;if(typeof window.ladi_is_desktop=="undefined"||window.ladi_is_desktop==undefined){window.ladi_is_desktop=!d;}var e=960;var f=420;var g='';if(!d){g="width="+e+",user-scalable=no,initial-scale=1.0";}else{var h=1;var i=f;if(i!=c){h=c / i;}g="width="+i+",user-scalable=no,initial-scale="+h+",minimum-scale="+h+",maximum-scale="+h;}var j=a.getElementById("viewport");if(!j){j=a.createElement("meta");j.id="viewport";j.name="viewport";a.head.appendChild(j);}j.setAttribute("content",g);};window.ladi_viewport();
            `,
          }}
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="revisit-after" content="days" />
        <link rel="dns-prefetch" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="/css/wedding_animation.css"
          precedence="default"
        />
      </head>
      <body className={`lazyload ${geistSans.variable} ${geistMono.variable}`}>
        <LightboxProvider>{children}</LightboxProvider>
        <WeddingInviteScripts />
      </body>
    </html>
  );
}
