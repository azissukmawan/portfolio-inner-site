import React from 'react';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
// @ts-ignore
import ngobrol from '../../../assets/pictures/projects/software/ngobrol.mp4';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on.
                These projects showcase my skills in backend development, API design,
                cloud computing, and machine learning integration.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>API Dompetku</h2>
                <br />
                <p>
                    API Dompetku is a personal finance management API that helps users
                    track their income, expenses, and budgets. Built with modern backend
                    technologies, this project demonstrates my ability to design and
                    implement RESTful APIs with proper authentication and data management.
                </p>
                <br />
                <p>
                    The API features user authentication, transaction management,
                    category-based expense tracking, and financial reporting capabilities.
                    It's designed with scalability and security in mind.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/azissukmawan/api-dompetku"
                        >
                            <p>
                                <b>[GitHub]</b> - API Dompetku Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>SaveMoney - Capstone Project</h2>
                <br />
                <p>
                    SaveMoney is a capstone project developed during Bangkit Academy 2023.
                    This collaborative project integrates mobile development, machine learning,
                    and cloud computing to create a comprehensive personal finance solution.
                </p>
                <br />
                <p>
                    As part of the Cloud Computing team, I was responsible for designing
                    and implementing the backend infrastructure on Google Cloud Platform,
                    including API development, database management, and deployment pipelines.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/SaveMoneyCapstone"
                        >
                            <p>
                                <b>[GitHub]</b> - SaveMoney Capstone Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Sybill Detection</h2>
                <br />
                <p>
                    Sybill Detection is a project that implements machine learning
                    algorithms to detect sybil attacks in networks. This project
                    combines backend development with ML model integration to provide
                    real-time detection capabilities.
                </p>
                <br />
                <p>
                    The system uses various features and patterns to identify potentially
                    malicious nodes in a network, helping to maintain system integrity
                    and security.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/azissukmawan/sybill-detection"
                        >
                            <p>
                                <b>[GitHub]</b> - Sybill Detection Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Ngobrol - Social Media Application</h2>
                <br />
                <p>
                    This web application is made with the MVC pattern that uses the native PHP language,
                    the MVC pattern that is being studied in a web application course,
                    therefore my final semester assignment group and I worked on a web application case study with this MVC pattern
                    with a simple social media theme inspired by tweeters but not completely tweeter-like XD.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={ngobrol} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Ngobrol web application
                                demo, featuring social media feature.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Features include user authentication,View profiles and view other profiles
                    Update profiles, Post uploads, Post updates, Delete posts, Like posts,
                    Post comments.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/azissukmawan/Ngobrol"
                        >
                            <p>
                                <b>[GitHub]</b> - Ngobrol Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://ngobrol.amawan.app/"
                        >
                            <p>
                                <b>[website]</b> - ngobrol.amawan.app
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Gamsit</h2>
                <br />
                <p>
                    Gamsit is a project that showcases my development skills in
                    creating practical applications. This project demonstrates
                    clean code architecture and best practices in software development.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/azissukmawan/gamsit"
                        >
                            <p>
                                <b>[GitHub]</b> - Gamsit Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Microservice Warehouse API</h2>
                <br />
                <p>
                    Microservice Warehouse API is a backend system designed using
                    microservices architecture. This project demonstrates my understanding
                    of distributed systems, service communication, and scalable backend design.
                </p>
                <br />
                <p>
                    The system includes multiple services for inventory management,
                    order processing, and warehouse operations, all communicating
                    through well-defined APIs. It showcases best practices in
                    microservices design including service discovery, load balancing,
                    and fault tolerance.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/azissukmawan/microservice-warehouse-api"
                        >
                            <p>
                                <b>[GitHub]</b> - Microservice Warehouse API Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
