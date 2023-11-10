import './App.css'
import Card from './Card'
import Gallery from './Gallery'


function App() {

  const languageList = [
    { name: 'English', symbol: 'Aa' },
    { name: 'Hindi', symbol: 'ह' },
    { name: 'English', symbol: 'Aa' },
    { name: 'Hindi', symbol: 'ह' },
    { name: 'English', symbol: 'Aa' },
    { name: 'Hindi', symbol: 'ह' },
    // Add more items as needed
  ];
  return (
    <>
    <Gallery list={languageList}/>
    </>
  )
}

export default App
