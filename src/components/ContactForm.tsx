import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const WEB3FORMS_KEY = 'fd4c0730-09ce-4f2a-963b-2b92db72e064';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "Floris",
          to_email: "raf.masolijn007@gmail.com",
          subject: `Nieuw contactformulier: ${formData.subject}`,
          message: `
Nieuw bericht via het contactformulier

CONTACTGEGEVENS
--------------
Naam: ${formData.name}
E-mail: ${formData.email}
Telefoon: ${formData.phone || 'Niet opgegeven'}

BERICHT
-------
Onderwerp: ${formData.subject}

${formData.message}

--
Dit bericht is verzonden via het contactformulier op floris.ac`,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg mb-6">
        <Mail className="h-6 w-6 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Stuur ons een bericht
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Naam
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefoonnummer
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Onderwerp
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Bericht
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            required
          />
        </div>

        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 
            hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium
            transform transition-all duration-200 hover:scale-[1.02]
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-sm hover:shadow-md"
        >
          {formStatus === 'submitting' ? (
            'Verzenden...'
          ) : (
            <span className="flex items-center justify-center">
              Verstuur bericht
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          )}
        </button>

        {formStatus === 'success' && (
          <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-100">
            <p className="text-green-800 flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.
            </p>
          </div>
        )}

        {formStatus === 'error' && (
          <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-100">
            <p className="text-red-800">
              Er is iets misgegaan. Probeer het later opnieuw.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}