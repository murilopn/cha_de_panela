import React from "react";
// 1. Importando os componentes que criamos
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
// Opcional: Se você tiver um arquivo de CSS global além do Tailwind, importe-o aqui.
// import './App.css';
function App() {
  // 2. Convertendo o estilo do body para um objeto JSX
  const pageStyle = {
    fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
  };
  // 3. Organizando os componentes na estrutura da página
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={pageStyle}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <main className="px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1500px] flex-1">
            <Hero />
            <ProductGrid /> {/* O único componente dinâmico! */}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;
