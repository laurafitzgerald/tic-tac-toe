import React from 'react';
import { Button } from 'patternfly-react';

class MyTable extends React.Component {
  render() {
    return (
      <div>
    <div>
  <Button bsStyle="success" onClick={() => this.props.onClick()}>
  Success Button
  </Button>
  </div>
   
</div>

    	);
  }
}

export default MyTable;