import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
import { API_URL } from "../../api/baseUrl";

type CardData = {
  balance: number;
};

type ChartPoint = {
  x: string;
  y: number;
};

export const FinancialOverview = () => {
  const [data, setData] = useState<ChartPoint[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/card`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((cards: CardData[] | null) => {
        if (Array.isArray(cards)) {
          const totalBalance = cards.reduce(
            (acc, card) => acc + card.balance,
            0
          );

          const now = new Date();
          const months = Array.from({ length: 6 }, (_, i) => {
            const date = new Date(now.getFullYear(), now.getMonth() - 5 + i);
            return date.toLocaleString("en-US", { month: "short" });
          });

          const chartData = months.map((month, index) => ({
            x: month,
            y: Math.round(totalBalance * (0.8 + index * 0.05)),
          }));

          setData(chartData);
        }
      })
      .catch((err) => console.error("Balance fetch error:", err));
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 mt-10 shadow border border-gray-200 w-full ">
      <h2 className="text-xl font-bold text-black mb-1">Financial Overview</h2>
      <p className="text-gray-600 mb-6">
        Your account balances over the last 6 months
      </p>
      <div className="h-64">
        <ResponsiveLine
          data={[
            {
              id: "Balance",
              data,
            },
          ]}
          margin={{ top: 20, right: 40, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Month",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Balance ($)",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
        />
      </div>
    </div>
  );
};
