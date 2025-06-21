import React, { useContext,useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
  const a =useContext(noteContext);
  
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  },[])
  return (
    <div>
      I am about {a.notes.name} and I am in class {a.notes.class}
    </div>
  )
}

export default About
