import React, { useState, useEffect } from 'react';

const MWebWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">
      {/* 导航栏 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 品牌名称 */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">mWeb</h1>
            </div>
            
            {/* 导航链接 */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">HOME</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">ABOUT</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">SERVICES</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">PORTFOLIO</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">TEAM</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">CONTACT</a>
            </div>
            
            {/* 联系按钮 */}
            <div>
              <button className="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-700 transition-colors">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=landscape%20mountain%20road%20cyclist%20sunset%20dark%20theme&image_size=landscape_16_9" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">I'm <span className="text-yellow-500">Web</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional web designer and developer creating stunning digital experiences
          </p>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 个人介绍区域 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 头像 */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg border-4 border-yellow-600">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20man%20beard%20red%20shirt%20portrait&image_size=square" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* 个人信息 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Hello, I'm <span className="text-yellow-500">Web</span></h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm a professional web designer and developer with over 10 years of experience creating stunning digital experiences for clients around the world. I specialize in responsive design, user experience, and modern web technologies.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-yellow-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Web Design</h3>
                    <p className="text-gray-400">Creating beautiful and functional websites</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-yellow-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Development</h3>
                    <p className="text-gray-400">Building responsive and interactive websites</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-yellow-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">SEO Optimization</h3>
                    <p className="text-gray-400">Improving website visibility and ranking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-yellow-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Branding</h3>
                    <p className="text-gray-400">Creating unique brand identities</p>
                  </div>
                </li>
              </ul>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
                  DOWNLOAD CV
                </button>
                <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition-colors">
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能统计区域 */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">200+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
              <div className="text-gray-400">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务区域 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">My <span className="text-yellow-500">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I offer a wide range of web design and development services to help businesses establish a strong online presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 服务项 1 */}
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors border border-gray-700">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web Design</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">User Interface</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">User Experience</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Wireframing</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Prototyping</span>
                </li>
              </ul>
              <button className="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-700 transition-colors">
                LEARN MORE
              </button>
            </div>
            
            {/* 服务项 2 */}
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors border border-gray-700">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">HTML5 / CSS3</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">JavaScript / jQuery</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">React / Vue</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">PHP / WordPress</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">E-commerce Solutions</span>
                </li>
              </ul>
              <button className="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-700 transition-colors">
                LEARN MORE
              </button>
            </div>
            
            {/* 服务项 3 */}
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors border border-gray-700">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SEO Optimization</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">On-page SEO</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Off-page SEO</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Keyword Research</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Content Optimization</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Analytics & Reporting</span>
                </li>
              </ul>
              <button className="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-700 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 作品展示区域 */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">My <span className="text-yellow-500">Portfolio</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent web design and development projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 作品项 1 */}
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20branding%20design%20business%20cards%20and%20stationery&image_size=square" 
                  alt="Portfolio Item 1" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Branding Design</h3>
              <p className="text-gray-400">Business cards and stationery</p>
            </div>
            
            {/* 作品项 2 */}
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vinyl%20record%20album%20cover%20design%20vintage%20style&image_size=square" 
                  alt="Portfolio Item 2" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Album Cover Design</h3>
              <p className="text-gray-400">Vinyl record packaging</p>
            </div>
            
            {/* 作品项 3 */}
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20wooden%20product%20packaging%20design&image_size=square" 
                  alt="Portfolio Item 3" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Product Packaging</h3>
              <p className="text-gray-400">Wooden product container</p>
            </div>
            
            {/* 作品项 4 */}
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20black%20and%20white%20notebook%20and%20pen%20design&image_size=square" 
                  alt="Portfolio Item 4" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Stationery Design</h3>
              <p className="text-gray-400">Notebook and pen set</p>
            </div>
            
            {/* 作品项 5 */}
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20indoor%20plant%20in%20white%20pot%20modern%20interior&image_size=square" 
                  alt="Portfolio Item 5" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Interior Styling</h3>
              <p className="text-gray-400">Modern plant decoration</p>
            </div>
            
            {/* 作品项 6 */}
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20coffee%20branding%20design%20packaging&image_size=square" 
                  alt="Portfolio Item 6" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Coffee Branding</h3>
              <p className="text-gray-400">Packaging design</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
              VIEW ALL WORKS
            </button>
          </div>
        </div>
      </section>

      {/* 价格方案区域 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing <span className="text-yellow-500">Plans</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your web design and development needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 价格方案 1 */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
                <div className="text-4xl font-bold text-yellow-500 mb-2">$500</div>
                <p className="text-gray-400">Simple website design</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">5 pages</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Responsive design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Basic SEO</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Contact form</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">1 month support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
                CHOOSE PLAN
              </button>
            </div>
            
            {/* 价格方案 2 */}
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-yellow-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Standard</h3>
                <div className="text-4xl font-bold text-yellow-500 mb-2">$1200</div>
                <p className="text-gray-400">Professional website</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">10 pages</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Responsive design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Advanced SEO</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Multiple contact forms</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">3 months support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Blog integration</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
                CHOOSE PLAN
              </button>
            </div>
            
            {/* 价格方案 3 */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
                <div className="text-4xl font-bold text-yellow-500 mb-2">$2500</div>
                <p className="text-gray-400">E-commerce website</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Unlimited pages</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Responsive design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Premium SEO</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">E-commerce functionality</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">6 months support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">CMS integration</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Payment gateway integration</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
                CHOOSE PLAN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍区域 */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">My <span className="text-yellow-500">Team</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the talented professionals who help me create amazing websites
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 团队成员 1 */}
            <div className="group">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20web%20designer%20working%20on%20laptop%20in%20modern%20office&image_size=square" 
                  alt="Team Member 1" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">John Doe</h3>
              <p className="text-yellow-500">Web Designer</p>
              <p className="text-gray-400 mt-2">
                Creative web designer with 5+ years of experience
              </p>
            </div>
            
            {/* 团队成员 2 */}
            <div className="group">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20web%20developer%20working%20on%20code%20in%20modern%20office&image_size=square" 
                  alt="Team Member 2" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Jane Smith</h3>
              <p className="text-yellow-500">Web Developer</p>
              <p className="text-gray-400 mt-2">
                Experienced web developer specializing in React
              </p>
            </div>
            
            {/* 团队成员 3 */}
            <div className="group">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20seo%20specialist%20analyzing%20data%20in%20modern%20office&image_size=square" 
                  alt="Team Member 3" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Mike Johnson</h3>
              <p className="text-yellow-500">SEO Specialist</p>
              <p className="text-gray-400 mt-2">
                SEO expert with proven results in search rankings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌合作伙伴区域 */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* 品牌 1 */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Team</h3>
            </div>
            {/* 品牌 2 */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Apple</h3>
            </div>
            {/* 品牌 3 */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Google</h3>
            </div>
            {/* 品牌 4 */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Brand</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 联系表单区域 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Contact <span className="text-yellow-500">Me</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get in touch with me to discuss your web design and development needs
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-4 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* 品牌信息 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">mWeb</h3>
              <p className="text-gray-400 mb-4">
                Professional web design and development services
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.117 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* 快速链接 */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* 服务 */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Web Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Branding</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">E-commerce</a></li>
              </ul>
            </div>
            
            {/* 联系信息 */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">123 Main St, New York, NY 10001</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">info@mweb.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 mWeb. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MWebWebsite;