import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "청첩장 부엉 - 누엉",
  description: "청첩장 부엉 - 누엉",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
