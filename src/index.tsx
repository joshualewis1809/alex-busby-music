import { createRoot } from "react-dom/client";
import "./index.module.scss";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
