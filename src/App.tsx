import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Sidebar } from './layout'
import { Allnotes, ArchiveNotes, ErrorPage, TagNotes, TrashNotes } from './pages'

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Sidebar />
      <div className='app__container'>
        <Routes>
          <Route path='/' element={<Allnotes />} />
          <Route path='/archive' element={<ArchiveNotes />} />
          <Route path='/trash' element={<TrashNotes />} />
          <Route path='/tag:name' element={<TagNotes />} />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='/*' element={<Navigate to={"/404"} />} />
        </Routes>
         </div>
    </BrowserRouter>
    </div>
  )
}

export default App
