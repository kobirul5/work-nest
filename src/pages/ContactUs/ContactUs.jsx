import { useContext, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { ThemeContext } from '../../providers/ThemeProvider';
const ContactUs = () => {
    const  axiosPublic = useAxiosPublic()
    const {theme} = useContext(ThemeContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
         const formData =({name, email, message})
        axiosPublic.post("/message", formData)
        .then((res)=>{
            if(res.data.insertedId){
                toast.success('Message sent successfully!');
                form.reset()
            }
        })
        .catch((error)=>{
            toast.error(error.message)
        })

    };

    return (
        <div className="container mx-auto px-4 py-16 pt-24">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className={`${theme == "light" ? "bg-white":"bg-[#1f1f1f]"}  shadow-lg rounded-lg p-6`}>
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-[#777777] mb-4">Feel free to reach out to us via any of the methods below:</p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <FaPhoneAlt className="text-primary-color" />
                            <span>+123 456 789</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-primary-color" />
                            <span>kobirul@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaMapMarkerAlt className="text-primary-color" />
                            <span>Sriajganj, Bangladesh</span>
                        </div>
                    </div>
                </div>
                    <Toaster></Toaster>
                {/* Contact Form */}
                <div className={` ${theme == "light" ? "bg-white":"bg-[#1f1f1f]"} shadow-lg rounded-lg p-6`}>
                    <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-[#777777] font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                className={`input input-bordered ${theme == "dark" && "bg-[#292929]"}  w-full`}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#777777] font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className={`input input-bordered w-full ${theme == "dark" && "bg-[#292929]"}`}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-[#777777] font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                className={`textarea textarea-bordered w-full ${theme == "dark" && "bg-[#292929]"}`}
                                placeholder="Your Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn bg-primary-color text-white w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;