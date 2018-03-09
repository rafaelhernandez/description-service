import React from 'react';
import AmenityItem from './AmenityItem.jsx';
import ModalAmenities from './ModalAmenities.jsx';
import SVGIcons from './SVGIcons.js';
import ReactModal from 'react-modal';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  componentWillMount() {
    if (typeof window !== 'undefined') {
      ReactModal.setAppElement('body');
    }
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render() {
    this.amenities = [[], []];
    if (this.props.amenities !== undefined) {
      let num = 0;
      for (let i = 0; i < this.props.amenities.length; ++i) {
        if (this.props.amenities[i] in SVGIcons) {
          this.amenities[num % 2].push(this.props.amenities[i]);
          ++num;
        }
        if (num > 5) {
          break;
        }
      }
    }
    return (
      <div className="div-description-amenities">
        <div className="div-description-section-header">
          Amenities
        </div>
        <div className="div-description-amenities-items">
          <div className="div-description-amenities-left">
            {this.amenities[0].map((amenity, idx) => <AmenityItem key={idx} amenity={amenity}></AmenityItem>)}
          </div>
          <div className="div-description-amenities-right">
            {this.amenities[1].map((amenity, idx) => <AmenityItem key={idx} amenity={amenity}></AmenityItem>)}
          </div>
        </div>
        <div>
          <a className="a-description-fold" onClick={this.handleOpenModal}>Show all {this.props.amenities && this.props.amenities.length} amenities</a>
          <ReactModal
            isOpen={this.state.showModal}
            className="modal-description-amenities-container"
            contentLabel="Amenities"
            onRequestClose={this.handleCloseModal}
          >          
            <div className="modal-description-amenities-top">
              <div className="div-description-scroll-wrapper">
                <button className="button-description-modal-close" onClick={this.handleCloseModal}>
                  <span dangerouslySetInnerHTML={{ __html: SVGIcons['Close Button'] }}></span>
                </button>
                <ModalAmenities amenities={this.props.amenities}></ModalAmenities>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Amenities;
