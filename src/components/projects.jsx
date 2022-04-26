import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://phanvo.herokuapp.com/projects" target="_blank" rel="noopener noreferrer">Model-based generation of natural language specifications</a></h3>
											<ul>
												<li>Computer Science Honours thesis - individual project</li>
												<li>My achievements/skills: research skill, literature review, LaTex, Python, performance benchmark</li>
											</ul>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://phanvo.herokuapp.com/projects" target="_blank" rel="noopener noreferrer">NLP project to classify spam and non-spam YouTube comments</a></h3>
											<ul>
												<li>My role: AI Developer</li>
												<li>My achievements/skills: self-management, research skill, Python, Naive Bayes classification algorithm, bag-of-word model, Spyder IDE, Anaconda Navigator</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://phanvo.herokuapp.com/projects" target="_blank" rel="noopener noreferrer">Aquarium web project</a></h3>
											<ul>
												<li>My role: Web developer, requirements analysis and design</li>
												<li>My achievements/skills: self-management, research skill, HTML 5, CSS 3, JavaScript</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://phanvo.herokuapp.com/projects" target="_blank" rel="noopener noreferrer">Board Game (X vs Y) – "Mystic Ents"</a></h3>
											<ul>
												<li>My role: Java Developer</li>
												<li>My achievements/skills: teamwork skill, research skill, Java</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://phanvo.herokuapp.com/projects" target="_blank" rel="noopener noreferrer">Local Grocery Application</a></h3>
											<ul>
												<li>My role: C# developer</li>
												<li>My achievements/skills: self-management, research skill, C#, Windows forms, UI design, I/O handler, requirements analysis and design, database manipulation</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://phanvo.herokuapp.com/projects" target="_blank" rel="noopener noreferrer">MasonicVisitor</a></h3>
											<ul>
												<li>My role: iOS Developer</li>
												<li>My achievements/skills: teamwork skill, research skill, JSON, HTTP request</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
