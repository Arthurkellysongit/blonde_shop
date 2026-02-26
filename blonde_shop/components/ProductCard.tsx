"use client";

import { useState } from "react";
import Image from "next/image";

type ProductProps = {
  name: string;
  price: string;
  image: string;
  description: string;
};

export default function ProductCard({
  name,
  price,
  image,
  description,
}: ProductProps) {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "558399999999";
  const message = `Olá! Tenho interesse no produto: ${name}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-4">
        <div onClick={() => setOpen(true)} className="cursor-zoom-in">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>

        <h2 className="text-lg font-semibold mt-2 text-pink-600">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-pink-600 font-bold mt-2">{price}</p>

        <a
          href={whatsappLink}
          target="_blank"
          className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Falar no WhatsApp
        </a>
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <Image
              src={image}
              alt={name}
              width={800}
              height={800}
              className="max-h-[80vh] w-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}