import React from 'react'

const ClickCounter = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <button onClick={() => setCount((pre) => pre + 1)}>Count {count}</button>
    </div>
  )
}

export default ClickCounter
