# -zlfgege-virtualkeyboard 

监听软键盘弹出收到事件的插件


//用法

const [virtualKeyboard] = useState(new VirtualKeyboard())

  useLayoutEffect(() => {

 //开始监听

​    virtualKeyboard.onStart()

​    // 虚拟键盘弹出

​    virtualKeyboard.onShow(() => {

​          console.log('虚拟键盘弹出要执行的事件')

​    })

​    // 虚拟键盘收起

​    virtualKeyboard.onHidden(() => {

 console.log('虚拟键盘收起要执行的事件')

​    })



​    return () => {

   //结束监听

​      virtualKeyboard.onEnd()

​    }

  }, [])# -zlfgege-virtualkeyboard
