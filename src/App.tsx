import './App.css'
import TableSheet from './Components/TableSheet.tsx'
import ToolBar from './Components/ToolBar.tsx'

function App() {

  return (
    <>
      <div><ToolBar/></div>
      <div className='px-5'>
        <TableSheet/>
      </div>
    </>
  )
}

export default App
