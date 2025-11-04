

import NavbarBoostrap from './components/NavbarBoostrap' 
import ItemListContainer from './components/itemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      
      <NavbarBoostrap/>
      <ItemListContainer mensaje = {'Bienvenido a mi App'}/>
    </>
  )
}

export default App
