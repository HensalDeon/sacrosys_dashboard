import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import uarrow from "../../assets/upArrow.svg";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { data } from "../../constants/data";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

const HorizontalBarChart = () => {
    const options = {
        plugins: {
            legend: false,
            datalabels: {
                display: true,
                color: "#fff",
                formatter: (value) => {
                    return `${value} AED`;
                },
                font: {
                    size: 10,
                },
            },
        },
        indexAxis: "y",
        scales: {
            x: {
                display: false,
            },
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size: 10,
                    },
                },
            },
        },
    };
    return (
        <div className="col-span-2 card xs:mb-0 mb-2 flex flex-col">
            <div className="flex flex-row justify-between items-baseline">
                <h1 className="font-bold">Sales wise comparison</h1>
                <h1 className="flex text-[#2DFF1A] text-[80%] items-baseline">
                    <img src={uarrow} alt="arrow" />
                    &nbsp;&nbsp;3 %
                </h1>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <Bar data={data} options={options}></Bar>
            </div>
        </div>
    );
};

export default HorizontalBarChart;
