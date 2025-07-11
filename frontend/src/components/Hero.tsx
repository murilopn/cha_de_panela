// src/components/Hero.tsx
import React from "react";
import heroImage from "../assets/teste.png";
function Hero() {
  const heroStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("${heroImage}")`,
  };

  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[400px]"
          style={heroStyle}
        >
          {/* <div className="bg-black bg-opacity-60 px-3 py-2 rounded">
            <p
              style={{
                color: "white",
                fontSize: "2.0rem",
                marginBottom: "8px",
                marginLeft: "2px",
              }}
            >
              Chá de Panela Fernanda & Danilo
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
