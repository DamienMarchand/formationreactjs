import React from 'react';
import {Link} from 'react-router-dom';

export class ContactList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listContacts = this.props.contacts.map((contact) => <li key={contact.id} ><Link to={{pathname: '/contact/' + contact.name, state: contact }}>{contact.name}</Link></li>);

        return (
            <div>
                <ul>{listContacts}</ul>
            </div>
        );
    }
}