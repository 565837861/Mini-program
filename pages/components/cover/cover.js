// pages/components/cover/cover.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
     show:true,
     list:[]
  },  
  /**
   * 组件的方法列表
   */
  attached(){
    let that = this
    wx.getStorage({
      key: 'shuju',
      success(res) {
        that.setData({
          list:res.data
        })
        // console.log(that.data)
      }
    })
  },
  methods: {
     Coverhide(){
       this.setData({
         show: !this.data.show 
       })
     },
     Covershow(){
       this.setData({
         show: !this.data.show
       })
     },
     
  }
})
