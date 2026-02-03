<template>
  <div class="page-container">
    <!-- 导航栏 -->
    <uni-view class="navbar">
      <uni-view class="navbar-content">
        <uni-view class="navbar-logo">
          <uni-text class="navbar-logo-text">TripVenture</uni-text>
        </uni-view>
        <uni-view class="navbar-actions">
          <uni-button class="navbar-action-btn" plain>
            <uni-icon type="search" size="24" color="#666"></uni-icon>
          </uni-button>
          <uni-button class="navbar-action-btn" plain>
            <uni-icon type="cart" size="24" color="#666"></uni-icon>
          </uni-button>
          <uni-button class="navbar-signin-btn" type="primary" size="small">Sign In</uni-button>
        </uni-view>
      </uni-view>
    </uni-view>

    <!-- 英雄区域 -->
    <uni-view class="hero-section">
      <uni-image class="hero-bg" src="/static/img/tripventure/hero.jpg" mode="aspectFill"></uni-image>
      <uni-view class="hero-overlay"></uni-view>
      <uni-view class="hero-content">
        <uni-view class="hero-text">
          <uni-text class="hero-title">Best Escape Choice</uni-text>
          <uni-text class="hero-subtitle">Explore thousands of incredible places. Where every journey becomes an unforgettable memory.</uni-text>
        </uni-view>
        
        <!-- 搜索表单 -->
        <uni-view class="search-form">
          <uni-view class="search-form-tabs">
            <uni-button 
              :class="['search-form-tab', activeTab === 'flight' ? 'search-form-tab-active' : '']" 
              @click="activeTab = 'flight'"
              plain
            >
              Flight
            </uni-button>
            <uni-button 
              :class="['search-form-tab', activeTab === 'hotel' ? 'search-form-tab-active' : '']" 
              @click="activeTab = 'hotel'"
              plain
            >
              Hotel
            </uni-button>
          </uni-view>
          
          <uni-view class="search-form-fields">
            <uni-view class="search-form-field">
              <uni-text class="search-form-label">From</uni-text>
              <uni-input 
                class="search-form-input" 
                :value="formData.from" 
                @input="formData.from = $event.detail.value"
                placeholder="City or Airport"
              ></uni-input>
              <uni-text class="search-form-input-hint">CGK, South Jakarta, Indonesia</uni-text>
            </uni-view>
            
            <uni-view class="search-form-field">
              <uni-text class="search-form-label">To</uni-text>
              <uni-input 
                class="search-form-input" 
                :value="formData.to" 
                @input="formData.to = $event.detail.value"
                placeholder="City or Airport"
              ></uni-input>
              <uni-text class="search-form-input-hint">Noi Bai International Airport</uni-text>
            </uni-view>
            
            <uni-view class="search-form-field">
              <uni-text class="search-form-label">Date</uni-text>
              <uni-input 
                class="search-form-input" 
                :value="formData.date" 
                @input="formData.date = $event.detail.value"
                placeholder="Select Date"
              ></uni-input>
            </uni-view>
            
            <uni-view class="search-form-field">
              <uni-text class="search-form-label">Passengers</uni-text>
              <uni-input 
                class="search-form-input" 
                :value="formData.passengers" 
                @input="formData.passengers = $event.detail.value"
                placeholder="Number of Passengers"
              ></uni-input>
            </uni-view>
          </uni-view>
          
          <uni-button class="search-form-btn" type="primary" @click="search">
            <uni-text>Search Flight</uni-text>
            <uni-icon type="arrow-right" size="16" color="#fff"></uni-icon>
          </uni-button>
        </uni-view>
      </uni-view>
    </uni-view>

    <!-- 服务卡片 -->
    <uni-view class="services-section">
      <uni-view class="services-content">
        <uni-view class="services-grid">
          <!-- 服务卡片 1 -->
          <uni-view class="service-card">
            <uni-image class="service-card-img" src="/static/img/tripventure/service1.jpg" mode="aspectFill"></uni-image>
            <uni-view class="service-card-body">
              <uni-view class="service-card-icon">
                <uni-icon type="person" size="20" color="#ff6b00"></uni-icon>
              </uni-view>
              <uni-text class="service-card-title">View Traveller Profile</uni-text>
            </uni-view>
          </uni-view>
          
          <!-- 服务卡片 2 -->
          <uni-view class="service-card">
            <uni-image class="service-card-img" src="/static/img/tripventure/service2.jpg" mode="aspectFill"></uni-image>
            <uni-view class="service-card-body">
              <uni-view class="service-card-icon">
                <uni-icon type="calendar" size="20" color="#ff6b00"></uni-icon>
              </uni-view>
              <uni-text class="service-card-title">RSVP To Trips</uni-text>
              <uni-text class="service-card-desc">Experience the best in travel. A journey beyond your imagination.</uni-text>
            </uni-view>
          </uni-view>
          
          <!-- 服务卡片 3 -->
          <uni-view class="service-card">
            <uni-image class="service-card-img" src="/static/img/tripventure/service3.jpg" mode="aspectFill"></uni-image>
            <uni-view class="service-card-body">
              <uni-view class="service-card-icon">
                <uni-icon type="chat" size="20" color="#ff6b00"></uni-icon>
              </uni-view>
              <uni-text class="service-card-title">Join Your Host's Chat</uni-text>
            </uni-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>

    <!-- Expand Your Network -->
    <uni-view class="network-section">
      <uni-view class="network-content">
        <uni-view class="network-left">
          <uni-text class="network-title">Expand Your Network</uni-text>
          <uni-text class="network-subtitle">Experience the best in travel. A journey beyond your imagination.</uni-text>
          
          <uni-view class="network-features">
            <uni-view class="network-feature">
              <uni-view class="network-feature-icon">
                <uni-icon type="success" size="20" color="#ff6b00"></uni-icon>
              </uni-view>
              <uni-view class="network-feature-content">
                <uni-text class="network-feature-title">Earn 2x points on TripVenture app</uni-text>
                <uni-text class="network-feature-desc">Book now and earn double points</uni-text>
              </uni-view>
            </uni-view>
            
            <uni-view class="network-feature">
              <uni-view class="network-feature-icon">
                <uni-icon type="success" size="20" color="#ff6b00"></uni-icon>
              </uni-view>
              <uni-view class="network-feature-content">
                <uni-text class="network-feature-title">Get insider Prices Only for you</uni-text>
                <uni-text class="network-feature-desc">Unlock special prices with your member price</uni-text>
              </uni-view>
            </uni-view>
            
            <uni-view class="network-feature">
              <uni-view class="network-feature-icon">
                <uni-icon type="success" size="20" color="#ff6b00"></uni-icon>
              </uni-view>
              <uni-view class="network-feature-content">
                <uni-text class="network-feature-title">12k+</uni-text>
                <uni-text class="network-feature-desc">Unlock experiences</uni-text>
              </uni-view>
            </uni-view>
          </uni-view>
        </uni-view>
        
        <uni-view class="network-right">
          <uni-view class="app-container">
            <uni-image class="app-image" src="/static/img/tripventure/app.jpg" mode="aspectFill"></uni-image>
          </uni-view>
          <uni-view class="qrcode-container">
            <uni-text class="qrcode-title">Scan Now</uni-text>
            <uni-view class="qrcode-placeholder">
              <uni-text class="qrcode-placeholder-text">QR Code</uni-text>
            </uni-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>

    <!-- 统计数据 -->
    <uni-view class="stats-section">
      <uni-view class="stats-content">
        <uni-view class="stats-grid">
          <uni-view class="stats-item">
            <uni-text class="stats-number">73K+</uni-text>
            <uni-text class="stats-desc">Join the millions who trust us for their travel. Over 73K+ bookings successfully handled.</uni-text>
          </uni-view>
          
          <uni-view class="stats-item">
            <uni-text class="stats-number">99%</uni-text>
            <uni-text class="stats-desc">Our customers rate us with 99% satisfaction, we take pride in providing exceptional service.</uni-text>
          </uni-view>
          
          <uni-view class="stats-item">
            <uni-text class="stats-number">1200</uni-text>
            <uni-text class="stats-desc">Explore the world with 1200+ partner hotels, giving you a wide range of options.</uni-text>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>

    <!-- 页脚 -->
    <uni-view class="footer">
      <uni-view class="footer-content">
        <uni-view class="footer-grid">
          <uni-view class="footer-column">
            <uni-text class="footer-column-title">TripVenture</uni-text>
            <uni-text class="footer-column-desc">Your ultimate travel companion. Explore the world with ease.</uni-text>
          </uni-view>
          
          <uni-view class="footer-column">
            <uni-text class="footer-column-title">Quick Links</uni-text>
            <uni-view class="footer-links">
              <uni-navigator url="#" class="footer-link">Home</uni-navigator>
              <uni-navigator url="#" class="footer-link">About Us</uni-navigator>
              <uni-navigator url="#" class="footer-link">Services</uni-navigator>
              <uni-navigator url="#" class="footer-link">Blog</uni-navigator>
            </uni-view>
          </uni-view>
          
          <uni-view class="footer-column">
            <uni-text class="footer-column-title">Contact</uni-text>
            <uni-view class="footer-contact">
              <uni-text class="footer-contact-item">Email: info@tripventure.com</uni-text>
              <uni-text class="footer-contact-item">Phone: +1 (555) 123-4567</uni-text>
            </uni-view>
          </uni-view>
          
          <uni-view class="footer-column">
            <uni-text class="footer-column-title">Follow Us</uni-text>
            <uni-view class="footer-social">
              <uni-view class="footer-social-icon">
                <uni-icon type="share" size="20" color="#999"></uni-icon>
              </uni-view>
              <uni-view class="footer-social-icon">
                <uni-icon type="chat" size="20" color="#999"></uni-icon>
              </uni-view>
              <uni-view class="footer-social-icon">
                <uni-icon type="favor" size="20" color="#999"></uni-icon>
              </uni-view>
            </uni-view>
          </uni-view>
        </uni-view>
        
        <uni-view class="footer-bottom">
          <uni-text class="footer-bottom-text">© 2024 TripVenture. All rights reserved.</uni-text>
        </uni-view>
      </uni-view>
    </uni-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'flight',
      formData: {
        from: 'Jakarta',
        to: 'Hanoi',
        date: 'Fri, 29 Aug, 2024',
        passengers: '1 Passenger'
      }
    };
  },
  methods: {
    search() {
      // 搜索功能实现
      uni.showToast({
        title: 'Searching...',
        icon: 'loading',
        duration: 1000
      });
      // 这里可以添加实际的搜索逻辑
    }
  }
};
</script>

