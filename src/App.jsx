import { useState } from "react";
import { BarChart } from "./components/BarChart";
import { Platorm } from "./components/Platorm";
import { Table } from "./components/Table";
import { TrendCard } from "./components/TrendCard";
import Layout from "./layouts/Layout";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const cardData = [
    {
      trendUp: true,
      icon: "box-tick",
      title: "total order",
      quantity: "350",
      percent: 23.5,
    },
    {
      trendUp: false,
      icon: "3d-rotate",
      title: "total refund",
      quantity: "270",
      percent: 23.5,
    },
    {
      trendUp: true,
      icon: "shopping-cart",
      title: "average sales",
      quantity: "1567",
      percent: 23.5,
    },
    {
      trendUp: false,
      icon: "coin",
      title: "total income",
      quantity: "$350.000",
      percent: 23.5,
    },
  ];

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <div className="flex flex-col md:gap-5 gap-3 md:p-5 p-2">
        <div className="flex flex-col md:flex-row md:gap-5 gap-3">
          <BarChart />
          <div className="flex flex-wrap gap-3">
            {cardData.map((data, index) => (
              <TrendCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-3">
          <Table />
          <Platorm />
        </div>
      </div>
    </Layout>
  );
}

export default App;
