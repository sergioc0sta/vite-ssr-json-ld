import { useState } from 'react'
import './Counter.css'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Este componente demonstra hidratação no cliente!
      </p>
    </div>
  )
}
