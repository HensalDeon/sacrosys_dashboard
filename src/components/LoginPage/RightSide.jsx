import { useNavigate } from "react-router-dom";

const RightSide = () => {
  const navigate = useNavigate()
    return (
        <div className="h-full flex flex-col justify-center items-center gap-10 md:gap-20">
            <p className="text-xl text-center">
                &#34;Welcome to the future of restaurant reporting! We&#39;re serving up a fresh approach to streamline your
                restaurant management, making data deliciously easy to digest.&#34;
            </p>
            <div className="flex flex-col bg-[#2F2F2F] justify-center items-center p-4 rounded-2xl w-[19rem] shadow-[#2F2F2F] shadow-lg">
                <input
                    className="py-4 px-4 m-1.5 rounded-lg w-full bg-[#414141] outline-none"
                    type="text"
                    name="email"
                    placeholder="Email"
                />
                <input
                    className="py-4 px-4 m-1.5 rounded-lg w-full bg-[#414141] outline-none"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button className="bg-[#121212] rounded-lg w-full p py-2.5 px-4 m-1.5 my-3" onClick={()=> navigate("/dashboard") }>Login</button>
                <p className="text-[10px] text-center px-6">
                    By continuing. you agree to (name)&#39;s <b>Terms of service</b> and <b>Privacy policy</b>
                </p>
            </div>
        </div>
    );
};

export default RightSide;
