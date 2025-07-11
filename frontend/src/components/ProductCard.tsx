import React from "react";

// As interfaces continuam as mesmas
interface Produto {
  id: number;
  nome: string;
  preco: number;
  url_imagem: string;
  disponivel: boolean;
}

interface Props {
  produto: Produto;
  onImageClick: () => void; // 1. ADICIONE A NOVA PROP
}

function ProductCard({ produto, onImageClick }: Props) {
  // 2. RECEBA A PROP AQUI
  const imageUrl = `http://localhost:3000/${produto.url_imagem}`;
  if (produto.disponivel) {
    return (
      <div className="flex flex-col gap-3 pb-3 w-full max-w-[240px] bg-white">
        {/* border-4 border-blue-500 */}
        {/* 3. ADICIONE O onClick E a classe cursor-pointer */}
        <div
          className="w-full aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition"
          onClick={onImageClick} // Chama a função que veio do ProductGrid
        >
          <img
            src={imageUrl}
            alt={produto.nome}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="...">{produto.nome}</p>
        <p className="...">R${Number(produto.preco)}</p>
      </div>
    );
  }
}

export default ProductCard;
