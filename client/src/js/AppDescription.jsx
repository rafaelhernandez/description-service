import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Description from './Description.jsx';
import descriptionSample from '../../../db/data/description_sample.js';
import '../../css/style.scss';

class AppDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: props.roomId,
      description: descriptionSample
    };
  }

  componentDidMount() {
    this.props.roomId;
    this.getDescriptionForRoom(this.props.roomId);
  }

  getDescriptionForRoom(roomId) {
    axios.get(`/api/rooms/${roomId}/description`)
      .then((desc) => {
        this.setState({
          description: desc.data
        });
      })
      .catch(err => console.log('Error retrieving room ', roomId));
  }

  render() {
    return (
      <div className="div-description-app">
        <Description desc={this.state}></Description>
      </div>
    );
  }
}

window.AppDescription = AppDescription;
export default AppDescription = AppDescription;
