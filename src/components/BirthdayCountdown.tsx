import React, { useState, useEffect } from 'react';

const BirthdayCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const birthdayDate = new Date('2024-08-31T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = birthdayDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center my-4">
      <h2 className="text-xl font-bold mb-2">生日倒數</h2>
      <div className="flex justify-center space-x-4">
        <div>
          <span className="text-lg font-bold">{timeLeft.days}</span>
          <p>天</p>
        </div>
        <div>
          <span className="text-lg font-bold">{timeLeft.hours}</span>
          <p>时</p>
        </div>
        <div>
          <span className="text-lg font-bold">{timeLeft.minutes}</span>
          <p>分</p>
        </div>
        <div>
          <span className="text-lg font-bold">{timeLeft.seconds}</span>
          <p>秒</p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCountdown;