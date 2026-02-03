import React, { useState, useEffect } from 'react';

const Error404Page = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // 触发动画
    setIsAnimated(true);

    // 404数字旋转动画
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleGoHome = () => {
    // 这里可以添加导航逻辑，例如使用React Router或状态管理
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4">
      {/* 404数字动画 */}
      <div className="relative mb-12">
        <div className="flex items-center justify-center gap-8">
          {/* 数字4 */}
          <div 
            className={`w-32 h-32 md:w-48 md:h-48 flex items-center justify-center rounded-2xl bg-gray-900 text-white font-bold text-4xl md:text-6xl transition-all duration-1000 ${isAnimated ? 'scale-110' : 'scale-90'}`}
            style={{ transform: `rotate(${rotation * 0.5}deg)` }}
          >
            4
          </div>
          
          {/* 数字0 */}
          <div 
            className={`w-32 h-32 md:w-48 md:h-48 flex items-center justify-center rounded-full border-8 border-gray-900 text-gray-900 font-bold text-4xl md:text-6xl transition-all duration-1000 delay-300 ${isAnimated ? 'scale-110' : 'scale-90'}`}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            0
          </div>
          
          {/* 数字4 */}
          <div 
            className={`w-32 h-32 md:w-48 md:h-48 flex items-center justify-center rounded-2xl bg-gray-900 text-white font-bold text-4xl md:text-6xl transition-all duration-1000 delay-600 ${isAnimated ? 'scale-110' : 'scale-90'}`}
            style={{ transform: `rotate(${rotation * 0.5}deg)` }}
          >
            4
          </div>
        </div>
        
        {/* 装饰元素 */}
        <div className="absolute -top-10 -right-10 w-20 h-20 md:w-32 md:h-32 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-16 h-16 md:w-24 md:h-24 bg-blue-400 rounded-full opacity-30 animate-pulse delay-700"></div>
      </div>

      {/* 错误信息 */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-900 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
          页面未找到
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 transition-all duration-1000 delay-1200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
          抱歉，您访问的页面不存在或已被移除。
          请检查您输入的网址是否正确，或返回首页继续浏览。
        </p>

        {/* 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
          <button 
            onClick={handleGoHome}
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            回到首页
          </button>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
          >
            返回上一页
          </button>
        </div>
      </div>

      {/* 装饰图案 */}
      <div className="grid grid-cols-8 grid-rows-1 gap-2 mb-12 w-full max-w-md">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index}
            className="h-2 rounded-full bg-gray-300 animate-pulse"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animationDuration: `${1 + index * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      {/* 页脚 */}
      <footer className="mt-auto py-8 text-center text-gray-500 text-sm">
        <p>© 2024 AURA. All rights reserved.</p>
        <p className="mt-2">设计与开发</p>
      </footer>
    </div>
  );
};

export default Error404Page;