import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";
import { buttons } from "../../constants/data";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const LineChart = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [toggle, setToggle] = useState("day");
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "AED",
                data: [],
                backgroundColor: "transparent",
                borderColor: "rgb(75, 192, 192)",
                pointBorderColor: "transparent",
                pointBorderWidth: 4,
                pointHoverBackgroundColor: "#131313",
                pointHoverRadius: 8,
                tension: 0.4,
            },
        ],
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const url =
                    toggle == "day"
                        ? "https://fakestoreapi.com/products?limit=13"
                        : "https://fakestoreapi.com/products?sort=desc&limit=13";
                const response = await fetch(url, {
                    method: "GET",
                });
                const result = await response.json();
                const newData = {
                    labels: result.map((item, index) => index),
                    datasets: [
                        {
                            ...chartData.datasets[0],
                            data: result.map((item) => item.rating.count),
                        },
                    ],
                };
                setChartData(newData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toggle]);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        buttonId == "1" ? setToggle("day") : setToggle("month");
    };
    const getMonthName = (monthIndex) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[monthIndex];
    };

    const options = {
        plugins: {
            legend: false,
            datalabels: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const monthIndex = tooltipItem.dataIndex;
                        const monthName = getMonthName(monthIndex);
                        const value = tooltipItem.formattedValue;
                        tooltipItem.label = monthName;
                        return [`${monthName}`, `${value} AED`];
                    },
                },
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
