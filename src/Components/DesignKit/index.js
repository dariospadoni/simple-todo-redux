import styled from 'styled-components';

const HEADER_BG = '#eceff1';
const BORDER_COLOR = '#ddd';
const BUBBLE_BG = '#00B0FF';

const ChatApp = styled.div`
  border-radius: 5px;
  border: 2px solid ${BORDER_COLOR};
  color: #1A1A1A;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 97vh;
  margin: 10px;
  min-width: 320px;
  font-family: "Times New Roman", Times, serif;
`;
ChatApp.displayName = 'ChatApp';

const ChatHeader = styled.div`
  background-color: ${HEADER_BG};
  border-bottom: 2px solid ${BORDER_COLOR};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
  h1 {
    font-size: 20px;
    margin: 0;
    flex: 1;
  }
  
  .counter {
    margin-left: auto;
  }
`;
ChatHeader.displayName = 'ChatHeader';

const ChatMessages = styled.div`
  flex: 1;
  margin: 10px;
  overflow: scroll;
`;
ChatMessages.displayName = 'ChatMessages';

const ChatBubble = styled.div`
  background: ${BUBBLE_BG};
  border-radius: 7px;
  color: white;
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  position: relative;

  &:before {
    border: 10px solid transparent;
    border-right-color: ${BUBBLE_BG};
    border-left: 0;
    border-bottom: 0;
    content: '';
    height: 0;
    left: 0;
    margin-top: -10px;
    margin-left: -10px;
    position: absolute;
    top: 50%;
    width: 0;
  }
`;
ChatBubble.displayName = 'ChatBubble';

const ChatEditForm = styled.form`
  padding: 10px;
  width: 100% ;
  
  input {
    border: none;
    border-radius: 5px;
    line-height: 30px;
    width: 100%;
    
    &:focus {
      outline: none;
    }
  }
`;

const ChatMessage = styled.div`
  flex-grow: 1;
  padding: 10px;
`;

const ChatText = styled.div``;

const ChatTimeStamp = styled.small`
  color: #efefef;
  display: block;
  font-size: 12px;
  margin-left: 0px;
  margin-top: 10px;  
`;

const ChatAction = styled.a`
  cursor: pointer;
  flex: 0;
  font-size: 12px;
  padding: 24px 6px;
 
  &:hover {
    color: yellow;
    font-size: 13px;
  }
`;

const ChatInputForm = styled.form`
  border-top: 2px solid ${BORDER_COLOR};
  padding: 10px 5px;
  
  input {
    background-color: ${HEADER_BG};
    border: 1px solid ${BORDER_COLOR};
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }
`;

export {
  ChatInputForm, ChatText, ChatMessage, ChatTimeStamp, ChatAction, ChatEditForm, ChatBubble, ChatApp, ChatHeader, ChatMessages,
};
