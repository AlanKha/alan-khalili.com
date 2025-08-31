import { useState } from "react";

/**
 * The state of the contact form.
 */
interface ContactState {
  name: string;
  email: string;
  subject: string;
  honeypot: string;
  message: string;
  replyTo: string;
  accessKey: string;
}

/**
 * The state of the response from the server.
 */
interface ResponseState {
  type: "success" | "error" | "";
  message: string;
}

/**
 * A component that renders a contact form.
 */
export default function Contact() {
  const [contact, setContact] = useState<ContactState>({
    name: "",
    email: "",
    subject: "Contact Form",
    honeypot: "",
    message: "",
    replyTo: "@",
    accessKey: import.meta.env.VITE_ACCESS_KEY,
  });

  const [response, setResponse] = useState<ResponseState>({
    type: "",
    message: "",
  });

  /**
   * Handles changes to the form fields.
   * @param e The change event.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  /**
   * Handles the form submission.
   * @param e The form event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.message === "Form submitted successfully") {
        setResponse({
          type: "success",
          message: json.message,
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occurred while submitting the form.",
      });
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

      {!response.message && (
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="accessKey"
            value={contact.accessKey}
            aria-label="Access Key"
          />
          <input
            type="hidden"
            name="subject"
            value={contact.subject}
            onChange={handleChange}
            aria-label="Subject"
          />
          <input
            type="hidden"
            name="honeypot"
            value={contact.honeypot}
            onChange={handleChange}
            className="hidden"
            aria-label="Honeypot"
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
            className="cursor-pointer rounded-lg bg-custom-green border-2 border-green-900 text-custom-ivory mt-4 w-full p-4"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
