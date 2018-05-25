import React from 'react';
import {ContactList} from "../contact/ContactList";
import {ContactDetail} from "../contact/ContactDetail";
import {Route} from 'react-router-dom';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts : contacts,
            selectedContact : contacts[0]
        };
    }

    render() {
        return (
            <div>
                <h1>Contact Page</h1>
                <ContactList contacts={this.state.contacts} />
                <Route path={`${this.props.match.path}/:name`} component={ContactDetail}/>
            </div>
        );
    }
}

const contacts = [
    {id: 1, name : 'Charlie', address: '7', city: 'Nantes', country: 'France', email: 'Charlie@yahoo.com'},
    {id: 2, name : 'Leona', address: '8', city: 'Nantes', country: 'France', email: 'Leona@yahoo.com'},
    {id: 3, name : 'Derek', address: '9', city: 'Nantes', country: 'France', email: 'Derek@yahoo.com'},
    {id: 4, name : 'Benjamin', address: '1', city: 'Nantes', country: 'France', email: 'Benjamin@yahoo.com'},
    {id: 5, name : 'Alex', address: '2', city: 'Nantes', country: 'France', email: 'Alex@yahoo.com'}
];