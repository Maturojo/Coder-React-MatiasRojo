
import { Routes, Route } from 'react-router-dom'
import NavbarBoostrap from './components/NavbarBoostrap'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
      <NavbarBoostrap />

      <Routes>
       
        <Route
          path="/"
          element={<ItemListContainer saludo="Bienvenido a REDDION" />}
        />

        
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer saludo="Productos por categoría" />}
        />

        
        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />

       
        <Route
          path="*"
          element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>404 - Página no encontrada</h2>}
        />
      </Routes>
    </>
  )
}

export default App
