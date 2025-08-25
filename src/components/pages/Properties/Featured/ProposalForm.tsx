import { useState } from "react";

interface ProposalFormProps {
  propertyTitle: string;
}

const ProposalForm = ({ propertyTitle }: ProposalFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xandwvze", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6 bg-green-50 rounded-lg border border-green-200">
        <p className="text-green-600 font-semibold mb-4">✅ Proposal sent successfully!</p>
        <p className="text-sm text-gray-600 mb-4">We'll get back to you shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="property" value={propertyTitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
      />

      <textarea
        name="message"
        placeholder={`Tell us about your proposal for ${propertyTitle}`}
        rows={4}
        required
        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
      >
        {isSubmitting ? "Sending..." : "Send Proposal"}
      </button>
    </form>
  );
};

export default ProposalForm;
