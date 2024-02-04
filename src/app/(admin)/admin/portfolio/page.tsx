import React from 'react';

import PortfolioForm from '../../../../components/portfolio-form/portfolio-form';

export default function PortfolioFormPage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Add a Portfolio Item</h1>
          <PortfolioForm />
        </div>
      </div>
    </div>
  );
}
