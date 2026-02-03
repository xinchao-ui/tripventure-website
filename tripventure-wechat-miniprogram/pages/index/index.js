// pages/index/index.js
Page({
  data: {
    activeTab: 'flight',
    formData: {
      from: 'Jakarta',
      to: 'Hanoi',
      date: 'Fri, 29 Aug, 2024',
      passengers: '1 Passenger'
    }
  },
  onLoad: function() {
    console.log('Page loaded');
  },
  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },
  bindFromInput: function(e) {
    this.setData({
      'formData.from': e.detail.value
    });
  },
  bindToInput: function(e) {
    this.setData({
      'formData.to': e.detail.value
    });
  },
  bindDateInput: function(e) {
    this.setData({
      'formData.date': e.detail.value
    });
  },
  bindPassengersInput: function(e) {
    this.setData({
      'formData.passengers': e.detail.value
    });
  },
  search: function() {
    // 搜索功能实现
    wx.showToast({
      title: 'Searching...',
      icon: 'loading',
      duration: 1000
    });
    // 这里可以添加实际的搜索逻辑
    console.log('Searching with:', this.data.formData);
  }
});
