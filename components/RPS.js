import { useRef, useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RPS = ({ show }) => {
  const [round, setRound] = useState(5);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleClick = (index) => {
    const random = Math.floor(Math.random() * 3);
    setComputer(random);
    setPlayer(index);
    if (
      (random === 0 && index === 2) ||
      (random === 1 && index === 0) ||
      (random === 2 && index === 1)
    ) {
      setComputerScore((prev) => prev + 1);
    }
    if (
      (index === 0 && random === 2) ||
      (index === 1 && random === 0) ||
      (index === 2 && random === 1)
    ) {
      setPlayerScore((prev) => prev + 1);
    }
  };

  const handleRef = () => {
    setTimeout(() => {
      let val1 = ref1.current.textContent.substring(0, 1) * 1;
      let val2 = ref2.current.textContent.substring(0, 1) * 1;
      console.log(val1, val2);
      if (val1 + val2 === round * 1) {
        if (val1 > val2) toast.error(`You Lose !! Score ${val2}/${round}`);
        if (val1 < val2) toast.success(`You Won !! Score ${val2}/${round}`);
        if (val1 === val2) toast.info(`Match Tie !!`);
        setComputerScore(0);
        setPlayerScore(0);
        setComputer(null);
        setPlayer(null);
      }
    }, 100);
  };

  return (
    <main
      className={`w-full mt-36 flex flex-col items-center space-y-10 ${
        show === 0 ? 'block' : 'hidden'
      }`}
    >
      <form>
        <input
          value={round}
          onChange={(e) => setRound(e.target.value)}
          type='number'
          placeholder='Number of rounds...'
          className='outline-none text-sm py-2 px-3 rounded-md bg-white/25'
        />
      </form>
      <section className='flex items-center space-x-10'>
        <FaHandRock
          className={`text-3xl rotate-180 ${
            computer === 0 ? 'text-white' : 'text-white/50'
          }`}
        />
        <FaHandPaper
          className={`text-3xl rotate-180 ${
            computer === 1 ? 'text-white' : 'text-white/50'
          }`}
        />
        <FaHandScissors
          className={`text-3xl -rotate-90 ${
            computer === 2 ? 'text-white' : 'text-white/50'
          }`}
        />
      </section>
      <section className='space-y-2'>
        <div className='bg-white/25 rounded-md w-16 h-8 tracking-wider relative'>
          <p
            ref={ref1}
            className='absolute top-[4.5px] w-full h-full text-center'
          >
            {`${computerScore}/${round}`}
          </p>
        </div>
        <div className='bg-white/25 rounded-md w-16 h-8 tracking-wider relative'>
          <p
            ref={ref2}
            className='absolute top-[4.5px] w-full h-full text-center'
          >{`${playerScore}/${round}`}</p>
        </div>
      </section>
      <section className='flex items-center space-x-10'>
        <FaHandRock
          onClick={() => {
            handleClick(0);
            handleRef();
          }}
          className={`text-3xl cursor-pointer hover:text-white ${
            player === 0 ? 'text-white' : 'text-white/50'
          }`}
        />
        <FaHandPaper
          onClick={() => {
            handleClick(1);
            handleRef();
          }}
          className={`text-3xl cursor-pointer hover:text-white ${
            player === 1 ? 'text-white' : 'text-white/50'
          }`}
        />
        <FaHandScissors
          onClick={() => {
            handleClick(2);
            handleRef();
          }}
          className={`text-3xl cursor-pointer hover:text-white rotate-90 ${
            player === 2 ? 'text-white' : 'text-white/50'
          }`}
        />
      </section>
      <ToastContainer
        position='top-center'
        theme='dark'
        hideProgressBar
        autoClose={5000}
      />
    </main>
  );
};

export default RPS;
