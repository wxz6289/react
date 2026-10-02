import { useState, useEffect, useEffectEvent } from 'react'

export default function Timer() {
  const [count, setCount] = useState(0);

  const onTick = useEffectEvent(() => {
    console.log('count', count);
  });

  useEffect(() => {
    console.log('✅ 创建定时器');
    const id = setInterval(() => {
      console.log('⏰ Interval');
      onTick();
    }, 1000);
    return () => {
      console.log('❌ 清除定时器');
      clearInterval(id);
    };
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  const onResize = useEffectEvent(() => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    console.log('🔍 窗口大小变化', newWidth);
  });

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <div className="flex flex-col items-center justify-center h-screen">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold cursor-pointer" >计数器: {count}</h1>
    </div>
    <button className="rounded-md border-1 px-2 py-1 m-2 border-gray-300 text-blue-500 hover:bg-gray-100" onClick={() => setCount(count + 1)}>增加</button>
    <button className="rounded-md border-1 px-2 py-1 border-gray-300 text-blue-500 hover:bg-gray-100" onClick={() => setCount(0)}>重置</button>
  </div>
}
