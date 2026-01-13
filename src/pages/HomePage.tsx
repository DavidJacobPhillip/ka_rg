import { useEffect, useState } from 'react';
import {
  TrendingUp,
  HandshakeIcon,
  Compass,
  Building,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

type FeaturedProperty = {
  id: string;
  title: string;
  price: number;
  image_url: string;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: HandshakeIcon,
      title: 'Trusted Partnerships',
      description: 'Built on transparency and long-term relationships',
    },
    {
      icon: Compass,
      title: 'Strategic Guidance',
      description: 'Clear direction through every market condition',
    },
    {
      icon: Building,
      title: 'Premium Portfolio',
      description: 'A refined collection of exceptional properties',
    },
    {
      icon: TrendingUp,
      title: 'Value Driven',
      description: 'Maximizing returns for buyers and sellers',
    },
  ];

  const [featuredProperties, setFeaturedProperties] = useState<FeaturedProperty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from('open_houses')
        .select('id, title, price, image_url')
        .order('created_at', { ascending: false })
        .limit(6);

      console.log('DATA:', data);
      console.log('ERROR:', error);

      if (error) {
        console.error('Supabase error:', error);
        setFeaturedProperties([]);
      } else if (data) {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setFeaturedProperties(shuffled.slice(0, 3));
      }

      setLoading(false);
    };

    fetchFeaturedProperties();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(66, 45, 171, 0.7), rgba(66, 45, 171, 0.5)), url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Dream Home Awaits
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Discover exceptional properties with Ka Realty Group.
            </p>
            <button
              onClick={() => onNavigate('open-houses')}
              className="bg-white text-[#422dab] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Open Houses
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#422dab]">Ka Realty Group</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring decades of experience and a commitment to excellence in every transaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#422dab] to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#422dab] to-purple-600 rounded-2xl p-12 text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our expert team guide you through every step of your real estate journey
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#422dab] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </button>
        </div>

        {/* Featured Properties Section */}
        <div className="bg-gray-50 py-16 rounded-2xl">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured Properties
            </h2>

            {loading && (
              <p className="text-center text-gray-500">
                Loading featured properties…
              </p>
            )}

            {!loading && featuredProperties.length === 0 && (
              <p className="text-center text-gray-500">
                No featured properties available.
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => onNavigate('open-houses')}
                >
                  <div
                    className="h-64 bg-cover bg-center transition-all duration-500"
                    style={{
                      backgroundImage: `url(${property.image_url})`,
                    }}
                  />
                  <div className="p-6">
                    <p className="text-2xl font-bold text-[#422dab] mb-2">
                      ${property.price.toLocaleString()}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {property.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
