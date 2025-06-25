import React, { useRef, useState, useEffect } from 'react'
import html2pdf from 'html2pdf.js'

const Resume = () => {
    const contentRef = useRef(null)
    const [resumeData, setResumeData] = useState({
        name: 'Abhishek Kumar',
        email: 'abhishek.kumar2526@gmail.com',
        phone: '+91 9891154187',
        github: 'github.com/mern-mechanic',
        linkedin: 'linkedin.com/in/abhishek-kumar-a2a98674/',
        skills: {
            frontend: 'React.js, React Native, Next.js, Redux, JavaScript (ES6+), JQuery, HTML5/Pug, CSS3/SCSS, Tailwind, Bootstrap,  Mui, Chakra UI, Daisy UI',
            backend: 'Node.js, Express.js, REST APIs, GraphQl',
            database: 'MongoDB, Mongoose, Firebase, MySQL, Redis, Index DB, CouchDB, PouchDB',
            devops: 'Amplify, Git, GitHub, Docker, Postman, Webpack, Vite, Parcel',
            testing: 'Jest, React Testing Library',
            cloud: 'AWS (EC2, S3), Cloudflare, Netlify, Vercel, Heroku, Fastly, Varnish',
            other: 'Mixpanel, Telemetry, Data Dog, Agile/Scrum, Jira, Bitbucket, CI/CD pipelines'
        },
        experiences: [
            {
                company: 'Awantunai, Indonesia',
                title: 'Senior SDE2',
                period: 'July 2022 - Present',
                achievements: [
                    "Implemented an auto-update mechanism to ensure users always run the latest version of the app without manual intervention.",
                    "Engineered a mouseless navigation experience, optimizing user workflows for keyboard-first efficiency and faster task completion.",
                    "Reduced initial load time by lazily loading modules, components, and assets, significantly improving page performance and time-to-interactive.",
                    "Designed and developed Awan UI, a scalable and customizable component library built with Tailwind CSS, accelerating UI development across projects.",
                    "Successfully converted a web application into a desktop app using Electron, enabling offline capability and cross-platform distribution.",
                    "Migrated the web application to a Progressive Web App (PWA) using Workbox, adding offline support, background sync, and installability.",
                    "Integrated a robust API retry mechanism to gracefully handle network disruptions and ensure reliable data transactions.",
                    "Developed a SKU search, transaction, and receipt sync system that operates fully offline and syncs automatically when connectivity is restored.",
                ],
                technologies: 'Electron, React, Redux, Data Dog, Mixpanel, Telemetry, Mui, Chakra UI, Tailwind, Daisy UI, Node, Express, MongoDB, AWS, Amplify, IndexDB, CouchDB, PouchDB'
            },
            {
                company: 'Moglix, Noida',
                title: 'Senior Lead Engineer',
                period: 'Feb 2021 - June 2022',
                achievements: [
                    "Boosted initial page load time by 30% through strategic implementation of lazy loading across images, modules, and components, significantly enhancing user experience.",
                    "Streamlined payment processing by seamlessly integrating Razorpay, ensuring secure and efficient transactions.",
                    "Expanded payment flexibility by integrating Cashfree and Decentro, offering diverse and reliable payment gateways.",
                    "Optimized product discovery by engineering high-performance filtering, sorting, and search algorithms, dramatically improving catalog navigation speed.",
                    "Elevated web performance by conducting in-depth Google Lighthouse audits and implementing key optimizations that significantly improved Core Web Vitals and page load times.",
                    "Enhanced user experience and reduced support queries by over 25% through the successful rollout of a SKU-based product search feature.",
                    "Delivered scalable, pixel-perfect web solutions under aggressive timelines through seamless cross-functional collaboration with design, QA, and product teams."
                ],
                technologies: 'React, Redux, Node, Express, MongoDB, AWS, Git, Angular, Html, CSS/SCSS, Javascript, Typescript, Jira, Docker, Angular Material, SSR, Mixpanel'
            },
            {
                company: 'Value First, Gurugram',
                title: 'Senior Software Engineer',
                period: 'Sept 2019 - Feb 2021',
                achievements: [
                    "Spearheaded the R&D and enhancement of an internal bot builder platform, integrating a custom-modified JS pump module that dramatically boosted bot development efficiency by 40%.",
                    "Orchestrated a seamless migration of a legacy PHP Laravel application to Angular, modernizing the user interface and significantly enhancing maintainability.",
                    "Engineered and published a custom NPM package for User Management, establishing centralized, reusable access control across diverse projects.",
                    "Dramatically optimized front-end performance through a multi-faceted approach, achieving significant improvements in load times and resource utilization by:",
                    "Reducing asset bloat through the replacement of image-based icons with efficient SVG icon fonts (e.g., via IcoMoon).",
                    "Minimizing payload size via the elimination of unused sprite sheets and comprehensive media asset optimization.",
                    "Accelerating initial bundle load by 60% through the implementation of comprehensive lazy loading for all modules.",
                    "Further enhancing speed by applying Brotli compression to shrink payloads and improve overall load times."
                ],
                technologies: 'Typescript, Angular, JQuery, Html, CSS, Javascript, Node, Express, MongoDB, AWS, Git, Jira, Angular Material, Icomoon'
            },
            {
                company: 'Moglix, Noida',
                title: 'Software Engineer',
                period: 'Dec 2016 - Sept 2019',
                achievements: [
                    "Developed and maintained enterprise websites using PHP CMS, significantly enhancing backend performance and reliability.",
                    "Designed and launched the Green GST informational platform on WordPress, optimizing it for superior SEO performance and full responsiveness.",
                    "Led the strategic migration of a legacy CMS-based web application to Angular, resulting in vastly improved UI/UX and long-term maintainability.",
                    "Built and managed critical e-commerce features and product workflows on the PrestaShop platform, directly supporting key business operations and marketing campaigns.",
                    "Collaborated seamlessly across design, QA, and content teams to deliver high-impact web solutions consistently under aggressive deadlines."
                ],
                technologies: 'Angular, Typescript,  Php, Javascript, JQuery, Prestashop, Wordpress, Gulp, Webpack, Html/Pug, Css/Scss, Bootstrap, Angular Material, Git, Jira'
            },
            {
                company: 'Code Brew Labs',
                title: 'Software Developer Intern',
                period: 'Jan 2016 - Oct 2016',
                achievements: [
                    "Developed and optimized 'Plan My Medical Trip', significantly enhancing the digital presence and service offerings for a leading travel agency.",
                    "Elevated proficiency across core front-end technologies, including Angular JS, JavaScript, jQuery, HTML, CSS, and Bootstrap."
                ],
                technologies: 'AngularJS, JQuery, Javascript, AWS, Filezila, HTML, CSS, Bootstrap, Git, Jira'
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
        <div className="flex flex-col md:flex-row gap-6 p-6 min-h-screen bg-base-200" style={{ pageBreakInside: 'avoid' }}>
            {/* Form Section */}
            <div className="flex-1 overflow-y-auto" style={{ pageBreakInside: 'avoid' }}>
                <div className="card bg-base-100 shadow-xl" style={{ pageBreakInside: 'avoid' }}>
                    <div className="card-body" style={{ pageBreakInside: 'avoid' }}>
                        <div className="flex items-center justify-between mb-4" style={{ pageBreakInside: 'avoid' }}>
                            <h2 className="card-title" style={{ pageBreakInside: 'avoid' }}>Resume Builder</h2>
                            <button
                                className="btn  btn-circle text-primary text-2xl hover:bg-base-200"
                                onClick={downloadPDF}
                                disabled={isGeneratingPDF}
                                title="Download PDF"
                            >
                                {isGeneratingPDF ? (
                                    <i className="fas fa-spinner fa-spin" style={{ pageBreakInside: 'avoid' }}></i>
                                ) : (
                                    <i className="fas fa-download" style={{ pageBreakInside: 'avoid' }}></i>
                                )}
                            </button>
                        </div>

                        {/* ATS Score Section */}
                        <div className="mb-6 p-4 bg-base-200 rounded-lg" style={{ pageBreakInside: 'avoid' }}>
                            <div className="flex items-center justify-between mb-2" style={{ pageBreakInside: 'avoid' }}>
                                <h3 className="text-lg font-semibold" style={{ pageBreakInside: 'avoid' }}>ATS Score</h3>
                                <div className="text-2xl font-bold text-primary" style={{ pageBreakInside: 'avoid' }}>{atsScore}%</div>
                            </div>
                            <div className="w-full bg-base-300 rounded-full h-2.5" style={{ pageBreakInside: 'avoid' }}>
                                <div
                                    className="bg-primary h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${atsScore}%` }}
                                ></div>
                            </div>
                            {atsFeedback.length > 0 && (
                                <div className="mt-4" style={{ pageBreakInside: 'avoid' }}>
                                    <h4 className="font-semibold mb-2" style={{ pageBreakInside: 'avoid' }}>Suggestions to improve:</h4>
                                    <ul className="list-disc list-inside space-y-1" style={{ pageBreakInside: 'avoid' }}>
                                        {atsFeedback.map((feedback, index) => (
                                            <li key={index} className="text-sm" style={{ pageBreakInside: 'avoid' }}>{feedback}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="form-control gap-4" style={{ pageBreakInside: 'avoid' }}>
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

                            <div className="divider" style={{ pageBreakInside: 'avoid' }}>Skills</div>
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

                            <div className="divider" style={{ pageBreakInside: 'avoid' }}>Work Experience</div>

                            {resumeData.experiences.map((exp, index) => (
                                <div key={index} className="card bg-base-200 p-4" style={{ pageBreakInside: 'avoid' }}>
                                    <div className="flex justify-between items-center mb-2" style={{ pageBreakInside: 'avoid' }}>
                                        <h3 className="font-bold" style={{ pageBreakInside: 'avoid' }}>Experience {index + 1}</h3>
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

                            <div className="divider" style={{ pageBreakInside: 'avoid' }}>Education</div>

                            {resumeData.education.map((edu, eduIndex) => (
                                <div key={eduIndex} className="card bg-base-200 p-4" style={{ pageBreakInside: 'avoid' }}>
                                    <div className="flex justify-between items-center mb-2" style={{ pageBreakInside: 'avoid' }}>
                                        <h3 className="font-bold" style={{ pageBreakInside: 'avoid' }}>Education {eduIndex + 1}</h3>
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

                                    <div className="mb-2" style={{ pageBreakInside: 'avoid' }}>
                                        <div className="flex justify-between items-center mb-2" style={{ pageBreakInside: 'avoid' }}>
                                            <h4 className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Projects</h4>
                                            <button
                                                className="btn btn-xs btn-primary"
                                                onClick={() => addProject(eduIndex)}
                                            >
                                                Add Project
                                            </button>
                                        </div>

                                        {edu.projects.map((project, projectIndex) => (
                                            <div key={projectIndex} className="card bg-base-300 p-3 mb-2" style={{ pageBreakInside: 'avoid' }}>
                                                <div className="flex justify-between items-center mb-2" style={{ pageBreakInside: 'avoid' }}>
                                                    <h5 className="font-medium" style={{ pageBreakInside: 'avoid' }}>Project {projectIndex + 1}</h5>
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
            <div className="flex-1" style={{ pageBreakInside: 'avoid' }}>
                <div className="card bg-base-100 shadow-xl" style={{ pageBreakInside: 'avoid' }}>
                    <div className="card-body" ref={contentRef} style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>
                        {/* Header */}
                        <div className="text-center mb-4" style={{ pageBreakInside: 'avoid' }}>
                            <h1 className="text-4xl font-bold mb-4" style={{ pageBreakInside: 'avoid' }}>{resumeData.name}</h1>

                            {/* Email & Phone */}
                            <div className="flex justify-center items-center gap-6 text-sm" style={{ pageBreakInside: 'avoid' }}>
                                <a
                                    href={`mailto:${resumeData.email}`}
                                    className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <i className="fa-solid fa-envelope text-base" style={{ pageBreakInside: 'avoid' }}></i>
                                    <span>{resumeData.email}</span>
                                </a>
                                <a
                                    href={`tel:${resumeData.phone}`}
                                    className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <i className="fa-solid fa-phone text-base" style={{ pageBreakInside: 'avoid' }}></i>
                                    <span>{resumeData.phone}</span>
                                </a>
                            </div>

                            {/* GitHub & LinkedIn */}
                            <div className="flex justify-center items-center gap-6 text-sm mt-1" style={{ pageBreakInside: 'avoid' }}>
                                <a
                                    href={`https://${resumeData.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <i className="fa-brands fa-github text-xl" style={{ pageBreakInside: 'avoid' }}></i>
                                    <span>{resumeData.github}</span>
                                </a>
                                <a
                                    href={`https://${resumeData.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <i className="fa-brands fa-linkedin text-xl" style={{ pageBreakInside: 'avoid' }}></i>
                                    <span>{resumeData.linkedin}</span>
                                </a>
                            </div>
                        </div>


                        {/* Skills Section */}
                        <div className="mb-6" style={{ pageBreakInside: 'avoid' }}>
                            <h2 className="text-xl font-bold mb-2 border-b pb-3" style={{ pageBreakInside: 'avoid' }}>Skills</h2>
                            <div className="ml-4 space-y-2" style={{ pageBreakInside: 'avoid' }}>
                                <div>
                                    <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Frontend:</span> {resumeData.skills.frontend}
                                </div>
                                <div>
                                    <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Backend:</span> {resumeData.skills.backend}
                                </div>
                                <div>
                                    <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Database:</span> {resumeData.skills.database}
                                </div>
                                <div>
                                    <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Tools & DevOps:</span> {resumeData.skills.devops}
                                </div>
                                <div>
                                    <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Testing:</span> {resumeData.skills.testing}
                                </div>
                                <div>
                                    <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Cloud & Hosting:</span> {resumeData.skills.cloud}
                                </div>
                                <div>
                                    <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Other:</span> {resumeData.skills.other}
                                </div>
                            </div>
                        </div>

                        {/* Work Experience Section */}
                        <div className="mb-6" style={{ pageBreakInside: 'avoid' }}>
                            <h2 className="text-xl font-bold mb-2 border-b pb-3" style={{ pageBreakInside: 'avoid' }}>Work Experience</h2>
                            <div className="space-y-6" style={{ pageBreakInside: 'avoid' }}>
                                {resumeData.experiences.map((exp, index) => (
                                    <div key={index} className="ml-4" style={{ pageBreakInside: 'avoid' }}>
                                        <div className="flex justify-between items-center mb-2" style={{ pageBreakInside: 'avoid' }}>
                                            <div>
                                                <h3 className="font-bold text-lg" style={{ pageBreakInside: 'avoid' }}>{exp.company}</h3>
                                                <div className="italic" style={{ pageBreakInside: 'avoid' }}>{exp.title}</div>
                                            </div>
                                            <div className="text-sm text-gray-600" style={{ pageBreakInside: 'avoid' }}>{exp.period}</div>
                                        </div>
                                        <ul className="list-disc ml-6 mb-2 space-y-1" style={{ pageBreakInside: 'avoid' }}>
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                        <div className="text-sm" style={{ pageBreakInside: 'avoid' }}>
                                            <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Technologies:</span> {exp.technologies}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="mb-6" style={{ pageBreakInside: 'avoid' }}>
                            <h2 className="text-xl font-bold mb-2 border-b pb-3" style={{ pageBreakInside: 'avoid' }}>Education</h2>
                            <div className="space-y-6" style={{ pageBreakInside: 'avoid' }}>
                                {resumeData.education.map((edu, eduIndex) => (
                                    <div key={eduIndex} className="ml-4" style={{ pageBreakInside: 'avoid' }}>
                                        <div className="flex justify-between items-center" style={{ pageBreakInside: 'avoid' }}>
                                            <div>
                                                <span className="font-bold" style={{ pageBreakInside: 'avoid' }}>{edu.institution}</span><br />
                                                <span className="text-blue-700 font-semibold" style={{ pageBreakInside: 'avoid' }}>{edu.degree}</span>
                                                {edu.percentage && <span className="ml-2" style={{ pageBreakInside: 'avoid' }}>({edu.percentage})</span>}
                                            </div>
                                            <div className="italic" style={{ pageBreakInside: 'avoid' }}>{edu.period}</div>
                                        </div>
                                        {edu.coursework && (
                                            <div className="mt-2" style={{ pageBreakInside: 'avoid' }}>
                                                <span className="font-semibold" style={{ pageBreakInside: 'avoid' }}>Relevant Coursework:</span> {edu.coursework}
                                            </div>
                                        )}
                                        {edu.projects && edu.projects.length > 0 && (
                                            <div className="mt-4" style={{ pageBreakInside: 'avoid' }}>
                                                <h3 className="font-bold text-lg mb-1" style={{ pageBreakInside: 'avoid' }}>Project Work</h3>
                                                <ul className="list-disc ml-6 space-y-2" style={{ pageBreakInside: 'avoid' }}>
                                                    {edu.projects.map((project, projectIndex) => (
                                                        <li key={projectIndex}>
                                                            <span className="font-bold" style={{ pageBreakInside: 'avoid' }}>{project.title}:</span> {project.description}
                                                            {project.technologies && (
                                                                <span className="block mt-1" style={{ pageBreakInside: 'avoid' }}>
                                                                    <span className="italic" style={{ pageBreakInside: 'avoid' }}>Technologies:</span> {project.technologies}
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
