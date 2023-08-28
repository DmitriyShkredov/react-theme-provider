import "./App.css";
import { ThemeProvider } from "./providers";
import { Header, Main, Footer } from "./components";

function App() {
  return (
    <ThemeProvider>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
