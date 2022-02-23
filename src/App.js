import './App.css';
import list from './data/student';
import StudentList from './components/StudentList';


function App() {
  return (
    <div className="App">
      <StudentList data={list}/>
    </div>
  );
}

export default App;
