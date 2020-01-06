import React from 'react';
import GoogleMaps from './GoogleMaps';
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
    return (
        <div className="ui container mg-top-40">
            <h3 className="ui centered aligned huge header primary-color">
                COMMENCER LA CONVERSATION
            </h3>
            <div className="ui centered alined grey sub header" style={{ margin: '15px 0 30px 0' }}>
                REMPLISSEZ LE FORMULAIRE CI-DESSOUS
            </div>
            <div className="ui centered grid">
                <GoogleMaps />
                <div className="fourteen wide mobile sixteen wide tablet eight wide computer column">
                    <h1 className="ui dividing header">
                        NEXT LEVEL CONSTRUCTION
                    </h1>
                    <div className="ui list">
                        <div className="item mg-top-20">
                            <i className="large map marker alternate icon primary-color"></i>
                            <div className="content">
                                Campus des sciences et technologies, Mar Roukos - Mkallès
                            </div>
                        </div>
                        <div className="item mg-top-20">
                            <i className="clockwise rotated large phone icon primary-color"></i>
                            <div className="content">
                                +961 (4) 915700
                            </div>
                        </div>
                        <div className="item mg-top-20">
                            <i className="large envelope outline icon primary-color"></i>
                            <div className="content">
                                next-level@gmail.com
                            </div>
                        </div>
                    </div>
                    <ContactUsForm />
                </div>
            </div>
        </div>
    )
};

export default ContactUs;