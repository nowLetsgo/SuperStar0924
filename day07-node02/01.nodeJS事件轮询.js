/* 
    nodeJS事件轮询
        - JS是单线程的，在nodejs内部使用了第三方库libuv，nodejs会把IO，文件读取等异步操作交由他处理，而nodejs主线程可以继续去处理其他的事情。

        - libuv会开启不同的线程去处理这些延时操作，处理完后，会把异步操作的回调函数放到nodejs的轮询队列中，nodejs会在适当的时候处理轮询队列中的回调函数，从而实现非阻塞。

        - 事件轮询分为6个阶段，每一个阶段都有一个回调队列，每次进入一个阶段的时候，会把当前阶段的所有回调函数调用完毕或者达到最大调用量的时候进入下一个阶段

        - 事件轮询6个阶段介绍
            - timers阶段：
                timers阶段用来处理setTimeout() 和 setInterval() 的回调函数。

            - pending callbacks阶段：这个阶段用来处理系统操作的回调函数

            - idle prepare阶段: 此阶段是仅供nodejs内部操作调用

            - poll阶段：
                - 这个阶段主要用来处理如IO操作，网络请求等异步操作
                - 当这个阶段不为空的时候，则执行完这个阶段，进入下一个阶段
                - 当这个阶段为空的时候，除非碰到check阶段有回调函数等待执行，或者timers阶段有回调函数等待执行，否则会一直在poll阶段等到相应的回调函数执行

            - check阶段:
                专门用来处理setImmediate回调函数的

            - close callbacks阶段
                这个阶段用来处理如socket的close事件等关闭的回调函数的


*/