"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input"; // Shadcn UI Input
import { Textarea } from "@/components/ui/textarea"; // Shadcn UI Textarea
import { Button } from "@/components/ui/button"; // Shadcn UI Button

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrorMessage("");
      } else {
        setErrorMessage(result.message || "Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:col-span-5 col-span-12 lg:[&_strong]:text-3xl md:[&_strong]:text-2xl [&_strong]:text-xl">
      <strong className="text-2xl font-semibold mb-6">Send Us a Message</strong>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 [&>label]:text-sm [&_label]:block [&_label]:font-medium [&_label]:mt-1.5 [&_label]:mb-2.5 [&>input]:w-full [&>textarea]:w-full"
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="JohnDoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 333 444 5555"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message">Message</label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="sm:col-span-2">
          <Button
            type="submit"
            className="w-full sm:w-auto block font-semibold py-2 pb-[30px] px-8 max-sm:pb-[31px] max-sm:pt-[9px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
      {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
    </div>
  );
};

export default ContactForm;