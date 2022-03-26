import React from 'react';
import './Hire.css';
const Hire = ({hire}) => {
  console.log(hire);
    
    return (
        <div className='hire-container'>
             <h2>Want To Hire </h2>
             {/* <p>length:{hire.length}</p> */}
             <div className="hired-player">

             <ul>
                {
                    hire.map(addHire =>
                            
                    
                     <div className="listed-player">
                    
                    <img src={addHire.picture} alt="" />
                    <p>Name: {addHire.name}</p>  
                    <h3>Price: {addHire.price}</h3>
                    
                    </div>)

                }
            </ul>

            </div>
             
        </div>
    );
};

export default Hire;