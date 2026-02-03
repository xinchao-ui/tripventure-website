<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  onLaunch: function() {
    console.log('App Launch');
  },
  onShow: function() {
    console.log('App Show');
  },
  onHide: function() {
    console.log('App Hide');
  }
};
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
}

/* 全局变量 */
:root {
  --primary-color: #ff6b00;
  --secondary-color: #ff9900;
  --text-color: #333;
  --text-light: #666;
  --text-lighter: #999;
  --bg-color: #fff;
  --bg-light: #f5f5f5;
  --border-color: #e5e5e5;
  --success-color: #52c41a;
  --warning-color: #faad14;
  --error-color: #f5222d;
}
</style>
