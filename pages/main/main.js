var _album = [
  {
    id: 0,
    baseUrl: 'http://other.web.rh01.sycdn.kuwo.cn/resource/n1/35/1/1790392009.mp3',
    imageUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003RMaRI1iFoYd.jpg',
    name: '告白气球',
    singer: '周杰伦'
  },
  {
    id: 1,
    baseUrl: 'http://mpge.5nd.com/2010/2010b/2013-11-12/61352/3.mp3',
    imageUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000000aWdOx24i3dG.jpg',
    name: '你还要我怎样',
    singer: '薛之谦'
  },
  {
    id: 2,
    baseUrl: 'http://other.web.rh01.sycdn.kuwo.cn/resource/n1/50/94/831321462.mp3',
    imageUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003RxTdZ0sJLwo.jpg',
    name: '微微一笑很倾城',
    singer: '杨洋'
  },
  {
    id: 3,
    baseUrl: 'http://mpge.5nd.com/2015/2015-6-7/67375/1.mp3',
    imageUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003y8dsH2wBHlo.jpg',
    name: '演员',
    singer: '薛之谦'
  }
], _feature_list = [
  {
    baseUrl: '#',
    imageUrl: '../../image/default-photo.png',
    title: '最近播放'
  },
  {
    baseUrl: '#',
    imageUrl: '../../image/default-photo.png',
    title: '我喜欢'
  }
];


Page({
  data: {
    playing: null,
    title: '我的音乐',
    album: _album,
    feature_list: _feature_list,
    current_play: {
      baseUrl: '#',
      imageUrl: '../../image/default-photo.png',
      name: '暂无',
      singer: '暂无'
    }
  },
  onLoad: function(options) {
    var that = this;

    wx.setNavigationBarTitle({
      title: that.data.title//页面标题为路由参数
    })
  },
  play: function(event) {
    var that = this;
    var id = event.currentTarget.dataset.id,
        res = this.data.album[id];

    delete res['id'];
    this.setData({
      current_play: res,
    });

    wx.playBackgroundAudio({
      dataUrl: res.baseUrl,
      name: res.name,
      singer: res.singer,
      coverImgUrl: res.imageUrl,
      complete: function(res) {
        that.setData({
          playing: true
        })
      }
    })
  },
  audioPlay: function() {
    var play = this.data.playing;
    if (play === true) {
      this.stop();
    }
    if (play === false) {
      this.continue();
    }
  },
  stop: function() {
    wx.pauseBackgroundAudio();
    this.setData({
      playing: false
    })
  },
  continue: function() {
    wx.playBackgroundAudio();
    this.setData({
      playing: true
    })
  }
})
