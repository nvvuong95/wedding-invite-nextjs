import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WeddingInviteScripts from "@/components/WeddingInviteScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiệp mời Vương - Nhung",
  description: "Thiệp mời Vương - Nhung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style_ladi.css" />
        {/* <link rel="stylesheet" href="/css/style_animation.css" /> */}
        <link rel="stylesheet" href="/css/style_page.css" />
        <link rel="stylesheet" href="/css/style_element.css" />
        <link rel="stylesheet" href="/css/style_lazyload.css" />
        <meta charSet="UTF-8" />
        <title>Thiệp mời Vương - Nhung</title>
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Expires" content="-1" />
        <meta name="keywords" content="" />
        <meta name="description" content="Thiệp mời Vương - Nhung" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.ladi_viewport=function(b){var a=document;b=b?b:'innerWidth';var c=window[b];var d=c<768;if(typeof window.ladi_is_desktop=="undefined"||window.ladi_is_desktop==undefined){window.ladi_is_desktop=!d;}var e=960;var f=420;var g='';if(!d){g="width="+e+",user-scalable=no,initial-scale=1.0";}else{var h=1;var i=f;if(i!=c){h=c / i;}g="width="+i+",user-scalable=no,initial-scale="+h+",minimum-scale="+h+",maximum-scale="+h;}var j=a.getElementById("viewport");if(!j){j=a.createElement("meta");j.id="viewport";j.name="viewport";a.head.appendChild(j);}j.setAttribute("content",g);};window.ladi_viewport();window.ladi_fbq_data = [];window.ladi_fbq = function () {window.ladi_fbq_data.push(arguments);};window.ladi_ttq_data = [];window.ladi_ttq = function () {window.ladi_ttq_data.push(arguments);};
            `,
          }}
        />
        <meta property="og:title" content="Vương Nhung" />
        <meta property="og:type" content="website" />
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
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Prata&family=Quicksand:wght@400;700&family=Muli:wght@400;700&family=Play:wght@400;700&family=Dancing+Script:wght@400;700&family=Niramit:wght@400;700&family=Montserrat:wght@400;700&family=Mulish:wght@400;700&family=Itim&family=Oswald:wght@400;700&family=Athiti:wght@400;700&family=Chonburi&family=Philosopher:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prata&family=Quicksand:wght@400;700&family=Muli:wght@400;700&family=Play:wght@400;700&family=Dancing+Script:wght@400;700&family=Niramit:wght@400;700&family=Montserrat:wght@400;700&family=Mulish:wght@400;700&family=Itim&family=Oswald:wght@400;700&family=Athiti:wght@400;700&family=Chonburi&family=Philosopher:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link
          rel="stylesheet"
          href="/css/wedding_animation.css"
          precedence="default"
        />
      </head>
      <body className={`lazyload ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <WeddingInviteScripts />
    </html>
  );
}
