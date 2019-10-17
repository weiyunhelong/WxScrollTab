// components/scrolltab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabdata: { // tab数据
      type: null,
      observer: function(newVal, oldVal) {

        var that = this;

        that.setData({
          college: newVal
        })

      }
    },
    scrollTop: { //滚动的高度
      type: null,
      observer: function(newVal, oldVal) {

        var that = this;
        that.setData({
          scrollTop: newVal
        })

      }
    },
    scrollH: { //距离顶部的高度
      type: null,
      observer: function(newVal, oldVal) {

        var that = this;
        that.setData({
          scrollH: newVal
        })

      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    college: [],
    collegeCur: -2,
    showList: false,
    scrollTop: 0,
    scrollH: 0, //滚动的高度
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //展示列表小面板
    showlist() {
      let that = this;
      if (that.data.showList) {
        that.setData({
          showList: false,
        })
      } else {
        that.setData({
          showList: true,
        })
      }
    },
    //选择分类
    collegeSelect(e) {
      this.setData({
        collegeCur: e.currentTarget.dataset.id - 1,
        scrollLeft: (e.currentTarget.dataset.id - 3) * 150,
        showList: false,
      })
      this.getList();
    },

    //选择全部
    selectAll() {
      this.setData({
        collegeCur: -2,
        scrollLeft: -200,
        showList: false,
      })
      this.getList();
    },
    //操作获取数据
    getList() {
      var that = this;

      that.triggerEvent('tabtap', that.data.collegeCur)
    },
  }
})