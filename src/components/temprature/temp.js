import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'

const TempComponent = ()=> {

      const [search, setSearch] = useState('Delhi');
      const [city, setcity] = useState(null);


      

      // Use Effect Method to call API
      useEffect(() => {

            const fetchAPI = async ()=> {
                  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4a36212207f0face69ede65f8d6fa2f6`);
                  const resJSON = await response.json();
                  setcity(resJSON.main);
            }

            fetchAPI();

      }, [search]);
      

      // Input change value for searching
      const inputGetVal = (e)=> {
            const val = e.target.value;
            setSearch(val);
      }
      
      return (
            <div className="temp-main">
                  <div className="temp-box">
                        <Form>
                              <FormGroup>
                                    <Input type="search" value={search} autoFocus name="email" onChange={inputGetVal} />
                              </FormGroup>
                        </Form>

                        {!city ? 
                              <p className="mt-3">No data found</p> : 
                              <div className="main mt-3">
                                    <h2>
                                          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M6.5,2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S5.4,2,6.5,2z M15.5,9.5c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S17.83,8,17,8S15.5,8.67,15.5,9.5z M18.5,12h-2.84c-0.58,0.01-1.14,0.32-1.45,0.86l-0.92,1.32L9.72,8C9.35,7.37,8.69,7.01,8.01,7H5 C3.9,7,3,7.9,3,9v6h1.5v7h5V11.61L12.03,16h2.2L15,14.9V22h4v-5h1v-3.5C20,12.68,19.33,12,18.5,12z"/></g></svg>
                                          <span className="mx-2 d-inline-block">{search}</span>
                                    </h2>
                                    <h1 className="my-4">{city.temp} <sup><small>o</small></sup>Cel</h1>
                                    <small>Min : {city.temp_min} <sup><small>o</small></sup>Cel | Max : {city.temp_max} <sup><small>o</small></sup>Cel </small>
                              </div>
                        }
                       
                  </div>
            </div>
      );
}

export default TempComponent
