import React, { useState } from 'react';

const PoplStoryWebsite = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  // 产品数据
  const products = [
    {
      id: 1,
      name: 'Minimal Plate',
      price: '¥129',
      image: '/img/poplstory/products/product5.jpg'
    },
    {
      id: 2,
      name: 'Canvas Tote Bag',
      price: '¥199',
      image: '/img/poplstory/products/product6.jpg'
    },
    {
      id: 3,
      name: 'Perfume Set',
      price: '¥399',
      image: '/img/poplstory/banner/banner1.jpg'
    },
    {
      id: 4,
      name: 'Storage Box',
      price: '¥159',
      image: '/img/poplstory/story/story1.jpg'
    },
    {
      id: 5,
      name: 'Coffee Mug',
      price: '¥89',
      image: '/img/poplstory/products/product5.jpg'
    },
    {
      id: 6,
      name: 'Notebook',
      price: '¥69',
      image: '/img/poplstory/products/product6.jpg'
    },
    {
      id: 7,
      name: 'Keychain',
      price: '¥49',
      image: '/img/poplstory/banner/banner1.jpg'
    },
    {
      id: 8,
      name: 'Plant Pot',
      price: '¥129',
      image: '/img/poplstory/story/story1.jpg'
    }
  ];
  
  // 类别数据
  const categories = ['ALL', 'LIVING', 'STATIONERY', 'ACCESSORY', 'KITCHEN'];
  
  // 横幅数据
  const banners = [
    {
      id: 1,
      title: 'SUMMER COLLECTION',
      subtitle: '2024 NEW ARRIVALS',
      image: '/img/poplstory/banner/banner1.jpg'
    }
  ];
  
  // 故事数据
  const stories = [
    {
      id: 1,
      title: 'Our Story',
      content: 'POPL STORY is a curated collection of minimalist and functional design products that bring joy to everyday life.',
      image: '/img/poplstory/story/story1.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 导航栏 */}
      <header className="sticky top-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">POPL STORY</h1>
            </div>
            
            {/* 导航链接 */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">HOME</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">SHOP</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">STORY</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">CONTACT</a>
            </nav>
            
            {/* 右侧操作 */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 搜索栏 */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 类别导航 */}
      <div className="py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-2 text-sm font-medium whitespace-nowrap ${activeCategory === category ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 产品网格 */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square overflow-hidden mb-3 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 横幅 */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {banners.map((banner) => (
            <div key={banner.id} className="relative overflow-hidden rounded-lg">
              <div className="aspect-[21/9]">
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg">{banner.title}</h2>
                <p className="text-lg md:text-xl text-white drop-shadow-lg">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 故事部分 */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">OUR STORY</h2>
            <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
          </div>
          
          {stories.map((story) => (
            <div key={story.id} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                <p className="text-gray-600 leading-relaxed">{story.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 特色产品 */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">FEATURED PRODUCTS</h2>
            <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square overflow-hidden mb-3 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 公司信息 */}
            <div>
              <h3 className="text-lg font-bold mb-4">POPL STORY</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Curated collection of minimalist design products that bring joy to everyday life.
              </p>
            </div>
            
            {/* 快速链接 */}
            <div>
              <h4 className="text-sm font-medium mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* 联系信息 */}
            <div>
              <h4 className="text-sm font-medium mb-4">CONTACT</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: info@poplstory.com</li>
                <li>Phone: +86 123 4567 8910</li>
                <li>Address: Shanghai, China</li>
              </ul>
            </div>
            
            {/* 社交媒体 */}
            <div>
              <h4 className="text-sm font-medium mb-4">FOLLOW US</h4>
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
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 POPL STORY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoplStoryWebsite;