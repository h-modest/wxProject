var setting_list = [
  {
    title: '会员中心',
    baseUrl: ''
  },
  {
    title: '商城',
    baseUrl: ''
  },
  {
    title: '设置',
    baseUrl: ''
  },
  {
    title: '关于',
    baseUrl: ''
  }
]


Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: ''
    },
    setting_list: setting_list
  },
  onLoad: function() {
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  }
})
