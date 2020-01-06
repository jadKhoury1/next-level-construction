import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Employee from './Employee';

class App extends Component {

    constructor(props) {
        super(props);
        
        const { pathname, hash} = history.location;
        const path = `${pathname}${hash ? `${hash}`: ''}`
        this.state = { active: path };
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header active={this.state.active} setActive={active => this.setState({active})} />
                        <div className="sub-container">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/aboutUs" component={AboutUs} />
                                <Route path="/contactUs" component={ContactUs} />
                                <Route path="/Employee" component={Employee} />
                            </Switch>
                        </div>
                        <Footer setActive={active => this.setState({active})}/>
                    </div>
                </Router> 
            </div>
        );
    }
}

export default App;