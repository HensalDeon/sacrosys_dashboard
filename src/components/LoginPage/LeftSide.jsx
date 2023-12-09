import test from "../../assets/test.svg";

const LeftSide = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <div className="relative">
                <img className="z-1" src={test} alt="none" />
            </div>
        </div>
    );
};

export default LeftSide;
