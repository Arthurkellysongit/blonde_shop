"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Vestido Floral",
    price: "R$ 129,90",
    image: "/fotos/vestido.jpg",
    description: "Vestido leve e confortável para o dia a dia.",
  },
  {
    id: 2,
    name: "Blusa Básica",
    price: "R$ 59,90",
    image: "/fotos/blusa.jpg",
    description: "Blusa básica em algodão premium.",
  },
   {
    id: 3,
    name: "Bracelete Pulseira Feminino Ajustável Berloque Aço inox 316l Coração",
    price: "R$ 40,90",
    image: "/fotos/Bracelete.jpg",
    description: "Os aços inox 316L não oxidam e não descascam por isso garantimos a sua qualidade.",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 p-4">

          <h1 className="text-2xl font-bold text-pink-600">
            Blonde Shop
          </h1>

          <div className="w-full md:flex-1">
           <input
  type="text"
  placeholder="Buscar produto..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full h-11 px-4 rounded-xl border border-pink-600
  focus:outline-none focus:ring-2 focus:ring-pink-600
  text-pink-600 placeholder-pink-600"
/>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-600">
          Nova Coleção 2026
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Peças modernas, elegantes e perfeitas para destacar sua beleza.
        </p>
      </section>

      {/* PRODUTOS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum produto encontrado.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4"
              >
                {/* IMAGEM CLICÁVEL */}
                
                <div
  className="overflow-hidden rounded-2xl cursor-pointer bg-white"
  onClick={() => setSelectedImage(product.image)}
>
  <Image
    src={product.image}
    alt={product.name}
    width={400}
    height={400}
    className="w-full h-auto object-contain"
  />
</div>
                <div className="mt-4">
                  <h3 className="text-xl text-gray-600">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {product.description}
                  </p>
                  <p className="text-pink-600 font-bold text-lg mt-3">
                    {product.price}
                  </p>
                </div>

                <a
                  href={`https://wa.me/558399999999?text=${encodeURIComponent(
                    `Olá! Tenho interesse no produto: ${product.name}`
                  )}`}
                  target="_blank"
                  className="block text-center mt-4 bg-green-500 text-white py-2 rounded-2xl hover:bg-green-600 transition"
                >
                  Falar no WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* MODAL ZOOM */}
     {selectedImage && (
 <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
    onClick={() => setSelectedImage(null)}
    >
    <div className="max-w-4xl w-full">
      <Image
        src={selectedImage}
        alt="Imagem ampliada"
        width={1000}
        height={1000}
        className="w-[100%] h-[90vh] object-contain rounded-xl mx-auto"
      />
    </div>
  </div>
)}

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        © 2026 Blonde Shop. Todos os direitos reservados.
      </footer>

    </main>
  );
}