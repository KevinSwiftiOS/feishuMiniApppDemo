Page({
  data:{

  },
  showMessage() {
    tt.navigateTo({
      url: '/pages/index/index?sku=123',
      success (res) {
        console.log(`res`);
      },
      fail (res) {
        console.log(res);
      }
    })
  }
})