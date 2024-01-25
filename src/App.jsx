import { useState } from "react"
import { BarChart } from "./components/BarChart"
import { Platorm } from "./components/Platorm"
import { Table } from "./components/Table"
import { TrendCard } from "./components/TrendCard"
import Layout from "./layouts/Layout"


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const cardData = [{ trendUp: true, icon: "box-tick", title: "total order", quantity: "350", percent: 23.5 },
    { trendUp: false, icon: "3d-rotate", title: "total refund", quantity: "270", percent: 23.5 },
    { trendUp: true, icon: "shopping-cart", title: "average sales", quantity: "1567", percent: 23.5 },
    { trendUp: false, icon: "coin", title: "total income", quantity: "$350.000", percent: 23.5 }]

  const platformData = [{title:"book bazaar",progress:50 ,amount:"2,500,000", percent:"15", color:"#6160dc"},
    { title: "artisan aile", progress: 40, amount: "1,800,000", percent: "10", color: "#54c5eb" },
    { title: "toy troop", progress: 30, amount: "1,200,000", percent: "8", color: "#ffb74a" },
  {title:"x store",progress:25 ,amount:"500,000", percent:"6", color:"#ff4a55"}]
  
  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <div className="flex flex-col gap-4 md:p-3 p-2">
        <div className="flex flex-col md:flex-row gap-3">
          <BarChart />
          <div className="flex flex-wrap gap-2">
            {cardData.map((data, index) => <TrendCard data={data} />)}
            
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-3">
          <Table/>
          <Platorm platformData={platformData} />
        </div>
        
        </div>
    </Layout>
  )
}

export default App
