// frontend/src/components/ThankYouScreen.tsx

import React from "react";
// Lembre-se de usar o caminho para o SEU arquivo de QR Code
import qrCodeImage from "../assets/image.png";

interface ThankYouProps {
  onClose: () => void;
}

function ThankYouScreen({ onClose }: ThankYouProps) {
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
    // O overlay (fundo preto) que cobre a tela
    <div style={overlayStyle}>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div style={modalBoxStyle}>
          <div
            className="bg-white rounded-lg shadow-xl p-8 text-center w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Contêiner para a imagem do QR Code */}
            <div className="mb-6 flex justify-center">
              <img
                src={qrCodeImage}
                alt="QR Code para pagamento"
                className="w-64 h-64 object-contain"
              />
            </div>

            {/* AQUI ESTÁ A MUDANÇA: Inserimos as tags <br /> para forçar as quebras de linha */}
            <div className="mt-4 max-w-md text-center">
              <p className="text-gray-700 text-base leading-relaxed">
                Este QR Code encaminhará a cobrança diretamente para a conta do
                Danilo. Insira o valor do produto e confira o nome do
                destinatário antes de fazer o depósito.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">
                Ou copie o CPF para transferência:
                <div className="flex items-center justify-center gap-2">
                  <span
                    id="cpf-text"
                    className="font-mono text-gray-800 bg-gray-100 px-3 py-1 rounded"
                  >
                    16213339736
                  </span>
                  <button
                    onClick={() => navigator.clipboard.writeText("16213339736")}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Copiar
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouScreen;
