import React, { FC, useState } from 'react';

export interface ChatFormProps {
    onSendMessage: (message: string) => void
}

export const ChatForm: FC<ChatFormProps> = (props) => {
    const [message, setMessage] = useState<string>("");
    
    const handleOnSubmit = () => {
        props.onSendMessage(message);
        setMessage("");
    }

    const handelOnFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(event) => handelOnFormSubmit(event)}>
                <input value={message} onInput={(event) => setMessage(event.currentTarget.value)} type="text" />
                <button type="submit" onClick={() => { handleOnSubmit() }}>Send</button>
            </form>
        </div>
    )
}