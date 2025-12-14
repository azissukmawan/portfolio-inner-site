import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            {/* Current Job */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Airnav Indonesia</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.airnavindonesia.co.id/'}
                        >
                            <h4>airnavindonesia.co.id</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Backend Developer Intern</h3>
                        <b>
                            <p>Nov 2025 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Developed an event management API using Laravel, creating CRUD endpoints
                    and an auto-generate certificate feature with dynamic names and numbers.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designed Role-Based Access Control (RBAC), integrated Minio object storage
                            utilizing presigned URLs.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented an image compression feature for optimized storage.
                        </p>
                    </li>
                </ul>
            </div>

            {/* DOKU */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>DOKU</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.doku.com/'}
                        >
                            <h4>doku.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Backend Engineer Intern</h3>
                        <b>
                            <p>Nov 2024 - May 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Maintained Payment Gateway service stability by fixing issues in Kafka Listener
                    and resolving cache problems in Redis for various payment methods.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Enhanced user functionality and security by implementing transaction details
                            feature and integrating a Risk Engine into the Isaku payment channel.
                        </p>
                    </li>
                    <li>
                        <p>
                            Initiated system modernization through technical exploration of Spring Boot
                            and gRPC to support the development of more observable features in the future.
                        </p>
                    </li>
                    <li>
                        <p>
                            Ensured project clarity and alignment by updating OpenAPI documentation and
                            collaborating cross-functionally using Jira and Confluence.
                        </p>
                    </li>
                </ul>
            </div>

            {/* SchoolTech Indonesia */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>SchoolTech Indonesia</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://schooltechindonesia.com/'}
                        >
                            <h4>schooltechindonesia.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Backend Developer Intern</h3>
                        <b>
                            <p>Apr 2024 - Jul 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Developed RESTful APIs for a School Management System using Laravel, including
                    the implementation of JWT authentication, an Admin Dashboard, and API versioning.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Performed bug fixes, managed database relationships, and ensured optimal
                            system performance.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated within a team using ClickUp for project management and
                            GitHub for version control.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Bangkit Academy */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Bangkit Academy</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://grow.google/intl/id_id/bangkit/'}
                        >
                            <h4>grow.google/bangkit</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Machine Learning - Project Based</h3>
                        <b>
                            <p>Nov 2023 - Jan 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Create Machine Learning models using TensorFlow, applied Machine Learning
                    models with web service API, and collaborated with an Android development
                    and cloud computing team to create a financial management application with
                    machine learning-based analysis features.
                </p>
            </div>

            {/* ESQ Group */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>ESQ Group</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://esqgroup.co.id/'}
                        >
                            <h4>esqgroup.co.id</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Data Analyst Intern</h3>
                        <b>
                            <p>Aug 2023 - Oct 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Processed and cleaned transaction data from multiple databases. Conducted
                    exploratory data analysis using MySQL and Power BI to unify datasets,
                    remove inconsistencies, and create visual reports that supported improvements
                    in ESQ training sales.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
