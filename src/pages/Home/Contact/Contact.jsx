import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Novatrix } from "uvcanvas";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("https://my-portfolio-server-beta-two.vercel.app/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent! 🎉",
                    text: "Thanks for reaching out! I'll get back to you soon.",
                    confirmButtonColor: "#0ea5e9",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Failed");
            }
        } catch {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Failed to send message. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    // Fade-in + slide-up animation for the section
    const sectionVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    // Stagger children animation
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
        }),
    };

    return (
        <motion.section
            id="contact"
            className="py-20 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            {/* Section Heading */}
            <motion.h2
                className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-pink-500 to-indigo-500"
                variants={itemVariants}
                custom={0}
            >
                Contact Me
            </motion.h2>
            <motion.p
                className="text-center mb-12 w-9/12 mx-auto opacity-70"
                variants={itemVariants}
                custom={1}
            >
                Have a project in mind or just want to say hi? Feel free to reach out — I'd love to hear from you!
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 max-w-5xl mx-auto">

                {/* ── Left: Info Cards ── */}
                <div className="flex flex-col gap-6 justify-center">
                    {[
                        {
                            icon: "📧",
                            label: "Email",
                            value: "rimiruma12@gmail.com",
                            href: "mailto:rimiruma12@gmail.com",
                        },
                        {
                            icon: "💼",
                            label: "LinkedIn",
                            value: "linkedin.com/in/rimi-ruma",
                            href: "https://www.linkedin.com/in/rimi-ruma/",
                        },
                        {
                            icon: "🐙",
                            label: "GitHub",
                            value: "github.com/rimiruma",
                            href: "https://github.com/rimiruma",
                        },
                    ].map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-4 p-4 rounded-xl overflow-hidden cursor-pointer group"
                            variants={itemVariants}
                            custom={i + 2}
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Card animated background */}
                            <Novatrix
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    zIndex: -1,
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 -z-10 rounded-xl"
                                animate={{
                                    boxShadow: [
                                        "0 0 8px #87CEEB, 0 0 16px #87CEEB",
                                        "0 0 16px #87CEEB, 0 0 28px #87CEEB",
                                        "0 0 8px #87CEEB, 0 0 16px #87CEEB",
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                            <span className="text-3xl">{item.icon}</span>
                            <div>
                                <p className="font-bold text-sm opacity-60">{item.label}</p>
                                <p className="font-semibold group-hover:text-sky-500 transition-colors">
                                    {item.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* ── Right: Contact Form ── */}
                <motion.div
                    className="relative p-6 rounded-xl overflow-hidden"
                    variants={itemVariants}
                    custom={5}
                >
                    {/* Form background */}
                    <Novatrix
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: -1,
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 -z-10 rounded-xl"
                        animate={{
                            boxShadow: [
                                "0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB",
                                "0 0 20px #87CEEB, 0 0 30px #87CEEB, 0 0 40px #87CEEB",
                                "0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB",
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Rimi Ruma"
                                className="input input-bordered w-full bg-transparent backdrop-blur-sm"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold mb-1">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="input input-bordered w-full bg-transparent backdrop-blur-sm"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hey Rimi, I'd love to work with you..."
                                className="textarea textarea-bordered w-full bg-transparent backdrop-blur-sm"
                                rows={5}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={loading}
                            className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold border-none hover:opacity-90 disabled:opacity-60"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm"></span>
                            ) : (
                                "Send Message 🚀"
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
