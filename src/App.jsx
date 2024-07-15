import { useState } from "react"

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"

import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
  const [cartCount, setCartCount] = useState(5)

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings="Bienvenido a OtakuHeaven!" />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
