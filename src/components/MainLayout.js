import React from 'react';
import Card from './individualCard'
const MainLayout = () => {
    return (
        <div className="container-fluid pt-5 pb-5 bg-info">
        <div style={{display:'flex' , alignContent:'space-evenly'}} className="row ">
        
            <Card />
     
         
            <Card />
      
        
            <Card />
            </div>
            </div>
     
    
    );
}

export default MainLayout;
