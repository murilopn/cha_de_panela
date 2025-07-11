// frontend/src/components/PurchaseModal.tsx

import React from "react";

// Interfaces continuam as mesmas...
interface Produto {
  id: number;
  nome: string;
  preco: number;
  url_imagem: string;
  disponivel: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  product: Produto | null;
}

function PurchaseModal({ isOpen, onClose, onConfirm, product }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Esta é a propriedade chave para centralizar verticalmente
    zIndex: 50,
  };

  // AQUI ESTÁ A MUDANÇA: Criamos um objeto de estilo
  const modalBoxStyle: React.CSSProperties = {
    backgroundColor: "white",
    textAlign: "center",
    padding: "32px",
    borderRadius: "8px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    width: "100%",
    maxWidth: "28rem",
  };

  return (
    <div style={overlayStyle}>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        {/* Aplicamos nosso objeto de estilo diretamente aqui */}
        <div style={modalBoxStyle}>
          <p
            style={{
              fontSize: "1.125rem",
              marginBottom: "24px",
              color: "#374151",
            }}
          >
            Você deseja realmente comprar o produto: <br />
            <strong
              style={{
                fontWeight: "bold",
                fontSize: "1.25rem",
                color: "#000000",
              }}
            >
              {product?.nome}
            </strong>
            ?
          </p>

          <p
            style={{
              fontSize: "1.125rem",
              marginBottom: "24px",
              color: "#374151",
            }}
          >
            O valor é R${product?.preco} <br />
            <br />
            (Caso sim, aparecerá o QrCode para realizar o depósito no PIX)
          </p>

          <div className="flex justify-center gap-6 mt-4">
            <button
              onClick={onConfirm}
              className="px-8 py-3 text-lg rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Sim
            </button>
            <button
              onClick={onClose}
              className="px-8 py-3 text-lg rounded-md bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseModal;
