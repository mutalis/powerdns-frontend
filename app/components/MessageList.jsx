import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'one',
        'two'
      ]
    };
  }

  render (){
    const messagesNodes = this.state.messages.map((message)=>{
      return(
        <Message message={message} />
      );
    });

    return (
      <div>{messagesNodes}</div>
    );
  }
}

export default MessageList;
