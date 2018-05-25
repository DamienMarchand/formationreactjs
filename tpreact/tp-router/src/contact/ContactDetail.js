import React from 'react';

export class ContactDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const contact = this.props.location.state;
        return (
            <div>
                ContactDetail :
                <div style={{color : 'red'}}>{contact.name}</div>
                <div>{contact.address}</div>
                <div>{contact.city}</div>
                <div>{contact.country}</div>
                <div>{contact.email}</div>
            </div>
        );
    }
}