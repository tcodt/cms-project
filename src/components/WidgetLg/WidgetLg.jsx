import "./WidgetLg.css";
import { transaction } from "../../Datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"btn-color " + type}>{type}</button>;
  };

  return (
    <div className="bg-white p-2 m-8 rounded shadow-lg hover:shadow-sm transition relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300 widget-lg">
      <span className="text-lg font-bold text-gray-500 mb-3 block">
        Transaction
      </span>
      <table className="mx-auto">
        <tbody>
          <tr className="border-b">
            <th className="text-gray-800 font-sans font-semibold pb-3">
              Customer
            </th>
            <th className="text-gray-800 font-sans font-semibold pb-3">Date</th>
            <th className="text-gray-800 font-sans font-semibold pb-3">
              Amount
            </th>
            <th className="text-gray-800 font-sans font-semibold pb-3">
              Status
            </th>
          </tr>
        </tbody>
        {transaction.map((action) => (
          <tbody key={action.id}>
            <tr>
              <td className="flex items-center px-8 pt-3">
                <img
                  src={action.img}
                  alt="Member Profile"
                  className="w-12 h-12 rounded-full mx-2 border-2 border-sky-500"
                />
                <span className="text-base font-sans text-gray-700 font-semibold">
                  {action.name}
                </span>
              </td>
              <td className="px-8 pt-3 text-gray-600 font-medium font-sans">
                {action.date}
              </td>
              <td className="px-8 pt-3 text-gray-600 font-medium font-sans">
                ${action.amount}
              </td>
              <td className="px-8 pt-3">
                <Button type={action.status} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
