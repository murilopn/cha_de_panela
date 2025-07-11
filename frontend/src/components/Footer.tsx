// src/components/Footer.tsx
import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <nav className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a
              className="text-[#8a7760] text-base font-normal leading-normal min-w-40"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-[#8a7760] text-base font-normal leading-normal min-w-40"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-[#8a7760] text-base font-normal leading-normal min-w-40"
              href="#"
            >
              Contact Us
            </a>
          </nav>
          {/* Adicione os ícones de redes sociais aqui se desejar */}
          <p className="text-[#8a7760] text-base font-normal leading-normal">
            © 2025 Chá de Panela Fernanda & Danilo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
