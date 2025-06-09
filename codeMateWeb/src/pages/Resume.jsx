import React, { useRef, useState } from 'react'
import html2pdf from 'html2pdf.js'

const Resume = () => {
    const contentRef = useRef(null)
    const [resumeData, setResumeData] = useState({
        name: 'Ashish Pratap Singh',
        email: 'xxx@gmail.com',
        phone: 'XXX-XXX-XXX',
        github: 'github.com/ashishps1',
        linkedin: 'linkedin.com/in/ashishps1',
        languages: 'C/C++, Java, Python, JavaScript, TypeScript, SQL',
        technologies: 'AWS, EC2, DynamoDB, S3, SQS, Lambda, Athena, Elasticsearch, Spark, Hive, Presto, Kubernetes, Docker, Splunk, Kafka, Spring, Angular, ReactJS',
        experiences: [
            {
                company: 'Adobe, Bangalore',
                title: 'Computer Scientist',
                period: 'Mar 2021 - Present',
                achievements: [
                    'Led the migration of Hive and Presto jobs from Qubole to AWS EMR, enhancing availability and significantly reducing operational costs.',
                    'Reduced the cost involved in running custom reports service by more than 80% by devising an automated system that identified and disabled reports with no usage or empty data.',
                    'Led a cost-saving initiative by identifying unused AWS resources and establishing S3 bucket expiration policies, leading to an annual cost reduction exceeding $50,000 in AWS expenditures.',
                ],
                technologies: 'AWS, EC2, S3, EMR, Hive, Presto, Qubole, Kafka, Druid, Zookeeper, MySQL, Kubernetes, Docker, Bazel'
            },
            {
                company: 'Amazon, Bangalore',
                title: 'Software Development Engineer',
                period: 'Sept 2019 - Mar 2021',
                achievements: [
                    'Worked on migrating ML workflows to Native AWS, enabling automated scalability based on workload demands and improving the logging and troubleshooting capabilities.',
                    'Developed a customized batch workflow plugin for an external team to help them save upto $6MM in human labelling cost for their ML experiments. This was achieved by auto labelling high confidence records using our ML models.'
                ],
                technologies: 'Java, Python, TypeScript, AWS Step Functions, AWS Batch, Lambda, S3, DynamoDB, EC2, SQS, SNS, AWS CDK, AWS Athena, Elastic Search, LightGBM, TensorFlow'
            },
            {
                company: 'Morgan Stanley, Bangalore',
                title: 'Technology Associate',
                period: 'Aug 2017 - Aug 2019',
                achievements: [
                    'Built a visualization tool to group contextually related infrastructure alerts (issues) to reduce the Mean Time to Resolution. Modeled the infrastructure dependencies as a graph problem and used graph algorithms like BFS, Union-Find to show the visualization and identify the root cause for a bunch of alerts.',
                    'Developed a Machine Learning powered solution to predict the likelihood of a production deployment resulting in an emergency reversion.'
                ],
                technologies: 'Python, Flask, ReactJS, Redux, Angular, d3, Kafka, DB2, scikit-learn'
            }
        ]
    })
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setResumeData(prev => ({
            ...prev,
            [name]: value
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
                        <h2 className="card-title mb-4">Resume Builder</h2>
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
                            <textarea
                                placeholder="Programming Languages"
                                name="languages"
                                value={resumeData.languages}
                                onChange={handleInputChange}
                                className="textarea textarea-bordered h-24"
                            />
                            <textarea
                                placeholder="Technologies & Tools"
                                name="technologies"
                                value={resumeData.technologies}
                                onChange={handleInputChange}
                                className="textarea textarea-bordered h-32"
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

                            <button
                                className="btn btn-primary mt-4"
                                onClick={downloadPDF}
                                disabled={isGeneratingPDF}
                            >
                                {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Section */}
            <div className="flex-1">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body" ref={contentRef}>
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold mb-4">{resumeData.name}</h1>
                            <div className="flex justify-center items-center gap-4 text-sm">
                                <span>📧 {resumeData.email}</span>
                                <span>📱 {resumeData.phone}</span>
                            </div>
                            <div className="flex justify-center items-center gap-4 text-sm mt-2">
                                <a href={`https://${resumeData.github}`} className="link link-hover flex items-center gap-1">
                                    <span>🔗 {resumeData.github}</span>
                                </a>
                                <a href={`https://${resumeData.linkedin}`} className="link link-hover flex items-center gap-1">
                                    <span>🔗 {resumeData.linkedin}</span>
                                </a>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 border-b pb-1">Skills</h2>
                            <div className="ml-4">
                                <div className="mb-2">
                                    <span className="font-semibold">Languages:</span> {resumeData.languages}
                                </div>
                                <div>
                                    <span className="font-semibold">Technologies & Tools:</span> {resumeData.technologies}
                                </div>
                            </div>
                        </div>

                        {/* Work Experience Section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 border-b pb-1">Work Experience</h2>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
