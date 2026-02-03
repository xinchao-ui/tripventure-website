import React, { useState } from 'react';

const WomenFashionWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');

  // 多语言文本
  const translations = {
    en: {
      nav: {
        home: 'Home',
        newIn: 'New In',
        clothing: 'Clothing',
        dresses: 'Dresses',
        tops: 'Tops',
        bottoms: 'Bottoms',
        accessories: 'Accessories',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: '夏日大促',
        subtitle: '全场 5 折起',
        shopNow: '立即购买'
      },
      buttons: {
        addToCart: 'Add to Cart'
      },
      categories: {
        all: 'All',
        newIn: 'New In',
        dresses: 'Dresses',
        tops: 'Tops',
        bottoms: 'Bottoms',
        accessories: 'Accessories'
      },
      offers: {
        title: 'SPECIAL OFFERS',
        subtitle: 'UP TO 50% OFF'
      },
      featured: {
        title: 'FEATURED COLLECTION'
      },
      footer: {
        company: 'Company',
        customerService: 'Customer Service',
        legal: 'Legal',
        followUs: 'Follow Us',
        copyright: '© 2024 AURA. All rights reserved.'
      }
    },
    zh: {
      nav: {
        home: '首页',
        newIn: '新品',
        clothing: '服装',
        dresses: '连衣裙',
        tops: '上衣',
        bottoms: '下装',
        accessories: '配饰',
        about: '关于我们',
        contact: '联系我们'
      },
      hero: {
        title: '夏日大促',
        subtitle: '全场 5 折起',
        shopNow: '立即购买'
      },
      buttons: {
        addToCart: '加入购物车'
      },
      categories: {
        all: '全部',
        newIn: '新品',
        dresses: '连衣裙',
        tops: '上衣',
        bottoms: '下装',
        accessories: '配饰'
      },
      offers: {
        title: '特别优惠',
        subtitle: '高达50%折扣'
      },
      featured: {
        title: '精选系列'
      },
      footer: {
        company: '公司',
        customerService: '客户服务',
        legal: '法律',
        followUs: '关注我们',
        copyright: '© 2024 AURA. 保留所有权利.'
      }
    }
  };

  // 产品数据
  const products = [
    {
      id: 1,
      name: 'Silk Evening Dress',
      price: 199.99,
      category: 'dresses',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20silk%20evening%20dress%20black%20color%20fashion%20photography&image_size=square'
    },
    {
      id: 2,
      name: 'Floral Print Dress',
      price: 129.99,
      category: 'dresses',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=feminine%20floral%20print%20dress%20pastel%20colors%20fashion%20photography&image_size=square'
    },
    {
      id: 3,
      name: 'Black Blazer',
      price: 159.99,
      category: 'tops',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20black%20blazer%20structured%20fashion%20photography&image_size=square'
    },
    {
      id: 4,
      name: 'White Cotton Top',
      price: 79.99,
      category: 'tops',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=casual%20white%20cotton%20top%20minimalist%20fashion%20photography&image_size=square'
    },
    {
      id: 5,
      name: 'Purple Evening Gown',
      price: 249.99,
      category: 'dresses',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20purple%20evening%20gown%20elegant%20fashion%20photography&image_size=square'
    },
    {
      id: 6,
      name: 'Striped Shirt',
      price: 89.99,
      category: 'tops',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=classic%20striped%20shirt%20casual%20fashion%20photography&image_size=square'
    },
    {
      id: 7,
      name: 'Gray Sweater',
      price: 119.99,
      category: 'tops',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20gray%20sweater%20winter%20fashion%20photography&image_size=square'
    },
    {
      id: 8,
      name: 'Black Dress',
      price: 149.99,
      category: 'dresses',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=little%20black%20dress%20timeless%20fashion%20photography&image_size=square'
    }
  ];

  // 导航到不同页面
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // 切换语言
  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'zh' : 'en');
  };

  // 添加到购物车
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // 渲染导航栏
  const renderNavigation = () => {
    const t = translations[currentLanguage];
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 品牌名称 */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">AURA</h1>
            </div>
            
            {/* 导航链接 */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => navigateTo('home')}
                className={`text-sm font-medium hover:text-gray-600 ${currentPage === 'home' ? 'text-gray-900' : 'text-gray-500'}`}
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => setCurrentCategory('newIn')}
                className="text-sm font-medium hover:text-gray-600 text-gray-500"
              >
                {t.nav.newIn}
              </button>
              <button 
                onClick={() => setCurrentCategory('clothing')}
                className="text-sm font-medium hover:text-gray-600 text-gray-500"
              >
                {t.nav.clothing}
              </button>
              <button 
                onClick={() => setCurrentCategory('dresses')}
                className="text-sm font-medium hover:text-gray-600 text-gray-500"
              >
                {t.nav.dresses}
              </button>
              <button 
                onClick={() => setCurrentCategory('accessories')}
                className="text-sm font-medium hover:text-gray-600 text-gray-500"
              >
                {t.nav.accessories}
              </button>
            </div>
            
            {/* 右侧功能区 */}
            <div className="flex items-center space-x-4">
              {/* 搜索 */}
              <button className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* 购物车 */}
              <div className="relative">
                <button className="text-gray-500 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
              
              {/* 多语言切换 */}
              <button 
                onClick={toggleLanguage}
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {currentLanguage === 'en' ? '中文' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  // 渲染首页
  const renderHomePage = () => {
    const t = translations[currentLanguage];
    const filteredProducts = currentCategory === 'all' ? products : products.filter(product => product.category === currentCategory);
    
    return (
      <div className="min-h-screen pt-16">
        {/* 英雄区域 */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://lf-cdn.trae.com.cn/obj/trae-ai-image/page_image/93f288ad7a0ae8ab42cd8ccf1e413e65.jpeg" 
              alt="Latest Collection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.hero.title}</h1>
                <p className="text-xl text-white mb-8">{t.hero.subtitle}</p>
                <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
                  {t.hero.shopNow}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 产品分类展示 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              <button 
                onClick={() => setCurrentCategory('all')}
                className={`p-4 border ${currentCategory === 'all' ? 'border-gray-900' : 'border-gray-200'} hover:border-gray-900 transition-colors`}
              >
                <span className="block text-center font-medium">{t.categories.all}</span>
              </button>
              <button 
                onClick={() => setCurrentCategory('newIn')}
                className={`p-4 border ${currentCategory === 'newIn' ? 'border-gray-900' : 'border-gray-200'} hover:border-gray-900 transition-colors`}
              >
                <span className="block text-center font-medium">{t.categories.newIn}</span>
              </button>
              <button 
                onClick={() => setCurrentCategory('dresses')}
                className={`p-4 border ${currentCategory === 'dresses' ? 'border-gray-900' : 'border-gray-200'} hover:border-gray-900 transition-colors`}
              >
                <span className="block text-center font-medium">{t.categories.dresses}</span>
              </button>
              <button 
                onClick={() => setCurrentCategory('tops')}
                className={`p-4 border ${currentCategory === 'tops' ? 'border-gray-900' : 'border-gray-200'} hover:border-gray-900 transition-colors`}
              >
                <span className="block text-center font-medium">{t.categories.tops}</span>
              </button>
              <button 
                onClick={() => setCurrentCategory('accessories')}
                className={`p-4 border ${currentCategory === 'accessories' ? 'border-gray-900' : 'border-gray-200'} hover:border-gray-900 transition-colors`}
              >
                <span className="block text-center font-medium">{t.categories.accessories}</span>
              </button>
            </div>

            {/* 产品网格 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group">
                  <div className="aspect-square overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-2 w-full py-2 bg-purple-700 text-white text-sm font-medium rounded hover:bg-purple-800 transition-colors"
                  >
                    {t.buttons.addToCart}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 促销区域 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-80 overflow-hidden rounded-lg">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fashion%20sale%20banner%20minimalist%20design&image_size=landscape_16_9" 
                  alt="Special Offers" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                  <h3 className="text-2xl font-bold text-white mb-2">{t.offers.title}</h3>
                  <p className="text-xl text-white mb-4">{t.offers.subtitle}</p>
                  <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="relative h-80 overflow-hidden rounded-lg">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fashion%20editorial%20vogue%20style%20photography&image_size=landscape_16_9" 
                  alt="Vogue Style" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                  <h3 className="text-2xl font-bold text-white">VOGUE</h3>
                </div>
              </div>
              <div className="relative h-80 overflow-hidden rounded-lg">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fashion%20details%20close%20up%20luxury%20fabric&image_size=landscape_16_9" 
                  alt="Details" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                  <h3 className="text-2xl font-bold text-white">DETAILS</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 精选产品展示 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.featured.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fashion%20model%20sitting%20elegant%20pose%20high%20fashion%20photography&image_size=landscape_16_9" 
                  alt="Featured Model" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="group">
                  <div className="aspect-square overflow-hidden mb-4">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=casual%20gray%20sweater%20minimalist%20fashion%20photography&image_size=square" 
                      alt="Gray Sweater" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Gray Sweater</h3>
                  <p className="text-sm font-medium text-gray-900">$119.99</p>
                </div>
                <div className="group">
                  <div className="aspect-square overflow-hidden mb-4">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20white%20blouse%20fashion%20photography&image_size=square" 
                      alt="White Blouse" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">White Blouse</h3>
                  <p className="text-sm font-medium text-gray-900">$89.99</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 品牌价值 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">Premium materials and craftsmanship</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">Eco-friendly production processes</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">Unique and fashionable styles</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // 渲染主内容
  const renderMainContent = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      default:
        return renderHomePage();
    }
  };

  // 渲染页脚
  const renderFooter = () => {
    const t = translations[currentLanguage];
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 品牌信息 */}
            <div>
              <h3 className="text-lg font-bold mb-4">AURA</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Luxury women's fashion brand dedicated to creating elegant and timeless pieces for the modern woman.
              </p>
            </div>
            
            {/* 公司链接 */}
            <div>
              <h4 className="text-sm font-medium mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            {/* 客户服务 */}
            <div>
              <h4 className="text-sm font-medium mb-4">{t.footer.customerService}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            {/* 法律信息 */}
            <div>
              <h4 className="text-sm font-medium mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-4">{t.footer.followUs}</h4>
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
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 导航栏 */}
      {renderNavigation()}
      
      {/* 主内容 */}
      {renderMainContent()}
      
      {/* 页脚 */}
      {renderFooter()}
    </div>
  );
};

export default WomenFashionWebsite;