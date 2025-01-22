import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrizeWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winningResult, setWinningResult] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProbabilityModalOpen, setIsProbabilityModalOpen] = useState(false);

  // 奖品数据 - 调整权重
  const prizeData = [
    {
      option: 'MAC潤唇膏',
      style: { backgroundColor: '#FFD700', textColor: '#000000' },
      weight: 30, // 30% 概率
    },
    {
      option: '加薪',
      style: { backgroundColor: '#FF6B6B', textColor: '#ffffff' },
      weight: 20, // 20% 概率
    },
    {
      option: '日本旅遊',
      style: { backgroundColor: '#4ECDC4', textColor: '#ffffff' },
      weight: 20, // 20% 概率
    },
    {
      option: '再轉一次',
      style: { backgroundColor: '#45B7D1', textColor: '#ffffff' },
      weight: 15, // 15% 概率
    },
    {
      option: '銘謝惠顧',
      style: {
        backgroundColor: '#FFBE0B',
        textColor: '#000000',
      },
      weight: 15, // 15% 概率
    },
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = getRandomPrizeByWeight();
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setShowResult(false);
      setSpinCount((prev) => prev + 1);
    }
  };

  // 根据权重获取随机奖品
  const getRandomPrizeByWeight = () => {
    const totalWeight = prizeData.reduce((acc, prize) => acc + prize.weight, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < prizeData.length; i++) {
      random -= prizeData[i].weight;
      if (random <= 0) {
        return i;
      }
    }
    return prizeData.length - 1;
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    const result = prizeData[prizeNumber].option;
    setWinningResult(result);
    setShowResult(true);
    setIsModalOpen(true);

    // 触发多重烟花效果
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  // 修改獎品說明列表組件為 Modal
  const PrizeProbabilityModal = () => (
    <AnimatePresence>
      {isProbabilityModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-white rounded-2xl p-4 sm:p-8 max-w-md w-full mx-4 relative"
          >
            <button
              onClick={() => setIsProbabilityModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                獎品機率說明
              </h3>
              <div className="space-y-3">
                {prizeData.map((prize, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-600"
                  >
                    <span>{prize.option}</span>
                    <span>{prize.weight}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // 添加 Modal 組件
  const ResultModal = () => (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-white rounded-2xl p-4 sm:p-8 max-w-md w-full mx-4 relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                恭喜抽中大獎！
              </h2>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text mb-6">
                {winningResult}
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                確定
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      {/* 添加 Modals */}
      <ResultModal />
      <PrizeProbabilityModal />

      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* 標題區域 */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8 sm:mb-12 mt-8 sm:mt-12 relative"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🎉 尾牙抽獎轉盤 🎉
          </h1>
          <p className="text-white/80 text-lg sm:text-xl">
            讓我們看看今天的幸運兒是誰！
          </p>

          {/* 添加問號圖標按鈕 */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsProbabilityModalOpen(true)}
            className="absolute right-4 top-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            ?
          </motion.button>
        </motion.div>

        {/* 主要內容區域 */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-4 sm:p-8 shadow-2xl"
          >
            <div className="flex flex-col items-center">
              {/* 轉盤容器 */}
              <div className="relative mb-8">
                {/* 裝飾性光環 */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse"></div>

                {/* 轉盤組件 */}
                <div className="relative">
                  <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={prizeData}
                    onStopSpinning={handleStopSpinning}
                    outerBorderColor="#ffffff"
                    outerBorderWidth={3}
                    innerRadius={0.1}
                    innerBorderColor="#ffffff"
                    innerBorderWidth={2}
                    radiusLineColor="#ffffff"
                    radiusLineWidth={1}
                    fontSize={20}
                    textDistance={60}
                    spinDuration={0.8}
                  />

                  {/* 指針 */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[50px] border-t-yellow-400 drop-shadow-lg"></div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* 開始按鈕 */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSpinClick}
                disabled={mustSpin}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 sm:px-16 py-3 sm:py-4 rounded-full text-xl sm:text-2xl font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 mb-8"
              >
                {mustSpin ? '轉盤旋轉中...' : '開始抽獎'}
              </motion.button>

              {/* 結果顯示 */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      🎊 恭喜抽中 🎊
                    </h2>
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                      {winningResult}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
