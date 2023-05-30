import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import "./App.css";
import Router from "./routes";
import ScrollToTop from "./components/scroll-to-top";
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
