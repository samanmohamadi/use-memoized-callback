# useDebouncedEffect react hook

Install it with yarn:

```
yarn add use-memoized-callback 
```

or with npm:

```
npm i use-memoized-callback  --save
```

*For more information about callback memoization read this [article](https://medium.com/@samanmhd/boost-performance-of-functional-react-components-with-memoized-callbacks-441343a237b7).

# Example

```javascript
import React, { useState } from 'react';
import useMemoizedCallback  from 'use-memoized-callback '; 


function App(){
  const [counter, setCounter] = useState(0);

  const incCounter = useMemoizedCallback(event => {
    setCounter(counter + 1);
  }); // no dependency required

  return (
    <div>
      {/* 
          incCounter is memoized so AnotherComponent will not reRender each time.
      */}
       <AnotherComponent onClick={incCounter} /> 
    </div>
  );
}

```
