import React, { Component} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import './sidebar.css';
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: 0, scrollDuration: 200})


export default class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    scrollTo = () => {
        console.log('this .refs,', this.refs)
        console.log(' u were clicked')
        scrollToComponent(this.refs.section2)
    }

    render() {
        const { children } = this.props
        return (
            <div>

                <div id='side-bar'>
                    <div className='push-right'>
                        <h1>Abrar Sher</h1>
                    </div>
                    <ul className="list-group-flush list-group">
                        <a href='#about'><li className="list-group-item ">About Me</li></a>
                        <a href='#projects'><li className="list-group-item">Projects</li></a>
                        <a href='#links'><li className="list-group-item">Links</li></a>
                        <a href='#resume'><li className="list-group-item">Resume</li></a>
                    </ul>
                </div>
                <div id='children'>
                    {children}
                </div>
            </div>

        )
    }
}