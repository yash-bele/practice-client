import { useEffect, useState } from 'react';
const url = 'https://practice-server-yash.vercel.app';

const Todo = ({ show }) => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  const getData = async () => {
    const req = await fetch(url);
    const res = await req.json();
    setList(res);
  };
  useEffect(() => {
    getData();
  }, [list]);

  const postDataum = async (e) => {
    e.preventDefault();
    setText('');
    if (!text) return alert('Please enter todo!');
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
  };

  return (
    <main
      className={`w-full mt-32 flex flex-col items-center ${show && 'hidden'}`}
    >
      <form onSubmit={postDataum} className='flex flex-col space-y-5'>
        <input
          placeholder='Add todo...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          className='outline-none text-sm py-2 px-3 rounded-md bg-white/25 tracking-wider'
        />
        <button
          type='submit'
          className='bg-white/50 hover:bg-white/70 py-2 tracking-wider text-sm font-semibold rounded-md'
        >
          ADD
        </button>
      </form>
      <ul className='mt-9 text-sm space-y-2'>
        {list.map((i) => {
          return (
            <li
              key={i._id}
              className='w-80 text-start bg-white/20 py-1 px-3 rounded-md tracking-wider'
            >
              {i.text}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Todo;
