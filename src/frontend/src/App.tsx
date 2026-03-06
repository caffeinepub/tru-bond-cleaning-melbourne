import { Toaster } from "@/components/ui/sonner";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { routeTree } from "./routeTree";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </HelmetProvider>
  );
}
