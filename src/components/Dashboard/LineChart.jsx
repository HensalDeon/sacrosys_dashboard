import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);
const LineChart = () => {
    const [activeButton, setActiveButton] = useState(1);

    const buttons = [
        { id: 1, label: "Day" },
        { id: 2, label: "Month" },
    ];
    const day = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: "AED",
                data: [1000, 1500, 2000, 2200, 2000, 1500, 1200, 1450, 1500, 1600, 1400, 1300, 1200],
                backgroundColor: "transparent",
                borderColor: "rgb(75, 192, 192)",
                pointBorderColor: "transparent",
                fill: false,
                pointBorderWidth: 4,
                tension: 0.4,
            },
        ],
    };
    const month = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: "AED",
                data: [1000, 1200, 2000, 2200, 2300, 1500, 1200, 1700, 1500, 1800, 1400, 1300, 1200],
                backgroundColor: "transparent",
                borderColor: "rgb(75, 192, 192)",
                pointBorderColor: "transparent",
                fill: false,
                pointBorderWidth: 4,
                tension: 0.4,
            },
        ],
    };
    const [chartData, setChartData] = useState(day);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        buttonId == "1" ? setChartData(day) : setChartData(month);
    };

    const options = {
        plugins: {
            legend: false,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="flex flex-col p-3 bg-[#141414] shadow-[#2F2F2F] shadow-lg rounded-lg">
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
