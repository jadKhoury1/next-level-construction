import React from 'react';
import BuildingImg from '../images/building.jpg';

const ImageIntro = () => {
    return (
        <div style={{ 
            maxWidth: '1500px', 
            marginBottom: '-5px', 
            position: 'relative',
            fontSize: '3vw',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }}>
            <div style={{ position: 'absolute', top: '50%', left: '29%' }}>
                <div>
                   <span 
                    style={{ 
                        backgroundColor: 'rgb(2, 132, 23)',
                        opacity: '70%',
                        padding: '8px 12px'
                    }}
                   >
                    NEXT LEVEL
                   </span> 
                   <span style={{ marginLeft: '1vw' }}>Construction</span>
                </div>
             
            </div>
            <img src={BuildingImg} alt="Next Level Construction Building" style={{ height: '100%', width: '100%'}}/>
        </div>
    );
}

export default ImageIntro;