import React from "react";

const Search = props => (
    <div className="form-inline search">
    <form onSubmit={props.getProfileInfo}>
        <div className="form-group">
            <input type="text" className="form-control" name="search" placeholder="Enter a github username"/>
        </div>
        <button className="btn btn-success">Show</button>
    </form>
    </div>
)

/*class Search extends React.Component {
    render(){
        return(
            <div className="form-inline search">
                <form onSubmit={this.props.getProfileInfo} style={{color: "black"}}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="search" placeholder="Enter a github username"/>
                    </div>
                    <button className="btn btn-success">Show</button>
                    
                </form>

            </div>
        );
    }
}*/

export default Search;