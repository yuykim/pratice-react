import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 로고가 이동할 위치 (x, y)
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // 화면 가운데를 기준으로 살짝만 움직이게 (0.1 = 감도)
      const offsetX = (e.clientX - centerX) ;
      const offsetY = (e.clientY - centerY) ;

      setPos({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* 마우스를 따라다니는 래퍼 */}
        <div
          className="App-logo-wrapper"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          {/* 안쪽 이미지는 기존처럼 회전/애니메이션 */}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Hello-text">Hello World</div>
      </header>
    </div>
  );
}

export default App;