<style scoped>
/* 页面容器 */
.page-container {
  min-height: 100vh;
  background-color: #fff;
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80rpx;
  background-color: #fff;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 32rpx;
}

.navbar-logo-text {
  font-size: 32rpx;
  font-weight: bold;
  color: #ff6b00;
}

.navbar-actions {
  display: flex;
  align-items: center;
}

.navbar-action-btn {
  margin-right: 24rpx;
}

.navbar-signin-btn {
  background-color: #ff6b00;
  border-color: #ff6b00;
}

/* 英雄区域 */
.hero-section {
  position: relative;
  height: 100vh;
  margin-top: 80rpx;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 32rpx;
}

.hero-text {
  text-align: center;
  margin-bottom: 80rpx;
}

.hero-title {
  font-size: 64rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 24rpx;
}

.hero-subtitle {
  font-size: 32rpx;
  color: #fff;
  line-height: 1.5;
}

/* 搜索表单 */
.search-form {
  background-color: #fff;
  border-radius: 24rpx;
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.15);
  padding: 32rpx;
  width: 100%;
  max-width: 960rpx;
}

.search-form-tabs {
  display: flex;
  border-bottom: 1rpx solid #e5e5e5;
  margin-bottom: 32rpx;
}

.search-form-tab {
  flex: 1;
  padding: 16rpx 0;
  font-size: 28rpx;
  color: #666;
  border-bottom: 2rpx solid transparent;
}

