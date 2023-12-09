import LeftSide from "../components/LoginPage/LeftSide";
import RightSide from "../components/LoginPage/RightSide";
import mode from "../assets/mode.svg";
const Login = () => {
    return (
        <>
            <header className="flex flex-row justify-between w-100vw">
                <p>Logo</p>
                <img src={mode} alt="mode" />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:h-screen">
                <LeftSide />
                <RightSide />
            </div>
        </>
    );
};

export default Login;
