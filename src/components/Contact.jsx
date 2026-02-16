import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { socialLink } from "../constant/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "farhadnuri559@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <section className="pt-28" id="contact">
      <div
        className="container grid gap-11 
      md:grid-cols-[0.7fr_1fr] pb-12 md:pb-16 border-b 
      border-zinc-200 dark:border-zinc-900"
      >
        <div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="pt-4">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out! and lets build something great together.
          </p>
          <p className="pt-2 ">
            <span className="dark:text-white">Send a mail at </span>
            <a
              href="mailto:farhadnuri559@gmail.com"
              className="text-emerald-700 underline"
            >
              farhadnuri559@gmail.com
            </a>
          </p>
          <div className="flex items-center gap-2.5 mt-9">
            {socialLink.map((link) => (
              <a
                href={link.url || "#"}
                key={link.id}
                className="hover:text-emerald-700 transition-colors"
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid gap-2.5 md:grid-cols-2">
            <div
              className="border border-zinc-200
            bg-zinc-100/60 rounded-lg dark:border-zinc-800 
            dark:bg-zinc-900/60"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="py-2.5 indent-4 w-full placeholder-zinc-800
               dark:placeholder-zinc-400 bg-transparent outline-none"
              />
            </div>
            <div
              className="border border-zinc-200
            bg-zinc-100/60 rounded-lg dark:border-zinc-800 
            dark:bg-zinc-900/60"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="py-2.5 indent-4 w-full placeholder-zinc-800
               dark:placeholder-zinc-400 bg-transparent outline-none"
              />
            </div>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="border border-zinc-200
            bg-zinc-100/60 rounded-lg dark:border-zinc-800 
            dark:bg-zinc-900/60 w-full h-32 py-2.5 indent-4 resize-none 
            placeholder-zinc-800 dark:placeholder-zinc-400 bg-transparent outline-none"
          />

          {status === "success" && (
            <p className="text-emerald-600 text-sm">
              Message sent successfully! ✓
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Failed to send message. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 transition-colors
            w-full py-2 rounded-lg text-white hover:bg-emerald-800
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
