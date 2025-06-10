import React, { useRef, useState, useEffect } from 'react'
import html2pdf from 'html2pdf.js'

const Resume = () => {
    const contentRef = useRef(null)
    const [resumeData, setResumeData] = useState({
        name: 'Abhishek Kumar',
        email: 'abhishek.kumar2526@gmail.com',
        phone: '+91 9891154187',
        github: 'github.com/MERN-MECHANIC',
        linkedin: 'linkedin.com/in/abhishek-kumar-a2a98674/',
        skills: {
            frontend: 'React.js, Redux, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap',
            backend: 'Node.js, Express.js, REST APIs, JWT, Passport.js',
            database: 'MongoDB, Mongoose, Firebase',
            devops: 'Git, GitHub, Docker, Postman, Webpack, Vite, Jenkins',
            testing: 'Jest, React Testing Library, Mocha, Chai',
            cloud: 'AWS (EC2, S3), Heroku, Vercel, Netlify',
            other: 'Agile/Scrum, Jira, Bitbucket, CI/CD pipelines'
        },
        experiences: [
            {
                company: 'Awantunai, Indonesia',
                title: 'Senior SDE2',
                period: 'July 2022 - Present',
                achievements: [
                ],
                technologies: 'AWS, EC2, S3, EMR, Hive, Presto, Qubole, Kafka, Druid, Zookeeper, MySQL, Kubernetes, Docker, Bazel'
            },
            {
                company: 'Moglix, Noida',
                title: 'Senior Lead Engineer',
                period: 'Feb 2021 - June 2022',
                achievements: [
                    'Worked on migrating ML workflows to Native AWS, enabling automated scalability based on workload demands and improving the logging and troubleshooting capabilities.',
                    'Developed a customized batch workflow plugin for an external team to help them save upto $6MM in human labelling cost for their ML experiments. This was achieved by auto labelling high confidence records using our ML models.'
                ],
                technologies: 'Java, Python, TypeScript, AWS Step Functions, AWS Batch, Lambda, S3, DynamoDB, EC2, SQS, SNS, AWS CDK, AWS Athena, Elastic Search, LightGBM, TensorFlow'
            },
            {
                company: 'Value First, Gurugram',
                title: 'Senior Software Engineer',
                period: 'Sept 2019 - Feb 2021',
                achievements: [
                    'Built a visualization tool to group contextually related infrastructure alerts (issues) to reduce the Mean Time to Resolution. Modeled the infrastructure dependencies as a graph problem and used graph algorithms like BFS, Union-Find to show the visualization and identify the root cause for a bunch of alerts.',
                    'Developed a Machine Learning powered solution to predict the likelihood of a production deployment resulting in an emergency reversion.'
                ],
                technologies: 'Python, Flask, ReactJS, Redux, Angular, d3, Kafka, DB2, scikit-learn'
            },
            {
                company: 'Moglix, Noida',
                title: 'Software Engineer',
                period: 'Dec 2016 - Sept 2019',
                achievements: [
                    'Worked on migrating ML workflows to Native AWS, enabling automated scalability based on workload demands and improving the logging and troubleshooting capabilities.',
                    'Developed a customized batch workflow plugin for an external team to help them save upto $6MM in human labelling cost for their ML experiments. This was achieved by auto labelling high confidence records using our ML models.'
                ],
                technologies: 'Angular, Php, Javascript, JQuery, Prestashop, Wordpress, Gulp, Webpack, Html/Pug, Css/Scss, Git, Jira'
            },
            {
                company: 'Code Brew Labs',
                title: 'Software Developer Intern',
                period: 'Jan 2016 - Oct 2016',
                achievements: [
                    'Worked on migrating ML workflows to Native AWS, enabling automated scalability based on workload demands and improving the logging and troubleshooting capabilities.',
                    'Developed a customized batch workflow plugin for an external team to help them save upto $6MM in human labelling cost for their ML experiments. This was achieved by auto labelling high confidence records using our ML models.'
                ],
                technologies: 'JQuery, Javascript, Filezila, AngularJS, Html/Pug, Css/Scss, Git, Jira'
            },
        ],
        education: [
            {
                institution: 'MMU, Ambala, Haryana',
                degree: 'B.Tech in Computer Science and Engineering',
                period: 'Aug 2012 - Jun 2016',
                percentage: '7.86 CGPA',
                coursework: '',
                projects: []
            },
            {
                institution: 'Eklavya Educational Complex',
                degree: 'Xth',
                period: 'Apr 2010 - May 2011',
                percentage: '67%',
                coursework: '',
                projects: []
            },
            {
                institution: 'Sunshine Preph / High School',
                degree: 'Xth',
                period: 'Apr 2008 - Mar 2009',
                percentage: '82%',
                coursework: '',
                projects: []
            },
        ]
    })
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
    const [atsScore, setAtsScore] = useState(0)
    const [atsFeedback, setAtsFeedback] = useState([])

    // ATS scoring criteria
    const atsCriteria = {
        keywords: {
            technical: ['python', 'java', 'javascript', 'react', 'aws', 'docker', 'kubernetes', 'sql', 'nosql', 'api', 'rest', 'agile', 'scrum', 'git', 'ci/cd', 'microservices', 'cloud', 'devops', 'machine learning', 'ai', 'data science'],
            soft: ['leadership', 'communication', 'teamwork', 'problem-solving', 'analytical', 'collaboration', 'innovation', 'project management', 'mentoring', 'strategic']
        },
        sections: ['experience', 'education', 'skills', 'projects', 'achievements'],
        formatting: ['bullet points', 'clear headings', 'consistent spacing', 'professional font']
    }

    const calculateATSScore = () => {
        let score = 0;
        let feedback = [];
        const content = resumeData;

        // Check for technical keywords
        const technicalKeywordsFound = atsCriteria.keywords.technical.filter(keyword =>
            Object.values(content.skills).some(skill =>
                skill.toLowerCase().includes(keyword.toLowerCase())
            ) ||
            content.experiences.some(exp =>
                exp.technologies.toLowerCase().includes(keyword.toLowerCase()) ||
                exp.achievements.some(achievement =>
                    achievement.toLowerCase().includes(keyword.toLowerCase())
                )
            ) ||
            content.education.some(edu =>
                edu.coursework.toLowerCase().includes(keyword.toLowerCase()) ||
                edu.projects.some(project =>
                    project.technologies.toLowerCase().includes(keyword.toLowerCase()) ||
                    project.description.toLowerCase().includes(keyword.toLowerCase())
                )
            )
        );

        // Check for soft skills keywords
        const softKeywordsFound = atsCriteria.keywords.soft.filter(keyword =>
            content.experiences.some(exp =>
                exp.achievements.some(achievement =>
                    achievement.toLowerCase().includes(keyword.toLowerCase())
                )
            ) ||
            content.education.some(edu =>
                edu.projects.some(project =>
                    project.description.toLowerCase().includes(keyword.toLowerCase())
                )
            )
        );

        // Calculate scores
        const technicalScore = (technicalKeywordsFound.length / atsCriteria.keywords.technical.length) * 40;
        const softScore = (softKeywordsFound.length / atsCriteria.keywords.soft.length) * 20;

        // Experience section score
        const experienceScore = content.experiences.length >= 2 ? 20 : content.experiences.length * 10;

        // Skills section score
        const skillsScore = Object.values(content.skills).reduce((count, skillSet) =>
            count + skillSet.split(',').length, 0) > 5 ? 20 : 10;

        // Calculate total score
        score = Math.min(100, Math.round(technicalScore + softScore + experienceScore + skillsScore));

        // Generate feedback
        if (technicalKeywordsFound.length < 5) {
            feedback.push("Add more technical keywords to improve visibility");
        }
        if (softKeywordsFound.length < 3) {
            feedback.push("Include more soft skills in your achievements");
        }
        if (content.experiences.length < 2) {
            feedback.push("Add more work experience entries");
        }
        if (Object.values(content.skills).reduce((count, skillSet) =>
            count + skillSet.split(',').length, 0) <= 5) {
            feedback.push("Expand your skills section with more technologies");
        }

        setAtsScore(score);
        setAtsFeedback(feedback);
    }

    useEffect(() => {
        calculateATSScore();
    }, [resumeData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setResumeData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSkillChange = (category, value) => {
        setResumeData(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [category]: value
            }
        }))
    }

    const handleExperienceChange = (index, field, value) => {
        setResumeData(prev => {
            const newExperiences = [...prev.experiences]
            if (field === 'achievements') {
                newExperiences[index][field] = value.split('\n').filter(item => item.trim())
            } else {
                newExperiences[index][field] = value
            }
            return { ...prev, experiences: newExperiences }
        })
    }

    const addExperience = () => {
        setResumeData(prev => ({
            ...prev,
            experiences: [...prev.experiences, {
                company: '',
                title: '',
                period: '',
                achievements: [],
                technologies: ''
            }]
        }))
    }

    const removeExperience = (index) => {
        setResumeData(prev => ({
            ...prev,
            experiences: prev.experiences.filter((_, i) => i !== index)
        }))
    }

    // Education handlers
    const handleEducationChange = (index, field, value) => {
        setResumeData(prev => {
            const newEducation = [...prev.education]
            if (field === 'coursework') {
                newEducation[index][field] = value
            } else if (field === 'projects') {
                // This is handled separately
            } else {
                newEducation[index][field] = value
            }
            return { ...prev, education: newEducation }
        })
    }

    const handleProjectChange = (eduIndex, projectIndex, field, value) => {
        setResumeData(prev => {
            const newEducation = [...prev.education]
            const newProjects = [...newEducation[eduIndex].projects]
            newProjects[projectIndex][field] = value
            newEducation[eduIndex].projects = newProjects
            return { ...prev, education: newEducation }
        })
    }

    const addEducation = () => {
        setResumeData(prev => ({
            ...prev,
            education: [...prev.education, {
                institution: '',
                degree: '',
                period: '',
                percentage: '',
                coursework: '',
                projects: []
            }]
        }))
    }

    const removeEducation = (index) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index)
        }))
    }

    const addProject = (eduIndex) => {
        setResumeData(prev => {
            const newEducation = [...prev.education]
            newEducation[eduIndex].projects = [
                ...newEducation[eduIndex].projects,
                {
                    title: '',
                    description: '',
                    technologies: ''
                }
            ]
            return { ...prev, education: newEducation }
        })
    }

    const removeProject = (eduIndex, projectIndex) => {
        setResumeData(prev => {
            const newEducation = [...prev.education]
            newEducation[eduIndex].projects = newEducation[eduIndex].projects.filter((_, i) => i !== projectIndex)
            return { ...prev, education: newEducation }
        })
    }

    const downloadPDF = async () => {
        if (isGeneratingPDF) return;

        try {
            setIsGeneratingPDF(true);
            const content = contentRef.current;

            if (!content) {
                throw new Error('Content element not found');
            }

            // Create a clone of the content to modify styles
            const clonedContent = content.cloneNode(true);

            // Convert oklch colors to rgb
            const styleSheets = document.styleSheets;
            let cssText = '';
            for (let i = 0; i < styleSheets.length; i++) {
                try {
                    const rules = styleSheets[i].cssRules;
                    for (let j = 0; j < rules.length; j++) {
                        cssText += rules[j].cssText + '\n';
                    }
                } catch (e) {
                    console.warn('Could not read stylesheet rules:', e);
                }
            }

            // Create a temporary container
            const tempContainer = document.createElement('div');
            tempContainer.appendChild(clonedContent);

            // Add a style tag with converted colors
            const styleTag = document.createElement('style');
            styleTag.textContent = cssText.replace(/oklch\([^)]+\)/g, '#000000');
            tempContainer.appendChild(styleTag);

            const options = {
                margin: [0.5, 0.5],
                filename: `${resumeData.name.replace(/\s+/g, '_')}_Resume.pdf`,
                image: { type: 'jpeg', quality: 1 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    logging: true,
                    backgroundColor: '#ffffff'
                },
                jsPDF: {
                    unit: 'in',
                    format: 'a4',
                    orientation: 'portrait'
                }
            };

            await html2pdf().set(options).from(tempContainer).save();
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsGeneratingPDF(false);
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 min-h-screen bg-base-200">
            {/* Form Section */}
            <div className="flex-1 overflow-y-auto">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="card-title">Resume Builder</h2>
                            <button
                                className="btn  btn-circle text-primary text-2xl hover:bg-base-200"
                                onClick={downloadPDF}
                                disabled={isGeneratingPDF}
                                title="Download PDF"
                            >
                                {isGeneratingPDF ? (
                                    <i className="fas fa-spinner fa-spin"></i>
                                ) : (
                                    <i className="fas fa-download"></i>
                                )}
                            </button>
                        </div>

                        {/* ATS Score Section */}
                        <div className="mb-6 p-4 bg-base-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold">ATS Score</h3>
                                <div className="text-2xl font-bold text-primary">{atsScore}%</div>
                            </div>
                            <div className="w-full bg-base-300 rounded-full h-2.5">
                                <div
                                    className="bg-primary h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${atsScore}%` }}
                                ></div>
                            </div>
                            {atsFeedback.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="font-semibold mb-2">Suggestions to improve:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {atsFeedback.map((feedback, index) => (
                                            <li key={index} className="text-sm">{feedback}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="form-control gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={resumeData.name}
                                onChange={handleInputChange}
                                className="input input-bordered"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={resumeData.email}
                                onChange={handleInputChange}
                                className="input input-bordered"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                value={resumeData.phone}
                                onChange={handleInputChange}
                                className="input input-bordered"
                            />
                            <input
                                type="text"
                                placeholder="GitHub URL"
                                name="github"
                                value={resumeData.github}
                                onChange={handleInputChange}
                                className="input input-bordered"
                            />
                            <input
                                type="text"
                                placeholder="LinkedIn URL"
                                name="linkedin"
                                value={resumeData.linkedin}
                                onChange={handleInputChange}
                                className="input input-bordered"
                            />

                            <div className="divider">Skills</div>
                            <textarea
                                placeholder="Frontend Skills"
                                name="skills.frontend"
                                value={resumeData.skills.frontend}
                                onChange={(e) => handleSkillChange('frontend', e.target.value)}
                                className="textarea textarea-bordered h-24"
                            />
                            <textarea
                                placeholder="Backend Skills"
                                name="skills.backend"
                                value={resumeData.skills.backend}
                                onChange={(e) => handleSkillChange('backend', e.target.value)}
                                className="textarea textarea-bordered h-24"
                            />
                            <textarea
                                placeholder="Database Skills"
                                name="skills.database"
                                value={resumeData.skills.database}
                                onChange={(e) => handleSkillChange('database', e.target.value)}
                                className="textarea textarea-bordered h-24"
                            />
                            <textarea
                                placeholder="DevOps Tools"
                                name="skills.devops"
                                value={resumeData.skills.devops}
                                onChange={(e) => handleSkillChange('devops', e.target.value)}
                                className="textarea textarea-bordered h-24"
                            />
                            <textarea
                                placeholder="Testing Skills"
                                name="skills.testing"
                                value={resumeData.skills.testing}
                                onChange={(e) => handleSkillChange('testing', e.target.value)}
                                className="textarea textarea-bordered h-24"
                            />
                            <textarea
                                placeholder="Cloud & Hosting"
                                name="skills.cloud"
                                value={resumeData.skills.cloud}
                                onChange={(e) => handleSkillChange('cloud', e.target.value)}
                                className="textarea textarea-bordered h-24"
                            />
                            <textarea
                                placeholder="Other Skills"
                                name="skills.other"
                                value={resumeData.skills.other}
                                onChange={(e) => handleSkillChange('other', e.target.value)}
                                className="textarea textarea-bordered h-24"
                            />

                            <div className="divider">Work Experience</div>

                            {resumeData.experiences.map((exp, index) => (
                                <div key={index} className="card bg-base-200 p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold">Experience {index + 1}</h3>
                                        <button
                                            className="btn btn-square btn-sm btn-error"
                                            onClick={() => removeExperience(index)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Company, Location"
                                        value={exp.company}
                                        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                        className="input input-bordered mb-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Job Title"
                                        value={exp.title}
                                        onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                        className="input input-bordered mb-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Period (e.g., Mar 2021 - Present)"
                                        value={exp.period}
                                        onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                                        className="input input-bordered mb-2"
                                    />
                                    <textarea
                                        placeholder="Achievements (one per line)"
                                        value={exp.achievements.join('\n')}
                                        onChange={(e) => handleExperienceChange(index, 'achievements', e.target.value)}
                                        className="textarea textarea-bordered mb-2"
                                        rows={4}
                                    />
                                    <textarea
                                        placeholder="Technologies Used"
                                        value={exp.technologies}
                                        onChange={(e) => handleExperienceChange(index, 'technologies', e.target.value)}
                                        className="textarea textarea-bordered"
                                    />
                                </div>
                            ))}

                            <button
                                className="btn btn-secondary"
                                onClick={addExperience}
                            >
                                Add Experience
                            </button>

                            <div className="divider">Education</div>

                            {resumeData.education.map((edu, eduIndex) => (
                                <div key={eduIndex} className="card bg-base-200 p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold">Education {eduIndex + 1}</h3>
                                        <button
                                            className="btn btn-square btn-sm btn-error"
                                            onClick={() => removeEducation(eduIndex)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Institution"
                                        value={edu.institution}
                                        onChange={(e) => handleEducationChange(eduIndex, 'institution', e.target.value)}
                                        className="input input-bordered mb-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Degree"
                                        value={edu.degree}
                                        onChange={(e) => handleEducationChange(eduIndex, 'degree', e.target.value)}
                                        className="input input-bordered mb-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Period (e.g., Aug 2013 - Jun 2017)"
                                        value={edu.period}
                                        onChange={(e) => handleEducationChange(eduIndex, 'period', e.target.value)}
                                        className="input input-bordered mb-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Percentage (e.g., 85%)"
                                        value={edu.percentage}
                                        onChange={(e) => handleEducationChange(eduIndex, 'percentage', e.target.value)}
                                        className="input input-bordered mb-2"
                                    />
                                    <textarea
                                        placeholder="Relevant Coursework"
                                        value={edu.coursework}
                                        onChange={(e) => handleEducationChange(eduIndex, 'coursework', e.target.value)}
                                        className="textarea textarea-bordered mb-4"
                                    />

                                    <div className="mb-2">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-semibold">Projects</h4>
                                            <button
                                                className="btn btn-xs btn-primary"
                                                onClick={() => addProject(eduIndex)}
                                            >
                                                Add Project
                                            </button>
                                        </div>

                                        {edu.projects.map((project, projectIndex) => (
                                            <div key={projectIndex} className="card bg-base-300 p-3 mb-2">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h5 className="font-medium">Project {projectIndex + 1}</h5>
                                                    <button
                                                        className="btn btn-xs btn-circle btn-error"
                                                        onClick={() => removeProject(eduIndex, projectIndex)}
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Project Title"
                                                    value={project.title}
                                                    onChange={(e) => handleProjectChange(eduIndex, projectIndex, 'title', e.target.value)}
                                                    className="input input-bordered input-sm mb-2"
                                                />
                                                <textarea
                                                    placeholder="Project Description"
                                                    value={project.description}
                                                    onChange={(e) => handleProjectChange(eduIndex, projectIndex, 'description', e.target.value)}
                                                    className="textarea textarea-bordered textarea-sm mb-2"
                                                    rows={3}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Technologies Used"
                                                    value={project.technologies}
                                                    onChange={(e) => handleProjectChange(eduIndex, projectIndex, 'technologies', e.target.value)}
                                                    className="input input-bordered input-sm"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <button
                                className="btn btn-secondary"
                                onClick={addEducation}
                            >
                                Add Education
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Section */}
            <div className="flex-1">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body" ref={contentRef} style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold mb-4">{resumeData.name}</h1>

                            {/* Email & Phone */}
                            <div className="flex justify-center items-center gap-6 text-sm">
                                <a
                                    href={`mailto:${resumeData.email}`}
                                    className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <i className="fa-solid fa-envelope text-base"></i>
                                    <span>{resumeData.email}</span>
                                </a>
                                <a
                                    href={`tel:${resumeData.phone}`}
                                    className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <i className="fa-solid fa-phone text-base"></i>
                                    <span>{resumeData.phone}</span>
                                </a>
                            </div>

                            {/* GitHub & LinkedIn */}
                            <div className="flex justify-center items-center gap-6 text-sm mt-3">
                                <a
                                    href={`https://${resumeData.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <i className="fa-brands fa-github text-xl"></i>
                                    <span>{resumeData.github}</span>
                                </a>
                                <a
                                    href={`https://${resumeData.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <i className="fa-brands fa-linkedin text-xl"></i>
                                    <span>{resumeData.linkedin}</span>
                                </a>
                            </div>
                        </div>


                        {/* Skills Section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 border-b pb-3">Skills</h2>
                            <div className="ml-4 space-y-2">
                                <div>
                                    <span className="font-semibold">Frontend:</span> {resumeData.skills.frontend}
                                </div>
                                <div>
                                    <span className="font-semibold">Backend:</span> {resumeData.skills.backend}
                                </div>
                                <div>
                                    <span className="font-semibold">Database:</span> {resumeData.skills.database}
                                </div>
                                <div>
                                    <span className="font-semibold">Tools & DevOps:</span> {resumeData.skills.devops}
                                </div>
                                <div>
                                    <span className="font-semibold">Testing:</span> {resumeData.skills.testing}
                                </div>
                                <div>
                                    <span className="font-semibold">Cloud & Hosting:</span> {resumeData.skills.cloud}
                                </div>
                                <div>
                                    <span className="font-semibold">Other:</span> {resumeData.skills.other}
                                </div>
                            </div>
                        </div>

                        {/* Work Experience Section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 border-b pb-3">Work Experience</h2>
                            <div className="space-y-6">
                                {resumeData.experiences.map((exp, index) => (
                                    <div key={index} className="ml-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <div>
                                                <h3 className="font-bold text-lg">{exp.company}</h3>
                                                <div className="italic">{exp.title}</div>
                                            </div>
                                            <div className="text-sm text-gray-600">{exp.period}</div>
                                        </div>
                                        <ul className="list-disc ml-6 mb-2 space-y-1">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                        <div className="text-sm">
                                            <span className="font-semibold">Technologies:</span> {exp.technologies}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 border-b pb-3">Education</h2>
                            <div className="space-y-6">
                                {resumeData.education.map((edu, eduIndex) => (
                                    <div key={eduIndex} className="ml-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="font-bold">{edu.institution}</span><br />
                                                <span className="text-blue-700 font-semibold">{edu.degree}</span>
                                                {edu.percentage && <span className="ml-2">({edu.percentage})</span>}
                                            </div>
                                            <div className="italic">{edu.period}</div>
                                        </div>
                                        {edu.coursework && (
                                            <div className="mt-2">
                                                <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                                            </div>
                                        )}
                                        {edu.projects && edu.projects.length > 0 && (
                                            <div className="mt-4">
                                                <h3 className="font-bold text-lg mb-1">Project Work</h3>
                                                <ul className="list-disc ml-6 space-y-2">
                                                    {edu.projects.map((project, projectIndex) => (
                                                        <li key={projectIndex}>
                                                            <span className="font-bold">{project.title}:</span> {project.description}
                                                            {project.technologies && (
                                                                <span className="block mt-1">
                                                                    <span className="italic">Technologies:</span> {project.technologies}
                                                                </span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
