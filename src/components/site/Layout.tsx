import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-foreground bg-[linear-gradient(to_bottom,oklch(0.08_0_0)_0%,oklch(0.08_0_0)_22%,oklch(0.14_0_0)_55%,oklch(0.22_0_0)_85%,oklch(0.28_0_0)_100%)]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
