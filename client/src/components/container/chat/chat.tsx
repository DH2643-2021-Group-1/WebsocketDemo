import React, { FC, useEffect, useState } from 'react';
import { ChatForm } from '../../presenters/chat-form/chat-form';
import { MessageViewer } from '../../presenters/message-viewer/message-viewer';


export const Chat: FC = (props) => {
    const [activeSocket, setActiveSocket] = useState<WebSocket | null>(null)
    const [chatHistory, setChatHistory] = useState<string[]>([])
    
    useEffect(() => {
        /** TODO: Connect to websocket */
    }, [])
    
    const updateChatHistory = (newMessage: string) => {
        setChatHistory(oldChatHistory => [...oldChatHistory, newMessage]);
    }

    const sendMessage = (messageToSend: string) => {
        updateChatHistory(messageToSend);
        /** TODO: Send message to server */
    }

    return (
        <>
            <MessageViewer messagesToShow={chatHistory} ></MessageViewer>
            <ChatForm onSendMessage={sendMessage} ></ChatForm>
        </>
    )
}