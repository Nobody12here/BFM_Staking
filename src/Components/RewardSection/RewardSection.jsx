import React, { useState } from 'react';
import { MdOutlineRestartAlt } from 'react-icons/md';

const RewardSection = ({ Read_Fuc, spinner_Red, setspinner_Red, DepositeToken, totalReward }) => {
  return (
    <div className="">
      <p className="text-center clr_text rewards ">
        My Rewards{" "}
        <span
          className="mx-2"
          style={{ cursor: "pointer" }}
          onClick={() => (Read_Fuc(), setspinner_Red(true))}
        >
          <MdOutlineRestartAlt
            className={spinner_Red ? "Icons_spinner" : ""}
          ></MdOutlineRestartAlt>
        </span>
      </p>
      <div className="d-flex justify-content-around mt-3">
        <div>
          <p className="ab_stk text-center ">Total Staked Amount</p>
          <p className="rewards clr_text text-center ">
            {DepositeToken} $BFM
          </p>
        </div>
        <div>
          <p className="ab_stk text-center">Total Rewards</p>
          <p className="rewards clr_text text-center">
            {totalReward} $BFM
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardSection;
