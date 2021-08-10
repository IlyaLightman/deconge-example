import { Slides } from 'deconge'
import React from 'react'

const Greeting: React.FC<{ next: string }> = ({ next }) => <Slides
    slides={[
        {
            type: 'simple',
            title: 'Simple slide',
            content: 'With some useful content',
        },
        {
            type: 'simple',
            content: 'Another cool slide',
        },
    ]}
    background={{
        type: 'animgradient',
        colors: ['rgb(112,109,239)', 'rgb(218,123,239)', 'rgb(105,101,234)'],
        time: '20'
    }}
    animation='fadein'
    redirectAfter={ next }
/>

export default Greeting
