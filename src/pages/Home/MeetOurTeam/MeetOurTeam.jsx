import Heading from "../../Shared/Heading/Heading";

const MeetOurTeam = () => {
    return (
        <section className=" bg-white">
            <div className="container mx-auto px-4 text-center">
                <div className="text-center">
                    <Heading
                    title={"Meet Our Team"}
                    subtile={"Get to know the dedicated team working behind the scenes to bring you the best experience."}
                    ></Heading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                        <img
                            src="https://i.ibb.co.com/41JSDg6/pexels-alphatradezone-7352523.jpg"
                            alt="Team Member"
                            className="w-24 object-cover h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-gray-500">CEO & Founder</p>
                    </div>
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                        <img
                            src="https://i.ibb.co.com/02VrxFN/pexels-olly-926390.jpg"
                            alt="Team Member"
                            className="w-24 object-cover h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold">Jane Smith</h3>
                        <p className="text-gray-500">Chief Operating Officer</p>
                    </div>
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                        <img
                            src="https://i.ibb.co.com/xfX4Zkp/Career-Counseling-Sessions.jpg"
                            alt="Team Member"
                            className="w-24 object-cover h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold">Emily Johnson</h3>
                        <p className="text-gray-500">Head of Marketing</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MeetOurTeam;