import React, { useState } from 'react';

const DesignStudioWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // 导航到不同页面
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // 渲染导航栏
  const renderNavigation = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">STUDIO</h1>
            </div>
            
            {/* 导航链接 */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => navigateTo('home')}
                className={`text-sm font-medium hover:text-gray-600 ${currentPage === 'home' ? 'text-gray-900' : 'text-gray-500'}`}
              >
                首页
              </button>
              <button 
                onClick={() => navigateTo('portfolio')}
                className={`text-sm font-medium hover:text-gray-600 ${currentPage === 'portfolio' ? 'text-gray-900' : 'text-gray-500'}`}
              >
                案例
              </button>
              <button 
                onClick={() => navigateTo('services')}
                className={`text-sm font-medium hover:text-gray-600 ${currentPage === 'services' ? 'text-gray-900' : 'text-gray-500'}`}
              >
                服务
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className={`text-sm font-medium hover:text-gray-600 ${currentPage === 'contact' ? 'text-gray-900' : 'text-gray-500'}`}
              >
                联系
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  // 渲染首页
  const renderHomePage = () => {
    return (
      <div className="min-h-screen pt-16">
        {/* 英雄区域 */}
        <section className="relative h-screen flex items-center justify-center bg-gray-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/5"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">创意设计工作室</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              专注于品牌设计、UI/UX设计和数字创意解决方案
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => navigateTo('portfolio')}
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                查看案例
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                联系我们
              </button>
            </div>
          </div>
        </section>

        {/* 关于我们 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">关于我们</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  我们是一家充满激情的创意设计工作室，致力于为客户提供独特而有效的设计解决方案。
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  我们的团队由经验丰富的设计师组成，专注于品牌设计、用户界面设计、用户体验设计和数字营销创意。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5+</h3>
                    <p className="text-gray-600">年行业经验</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">50+</h3>
                    <p className="text-gray-600">客户项目</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">10+</h3>
                    <p className="text-gray-600">专业设计师</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5+</h3>
                    <p className="text-gray-600">设计奖项</p>
                  </div>
                </div>
              </div>
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20design%20studio%20interior%20with%20minimalist%20style&image_size=landscape_16_9" 
                  alt="设计工作室" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 服务预览 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的服务</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                提供全方位的设计服务，满足您的品牌和业务需求
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">品牌设计</h3>
                <p className="text-gray-600">
                  打造独特的品牌标识和视觉系统，提升品牌价值和认知度
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">UI/UX设计</h3>
                <p className="text-gray-600">
                  创建直观、美观的用户界面，提供出色的用户体验
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">数字营销</h3>
                <p className="text-gray-600">
                  设计有效的数字营销材料，提升品牌曝光度和转化率
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => navigateTo('services')}
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                查看全部服务
              </button>
            </div>
          </div>
        </section>

        {/* 案例预览 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">精选案例</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                探索我们的最新设计项目和成功案例
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20brand%20logo%20design%20minimalist%20style&image_size=square" 
                    alt="品牌设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">品牌标识设计</h3>
                <p className="text-gray-600">为科技初创公司设计的现代品牌标识</p>
              </div>
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20app%20ui%20design%20minimalist%20style&image_size=square" 
                    alt="UI设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">移动应用UI设计</h3>
                <p className="text-gray-600">健康追踪应用的用户界面设计</p>
              </div>
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=website%20design%20minimalist%20portfolio%20style&image_size=square" 
                    alt="网站设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">网站设计</h3>
                <p className="text-gray-600">摄影师作品集网站设计</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => navigateTo('portfolio')}
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                查看全部案例
              </button>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                无论您有什么项目需求，我们都随时准备为您提供专业的设计解决方案
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">邮箱</h3>
                      <p className="text-sm text-gray-600">info@studio.com</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">电话</h3>
                      <p className="text-sm text-gray-600">+86 123 4567 8910</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">地址</h3>
                      <p className="text-sm text-gray-600">上海市浦东新区创意园区</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">发送消息</h3>
                  <form>
                    <div className="mb-4">
                      <input 
                        type="text" 
                        placeholder="您的姓名" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                    </div>
                    <div className="mb-4">
                      <input 
                        type="email" 
                        placeholder="您的邮箱" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea 
                        placeholder="您的消息" 
                        rows={3} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                      ></textarea>
                    </div>
                    <button 
                      type="button"
                      className="w-full py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                    >
                      发送消息
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // 渲染案例展示页
  const renderPortfolioPage = () => {
    return (
      <div className="min-h-screen pt-16">
        {/* 页面标题 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">案例展示</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                探索我们的设计项目和成功案例
              </p>
            </div>
          </div>
        </section>

        {/* 案例过滤 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-2 bg-gray-900 text-white font-medium rounded-full">
                全部
              </button>
              <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50">
                品牌设计
              </button>
              <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50">
                UI/UX设计
              </button>
              <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50">
                网页设计
              </button>
              <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50">
                包装设计
              </button>
            </div>

            {/* 案例网格 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20brand%20logo%20design%20minimalist%20style&image_size=square" 
                    alt="品牌设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">品牌标识设计</h3>
                <p className="text-gray-600 mb-4">为科技初创公司设计的现代品牌标识</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  品牌设计
                </span>
              </div>
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20app%20ui%20design%20minimalist%20style&image_size=square" 
                    alt="UI设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">移动应用UI设计</h3>
                <p className="text-gray-600 mb-4">健康追踪应用的用户界面设计</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  UI/UX设计
                </span>
              </div>
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=website%20design%20minimalist%20portfolio%20style&image_size=square" 
                    alt="网站设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">网站设计</h3>
                <p className="text-gray-600 mb-4">摄影师作品集网站设计</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  网页设计
                </span>
              </div>
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=packaging%20design%20minimalist%20style&image_size=square" 
                    alt="包装设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">包装设计</h3>
                <p className="text-gray-600 mb-4">高端护肤品包装设计</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  包装设计
                </span>
              </div>
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=branding%20design%20minimalist%20style&image_size=square" 
                    alt="品牌设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">品牌视觉识别</h3>
                <p className="text-gray-600 mb-4">咖啡店品牌视觉识别系统设计</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  品牌设计
                </span>
              </div>
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=web%20app%20ui%20design%20minimalist%20style&image_size=square" 
                    alt="Web应用UI设计案例" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Web应用UI设计</h3>
                <p className="text-gray-600 mb-4">项目管理工具的用户界面设计</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  UI/UX设计
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // 渲染服务介绍页
  const renderServicesPage = () => {
    return (
      <div className="min-h-screen pt-16">
        {/* 页面标题 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">我们的服务</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                提供全方位的设计服务，满足您的品牌和业务需求
              </p>
            </div>
          </div>
        </section>

        {/* 服务详情 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* 品牌设计服务 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">品牌设计</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  我们为您的品牌打造独特的视觉形象，从品牌标识到完整的视觉识别系统，帮助您在市场中脱颖而出。
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">品牌标识设计</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">视觉识别系统</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">品牌指南</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">品牌策略</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">品牌重塑</span>
                  </li>
                </ul>
                <button className="w-full py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  了解更多
                </button>
              </div>

              {/* UI/UX设计服务 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">UI/UX设计</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  我们创建直观、美观的用户界面，提供出色的用户体验，帮助您的产品脱颖而出。
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">用户研究</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">用户旅程地图</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">信息架构</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">线框图设计</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">高保真原型</span>
                  </li>
                </ul>
                <button className="w-full py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  了解更多
                </button>
              </div>

              {/* 数字营销服务 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">数字营销</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  我们设计有效的数字营销材料，提升品牌曝光度和转化率，帮助您实现业务目标。
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">社交媒体设计</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">电子邮件营销设计</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">数字广告设计</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">营销活动设计</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-gray-900 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">内容营销设计</span>
                  </li>
                </ul>
                <button className="w-full py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // 渲染联系表单页面
  const renderContactPage = () => {
    return (
      <div className="min-h-screen pt-16">
        {/* 页面标题 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                无论您有什么项目需求，我们都随时准备为您提供专业的设计解决方案
              </p>
            </div>
          </div>
        </section>

        {/* 联系表单 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* 联系信息 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">联系方式</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  请通过以下方式联系我们，我们将尽快回复您的咨询。
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">邮箱</h3>
                      <p className="text-gray-600">info@studio.com</p>
                      <p className="text-gray-600">contact@studio.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">电话</h3>
                      <p className="text-gray-600">+86 123 4567 8910</p>
                      <p className="text-gray-600">+86 123 4567 8911</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">地址</h3>
                      <p className="text-gray-600">上海市浦东新区创意园区A座1001室</p>
                      <p className="text-gray-600">邮编：200120</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">工作时间</h3>
                      <p className="text-gray-600">周一至周五：9:00 - 18:00</p>
                      <p className="text-gray-600">周六：10:00 - 16:00</p>
                      <p className="text-gray-600">周日：休息</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">关注我们</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.117 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 联系表单 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">发送消息</h2>
                <form>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">您的姓名</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">您的邮箱</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">主题</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="请输入消息主题"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">您的消息</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="请输入您的消息"
                    ></textarea>
                  </div>
                  <button 
                    type="button"
                    className="w-full py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                  >
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // 渲染主页面
  const renderMainContent = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'portfolio':
        return renderPortfolioPage();
      case 'services':
        return renderServicesPage();
      case 'contact':
        return renderContactPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 导航栏 */}
      {renderNavigation()}
      
      {/* 主内容 */}
      {renderMainContent()}
      
      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 公司信息 */}
            <div>
              <h3 className="text-lg font-bold mb-4">STUDIO</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                创意设计工作室，专注于品牌设计、UI/UX设计和数字营销解决方案。
              </p>
            </div>
            
            {/* 快速链接 */}
            <div>
              <h4 className="text-sm font-medium mb-4">快速链接</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">首页</button></li>
                <li><button onClick={() => navigateTo('portfolio')} className="hover:text-white transition-colors">案例</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">服务</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">联系</button></li>
              </ul>
            </div>
            
            {/* 联系信息 */}
            <div>
              <h4 className="text-sm font-medium mb-4">联系我们</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>邮箱: info@studio.com</li>
                <li>电话: +86 123 4567 8910</li>
                <li>地址: 上海市浦东新区创意园区</li>
              </ul>
            </div>
            
            {/* 社交媒体 */}
            <div>
              <h4 className="text-sm font-medium mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.117 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 STUDIO. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignStudioWebsite;
