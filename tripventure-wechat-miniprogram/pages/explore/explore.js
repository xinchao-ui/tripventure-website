Page({
  data: {
    destinations: [
      {
        name: '巴厘岛',
        price: '¥3,999起',
        image: '../../images/service1.jpg'
      },
      {
        name: '东京',
        price: '¥4,599起',
        image: '../../images/service2.jpg'
      },
      {
        name: '巴黎',
        price: '¥5,999起',
        image: '../../images/service3.jpg'
      },
      {
        name: '纽约',
        price: '¥6,999起',
        image: '../../images/app.jpg'
      }
    ]
  },
  
  onLoad: function() {
    console.log('探索页面加载');
  }
});