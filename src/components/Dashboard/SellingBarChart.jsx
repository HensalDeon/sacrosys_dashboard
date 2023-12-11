import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import PropTypes from "prop-types";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

const SellingBarChart = ({ data, obj }) => {
    const options = {
        plugins: {
            legend: false,
            datalabels: {
                display: true,
                color: "#fff",
                anchor: "end",
                align: "end",
                formatter: (value, context) => {
                    const label = data.labels[context.dataIndex];
                    return `${value} AED/${obj[label] || ""} pc`;
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
        elements: {
            bar: {
                borderRadius: 25,
            },
        },
    };
    return (
        <div className="col-span-2 xs:mb-0 mb-2 flex flex-col justify-center items-center w-fit">
            <div className=" h-full flex justify-center items-center">
                <Bar data={data} options={options}></Bar>
            </div>
        </div>
    );
};

SellingBarChart.propTypes = {
    data: PropTypes.object.isRequired,
    obj: PropTypes.object.isRequired,
};

export default SellingBarChart;
