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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at AWS <span>May 2022- August 2022</span></h2>
                        <p>I designed and implemented a full-stack visualization tool to record and maintain organizational sentiment toward AWS and assist customer accounts team to better service client expectations. To accomplish this, I built python based API services using Amazon Lambda to manage application interaction with database. For security, I managed user authentication using API Gateway and setup authorization using Amazon Cognito</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Virtusa Corp<span>June 2021-August 2021</span></h2>
                        <p> I developed a python based algorithm to look at historical pricing and sales numbers and provide surge and lean pricing fluctuations to optimize product revenues. I started by refactoring the code base to move away from hardcoded client data and utilize dynamic database driven datasets. I also worked closely with clients and created Business Requirement Documents outlining project scope and deliverables. To stay organized, I built an Excel based metric mapping model to accompany requirement documents & assist with project tracking</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate at Rutgers University <span>2019-2023</span></h2>
                        <p>I am currently a senior majoring in Computer Science. In my time here, I have completed coursework such as Data Structure, Computer Architecture, Design & Algorithms, Network Programming, Software Methodology, Principles of Information and Data Management, and Data Management for Data Science. From my coursework, I developed a strong fundamental knowledge of Object-Oriented programming such as Java and Python and became interested in backend programming.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
