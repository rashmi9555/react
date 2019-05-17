import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class Detail extends React.Component {
  state={
    clickedRepo: String
  }
  getClickedRepoName(repoName){
    console.log(repoName);
    this.setState({clickedRepo: repoName});
  };
  render(){
      if (!this.props.isLoaded) {
        return null;
      }else{
        return(
            <div style={{width: "60%"}}>
                
                <div className="row">
                    <div className="col-md-4">
                      {this.props.avatar_url && <img src={this.props.avatar_url} alt="Avatar URL" className="thumbnail" style={{width: "60%"}} />}
                    </div>
                    <div className="col-md-1">
                        {this.props.login && <p>{this.props.login}</p>}
                    </div>
                </div>
                
                <Tabs defaultIndex={0}>
                  <TabList>
                    <Tab>Repositries({this.props.public_repos})</Tab>
                    <Tab>Followers({this.props.followers})</Tab>
                    <Tab>Followering({this.props.following})</Tab>
                  </TabList>

                  <TabPanel>
                    <ul>
                      {this.props.repoName.map(function(repoName, index){
                        return <li key={ index } onClick={() => this.getClickedRepoName(repoName)}>{repoName}</li>;
                      },this)}
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      {this.props.followerLogin.map(function(followerName, index){
                        return <li key={ index }>{followerName}</li>;
                      })}
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      {this.props.followingLogin.map(function(followingName, index){
                        return <li key={ index }>{followingName}</li>;
                      })}
                    </ul>
                  </TabPanel>

                </Tabs>
                {this.props.error && <p>{this.props.error}</p>}

            </div>    
        );
      }
    }
}

export default Detail;
