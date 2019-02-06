import React from 'react';
import { Button } from 'patternfly-react';

class MyTable extends React.Component {
  render() {
    return (
	
<Button bsStyle="success" onClick={() => this.props.onClick()}>
Success Button
</Button>


    	);
  }
}

export default MyTable;