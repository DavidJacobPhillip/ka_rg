export interface Database {
  public: {
    Tables: {
      open_houses: {
        Row: {
          id: string;
          title: string;
          address: string;
          price: number;
          bedrooms: number;
          bathrooms: number;
          square_feet: number;
          image_url: string;
          description: string;
          open_house_date: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          address: string;
          price: number;
          bedrooms?: number;
          bathrooms?: number;
          square_feet?: number;
          image_url: string;
          description?: string;
          open_house_date: string;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          address?: string;
          price?: number;
          bedrooms?: number;
          bathrooms?: number;
          square_feet?: number;
          image_url?: string;
          description?: string;
          open_house_date?: string;
          status?: string;
          created_at?: string;
        };
      };
      contact_inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string;
          message?: string;
          created_at?: string;
        };
      };
    };
  };
}
