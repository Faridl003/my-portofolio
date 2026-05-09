import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "boxicons/css/boxicons.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder for actual EmailJS integration
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden pb-12">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl border border-[#2a2a2a] shadow-[0_0_20px_rgba(191,97,255,0.15)] relative z-10"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#00cea8] transition-all shadow-inner"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#00cea8] transition-all shadow-inner"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#00cea8] transition-all shadow-inner resize-none"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#00cea8] to-[#bf61ff] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <i className="bx bx-send text-xl"></i>}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[600px] h-[400px] relative flex items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00cea8] via-[#bf61ff] to-[#ff56f3] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="w-full h-full border border-[#2a2a2a] bg-[#100d25]/60 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-8 shadow-[0_0_40px_rgba(0,206,168,0.1)] relative overflow-hidden group">

          <div className="absolute -inset-4 bg-gradient-to-r from-[#00cea8] to-[#bf61ff] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl"></div>

          <i className="bx bxs-envelope-open text-[7rem] md:text-[9rem] bg-clip-text text-transparent bg-gradient-to-tr from-[#00cea8] to-[#bf61ff] drop-shadow-[0_0_15px_rgba(191,97,255,0.5)] animate-float mb-6"></i>

          <h4 className="text-2xl md:text-3xl font-bold mt-2 text-white tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#aaa6c3]">
            Let's Build Something<br />Amazing
          </h4>
          <p className="text-[#aaa6c3] mt-6 text-center max-w-sm text-sm md:text-base leading-relaxed">
            Whether you have a question, a project in mind, or just want to connect, I'll try my best to get back to you!
          </p>

          {/* <div className="mt-10 flex gap-5">
            <a href="mailto:miftahfaridl@example.com" className="w-14 h-14 rounded-full bg-[#151030] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00cea8] hover:to-[#bf61ff] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,206,168,0.4)] hover:-translate-y-1">
              <i className="bx bx-mail-send text-2xl text-white"></i>
            </a>
            <a href="https://www.linkedin.com/in/miftahfaridla/" className="w-14 h-14 rounded-full bg-[#151030] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00cea8] hover:to-[#bf61ff] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(191,97,255,0.4)] hover:-translate-y-1">
              <i className="bx bxl-linkedin text-2xl text-white"></i>
            </a>
            <a href="https://github.com/Faridl003" className="w-14 h-14 rounded-full bg-[#151030] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00cea8] hover:to-[#bf61ff] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,86,243,0.4)] hover:-translate-y-1">
              <i className="bx bxl-github text-2xl text-white"></i>
            </a>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
