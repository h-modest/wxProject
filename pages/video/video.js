var album = [
  {
    id: 0,
    src: 'http://220.170.49.114/12/n/f/l/y/nflyueksujydxtzkqfghyafnkiyjun/hd.yinyuetai.com/7E33015B716A4A5D80864036110BBD7C.mp4?sc=53c94c32c0c55ca1',
    name: '告白气球',
    singer: '周杰伦'
  },
  {
    id: 1,
    src: 'http://220.170.49.100/5/m/j/m/f/mjmfkeqcbszplpqnmqvymzsftcoggg/hd.yinyuetai.com/222C014DD1060727A3CBE1F0CBEEE995.flv?sc=86f3f5c4367c44fb',
    name: '演员',
    singer: '薛之谦'
  },
  {
    id: 2,
    src: 'http://220.170.49.103/11/k/a/m/p/kampyjiggbgptekfoalemfjztlppew/hc.yinyuetai.com/1E390147639261A9E9BC5D1566EA0997.flv?sc=b5fa6f8da8fef2aa&br=775&vid=2100237&aid=33234&area=JP&vst=0&ptp=mv&rd=yinyuetai.com',
    name: 'オトノナルホウヘ→',
    singer: 'Goose house'
  },
  {
    id: 3,
    src: 'http://183.60.197.29/20/e/q/q/z/eqqzgigfsfidozezswzanszzlxvaob/hc.yinyuetai.com/5C3E0162ADA4B5AFC79EFE69D35857D1.mp4?sc=e24c9792b8f36daa&br=776&vid=3191281&aid=34355&area=ML&vst=3&ptp=mv&rd=yinyuetai.com',
    name: '不仅仅是喜欢',
    singer: '萧全、孙语赛',
  },
  {
    id: 4,
    src: 'http://220.170.49.114/12/n/f/l/y/nflyueksujydxtzkqfghyafnkiyjun/hd.yinyuetai.com/7E33015B716A4A5D80864036110BBD7C.mp4?sc=53c94c32c0c55ca1',
    name: '告白气球',
    singer: '周杰伦'
  },
  {
    id: 5,
    src: 'http://220.170.49.100/5/m/j/m/f/mjmfkeqcbszplpqnmqvymzsftcoggg/hd.yinyuetai.com/222C014DD1060727A3CBE1F0CBEEE995.flv?sc=86f3f5c4367c44fb',
    name: '演员',
    singer: '薛之谦'
  },
  {
    id: 6,
    src: 'http://220.170.49.103/11/k/a/m/p/kampyjiggbgptekfoalemfjztlppew/hc.yinyuetai.com/1E390147639261A9E9BC5D1566EA0997.flv?sc=b5fa6f8da8fef2aa&br=775&vid=2100237&aid=33234&area=JP&vst=0&ptp=mv&rd=yinyuetai.com',
    name: 'オトノナルホウヘ→',
    singer: 'Goose house'
  },
  {
    id: 7,
    src: 'http://183.60.197.29/20/e/q/q/z/eqqzgigfsfidozezswzanszzlxvaob/hc.yinyuetai.com/5C3E0162ADA4B5AFC79EFE69D35857D1.mp4?sc=e24c9792b8f36daa&br=776&vid=3191281&aid=34355&area=ML&vst=3&ptp=mv&rd=yinyuetai.com',
    name: '不仅仅是喜欢',
    singer: '萧全、孙语赛',
  }
]

Page({
  data: {
    album: {},
    danmuValue: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
  onLoad: function(options) {
    var index = options.id;
    this.setData({
      album: album[index]
    })
  },
  onReady: function() {
    this.video = wx.createVideoContext('myVideo')
  },
  bindInputBlur: function(e) {
    this.data.danmuValue = e.detail.value
  },
  sendDanmu: function() {
    var item = {
          text: this.data.danmuValue,
          color: 'blue',
        };

    this.video.sendDanmu(item)
  }
})
