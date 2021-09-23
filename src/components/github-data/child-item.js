import React from 'react'
// import { useHistory } from 'react-router';

function ChildCard({item, checkCheckboxItem}) {

      // const history = useHistory();

      // const FollowerDetails = ()=>{
      //       history.push(`/user/${item.login}`);
      // }

      const checkedItemVal = (e,item)=>{
            checkCheckboxItem(e,item);
      }
      
      return (
            <div className="cards_item" id={item.id}>

                        <div className="checkbox">
                              <input type="checkbox" checked={item.checked} name={item.id} onChange={(e)=>  checkedItemVal(e,item) } className="form-check-input" />
                        </div>

                        <div className="img-area">
                              <div className="inner-area">
                                    <img src={item.avatar_url} alt="" />
                              </div>
                        </div>

                        <div className="name">{item.login}</div>

                        {/* <div className="buttons">
                              <button>Chat</button>
                              <button>Follow me</button>
                        </div>

                        <div className="social-share">
                              <div className="row">
                                    <i className="fa fa-heart"></i>
                                    <span>30.4k </span>
                              </div>
                              <div className="row">
                                    <i className="fa fa-comment"></i>
                                    <span>54.2k</span>
                              </div>
                              <div className="row">
                                    <i className="fa fa-share"></i>
                                    <span>38.5k</span>
                              </div>
                        </div> */}
                  </div>
      )
}

export default ChildCard
