import { useState } from "react";

const ProposalForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-6">
        <p className="text-green-600 font-semibold mb-4">✅ Proposal sent successfully!</p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-yellow-400 text-white px-4 py-2 rounded-lg"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/mnqejgkd" // replace with your Formspree endpoint
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="flex flex-col gap-4"
    >
      <input name="name" placeholder="Your Name" required className="border p-2 rounded" />
      <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
      <textarea name="message" placeholder="Your Proposal" rows={4} required className="border p-2 rounded" />
      <button type="submit" className="bg-yellow-400 text-white py-2 rounded-lg">
        Send Proposal
      </button>
    </form>
  );
};

export default ProposalForm;
