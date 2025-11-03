import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Swarnim Mandal",
  description: "Learn more about Swarnim Mandal, a Software Engineering student specializing in AI and software development",
};

export default function About() {
  const skills = [
    { category: "Programming Languages", items: ["Python", "C#", "C", "Java", "Dart"] },
    { category: "Frameworks & Libraries", items: ["Flutter", "Selenium", "Beautiful Soup", "TensorFlow", "Keras", "PyTorch", "Node.js", "Django", "React"] },
    { category: "Tools & Platforms", items: ["Git", "VS Code", "Talend", "Figma", "GitHub", "Jira"] },
    { category: "Databases", items: ["MySQL", "MongoDB"] },
  ];

  const education = [
    {
      degree: "Software Engineering MSc.",
      institution: "University of West London",
      location: "London, England",
      period: "February 2025 - Present",
      description: "Currently pursuing Master's degree in Software Engineering, focusing on advanced software development practices and cutting-edge technologies.",
    },
    {
      degree: "Computer Science and Engineering B.Tech",
      institution: "Jawaharlal Nehru Technological University Kakinada",
      location: "Kakinada, India",
      period: "August 2018 - April 2023",
      description: "CGPA: 7.3/10. Completed comprehensive coursework in computer science fundamentals, software engineering, and emerging technologies.",
    },
    {
      degree: "Higher Secondary School",
      institution: "Shree Amarsingh Model Higher Secondary School",
      location: "Pokhara, Nepal",
      period: "July 2016 - August 2018",
      description: "GPA: 3.2/4. Built strong foundation in mathematics and sciences.",
    },
  ];

  const experience = [
    {
      title: "Receptionist",
      company: "Oriental Club",
      location: "London, United Kingdom",
      period: "February 2025 - Present",
      points: [
        "Engaged with high-profile members (Diplomats and business leaders), strengthening communication and stakeholder management.",
        "Prepared daily management reports, enhancing organization and analytical accuracy.",
        "Assisted in revenue forecasting and performance analysis, applying data-driven insights.",
        "Coordinated across departments to resolve issues, showcasing teamwork and leadership potential.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Aankhijhyal Technologies",
      location: "Pokhara, Nepal",
      period: "January 2024 - December 2024",
      points: [
        "Built responsive UIs with React & CSS, ensuring cross-device compatibility.",
        "Developed RESTful APIs & optimized databases using Django for seamless integration.",
        "Debugged & resolved full-stack issues, maintaining high-performance applications.",
        "Deployed apps via CI/CD pipelines, enhancing scalability & reliability.",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "Eversoft",
      location: "Pokhara, Nepal",
      period: "September 2023 - December 2023",
      points: [
        "Contributing to a real project using Flutter, displaying a deep understanding of mobile app development.",
        "Creating innovative UI/UX solutions to improve user experience.",
        "Demonstrating proficiency in Node.js, helping with the development of the back-end of the Mobile Application.",
        "Collaborating effectively with the team, offering valuable insights and creative solutions during brainstorming sessions.",
      ],
    },
    {
      title: "Data Analyst",
      company: "Scretus",
      location: "Remote, Bengaluru, India",
      period: "April 2022 - June 2022",
      points: [
        "Extracted and cleaned data using automated tools for accurate analysis.",
        "Developed and maintained databases, ensuring data integrity and accessibility.",
        "Conducted statistical analysis and built predictive models to identify trends.",
        "Evaluated business performance by quantifying key metrics and benchmarking results.",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-background to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              MSc Software Engineering student at University of West London with expertise in full-stack development,
              machine learning, and data analysis. Based in London, United Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">My Story</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I&apos;m currently pursuing a Master&apos;s degree in Software Engineering at the University of West London
                while working as a Receptionist at the prestigious Oriental Club, where I engage with high-profile
                members and apply data-driven insights to business operations.
              </p>
              <p>
                My professional journey includes diverse roles across full-stack development, UI/UX design, and
                data analysis. At Aankhijhyal Technologies, I built responsive applications using React and Django,
                while at Eversoft, I contributed to mobile app development with Flutter. My internship at Scretus
                honed my skills in statistical analysis and predictive modeling.
              </p>
              <p>
                I&apos;m passionate about leveraging machine learning and AI to solve complex problems. My projects
                include developing neural networks for guitar tablature generation, predicting heart disease in
                COVID-affected individuals, and classifying music genres using deep learning. I combine technical
                expertise with strong communication skills to deliver impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-gray-800">
                  <h3 className="text-2xl font-bold text-primary mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-800 px-4 py-2 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary pl-8 pb-8">
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <div className="text-primary font-semibold mb-1">{edu.institution}</div>
                <div className="text-gray-500 text-sm mb-2">{edu.location}</div>
                <div className="text-gray-400 mb-4">{edu.period}</div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary pl-8 pb-8">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <div className="text-primary font-semibold mb-1">{exp.company}</div>
                  <div className="text-gray-500 text-sm mb-2">{exp.location}</div>
                  <div className="text-gray-400 mb-4">{exp.period}</div>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-gray-300">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl text-gray-300 mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
