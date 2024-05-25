import React, { useState } from 'react';

const PricingCalculator = ({ data }) => {
  const [basePrice, setBasePrice] = useState(0);
  const [pricePerCreditLine, setPricePerCreditLine] = useState(0);
  const [pricePerCreditScorePoint, setPricePerCreditScorePoint] = useState(0);

  const calculatePrice = (creditScore, creditLines) => {
    return basePrice + (pricePerCreditLine * creditLines) + (pricePerCreditScorePoint * creditScore);
  };

  return (
    <div className="pricing-calculator">
      <h2>Subscription Pricing Calculator</h2>
      <div>
        <label>Base Price:</label>
        <input type="number" value={basePrice} onChange={(e) => setBasePrice(e.target.value)} />
      </div>
      <div>
        <label>Price per Credit Line:</label>
        <input type="number" value={pricePerCreditLine} onChange={(e) => setPricePerCreditLine(e.target.value)} />
      </div>
      <div>
        <label>Price per Credit Score Point:</label>
        <input type="number" value={pricePerCreditScorePoint} onChange={(e) => setPricePerCreditScorePoint(e.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Credit Score</th>
            <th>Credit Lines</th>
            <th>Calculated Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.creditScore}</td>
              <td>{item.creditLines}</td>
              <td>{calculatePrice(item.creditScore, item.creditLines)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingCalculator;
