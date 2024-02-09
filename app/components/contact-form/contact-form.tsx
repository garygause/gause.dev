'use client';

import React, { useState } from 'react';

function ContactForm() {
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        message,
      }),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if (success) {
      setFullname('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label htmlFor="fullName" className="mb-3 mt-3 block">
            Full Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            placeholder="Enter your name"
            className="rounded w-full"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-3 mt-3 block">
            Email: <span className="text-palette-red-500">*</span>
          </label>
          <input
            className="rounded w-full"
            type="text"
            id="email"
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-3 mt-3 block">
            Message: <span className="text-palette-red-500">*</span>
          </label>
          <textarea
            className="h-52 rounded w-full"
            id="message"
            value={message}
            placeholder="Enter your message or project details"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          className="w-full mt-3 bg-palette-red font-bold py-3 text-white rounded-lg hover:bg-palette-brown"
          type="submit"
        >
          Send
        </button>
      </form>
      <div
        className={`${
          error.length === 0 ? 'hidden' : ''
        } border border-palette-brown dark:bg-palette-white/70 mt-10 rounded`}
      >
        {error.length > 0 &&
          error.map((e) => (
            <div
              className={`px-5 py-2  ${
                success ? 'text-black' : 'text-palette-red-700'
              }`}
              key={e}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}

export default ContactForm;
