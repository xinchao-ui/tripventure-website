import React, { useState, useEffect, useRef } from 'react';

const JumpGame = () => {
  const [gameState, setGameState] = useState('idle'); // idle, playing, gameOver
  const [score, setScore] = useState(0);
  const [character, setCharacter] = useState({ x: 100, y: 300, size: 30, velocity: { x: 0, y: 0 }, rotation: 0 });
  const [platforms, setPlatforms] = useState([
    { id: 1, x: 0, y: 350, width: 200, height: 20, color: '#3b82f6' },
    { id: 2, x: 300, y: 320, width: 150, height: 20, color: '#10b981' },
    { id: 3, x: 550, y: 300, width: 120, height: 20, color: '#f59e0b' },
    { id: 4, x: 750, y: 330, width: 140, height: 20, color: '#ef4444' }
  ]);
  const [power, setPower] = useState(0);
  const [isCharging, setIsCharging] = useState(false);
  const [targetPlatform, setTargetPlatform] = useState(platforms[1]);
  
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const chargeTimerRef = useRef(null);

  // 生成新平台
  const generatePlatform = () => {
    const lastPlatform = platforms[platforms.length - 1];
    const newX = lastPlatform.x + lastPlatform.width + Math.random() * 200 + 100;
    const newY = 250 + Math.random() * 100;
    const newWidth = 100 + Math.random() * 100;
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      id: Date.now(),
      x: newX,
      y: newY,
      width: newWidth,
      height: 20,
      color: newColor
    };
  };

  // 开始充电
  const startCharging = () => {
    if (gameState !== 'playing') return;
    setIsCharging(true);
    setPower(0);
    
    chargeTimerRef.current = setInterval(() => {
      setPower(prev => {
        const newPower = prev + 0.5;
        return newPower > 100 ? 100 : newPower;
      });
    }, 20);
  };

  // 释放充电，开始跳跃
  const releaseCharge = () => {
    if (!isCharging || gameState !== 'playing') return;
    setIsCharging(false);
    clearInterval(chargeTimerRef.current);
    
    // 计算跳跃速度和角度
    const jumpPower = power / 10;
    const targetX = targetPlatform.x + targetPlatform.width / 2;
    const targetY = targetPlatform.y;
    const distanceX = targetX - character.x;
    const distanceY = character.y - targetY;
    
    const angle = Math.atan2(distanceY, distanceX);
    const velocityX = Math.cos(angle) * jumpPower * 5;
    const velocityY = -Math.sin(angle) * jumpPower * 5;
    
    setCharacter(prev => ({
      ...prev,
      velocity: { x: velocityX, y: velocityY },
      rotation: angle * 180 / Math.PI
    }));
    
    setPower(0);
  };

  // 游戏主循环
  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const updateGame = () => {
      setCharacter(prev => {
        // 更新角色位置
        const newX = prev.x + prev.velocity.x;
        const newY = prev.y + prev.velocity.y;
        
        // 应用重力
        const newVelocityY = prev.velocity.y + 0.5;
        
        return {
          ...prev,
          x: newX,
          y: newY,
          velocity: { x: prev.velocity.x * 0.98, y: newVelocityY },
          rotation: prev.rotation + prev.velocity.x * 0.5
        };
      });
      
      // 检查碰撞
      checkCollision();
      
      // 检查游戏是否结束
      if (character.y > 600) {
        setGameState('gameOver');
      }
      
      animationRef.current = requestAnimationFrame(updateGame);
    };
    
    animationRef.current = requestAnimationFrame(updateGame);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState, character, platforms]);

  // 碰撞检测
  const checkCollision = () => {
    const currentPlatform = platforms.find(platform => 
      character.x + character.size > platform.x &&
      character.x < platform.x + platform.width &&
      character.y + character.size > platform.y &&
      character.y < platform.y + platform.height
    );
    
    if (currentPlatform && character.velocity.y > 0) {
      // 成功落在平台上
      setCharacter(prev => ({
        ...prev,
        x: currentPlatform.x + currentPlatform.width / 2 - character.size / 2,
        y: currentPlatform.y - character.size,
        velocity: { x: 0, y: 0 },
        rotation: 0
      }));
      
      // 更新得分
      setScore(prev => prev + 1);
      
      // 生成新平台
      const newPlatform = generatePlatform();
      setPlatforms(prev => [...prev, newPlatform]);
      
      // 更新目标平台
      setTargetPlatform(newPlatform);
      
      // 移除屏幕外的平台
      setPlatforms(prev => prev.filter(platform => platform.x + platform.width > 0));
    }
  };

  // 开始游戏
  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setCharacter({ x: 100, y: 300, size: 30, velocity: { x: 0, y: 0 }, rotation: 0 });
    setPlatforms([
      { id: 1, x: 0, y: 350, width: 200, height: 20, color: '#3b82f6' },
      { id: 2, x: 300, y: 320, width: 150, height: 20, color: '#10b981' },
      { id: 3, x: 550, y: 300, width: 120, height: 20, color: '#f59e0b' },
      { id: 4, x: 750, y: 330, width: 140, height: 20, color: '#ef4444' }
    ]);
    setTargetPlatform(platforms[1]);
  };

  // 渲染游戏场景
  const renderGame = () => {
    return (
      <div className="relative w-full h-[600px] bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
        {/* 得分显示 */}
        <div className="absolute top-4 left-4 text-xl font-bold text-gray-900">
          Score: {score}
        </div>
        
        {/* 游戏状态提示 */}
        {gameState === 'idle' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">跳一跳</h2>
            <p className="text-lg text-gray-600 mb-8">按住鼠标左键蓄力，松开跳跃</p>
            <button 
              onClick={startGame}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              开始游戏
            </button>
          </div>
        )}
        
        {gameState === 'gameOver' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">游戏结束</h2>
            <p className="text-xl text-gray-600 mb-6">最终得分: {score}</p>
            <button 
              onClick={startGame}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              重新开始
            </button>
          </div>
        )}
        
        {/* 蓄力条 */}
        {gameState === 'playing' && (
          <div className="absolute top-4 right-4 w-20 h-40 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="w-full bg-gray-900 transition-all duration-100"
              style={{ height: `${power}%`, transformOrigin: 'bottom' }}
            ></div>
          </div>
        )}
        
        {/* 平台 */}
        {platforms.map(platform => (
          <div
            key={platform.id}
            className="absolute rounded-full"
            style={{
              left: platform.x,
              top: platform.y,
              width: platform.width,
              height: platform.height,
              backgroundColor: platform.color
            }}
          ></div>
        ))}
        
        {/* 角色 */}
        <div
          className="absolute rounded-full transition-transform duration-0"
          style={{
            left: character.x,
            top: character.y,
            width: character.size,
            height: character.size,
            backgroundColor: '#ef4444',
            transform: `rotate(${character.rotation}deg)`,
            zIndex: 10
          }}
        ></div>
        
        {/* 游戏控制区域 */}
        {gameState === 'playing' && (
          <div 
            className="absolute inset-0 cursor-pointer"
            onMouseDown={startCharging}
            onMouseUp={releaseCharge}
            onTouchStart={startCharging}
            onTouchEnd={releaseCharge}
          ></div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">跳一跳游戏</h1>
      {renderGame()}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>游戏规则：按住鼠标左键蓄力，松开后角色会向目标平台跳跃</p>
        <p>成功落在平台上得分，掉落则游戏结束</p>
      </div>
    </div>
  );
};

export default JumpGame;