import React, { Component } from 'react';

class Pestana extends Component{
    render(){
    return(
            <nav>
                
                <nav>
  <div className="nav nav-tabs bg-dark" id="nav-tab" role="tablist">
    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"> { this.props.n_file }</a>
  </div>
</nav>
<div className="tab-content bg-dark text-white" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >  { this.props.contenido } </div>
</div>


            </nav>
        );
    }

}

export default Pestana;