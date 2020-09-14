//  eslint-disable react/prop-types 
import React from 'react';
import SidebarCard from '../components/SidebarCard.jsx';

//long rectangle that renders cards based on 
const SidebarContainer = (props) => {
    //get request to server (server will query db)
    const cardsArray = []; //loop through locations in db and and create <SidebarCard /> for each 
    return (
     <div className="side-bar"><h6>Itineraries</h6>
     <SidebarCard />
     </div>
    )
}

export default SidebarContainer;