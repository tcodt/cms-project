import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";

Charts.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  grid: PropTypes.bool,
};

export default function Charts({ title, data, dataKey, grid }) {
  return (
    <div className="bg-white p-2 rounded shadow-lg hover:shadow-sm transition m-8 flex justify-center items-center flex-col relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300">
      <div className="text-start mb-4 w-full p-2">
        <h4 className="text-xl font-bold font-sans text-gray-500 pb-2">
          {title}
        </h4>
        <hr />
      </div>
      <ResponsiveContainer width={"100%"} aspect={4}>
        <LineChart data={data}>
          <Line dataKey={dataKey} stroke="#5550bd" />
          <XAxis dataKey="name" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
