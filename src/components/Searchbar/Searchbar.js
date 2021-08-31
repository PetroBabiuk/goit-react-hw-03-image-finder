import { Component } from 'react';
import shortid from 'shortid';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    // state = {
    //     name: '',
    //     number: '',
    // };

    // nameInputId = shortid.generate();
    // numberInputId = shortid.generate();

    // handleChange = (evt) => {
    //     const { name, value } = evt.currentTarget;

    //     this.setState({
    //      [name]: value,
    //     });
    // };

    // handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     this.props.onSubmit(this.state);
    //     this.reset();
    // };

    // reset = () => {
    //     this.setState({
    //         name: '',
    //         number: '',
    //     });
    // };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    };
};

export default Searchbar;