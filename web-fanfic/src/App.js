import './App.css';
import IconBoard from './components/iconBoard';
import HomeIcon from './assets/MainIcon.svg'
import { Outlet } from 'react-router-dom';
import Drawer from './components/drawer';
import { useState , useEffect, useRef} from 'react';
function App() {
  const [open, setOpen] = useState(false)
  const elClick= useRef(0)
  useEffect(()=>{
    const onClick=(e)=> elClick.current.contains(e.target)||setOpen(false)
    document.addEventListener('click', onClick)
    return ()=>document.addEventListener("click",onClick)
  })
  return (
    <div>
      <div className='leftBoard' ref={elClick}>
        
        <div className='leftBoardContent'>
          <IconBoard content={{content:"test 1"}} drawer={setOpen} redirect={'/'} text={"Home"} icon={HomeIcon}/>
          <IconBoard content={{content:"test 2"}} drawer={setOpen} redirect={'/home'} text={"Home"} icon={HomeIcon}/>
          <IconBoard content={false} drawer={setOpen} redirect={'/test'} text={"Home"} icon={HomeIcon}/>
        </div >
        <Drawer open={open} />
      </div>
      <div className='details'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