.search-form-tab-active {
  color: #ff6b00;
  border-bottom-color: #ff6b00;
}

.search-form-fields {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24rpx;
  margin-bottom: 32rpx;
}

.search-form-field {
  display: flex;
  flex-direction: column;
}

.search-form-label {
  font-size: 24rpx;
  color: #666;
  margin-bottom: 8rpx;
}

.search-form-input {
  height: 80rpx;
  border: 1rpx solid #e5e5e5;
  border-radius: 12rpx;
  padding: 0 24rpx;
  font-size: 24rpx;
}

.search-form-input-hint {
  font-size: 20rpx;
  color: #999;
  margin-top: 4rpx;
}

.search-form-btn {
  width: 100%;
  height: 88rpx;
  background-color: #ff6b00;
  border-color: #ff6b00;
  border-radius: 12rpx;
  font-size: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-form-btn uni-icon {
  margin-left: 12rpx;
}

/* 服务卡片 */
.services-section {
  padding: 120rpx 32rpx;
  background-color: #f5f5f5;
}

.services-content {
  max-width: 1200rpx;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32rpx;
}

.service-card {
  background-color: #fff;
  border-radius: 24rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.service-card-img {
  width: 100%;
  height: 320rpx;
}

.service-card-body {
  padding: 32rpx;
}

.service-card-icon {
  width: 64rpx;
  height: 64rpx;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24rpx;
}

.service-card-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.service-card-desc {
  font-size: 24rpx;
  color: #666;
  line-height: 1.5;
}

/* Expand Your Network */
.network-section {
  padding: 120rpx 32rpx;
  background-color: #fff;
}

.network-content {
  max-width: 1200rpx;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80rpx;
  align-items: center;
}

.network-title {
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 24rpx;
}

.network-subtitle {
  font-size: 28rpx;
  color: #666;
  margin-bottom: 48rpx;
  line-height: 1.5;
}

.network-features {
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}

.network-feature {
  display: flex;
  align-items: flex-start;
}

.network-feature-icon {
  width: 64rpx;
  height: 64rpx;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24rpx;
  margin-top: 8rpx;
}

.network-feature-content {
  flex: 1;
}

.network-feature-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 8rpx;
}

.network-feature-desc {
  font-size: 24rpx;
  color: #666;
}

.network-right {
  position: relative;
  display: flex;
  justify-content: center;
}

.app-container {
  width: 480rpx;
  height: 640rpx;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 32rpx;
  padding: 32rpx;
  transform: rotate(-3deg);
  box-shadow: 0 16rpx 64rpx rgba(0, 0, 0, 0.1);
}

.app-image {
  width: 100%;
  height: 100%;
  border-radius: 24rpx;
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.15);
}

