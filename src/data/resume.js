import qlikLogo from "../assets/logos/qlik.png";
import hdfcLogo from "../assets/logos/hdfc.png";
import amexLogo from "../assets/logos/amex.png";
import usHealthConnectLogo from "../assets/logos/us-health-connect.png";
import hercRentalsLogo from "../assets/logos/herc-rentals.png";
import melstarLogo from "../assets/logos/melstar.png";
import microsoftLogo from "../assets/logos/microsoft.png";

export const profile = {
  name: "Ravi Maurya",
  title: "Data Engineer, BI Developer & ML/AI Practitioner",
  location: "Dublin, Ireland",
  email: "ravimaurya704@gmail.com",
  phone: "0899896130",
  linkedin: "https://linkedin.com/in/ravimaurya704",
  github: "https://github.com/ravimaurya704",
  topSkills: ["Power BI", "SQL", "Python", "Machine Learning", "QlikView", "Qlik Sense", "Qlik Cloud", "Microsoft Fabric", "ETL"],
  summary: [
    "Data Analytics professional working across Data Engineering, BI Development, and Applied ML/AI — 6+ years building enterprise data platforms and dashboards (Qlik, Power BI, Microsoft Fabric) for Fortune 500 clients including American Express, Herc Rentals, and HDFC.",
    "Comfortable across the full stack: ingesting and modelling data (Microsoft Fabric/OneLake, Snowflake, SQL, PySpark), building governed BI semantic layers (DAX, dynamic Row-Level Security, Star/Snowflake schemas), and building/evaluating ML models (Python, TensorFlow, CNNs).",
    "Extended this foundation with an MSc in Data Analytics (First-Class Honours, 80.89%) from Dublin Business School, covering deep learning and quantum ML — dissertation combined a CNN with a variational quantum circuit for cancer detection (95.98% accuracy). Certified: PL-300, DP-600, and QSDA.",
  ],
  certifications: [
    {
      name: "Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      logo: microsoftLogo,
      link: "https://learn.microsoft.com/en-us/users/ravimaurya-3880/credentials/certification/data-analyst-associate",
    },
    {
      name: "Fabric Analytics Engineer Associate (DP-600)",
      issuer: "Microsoft",
      logo: microsoftLogo,
      link: "https://learn.microsoft.com/en-us/users/ravimaurya-3880/credentials/certification/fabric-analytics-engineer-associate",
    },
    {
      name: "Qlik Sense Data Architect (QSDA)",
      issuer: "Qlik",
      logo: qlikLogo,
      link: "https://www.credly.com/go/a7TIv6c2",
    },
    {
      name: "Data Warehousing & Pipeline Development in Microsoft Fabric",
      issuer: "Microsoft / Coursera",
      logo: microsoftLogo,
      link: "https://coursera.org/verify/1NE5GO4KBN6E",
    },
    {
      name: "Claude AI and Prompting for Everyone",
      issuer: "Coursera",
      logo: null,
      link: "https://coursera.org/share/12237479bca7b24f9a26f4213eff7290",
    },
  ],
  visa:
    "Stamp 1G visa: Full-time work permission under the Third Level Graduate Programme, granted May 2026 — valid to May 2027, renewable to May 2028.",
};

