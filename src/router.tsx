import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { DEFAULT_LOCALE, type Locale } from "./i18n/locale";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient, locale: DEFAULT_LOCALE as Locale },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
