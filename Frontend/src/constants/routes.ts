
export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  ipsum: "/ipsum",
  is: "/is",
  simply: "/simply",
  dummy: "/dummy",
  text: "/text"
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
