import React,{userRef} from 'react'

function useMemoizedCallback (cb ) {
   const data = useRef({ callback: null, handler: null });
   data.current.callback = cb;
   if (!data.current.handler) {
      data.current.handler = (...args) => data.current.callback(...args);
   }
   return data.current.handler;
}

export default useMemoizedCallback;

