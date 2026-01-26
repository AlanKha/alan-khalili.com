import { useState } from "react";
import { SectionHeader } from "../ui/Section";

/**
 * The state of the contact form.
 */
interface ContactState {
  name: string;
  email: string;
  honeypot: string;
  message: string;
}

/**
 * The state of the response from the server.
 */
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
        // Optional: Reset form
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
    <div id="Contact" className="px-6 lg:px-36 p-4 py-24 bg-custom-ivory">
      <SectionHeader title="Contact" />

      {response.type === "success" && (
        <div className="text-center bg-custom-green text-custom-ivory p-6 border-2 border-custom-black shadow-[4px_4px_0px_0px_var(--color-custom-black)] mb-8">
          <h3 className="font-serif text-2xl italic">Sent!</h3>
          <p>{response.message}</p>
        </div>
      )}
      {response.type === "error" && (
        <div className="text-center bg-custom-red text-custom-ivory p-6 border-2 border-custom-black shadow-[4px_4px_0px_0px_var(--color-custom-black)] mb-8">
           <h3 className="font-serif text-2xl italic">Error</h3>
          <p>{response.message}</p>
        </div>
      )}

      {/* Hide form on success if desired, or leave it to allow multiple sends */}
      {response.type !== "success" && (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          {/* Honeypot Field - hidden from users but visible to bots */}
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

          <div className="grid md:grid-cols-2 gap-8 w-full py-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="uppercase text-sm font-bold tracking-widest py-2 text-custom-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-[var(--color-surface)] border-2 border-custom-black p-3 text-custom-black focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--color-custom-black)] transition-shadow"
                value={contact.name}
                onChange={handleChange}
                required
                aria-label="Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="uppercase text-sm font-bold tracking-widest py-2 text-custom-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-[var(--color-surface)] border-2 border-custom-black p-3 text-custom-black focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--color-custom-black)] transition-shadow"
                value={contact.email}
                onChange={handleChange}
                required
                aria-label="Email"
              />
            </div>
          </div>

          <div className="flex flex-col py-6">
            <label htmlFor="message" className="uppercase text-sm font-bold tracking-widest py-2 text-custom-black">
              Message
            </label>
            <textarea
              className="bg-[var(--color-surface)] border-2 border-custom-black p-3 text-custom-black focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--color-custom-black)] transition-shadow"
              name="message"
              id="message"
              rows={8}
              value={contact.message}
              onChange={handleChange}
              required
              aria-label="Message"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer bg-custom-black text-custom-ivory border-2 border-custom-black p-4 font-bold uppercase tracking-widest hover:bg-[var(--color-surface)] hover:text-custom-black hover:shadow-[6px_6px_0px_0px_var(--color-custom-black)] transition-all w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
