import React, { useState } from 'react';

const SERVICE_OPTIONS = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [services, setServices] = useState<Set<string>>(
    new Set(['Web Development'])
  );

  const toggleService = (s: string) => {
    setServices((prev) => {
      const next = new Set(prev);
      next.has(s) ? next.delete(s) : next.add(s);
      return next;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, email, message, services: Array.from(services) };
    console.log('Contact form:', payload);
    alert('Form submitted! (See console)');
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
        Ready to Start? Let’s Talk.
      </h2>
      <p className="mt-2 text-center text-gray-500">
        Tell us what you need, and we’ll get back to you soon.
      </p>

      <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-3xl space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-800"
          >
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Services */}
        <fieldset>
          <legend className="text-sm font-semibold text-gray-800">
            Services
          </legend>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {SERVICE_OPTIONS.map((s) => (
              <label key={s} className="flex items-center gap-3 text-gray-800">
                <input
                  type="checkbox"
                  checked={services.has(s)}
                  onChange={() => toggleService(s)}
                  className="h-5 w-5 rounded-md border-gray-300 accent-orange-500"
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-white font-semibold shadow-sm hover:from-orange-600 hover:to-orange-500"
        >
          Send
        </button>
      </form>
    </section>
  );
}
