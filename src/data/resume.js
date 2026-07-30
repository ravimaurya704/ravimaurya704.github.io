import qlikLogo from "../assets/logos/qlik.png";
import hdfcLogo from "../assets/logos/hdfc.png";
import amexLogo from "../assets/logos/amex.png";
import usHealthConnectLogo from "../assets/logos/us-health-connect.png";
import hercRentalsLogo from "../assets/logos/herc-rentals.png";
import melstarLogo from "../assets/logos/melstar.png";
import sparLogo from "../assets/logos/SPAR.jpg";

export const profile = {
  name: "Ravi Maurya",
  title: "Senior BI & Analytics Developer",
  location: "Dublin, Ireland",
  email: "ravimaurya704@gmail.com",
  phone: "0899896130",
  linkedin: "https://linkedin.com/in/ravimaurya704",
  github: "https://github.com/ravimaurya704",
  topSkills: ["SQL", "Python", "Machine Learning", "QlikView", "Qlik Sense", "ETL"],
  summary: [
    "Senior BI & Analytics Developer with 6+ years progressing Software Engineer → Senior Officer → Senior Consultant, with full ownership of BI delivery and architecture across financial services and enterprise SaaS clients.",
    "Owned end-to-end BI delivery for global enterprise accounts — American Express, Herc Rentals, US Health Connect, and HDFC — architecting cloud migrations, dashboard programs, and stakeholder sign-off as sole or lead developer.",
    "People-management experience leading a team of 3 BI developers at HDFC. Completed MSc in Data Analytics (First-Class Honours, 80.89%) in early 2026 while earning PL-300 and progressing DP-600, staying hands-on with Power BI and Microsoft Fabric throughout.",
  ],
  certifications: [
    "Power BI Data Analyst Associate (PL-300)",
    "Qlik Sense Data Architect (QSDA)",
  ],
  visa:
    "Stamp 1G visa: Full-time work permission under the Third Level Graduate Programme, granted May 2026 — valid to May 2027, renewable to May 2028.",
};

