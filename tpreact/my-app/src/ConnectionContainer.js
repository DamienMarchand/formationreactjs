import React from 'react';

export class ConnectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onLine : navigator.onLine
        };
        this.addListener();
    }

    addListener () {
        window.addEventListener("offline", () => this.setState({onLine : false}), false);
        window.addEventListener("online", () => this.setState({onLine : true}), false);
    }

    render() {
        const offlineContainer = (
            <div>
                <h1>OFFLINE</h1>
            </div>
        );

        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                {!this.state.onLine && offlineContainer}
            </div>
        );
    }
}