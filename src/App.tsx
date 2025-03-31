import './App.css'
import { Suspense, lazy } from 'react'

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

function App() {
  return (
    <Suspense>

    </Suspense>
  )
}

export default App
