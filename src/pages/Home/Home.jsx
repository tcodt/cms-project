import Features from "../../components/Features/Features";
import Charts from "../../components/Charts/Charts";
import { xAxisData } from "../../Datas";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Charts grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="flex">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
