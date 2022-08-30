import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { TabPage } from "./pages/TabPage";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <TabPage />
  </StrictMode>
);
