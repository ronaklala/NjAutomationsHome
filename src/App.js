import "./App.css";
import Header from "./shared/header";
import MobileMenu from "./shared/mobilemenu";
import Footer from "./shared/footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="body_wrap">
        <div className="page_wrap">
          <Header />
          <MobileMenu />
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
