import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "../ui/Section";
import { HiArrowRight } from "react-icons/hi2";

interface ContactState {
  name: string;
  email: string;
  honeypot: string;
  message: string;
}

interface ResponseState {
  type: "success" | "error" | "";
  message: string;
}

export default function Contact() {
  const [contact, setContact] = useState<ContactState>({
    name: "",
    email: "",
    honeypot: "",
    message: "",
  });

  const [response, setResponse] = useState<ResponseState>({
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (res.ok) {
        setResponse({
          type: "success",
          message: "Message sent successfully!",
        });
        setContact({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setResponse({
          type: "error",
          message: json.message || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("An error occurred", error);
      setResponse({
        type: "error",
        message: "An error occurred while submitting the form.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="px-6 lg:px-24 xl:px-36 py-32 bg-[var(--bg-secondary)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader title="Contact" subtitle="Let's build something together" />

        {response.type === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-[var(--accent)] flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-4xl text-[var(--text-primary)] mb-4">Message Sent</h3>
            <p className="text-[var(--text-secondary)]">{response.message}</p>
          </motion.div>
        )}

        {response.type === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 border border-[var(--color-custom-red)]/30 bg-[var(--color-custom-red)]/5"
          >
            <p className="text-[var(--color-custom-red)] font-mono text-sm">{response.message}</p>
          </motion.div>
        )}

        {response.type !== "success" && (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Honeypot Field */}
            <input
              type="text"
              name="honeypot"
              value={contact.honeypot}
              onChange={handleChange}
              className="hidden"
              style={{ display: "none" }}
              aria-hidden="true"
              autoComplete="off"
            />

            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative pt-8">
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono text-xs uppercase tracking-[0.2em] ${
                    focusedField === "name" || contact.name
                      ? "top-0 text-[var(--accent)]"
                      : "top-12 text-[var(--text-secondary)]/60"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b-2 border-[var(--border)]/30 py-4 text-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300"
                  value={contact.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div className="relative pt-8">
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono text-xs uppercase tracking-[0.2em] ${
                    focusedField === "email" || contact.email
                      ? "top-0 text-[var(--accent)]"
                      : "top-12 text-[var(--text-secondary)]/60"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b-2 border-[var(--border)]/30 py-4 text-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300"
                  value={contact.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>
            </div>

            <div className="relative pt-8">
              <label
                htmlFor="message"
                className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono text-xs uppercase tracking-[0.2em] ${
                  focusedField === "message" || contact.message
                    ? "top-0 text-[var(--accent)]"
                    : "top-12 text-[var(--text-secondary)]/60"
                }`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-transparent border-b-2 border-[var(--border)]/30 py-4 text-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300 resize-none"
                value={contact.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-4 font-mono text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[8px_8px_0px_0px_var(--text-primary)]"
            >
              <span>{isLoading ? "Sending..." : "Send Message"}</span>
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </form>
        )}
      </div>
    </motion.section>
  );
}
