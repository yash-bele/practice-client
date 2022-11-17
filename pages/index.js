import Head from 'next/head';
import { useState } from 'react';
import Ranger from '../components/Ranger';
import RPS from '../components/RPS';
import Todo from '../components/Todo';

const Home = () => {
  const [show, setShow] = useState(0);

  return (
    <>
      <Head>
        <title>DOM</title>
        <meta name='description' content='Website' />
        <link
          rel='icon'
          href='https://cdn-icons-png.flaticon.com/512/344/344404.png'
        />
      </Head>
      <main className='absolute w-full h-full bg-black text-white flex flex-col'>
        <nav className='absolute mt-10 w-full flex justify-center font-bold'>
          <button
            onClick={() => setShow(0)}
            className={`btn mr-3 px-4 py-2 rounded-md tracking-wider font-bold ${
              show === 0 && 'bg-white/25'
            }`}
          >
            RPS
          </button>
          <button
            onClick={() => setShow(1)}
            className={`btn mr-3 px-4 py-2 rounded-md tracking-wider font-bold ${
              show === 1 && 'bg-white/25'
            }`}
          >
            Todo List
          </button>
          <button
            onClick={() => setShow(2)}
            className={`btn px-4 py-2 rounded-md tracking-wider font-bold ${
              show === 2 && 'bg-white/25'
            }`}
          >
            Range Balancer
          </button>
        </nav>
        <RPS show={show} />
        <Todo show={show} />
        <Ranger show={show} />
      </main>
    </>
  );
};

export default Home;
