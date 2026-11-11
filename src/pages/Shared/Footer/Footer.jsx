
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import {
    IoIosArrowDroprightCircle,
} from "react-icons/io";

import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
    const [formData, setFormData] = useState({
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.phone.trim() || !formData.message.trim()) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/userClient",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok && data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Thank you for connecting with me. I'll get back to you soon!",
                    confirmButtonColor: "#7c3aed",
                });

                setFormData({
                    phone: "",
                    message: "",
                });
            } else {
                throw new Error(
                    data.message || "Failed to send message."
                );
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message || "Something went wrong. Please try again.",
                confirmButtonColor: "#7c3aed",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer
            id="contact"
            className="relative overflow-hidden bg-[#080d1a] text-white pt-16 pb-6"
        >
            {/* Background Effects */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative w-11/12 max-w-7xl mx-auto">

                {/* Main Footer */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 pb-14">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-purple-400 text-sm font-semibold tracking-[3px] mb-4">
                            LET'S CONNECT
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mb-5">
                            Let's Work{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                Together.
                            </span>
                        </h2>

                        <p className="text-gray-400 leading-8 max-w-lg mb-8">
                            Have a project in mind or want to work together?
                            Feel free to contact me. I'm always excited to
                            connect with new people and explore new opportunities.
                        </p>

                        {/* Brand */}
                        <h3 className="text-3xl font-bold tracking-wide mb-3">
                            Rimi{" "}
                            <span className="text-purple-400">Ruma</span>
                        </h3>

                        <p className="text-gray-500 text-sm mb-7">
                            Frontend Developer | React.js Enthusiast
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">

                            <a
                                href="mailto:rimiruma12@gmail.com"
                                aria-label="Email"
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaEnvelope size={19} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/rimi-ruma/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaLinkedinIn size={19} />
                            </a>

                            <a
                                href="https://github.com/rimiruma"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaGithub size={20} />
                            </a>

                        </div>

                        {/* Email Info */}
                        <div className="flex items-center gap-3 mt-8 text-gray-400">
                            <FaEnvelope className="text-purple-400" />
                            <a
                                href="mailto:rimiruma12@gmail.com"
                                className="text-sm hover:text-purple-400 transition-colors"
                            >
                                rimiruma12@gmail.com
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-9 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="mb-7">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                                    <FaPaperPlane size={19} />
                                </div>

                                <h3 className="text-2xl font-bold">
                                    Get In Touch
                                </h3>
                            </div>

                            <p className="text-gray-400 text-sm">
                                Send me a message. I'd love to hear from you!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Phone Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone Number
                                </label>

                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 focus-within:border-purple-500 transition-all">
                                    <FaPhoneAlt className="text-purple-400" />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full py-4 bg-transparent outline-none text-white placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Message
                                </label>

                                <textarea
                                    name="message"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none text-white placeholder:text-gray-500 focus:border-purple-500 transition-all resize-none"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Message"}

                                {!loading && (
                                    <IoIosArrowDroprightCircle size={23} />
                                )}
                            </button>

                        </form>
                    </motion.div>

                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">

                    <p className="text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-purple-400 font-semibold">
                            Rimi Ruma
                        </span>
                        {" "} - All Rights Reserved.
                    </p>

                    <Link
                        to="/"
                        className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                    >
                        Back to Home ↑
                    </Link>

                </div>

            </div>
        </footer>
    );
};

export default Footer;