import React, { Component } from 'react'

export default class about extends Component {
    render() {
        return (
                <div>
                    <div style={{
                        height: '70vh',
                        textAlign: 'center',
                        fontSize: '4rem',
                        display: 'table',
                        width: '100%',
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,.7)), url(${require('../assets/img/bg-masthead.jpg')})`
                    }}>
                        <p style={{
                            display: 'table-cell',
                            verticalAlign: 'middle',
                            textAlign: 'center',
                            color: 'white'
                        }}>
                            About Us
                        </p>
                    </div>
                </div>
        )
    }
}
