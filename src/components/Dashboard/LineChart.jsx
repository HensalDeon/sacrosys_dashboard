import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";
import { month, day, buttons } from "../../constants/data";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const LineChart = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [chartData, setChartData] = useState(day);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        buttonId == "1" ? setChartData(day) : setChartData(month);
    };

    const options = {
        plugins: {
            legend: false,
            datalabels: {
                display: false,
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: "white",
                    font: {
                        size: 10,
                    },
                },
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
        <div className="flex w-full flex-col p-3 bg-[#141414] shad rounded-lg transition-transform transform hover:scale-105 duration-500">
            <div className="flex flex-row justify-end md:gap-[13%] sm:gap-[16%] gap-[5%] px-3">
                <h1 className="md:text-2xl sm:text-xl">Day wise comparison</h1>
                <div className="flex flex-row gap-1 md:h-9 h-8">
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            className={`button ${activeButton === button.id ? "button-active" : ""}`}
                            onClick={() => handleButtonClick(button.id)}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
            <Line className="px-3 py-2" data={chartData} options={options}></Line>
        </div>
    );
};

export default LineChart;
