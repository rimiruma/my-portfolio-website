
import React from 'react';

import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Education from '../Educations/Education';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import Me from '../AboutMe/Me';
// import Contact from '../Contact/Contact';

import { Snowfall } from 'react-snowfall';
import ScrollReveal from '../../../ScrollReveal/ScrollReveal';


const Home = () => {

    return (
        <div>

            {/* Snow Effect */}
            <Snowfall
                snowflakeCount={120}
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 1,
                    pointerEvents: "none"
                }}
            />

            {/* Banner */}
            <Banner />

            {/* About Me */}
            <ScrollReveal>
                <Me />
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal>
                <Skills />
            </ScrollReveal>

            {/* Projects */}
            <ScrollReveal>
                <Projects />
            </ScrollReveal>

            {/* About Section */}
            <ScrollReveal>
                <AboutMe />
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal>
                {/* <Contact /> */}
            </ScrollReveal>

        </div>
    );
};

export default Home;
