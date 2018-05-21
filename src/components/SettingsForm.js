import React, { Component } from 'react';

class SettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.data };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleActive(input) {
        if (input.value !== '') {
            input.parentNode.classList.add('active');
        } else {
            input.parentNode.classList.remove('active');
        }
    }

    prepData() {
        return {
            data: {
                display_name: this.state.display_name,
                bio: this.state.bio,
                email: this.state.email
            }
        };
    }

    putForm(data) {
        fetch('https://api-dev.pinster.io/v1/me', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
        })
            .then(
                results => {
                    return results.json();
                },
                error => {
                    console.error(error);
                }
            )
            .then(response => {
                // post op
            });
    }

    handleChange(event) {
        const input = event.target;
        const name = input.name;
        this.setState({ [name]: input.value });
        this.toggleActive(input);
    }

    handleSubmit(event) {
        this.putForm(this.prepData());
        event.preventDefault();
    }

    componentDidMount() {
        const form = this;
        document
            .querySelectorAll('.form-group input, .form-group textarea')
            .forEach(function(input) {
                form.toggleActive(input);
            });
    }

    render() {
        return (
            <form className="my-settings" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="display_name">display name</label>
                    <input
                        type="text"
                        id="display_name"
                        name="display_name"
                        defaultValue={this.state.display_name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows="8"
                        onChange={this.handleChange}
                        defaultValue={this.state.bio}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group form-action">
                    <input type="submit" id="submit" name="submit" value="save changes" />
                    <input type="reset" id="cancel" name="cancel" value="cancel" />
                </div>
            </form>
        );
    }
}

export default SettingsForm;