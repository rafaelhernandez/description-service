import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: props.roomId,
      description: {}
    }
  }

  componentDidMount() {
    this.props.roomId
  }

  getDescriptionForRoom(roomId) {
    axios.get(`/room/${roomId}`)
      .then((desc) => {
        this.setState({
          description: desc
        });
      })
      .catch(err => console.log('Error retrieving room ', roomId));
  }

  render() {
    return (
      <div className="div-app">
        App goes here
      </div>
    );
  }
}

ReactDOM.render(<App roomId="2736358"></App>, document.getElementById('app'));
