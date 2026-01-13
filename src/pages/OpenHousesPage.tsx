import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Bed, Bath, Maximize, Calendar, MapPin, DollarSign } from 'lucide-react';
import type { Database } from '../lib/database.types';

type OpenHouse = Database['public']['Tables']['open_houses']['Row'];

export default function OpenHousesPage() {
  const [properties, setProperties] = useState<OpenHouse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpenHouses();
  }, []);

  async function fetchOpenHouses() {
    try {
      const { data, error } = await supabase
        .from('open_houses')
        .select('*')
        .order('open_house_date', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error) {
      console.error('Error fetching open houses:', error);
    } finally {
      setLoading(false);
    }
  }

  function formatPrice(price: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#422dab] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#422dab] to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Open Houses</h1>
          <p className="text-xl opacity-90">
            Explore our curated selection of properties
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {properties.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-xl">No open houses available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div
                  className="h-80 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${property.image_url})` }}
                >
                  <div className="absolute top-4 right-4 bg-[#422dab] text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                    {property.status === 'active' ? 'Available' : property.status}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {property.title}
                      </h2>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin size={18} className="mr-2" />
                        <span>{property.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-[#422dab] mb-6">
                    <DollarSign size={24} />
                    <span className="text-3xl font-bold">{formatPrice(property.price)}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                    <div className="flex items-center space-x-2">
                      <Bed className="text-[#422dab]" size={20} />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                        <p className="text-sm text-gray-600">Bedrooms</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="text-[#422dab]" size={20} />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                        <p className="text-sm text-gray-600">Bathrooms</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Maximize className="text-[#422dab]" size={20} />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">
                          {property.square_feet.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">Sq Ft</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>

                  <div className="bg-purple-50 rounded-lg p-4 flex items-start space-x-3">
                    <Calendar className="text-[#422dab] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-[#422dab] mb-1">
                        Open House Date
                      </p>
                      <p className="text-gray-900 font-medium">{formatDate(property.open_house_date)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
