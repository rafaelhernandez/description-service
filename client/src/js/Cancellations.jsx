import React from 'react';
const MAX_TEXT_LENGTH = 130;
function ShowAllText(props) {
  return (
    <div>
      {props.cancellation}
    </div>
  )
}

function EllipseText(props) {
  return (
    <div>
      {props.cancellation}<span>&hellip;</span><span className="a-description-fold" onClick={props.onClick}>Read more</span>
    </div>
  )
}

class Cancellations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ellipse: true,
      cancellationText: ''
    };
    this.readMoreClick = this.readMoreClick.bind(this);
    this.policies = {
      flexible: 'Cancel up to 24 hours before check in and get a full refund (minus service fees). Cancel within 24 hours of your trip and the first night is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.'
    };
  }

  componentDidMount() {
    this.cancellationExplanation(this.props.cancellationPolicy);
  }

  cancellationExplanation(cancellationPolicy) {
    if (this.policies[cancellationPolicy].length > MAX_TEXT_LENGTH) {
      this.setState({
        ellipse: true,
        cancellationText: this.policies[cancellationPolicy].slice(0, MAX_TEXT_LENGTH)
      });
    } else {
      this.setState({
        ellipse: false,
        cancellationText: this.policies[cancellationPolicy]
      });
    }
  }

  readMoreClick() {
    this.setState({
      ellipse: false,
      cancellationText: this.policies[this.props.cancellationPolicy]
    });
  }


  render() {
    let text;
    if (this.state.ellipse) {
      text = <EllipseText cancellation={this.state.cancellationText} onClick={this.readMoreClick}></EllipseText>;
    } else {
      text = <ShowAllText cancellation={this.state.cancellationText}></ShowAllText>;
    };

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
