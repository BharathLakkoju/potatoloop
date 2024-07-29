import './App.css'
import React, { useState } from 'react';
import Potato from './components/Potato';

type MouseEventHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

interface ClickPosition {
  x: number;
  y: number;
}

const App: React.FC = () => {
  const [clickPositions, setClickPositions] = useState<ClickPosition[]>([]);
  const handleClick: MouseEventHandler = (e) => {
    const { clientX, clientY } = e;
    setClickPositions([...clickPositions, { x: clientX, y: clientY }]);
  }

  return (
    <>
      <div className='bg-black text-white overflow-hidden relative' onClick={handleClick} style={{
        width: '100vw',
        height: '100vh',
      }}>
        {clickPositions && clickPositions.map((position, id) => (
          <Potato key={id} width={position.x} height={position.y} />
        ))}
        <span className='font-bold text-2xl absolute left-1/2 top-1/2 -translate-x-[80px]'>Click Anywhere</span>
      </div>
    </>
  )
}

export default App
