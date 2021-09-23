import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderComponent() {
      return (
            <div className="cards-weather">                  
                  <NavLink to="weather" className="weather-app">
                        <div>
                              Weather App
                        </div>
                  </NavLink>
            
                  <NavLink to="github" className="weather-app">
                        <div>
                              Github App
                        </div>
                  </NavLink>
            </div>
            
      )
}

export default HeaderComponent
