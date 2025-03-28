import './App.css'
import HeavyCalculator from './components/HeavyCalculator'
import LifeCicleTest from './components/LifeCicle'
import ParentComponent from './components/CallbackFunction'
import Contador from './components/Contador'

function App() {
  return (
    <>
      <h1>React Hooks Demo</h1>
      
      <section className="card">
        <h2>useMemo Example</h2>
        <HeavyCalculator />
      </section>
      
      <section className="card">
        <h2>useEffect Example</h2>
        <LifeCicleTest />
      </section>
      
      <section className="card">
        <h2>useCallback Example</h2>
        <ParentComponent />
      </section>
      
      <section className="card">
        <h2>useState Example</h2>
        <Contador />
      </section>

      <img 
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQiIGlkPSJiZ0dyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzZhMTFjYjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMjU3NWZjO3N0b3Atb3BhY2l0eToxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGNpcmNsZSBjeD0iMTI1IiBjeT0iMTI1IiByPSIxMTAiIGZpbGw9InVybCgjYmdHcmFkaWVudCkiIC8+CiAgPGNpcmNsZSBjeD0iMTI1IiBjeT0iMTQ1IiByPSIxOCIgZmlsbD0id2hpdGUiIC8+CiAgPGxpbmUgeDE9IjEzOSIgeTE9IjE0NSIgeDI9IjEzOSIgeTI9IjkwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICA8cGF0aCBkPSJNMTM5LDkwIEMxNDUsODAgMTYwLDgwIDE2NSw5NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgPHRleHQgeD0iMTI1IiB5PSIyMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIj4KICAgIGdyb3VwaWUKICA8L3RleHQ+Cjwvc3ZnPg=="
        alt="groupie logo" 
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </>
  )
}

export default App

