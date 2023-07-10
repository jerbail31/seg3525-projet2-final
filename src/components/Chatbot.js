import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import avatar from './avatar.png';
import client from './client.png';
//import bot from './bot.svg';

const Chatbot = () => {
    const steps = [
        {
            id: '1',
            options: [
                { value: 1, label: 'Talk to our bot', trigger: 'bot' },
                { value: 2, label: 'Talk with Chase', trigger: 'human' },
            ],
        },
        {
            id: 'botInput',
            user: true,
            trigger: 'bot2',
        },
        {
            id: 'bot',
            message: 'Hello! You are talking with me Beepboop. How may I help you today?',
            trigger: 'botInput',
        },
        {
            id: 'bot2',
            message: 'Beepboop: answer',
            trigger: 'botInput',
        },
        {
            id: 'humanInput',
            user: true,
            trigger: 'human2',
        },
        {
            id: 'human2',
            message: 'Thank you for your message. I will respond to your message via email as soon as possible.',
            trigger: 'humanInput',
        },
        {
            id: 'human',
            message: 'This is a website integrated chat box to chat with me about upcomming appointments, service issues or any other requests. I should answer your request within 1 business day. You will recieve our response via email. With that said, how can I assist you?',
            trigger: 'humanInput',
        },
    ];

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Arial, sans-serif',
        headerBgColor: '#3BB44B',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#3BB44B',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#3BB44B',
    };

    const config = {
        botAvatar: avatar,
        userAvatar: client,
        hideHeader: false,
        placeholder: 'Type the message',
        width: '100%',
        height: '350px',
        headerTitle: '',
    };

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={steps}
                {...config}
            />
        </ThemeProvider>
    );
};

export default Chatbot;
