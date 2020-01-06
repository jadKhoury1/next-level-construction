import React, { Component } from 'react';


class GoogleMaps extends Component {

    render() {
        return (
            <div className="fourteen wide mobile sixteen wide tablet eight wide computer column">
                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Esib&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" style={{ width: '100%', height:'500px' }}>
                </iframe>
                <a href="https://www.bitgeeks.net/embed-google-map/"></a>
            </div>

            
        );
    }

}

export default GoogleMaps;


