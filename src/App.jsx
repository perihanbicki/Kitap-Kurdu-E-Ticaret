import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetail from "./components/ProductDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />

          {/*dinamik sayfalama için (dinamik route):*/}

          <Route path="/ürün/:id" element={<ProductDetail />} />
          {/* nested routes, iç içe yollar yapmak*/}

          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
