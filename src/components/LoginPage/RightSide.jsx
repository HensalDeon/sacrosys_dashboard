import { useNavigate } from "react-router-dom";
import eye from "../../assets/eye.svg";
import cross from "../../assets/crossEye.svg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRef, useState } from "react";

const RightSide = () => {
    const [toggle, setToggle] = useState(false);
    const ref = useRef();
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .trim()
            .min(8, "Minimum 6 characters required")
            .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, "Password must contain at least one letter", "and one number")
            .required("Password cannot be empty"),
        email: Yup.string().trim().email("Invalid email fromat").required("Email cannot be empty"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            values = await Object.assign(values);
            console.log(values);
            navigate("/dashboard");
        },
    });

    const handleToggle = () => {
        ref.current.type == "password" ? (ref.current.type = "text") : (ref.current.type = "password");
        setToggle((prev) => !prev);
    };
    return (
        <div className="h-full flex flex-col justify-center items-center gap-10 md:gap-20">
            <p className="text-xl text-center">
                &#34;Welcome to the future of restaurant reporting! We&#39;re serving up a fresh approach to streamline your
                restaurant management, making data deliciously easy to digest.&#34;
            </p>
            <form
                className="flex flex-col bg-[#2F2F2F] justify-center items-center p-4 rounded-2xl w-[19rem] shadow-[#2F2F2F] shadow-lg relative"
                onSubmit={formik.handleSubmit}
            >
                <div className="w-full align-middle flex m-1.5 flex-col">
                    <input
                        className="py-4 px-4 rounded-lg w-full bg-[#414141] outline-none"
                        type="text"
                        name="email"
                        placeholder="email"
                        autoComplete="email"
                        {...formik.getFieldProps("email")}
                        ref={ref}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-600 text-left">{formik.errors.email}</div>
                    )}
                </div>
                <div className="w-full relative flex m-1.5 flex-col">
                    <input
                        className="py-4 px-4 rounded-lg w-full bg-[#414141] outline-none"
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        {...formik.getFieldProps("password")}
                        ref={ref}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-600 text-left">{formik.errors.password}</div>
                    )}
                    <img
                        className="absolute top-[1.2rem] right-3 cursor-pointer"
                        src={toggle ? cross : eye}
                        alt="eye"
                        onClick={handleToggle}
                    />
                </div>
                <button className="bg-[#121212] rounded-lg w-full p py-2.5 px-4 m-1.5 my-3" type="submit">
                    Login
                </button>
                <p className="text-[10px] text-center px-6">
                    By continuing. you agree to (name)&#39;s <b>Terms of service</b> and <b>Privacy policy</b>
                </p>
            </form>
        </div>
    );
};

export default RightSide;
