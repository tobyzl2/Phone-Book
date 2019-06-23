import React from 'react';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  callAPI() {
    fetch('http://localhost:8000')
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return <Table data={this.state.data} />;
  }
}

export default App;
