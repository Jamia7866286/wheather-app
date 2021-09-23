import React from 'react'
// import { useState } from 'react';
import { useHistory } from 'react-router';

function GithubUserDetails() {

      const history = useHistory();
      // const [followersData, setFollowersData] = useState([]);

      return (
            <div className="followers-details">
                  <button className="btn btn-danger" onClick={()=>history.goBack()}> {"<"} Go Back </button>

                  <div className="fetch_data">
                        Follewers Cards or Page
                  </div>
            </div>
      )
}

export default GithubUserDetails
