import React, { FC } from 'react';

export interface MessageViewerProps {
    messagesToShow: string[]
}

export const MessageViewer: FC<MessageViewerProps> = (props) => {
    return (
        <div>
            <ul>
                {
                    props.messagesToShow.map(message => {
                        return (<li key={message}>{ message }</li>)
                    })
                }
            </ul>
        </div>
    )
}