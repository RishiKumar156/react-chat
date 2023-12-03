import React, { useEffect, useState } from "react";
import axios from "axios";
import enivronment from "../../Config";
import Navigation from "../Nav/Navigation";
import DialogBox from "../DialogBox";

export default function Home() {
  const [products, setProducts] = useState([]);
  const allProductsUrl = "products";
  const [isOpen, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${enivronment.baseUrl}/${allProductsUrl}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="flex flex-col w-[100vw] h-screen overflow-x-hidden">
      <Navigation />
      <h3 className="mt-[15vh]">Products</h3>
      <div className="flex flex-wrap justify-evenly gap-[1rem]">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[400px] h-[300px] transition-all duration-700 hover:bg-[#FF8C8C] rounded-sm flex items-center p-4 mb-[1rem]"
          >
            <img
              src={product.image}
              className="w-[150px] h-full object-cover"
              alt=""
            />
            <div className="flex flex-col group flex-grow w-[150px] p-4">
              <h2 className="font-semibold group-hover:[text-white]">
                {product.category}
              </h2>
              <p className="text-[0.8rem] group-hover:[text-white]">
                {truncateString(product.description, 150)}
              </p>
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {isOpen && selectedProduct && (
        <DialogBox
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          data={selectedProduct}
        />
      )}
    </div>
  );
}
