"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        duration={1.2}
        end={amount}
        decimal="."
        prefix="$"
        decimals={2}
      />
    </div>
  );
};
export default AnimatedCounter;
