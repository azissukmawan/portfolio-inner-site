import React from 'react';
import { Link } from 'react-router-dom';
import meNow from '../../assets/pictures/currentme.jpg';
import me from '../../assets/pictures/workingAtComputer.jpg';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Abdul Azis Sukmawan</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Fresh Graduate Computer Science with a strong passion for technology
                    and software development. Currently, I'm focusing on enhancing my skills
                    in backend development, exploring modern frameworks, and building efficient,
                    scalable applications. Eager to keep learning, experimenting, and contributing
                    to exciting tech projects.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:sukmawanabdul@gmail.com">
                        sukmawanabdul@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    I am a passionate backend developer who enjoys building robust
                    and scalable applications. My journey in programming started
                    with curiosity about how systems work behind the scenes, which
                    led me to specialize in backend development.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Me
                        </sub>
                    </p>
                </div>

                <p>
                    I have experience working with various technologies including
                    Java (Spring Boot), Node.js (NestJS), Golang (Fiber, Gin), Python (Flask, FastAPI),
                    and databases like PostgreSQL, MySQL, and MongoDB. I'm also
                    proficient in cloud services and containerization with Docker.
                </p>
                <br />
                <p>
                    Throughout my career, I've worked on various projects. You can
                    check out some of my projects on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Outside of the world of programming,
                            I have several hobbies that I enjoy in my spare time.
                            I really enjoy playing games—both competitive online games and single-player games with interesting stories.
                            Gaming is not only entertaining,
                            but it also helps me understand how games are built from a technical perspective.
                        </p>
                        <br />
                        <p>
                            Besides gaming, I also enjoy fishing.
                            Fishing provides a sense of calm and serves as a way for me to take a break from the hustle and bustle of coding.
                            There is a unique sense of satisfaction when you finally catch a fish after waiting patiently—similar to debugging,
                            which requires patience and precision.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, 2025
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. Feel free to check out my projects and reach out if
                    you have any questions!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:sukmawanabdul@gmail.com">
                        sukmawanabdul@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
