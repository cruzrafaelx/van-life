import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <section>
      <div>Dashboard</div>
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/reviews">Reviews</Link>
    </section>
  )
}

export default Dashboard