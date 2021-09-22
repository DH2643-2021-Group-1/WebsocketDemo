import React, { FC, useEffect, useState } from 'react';
import { ChatForm } from '../../presenters/chat-form/chat-form';
import { MessageViewer } from '../../presenters/message-viewer/message-viewer';


export const Chat: FC = (props) => {
    const [activeSocket, setActiveSocket] = useState<WebSocket | null>(null)
    const [chatHistory, setChatHistory] = useState<string[]>([])
    
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.addEventListener('open', (event) => {
            console.log("Open");
            setActiveSocket(socket);
        });
        socket.addEventListener('message', (event) => {
            updateChatHistory(event.data);
        });
        return () => {
            socket.close();
        }
    }, [])
    
    const updateChatHistory = (newMessage: string) => {
        console.log([...chatHistory, newMessage]);
        setChatHistory(oldChatHistory => [...oldChatHistory, newMessage]);
    }

    const sendMessage = (messageToSend: string) => {
        console.log("Test");
        activeSocket?.send(messageToSend);
    }

    return (
        <>
            <MessageViewer messagesToShow={chatHistory} ></MessageViewer>
            <ChatForm onSendMessage={sendMessage} ></ChatForm>
        </>
    )
}