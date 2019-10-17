//index.js
Page({
  data: {
    college: [{
      name: '分类A',
        id: -1
      },
      {
        name: '分类B',
        id: 0
      },
      {
        name: '分类C',
        id: 1
      },
      {
        name: '分类D',
        id: 2
      },
      {
        name: '分类E',
        id: 3
      },
      {
        name: '分类F',
        id: 4
      },
      {
        name: '分类G',
        id: 5
      },
      {
        name: '分类H',
        id: 6
      },
      {
        name: '分类I',
        id: 7
      },
      {
        name: '分类J',
        id: 8
      },
      {
        name: '分类K',
        id: 9
      },
      {
        name: '分类L',
        id: 10
      },
      {
        name: '分类M',
        id: 11
      },
      {
        name: '分类N',
        id: 12
      },
      {
        name: '分类O',
        id: 13
      },
      {
        name: '分类P',
        id: 14
      },
    ],
    scrollTop: 0,
    scrollH:0,
  },
  onLoad: function() {
    var that=this;
    const query = wx.createSelectorQuery()
    query.select('#block0').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      that.setData({
        scrollH: res[0].top,
      })
    })
  },
  //监测屏幕滚动
  onPageScroll: function(e) {
    this.setData({
      //scrollTop: parseInt((e.scrollTop) * wx.getSystemInfoSync().pixelRatio),
      scrollTop: parseInt(e.scrollTop)
    })
  },  
  //操作获取数据
  tabtapopt(e) {
    var that = this;

    var colleges = that.data.college;
    var collegeCur = e.detail;


    if (collegeCur == -2) {
      wx.showToast({
        title: '全部',
      })
    } else {
      var names = "";
      colleges.forEach(function(value, index) {
        if (collegeCur == value.id) {
          names = value.name;
        }
      })

      wx.showToast({
        title: names,
      })
    }
  },
})