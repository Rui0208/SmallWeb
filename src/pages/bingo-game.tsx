import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BingoGame() {
  const [board1, setBoard1] = useState<
    Array<Array<{ value: number | null; marked: boolean }>>
  >([[]]);
  const [board2, setBoard2] = useState<
    Array<Array<{ value: number | null; marked: boolean }>>
  >([[]]);
  const [lines1, setLines1] = useState(0);
  const [lines2, setLines2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [gameWon, setGameWon] = useState(false);
  const [winner, setWinner] = useState<1 | 2 | null>(null);
  const [isSettingUp, setIsSettingUp] = useState(true);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [availableNumbers] = useState(
    Array.from({ length: 25 }, (_, i) => i + 1),
  );
  const [currentSetupPlayer, setCurrentSetupPlayer] = useState<1 | 2>(1);
  const [selectedNumberToMark, setSelectedNumberToMark] = useState<
    number | null
  >(null);

  // 初始化遊戲板
  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    const emptyBoard = Array(5)
      .fill(null)
      .map(() =>
        Array(5)
          .fill(null)
          .map(() => ({ value: null, marked: false })),
      );

    setBoard1(emptyBoard);
    setBoard2(emptyBoard);
    setLines1(0);
    setLines2(0);
    setCurrentPlayer(1);
    setGameWon(false);
    setWinner(null);
    setIsSettingUp(true);
    setSelectedNumber(null);
    setCurrentSetupPlayer(1);
    setSelectedNumberToMark(null);
  };

  // 檢查獲勝條件
  const checkWin = (
    board: Array<Array<{ value: number | null; marked: boolean }>>,
    playerNumber: 1 | 2,
  ) => {
    let lineCount = 0;

    // 檢查橫行
    for (let i = 0; i < 5; i++) {
      if (board[i].every((cell) => cell.marked)) {
        lineCount++;
      }
    }

    // 檢查直行
    for (let i = 0; i < 5; i++) {
      const column = board.map((row) => row[i]);
      if (column.every((cell) => cell.marked)) {
        lineCount++;
      }
    }

    // 檢查主對角線 (左上到右下)
    const mainDiagonal = board.map((row, i) => row[i]);
    if (mainDiagonal.every((cell) => cell.marked)) {
      lineCount++;
    }

    // 檢查副對角線 (右上到左下)
    const antiDiagonal = board.map((row, i) => row[4 - i]);
    if (antiDiagonal.every((cell) => cell.marked)) {
      lineCount++;
    }

    if (playerNumber === 1) {
      setLines1(lineCount);
      if (lineCount >= 3) {
        setGameWon(true);
        setWinner(1);
      }
    } else {
      setLines2(lineCount);
      if (lineCount >= 3) {
        setGameWon(true);
        setWinner(2);
      }
    }
  };

  // 處理數字選擇
  const handleNumberSelect = (num: number) => {
    setSelectedNumber(num);
  };

  // 處理格子點擊
  const handleCellClick = (
    rowIndex: number,
    colIndex: number,
    playerBoard: 1 | 2,
  ) => {
    if (gameWon) return;

    if (isSettingUp) {
      // 設置階段：只能填寫自己的板子
      if (playerBoard !== currentSetupPlayer) return;

      if (
        selectedNumber &&
        (playerBoard === 1
          ? !board1.some((row) =>
              row.some((cell) => cell.value === selectedNumber),
            )
          : !board2.some((row) =>
              row.some((cell) => cell.value === selectedNumber),
            ))
      ) {
        const targetBoard = playerBoard === 1 ? board1 : board2;
        const setTargetBoard = playerBoard === 1 ? setBoard1 : setBoard2;

        const newBoard = targetBoard.map((row, i) =>
          row.map((cell, j) =>
            i === rowIndex && j === colIndex
              ? { ...cell, value: selectedNumber }
              : cell,
          ),
        );
        setTargetBoard(newBoard);
        setSelectedNumber(null);

        // 檢查當前玩家是否填完
        const isBoardFull = newBoard.every((row) =>
          row.every((cell) => cell.value !== null),
        );

        if (isBoardFull) {
          if (currentSetupPlayer === 1) {
            setCurrentSetupPlayer(2);
            // 重置員工的板子為空白
            const emptyBoard = Array(5)
              .fill(null)
              .map(() =>
                Array(5)
                  .fill(null)
                  .map(() => ({ value: null, marked: false })),
              );
            setBoard2(emptyBoard);
            // 重置可選數字的狀態
            setSelectedNumber(null);
            // 重置已選擇的數字標記
            setSelectedNumberToMark(null);
          } else {
            setIsSettingUp(false);
          }
        }
      }
    } else {
      // 遊戲階段：只能點擊當前玩家的板子
      if (playerBoard !== currentPlayer) return;
      if (!selectedNumberToMark) return;

      const targetCell =
        playerBoard === 1
          ? board1[rowIndex][colIndex]
          : board2[rowIndex][colIndex];

      // 確認點擊的格子包含選中的數字
      if (targetCell.value !== selectedNumberToMark) return;

      // 標記兩個板子上相同的數字
      const newBoard1 = board1.map((row) =>
        row.map((cell) =>
          cell.value === selectedNumberToMark
            ? { ...cell, marked: true }
            : cell,
        ),
      );
      const newBoard2 = board2.map((row) =>
        row.map((cell) =>
          cell.value === selectedNumberToMark
            ? { ...cell, marked: true }
            : cell,
        ),
      );

      setBoard1(newBoard1);
      setBoard2(newBoard2);

      // 檢查兩個玩家的獲勝情況
      checkWin(newBoard1, 1);
      checkWin(newBoard2, 2);

      // 切換玩家並重置選中的數字
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      setSelectedNumberToMark(null);
    }
  };

  // 修改 handleGameNumberSelect 函數
  const handleGameNumberSelect = (num: number) => {
    if (!isSettingUp && !gameWon) {
      // 檢查這個數字是否已經被標記過
      const isMarked =
        board1.some((row) =>
          row.some((cell) => cell.value === num && cell.marked),
        ) ||
        board2.some((row) =>
          row.some((cell) => cell.value === num && cell.marked),
        );

      if (!isMarked) {
        setSelectedNumberToMark(num);
      }
    }
  };

  // 修改 fillRandomNumbers 函數
  const fillRandomNumbers = (playerBoard: 1 | 2) => {
    const usedNumbers = new Set<number>();
    const currentBoard = playerBoard === 1 ? board1 : board2;
    const setCurrentBoard = playerBoard === 1 ? setBoard1 : setBoard2;

    // 獲取當前已使用的數字
    currentBoard.forEach((row) => {
      row.forEach((cell) => {
        if (cell.value) usedNumbers.add(cell.value);
      });
    });

    // 創建可用數字陣列（1-25中未使用的數字）
    const availableNums = Array.from({ length: 25 }, (_, i) => i + 1).filter(
      (num) => !usedNumbers.has(num),
    );

    // 創建新棋盤的副本
    const newBoard = currentBoard.map((row) => [...row]);

    // 填充所有空格
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (newBoard[i][j].value === null) {
          const randomIndex = Math.floor(Math.random() * availableNums.length);
          const num = availableNums.splice(randomIndex, 1)[0];
          newBoard[i][j] = { value: num, marked: false };
        }
      }
    }

    // 更新棋盤
    setCurrentBoard(newBoard);

    // 切換玩家或結束設置階段
    if (currentSetupPlayer === 1) {
      setCurrentSetupPlayer(2);
    } else {
      setIsSettingUp(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 py-6 sm:py-12 mt-14">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-4 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-blue-300 mb-2 sm:mb-4">
            賓果遊戲
          </h1>
          <p className="text-blue-200/80 text-base sm:text-lg">
            連成三條線即可獲勝！
          </p>
        </motion.div>

        <div className="max-w-md mx-auto mb-4 sm:mb-8">
          <div className="text-center">
            {selectedNumber && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-6xl font-bold text-white mb-4"
              >
                {selectedNumber}
              </motion.div>
            )}
          </div>
        </div>

        {isSettingUp && (
          <div className="max-w-md mx-auto mb-4 sm:mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-200 text-xl font-semibold">
                選擇數字填入格子：
              </h3>
            </div>
            <div className="grid grid-cols-5 gap-1 sm:gap-2 bg-white/5 backdrop-blur-md p-3 sm:p-6 rounded-2xl border border-white/10">
              {availableNumbers.map((num) => (
                <motion.button
                  key={num}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNumberSelect(num)}
                  disabled={
                    currentSetupPlayer === 1
                      ? board1.some((row) =>
                          row.some((cell) => cell.value === num),
                        )
                      : board2.some((row) =>
                          row.some((cell) => cell.value === num),
                        )
                  }
                  className={`p-2 sm:p-3 rounded-xl font-bold text-base sm:text-lg shadow-lg ${
                    selectedNumber === num
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-blue-900 hover:bg-blue-100'
                  } disabled:opacity-40 disabled:bg-gray-300 disabled:text-gray-500 transition-all duration-200`}
                >
                  {num}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        <div className="text-center text-blue-200 text-2xl mb-6 font-semibold">
          {isSettingUp
            ? `${currentSetupPlayer === 1 ? '老闆' : '員工'}填寫數字中`
            : selectedNumberToMark
              ? `${currentPlayer === 1 ? '老闆' : '員工'}請標記數字 ${selectedNumberToMark}`
              : `${currentPlayer === 1 ? '老闆' : '員工'}請選擇要標記的數字`}
        </div>

        {!isSettingUp && (
          <div className="max-w-md mx-auto mb-4 sm:mb-8">
            <div className="grid grid-cols-5 gap-1 sm:gap-2 bg-white/5 backdrop-blur-md p-3 sm:p-6 rounded-2xl border border-white/10">
              {availableNumbers.map((num) => {
                const isMarked =
                  board1.some((row) =>
                    row.some((cell) => cell.value === num && cell.marked),
                  ) ||
                  board2.some((row) =>
                    row.some((cell) => cell.value === num && cell.marked),
                  );

                return (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleGameNumberSelect(num)}
                    disabled={isMarked}
                    className={`p-2 sm:p-3 rounded-xl font-bold text-base sm:text-lg shadow-lg ${
                      selectedNumberToMark === num
                        ? 'bg-blue-500 text-white'
                        : isMarked
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-white text-blue-900 hover:bg-blue-100'
                    } transition-all duration-200`}
                  >
                    {num}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center text-blue-200 text-2xl mb-4">
          當前玩家:{' '}
          {isSettingUp
            ? currentSetupPlayer === 1
              ? '老闆'
              : '員工'
            : currentPlayer === 1
              ? '老闆'
              : '員工'}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-8 mb-4 sm:mb-8">
          {/* 老闆的遊戲板 */}
          {(isSettingUp ? currentSetupPlayer === 1 : currentPlayer === 1) && (
            <div
              className={`p-3 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${
                currentPlayer === 1
                  ? 'ring-4 ring-blue-400/50 shadow-lg shadow-blue-500/20'
                  : ''
              }`}
            >
              <div className="flex justify-between items-center mb-2 sm:mb-4">
                <h2 className="text-blue-200 text-xl sm:text-2xl text-center">
                  老闆 (連線數: {lines1})
                </h2>
                {isSettingUp && currentSetupPlayer === 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => fillRandomNumbers(1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    隨機填充
                  </motion.button>
                )}
              </div>
              <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-6">
                <div className="grid grid-cols-5 gap-1 sm:gap-2">
                  {board1.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                      <motion.button
                        key={`${rowIndex}-${colIndex}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCellClick(rowIndex, colIndex, 1)}
                        className={`aspect-square rounded-lg flex items-center justify-center text-xl font-bold transition-colors
                        ${
                          cell.marked
                            ? 'bg-blue-500 text-white'
                            : cell.value
                              ? 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                              : 'bg-blue-900/50 text-white hover:bg-blue-800/50'
                        }`}
                      >
                        {cell.value}
                      </motion.button>
                    )),
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 員工的遊戲板 */}
          {(isSettingUp ? currentSetupPlayer === 2 : currentPlayer === 2) && (
            <div
              className={`p-3 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${
                currentPlayer === 2
                  ? 'ring-4 ring-blue-400/50 shadow-lg shadow-blue-500/20'
                  : ''
              }`}
            >
              <div className="flex justify-between items-center mb-2 sm:mb-4">
                <h2 className="text-blue-200 text-xl sm:text-2xl text-center">
                  員工 (連線數: {lines2})
                </h2>
                {isSettingUp && currentSetupPlayer === 2 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => fillRandomNumbers(2)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    隨機填充
                  </motion.button>
                )}
              </div>
              <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-6">
                <div className="grid grid-cols-5 gap-1 sm:gap-2">
                  {board2.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                      <motion.button
                        key={`${rowIndex}-${colIndex}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCellClick(rowIndex, colIndex, 2)}
                        className={`aspect-square rounded-lg flex items-center justify-center text-xl font-bold transition-colors
                        ${
                          cell.marked
                            ? 'bg-blue-500 text-white'
                            : cell.value
                              ? 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                              : 'bg-blue-900/50 text-white hover:bg-blue-800/50'
                        }`}
                      >
                        {cell.value}
                      </motion.button>
                    )),
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {gameWon && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-4"
          >
            <div className="bg-blue-900 rounded-2xl p-4 sm:p-8 max-w-md w-full mx-2 sm:mx-4 border border-white/20">
              <h2 className="text-3xl font-bold text-blue-300 mb-4 text-center">
                🎉 恭喜{winner === 1 ? '老闆' : '員工'}獲勝！ 🎉
              </h2>
              <div className="text-center mb-6">
                <p className="text-xl text-blue-200 mb-4">您獲得了：</p>
                <div className="text-6xl mb-4">🧧</div>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  大紅包
                </p>
              </div>
              <button
                onClick={initializeBoard}
                className="w-full bg-blue-500 text-white py-3 sm:py-4 rounded-xl font-bold hover:opacity-90 transition-all duration-200 shadow-lg"
              >
                再玩一次
              </button>
            </div>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={initializeBoard}
          className="w-full bg-blue-500 text-white py-3 sm:py-4 rounded-xl font-bold hover:opacity-90 transition-all duration-200 shadow-lg"
        >
          重新開始
        </motion.button>
      </div>
    </div>
  );
}
