import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const PieChart = () => {
    const data = {
        labels: ["Credit 15%", "Credit card 30%", "Google pay 25%", "Cash 40%"],
        datasets: [
            {
                label: "My First Dataset",
                data: [15, 30, 25, 40],
                backgroundColor: ["#A7236F", "#F56C40", "#F7DC67", "#23CCD1"],
                borderWidth: 0,
                borderRadius: 9,
                offset: 10,
                hoverOffset: 11,
            },
        ],
    };
    const options = {
        aspectRatio: 1,
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    color: "#fff",
                    padding: 12,
                },
                position: "left",
                borderRadius: 12,
            },
        },
    };
    const doughnutLabel = {
        id: "doughnutLabel",
        afterDatasetsDraw(chart) {
            const { ctx } = chart;
            const centreX = chart.getDatasetMeta(0).data[0].x;
            const centreY = chart.getDatasetMeta(0).data[0].y;

            //text
            ctx.save();
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const verticalOffset = 10;
            ctx.font = "bold 65% sans-serif";
            ctx.fillText("Cash", centreX, centreY - verticalOffset);
            ctx.font = "bold 80% sans-serif";
            ctx.fillText("900 AED", centreX, centreY + verticalOffset);
        },
    };
    return (
        <div className="flex w-full flex-col bg-[#141414] shad rounded-lg transition-transform transform hover:scale-105 duration-500 relative max-h-[18rem]">
            <div className="flex flex-col absolute top-6 left-4">
                <h1 className="text-[100%] font-bold">Collection distribution</h1>
                <div>
                    <p className="text-xs pt-2">Total amount</p>
                    <h1 className="flex text-[140%] items-baseline text-white">
                        365.61 <span className="text-[50%] text-white">AED</span>
                    </h1>
                </div>
            </div>
            <div className="flex items-end justify-center pt-6 h-[110%]">
                <Doughnut
                    data={data}
                    options={options}
                    plugins={[doughnutLabel]}
                    style={{ alignSelf: "flex-end" }}
                ></Doughnut>
            </div>
        </div>
    );
};

export default PieChart;
