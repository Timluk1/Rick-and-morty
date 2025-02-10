import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from '@mui/material/styles';
import App from "./App.tsx";
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "styles/theme.ts";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
);
