import axios from "axios";
import { useEffect, useState } from "react";
import enivronment from "../../Config";
export default function Home() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      const response = await axios.get(
        `${enivronment.baseUrl}/products?limit=5`
      );
      const items = response.data.map(
        ({ category, description, id, rating, image, title }) => ({
          index: id,
          cat: category,
          desc: description,
          img: image,
          price: rating,
          prod_name: title,
        })
      );
      setData(items);
    };
    fetch_data();
  }, []);
  console.log(Data);
  return (
    <div className="w-3/5 h-screen overflow-auto flex flex-col items-center">
      {Data.map((product) => (
        <div
          key={product.index}
          className="w-4/5 h-[400px] p-5 m-2 rounded bg-[#efefef] flex items-center"
        >
          <div className="flex flex-col w-2/6 p-2">
            <img src={product.img} alt={product.prod_name} className="w-full" />
            <h2 className="text-sm">{product.prod_name}</h2>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base font-semibold p-2">{product.cat}</p>
            <p className="text-xs p-2">{product.desc}</p>
            <p className="text-xs font-semibold p-2">
              Price ~ ${product.price.rate} No.of.items :{product.price.count}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
