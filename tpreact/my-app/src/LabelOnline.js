import React from 'react';

class LabelOnline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOnline: true};
        this.toggleIsOnline = this.toggleIsOnline.bind(this);
    }

    componentDidMount() {
        window.addEventListener("offline", () => this.toggleIsOnline());
        window.addEventListener("online", () => this.toggleIsOnline());
    }

    shouldComponentUpdate() {
        console.log("LabelOnline shouldComponentUpdate");
        return true;
    }

    toggleIsOnline() {
        this.setState(() => ({isOnline: navigator.onLine}));
    }

    render() {
        const showItem = !this.state.isOnline && ( <p>{this.state.isOnline ? 'ONLINE' : 'OFFLINE'}</p>);

        return (
            <div>
                {showItem}
            </div>
        );
    }
}

export default LabelOnline;