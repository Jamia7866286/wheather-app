import React, { useEffect, useState } from 'react'
import ChildCard from './child-item';
import './Github.scss'
import Loader from './loader';
import Pagination from './pagination'

function GithubData() {

      const [item, setitem] = useState([]);
      const [tempItems, setTempItems] = useState([]);
      const [loading, setLoading] = useState(true);
      const [search, setSearch] = useState('');

      // Delete multiple items
      // const [checkbox, setCheckbox] = useState(false);
      const [selcteditems, setSelecteditems] = useState([]);

      // Pagination index
      const [pageNumber, setPageNumber] = useState(1);
      const [postPerPage] = useState(7);

      const lastIndexPost = pageNumber * postPerPage;
      const firstIndexPost = lastIndexPost - postPerPage;
      const postPerPageShow = tempItems.slice(firstIndexPost, lastIndexPost);

      // console.log("Naseem:",postPerPageShow);
      // setTempItems(postPerPageShow);
      

      

      // Use Effect Method to call API
      useEffect(() => {

            const fetchAPI = async ()=>{
                  try{
                        const response = await fetch('https://api.github.com/users');
                        const data = await response.json();
                        // console.log(data);
                        setitem(data);
                        setTempItems(data)
                        setLoading(false);
                  }
                  catch(error){
                        console.log("Error found ", error);
                        setLoading(false);
                  }
            }

            fetchAPI();

            // let newUpdateItem = item.map((curItem)=>{
            //       { curItem.age = Math.random(10000);}
            //       return curItem
            // });

            // setitem({...item, newUpdateItem});
            // console.log(item);
            
      },[]);


      // Loading component call
      if(loading){
            return <Loader />
      }

      // Input change value for searching
      const inputChange = (e)=>{
            const name = e.target.value;
            setSearch(name);
            if (name === '') {
                  setTempItems(item);
            }
      }

      const searchItemBtn = ()=>{
            if(search !== ''){
                  const filteredItems = item.filter(itm => itm.login.toLowerCase() === search.trim().toLowerCase());
                  setTempItems(filteredItems);
            }
            else{
                  alert("Please Enter User Name!");
            }
            
      }

      
      const checkedItem = (event,itm)=>{
           if (event.target.checked) {
            selcteditems.push(itm.id);
            setSelecteditems(selcteditems);
           } else {
              let index = selcteditems.indexOf(itm.id);
              if (index !== -1){
                  selcteditems.splice(index, 1);
                  setSelecteditems(selcteditems);
              }
           }
      }
      
      const deleteSelectdItems = () => {
            selcteditems.forEach((curItemId)=>{
                  const index = item.findIndex((item)=>{
                        return( item.id === curItemId )
                  });
                  item.splice(index, 1);
            });
            setSelecteditems([]);
            const newItem = item.map((itm)=>{
                  { itm.checked = false }
                  return item
            } );
            setitem(newItem);
      }

      // Pagination page set      
      const pageNumberMove = (pageNumber)=> setPageNumber(pageNumber);



      return (
            <div className="parent-list">
                  {/* <h1 className="list-github">Github Users List</h1> */}
                  <div className="input-group w-50 m-auto mt-2">
                        <input type="text" onChange={inputChange} placeholder="Enter Name..." className="form-control" />
                        <div className="input-group-prepend">
                              <span className="input-group-text" onClick={searchItemBtn} style={{"cursor":'pointer'}}>Search</span>
                        </div>
                  </div>
                  <div className="container">
                        <div className="row">
                              <div className="col-12">
                              <button className="btn btn-danger" onClick={deleteSelectdItems}>Delete</button>
                              </div>
                        </div>
                  </div>
                  <div className="card-parent">

                        {     postPerPageShow.length > 0 
                              ?
                              postPerPageShow.map((val,index)=>{
                                    return <ChildCard item={val} key={index} checkCheckboxItem={checkedItem}  />
                                })
                              : <h1 className="text-center mt-5">No data found, try again...</h1>
                        }
                        
                  </div>

                  <Pagination postPerPage={postPerPage} totalPost={tempItems.length} pageNumberMove={pageNumberMove} />
            </div>
      )
}

export default GithubData;
