import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am experienced in software industry with passions for web applications and software development using various tools. I enjoy learning and trying out recent technology until I understand it thoroughly; I do not give up until I am, indeed, able to apply it. A working environment where I am encouraged to do research, and where I can contribute with feedback, rather than just executing a plan, suits me best. I am glad to work with a team of like-minded colleagues and see my further career in this direction: R&D and providing excellent results that work for the client.</p>
                    <p>I am currently studying for a Fast-track Advanced Diploma in Software Engineering Technology – Artificial Intelligence (AI). I am motivated in quite a range of innovative areas such as machine learning and AI, seeking to problem-solving and research work to enhance skills. Two years ago, I was involved in various web and software projects, and participated in every stage of the development life cycle, plus a minor in project management.</p>
                    <p>I am also accustomed to troubleshooting issues related to software installation and setup, and experienced with database design, website development and programming concepts. The tech world is ever changing and evolving, so the desire and willingness to learn is a crucial skill, as well as the strong work ethic with attention to details and the dedication to achieve all tasks under pressure.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Education */}
        <section>
            <div className="colorlib-narrow-content">
                <h2 className="heading-meta">Education</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h4 class="mb-0">Fast Track Software Engineering Technology - Artificial Intelligence</h4>
                        <div class="subheading mb-3">Centennial College, ON, Canada</div>
                        <p>GPA: 4.38<br />September 2020 - Present</p>
                    </div>
                    
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h4 class="mb-0">Post-graduate Computing and Information Systems</h4>
                        <div class="subheading mb-3">Douglas College, BC, Canada</div>
                        <p>GPA: 4.08<br />January 2020 – August 2020</p>
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h4 class="mb-0">Bachelor of Computer Science (Honours) – 1 year research</h4>
                        <div class="subheading mb-3">RMIT University, Melbourne, Australia</div>
                        <p>First Class Honours - GPA: 3.9<br />February 2016 – March 2017</p>
                        <p>Research paper was published in the Software Technologies: Applications and Foundations (STAF, rank B) 2016, 3rd International Workshop on Human-Oriented Formal Methods (HOFM 2016), Springer
                            <br />
                            Link: <a href="http://link.springer.com/chapter/10.1007%2F978-3-319-50230-4_16" target="_blank" rel="noopener noreferrer">http://link.springer.com/chapter/10.1007%2F978-3-319-50230-4_16</a>
                        </p>
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h4 class="mb-0">Bachelor of Information Technology</h4>
                        <div class="subheading mb-3">RMIT International University, Ho Chi Minh City, Vietnam</div>
                        <p>GPA: 3.7<br />Graduated in 2012</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Web development</h3>
                    <ul style={{textAlign: "left"}}>
                        <li>Standards compliant web apps built using open source technologies, particularly Ruby on Rails with PostgreSQL database.</li>
                        <li>Scalable architecture optimized for cloud platform built using Amazon Web Services.</li>
                        <li>Experienced in back-end API services using Node.JS</li>
                        <li>Integration with front-end frameworks such as Bootstrap, AngularJS, Sencha ExtJS, ExpressJS, JavaScript, ReactJS, HTML, CSS</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Mobile development</h3>
                    <ul style={{textAlign: "left"}}>
                        <li>Stylish apps for iOS (iPad / iPhone) and Android platforms using native "look and feel" of the device where possible, but have expertise with HTML5 and cross-platform frameworks such as Sencha Touch.</li>
                        <li>Interact or sync with web-based content management systems and database-driven web applications using SOAP or RESTful web services.</li>
                        <li>Integration with social media such as FourSquare, Twitter, Facebook, etc.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-lightbulb" />
                </span>
                <div className="desc">
                    <h3>Other capabilities</h3>
                    <ul style={{textAlign: "left"}}>
                        <li>Software design with UML (StarUML) and mock-up user interface with Balsamiq tool</li>
                        <li>Experienced in distributed version control systems: TortoiseSVN, Unfuddle, GitLab, GitHub…</li>
                        <li>Experienced in Python, Java, Objective C, C/C++, C#</li>
                        <li>Proven skills in IDEs (NetBeans, Eclipse, Visual Studio, XCode), applications (MS office, Google apps…)</li>
                        <li>Familiar with most of Google applications and team management tools (Gantt chart, MS teams)</li>
                    </ul>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
