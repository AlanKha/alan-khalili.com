import { useState } from "react";

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
    <div id="Contact" className="px-8 lg:px-36 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center">Contact</h1>

      {response.type === "success" && (
        <div className="text-center bg-custom-green text-custom-ivory p-4 rounded-lg">
          {response.message}
        </div>
      )}
      {response.type === "error" && (
        <div className="text-center bg-custom-red text-custom-ivory p-4 rounded-lg">
          {response.message}
        </div>
      )}

      {/* Hide form on success if desired, or leave it to allow multiple sends */}
      {response.type !== "success" && (
        <form onSubmit={handleSubmit}>
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

          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="uppercase text-sm py-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-custom-ivory border-2 rounded-lg p-3 flex border-gray-300 text-black"
                value={contact.name}
                onChange={handleChange}
                required
                aria-label="Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="uppercase text-sm py-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-custom-ivory border-2 rounded-lg p-3 flex border-gray-300 text-black"
                value={contact.email}
                onChange={handleChange}
                required
                aria-label="Email"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="message" className="uppercase text-sm py-2">
              Message
            </label>
            <textarea
              className="bg-custom-ivory border-2 rounded-lg p-3 border-gray-300 text-black"
              name="message"
              id="message"
              rows={10}
              value={contact.message}
              onChange={handleChange}
              required
              aria-label="Message"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer rounded-lg bg-custom-green border-2 border-green-900 text-custom-ivory mt-4 w-full p-4 disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
