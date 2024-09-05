import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Corrente from './Corrente'
import Buzios from './Buzios'
import Cabala from './Cabala'
import Lista from './Lista'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function App() {
    return (
        <Router>
            <div className='main-container'>
                <Header />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/corrente" element={<Corrente />} />
                        <Route path="/buzios" element={<Buzios />} />
                        <Route path="/cabala" element={<Cabala />} />
                        <Route path="/lista" element={<Lista />} />
                    </Routes>
                </main>
                <Footer />
            </div>

        </Router>

    )
}

export default App