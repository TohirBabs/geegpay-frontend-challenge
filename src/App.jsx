import { useState } from "react";
import { BarChart } from "./components/BarChart";
import { Platorm } from "./components/Platorm";
import { Table } from "./components/Table";
import { TrendCard } from "./components/TrendCard";
import Layout from "./layouts/Layout";
import { BoxTickIcon } from "./assets/icons/BoxTick";
import { Rotate3d } from "./assets/icons/Rotate3d";
import { ShoppingCartIcon } from "./assets/icons/ShoppingCart";
import { CoinsIcon } from "./assets/icons/Coins";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const cardData = [
    {
      trendUp: true,
      icon: <BoxTickIcon/>,
      title: "total order",
      quantity: "350",
      percent: 23.5,
    },
    {
      trendUp: false,
      icon: <Rotate3d/>,
      title: "total refund",
      quantity: "270",
      percent: 23.5,
    },
    {
      trendUp: true,
      icon: <ShoppingCartIcon/>,
      title: "average sales",
      quantity: "1567",
      percent: 23.5,
    },
    {
      trendUp: false,
      icon: <CoinsIcon/>,
      title: "total income",
      quantity: "$350.000",
      percent: 23.5,
    },
  ];

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode} >
      <div className="flex flex-col bg-[#f5f5f5] transition dark:bg-[#0e0f0f] lg:gap-5 gap-2 lg:p-5 p-2">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-5 gap-3">
          <BarChart />
          <div className="flex flex-wrap lg:gap-3 gap-2">
            {cardData.map((data, index) => (
              <TrendCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-5 gap-3">
          <Table darkMode={ darkMode} />
          <Platorm />
        </div>
      </div>
    </Layout>
  );
}

export default App;
