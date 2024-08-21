import React, { useState, useEffect } from 'react';

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: number;
  likes: number;
}

const WishBoard = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newName, setNewName] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWishes, setFilteredWishes] = useState<Wish[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'likes'>('newest');
  const wishesPerPage = 5;

  useEffect(() => {
    const storedWishes = localStorage.getItem('wishes');
    if (storedWishes) {
      setWishes(JSON.parse(storedWishes));
    }
  }, []);

  useEffect(() => {
    const results = wishes.filter(wish =>
      wish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wish.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sortedResults = sortBy === 'newest'
      ? results.sort((a, b) => b.timestamp - a.timestamp)
      : results.sort((a, b) => b.likes - a.likes);
    setFilteredWishes(sortedResults);
    setCurrentPage(1);
  }, [searchTerm, wishes, sortBy]);

  const addWish = () => {
    if (newName.trim() && newMessage.trim()) {
      const newWish: Wish = {
        id: Date.now(),
        name: newName.trim(),
        message: newMessage.trim(),
        timestamp: Date.now(),
        likes: 0,
      };
      const updatedWishes = [...wishes, newWish];
      setWishes(updatedWishes);
      localStorage.setItem('wishes', JSON.stringify(updatedWishes));
      setNewName('');
      setNewMessage('');
    }
  };

  const deleteWish = (id: number) => {
    const updatedWishes = wishes.filter((wish) => wish.id !== id);
    setWishes(updatedWishes);
    localStorage.setItem('wishes', JSON.stringify(updatedWishes));
  };

  const likeWish = (id: number) => {
    const updatedWishes = wishes.map(wish => 
      wish.id === id ? { ...wish, likes: wish.likes + 1 } : wish
    );
    setWishes(updatedWishes);
    localStorage.setItem('wishes', JSON.stringify(updatedWishes));
  };

  const indexOfLastWish = currentPage * wishesPerPage;
  const indexOfFirstWish = indexOfLastWish - wishesPerPage;
  const currentWishes = filteredWishes.slice(indexOfFirstWish, indexOfLastWish);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredWishes.length / wishesPerPage); i++) {
    pageNumbers.push(i);
  }

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col justify-center items-center my-12 w-[80%] mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-emerald-500">生日祝福</h2>
      <div className="mb-6 w-full">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="bg-transparent border-b-2 border-emerald-200 p-2 mb-4 w-full focus:outline-none focus:border-emerald-400 transition duration-300"
          placeholder="你的名字..."
        />
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="bg-transparent border-b-2 border-emerald-200 p-2 mb-4 w-full h-24 resize-none focus:outline-none focus:border-emerald-400 transition duration-300"
          placeholder="寫下生日祝福..."
        />
        <button
          onClick={addWish}
          className="bg-emerald-400 text-white p-3 rounded-full w-full hover:bg-emerald-500 transition duration-300"
        >
          送出
        </button>
      </div>
      <div className="flex justify-between items-center w-full mb-4">
        <input
          type="text"
          placeholder="搜尋祝福..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent border-b-2 border-emerald-200 p-2 w-2/3 focus:outline-none focus:border-emerald-400 transition duration-300"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'newest' | 'likes')}
          className="bg-transparent border-2 border-emerald-200 p-2 rounded focus:outline-none focus:border-emerald-400 transition duration-300"
        >
          <option value="newest">最新</option>
          <option value="likes">最多讚</option>
        </select>
      </div>
      <div className="space-y-6 w-full">
        {currentWishes.map((wish) => (
          <div
            key={wish.id}
            className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md flex flex-col justify-between items-start backdrop-filter backdrop-blur-sm"
          >
            <div className="w-full flex justify-between items-center mb-2">
              <strong className="text-emerald-500">{wish.name}</strong>
              <span className="text-sm text-gray-500">{formatDate(wish.timestamp)}</span>
            </div>
            <p className="text-gray-800 mb-2">{wish.message}</p>
            <div className="w-full flex justify-between items-center">
              <button
                onClick={() => likeWish(wish.id)}
                className="bg-pink-300 text-white px-3 py-1 rounded-full text-sm hover:bg-pink-400 transition duration-300"
              >
                {'讚'} ({wish.likes})
              </button>
              <button
                onClick={() => deleteWish(wish.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition duration-300"
              >
                刪除
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === number ? 'bg-emerald-500 text-white' : 'bg-emerald-200 text-emerald-700'}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WishBoard;