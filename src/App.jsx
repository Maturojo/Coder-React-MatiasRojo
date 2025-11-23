// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import NavbarBoostrap from './components/NavbarBoostrap'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
      <NavbarBoostrap />

      <Routes>
        {/* Catálogo completo */}
        <Route
          path="/"
          element={<ItemListContainer saludo="Bienvenido a mi App" />}
        />

        {/* Catálogo filtrado por categoría */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer saludo="Productos por categoría" />}
        />

        {/* Detalle de producto */}
        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>404 - Página no encontrada</h2>}
        />
      </Routes>
    </>
  )
}

export default App
