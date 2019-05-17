import React from "react";

class Search extends React.Component {
    render(){
        return(
            <div style={{width: "60%"}}>
                <form onSubmit={this.props.getProfileInfo} style={{color: "black"}}>
                    <input type="text" name="search" placeholder="Search..."/>
                    <button>Show</button>
                </form>

            </div>
        );
    }
}

export default Search;