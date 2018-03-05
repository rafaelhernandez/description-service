import React from 'react';

const ThumbnailPicture = props => (
  <div className="div-description-user-thumbnail-picture">
    <img className="div-description-user-thumbnail_url" src={props.user.thumbnail_url}></img>
    <div className="div-description-user-first-name">
      {props.user.first_name}
    </div>
  </div>
);

export default ThumbnailPicture;
