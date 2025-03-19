import React from 'react';
import './PricingTable.css';

const PricingTable = () => {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 5000,
      features: [
        '1 User',
        '5 Projects',
        '10GB Storage',
        'Basic Support',
        'Email Integration'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Pro',
      price: 15000,
      features: [
        '5 Users',
        '20 Projects',
        '50GB Storage',
        'Priority Support',
        'Email & CRM Integration',
        'Advanced Analytics'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 25000,
      features: [
        'Unlimited Users',
        'Unlimited Projects',
        '500GB Storage',
        '24/7 Dedicated Support',
        'Full API Access',
        'Custom Integrations',
        'Advanced Security'
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Choose Your Plan</h2>
        <div className="pricing-grid">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">₹
</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="pricing-btn">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
