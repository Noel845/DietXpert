import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
  } from "recharts";
  import { Food } from "@/types";
  
  interface NutrientChartProps {
    food: Food;
  }
  
  const NutrientChart = ({ food }: NutrientChartProps) => {
    const data = [
      { name: "Protein", value: food.protein, fill: "#27AE60" },
      { name: "Carbs", value: food.carbs, fill: "#3498DB" },
      { name: "Fat", value: food.fat, fill: "#E67E22" }
    ];
  
    return (
      <div className="w-full h-64 my-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="g" />
            <Tooltip formatter={(value) => [`${value}g`, "Amount"]} />
            <Legend />
            <Bar dataKey="value" name="Grams" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default NutrientChart;
  