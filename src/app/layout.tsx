import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "电摩情报站",
  description: "电动摩托车信息聚合看板",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="m-0 font-sans antialiased bg-[#eef1f4]">{children}</body>
    </html>
  );
}
