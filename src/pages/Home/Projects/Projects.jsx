import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://my-portfolio-server-beta-two.vercel.app/projects')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch projects');
                return res.json();
            })
            .then(data => {
                setProjects(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-8 md:p-24" id="projects">
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-pink-500 to-indigo-500">
                Projects
            </h2>
            <p className='my-6 w-9/12 mx-auto text-center opacity-70'>
                Explore my projects — built with passion, modern tech, and attention to detail.
            </p>

            {/* Loading Skeleton */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="card border border-base-300 w-full animate-pulse">
                            <div className="h-48 bg-base-300 rounded-t-xl"></div>
                            <div className="card-body gap-3">
                                <div className="h-5 bg-base-300 rounded w-3/4"></div>
                                <div className="h-4 bg-base-300 rounded w-full"></div>
                                <div className="h-4 bg-base-300 rounded w-5/6"></div>
                                <div className="h-10 bg-base-300 rounded mt-2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="text-center text-red-500 mt-8">
                    <p>⚠️ Could not load projects: {error}</p>
                </div>
            )}

            {/* Projects Grid */}
            {!loading && !error && projects.length === 0 && (
                <p className="text-center opacity-60 mt-8">No projects found.</p>
            )}

            {!loading && !error && projects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project?._id}
                            className="card border border-base-300 w-full relative overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ scale: 1.03, boxShadow: '0 0 20px #87CEEB, 0 0 40px #87CEEB' }}
                        >
                            {/* Project Image */}
                            <figure>
                                <img
                                    src={project?.project_image}
                                    alt={project?.project_name}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>

                            <div className="card-body">
                                <h3 className="text-xl font-bold">{project?.project_name}</h3>

                                {/* Tech Stack Badges */}
                                {Array.isArray(project?.main_technology_stack) && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {project.main_technology_stack.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="badge badge-sm bg-sky-100 text-sky-700 border-sky-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.main_technology_stack.length > 3 && (
                                            <span className="badge badge-sm bg-base-200">
                                                +{project.main_technology_stack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                )}

                                <Link
                                    to={`project_details/${project._id}`}
                                    className="btn bg-gradient-to-r from-sky-500 to-teal-400 text-white border-none mt-4 hover:opacity-90"
                                >
                                    See Details →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
