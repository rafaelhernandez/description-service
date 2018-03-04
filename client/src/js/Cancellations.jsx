import React from 'react';
const MAX_TEXT_LENGTH = 130;

const ShowAllText = props => (
  <div>
    {props.cancellation}
  </div>
);

const EllipseText = props => (
  <div>
    {props.cancellation}<span>&hellip;</span><span className="a-description-fold" onClick={props.onClick}>Read more</span>
  </div>
);

class Cancellations extends React.Component {
  constructor(props) {
    super(props);
    this.readMoreClick = this.readMoreClick.bind(this);
    this.policies = {
      flexible: 'Cancel up to 24 hours before check in and get a full refund (minus service fees). Cancel within 24 hours of your trip and the first night is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.',
      moderate: 'Cancel up to 5 days before check in and get a full refund (minus service fees). Cancel within 5 days of your trip and the first night is non-refundable, but 50% of the cost for the remaining nights will be refunded. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.',
      strict: 'Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.'
    };
    this.state = {
      ellipse: true
    };
  }

  readMoreClick() {
    this.setState({
      ellipse: false,
    });
  }

  render() {
    let cancellationText = this.policies[this.props.cancellationPolicy];
    let text;
    if (this.state.ellipse && this.policies[this.props.cancellationPolicy].length > MAX_TEXT_LENGTH) {
      cancellationText = this.policies[this.props.cancellationPolicy].slice(0, MAX_TEXT_LENGTH);
      text = <EllipseText cancellation={cancellationText} onClick={this.readMoreClick}></EllipseText>;
    } else {
      text = <ShowAllText cancellation={cancellationText}></ShowAllText>;
    }

    return (
      <div className="div-description-cancellations">
        <div className="div-description-section-header">
          Cancellations
        </div>
        <div className="div-description-cancellations-type div-description-separator-margin">
          {this.props.cancellationPolicy.charAt(0).toUpperCase() + this.props.cancellationPolicy.slice(1)}
        </div>
        {text}
        <div>
          <p className="div-description-separator-margin">
            <a className="a-description-fold" href="#">Get details</a>
          </p>
        </div>
      </div>
    );
  }
}


export default Cancellations;
