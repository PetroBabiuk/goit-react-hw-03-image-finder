import { Component } from 'react';
// import { toast } from 'react-toastify';

class SearchForm extends Component {
    
    render() {
        return (
            <div>{this.props.query}</div>
        );
    };
};

export default SearchForm;