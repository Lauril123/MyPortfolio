import Intro from "./components/intro"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Portfolio from "./components/portfolio"


function App() {
  const timelineData = [
    { date: '2022-01-01', event: 'Event 1', height: '80' },
    { date: '2022-02-15', event: 'Event 2', height: '130' },
    // Add more events as needed
  ];
  return (

    <div>
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
