import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componants/Header/Header'
import Blogs from './componants/Bologs/Blogs'
import Bookmarks from './componants/Bookmarks/Bookmarks'

function App() {
  // const [count, setCount] = useState(0)

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      
      <Header></Header>

     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks} ></Bookmarks>
     </div>
      


    </>
  )
}

export default App
