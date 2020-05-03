import React from 'react';

class SearchBar extends React.Component{

    state = {searchTerm: ''}
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.callApiSearch(this.state.searchTerm);
        this.setState({searchTerm: ''});
    }
    render(){
        return(
            <div onSubmit={this.onFormSubmit} className='search-bar ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Enter key to search</label>
                        <br></br>
                        <input value={this.state.searchTerm} onChange={(e)=>this.setState({searchTerm: e.target.value})} type='text'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;