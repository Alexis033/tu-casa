import "./layout.scss"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/homePage/HomePage"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <main className="content">
        <HomePage/>

      </main>
    </div>
  )
}

export default App