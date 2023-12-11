import test from "../../assets/test.svg";
import { motion } from "framer-motion";
const LeftSide = () => {
    return (
        <motion.div
            className="h-full flex items-center justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: "spring",
                damping: 7,
                stiffness: 40,
                restDelta: 0.001,
                duration: 0.3,
            }}
        >
            <div className="relative">
                <img className="z-1" src={test} alt="none" />
            </div>
        </motion.div>
    );
};

export default LeftSide;
