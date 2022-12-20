import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { startServer } from "@avinashcodelabs/mock-api-server";

startServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
