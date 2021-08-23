import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.maxChars,
      message: "",
    };
  }

  handleMessage = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

    



  render() {
    let m = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          onChange={(event) => this.handleMessage(event)}
          //onKeyPress={() => this.handleCount()}
          value={this.state.message}
        />
        {m}
      </div>
    );
  }
}

export default TwitterMessage;
