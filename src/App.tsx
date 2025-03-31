import './App.css'
import { Suspense } from 'react'
import Weather from './component/Weather'


function App() {
  return (
    <Suspense>
      <h1>天気情報表示アプリ</h1>
      <Weather />
    </Suspense>
  )
}

export default App
