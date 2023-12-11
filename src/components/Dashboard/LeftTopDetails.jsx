import clnd from "../../assets/calender.svg";
import uarrow from "../../assets/upArrow.svg";
import HorizontalBarChart from "./HorizontalBarChart";

const LeftTopDetails = () => {
    return (
        <div className="grid grid-rows-3 w-full">
            {/* 1/3 height */}
            <div className="row-span-1">
                <div className="grid grid-cols-2 xs:grid-cols-4 h-full gap-4">
                    <div className="card mb-2 md:row-span-1 flex flex-col justify-between">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[10px]">Today sales</h5>
                            <img className="max-w-[1rem]" src={clnd} alt="calender" />
                        </div>
                        <h1 className="flex text-[140%] items-baseline text-[#05FDF1]">
                            365.61 <span className="text-[50%] text-white">AED</span>
                        </h1>
                        <span className="flex flex-row text-[#2DFF1A]">
                            <img src={uarrow} alt="arrow" />
                            <h5 className="text-[60%]">
                                &nbsp;<span className="text-[140%]">8</span> % than yesterday
                            </h5>
                        </span>
                    </div>
                    <div className="card mb-2 md:row-span-1 flex flex-col justify-between">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[10px]">Top sale Time</h5>
                        </div>
                        <h1 className="flex text-[140%] items-baseline text-[#FFD400]">
                            322.61 <span className="text-[50%] text-white">AED</span>
                        </h1>
                        <span className="flex flex-row">
                            <h5 className="text-[70%]">12 pm-3 pm</h5>
                        </span>
                    </div>
                    <div className="card mb-2 md:row-span-1 flex flex-col justify-between">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[10px]">Door delivery sales</h5>
                        </div>
                        <h1 className="flex text-[140%] items-baseline text-[#FF005A]">
                            11/ 25 <span className="text-[50%] text-white">AED</span>
                        </h1>
                        <span className="flex flex-row">
                            <h5 className="text-[70%]">Bills 08</h5>
                        </span>
                    </div>
                    <div className="card mb-2 md:row-span-1 flex flex-col justify-between">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[10px]">Void</h5>
                        </div>
                        <h1 className="flex text-[140%] items-baseline text-[#009FFF]">
                            0/0 <span className="text-[50%] text-white">AED</span>
                        </h1>
                        <span className="flex flex-row">
                            <h5 className="text-[70%]">Bills/items</h5>
                        </span>
                    </div>
                </div>
            </div>

            {/* 2/3 height */}
            <div className="grid row-span-2">
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-4">
                    <HorizontalBarChart />
                    <div className="col-span-1 card flex flex-col justify-between">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[80%] font-bold">Total Purchase</h5>
                        </div>
                        <div>
                            <span className="flex flex-row">
                                <h5 className="text-[70%]">Cash / 23</h5>
                            </span>
                            <h1 className="flex text-[140%] items-baseline text-[#8639BA]">
                                321.61 <span className="text-[50%] text-white">AED</span>
                            </h1>
                        </div>
                        <div>
                            <span className="flex flex-row">
                                <h5 className="text-[70%]">Credits / 11</h5>
                            </span>
                            <h1 className="flex text-[140%] items-baseline text-[#AE45C6]">
                                321.61 <span className="text-[50%] text-white">AED</span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-span-1 card flex flex-col justify-between">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[80%] font-bold">Total Payments</h5>
                        </div>
                        <div>
                            <span className="flex flex-row">
                                <h5 className="text-[70%]">Cash / 12</h5>
                            </span>
                            <h1 className="flex text-[140%] items-baseline text-[#EF7075]">
                                321.61 <span className="text-[50%] text-white">AED</span>
                            </h1>
                        </div>
                        <div>
                            <span className="flex flex-row">
                                <h5 className="text-[70%]">Cheque / 2</h5>
                            </span>
                            <h1 className="flex text-[140%] items-baseline text-[#F2B45C]">
                                321.61 <span className="text-[50%] text-white">AED</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftTopDetails;
