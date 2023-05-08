const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      imglink: 'https://picsum.photos/800/600'
    }
  }
}).mount('#app')