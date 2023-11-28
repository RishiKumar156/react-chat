import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      const response = await axios.get(``);
      console.log(response.data);
    };
    fetch_data();
  }, []);
  return <div className="w-2/5 bg-[#FF8C8C] p-5 h-screen">Home</div>;
}
