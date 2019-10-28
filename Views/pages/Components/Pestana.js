import React, { Component } from 'react';
import GoJs from './Dfd.jsx';

class Pestana extends Component {
  render() {
    return (
      <nav>

        <nav>
          <div className="nav nav-tabs bg-dark" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"> {this.props.n_file}</a>
          </div>
        </nav>
        <div className="tab-content bg-dark text-white" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
            <GoJs data={[{
              key: 1,
              category: "Start",
              text: "Start",
              color: '#C0CA33',
              loc:"154 -132",
              fig: "Circle"
            }/*,
            {
              key: 2,
              category: "Step",
              text: "Welcome=\"DFD block\"",
              color: "#DC7633",
              loc:"154.30929565429688 24",
              fig: "Rectangle"
            }*/, {
              key: 100,
              category: "End",
              text: "End",
              color: "#641E16",
              loc:"154 141.99999999999997",
              fig: "Circle"
            }]
            }
              links={
                [
                ]
              } />
          </div>
        </div>


      </nav>
    );
  }

}

export default Pestana;