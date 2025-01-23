import React from 'react';
import { motion } from 'framer-motion';

export default function NewYearCard() {
  return (
    <div className="min-h-screen bg-red-900 py-6 sm:py-12 pt-20 sm:pt-40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-b from-red-800 to-red-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border-4 border-yellow-500 hover:shadow-3xl transition-shadow duration-300">
            {/* 頂部裝飾 */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              {['🏮', '✨', '🏮'].map((emoji, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.2,
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl cursor-pointer"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>

            {/* 主標題 */}
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-4 sm:mb-6"
            >
              新年快樂
            </motion.h1>

            {/* 祝福語 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mb-6 sm:mb-8"
            >
              <p className="text-yellow-100 text-base sm:text-lg md:text-xl mb-3 sm:mb-4 px-2 sm:px-4">
                我是阿睿，去年辛苦了，尾牙順利舉辦成功，潤唇膏是我查嘴巴乾可以擦又看到Leo推薦就買了，他說買3隻了，不知道妳會不會習慣用這種看起來亮亮的，
                單擦就有顏色，也可以跟口紅疊擦，這個色號也是賣最好的哦。上份工作也終於告一個段落，也換了個新家舒適程度變好了很多，但都還沒有好好的佈置家裡，趁這段時間好好休息，
                沒有上班在家都變漂亮了，過年會有一段時間沒見，要好好照顧自己不要太日夜顛倒了，有事隨時找我都在，禮盒跟家人分著吃，
                過年完就要看YOASOBI的演唱會了，日本也快要去了，好期待，我光是在排行程看著照片、影片，想像到我們一起到那邊的樣子，就覺得很幸福，
                這次的尾牙希望妳喜歡，因為妳提早離職所以沒有參加到尾牙，所以我想為妳舉辦，不只是Goodpi，也是慰勞這一年辛苦的妳跟我，
                今年再請妳多多指教了，我愛妳。
              </p>
              <p className="text-yellow-100 text-lg sm:text-xl mb-3 sm:mb-4">
                祝願您
              </p>
              <div className="space-y-3">
                {[
                  '蛇年行大運 🐍',
                  '身體健康 💪',
                  '事業順遂 💼',
                  '闔家安康 👨‍👩‍👧‍👦',
                ].map((wish, index) => (
                  <motion.p
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      color: '#ffd700',
                    }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="text-base md:text-lg text-yellow-200 cursor-pointer"
                  >
                    {wish}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* 底部裝飾 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex justify-center gap-3 sm:gap-4"
            >
              {['🧧', '🎊', '🧧'].map((emoji, index) => (
                <div key={index} className="text-3xl sm:text-4xl">
                  {emoji}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