export const experience = [
  {
    company: "Qlik",
    role: "Senior Consultant",
    period: "May 2022 – Jan 2025",
    location: "Mumbai, India",
    logo: qlikLogo,
    clients: [
      { name: "American Express", logo: amexLogo },
      { name: "Herc Rentals", logo: hercRentalsLogo },
      { name: "US HealthConnect", logo: usHealthConnectLogo },
    ],
    tech: ["Qlik Sense", "QlikView", "Qlik NPrinting", "Qlik Cloud (SaaS)", "Qlik AutoML", "SQL", "Python (Pandas, NumPy)"],
    points: [
      "Owned end-to-end BI delivery for two Fortune 500 accounts (American Express, Herc Rentals) plus US Health Connect, as sole developer accountable for architecture, stakeholder sign-off, and production support across 2,000+ users.",
      "Architected migration of legacy QlikView on-premises environments to Qlik Cloud (SaaS), enabling advanced governance with zero data integrity failures.",
      "Built predictive models using Qlik AutoML within Qlik Cloud to surface risk and churn insights directly inside dashboards.",
      "Automated 40–60 reports via Qlik NPrinting, eliminating manual reporting overhead through scheduled distribution cycles.",
      "Refactored SQL extraction queries and Qlik load scripts, cutting average app reload times by ~30%.",
      "Designed Star/Snowflake schemas for large-scale financial datasets and led sprint demos/UAT sign-off with client leadership.",
    ],
  },
  {
    company: "HDFC Limited",
    role: "Senior Officer — BI & Analytics",
    period: "Apr 2020 – Apr 2022",
    location: "Mumbai, India",
    logo: hdfcLogo,
    tech: ["Power BI", "DAX", "Power Query", "Row-Level Security", "QlikView", "Qlik Sense"],
    points: [
      "Led a team of 3 BI developers, owning end-to-end delivery, code reviews and reporting standards across Loans/LMS divisions serving 500+ daily users.",
      "Built the organisation's first-ever NPA and Loan Management System dashboards from scratch, formally recognised by stakeholders for closing a critical reporting gap.",
      "Developed 10–15 Power BI dashboards and 30–40 reports across Loans/LMS divisions.",
      "Developed advanced DAX time-intelligence measures surfacing YoY variance and rolling KPIs for risk and finance teams.",
      "Implemented dynamic Row-Level Security (RLS) across 9,000+ branches and 2,000+ users, enforcing role-based data access nationally.",
      "Migrated legacy QlikView/Qlik Sense reports to Power BI in phases, enabling real-time analysis via Direct Query.",
    ],
  },
  {
    company: "Melstar Technologies",
    role: "Software Engineer",
    period: "Oct 2018 – Mar 2020",
    location: "Mumbai, India",
    logo: melstarLogo,
    tech: ["Power BI", "SQL (Oracle 12g)", "Power Query", "DAX"],
    points: [
      "Built a central NPA dashboard and 3–4 reports tracking budget vs. risk exposure KPIs using Power BI.",
      "Created optimised SQL views in Oracle 12g to pre-aggregate multi-table joins, improving refresh speeds.",
      "Engineered advanced Power Query transformations — merges, custom columns, unpivoting, master calendar — for clean model ingestion.",
      "Developed DAX time-intelligence measures surfacing YoY growth and variance across financial datasets.",
      "Translated finance stakeholder requirements into BRDs and data mapping specs for dashboard delivery.",
    ],
  },
  {
    company: "SPAR Ireland",
    role: "Sales Assistant (Part-Time)",
    period: "Apr 2025 – Present",
    location: "Dublin, Ireland",
    logo: sparLogo,
    tech: [],
    points: [
      "Held part-time throughout full-time MSc studies (Jan 2025 – Feb 2026); continuing part-time while completing PL-300 and DP-600 certifications and interviewing for full-time Data Analyst/BI roles in Dublin.",
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
      "End-to-end data warehouse and analytics solution for a fashion retail dataset, combining relational and graph modeling.",
    tech: ["SQL Server", "SSIS", "SSRS", "Tableau", "Neo4j"],
    link: "https://github.com/ravimaurya704/fashion-retail-data-warehouse",
  },
  {
    title: "HR Employee Attrition Dashboard",
    description:
      "Interactive dashboards analyzing employee attrition drivers, built in parallel across two BI tools.",
    tech: ["Tableau", "Power BI"],
    link: "https://github.com/ravimaurya704/HR-Employee-Attrition-Dashboard",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Churn prediction model using Random Forest, covering EDA, feature engineering, and model building end-to-end.",
    tech: ["Python", "Scikit-learn", "Random Forest"],
    link: "https://github.com/ravimaurya704/customer-churn-prediction",
  },
  {
    title: "Student Performance Prediction",
    description:
      "Machine learning model predicting student academic performance from behavioral and demographic features.",
    tech: ["Python", "Scikit-learn", "Jupyter Notebook"],
    link: "https://github.com/ravimaurya704/student-performance-ml",
  },
  {
    title: "Remote Work Mental Health Analysis",
    description:
      "Tableau dashboard exploring the relationship between remote work patterns and mental health indicators.",
    tech: ["Tableau"],
    link: "https://github.com/ravimaurya704/Remote-Work-Mental-Health-Analysis-Tableau-Dashboard-",
  },
];

export const skills = {
  "BI & Visualization": ["Power BI", "Qlik Sense", "QlikView", "Tableau", "Qlik NPrinting", "Qlik Cloud (SaaS)", "Qlik AutoML"],
  "Data & Modeling": ["DAX", "M (Power Query)", "Star/Snowflake Schemas", "ETL", "Requirements Gathering & BRDs"],
  "Programming & ML": ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "SQL", "Jupyter Notebook"],
  "Data Platforms": ["Microsoft Fabric", "OneLake", "SSIS", "SSRS", "SQL Server", "MySQL", "Oracle 12g", "Azure SQL", "Teradata SQL"],
  "Cloud": ["Microsoft Azure", "AWS"],
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
