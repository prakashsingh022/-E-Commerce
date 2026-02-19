import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import QuickViewModal from "./QuickViewModal"; // import modal

// Import images
import Gray from "/Images/Grey.jpg";
import Black from "/Images/Black.jpg";
import Blueflower from "/Images/blue-flower.jpg";
import Blue from "/Images/Blue.jpg";
import Maroon from "/Images/Maroon.jpg";
import PinkBlue from "/Images/pink-blue.jpg";
import Purple from "/Images/Purple.jpg";
import Voilet from "/Images/voilet.jpg";
import Yellow from "/Images/Yellow.jpg";
import Yellowcotton from "/Images/yellow-cotton.jpg";
import YellowBlack from "/Images/yellow-black.jpg";
import Whitered from "/Images/White-Red.jpg";

const products = [
  {
    id: 1,
    name: "Floral Suit Set",
    image: Gray,
    priceBefore: 2499,
    priceAfter: 1999,
    discountPercent: 20,
    description: "Beautiful floral printed suit set made with soft cotton.",
    images: [Gray, Black, Blueflower],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Pastel Embroidered Set",
    image: Black,
    priceBefore: 2799,
    priceAfter: 2239,
    discountPercent: 20,
    description: "Elegant pastel suit set with hand embroidery.",
    images: [Black, Maroon, Blue],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 3,
    name: "Blue Floral Cotton Set",
    image: Blueflower,
    priceBefore: 2399,
    priceAfter: 1899,
    discountPercent: 21,
    description: "Soft cotton suit set with floral blue design.",
    images: [Blueflower, Blue, Gray],
    sizes: ["S", "M", "L"],
  },
  {
    id: 4,
    name: "Classic Blue Set",
    image: Blue,
    priceBefore: 2599,
    priceAfter: 2079,
    discountPercent: 20,
    description: "Classy navy blue suit set with dupatta.",
    images: [Blue, Black, Purple],
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    name: "Maroon Festive Suit",
    image: Maroon,
    priceBefore: 2999,
    priceAfter: 2399,
    discountPercent: 20,
    description: "Rich maroon suit set perfect for festive occasions.",
    images: [Maroon, Black, Whitered],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Pink Blue Cotton Set",
    image: PinkBlue,
    priceBefore: 2299,
    priceAfter: 1839,
    discountPercent: 20,
    description: "Cotton suit set in pastel pink & blue shades.",
    images: [PinkBlue, Gray, Yellow],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Purple Party Wear",
    image: Purple,
    priceBefore: 3299,
    priceAfter: 2639,
    discountPercent: 20,
    description: "Stylish purple suit set with modern prints.",
    images: [Purple, Blue, Voilet],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 8,
    name: "Voilet Cotton Kurta Set",
    image: Voilet,
    priceBefore: 2199,
    priceAfter: 1759,
    discountPercent: 20,
    description: "Comfortable violet cotton kurta with dupatta.",
    images: [Voilet, Purple, Gray],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Yellow Anarkali Suit",
    image: Yellow,
    priceBefore: 2799,
    priceAfter: 2239,
    discountPercent: 20,
    description: "Bright yellow anarkali suit for festive vibes.",
    images: [Yellow, Yellowcotton, YellowBlack],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 10,
    name: "Yellow Cotton Daily Wear",
    image: Yellowcotton,
    priceBefore: 1999,
    priceAfter: 1599,
    discountPercent: 20,
    description: "Simple and elegant cotton yellow daily wear set.",
    images: [Yellowcotton, Yellow, Blueflower],
    sizes: ["S", "M", "L"],
  },
  {
    id: 11,
    name: "Yellow Black Designer Suit",
    image: YellowBlack,
    priceBefore: 2599,
    priceAfter: 2079,
    discountPercent: 20,
    description: "Trendy yellow and black contrast designer suit.",
    images: [YellowBlack, Black, Maroon],
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 12,
    name: "White Red Party Wear",
    image: Whitered,
    priceBefore: 2899,
    priceAfter: 2319,
    discountPercent: 20,
    description: "Gorgeous white and red embroidered party wear suit.",
    images: [Whitered, Maroon, PinkBlue],
    sizes: ["S", "M", "L", "XL"],
  },
];

export default function SuitSet() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="px-4 py-12 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#2C4A52] mb-10">
        Suit Set
      </h2>

      {/* Product Grid */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* Image Container */}
            <div className="relative h-110 w-full overflow-hidden rounded-lg shadow bg-gray-100 group-hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Bottom Left: Save % */}
              <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold transition-opacity duration-300 group-hover:opacity-0">
                Save {product.discountPercent}%
              </div>

              {/* Bottom Right: Add to Bag */}
              <div className="absolute bottom-2 right-2 bg-white text-gray-800 p-1 rounded-full shadow transition-opacity duration-300 group-hover:opacity-0">
                <ShoppingBag className="w-4 h-4" />
              </div>

              {/* Hover Quick View */}
              <div
                onClick={() => setSelectedProduct(product)}
                className="absolute bottom-2 left-2 right-2 bg-[#2C4A52] text-white text-center py-3 opacity-0 group-hover:opacity-100 transition rounded-[8px] cursor-pointer"
              >
                Quick view
              </div>
            </div>

            {/* Description and Price */}
            <div className="pt-2">
              <h3 className="text-sm font-medium text-gray-800 mb-1 truncate">
                {product.name}
              </h3>
              <div className="text-sm font-semibold text-pink-600">
                ₹{product.priceAfter}{" "}
                <span className="text-gray-500 font-normal line-through text-xs ml-2">
                  ₹{product.priceBefore}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="w-full flex justify-center mt-12">
        <button
          className="relative overflow-hidden bg-[#F0E5C7] text-black px-10 py-4 rounded font-medium shadow transition duration-300 hover:text-white"
          style={{ border: "none" }}
        >
          <span className="relative z-10">VIEW ALL</span>
          <span className="absolute inset-0 bg-[#e2d3a9] wave-animation"></span>
        </button>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </section>
  );
}
