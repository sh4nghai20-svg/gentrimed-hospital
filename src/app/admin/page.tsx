'use client';

import { useState } from 'react';
import { useContent, Service, Doctor, ContactInfo, NewsItem, DepartmentContact } from '@/context/ContentContext';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminPage() {
  const { services, setServices, doctors, setDoctors, slides, setSlides, testimonials, setTestimonials, news, setNews, contact, setContact } = useContent();
  const [editingContact, setEditingContact] = useState<ContactInfo>(contact);

  // service handlers
  const updateService = (idx: number, field: keyof Service, value: any) => {
    const newSvc = [...services];
    // @ts-ignore
    newSvc[idx][field] = value;
    setServices(newSvc);
  };
  const addService = () => {
    const id = Date.now();
    setServices([...services, { id, icon: 'Heart', title: '', description: '' }]);
  };
  const removeService = (idx: number) => {
    const newSvc = [...services];
    newSvc.splice(idx, 1);
    setServices(newSvc);
  };

  // doctor handlers
  const updateDoctor = (idx: number, field: keyof Doctor, value: any) => {
    const newDocs = [...doctors];
    // @ts-ignore
    newDocs[idx][field] = value;
    setDoctors(newDocs);
  };
  const addDoctor = () => {
    const id = Date.now();
    setDoctors([...doctors, { id, name: '', specialty: '', experience: '' }]);
  };
  const removeDoctor = (idx: number) => {
    const newDocs = [...doctors];
    newDocs.splice(idx, 1);
    setDoctors(newDocs);
  };

  const saveContact = () => {
    setContact(editingContact);
  };

  // slide handlers
  const updateSlide = (idx: number, field: keyof typeof slides[0], value: any) => {
    const newSlides = [...slides];
    // @ts-ignore
    newSlides[idx][field] = value;
    setSlides(newSlides);
  };
  const addSlide = () => {
    const id = Date.now();
    setSlides([...slides, { id, title: '', subtitle: '', buttonText: '', image: '' }]);
  };
  const removeSlide = (idx: number) => {
    const newSlides = [...slides];
    newSlides.splice(idx, 1);
    setSlides(newSlides);
  };

  // testimonial handlers
  const updateTestimonial = (idx: number, field: keyof typeof testimonials[0], value: any) => {
    const newTest = [...testimonials];
    // @ts-ignore
    newTest[idx][field] = value;
    setTestimonials(newTest);
  };
  const addTestimonial = () => {
    const id = Date.now();
    setTestimonials([...testimonials, { id, name: '', specialty: '', review: '', rating: 5 }]);
  };
  const removeTestimonial = (idx: number) => {
    const newTest = [...testimonials];
    newTest.splice(idx, 1);
    setTestimonials(newTest);
  };

  // news handlers
  const updateNews = (idx: number, field: keyof NewsItem, value: any) => {
    const newNews = [...news];
    // @ts-ignore
    newNews[idx][field] = value;
    setNews(newNews);
  };
  const addNews = () => {
    const id = Date.now();
    setNews([...news, { id, icon: 'Stethoscope', title: '', date: '', description: '', category: '' }]);
  };
  const removeNews = (idx: number) => {
    const newNews = [...news];
    newNews.splice(idx, 1);
    setNews(newNews);
  };

  // department handlers
  const updateDepartment = (idx: number, field: keyof DepartmentContact, value: any) => {
    const newContact = { ...editingContact };
    if (!newContact.departments) newContact.departments = [];
    // @ts-ignore
    newContact.departments[idx][field] = value;
    setEditingContact(newContact);
  };
  const addDepartment = () => {
    const id = Date.now();
    const newContact = { ...editingContact };
    if (!newContact.departments) newContact.departments = [];
    newContact.departments = [...newContact.departments, { id, name: '', phone: '', email: '', hours: '' }];
    setEditingContact(newContact);
  };
  const removeDepartment = (idx: number) => {
    const newContact = { ...editingContact };
    if (!newContact.departments) newContact.departments = [];
    newContact.departments.splice(idx, 1);
    setEditingContact(newContact);
  };

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <div className="p-8 max-w-4xl mx-auto pt-24">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border p-2"
            placeholder="Address"
            value={editingContact.address}
            onChange={(e) => setEditingContact({ ...editingContact, address: e.target.value })}
          />
          <input
            className="border p-2"
            placeholder="Phone"
            value={editingContact.phone}
            onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })}
          />
          <input
            className="border p-2"
            placeholder="Email"
            value={editingContact.email}
            onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
          />
          <input
            className="border p-2"
            placeholder="Hours"
            value={editingContact.hours}
            onChange={(e) => setEditingContact({ ...editingContact, hours: e.target.value })}
          />
          <input
            className="border p-2"
            placeholder="Emergency Phone"
            value={editingContact.emergency || ''}
            onChange={(e) => setEditingContact({ ...editingContact, emergency: e.target.value })}
          />
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-6">Department Contacts</h3>
        {(editingContact.departments || []).map((dept, idx) => (
          <div key={dept.id} className="mb-4 border p-4 rounded">
            <div className="flex space-x-2 mb-2">
              <input
                className="border p-1 flex-1"
                placeholder="Department Name"
                value={dept.name}
                onChange={(e) => updateDepartment(idx, 'name', e.target.value)}
              />
              <button
                className="text-red-500"
                onClick={() => removeDepartment(idx)}
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                className="border p-1"
                placeholder="Phone"
                value={dept.phone}
                onChange={(e) => updateDepartment(idx, 'phone', e.target.value)}
              />
              <input
                className="border p-1"
                placeholder="Email"
                value={dept.email}
                onChange={(e) => updateDepartment(idx, 'email', e.target.value)}
              />
              <input
                className="border p-1"
                placeholder="Hours"
                value={dept.hours}
                onChange={(e) => updateDepartment(idx, 'hours', e.target.value)}
              />
            </div>
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addDepartment}>
          Add Department
        </button>

        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          onClick={saveContact}
        >
          Save Contact Info
        </button>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        {services.map((s, idx) => (
          <div key={s.id} className="mb-4 border p-4 rounded">
            <div className="flex space-x-2">
              <input
                className="border p-1 flex-1"
                placeholder="Title"
                value={s.title}
                onChange={(e) => updateService(idx, 'title', e.target.value)}
              />
              <input
                className="border p-1 w-24"
                placeholder="Icon"
                value={s.icon}
                onChange={(e) => updateService(idx, 'icon', e.target.value)}
              />
              <button
                className="text-red-500"
                onClick={() => removeService(idx)}
              >
                Remove
              </button>
            </div>
            <textarea
              className="border p-1 w-full mt-2"
              placeholder="Description"
              value={s.description}
              onChange={(e) => updateService(idx, 'description', e.target.value)}
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addService}>
          Add Service
        </button>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Slides (Hero)</h2>
        {slides.map((s, idx) => (
          <div key={s.id} className="mb-4 border p-4 rounded">
            <div className="flex space-x-2">
              <input
                className="border p-1 flex-1"
                placeholder="Title"
                value={s.title}
                onChange={(e) => updateSlide(idx, 'title', e.target.value)}
              />
              <button
                className="text-red-500"
                onClick={() => removeSlide(idx)}
              >
                Remove
              </button>
            </div>
            <input
              className="border p-1 w-full mt-2"
              placeholder="Subtitle"
              value={s.subtitle}
              onChange={(e) => updateSlide(idx, 'subtitle', e.target.value)}
            />
            <input
              className="border p-1 w-full mt-2"
              placeholder="Button Text"
              value={s.buttonText}
              onChange={(e) => updateSlide(idx, 'buttonText', e.target.value)}
            />
            <input
              className="border p-1 w-full mt-2"
              placeholder="Image Path"
              value={s.image}
              onChange={(e) => updateSlide(idx, 'image', e.target.value)}
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addSlide}>
          Add Slide
        </button>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        {testimonials.map((t, idx) => (
          <div key={t.id} className="mb-4 border p-4 rounded">
            <div className="flex space-x-2">
              <input
                className="border p-1 flex-1"
                placeholder="Name"
                value={t.name}
                onChange={(e) => updateTestimonial(idx, 'name', e.target.value)}
              />
              <button
                className="text-red-500"
                onClick={() => removeTestimonial(idx)}
              >
                Remove
              </button>
            </div>
            <input
              className="border p-1 w-full mt-2"
              placeholder="Specialty"
              value={t.specialty}
              onChange={(e) => updateTestimonial(idx, 'specialty', e.target.value)}
            />
            <textarea
              className="border p-1 w-full mt-2"
              placeholder="Review"
              value={t.review}
              onChange={(e) => updateTestimonial(idx, 'review', e.target.value)}
            />
            <input
              type="number"
              className="border p-1 w-20 mt-2"
              placeholder="Rating"
              min={1}
              max={5}
              value={t.rating}
              onChange={(e) => updateTestimonial(idx, 'rating', parseInt(e.target.value) || 1)}
            />
            <input
              className="border p-1 w-full mt-2"
              placeholder="Image Path (optional)"
              value={t.image || ''}
              onChange={(e) => updateTestimonial(idx, 'image', e.target.value)}
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTestimonial}>
          Add Testimonial
        </button>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">News & Events</h2>
        {news.map((n, idx) => (
          <div key={n.id} className="mb-4 border p-4 rounded">
            <div className="flex space-x-2">
              <input
                className="border p-1 flex-1"
                placeholder="Title"
                value={n.title}
                onChange={(e) => updateNews(idx, 'title', e.target.value)}
              />
              <button
                className="text-red-500"
                onClick={() => removeNews(idx)}
              >
                Remove
              </button>
            </div>
            <input
              className="border p-1 w-full mt-2"
              placeholder="Date"
              value={n.date}
              onChange={(e) => updateNews(idx, 'date', e.target.value)}
            />
            <textarea
              className="border p-1 w-full mt-2"
              placeholder="Description"
              value={n.description}
              onChange={(e) => updateNews(idx, 'description', e.target.value)}
            />
            <input
              className="border p-1 w-full mt-2"
              placeholder="Category"
              value={n.category}
              onChange={(e) => updateNews(idx, 'category', e.target.value)}
            />
            <input
              className="border p-1 w-full mt-2"
              placeholder="Icon (Stethoscope, Users, Calendar)"
              value={n.icon}
              onChange={(e) => updateNews(idx, 'icon', e.target.value)}
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addNews}>
          Add News/Event
        </button>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Doctors</h2>
        {doctors.map((d, idx) => (
          <div key={d.id} className="mb-4 border p-4 rounded">
            <div className="flex space-x-2">
              <input
                className="border p-1 flex-1"
                placeholder="Name"
                value={d.name}
                onChange={(e) => updateDoctor(idx, 'name', e.target.value)}
              />
              <button
                className="text-red-500"
                onClick={() => removeDoctor(idx)}
              >
                Remove
              </button>
            </div>
            <input
              className="border p-1 w-full mt-2"
              placeholder="Specialty"
              value={d.specialty}
              onChange={(e) => updateDoctor(idx, 'specialty', e.target.value)}
            />
            <input
              className="border p-1 w-full mt-2"
              placeholder="Experience"
              value={d.experience}
              onChange={(e) => updateDoctor(idx, 'experience', e.target.value)}
            />
            <input
              className="border p-1 w-full mt-2"
              placeholder="Image Path (optional)"
              value={d.image || ''}
              onChange={(e) => updateDoctor(idx, 'image', e.target.value)}
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addDoctor}>
          Add Doctor
        </button>
      </section>
      </div>
      <Footer />
    </main>
  );
}
