import { useState } from "react";

interface ProposalFormProps {
  propertyTitle: string;
}

const ProposalForm = ({ propertyTitle }: ProposalFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input 
        type="hidden" 
        name="property" 
        value={propertyTitle} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input 
            name="name" 
            placeholder="Your Name" 
            required 
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>
      
      <div>
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
        />
      </div>
      
      <div>
        <textarea 
          name="message" 
          placeholder={`Tell us about your proposal for ${propertyTitle}`} 
          rows={4} 
          required 
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : "Send Proposal"}
      </button>
    </form>
  );
};

export default ProposalForm;