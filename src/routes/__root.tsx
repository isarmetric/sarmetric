import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { I18nProvider, useT } from "@/i18n/context";
import { messagesForLocale } from "@/i18n/fromMatches";
import { resolveLocaleSync } from "@/i18n/resolveLocaleSync";
import { DEFAULT_LOCALE, type Locale } from "@/i18n/locale";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">{t.errors.notFound.title}</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {t.errors.notFound.subtitle}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.errors.notFound.description}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.errors.notFound.homeButton}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const t = useT();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t.errors.error.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.errors.error.description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.errors.error.tryAgain}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.errors.error.goHome}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  locale: Locale;
}>()({
  beforeLoad: () => {
    const locale = resolveLocaleSync();
    return { locale };
  },
  head: () => {
    const t = messagesForLocale(resolveLocaleSync());
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: t.meta.notFound.title },
        { name: "description", content: t.meta.notFound.description },
        { property: "og:site_name", content: "SAR Metrics" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
        { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192x192.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(organizationJsonLd()),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(websiteJsonLd()),
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const locale = useRouterState({
    select: (s) => {
      const root = s.matches[0]?.context as { locale?: Locale } | undefined;
      return root?.locale ?? DEFAULT_LOCALE;
    },
  });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient, locale } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider locale={locale}>
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
