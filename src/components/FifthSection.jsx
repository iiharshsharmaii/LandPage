import React from 'react'
import DesignSs from '../img/designss.png'

export const FifthSection = () => {
  return (
    <div className='fifthsectioncontainer'>
      <div className='container'>
        <div className="designSs"><img src={DesignSs} alt="" /></div>
        <div className="search">
          <div className='firstContainer'>
            <div className="searchText">
              <h1>Search</h1>
              <p>User will Search the from and too location for their travel plan.</p>
            </div>
            <div className="horizontaolLine">
              <svg width="73" height="2" viewBox="0 0 73 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.25" x2="73" y2="1.25" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="5 5" />
              </svg>
            </div>
            <div className="dumbbell">
              <svg width="8" height="87" viewBox="0 0 8 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3.25" stroke="#FFCC00" strokeWidth="1.5" />
                <circle cx="4" cy="83" r="3.25" stroke="#FFCC00" strokeWidth="1.5" />
                <line x1="3.75" y1="7" x2="3.75" y2="80" stroke="#FFCC00" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="add">
          <div className="secondContainer">
            <div className="addText">
              <h1>Add Button</h1>
              <p>User can add his travel plan by clicking on the ADD button.</p>
            </div>
            <div className="horizontalLine2">
              <svg width="73" height="2" viewBox="0 0 73 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.25" x2="73" y2="1.25" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="5 5" />
              </svg>
            </div>
            <div className="dumbbell2">
              <svg width="8" height="87" viewBox="0 0 8 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3.25" stroke="#FFCC00" strokeWidth="1.5" />
                <circle cx="4" cy="83" r="3.25" stroke="#FFCC00" strokeWidth="1.5" />
                <line x1="3.75" y1="7" x2="3.75" y2="80" stroke="#FFCC00" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="connect">
          <div className="thirdContainer">
            <div className="connectText">
              <h1>Connection page</h1>
              <p>Here we allow the Traveler to chat with the packager.</p>
            </div>
            <div className="horizontalLine3">
              <svg width="73" height="2" viewBox="0 0 73 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.25" x2="73" y2="1.25" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="5 5" />
              </svg>
            </div>
            <div className="verticalLine">
              <svg width="2" height="78" viewBox="0 0 2 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 78L1 0" stroke="#FFD41B" strokeWidth="1.5" strokeDasharray="5 5" />
              </svg>
            </div>
            <div className="dumbbell3">
              <svg width="8" height="87" viewBox="0 0 8 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3.25" stroke="#FFCC00" strokeWidth="1.5" />
                <circle cx="4" cy="83" r="3.25" stroke="#FFCC00" strokeWidth="1.5" />
                <line x1="3.75" y1="7" x2="3.75" y2="80" stroke="#FFCC00" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
