import React from 'react'

const Home = () => {
  return (
    <div>

      <div className='container my-3'>
        <h2>Add a note</h2>
        <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
        <select className="form-select mb-3" aria-label="Default select example">
          <option selected>General</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter description" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Note</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter note"></textarea>
          <button type="button" className="btn btn-dark my-3">Add Note</button>
        </div>
      </div>

      <div className="container">
        <h2>Your Notes</h2>
      </div>

    </div>
  )
}

export default Home
