import React, { Component } from 'react';

class Searchbar extends Component {

  
  state = { term: ' ' }

  onFormSubmit = (e) => {
    e.preventDefault();
    
    this.props.onSubmit(this.state.term);
  }
  

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="ui inverted segment" bis_skin_checked="1">
            <div className="ui fluid inverted left icon input" bis_skin_checked="1">
                <input type="text" placeholder="Search..." value={this.state.term} onChange={(e)=>this.setState({term: e.target.value})}/>
                <i className="search icon"></i>
            </div>
            {this.props.imageNumber >0 ? <div style={{marginTop: '0.6rem'}}>Found : {this.props.imageNumber} Images</div> : <></>}
            
            <div className="ui inverted divider" bis_skin_checked="1"/>
        </div>
        
        </form>
      </div>
      
    )
  }
}

export default Searchbar;