import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Importamos o card que acabamos de criar!
import PurchaseModal from "./PurchaseModal.tsx";
import ThankYouScreen from "./ThankYouScreen.tsx";

// Reutilizamos a mesma interface para garantir que os dados estão corretos
interface Produto {
  id: number;
  nome: string;
  preco: number;
  url_imagem: string;
  disponivel: boolean;
}

function ProductGrid() {
  // --- Seus estados e funções estão todos corretos! ---
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // Função assíncrona para buscar os produtos
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/produtos"); //Se a resposta da rede não for 'ok' (ex: erro 404, 500), lançamos um erro.
        if (!response.ok) {
          throw new Error("Não foi possível carregar a lista de presentes.");
        }
        const data: Produto[] = await response.json();
        setProducts(data); // Sucesso! Guardamos os produtos no nosso estado.
      } catch (err) {
        // Se qualquer erro acontecer no bloco 'try', ele cai aqui.
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocorreu um erro desconhecido.");
        }
      } finally {
        // O bloco 'finally' sempre roda no final, com sucesso ou erro.
        // Perfeito para dizer que o carregamento terminou.
        setLoading(false);
      }
    };

    fetchProducts(); // Executamos a função de busca
  }, []);

  const handleOpenModal = (product: Produto) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleConfirmPurchase = async () => {
    if (!selectedProduct) return;

    try {
      const response = await fetch(`/api/produtos/${selectedProduct.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disponivel: false }),
      });

      if (!response.ok) {
        throw new Error(
          "Não foi possível atualizar o produto no banco de dados."
        );
      }

      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, disponivel: false }
          : product
      );
      setProducts(updatedProducts);

      setShowThankYou(true); // <- mantém o produto selecionado
      setIsModalOpen(false); // <- só fecha o modal de compra
    } catch (error) {
      console.error("Erro ao confirmar a compra:", error);
    }
  };

  if (loading) {
    return <p className="p-4 text-center">Carregando presentes...</p>;
  }

  // Se ocorreu um erro, mostramos o erro.
  if (error) {
    return <p className="p-4 text-center text-red-500">{error}</p>;
  }

  // --- Renderização Principal (Quando tudo deu certo) ---
  return (
    <>
      <h2 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Lista de Presentes
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-6 p-4 ">
        {/* bg-gray-200 border-4 border-red-500 */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            produto={product}
            onImageClick={() => handleOpenModal(product)}
          />
        ))}
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmPurchase}
        product={selectedProduct}
      />

      {/* 4. RENDERIZE A TELA DE AGRADECIMENTO CONDICIONALMENTE */}
      {showThankYou && selectedProduct && (
        <ThankYouScreen
          productPrice={selectedProduct.preco}
          onClose={() => {
            setShowThankYou(false);
            setSelectedProduct(null); // <- só aqui limpamos
          }}
        />
      )}
    </>
  );
}

export default ProductGrid;
