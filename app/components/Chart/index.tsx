import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const data = [
  {
    count: 16,
    language: 'Orange',
  },
  {
    count: 17,
    language: 'Green',
  },
  {
    count: 10,
    language: 'Blue',
  },
  {
    count: 18,
    language: 'Purple',
  },
]

const Chart = () => (
  <div className="chart-container">
    <h1 className="chart-heading">Bureau Veritas Chart</h1>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Orange" fill="#F09943" />
          <Cell name="Green" fill="#3ADE7E" />
          <Cell name="Blue" fill="#44B3F3" />
          <Cell name="Purple" fill="#3D0877" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

export default Chart