import React from 'react'
import Sidebar from './components/sidebar'
import './App.css'
import Charts from './components/charts/charts'
import BarChart from './components/charts/barChart'
import SearchBar from './components/search/searchBar'



const App = () => {
  return (
    <>

      <div className='main'>
        <Sidebar />
        <div>
          <SearchBar />


          <div  className='1'>
            <Charts />
          </div>
          <div className='2'>
            <BarChart/>
          </div>
        </div>

      </div>



    </>
  )
}

export default App