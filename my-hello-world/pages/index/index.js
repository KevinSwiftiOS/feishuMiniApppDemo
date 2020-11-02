const app = getApp();
Page({
  data: {
    message: 'hello world',
    isShowMessage: false
  },
  showMessage() {
    this.setData({
      isShowMessage: true
    })
  },
})
