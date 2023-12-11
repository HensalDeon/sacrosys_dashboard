import LeftTopDetails from "../components/Dashboard/LeftTopDetails";
import LineChart from "../components/Dashboard/LineChart";
import PieChart from "../components/Dashboard/PieChart";
import SellingBarChart from "../components/Dashboard/SellingBarChart";
import { Ldata, Lpiece, Tdata, Tpiece } from "../constants/data";
import { motion } from "framer-motion";
const DashBoard = () => {
    return (
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
    );
};

export default DashBoard;
