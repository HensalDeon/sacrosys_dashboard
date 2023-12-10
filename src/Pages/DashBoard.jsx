import LineChart from "../components/Dashboard/LineChart";

const DashBoard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white">left</div>
            <LineChart />
        </div>
    );
};

export default DashBoard;
