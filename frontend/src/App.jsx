import { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import UnitPage from './components/UnitPage'

function getCurrentPath() {
  return window.location.pathname || '/'
}

function App() {
  const [path, setPath] = useState(getCurrentPath)

  useEffect(() => {
    const handlePopState = () => setPath(getCurrentPath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (nextPath) => {
    const safePath = nextPath.startsWith('/') ? nextPath : `/${nextPath}`
    window.history.pushState({}, '', safePath)
    setPath(safePath)
  }

  if (path === '/hpc' || path === '/aie' || path === '/ciu') {
    return <UnitPage slug={path.replace('/', '')} onNavigate={navigate} />
  }

  return <LandingPage onNavigate={navigate} />
}

export default App
