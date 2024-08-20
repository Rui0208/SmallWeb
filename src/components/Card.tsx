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
        <AlertDialogTrigger className="border-2 w-[7rem] h-[2rem] bg-rose-300 rounded-3xl cursor-pointer hover:bg-rose-500 text-white" onClick={() => setIsOpen(true)}>
          卡片點我
        </AlertDialogTrigger>
        <AlertDialogContent asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center justify-center"
          >
            {!isPasswordCorrect ? (
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl mb-3">請輸入密碼</h2>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-2 mb-3 w-full"
                />
                <button
                  onClick={handlePasswordSubmit}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  確認
                </button>
              </div>
            ) : (
              <>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-sky-300 text-3xl">
                    Happy Birthday！
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <div className="text-lg max-h-[60vh] overflow-y-auto pr-2">
                      <div>
                        這是陪妳過的第一個生日，終於等到這天，這個週末準備了一些要給妳，敬請期待！
                      </div>
                      <br />
                      <div>
                        上班辛苦了，最近的工作可能不是很順遂，但我覺得妳都保持一個善良的心，不像那些人，利用言語行為去奪得一席之地，不是妳不夠好，是這個地方更認識就更險惡罷了。
                      </div>
                      <br />
                      <div>
                        從認識到現在也經歷了好多好多，經歷了搬家，換工作，去了些地方玩，
                        年底也要搬家ㄌ，這個家已經受了太多的委屈，下個家要讓妳蘇蘇胡胡！
                        下個月也要去蘭嶼玩嚕，明年再規劃出國玩，還要考駕照帶妳去很多地方~話說特斯拉12月不知道會不會抽到
                      </div>
                      <br />
                      <div>
                        對我來說可以說是沒有妳就沒有現在的我，
                        不知道我對妳來說是怎麼樣的存在，至少希望有讓妳感到幸福快樂，雖然我常常讓妳生氣，但我都在盡力做到更好，避免重複的事情發生，如果還有哪裡能改進更好，可以跟我說，只要妳快快樂樂的就好了。
                        阿貓也有給你生日驚喜，雖然常常不乖，但他是一隻好貓咪，再多多包容他，
                        祝妳生日快樂，愛妳 L Y T
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>關閉</AlertDialogCancel>
                </AlertDialogFooter>
              </>
            )}
          </motion.div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
