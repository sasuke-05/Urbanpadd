
import { type Listing } from '@/types';

export const mockListings: Listing[] = [
  {
    "id": "1",
    "title": "Affordable Single Room PG in Koramangala",
    "location": "Koramangala 5th Block, Bangalore",
    "rent": 15000,
    "amenities": ["WiFi", "Laundry Service", "Power Backup", "Daily Cleaning"],
    "description": "A clean and secure single room PG, perfect for students and working professionals. Located in a prime area with easy access to offices, restaurants, and shopping centers. Comes with a bed, wardrobe, and study table.",
    "verified": true,
    "type": "PG",
    "imageUrls": [
        "/images/property-1-1.png",
        "/images/property-1-2.png",
        "/images/property-1-3.png",
        "/images/property-1-4.png"
    ],
    "dataAiHints": ["student room", "single bed", "common area", "hostel building"]
  },
  {
    "id": "2",
    "title": "Cozy 1RK Studio in Indiranagar",
    "location": "100 Feet Road, Indiranagar, Bangalore",
    "rent": 18000,
    "amenities": ["WiFi", "AC", "Attached Kitchenette", "24/7 Security"],
    "description": "A compact and modern 1RK studio apartment ideal for a single occupant. The unit is semi-furnished and includes a small kitchen area. Located in the vibrant neighborhood of Indiranagar, close to cafes and metro station.",
    "verified": true,
    "type": "Flat",
    "imageUrls": [
        "/images/property-2-1.png",
        "/images/property-2-2.png",
        "/images/property-2-3.png",
        "/images/property-2-4.png"
    ],
    "dataAiHints": ["studio apartment", "kitchenette", "modern bathroom", "apartment building"]
  },
  {
    "id": "3",
    "title": "Shared PG for Gents in HSR Layout",
    "location": "HSR Layout, Sector 7, Bangalore",
    "rent": 9500,
    "amenities": ["WiFi", "Food Included", "Power Backup", "Parking"],
    "description": "A budget-friendly twin-sharing PG for men. We provide three meals a day with a rotating menu. The property is well-maintained with a friendly environment. Excellent connectivity to Electronic City and Marathahalli.",
    "verified": false,
    "type": "PG",
    "imageUrls": [
        "/images/property-3-1.png",
        "/images/property-3-2.png",
        "/images/property-3-3.png",
        "/images/property-3-4.png"
    ],
    "dataAiHints": ["shared room", "bunk beds", "mess hall", "building exterior"]
  },
  {
    "id": "4",
    "title": "Secure PG for Ladies near MG Road",
    "location": "Off Brigade Road, Bangalore",
    "rent": 16000,
    "amenities": ["WiFi", "AC", "24/7 Security", "Laundry Service", "Attached Bathroom"],
    "description": "A premium and secure PG exclusively for women, located in the heart of the city. Single and twin-sharing rooms available. The property is equipped with CCTV cameras and has a female warden on-site.",
    "verified": true,
    "type": "PG",
    "imageUrls": [
        "/images/property-4-1.png",
        "/images/property-4-2.png",
        "/images/property-4-3.png",
        "/images/property-4-4.png"
    ],
    "dataAiHints": ["womens hostel", "cozy room", "study area", "secure entrance"]
  },
  {
    "id": "5",
    "title": "1BHK for Rent in BTM Layout",
    "location": "BTM 2nd Stage, Bangalore",
    "rent": 19500,
    "amenities": ["Parking", "24hr Water Supply", "Kitchen", "Balcony"],
    "description": "An independent 1BHK unit on the second floor of a residential building. Perfect for a small family or a couple. The location is well-connected and has markets, schools, and hospitals nearby.",
    "verified": true,
    "type": "Flat",
    "imageUrls": [
        "/images/property-5-1.png",
        "/images/property-5-2.png",
        "/images/property-5-3.png",
        "/images/property-5-4.png"
    ],
    "dataAiHints": ["apartment living room", "simple kitchen", "bedroom view", "apartment balcony"]
  }
]
