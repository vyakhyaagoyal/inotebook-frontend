import React, { useState } from 'react'
import Notes from './Notes';
import AddNote from './AddNote';
import Navbar from './Navbar';

const Home = () => {
const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <AddNote />
      <Notes search={search} />
    </div>
  )
}

export default Home
