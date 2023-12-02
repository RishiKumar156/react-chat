import React, { useEffect, useState } from "react";
import axios from "axios";
import enivronment from "../../Config";
import Navigation from "../Nav/Navigation";

export default function Home() {
  const [products, setProducts] = useState([]);
  const allProductsUrl = "products";

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

  return (
    <div className="flex flex-col w-[100vw] h-screen">
      <Navigation />
      <h3 className="mt-[15vh]">Products</h3>
      <div className="flex flex-wrap justify-evenly gap-[1rem]">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[400px] h-[300px] flex p-4 bg-[#FF8C8C] mb-[1rem]"
          >
            <img
              src={product.image}
              className="w-[150px] h-full object-cover"
              alt=""
            />
            <div className="flex flex-col flex-grow w-[150px] p-5">
              <h2 className="font-semibold text-white">{product.category}</h2>
              <p className="text-sm text-white">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
