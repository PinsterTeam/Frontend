import React, {Component} from 'react';

class Image extends Component {
    render() {
        const {
            // id,
            // featured,
            storage_location_uri,
            // url,
            thumbnailable,
            description
        } = {...this.props.imageData};
        return (
            <img
                className={this.props.imageClass}
                src={thumbnailable === true ? this.props.large ? `${storage_location_uri}_1000x1000` : `${storage_location_uri}_400x400` : storage_location_uri}
                alt={description}
            />
        );
    }
}

export default Image;
