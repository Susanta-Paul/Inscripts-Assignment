import './App.css'
import TableSheet from './Components/TableSheet.tsx'
import ToolBar from './Components/ToolBar.tsx'
import Footer from './Components/Footer.tsx'
import Header from './Components/Header.tsx'

function App() {

  return (
    <div className='min-h-screen relative'>
      <Header/>
      <div><ToolBar/></div>
      <div className='px-5'>
        <TableSheet/>
      </div>
      <Footer/>
    </div>
    
  )
}

export default App
