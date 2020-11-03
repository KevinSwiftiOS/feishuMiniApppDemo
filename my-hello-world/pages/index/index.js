const app = getApp();
Page({
  data: {
    message: 'hello world',
    isShowMessage: false,
    res:[1,2,3]
  },
  onLoad: function(options) {
    let sku = options.sku || '';
    console.log(sku);
    const appInstance = getApp();
    console.log(appInstance.globalData);
  },
  showMessage() {
    this.setData({
      isShowMessage: true
    })
  },
})
