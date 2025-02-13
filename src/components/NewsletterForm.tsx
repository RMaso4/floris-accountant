import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    generalNewsletter: false,
    agroNewsletter: false,
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.generalNewsletter && !formData.agroNewsletter) {
      setErrorMessage('Selecteer minimaal één nieuwsbrief.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      // Log the request attempt
      console.log('Attempting to submit to:', '/api/newsletter');
      console.log('With data:', formData);

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Log the raw response
      console.log('Response status:', response.status);
      
      // Try to get the response text first
      const responseText = await response.text();
      console.log('Raw response text:', responseText);

      // Parse the response if it's JSON
      let data;
      try {
        data = responseText ? JSON.parse(responseText) : {};
        console.log('Parsed response data:', data);
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
      }

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          generalNewsletter: false,
          agroNewsletter: false,
        });
      } else {
        throw new Error(data?.error || 'Server responded with an error');
      }
    } catch (error: any) {
      // Log the full error object
      console.error('Full error object:', error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      setErrorMessage(error.message || 'Er is iets misgegaan. Probeer het later opnieuw.');
      setFormStatus('error');
    }
  };

  return (
    <div className="px-6 py-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Nieuwsbrief</h2>
      <p className="text-gray-600 mb-6">
        Blijf op de hoogte van het laatste nieuws en updates.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields remain the same */}
        <div className="space-y-4">
          <div>
            <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-700 mb-1">
              Naam
            </label>
            <input
              type="text"
              id="newsletter-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mailadres
            </label>
            <input
              type="email"
              id="newsletter-email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              required
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="flex items-center">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                checked={formData.generalNewsletter}
                onChange={(e) => setFormData({ ...formData, generalNewsletter: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors duration-200
                peer-checked:border-blue-500 peer-checked:bg-blue-500 border-gray-300">
                {formData.generalNewsletter && (
                  <Check className="w-3 h-3 text-white stroke-[3]" />
                )}
              </div>
            </div>
            <span className="ml-3 text-gray-700">Algemene nieuwsbrief</span>
          </label>

          <label className="flex items-center">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                checked={formData.agroNewsletter}
                onChange={(e) => setFormData({ ...formData, agroNewsletter: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors duration-200
                peer-checked:border-blue-500 peer-checked:bg-blue-500 border-gray-300">
                {formData.agroNewsletter && (
                  <Check className="w-3 h-3 text-white stroke-[3]" />
                )}
              </div>
            </div>
            <span className="ml-3 text-gray-700">Agro-nieuwsbrief</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={formStatus === 'submitting' || (!formData.generalNewsletter && !formData.agroNewsletter)}
          className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 
            hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium
            transform transition-all duration-200 hover:scale-[1.02]
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-sm hover:shadow-md"
        >
          {formStatus === 'submitting' ? (
            'Aanmelden...'
          ) : (
            <span className="flex items-center justify-center">
              Aanmelden voor nieuwsbrief
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          )}
        </button>

        {formStatus === 'success' && (
          <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-100">
            <p className="text-green-800 flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Bedankt voor uw aanmelding voor de nieuwsbrief!
            </p>
          </div>
        )}

        {formStatus === 'error' && (
          <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-100">
            <p className="text-red-800">
              {errorMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}