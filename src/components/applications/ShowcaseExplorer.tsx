import React from 'react';
import { Route, Routes } from 'react-router-dom';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import Window from '../os/Window';
import About from '../showcase/About';
import Contact from '../showcase/Contact';
import Experience from '../showcase/Experience';
import Home from '../showcase/Home';
import Projects from '../showcase/Projects';
import SoftwareProjects from '../showcase/projects/Software';
import VerticalNavbar from '../showcase/VerticalNavbar';

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Abdul Azis Sukmawan - Showcase 2025"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2025 Abdul Azis Sukmawan'}
        >
            <div className="site-page">
                <VerticalNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/projects/software"
                        element={<SoftwareProjects />}
                    />
                </Routes>
            </div>
        </Window>
    );
};

export default ShowcaseExplorer;
