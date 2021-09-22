import React, { FC, useState } from 'react';

export interface ChatFormProps {
    onSendMessage: (message: string) => void
}

export const ChatForm: FC<ChatFormProps> = (props) => {
    const [message, setMessage] = useState<string>("");
    
    return (
        <div>
            <input value={message} onInput={(event) => setMessage(event.currentTarget.value)} type="text" />
            <button onClick={() => props.onSendMessage(message)} type="submit">Send</button>
        </div>
    )
}