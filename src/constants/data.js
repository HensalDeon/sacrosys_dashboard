export const day = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
        {
            label: "AED",
            data: [1000, 1500, 2000, 2200, 2000, 1500, 1200, 1450, 1500, 1600, 1400, 1300, 1200],
            backgroundColor: "transparent",
            borderColor: "rgb(75, 192, 192)",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            pointHoverBackgroundColor: "#131313",
            pointHoverRadius: 8,
            tension: 0.4,
        },
    ],
};

export const month = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
        {
            label: "AED",
            data: [1000, 1200, 2000, 2200, 2300, 1500, 1200, 1700, 1500, 1800, 1400, 1300, 1200],
            backgroundColor: "transparent",
            borderColor: "rgb(75, 192, 192)",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            tension: 0.4,
        },
    ],
};

export const buttons = [
    { id: 1, label: "Day" },
    { id: 2, label: "Month" },
];

export const Tdata = {
    labels: ["Chicken si..", "Special b..", "beef bico..", "beef ka..", "Beef br.."],
    datasets: [
        {
            data: [55.5, 35, 29.75, 29.75, 29.75],
            backgroundColor: ["#0084F7", "#F7A500", "#F77300", "#F70031", "#9410A5"],
            barPercentage: 0.6,
        },
    ],
};

export const Ldata = {
    labels: ["Open item", "Delivery ch..", "Sprite", "Budget m..", "Goto ser..."],
    datasets: [
        {
            data: [55, 60, 70, 44, 33],
            backgroundColor: ["#9410A5", "#F70031", "#F77300", "#F7A500", "#0084F7"],
            barPercentage: 0.6,
        },
    ],
};

export const Tpiece = { "Chicken si..": 5, "Special b..": 2, "beef bico..": 3, "beef ka..": 3, "Beef br..": 3 };

export const Lpiece = { "Open item": 1, "Delivery ch..": 5, "Sprite": 11, "Budget m..": 15, "Goto ser...": 22 };

export const data = {
    labels: ["Dining", "Takeaway", "Delivery", "Talabat", "Zomato", "Swiggy"],
    datasets: [
        {
            data: [99, 86, 68, 55, 51, 45],
            backgroundColor: ["#8639BA", "#AE45C6", "#E958A1", "#E8E465", "#F2B45C", "#EF7075"],
            barPercentage: 1,
        },
    ],
};