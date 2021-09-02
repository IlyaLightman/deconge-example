import { Messenger } from 'deconge'
import React from 'react'

const SimpleMessenger: React.FC<{ next: string }> = ({ next }) => <Messenger
    redirectAfter={ next }
    msgs={ messengerMsgs }
    responses={ messengerResponses }
    collection={ messengerCollection }
    background={ messengerBackground }
    collectedTitle={ 'Endings collected: ' }
    message={ {
        background: 'rgba(138,182,255,1)'
    } }
    response={ {
        hoverAnimGradientColors: ['rgba(255,171,216,1)', 'rgba(255,118,231,1)', 'rgba(242,111,241,1)', 'rgba(240,63,255,1)']
    } }
    collectItem={ {
        background: 'rgb(159, 127, 245)'
    } }
    resetButton={ {
        background: 'rgba(206,103,232,1)',
        hover: 'rgba(142,139,255,1)',
        color: 'white'
    } }
    resetButtonText={ 'Reset' }
    nextButton={ {
        background: 'rgb(123,194,51)',
        hover: 'rgb(62,170,220)',
        color: 'white'
    } }
    nextButtonText={ 'Done!' }
    collectItemButton={ {
        background: '#f3c9ff',
        hover: '#d884ee',
        color: 'black'
    } }
    collectItemButtonText={ 'Go next' }
/>

const messengerMsgs = [
    { text: 'Hi, and welcome to the greeting card website created with Deconge!', responses: [0, 1, 2] },
    {
        text: 'It is a simple React library (or even framework) which allows you to create magnificent greeting cards',
        responses: [3, 4]
    },
    { text: 'There is a Messenger! Just have a dialogue, collect the endings and have fun ;)', responses: [5, 4] },
    { text: `You don't like to be here so much?`, responses: [6, 7] },
    { text: 'Thank you!', collect: 0 },
    { text: 'I am sorry you did not like it(', collect: 1 },
    { text: 'Good bye, my friend!', collect: 2 }
]

const messengerResponses = [
    { text: 'Good evening. And what is it your Deconge?', msg: 1 },
    { text: 'Hello, so, what I have to do here?', msg: 2 },
    { text: 'Shut up. How to get out?', msg: 3 },
    { text: `That's great!`, msg: 4 },
    { text: `It's very bad idea, and realization is.... lurid`, msg: 5 },
    { text: 'Okay, Messenger is the part of Deconge, but what Deconge is?', msg: 1 },
    { text: 'You right. I want to go out right now.', msg: 6 },
    { text: 'Sorry, it was rude, are you able to tell me about this page? о_о', msg: 2 }
]

const messengerCollection = [
    { title: 'Thanks for watching!!!', text: 'Deconge likes you ;)' },
    { title: 'Sorry(', text: 'We will try to improve Deconge' },
    { title: 'The worst ending', text: 'Congratulations. You got it.' }
]

const messengerBackground = {
    type: 'animgradient',
    colors: ['rgba(83,79,244,1)', 'rgba(170,51,200,1)', 'rgba(83,79,244,1)'],
    time: '30'
}

export default SimpleMessenger
