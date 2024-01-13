import React, { useState } from 'react'
import SearchDomain from '../components/SearchDomain';

const AvailabilityChecker = () => {
    const [searchTerm,setSearchTerm]=useState('')
    const updateSearchTerm = (newState) => {
        setSearchTerm(newState);
      };
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Availability Checker")
        console.log(searchTerm)
    }
    

  return (
    <div className='h-screen'><SearchDomain handleSubmit={handleSubmit} setSearchTerm={updateSearchTerm}/></div>
  )
}

export default AvailabilityChecker