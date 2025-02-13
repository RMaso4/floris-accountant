import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail('');
        // Optionally add some success handling here
        alert('Bedankt voor uw aanmelding!');
      } else {
        alert('Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch (error) {
      console.error('Fout bij aanmelden:', error);
      alert('Er is iets misgegaan. Probeer het later opnieuw.');
    }
  };

  return (
    <div className="px-6 py-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Nieuwsbrief</h2>
      <p className="text-gray-600 mb-6">
        Blijf op de hoogte van het laatste nieuws en updates.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres
          </label>
          <input
            type="email"
            id="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 
            hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium
            transform transition-all duration-200 hover:scale-[1.02]
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            shadow-sm hover:shadow-md"
        >
          <span className="flex items-center justify-center">
            Aanmelden voor nieuwsbrief
            <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </button>
      </form>
    </div>
  );
}