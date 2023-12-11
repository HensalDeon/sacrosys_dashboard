import LeftSide from "../components/LoginPage/LeftSide";
import RightSide from "../components/LoginPage/RightSide";
import mode from "../assets/mode.svg";
import { motion } from "framer-motion";
const Login = () => {
    return (
        <>
            <header className="flex flex-row justify-between w-100vw">
                <motion.p
                    initial={{ y: -100, x: -100, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 7,
                        stiffness: 40,
                        restDelta: 0.001,
                        duration: 0.3,
                    }}
                >
                    Logo
                </motion.p>
                <img src={mode} alt="mode" />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-[86vh] md:px-8">
                <LeftSide />
                <RightSide />
            </div>
        </>
    );
};

export default Login;
