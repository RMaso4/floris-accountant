'use client'

import { useState, useEffect } from 'react';
import { Newspaper, ExternalLink, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

// Categories relevant to accounting/finance
const categories = [
  'business',
  'finanicien',
  'economie',
];

interface NewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const baseUrl = 'https://gnews.io/api/v4/search';
        // Get date for last 7 days
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        
        // Format date as YYYY-MM-DD
        const fromDate = lastWeek.toISOString().split('T')[0];
        
        // Build category-specific queries
        const categoryQueries = {
          all: 'accountant OR belasting OR jaarrekening OR onderneming',
          business: 'ondernemen OR mkb OR bedrijf',
          finance: 'financieel OR belasting OR accountant',
          economy: 'economie OR nederland OR bedrijfsleven'
        };
        
        const query = categoryQueries[activeCategory as keyof typeof categoryQueries];
        const apiKey = '972b6acf3f96cfbb85f2edb25b8623ef';
        const lang = 'nl'; // Dutch language
        const country = 'nl'; // Netherlands
        const sortBy = 'publishedAt'; // Sort by publication date
        const url = `${baseUrl}?q=${query}&lang=${lang}&country=${country}&from=${fromDate}&sortby=${sortBy}&page=${page}&apikey=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.errors) {
          throw new Error(data.errors[0]);
        }

        setArticles(data.articles || []);
      } catch (err) {
        setError('Er is een fout opgetreden bij het ophalen van het nieuws. Probeer het later opnieuw.');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [activeCategory, page]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Nieuws & Updates
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Blijf op de hoogte van het laatste nieuws in financiën, accounting en bedrijfsvoering
            </p>
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setPage(1);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full">
              <Newspaper className="h-6 w-6 text-blue-600 animate-pulse" />
            </div>
            <p className="mt-4 text-gray-600">Nieuws laden...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={`${article.title}-${index}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden
                  transform transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
              >
                {article.image && (
                  <div className="aspect-w-16 aspect-h-9 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(article.publishedAt)}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Bron: {article.source.name}
                    </span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Lees meer
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && !error && articles.length > 0 && (
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 bg-gray-100 
                hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Vorige
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 bg-gray-100 
                hover:bg-gray-200"
            >
              Volgende
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}