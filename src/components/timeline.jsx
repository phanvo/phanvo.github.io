import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Co-op developer <span>May, 2021 – Dec, 2021</span></h2>
                        <h4>Ontario Ministry of Children, Community and Social Services, Canada </h4>
                        <ul>
                          <li>Use appropriate research tools and analytical methodologies to identify issues, problems or opportunities when supporting staff members in resolving issues and recommending options for consideration;</li>
                          <li>Work cooperatively and collaboratively, to achieve group and organizational goals to present information using traditional and/or digital media in a clear, concise manner;</li>
                          <li>Collect, organize activities and information for Ontario Public Service;</li>
                          <li>Work closely with team to troubleshoot production issues, provide software application support by performing system verification, involving databases via SQL server and software development using C# for Ministries' internal system, as well as help with quality control in Jira</li>
                          <li>Collaborate with a cross-functional team to gain understanding and influence business requirements to ensure excellent quality</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full-stack developer <span>May, 2017 – Oct, 2019</span></h2>
                        <h4>EdgeWorks, Vietnam</h4>
                        <ul>
                          <li>Developed, implemented and maintained robust web applications using various technologies including Ruby on Rails, PHP, PostgreSQL, MySQL, MongoDB, JavaScript, Python, HTML, CSS...</li>
                          <li>Worked on front-end frameworks such as Bootstrap, AngularJS, Sencha ExtJS</li>
                          <li>Performed code verification and determined recommendations for adaptation</li>
                          <li>Researched, evaluated and integrated tools for development, configuration management and deployment, using Phusion Passenger, Git, Nginx, Docker, CI/CD...</li>
                          <li>Maintained legacy systems by fixing defects and occasionally perform major overhauls</li>
                          <li>Contributed with showing responsibility to customers, mainly abroad, e.g. US, European, Australian…</li>
                          <li>Discussed with clients to collect requirements and developed specifications</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mobile developer <span>March, 2012 – February, 2014</span></h2>
                        <h4>Glandore Systems, Vietnam</h4>
                        <ul>
                          <li>Responsible for maintaining iOS/Android apps by fixing defects and optimizing layouts/ behaviors</li>
                          <li>Edited a proposal for thoughts of app marketing & viral strategy for company seminars</li>
                          <li>Implemented and optimized various iOS/Android projects based on client needs</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mobile intern <span>October, 2011 – February, 2012</span></h2>
                        <h4>Floating Cube Studios, Vietnam</h4>
                        <ul>
                          <li>Self-leaned basis of Objective C programming language and XCode IDE</li>
                          <li>Developed backend method functions and delegated data source for iPhone’s file/folder syncing application based on iCloud, a cloud storage system from Apple technology</li>
                          <li>Researched and implemented an early prototype for iPhone game using Cocos2D framework for game engine and Box2D for rich body physics engine</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mobile intern <span>Jan, 2010 – May, 2010</span></h2>
                        <h4>MultiNC, Vietnam</h4>
                        <ul>
                          <li>Participated as junior developer on Android framework in the project “Social networking for Mobile” (Somo), which is based on questions/answers and votes on many specific topics with media data (image, audio, video…)</li>
                          <li>Worked with Android APIs to improve UI/ testing alpha version in Eclipse IDE.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IT Support Engineer <span>Mar, 2009 – May, 2009</span></h2>
                        <h4>Viivue Web Design Company, Vietnam</h4>
                        <ul>
                          <li>Troubleshot customers’ technical problems</li>
                          <li>Researched IT problems and organized company’s documents</li>
                          <li>Competently communicated with clients to understand their requirements</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
