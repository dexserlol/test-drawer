import './App.css';
import ElevatedBtn from './Components/ElevatedBtn';
import SegmentedBtn from './Components/SegmentedBtn';
import FlostingActionBtn from './Components/FlostingActionBtn';
import FlostingActionBtn2 from './Components/FlostingActionBtn2';
function App() {
  return (
    <div className="App">
      <ElevatedBtn callback={(e)=>(console.log("work"))}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
        Elevated
      </ElevatedBtn>
      <SegmentedBtn />
      <FlostingActionBtn />
      <FlostingActionBtn2 />
    </div>
  );
}

export default App;
