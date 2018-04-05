import React, { Component} from 'react';
import './main.css';
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project: ''
        }
    }

    open = (project) => {
        if (this.state.project === project) {
            this.setState({project: ''})
        } else if (this.state.project !== '') {
            this.setState({project: ''})
            setTimeout(() => {
                this.setState({project})
            }, 220)
        } else {
            this.setState({project})
        }
    }


    render() {
        const RESUME_LINK = 'https://drive.google.com/file/d/1GdXsZr6MEb6Dm08EqvLJqo1q_8b6HNSF/view?usp=sharing'
        const HEADER_TEXT = `
            Hey. My name is Abrar and welcome to my personal site. Here you can find a little more about me and what I'm up to. I hope you have fun checking it out.
        `

        const ABOUT_TEXT1 = `Abrar here. I’m an aspiring software developer looking to start a career in software development. During my freshman year at college, a friend and I started my own maid service. It took us about a month to go from idea to launch, and we ran it for around 6-7 months. I’d always wanted to study business and be an entrepreneur ever since my early days in high school, so that’s why I decided to start the business. However, during my time running it, I came across the world of web and software development and I slowly fell in love with it. I began studying on my own, taking courses online on Udemy.com, and other classes in the city. I then attended Fullstack Academy a few months later, taking the next semester off to attend.`
        const ABOUT_TEXT2 = `Now, I’m currently looking for internships or full-time/part-time work to really develop my skill set and gain more experience in a professional environment. I’ve never really been a big fan of a classroom environment, so the plan was to attend the bootcamp and start working full-time. I’ve found that to be difficult to do without a college degree, so now I’m back in school building projects and hoping to intern at places where I can really gain more experience. `
        return (
            <div className='main container-fluid'>
                <div className='back-img row'>
                    <div className='text-block'>
                        {/* <p>{HEADER_TEXT}</p> */}
                    </div>
                </div>     

                <ScrollableAnchor id='about'>
                    <div className='row'>
                        <div className='about'>
                            <p className='about-paragraph'>{ABOUT_TEXT1}</p>
                            <p className='about-paragraph'>{ABOUT_TEXT2}</p>
                        </div>
                    </div>
                </ScrollableAnchor>

                <ScrollableAnchor  id='projects'>
                    <div>
                        <div className='row'>
                            <div onClick={() => this.open('jobMapperWeb')} className='jobMapperWeb col-md-4 project-box'>
                                <h3>The JobMapperWeb</h3>
                                <p>
                                    I made a Web Platform that you can use to look for jobs in a specific area. You can search for jobs on a map, save them, and then apply to them on the comapny site. It uses the IndeedAPI to find jobs. 
                                </p>
                                <h6> Click this box to expand</h6>
                            </div>
                            <div onClick={() => this.open('faManager')}  className='faManager col-md-4 project-box'>
                                <h3>The FaManager</h3>
                                <p>
                                    I made a Web Platform that parents can you use to manager their childrens schoolwork, chores, grades, allowance, etc. 
                                </p>   
                                <h6> Click this box to expand</h6>   
                            </div>
                            <div onClick={() => this.open('advanceWars')}  className='advanceWars col-md-4 project-box'>
                                <h3>The Advance Wars Online</h3>
                                <p>
                                    Together with two friends, we made a video game recreation of Advance Wars. It's a turn based online strategy game with a ton of logic involved. 
                                </p>  
                                <h6> Click this box to expand</h6>                            
                            </div>
                        </div>
                        <div className={`row ${this.state.project ==='jobMapperWeb' ? 'not-hidden' : 'hidden'}`}>
                            <h3> this is the job mapper description</h3>
                        </div>
                        <div className={`row ${this.state.project ==='faManager' ? 'not-hidden' : 'hidden'}`}>
                            <h3> this is the famanager description</h3>
                        </div>
                        <div className={`row ${this.state.project ==='advanceWars' ? 'not-hidden' : 'hidden'}`}>
                            <h3> this is the adavance wars description</h3>
                        </div>
                        <div className={`row ${this.state.project ==='amazonClone' ? 'not-hidden' : 'hidden'}`}>
                            <h3> this is the amazon clone description</h3>
                        </div>
                        <div className={`row ${this.state.project ==='jobMapperApp' ? 'not-hidden' : 'hidden'}`}>
                            <h3> this is the jobMapperApp description</h3>
                        </div>
                        <div className={`row ${this.state.project ==='imageChecker' ? 'not-hidden' : 'hidden'}`}>
                            <h3> this is the imageChecker description</h3>
                        </div>

                        <div className='row'>
                            <div onClick={() => this.open('amazonClone')}  className='amazonClone col-md-4 project-box'>
                                <h3>The Amazon Clone</h3>
                                <p>
                                    Together with two classmates, we made a basic e-commerce site with all the basic features of an eccomerce site, persistance, authentication, carts, search feature, etc.
                                </p> 
                                <h6> Click this box to expand</h6> 
                            </div>
                            <div  onClick={() => this.open('jobMapperApp')}  className='jobMapperApp col-md-4 project-box'>
                                <h3>The JobMapperApp</h3>
                                <p>
                                    I made a Mobile App that you can use to look for jobs in a specific area. You can search for jobs on a map, save them, and then apply to them on the comapny site. It uses the IndeedAPI to find jobs.
                                </p>  
                                <h6> Click this box to expand</h6>
                            </div>
                            <div  onClick={() => this.open('imageChecker')}  className='imageChecker col-md-4 project-box'>
                                <h3>The ImageChecker ThingyMajingy</h3>
                                <p>
                                    I made a Mobile App that you can use to look for jobs in a specific area. You can search for jobs on a map, save them, and then apply to them on the comapny site. It uses the IndeedAPI to find jobs.
                                </p>  
                                <h6> Click this box to expand</h6>
                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>

                <ScrollableAnchor id='links'>
                    <div className='red-bar row'>
                        <div className='col-md-3 logo-box'>
                            <h4>Youtube</h4>
                            <img className='img-logo' src='https://image.flaticon.com/icons/svg/174/174883.svg'/>
                        </div>
                        <div className='col-md-3 logo-box'>
                            <h4>Google Plus</h4>
                            <img className='img-logo' src='https://image.flaticon.com/icons/svg/174/174851.svg'/>
                        </div>
                        <div className='col-md-3 logo-box'>
                            <h4>LinkedIn</h4>
                            <img className='img-logo' src='https://image.flaticon.com/icons/svg/174/174857.svg'/>
                        </div>
                        <div className='col-md-3 logo-box'>
                            <h4>Github</h4>
                            <img className='img-logo' src='https://image.flaticon.com/icons/svg/25/25231.svg'/>
                        </div>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id='resume'>
                    <div className='row'>
                        <iframe src="https://drive.google.com/file/d/1GdXsZr6MEb6Dm08EqvLJqo1q_8b6HNSF/preview" width="100%" height='1000px'></iframe>                    
                    </div>
                </ScrollableAnchor>
            </div>
        )
    }
}