export const experience = [
  {
    company: "Qlik",
    role: "Qlik Consultant → Senior Qlik Consultant",
    period: "May 2022 – Jan 2025",
    location: "Mumbai, India",
    logo: qlikLogo,
    clients: [
      { name: "American Express", logo: amexLogo },
      { name: "Herc Rentals", logo: hercRentalsLogo },
      { name: "US HealthConnect", logo: usHealthConnectLogo },
    ],
    tech: ["Qlik Sense", "QlikView", "Qlik Cloud", "Qlik Replicate", "Qlik AutoML", "Microsoft Fabric", "SQL", "Python"],
    points: [
      "Qlik Cloud (SaaS) migration & governance for Fortune 500 accounts — American Express, Herc Rentals, US HealthConnect",
      "Microsoft Fabric — incremental ETL pipelines & dataflows into a Lakehouse/Warehouse Medallion architecture (Bronze/Silver/Gold), reporting on the Gold layer",
      "Qlik Replicate (CDC) for real-time database replication",
      "Qlik AutoML predictive models for risk & churn insights",
      "Qlik NPrinting automation — 40–60 recurring reports",
      "Star/Snowflake schema design; SQL & Python (Pandas, NumPy) for ETL",
      "Azure DevOps, GitHub Actions/Copilot for CI/CD; Informatica for governance",
    ],
  },
  {
    company: "HDFC Limited",
    role: "Senior Officer — BI & Analytics",
    period: "Apr 2020 – Apr 2022",
    location: "Mumbai, India",
    logo: hdfcLogo,
    tech: ["Power BI", "DAX", "Row-Level Security", "SQL Server", "Snowflake", "Microsoft Purview"],
    points: [
      "Power BI development — DAX time-intelligence measures, Power Query transformations",
      "Dynamic Row-Level Security (RLS) across 9,000+ branches",
      "QlikView/Qlik Sense → Power BI migration via Direct Query",
      "SQL Server, Snowflake, and PostgreSQL data modelling",
      "Microsoft Purview for data governance",
      "Technical/delivery lead for a 3-developer BI team",
    ],
  },
  {
    company: "Melstar Technologies",
    role: "Software Engineer",
    period: "Oct 2018 – Mar 2020",
    location: "Mumbai, India",
    logo: melstarLogo,
    tech: ["Power BI", "DAX", "Power Query", "SQL (Oracle 12c)"],
    points: [
      "Power BI dashboards — DAX measures, Power Query transformations (merges, unpivoting, master calendar)",
      "SQL (Oracle 12c, PL/SQL) views for multi-table aggregation",
      "Star schema / dimensional modelling fundamentals",
    ],
  },
];

export const caseStudies = [
  {
    title: "Qlik Cloud Migration & Governance",
    context: "Qlik — American Express, Herc Rentals, US Health Connect",
    description:
      "Architected migration of legacy on-premises QlikView environments to Qlik Cloud (SaaS) for Fortune 500 accounts serving 2,000+ users, enabling advanced governance with zero data integrity failures, plus AutoML-driven risk and churn models embedded in dashboards.",
    tech: ["Qlik Sense", "Qlik Cloud", "Qlik AutoML", "SQL"],
    link: null,
  },
  {
    title: "Enterprise NPA & Loan Management Dashboards",
    context: "HDFC Limited",
    description:
      "Built the organisation's first-ever NPA and Loan Management System dashboards from scratch, with dynamic Row-Level Security enforced across 9,000+ branches and 2,000+ users, plus DAX time-intelligence measures for risk and finance teams.",
    tech: ["Power BI", "DAX", "Power Query", "Row-Level Security"],
    link: null,
  },
];

