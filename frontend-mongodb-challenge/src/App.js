import './App.css';
import JournalList from './components/JournalList';
import JournalAdd from './components/JournalAdd';
// import JournalDelete from './components/JournalDelete';
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div> 
      <JournalAdd></JournalAdd>
      <JournalList></JournalList>
      {/* <JournalDelete></JournalDelete> */}
    </div>
)}

export default App;
