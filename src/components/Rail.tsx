"use client";

import { type FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/overview", label: "总览", icon: "M4 13h7V4H4v9Zm0 7h7v-5H4v5Zm9 0h7v-9h-7v9Zm0-16v5h7V4h-7Z" },
  { href: "/models", label: "车型库", icon: "M6.6 16.6A3.4 3.4 0 1 0 3.2 20a3.4 3.4 0 0 0 3.4-3.4Zm14.2 0A3.4 3.4 0 1 0 17.4 20a3.4 3.4 0 0 0 3.4-3.4ZM7.9 6.1h4.6l2.4 5.7h-4.1L7.9 6.1Zm6.5-2H7.2c-.8 0-1.3.8-1 1.5l3.9 7.8c.2.4.6.6 1 .6h5.2c.8 0 1.3-.8 1-1.5l-2.9-7.8c-.1-.4-.5-.6-1-.6Zm-2.7 9.3h-2a5.7 5.7 0 0 0-2.4-3L5.9 7.6 4.1 8.5l1.5 3A5.4 5.4 0 0 0 3.2 11a5.6 5.6 0 1 0 5.5 6.3h3.1v-3.9Zm5.6-2.4c-.7 0-1.3.1-1.9.4l.8 2.1c.3-.1.7-.2 1.1-.2a3.4 3.4 0 0 1 3.2 2.3h2.3a5.6 5.6 0 0 0-5.5-4.6Z" },
  { href: "/brands", label: "品牌", icon: "M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4Z" },
  { href: "/news", label: "资讯", icon: "M5 4h12a2 2 0 0 1 2 2v11.5A2.5 2.5 0 0 1 16.5 20h-11A2.5 2.5 0 0 1 3 17.5V6a2 2 0 0 1 2-2Zm0 2v11.5c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5V6H5Zm2 2h8v4H7V8Zm0 6h8v2H7v-2Z" },
  { href: "/delivery", label: "外卖车", icon: "M17 8H7V6a5 5 0 0 1 10 0v2Zm-9.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm9 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM5 16a2 2 0 0 1-2-2V9L2 6h4v2H5v5h1.5a3.5 3.5 0 0 1 6.8 0H19V7h-1V4a3 3 0 0 0-6 0v3H9V4a3 3 0 0 0-6 0v3H2l1 5a2 2 0 0 0 2 2h.2a3.5 3.5 0 0 1 6.3-1.8A3.5 3.5 0 0 1 16.8 16H19v-3h-3v-1h2V8h-4v5h-1.5a3.5 3.5 0 0 1-6.8-1.5H5v3.5a.5.5 0 0 0 .5.5h.2Z" },
  { href: "/charging", label: "补能", icon: "M6 3h7a2 2 0 0 1 2 2v14h-2v-4H6v4H4V5a2 2 0 0 1 2-2Zm0 2v8h7V5H6Zm11.7 1 2.8 4.2c.6.9.4 2.1-.5 2.8l-1 .8V20h-2v-7.2l1.8-1.4-2.8-4.2L17.7 6Z" },
];

const Rail: FC = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-58 bg-gray-900 text-gray-100 p-4 flex flex-col shrink-0">
      <Link href="/overview" className="flex items-center gap-2.5 mb-7 font-extrabold text-white no-underline">
        <span className="grid place-items-center w-9 h-9 rounded-lg bg-blue-500">
          <svg viewBox="0 0 64 64" className="w-5 h-5 fill-white">
            <ellipse cx="18" cy="40" rx="8" ry="8" />
            <ellipse cx="46" cy="40" rx="8" ry="8" />
            <path d="M24 20h10l7 16H28l-4-9-5 9H14l10-16z" />
            <rect x="28" y="28" width="2" height="8" rx="1" opacity="0.5" />
          </svg>
        </span>
        <span className="text-sm">电摩情报站</span>
      </Link>
      <nav className="flex flex-col gap-1.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm no-underline transition-colors ${
                isActive ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
                <path d={item.icon} />
              </svg>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Rail;
