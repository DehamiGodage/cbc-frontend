import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
 

  return (
    <>
      <Header/>
      <ProductCard name = "Apple Laptop" description = "good condition brand new" price="$1000" picture = "https://picsum.photos/id/1/500/350"/>
      
   </>
  )
}

export default App
