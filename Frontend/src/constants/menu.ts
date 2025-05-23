import { ROUTES } from "@/constants/routes";
import {
  FaBell,
  FaChartBar,
  FaCog,
  FaPaw,
  FaUserFriends,
} from "react-icons/fa";

export const MENU_ITEMS = [
  { label: "Home", icon: FaPaw, to: ROUTES.home },
  { label: "Dashboard", icon: FaChartBar, to: ROUTES.dashboard },
  { label: "Cadastros", icon: FaUserFriends, to: ROUTES.cadastros },
  { label: "Notificações", icon: FaBell, to: ROUTES.notificacoes },
  { label: "Configurações", icon: FaCog, to: ROUTES.configuracoes },
];
