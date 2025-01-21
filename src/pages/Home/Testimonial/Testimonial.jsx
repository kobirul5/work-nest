import Heading from "../../Shared/Heading/Heading";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Testimonial = () => {



    const testimonial = [
        {
            id: 1,
            name: "John Doe",
            role: "HR Manager",
            image: "https://i.ibb.co.com/5MxC1vH/pexels-emre-can-576914516-28943731.jpg",
            feedback: "This platform has transformed the way I manage my team. It's so easy to use and efficient!",
        },
        {
            id: 2,
            name: "Sarah Lee",
            role: "Employee",
            image: "https://i.ibb.co.com/TPZn3F8/pexels-danielpool-27913669.jpg",
            feedback: "I can now track my workflow and salary details seamlessly. Highly recommended!",
        },
        {
            id: 3,
            name: "Michael Brown",
            role: "CEO",
            image: "https://i.ibb.co.com/zn0zYWX/pexels-kelvin809-810775.jpg",
            feedback: "An excellent tool for managing employee workload and improving HR operations.",
        },
        {
            id: 4,
            name: "Emily Davis",
            role: "Project Manager",
            image: "https://i.ibb.co.com/4ft5s9d/pexels-mikhail-nilov-7989027.jpg",
            feedback: "The workflow tracking feature is a game-changer. It has improved our team productivity.",
        },
        {
            id: 5,
            name: "Robert Johnson",
            role: "Software Engineer",
            image: "https://i.ibb.co.com/WvXcVhD/pexels-fotios-photos-16129700.jpg",
            feedback: "This platform provides all the necessary tools for smooth employee management.",
        },
        {
            id: 6,
            name: "Anna Wilson",
            role: "HR Executive",
            image: "https://i.ibb.co.com/qxsRSkh/pexels-andrewperformance1-697509.jpg",
            feedback: "Managing employee contracts and payments has never been easier. Fantastic solution!",
        },
        {
            id: 7,
            name: "James Martinez",
            role: "Team Lead",
            image: "https://i.ibb.co.com/41JSDg6/pexels-alphatradezone-7352523.jpg",
            feedback: "This tool has streamlined our workflow process, and the support team is amazing!",
        },
        {
            id: 8,
            name: "Linda White",
            role: "Finance Manager",
            image: "https://i.ibb.co.com/kqWD1YH/pexels-kelvinernandi-3751397.jpg",
            feedback: "Keeping track of salary and payments is super simple with this platform. Highly impressed!",
        },
        {
            id: 9,
            name: "David Clark",
            role: "Product Designer",
            image: "https://i.ibb.co.com/qxsRSkh/pexels-andrewperformance1-697509.jpg",
            feedback: "The interface is intuitive, and the features are just what we needed for better collaboration.",
        },
        {
            id: 10,
            name: "Sophia Lopez",
            role: "Marketing Specialist",
            image: "https://i.ibb.co.com/4ft5s9d/pexels-mikhail-nilov-7989027.jpg",
            feedback: "I love how this tool integrates everything in one place. It saves so much time and effort!",
        },
    ]

    return (
        <div className="container mx-auto">
            <div className="text-center ">
                <Heading
                    title={"Voices of Satisfaction"}
                    subtile={"See what our employees and HR professionals are saying about their experience with our platform."}
                ></Heading>
            </div>

            <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                    delay: 1500, // Delay between slides (in milliseconds)
                    disableOnInteraction: false, // Continue autoplay after interaction
                  }}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    
                  }}
            >
                {
                    testimonial.map((i, idx) => <SwiperSlide key={idx}><div className="bg-white shadow-xl rounded-lg p-6 md:p-8 border border-gray-300 flex flex-col items-center space-y-4 text-center">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 flex items-center justify-center shadow-lg">
                                <img
                                    src={i.image}
                                    alt={i.name}
                                    className="w-16 h-16 object-cover rounded-full border-4 border-white"
                                />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{i.name}</h3>
                        <p className="text-sm text-gray-500 italic">{i.role}</p>
                        <div className="relative mt-4">
                            <p className="text-gray-600 text-sm leading-relaxed px-4">
                                <span className="text-3xl text-blue-500 font-serif">“</span>
                                {i.feedback}
                                <span className="text-3xl text-blue-500 font-serif">”</span>
                            </p>
                        </div>
                    </div></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;