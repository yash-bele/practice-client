import { useState } from 'react';

const Ranger = ({ show }) => {
  const [number, setNumber] = useState(50);
  const [range1, setRange1] = useState(0);
  const [range2, setRange2] = useState(50);

  return (
    <main
      className={`w-full mt-32 flex flex-col items-center ${!show && 'hidden'}`}
    >
      <form className='flex flex-col space-y-10'>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type='number'
          placeholder='Input max sum...'
          className='outline-none text-sm py-2 px-3 rounded-md bg-white/25 tracking-wider'
        />
        <div className='flex items-center'>
          <input
            value={range1}
            onChange={(e) => setRange1(e.target.value)}
            max={number * 1 - range2 * 1}
            type='range'
            className='appearance-none cursor-pointer h-1.5 rounded bg-white/25 w-full mr-3'
          />
          <div className='bg-white/25 rounded-md w-12 h-6 text-sm tracking-wider relative'>
            <p className='absolute top-0.5 w-full h-full text-center'>
              {range1}
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <input
            value={range2}
            onChange={(e) => setRange2(e.target.value)}
            max={number * 1 - range1 * 1}
            type='range'
            className='appearance-none cursor-pointer h-1.5 rounded bg-white/25 w-full mr-3'
          />
          <div className='bg-white/25 rounded-md w-12 h-6 text-sm tracking-wider relative'>
            <p className='absolute top-0.5 w-full h-full text-center'>
              {range2}
            </p>
          </div>
        </div>
      </form>
      <div className='bg-white/25 rounded-md w-16 h-8 mt-10 tracking-wider relative'>
        <p className='absolute top-[4.5px] w-full h-full text-center'>
          {range1 * 1 + range2 * 1}
        </p>
      </div>
    </main>
  );
};

export default Ranger;
