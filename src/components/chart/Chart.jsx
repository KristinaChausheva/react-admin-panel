import "./chart.scss"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "January", Total: 1200 },
  { name: "March", Total: 700 },
  { name: "April", Total: 1300 },
  { name: "Mai", Total: 800 },
  { name: "June", Total: 1800 },
  { name: "july", Total: 1400 },
  {
    name: "August",
    Total: 2100,
  },
  {
    name: "September",
    Total: 1500,
  },
  {
    name: "Octomber",
    Total: 1100,
  },
  {
    name: "November",
    Total: 2950,
  },
  {
    name: "December",
    Total: 1900,
  },
]

function Chart() {
  return (
    <div className="chart">
      <div className="title">Last 12 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
