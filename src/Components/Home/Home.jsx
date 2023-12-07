import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../Nav/Navigation";
import DialogBox from "../DialogBox";
import environment from "../../Config";

export default function Home() {
  const [products, setProducts] = useState([]);
  const allProductsUrl = "products";
  const [isOpen, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${environment.baseUrl}/${allProductsUrl}`
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
      <h3 className="mt-[15vh] text-center text-[2rem] py-[1rem]">Products</h3>
      <div className="flex flex-wrap justify-evenly gap-[1rem]">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[400px] h-[300px] transition-all duration-700 hover:bg-[#FF8C8C] group rounded-sm flex items-center p-4 mb-[1rem]"
          >
            <img
              src={product.image}
              className="w-[150px] h-full object-cover p-4"
              alt=""
            />
            <div className="flex flex-col group-hover:text-white items-start justify-center group flex-grow w-[150px] p-4">
              <h2 className="font-semibold group-hover:[text-white] pb-2 capitalize">
                {product.category}
              </h2>
              <p className="text-[0.8rem] mb-[0.5rem] group-hover:[text-white]">
                {truncateString(product.description, 150)}
              </p>
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
                className="bg-[#FF8c8c] group-hover:bg-white group-hover:text-[#ff8c8c] rounded-sm text-white py-2 px-4 mt-2"
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
