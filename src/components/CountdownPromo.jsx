// components/CountdownPromo.jsx
import React, { useEffect, useState } from "react";

const CountdownPromo = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-05-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        gun: Math.floor(difference / (1000 * 60 * 60 * 24)),
        saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
        dakika: Math.floor((difference / 1000 / 60) % 60),
        saniye: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-red-100 p-4 rounded-lg shadow text-center">
      <h4 className="text-red-700 font-bold text-lg mb-2">⏰ Kampanya Bitiyor!</h4>
      <p className="text-sm text-gray-700 mb-2">
        Halı ve koltuk yıkamada %15 indirim için son gün:
      </p>
      <div className="flex justify-center space-x-3 text-sm font-bold text-red-800">
        <span>{timeLeft.gun ?? 0}g</span>
        <span>{timeLeft.saat ?? 0}s</span>
        <span>{timeLeft.dakika ?? 0}d</span>
        <span>{timeLeft.saniye ?? 0}s</span>
      </div>
    </div>
  );
};

export default CountdownPromo;