export const githubProjects = [
  {
    title: "Quantum-AI-Cancer-Detection",
    description:
      "Hybrid Quantum-Classical Neural Network (EfficientNet-B0 + PennyLane variational quantum circuit) for esophageal cancer detection — 95.98% accuracy. Built as the MSc Applied Research Project at Dublin Business School.",
    tech: ["Python", "TensorFlow", "PennyLane", "EfficientNet-B0"],
    link: "https://github.com/ravimaurya704/Quantum-AI-Cancer-Detection",
  },
  {
    title: "Fashion Retail Data Warehouse",
    description:
      "Star-schema data warehouse for a global fashion retailer — automated SSIS ETL into SQL Server, plus a Microsoft Fabric pipeline (Bronze/Silver/Gold medallion layers) feeding a Power BI semantic model, alongside Tableau dashboards, SSRS paginated reports, and Neo4j graph queries for relationship-based insights.",
    tech: ["SQL Server", "Microsoft Fabric", "SSIS", "Power BI", "Tableau", "SSRS", "Neo4j"],
    link: "https://github.com/ravimaurya704/fashion-retail-data-warehouse",
  },
  {
    title: "HR Employee Attrition Dashboard",
    description:
      "Parallel Power BI and Tableau dashboards analyzing IBM's HR Employee Attrition dataset (1,470 records) — DAX and calculated-field KPIs across six interactive visuals per tool, comparing tenure, age-group, and travel-frequency drivers of attrition.",
    tech: ["Power BI", "DAX", "Tableau"],
    link: "https://github.com/ravimaurya704/HR-Employee-Attrition-Dashboard",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Random Forest churn model on a 10,000-record dataset — EDA, feature engineering, and SMOTE class balancing, reaching 85% accuracy.",
    tech: ["Python", "Scikit-learn", "Random Forest", "SMOTE"],
    link: "https://github.com/ravimaurya704/customer-churn-prediction",
  },
  {
    title: "Student Performance Prediction",
    description:
      "CRISP-DM classification of student outcomes (Distinction / Merit / Needs Improvement) — compared RapidMiner AutoML against a Python/TensorFlow deep-learning model, 97.4% best accuracy. MSc Data Mining coursework, built with two co-authors.",
    tech: ["Python", "TensorFlow", "RapidMiner", "CRISP-DM"],
    link: "https://github.com/ravimaurya704/student-performance-ml",
  },
  {
    title: "Remote Work Mental Health Analysis",
    description:
      "Tableau dashboard analyzing how remote, hybrid, and onsite work arrangements affect employee mental health across regions — a composite health-score model and five interactive visuals surfacing higher stress among hybrid workers.",
    tech: ["Tableau"],
    link: "https://github.com/ravimaurya704/Remote-Work-Mental-Health-Analysis-Tableau-Dashboard-",
  },
];

export const skills = {
  "Data Engineering & Cloud": ["Microsoft Fabric", "OneLake", "Lakehouse", "Dataflows Gen2", "Medallion Architecture", "Azure Data Factory", "Azure Synapse Analytics", "Snowflake", "AWS", "Google Cloud Storage", "Qlik Replicate (CDC)"],
  "BI & Visualization": ["Power BI", "Qlik Sense", "QlikView", "Qlik Cloud (SaaS)", "Qlik NPrinting", "Qlik AutoML", "DAX", "Power Query", "Set Analysis", "ODAG"],
  "Programming & ML": ["Python", "PySpark", "R", "SQL", "T-SQL", "PL/SQL", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  "Data Modelling & Governance": ["Star/Snowflake Schema", "Dimensional Modelling", "Semantic Models", "Dynamic Row-Level Security", "Microsoft Purview", "Informatica", "CRISP-DM"],
  "Databases": ["SQL Server", "Oracle 12c", "PostgreSQL", "Azure SQL", "Teradata SQL", "MySQL"],
  "DevOps & Tools": ["Git", "GitHub Actions", "GitHub Copilot", "Azure DevOps", "Jira", "ServiceNow", "Claude Code"],
};

export const education = [
  {
    school: "Dublin Business School, Ireland",
    degree: "MSc in Data Analytics",
    period: "Jan 2025 – Feb 2026",
    result: "First-Class Honours, Weighted Average 80.89%",
    detail:
      "Applied Research Project: Quantum-Classical Hybrid Cancer Detection (95.98% accuracy). Coursework in Machine Learning, Data Storage Solutions, and Applied Research Methods (highest module grade: 90%).",
  },
  {
    school: "DJ Sanghvi College of Engineering, Mumbai",
    degree: "B.E. Electronics & Telecommunication",
    period: "2014 – 2017",
    result: "First-Class Honours, Weighted Average 74.59%",
    detail:
      "Final Year Project: Automatic Speed Control of Vehicles Using Sensors — co-authored published research paper (RF + ultrasonic embedded system, Arduino Nano/Uno).",
  },
];
