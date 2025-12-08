import React from 'react';
import ResumeDownload from '../ResumeDownload';

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
                <h2>Ngobrol - Chat Application</h2>
                <br />
                <p>
                    Ngobrol is a real-time chat application that enables users to
                    communicate seamlessly. The project demonstrates my skills in
                    building real-time applications with WebSocket technology and
                    managing user sessions.
                </p>
                <br />
                <p>
                    Features include real-time messaging, user authentication,
                    chat rooms, and message history. The backend is designed to
                    handle concurrent connections efficiently.
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
