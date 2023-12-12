import LeftTopDetails from "../components/Dashboard/LeftTopDetails";
import LineChart from "../components/Dashboard/LineChart";
import PieChart from "../components/Dashboard/PieChart";
import SellingBarChart from "../components/Dashboard/SellingBarChart";
import { Ldata, Lpiece, Tdata, Tpiece, Lnavs } from "../constants/data";
import mode from "../assets/mode.svg";
import excel from "../assets/excel.svg";
import reload from "../assets/reload.svg";
import { motion } from "framer-motion";
import { useState } from "react";
const DashBoard = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeButton, setActiveButton] = useState(0);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const handleButtonClick = (index) => {
        setActiveButton(index);
        setMenuOpen(false);
    };
    return (
        <>
            <nav className="flex items-center lg:justify-around justify-between flex-wrap bg-[#121212] pb-8">
                <div className="flex items-center flex-shrink-0 text-white mr-6 bg-[#121212] gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path
                            d="M10.0834 18.75L4.33337 13L10.0834 7.25L10.85 8.01667L6.40839 12.4583H21.6667V13.5417H6.40839L10.85 17.9833L10.0834 18.75Z"
                            fill="white"
                        />
                    </svg>
                    <span className="font-semibold text-xl tracking-tight"> Branch Name</span>
                </div>
                <div className="flex lg:hidden">
                    <span className="navbutton text-base cursor-pointer hidden md:flex ">
                        Last updated time 09-Aug-2023 08:09 AM <img className="h-6" src={reload} alt="reload" />
                    </span>
                    <img className="px-3 hidden xs:inline" src={mode} alt="mode" />
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full lg:flex lg:items-center lg:w-auto relative bg-[#121212]`}>
                    <motion.div
                        className={`text-sm lg:flex ${
                            isMenuOpen ? "flex flex-col items-start" : "hidden flex-row"
                        } justify-start  lg:items-center lg:relative absolute bg-[#121212] z-10 w-full gap-1 p-3`}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            damping: 6,
                            stiffness: 40,
                            restDelta: 0.001,
                            duration: 0.3,
                        }}
                    >
                        {Lnavs.map((btn, index) => (
                            <button
                                key={index}
                                className={`navbutton ${activeButton === index ? "navbutton-active" : ""}`}
                                onClick={() => handleButtonClick(index)}
                            >
                                {btn}
                            </button>
                        ))}
                        <div className="flex lg:flex-row flex-col">
                            <span className="navbutton flex gap-3 h-auto text-base">
                                Export to excel <img className="h-5" src={excel} alt="excel" />
                            </span>
                        </div>
                    </motion.div>
                </div>
                <span className="navbutton text-base cursor-pointer lg:flex hidden">
                    Last updated time 09-Aug-2023 08:09 AM <img className="h-6" src={reload} alt="reload" />
                </span>
                <img className="lg:flex hidden" src={mode} alt="mode" />
            </nav>
            <div className="grid grid-cols-1 gap-3">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 6,
                        stiffness: 40,
                        restDelta: 0.001,
                        duration: 0.3,
                    }}
                >
                    <LeftTopDetails />
                    <LineChart />
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 xs:grid-cols-1 gap-4"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 6,
                        stiffness: 40,
                        restDelta: 0.001,
                        duration: 0.3,
                    }}
                >
                    <PieChart />
                    <div className="card py-3 h-full overflow-hidden">
                        <h1 className="font-bold pt-3 text-[100%]">Top 5 selling produts</h1>
                        <div className="flex h-full flex-col items-center justify-center">
                            <SellingBarChart data={Tdata} obj={Tpiece} />
                        </div>
                    </div>
                    <div className="card py-3 h-full overflow-hidden">
                        <h1 className="font-bold pt-3 text-[100%]">Least 5 selling products</h1>
                        <div className="flex h-full flex-col items-center justify-center">
                            <SellingBarChart data={Ldata} obj={Lpiece} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default DashBoard;
