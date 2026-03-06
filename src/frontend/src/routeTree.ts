import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { createElement } from "react";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SuburbsListPage from "./pages/SuburbsListPage";
import BathroomCleaningPage from "./pages/services/BathroomCleaningPage";
import CarpetSteamCleaningPage from "./pages/services/CarpetSteamCleaningPage";
import EndOfLeaseCleaningPage from "./pages/services/EndOfLeaseCleaningPage";
import OvenKitchenCleaningPage from "./pages/services/OvenKitchenCleaningPage";
import WallsSkirtingCleaningPage from "./pages/services/WallsSkirtingCleaningPage";
import WindowCleaningPage from "./pages/services/WindowCleaningPage";
import BoxHillPage from "./pages/suburbs/BoxHillPage";
import BrunswickPage from "./pages/suburbs/BrunswickPage";
import CarltonPage from "./pages/suburbs/CarltonPage";
import DocklandsPage from "./pages/suburbs/DocklandsPage";
import FitzroyPage from "./pages/suburbs/FitzroyPage";
import FrankstonPage from "./pages/suburbs/FrankstonPage";
import PrahranPage from "./pages/suburbs/PrahranPage";
import RichmondPage from "./pages/suburbs/RichmondPage";
import SouthYarraPage from "./pages/suburbs/SouthYarraPage";
import StKildaPage from "./pages/suburbs/StKildaPage";

const rootRoute = createRootRoute({
  component: () => createElement(Outlet),
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: ContactPage,
});

const endOfLeaseRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services/end-of-lease-cleaning",
  component: EndOfLeaseCleaningPage,
});

const carpetCleaningRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services/carpet-steam-cleaning",
  component: CarpetSteamCleaningPage,
});

const windowCleaningRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services/window-cleaning",
  component: WindowCleaningPage,
});

const ovenKitchenRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services/oven-kitchen-cleaning",
  component: OvenKitchenCleaningPage,
});

const bathroomRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services/bathroom-cleaning",
  component: BathroomCleaningPage,
});

const wallsSkirtingRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services/walls-skirting-cleaning",
  component: WallsSkirtingCleaningPage,
});

// Suburbs routes
const suburbsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs",
  component: SuburbsListPage,
});

const southYarraRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/south-yarra",
  component: SouthYarraPage,
});

const richmondRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/richmond",
  component: RichmondPage,
});

const stKildaRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/st-kilda",
  component: StKildaPage,
});

const carltonRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/carlton",
  component: CarltonPage,
});

const fitzroyRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/fitzroy",
  component: FitzroyPage,
});

const brunswickRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/brunswick",
  component: BrunswickPage,
});

const prahranRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/prahran",
  component: PrahranPage,
});

const docklandsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/docklands",
  component: DocklandsPage,
});

const boxHillRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/box-hill",
  component: BoxHillPage,
});

const frankstonRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/suburbs/frankston",
  component: FrankstonPage,
});

export const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    homeRoute,
    servicesRoute,
    aboutRoute,
    contactRoute,
    endOfLeaseRoute,
    carpetCleaningRoute,
    windowCleaningRoute,
    ovenKitchenRoute,
    bathroomRoute,
    wallsSkirtingRoute,
    suburbsRoute,
    southYarraRoute,
    richmondRoute,
    stKildaRoute,
    carltonRoute,
    fitzroyRoute,
    brunswickRoute,
    prahranRoute,
    docklandsRoute,
    boxHillRoute,
    frankstonRoute,
  ]),
]);
