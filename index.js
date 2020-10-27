class VirtualKeyboard {
    /** @param 设备类型 1 安卓 2苹果  */
 
  /**
   * 
   * @class 监听虚拟键盘  
  * @classdesc 监听虚拟键盘弹出隐藏
   *  @public onEnd 结束监听虚拟键盘 
   *  @public onShow 传递一个回调 监听虚拟键盘弹出
   *  @public onHidden 传递一个回调 监听虚拟键盘隐藏
   */
    constructor() {
      this.type = this.IsIA()
      this.originalHeight = document.documentElement.clientHeight || document.body.clientHeight
  
    }
  
    /**
     * @function  onShow 传递一个回调函数 
     * @param  虚拟键盘弹出时触发
    */
    onShow = (fn ) => {
      this.show = fn;
    }
  
    /** 
    * @function  onHidden 传递一个回调函数 
    * @param  虚拟键盘隐藏时触发
    */
    onHidden = (fn ) => {
      this.hidden = fn;
    }
  
    /**  @function onStart 开始监听虚拟键盘  */
    onStart = () => {
      console.log('开始监听虚拟键盘 ', this.type, this)
      if (this.type == 1) {
        //获取原窗口的高度 
        window.addEventListener('resize', this.onResize)
      }
      if (this.type == 2) {
        // 苹果系统
        document.body.addEventListener('focusin', this.onFocusin)
        document.body.addEventListener('focusout', this.onFocusout)
      }
  
    }
  
    /** @function onEnd 结束 监听 虚拟键盘  */
    onEnd = () => {
      if (this.type == 1) {
        //获取原窗口的高度 
        window.removeEventListener('resize', this.onResize)
      }
      if (this.type == 2) {
        document.body.removeEventListener('focusin', this.onFocusin)
        document.body.removeEventListener('focusout', this.onFocusout)
      }
    }
  
     IsIA = () => {
      if ((/android/gi).test(navigator.appVersion)) {
        return 1; //安卓
      } else if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
        return 2; // 苹果
      }
    }
  
     onResize = () => {
      //安卓系统
      //键盘弹起与隐藏都会引起窗口的高度发生变化
      let resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
  
      if (this.originalHeight - resizeHeight > 50) {
        //当软键盘弹起，在此处操作 
         
        this.show('安卓系统: 当软键盘弹起，在此处操作')
      } else {
       
        //当软键盘收起，在此处操作  
        this.hidden('安卓系统: 当软键盘弹起，在此处操作')
  
      }
    }
    // 苹果获取焦点
     onFocusin = () => {
      //软键盘弹出的事件处理 
      this.show('苹果系统:软键盘弹出的事件处理')
    }
  
    // 苹果失去焦点
     onFocusout = () => {
      //软键盘收起的事件处理 
      this.hidden('苹果系统:软键盘收起的事件处理')
    }
  
  
  
  }


  export default VirtualKeyboard