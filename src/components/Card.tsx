import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handlePasswordSubmit = () => {
    if (password === '1017') {
      setIsPasswordCorrect(true);
      setPassword('');
    } else {
      alert('密碼錯誤');
    }
  };

  return (
    <div className={isMobile ? "flex justify-center" : ""}>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger 
          className="border-2 w-32 h-10 bg-rose-300 rounded-full cursor-pointer hover:bg-rose-500 text-white transition-colors duration-300 shadow-md"
          onClick={() => setIsOpen(true)}
        >
          卡片點我
        </AlertDialogTrigger>
        <AlertDialogContent asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 shadow-xl rounded-2xl flex flex-col items-center justify-center max-w-md mx-auto"
          >
            {!isPasswordCorrect ? (
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="text-2xl mb-4 font-semibold text-gray-800">請輸入密碼</h2>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-300 p-2 mb-4 w-full rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <div className="flex justify-between w-full">
                  <button
                    onClick={handlePasswordSubmit}
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    確認
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-400 transition-colors duration-300"
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-sky-400 text-4xl font-bold mb-4">
                    Happy Birthday！
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <div className="text-lg max-h-[60vh] overflow-y-auto pr-4 text-gray-700 space-y-4">
                      <p>
                        這是陪妳過的第一個生日，終於等到這天，這個週末準備了一些東西要給妳，敬請期待！
                      </p>
                      <p>
                        上班辛苦了，最近的工作可能不是很順遂，但我覺得妳都保持一個善良的心，不像那些人，利用言語行為去奪得一席之地，下一份工作也還有時間慢慢摸索，只要做得開心就好了，希望妳能順順利利的
                        妳做的很好的，If you trust you can,you can.
                      </p>
                      <p>
                        從認識到現在也經歷了好多好多，經歷了搬家，換工作，去了些地方玩，
                        不知道這個家對妳來說有沒有變成我們的家了，年底也要搬家了，這個家已經受了太多的委屈，下個家要讓妳蘇蘇胡胡！
                        下個月也要去蘭嶼玩嚕，明年再規劃出國玩，還要考駕照帶妳去很多地方~話說特斯拉12月不知道會不會抽到
                      </p>
                      <p>
                        對我來說可以說是沒有妳就沒有現在的我，
                        不知道我對妳來說是怎麼樣的存在，至少希望有讓妳感到幸福快樂，雖然我常常讓妳生氣，最近也表現得不太好，但我都在盡力做到更好，避免重複的事情發生，如果還有哪裡能改進更好，可以跟我說，只要妳快快樂樂的就好了。
                        阿貓也有給你生日驚喜，雖然常常不乖，但他是一隻好貓咪，再多多包容她，
                        希望妳會喜歡我為妳準備的生日，祝妳生日快樂，愛妳。
                      </p>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="mt-4 bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300">關閉</AlertDialogCancel>
                </AlertDialogFooter>
              </>
            )}
          </motion.div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
