// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteObj: [
      { id: 1, text: "JAVA", comment: "JAVA" },
      { id: 2, text: "GO", comment: "GO" },
      { id: 3, text: "PHP", comment: "PHP" },
      { id: 4, text: "PYTHON", comment: "PYTHON" }
    ]
  },
  noteLongTap: function (e) {
    console.log(e);
    var inx = e.currentTarget.dataset.index;
    console.log('index============================')
    console.log(inx)
    console.log(this.data.noteObj)
    var comment = this.data.noteObj[inx].comment;
    var id = this.data.noteObj[inx].id;

    wx.navigateTo({
      url: '../content/content?comment=' + comment + '&id=' + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://www.baidu.com',
    //   success: function (data) {
    //     console.log(data);
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})