import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <p className="text-uppercase fw-semibold text-primary">OctoFit Tracker</p>
              <h1 className="display-5 fw-bold mb-3">Track workouts, teams, and progress.</h1>
              <p className="lead text-muted mb-4">
                A modern multi-tier fitness experience with a React frontend, an Express API, and MongoDB-backed data models.
              </p>
              <div className="d-flex gap-3">
                <a className="btn btn-primary btn-lg" href="https://react.dev" target="_blank" rel="noreferrer">
                  Explore React 19
                </a>
                <a className="btn btn-outline-secondary btn-lg" href="http://localhost:8000/api/health" target="_blank" rel="noreferrer">
                  Check API health
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
