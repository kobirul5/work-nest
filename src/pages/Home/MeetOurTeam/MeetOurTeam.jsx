import { useContext } from "react";
import Heading from "../../Shared/Heading/Heading";
import { ThemeContext } from "../../../providers/ThemeProvider";

const MeetOurTeam = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <section className=" ">
            <div className="container mx-auto px-4 text-center">
                <div className="text-center mb-10">
                    <Heading
                    title={"Meet Our Team"}
                    subtile={"Get to know the dedicated team working behind the scenes to bring you the best experience."}
                    ></Heading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className={`${theme == "light" ? "bg-white":"bg-[#1f1f1f]"} bg-gray-100 shadow-lg rounded-lg p-6`}>
                        <img
                            src="https://i.ibb.co.com/qYJfB1SC/man-1.jpg"
                            alt="Team Member"
                            className="w-24 object-cover h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-[#777777]">CEO & Founder</p>
                    </div>
                    <div className={`${theme == "light" ? "bg-white":"bg-[#1f1f1f]"} bg-gray-100 shadow-lg rounded-lg p-6`}>
                        <img
                            src="https://i.ibb.co.com/gbCZ3SFR/man-9.jpg"
                            alt="Team Member"
                            className="w-24 object-cover h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold">Jane Smith</h3>
                        <p className="text-[#777777]">Chief Operating Officer</p>
                    </div>
                    <div className={`${theme == "light" ? "bg-white":"bg-[#1f1f1f]"} bg-gray-100 shadow-lg rounded-lg p-6`}>
                        <img
                            src="https://i.ibb.co.com/qYCwHB5s/man-2.jpg"
                            alt="Team Member"
                            className="w-24 object-cover h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold">Emily Johnson</h3>
                        <p className="text-[#777777]">Head of Marketing</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MeetOurTeam;