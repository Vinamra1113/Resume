export const data = {
  navLinks: [
    { href: '#objective', label: 'Objective' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certs' },
    { href: '#achievements', label: 'Achievements' },
  ],
  profile: {
    name: 'Vinamra Jain',
    initials: 'VJ',
    title: 'Aspiring Analyst & Business Intelligence Specialist',
    location: 'Indore, India',
    email: 'vinamrajain.work@gmail.com',
    phone: '+91 98765 43210',
    imageId: 'profile',
    resumeUrl: '/vinamra-jain-resume.pdf',
    socials: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/vinamra-jain' },
      { name: 'GitHub', url: 'https://github.com/vinamra-jain' },
      { name: 'Linktree', url: 'https://linktr.ee/vinamra.jain' },
    ],
  },
  careerObjective:
    'A highly motivated and analytical professional seeking to leverage expertise in data analytics, business intelligence, and Salesforce to drive data-informed decision-making. Eager to contribute to a dynamic organization by transforming complex data into actionable insights, optimizing processes, and supporting strategic goals. Core strengths include Python, SQL, Tableau, and a strong foundation in financial analysis.',
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Symbiosis Institute of Technology, Pune',
      period: '2019 - 2023',
      gpa: 'CGPA: 8.5/10',
    },
    {
      degree: 'Higher Secondary School',
      institution: 'St. Paul H.S. School, Indore',
      period: '2018 - 2019',
      gpa: 'Percentage: 92%',
    },
  ],
  skills: [
    {
      category: 'Data Analytics & BI',
      technologies: ['SQL', 'Tableau', 'Power BI', 'Excel', 'Google Analytics', 'Data Warehousing'],
    },
    {
      category: 'Programming & Machine Learning',
      technologies: ['Python (Pandas, NumPy)', 'Scikit-learn', 'R', 'Jupyter Notebook', 'Statistical Analysis'],
    },
    {
      category: 'Platforms & Tools',
      technologies: ['Salesforce', 'Git & GitHub', 'JIRA', 'Microsoft Office Suite', 'Google Cloud Platform'],
    },
    {
      category: 'Financial Analysis',
      technologies: ['Financial Modeling', 'Valuation Analysis', 'Ratio Analysis', 'Bloomberg Terminal'],
    },
  ],
  projects: [
    {
      title: 'HR Analytics Dashboard',
      imageId: 'project-hr-analytics',
      description: 'Developed an interactive dashboard to analyze employee attrition and performance metrics.',
      role: 'Lead Analyst & Dashboard Developer',
      stack: ['Tableau', 'SQL', 'Excel'],
      timeline: 'Q3 2022',
      links: [{ name: 'Live Dashboard', url: '#' }],
    },
    {
      title: 'E-commerce Sales Analysis',
      imageId: 'project-ecommerce-sales',
      description: 'Analyzed sales data for an e-commerce platform to identify trends and customer behavior.',
      role: 'Data Analyst',
      stack: ['Python (Pandas)', 'Jupyter', 'Power BI'],
      timeline: 'Q1 2023',
      links: [{ name: 'Case Study', url: '#' }],
    },
    {
      title: 'Customer Churn Prediction',
      imageId: 'project-customer-churn',
      description: 'Built a machine learning model to predict customer churn based on usage patterns.',
      role: 'Machine Learning Engineer',
      stack: ['Python (Scikit-learn)', 'SQL'],
      timeline: 'Q2 2023',
      links: [{ name: 'GitHub Repo', url: '#' }],
    },
  ],
  experience: [
    {
      role: 'Data Analyst Intern',
      organization: 'Tech Solutions Inc.',
      duration: 'May 2022 - July 2022',
      responsibilities: [
        'Cleaned and preprocessed large datasets, improving data quality by 30%.',
        'Created insightful dashboards in Tableau to track key business metrics.',
        'Collaborated with the marketing team to provide data-driven insights for campaigns.',
      ],
    },
    {
        role: 'Salesforce Developer Trainee',
        organization: 'Cloud Innovators LLC',
        duration: 'Jan 2023 - Mar 2023',
        responsibilities: [
          'Assisted in the development and customization of Salesforce applications.',
          'Learned Apex programming and Visualforce page creation.',
          'Worked on data migration tasks and maintained system documentation.',
        ],
      },
  ],
  certifications: [
    {
      title: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: 'Issued Nov 2022',
      url: '#',
    },
    {
      title: 'Salesforce Certified Administrator',
      issuer: 'Salesforce',
      date: 'Issued Apr 2023',
      url: '#',
    },
    {
      title: 'Google Data Analytics Certificate',
      issuer: 'Coursera',
      date: 'Issued Jan 2022',
      url: '#',
    },
  ],
  achievements: [
    {
      title: 'Dean’s List for Academic Excellence',
      description: 'Recognized for outstanding academic performance for four consecutive semesters.',
      year: '2021-2023',
    },
    {
      title: 'Winner, National Level Hackathon',
      description: 'First place in "Data for Good" hackathon for developing a solution to optimize city waste management.',
      year: '2022',
    },
    {
      title: 'Best Final Year Project Award',
      description: 'Awarded for the most innovative and impactful final year engineering project.',
      year: '2023',
    },
  ],
};