.qrcode-container {
  position: absolute;
  bottom: 32rpx;
  right: 32rpx;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);
}

.qrcode-title {
  font-size: 24rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.qrcode-placeholder {
  width: 160rpx;
  height: 160rpx;
  background-color: #f5f5f5;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qrcode-placeholder-text {
  font-size: 20rpx;
  color: #999;
}

/* 统计数据 */
.stats-section {
  padding: 120rpx 32rpx;
  background-color: #f5f5f5;
}

.stats-content {
  max-width: 1200rpx;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48rpx;
}

.stats-item {
  text-align: center;
}

.stats-number {
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.stats-desc {
  font-size: 24rpx;
  color: #666;
  line-height: 1.5;
}

/* 页脚 */
.footer {
  background-color: #333;
  padding: 80rpx 32rpx 48rpx;
}

.footer-content {
  max-width: 1200rpx;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48rpx;
  margin-bottom: 64rpx;
}

.footer-column-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 24rpx;
}

.footer-column-desc {
  font-size: 24rpx;
  color: #999;
  line-height: 1.5;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.footer-link {
  font-size: 24rpx;
  color: #999;
  text-decoration: none;
}

.footer-link:active {
  color: #ff6b00;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.footer-contact-item {
  font-size: 24rpx;
  color: #999;
}

.footer-social {
  display: flex;
  gap: 24rpx;
}

.footer-social-icon {
  width: 56rpx;
  height: 56rpx;
  background-color: #444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-bottom {
  border-top: 1rpx solid #444;
  padding-top: 32rpx;
  text-align: center;
}

.footer-bottom-text {
  font-size: 20rpx;
  color: #999;
}

/* 响应式设计 */
@media (max-width: 750rpx) {
  .navbar-menu {
    display: none;
  }
  
  .search-form-fields {
    grid-template-columns: 1fr;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .network-content {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 48rpx;
  }
  
  .hero-subtitle {
    font-size: 28rpx;
  }
  
  .network-title {
    font-size: 40rpx;
  }
}
</style>
