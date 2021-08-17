import React,{Component} from 'react';  

class Message extends React.Component {
    render() {
      var {message} = this.props;
      return (
        <div>
          {/* Message*/}
            <h3>
              <span className="badge amber darken-2">{message}</span>
          </h3>
        </div>
      );
    } 
}
export default Message;
