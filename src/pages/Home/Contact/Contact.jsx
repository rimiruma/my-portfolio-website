// import { useState } from "react";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://my-portfolio-server-beta-two.vercel.app/contact",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         },
//       );

//       const data = await response.json();

//       if (response.ok && data.insertedId) {
//         Swal.fire({
//           icon: "success",
//           title: "Message Sent!",
//           text: "Thanks for reaching out! I'll get back to you soon.",
//           background: "#111111",
//           color: "#ffffff",
//           confirmButtonColor: "#ffffff",
//           customClass: {
//             confirmButton: "text-black",
//           },
//         });

//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//         });
//       } else {
//         throw new Error("Failed to send message");
//       }
//     } catch {
//       Swal.fire({
//         icon: "error",
//         title: "Oops!",
//         text: "Failed to send message. Please try again later.",
//         background: "#111111",
//         color: "#ffffff",
//         confirmButtonColor: "#ffffff",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Animation
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   const contactInfo = [
//     {
//       icon: "✉",
//       label: "EMAIL",
//       value: "rimiruma12@gmail.com",
//       href: "mailto:rimiruma12@gmail.com",
//     },
//     {
//       icon: "in",
//       label: "LINKEDIN",
//       value: "linkedin.com/in/rimi-ruma",
//       href: "https://www.linkedin.com/in/rimi-ruma/",
//     },
//     {
//       icon: "⌘",
//       label: "GITHUB",
//       value: "github.com/rimiruma",
//       href: "https://github.com/rimiruma",
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-black text-white py-24 px-5 md:px-10 lg:px-16"
//     >
//       {/* Background Decoration */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.035]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}
//       />

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.2 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 text-center mb-16"
//       >
//         <p className="text-gray-500 text-sm font-semibold tracking-[5px] mb-4">
//           LET'S CONNECT
//         </p>

//         <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
//           Get In{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
//             Touch
//           </span>
//         </h2>

//         <div className="w-20 h-[2px] bg-white mx-auto mt-6" />

//         <p className="text-gray-400 max-w-2xl mx-auto mt-7 text-sm md:text-base leading-8">
//           Have a project in mind or just want to say hello? Feel free to reach
//           out. I'd love to hear from you!
//         </p>
//       </motion.div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
//         {/* Left Side */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.15 }}
//           className="flex flex-col justify-center"
//         >
//           <motion.div variants={itemVariants}>
//             <p className="text-gray-500 font-semibold tracking-[3px] text-sm mb-3">
//               CONTACT INFORMATION
//             </p>

//             <h3 className="text-3xl md:text-4xl font-bold mb-5">
//               Let's Talk About
//               <br />
//               Your Next Project.
//             </h3>

//             <p className="text-gray-400 leading-8 mb-10 max-w-md">
//               I'm always open to discussing new projects, creative ideas, and
//               opportunities to be part of your vision.
//             </p>
//           </motion.div>

//           {/* Contact Cards */}
//           <div className="flex flex-col gap-5">
//             {contactInfo.map((item) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 target={item.label !== "EMAIL" ? "_blank" : undefined}
//                 rel="noopener noreferrer"
//                 variants={itemVariants}
//                 whileHover={{
//                   x: 8,
//                   borderColor: "#ffffff",
//                   backgroundColor: "#171717",
//                 }}
//                 transition={{ duration: 0.25 }}
//                 className="flex items-center gap-5 p-5 rounded-2xl bg-[#0c0c0c] border border-white/10 transition-colors group"
//               >
//                 <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-white text-black flex items-center justify-center text-2xl font-bold group-hover:scale-105 transition-transform">
//                   {item.icon}
//                 </div>

//                 <div className="min-w-0">
//                   <p className="text-gray-500 text-xs font-bold tracking-[2px] mb-2">
//                     {item.label}
//                   </p>

//                   <p className="text-white font-semibold text-sm md:text-base break-all group-hover:underline underline-offset-4">
//                     {item.value}
//                   </p>
//                 </div>

//                 <span className="ml-auto text-gray-500 group-hover:text-white transition-colors">
//                   ↗
//                 </span>
//               </motion.a>
//             ))}
//           </div>

//           {/* Bottom Text */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-10 flex items-center gap-3"
//           >
//             <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />

//             <p className="text-gray-400 text-sm">
//               Available for new opportunities
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Right Side Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: false, amount: 0.15 }}
//           transition={{ duration: 0.8 }}
//           className="relative"
//         >
//           <div className="relative bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 md:p-9 shadow-[0_0_50px_rgba(255,255,255,0.04)]">
//             {/* Form Heading */}
//             <div className="mb-8">
//               <p className="text-gray-500 tracking-[3px] text-xs font-bold mb-3">
//                 SEND A MESSAGE
//               </p>

//               <h3 className="text-2xl md:text-3xl font-bold">
//                 Let's Work Together
//               </h3>
//             </div>

//             <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//               {/* Name */}
//               <div>
//                 <label className="block text-sm font-semibold mb-3 text-gray-300">
//                   Your Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="w-full bg-black border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-semibold mb-3 text-gray-300">
//                   Your Email
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   className="w-full bg-black border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
//                   required
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-semibold mb-3 text-gray-300">
//                   Your Message
//                 </label>

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   onInput={(e) => {
//                     e.target.style.height = "auto";
//                     e.target.style.height = e.target.scrollHeight + "px";
//                   }}
//                   placeholder="Write your message here..."
//                   rows={5}
//                   className="w-full min-h-[140px] bg-black border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-y"
//                   required
//                 />
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 type="submit"
//                 disabled={loading}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="w-full flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-6 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? (
//                   <>
//                     <span className="loading loading-spinner loading-sm" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     Send Message
//                     <span className="text-xl">↗</span>
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </div>
//         </motion.div>
//       </div>

//       {/* Footer Text */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: false }}
//         transition={{ duration: 1 }}
//         className="relative z-10 text-center mt-20 pt-8 border-t border-white/10"
//       >
//         <p className="text-gray-500 text-sm">
//           Designed & Built with dedication by{" "}
//           <span className="text-white font-bold">Rimi Ruma</span>
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;
