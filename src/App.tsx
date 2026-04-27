import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        
        <main className="grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App