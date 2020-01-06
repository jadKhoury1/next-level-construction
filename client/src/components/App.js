import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <div className="sub-container">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/aboutUs" component={AboutUs} />
                                <Route path="/contactUs" component={ContactUs} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router> 
            </div>
        );
    }
}

export default App;