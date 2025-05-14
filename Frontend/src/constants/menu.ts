import { ROUTES } from "@/constants/routes";
import {
  FaBell,
  FaChartBar,
  FaCog,
  FaExclamationTriangle,
  FaPaw,
  FaUserFriends,
} from "react-icons/fa";

export const MENU_ITEMS = [
  { label: "Lorem", icon: FaChartBar, to: ROUTES.lorem },
  { label: "Ipsum", icon: FaPaw, to: ROUTES.ipsum },
  { label: "Is", icon: FaUserFriends, to: ROUTES.is },
  { label: "Simply", icon: FaExclamationTriangle, to: ROUTES.simply },
  { label: "Dummy", icon: FaBell, to: ROUTES.dummy },
  { label: "Text", icon: FaCog, to: ROUTES.text },
];
