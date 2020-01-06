import React, { Component } from 'react';

class ContactUsForm extends Component {

    state = { name: '', email: '', message: ''};

    handleSubmitForm = event => {
        event.preventDefault();
    }

    handleInputChange = event => {
        const { value } = event.target;
        const { name } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <form className="ui form error">
                <div className="ui error message hidden">
                    <p>Vous devez remplir tous les champs</p>
                </div>
                <div className="two fields">
                    <div className="field">
                        <input placeholder="Name" type="text" name='name' value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                    <div className="field">
                        <input placeholder="Email" type="text" name='email' value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="field">
                    <textarea placeholder="Message" name='message' value={this.state.message} onChange={this.handleInputChange} ></textarea>
                </div>
                <button className="ui right floated button primary-button" onClick={this.handleSubmitForm}>soumettre</button>
            </form>
        );
    }
}

export default ContactUsForm;