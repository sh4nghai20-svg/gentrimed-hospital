'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import {
  Heart,
  Baby,
  Radio,
  AlertCircle,
  Zap,
  Microscope,
} from 'lucide-react';

export type Service = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image?: string;
};

export type SlideData = {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
};

export type Testimonial = {
  id: number;
  name: string;
  specialty: string;
  review: string;
  rating: number;
  image?: string;
};

export type NewsItem = {
  id: number;
  icon: string;
  title: string;
  date: string;
  description: string;
  category: string;
};

export type DepartmentContact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  hours: string;
};

export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  hours: string;
  emergency?: string;
  departments: DepartmentContact[];
};

export type ContentContextType = {
  services: Service[];
  setServices: (s: Service[]) => void;
  doctors: Doctor[];
  setDoctors: (d: Doctor[]) => void;
  slides: SlideData[];
  setSlides: (s: SlideData[]) => void;
  testimonials: Testimonial[];
  setTestimonials: (t: Testimonial[]) => void;
  news: NewsItem[];
  setNews: (n: NewsItem[]) => void;
  contact: ContactInfo;
  setContact: (c: ContactInfo) => void;
};

const defaultServices: Service[] = [
  {
    id: 1,
    icon: 'Heart',
    title: 'Cardiology',
    description: 'Comprehensive heart and cardiovascular care',
  },
  {
    id: 2,
    icon: 'Baby',
    title: 'Pediatrics',
    description: 'Specialized care for infants and children',
  },
  {
    id: 3,
    icon: 'Radio',
    title: 'Radiology',
    description: 'Advanced imaging and diagnostic services',
  },
  {
    id: 4,
    icon: 'AlertCircle',
    title: 'Emergency Care',
    description: '24/7 emergency and trauma services',
  },
  {
    id: 5,
    icon: 'Zap',
    title: 'Surgery',
    description: 'Advanced surgical procedures and operations',
  },
  {
    id: 6,
    icon: 'Microscope',
    title: 'Laboratory',
    description: 'Complete diagnostic and pathology services',
  },
];

const defaultSlides: SlideData[] = [
  {
    id: 1,
    title: 'Compassionate Care for Every Life',
    subtitle: 'Advanced healthcare with modern medical technology',
    buttonText: 'Book Appointment',
    image: '/images/648049730_1529474285854580_8796894577667637825_n.jpg',
  },
  {
    id: 2,
    title: 'Your Health is Our Priority',
    subtitle: 'Trusted doctors and world-class facilities',
    buttonText: 'Meet Our Doctors',
    image: '/images/648870891_1529419429193399_6644727190506032814_n.jpg',
  },
  {
    id: 3,
    title: 'Modern Healthcare You Can Trust',
    subtitle: 'Dedicated to improving the health of our community',
    buttonText: 'Our Services',
    image: '/images/648887969_1529419535860055_8816587977676071817_n.jpg',
  },
];

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Adeyemi',
    specialty: 'Patient',
    review:
      'Gentrimed Hospital provided exceptional care during my treatment. The doctors were professional, and the staff was incredibly compassionate. Highly recommended!',
    rating: 5,
    image: '',
  },
  {
    id: 2,
    name: 'Maria Santos',
    specialty: 'Patient',
    review:
      'The facilities at Gentrimed are world-class. I felt confident and safe throughout my medical procedure. Thank you for the outstanding service!',
    rating: 5,
    image: '',
  },
  {
    id: 3,
    name: 'Ahmed Hassan',
    specialty: 'Patient',
    review:
      'From the moment I arrived at Gentrimed, I was treated with utmost care and respect. The medical team was knowledgeable and always available.',
    rating: 5,
    image: '',
  },
];

const defaultNews: NewsItem[] = [
  {
    id: 1,
    icon: 'Stethoscope',
    title: 'Medical Mission to Rural Areas',
    date: 'March 15, 2026',
    description: 'Gentrimed Hospital conducts free medical camps in underserved communities',
    category: 'Outreach',
  },
  {
    id: 2,
    icon: 'Users',
    title: 'Health Awareness Seminar',
    date: 'March 20, 2026',
    description: 'Join our expert doctors for a seminar on diabetes prevention and management',
    category: 'Seminar',
  },
  {
    id: 3,
    icon: 'Calendar',
    title: 'Hospital Anniversary Celebration',
    date: 'March 25, 2026',
    description: 'Celebrating 25 years of compassionate healthcare and patient trust',
    category: 'Event',
  },
];

const defaultDoctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15+ years',
    image: '',
  },
  {
    id: 2,
    name: 'Dr. Amara Okonkwo',
    specialty: 'Pediatrician',
    experience: '12+ years',
    image: '',
  },
  {
    id: 3,
    name: 'Dr. Michael Chen',
    specialty: 'Orthopedic Surgeon',
    experience: '18+ years',
    image: '',
  },
  {
    id: 4,
    name: 'Dr. Emily Rodriguez',
    specialty: 'General Practitioner',
    experience: '10+ years',
    image: '',
  },
  {
    id: 5,
    name: 'Dr. James Wilson',
    specialty: 'Radiologist',
    experience: '14+ years',
    image: '',
  },
];

const defaultContact: ContactInfo = {
  address: '123 Medical Centre Street, City, Country',
  phone: '+234 123 456 7890',
  email: 'hello@gentrimed.com',
  hours: 'Mon - Sun, 8AM - 6PM (Emergency 24/7)',
  emergency: '+234 123 456 7890',
  departments: [
    {
      id: 1,
      name: 'Emergency Department',
      phone: '+234 123 456 7890',
      email: 'emergency@gentrimed.com',
      hours: '24/7',
    },
    {
      id: 2,
      name: 'Cardiology',
      phone: '+234 123 456 7891',
      email: 'cardiology@gentrimed.com',
      hours: 'Mon - Fri, 8AM - 6PM',
    },
    {
      id: 3,
      name: 'Pediatrics',
      phone: '+234 123 456 7892',
      email: 'pediatrics@gentrimed.com',
      hours: 'Mon - Sat, 8AM - 8PM',
    },
    {
      id: 4,
      name: 'Radiology',
      phone: '+234 123 456 7893',
      email: 'radiology@gentrimed.com',
      hours: 'Mon - Fri, 8AM - 6PM',
    },
    {
      id: 5,
      name: 'Laboratory',
      phone: '+234 123 456 7894',
      email: 'lab@gentrimed.com',
      hours: 'Mon - Sun, 6AM - 10PM',
    },
    {
      id: 6,
      name: 'Pharmacy',
      phone: '+234 123 456 7895',
      email: 'pharmacy@gentrimed.com',
      hours: 'Mon - Sun, 24/7',
    },
  ],
};

const ContentContext = createContext<ContentContextType | undefined>(
  undefined
);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [services, setServicesState] = useState<Service[]>(defaultServices);
  const [doctors, setDoctorsState] = useState<Doctor[]>(defaultDoctors);
  const [slides, setSlidesState] = useState<SlideData[]>(defaultSlides);
  const [testimonials, setTestimonialsState] = useState<Testimonial[]>(defaultTestimonials);
  const [news, setNewsState] = useState<NewsItem[]>(defaultNews);
  const [contact, setContactState] = useState<ContactInfo>(defaultContact);

  // persist to localStorage
  useEffect(() => {
    const stored = localStorage.getItem('siteContent');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.services) setServicesState(parsed.services);
        if (parsed.doctors) setDoctorsState(parsed.doctors);
        if (parsed.slides) setSlidesState(parsed.slides);
        if (parsed.testimonials) setTestimonialsState(parsed.testimonials);
        if (parsed.news) setNewsState(parsed.news);
        if (parsed.contact) {
          // Ensure departments exist, fallback to default
          const loadedContact = parsed.contact;
          if (!loadedContact.departments) {
            loadedContact.departments = defaultContact.departments;
          }
          setContactState(loadedContact);
        }
      } catch {}
    }
  }, []);

  useEffect(() => {
    const payload = { services, doctors, slides, testimonials, news, contact };
    localStorage.setItem('siteContent', JSON.stringify(payload));
  }, [services, doctors, slides, testimonials, news, contact]);

  const setServices = (s: Service[]) => setServicesState(s);
  const setDoctors = (d: Doctor[]) => setDoctorsState(d);
  const setContact = (c: ContactInfo) => setContactState(c);

  return (
    <ContentContext.Provider
      value={{ services, setServices, doctors, setDoctors, slides, setSlides: setSlidesState, testimonials, setTestimonials: setTestimonialsState, news, setNews: setNewsState, contact, setContact }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within ContentProvider');
  return ctx;
}
