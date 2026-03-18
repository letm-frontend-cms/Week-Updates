import { Header } from 'header-ui-ankit'
import Footer from 'footer-utils-ankit/src/Footer'
import AboutUs from './components/pages/AboutUs'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
      <Header />
      <main style={{ flex: 1, padding: '2rem' }}>
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
