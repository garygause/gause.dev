'use client';

import React, { useState } from 'react';

function PortfolioForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const res = await fetch('/api/portfolio', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if (success) {
      setTitle('');
      setDescription('');
    }
  };

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label htmlFor="title">
            Title: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">
            Description: <span className="text-palette-red-500">*</span>
          </label>
          <textarea
            className="h-32"
            id="description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-palette-red font-bold py-3 text-white"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`px-5 py-2 mt-5 ${
                success ? 'text-white' : 'text-palette-red-700'
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

export default PortfolioForm;
