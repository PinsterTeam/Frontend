import React, { Component } from 'react';
import CollectableDetails from './CollectableDetails';
import Loader from './Loader';

class PinPage extends Component {
    state = {
        loading: false,
        pinData: {}
    };

    makeFetch = () => {
        fetch(
            `http://api-dev.pinster.io/v1/pins/${this.props.match.params.pinId}`
        )
            .then(
                results => {
                    return results.json();
                },
                error => {
                    console.error(error);
                }
            )
            .then(response => {
                // Display the pins
                this.setState({
                    loading: true,
                    pinData: response
                });
            });
    };

    componentDidMount() {
        this.makeFetch();
    }

    render() {
        return (
            <div className="pin-page">
                {this.state.loading ? (
                    <CollectableDetails
                        collectableData={this.state.pinData}
                        classType="pin"
                        collectableType="pin"
                    />
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}

export default PinPage;
