import { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
    state = {
        inputValue: '',
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.inputValue.trim() === '') {
          return toast.error('Please do not use empty string, you have to write something');
        }

        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    
    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        />
                </form>
            </header>
        );
    };
};

export default Searchbar;