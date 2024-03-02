import React, { useState } from 'react';

const InvestmentPlans = ({active,setActive,setSelectDays}) => {
  
  const handlePlanClick = (days, planId) => {
    setSelectDays(days);
    setActive(planId);
  };

  return (
    <div className="row justify-content-center my-4">
      <Plan
        days={14}
        returnPercentage={10}
        isActive={active === 4}
        onClick={() => handlePlanClick(14, 4)}
      />
      <Plan
        days={30}
        returnPercentage={20}
        isActive={active === 3}
        onClick={() => handlePlanClick(30, 3)}
      />
      <Plan
        days={60}
        returnPercentage={30}
        isActive={active === 2}
        onClick={() => handlePlanClick(60, 2)}
      />
      <Plan
        days={90}
        returnPercentage={50}
        isActive={active === 1}
        onClick={() => handlePlanClick(90, 1)}
      />
    </div>
  );
};

const Plan = ({ days, returnPercentage, isActive, onClick }) => (
  <div className="col-md-3 col-4 p-1">
    <div
      className="stke_planes"
      onClick={onClick}
      style={{
        background: isActive
          ? 'linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)'
          : 'transparent',
      }}
    >
      <button className="days_plan">{days} days</button>
      <div className="about_plan">
        <p className="mb-0 Return_inner">{returnPercentage}% Return</p>
      </div>
    </div>
  </div>
);

export default InvestmentPlans;
