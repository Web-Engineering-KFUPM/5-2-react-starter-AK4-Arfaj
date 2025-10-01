import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <StudentCard name="Omar" id={202212345} dept="COE"/>
          <StudentCard name="Joud" id={202400000} dept="PETE"/>
        </div>
      </main>
    </div>
  )
}

export default App
