
export const ROUTES = {
  login: "/",
  home: "/home",
  dashboard: "/dashboard",
  cadastros: "/cadastros",
  notificacoes: "/notificacoes",
  configuracoes: "/configuracoes",
  forget: "/forget",
  newpass: "/newpass"
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];