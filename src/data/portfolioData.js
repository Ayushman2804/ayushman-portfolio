export const PERSONAL_INFO = {
  name: "Ayushman Banerjee",
  role: "Generative AI & LLM Engineer",
  headline: "Building Intelligent Systems with Generative AI",
  location: "Durgapur, West Bengal, India",
  email: "banerjeeayushman280405@gmail.com",
  phone: "9332834548",
  github: "https://github.com/Ayushman2804",
  githubDisplay: "github.com/Ayushman2804",
  linkedin: "https://linkedin.com/in/ayushman-banerjee-07b625319",
  linkedinDisplay: "linkedin.com/in/ayushman-banerjee-07b625319",
  resumePath: "/Ayushman_Banerjee_Resume.pdf",
  summary:
    "Final-year Computer Science and Engineering student at KIIT University with a strong focus on Generative AI, large language model ecosystems, RAG architectures, and AI agent frameworks. Experienced in designing, developing, and deploying production-ready AI pipelines, vector database integrations, and robust backend services using Python, LangChain, FAISS, FastAPI, and Docker. Deeply passionate about modern LLM ecosystems, fine-tuning foundation models, and building scalable AI solutions that solve real-world problems.",
  aboutHighlights: [
    {
      title: "RAG & Vector Retrieval",
      description: "Engineering low-hallucination contextual retrieval systems using FAISS, Pinecone, and custom prompt templates."
    },
    {
      title: "Foundation Models & LLM Agents",
      description: "Designing autonomous agentic workflows and fine-tuning models across GPT, LLaMA, Gemini, and Claude ecosystems."
    },
    {
      title: "Production Microservices & APIs",
      description: "Serving high-throughput low-latency inference endpoints with FastAPI, Kafka streaming, and Docker containers."
    },
    {
      title: "Scalable MLOps & Cloud",
      description: "Deploying and monitoring models using Google Cloud Platform (Cloud Run, GKE), MLflow, and CI/CD pipelines."
    }
  ]
};

export const SKILL_CATEGORIES = [
  {
    id: "genai",
    name: "Generative AI & LLMs",
    badge: "Core Specialization",
    skills: [
      "LangChain",
      "LlamaIndex",
      "HuggingFace Transformers",
      "Sentence Transformers",
      "RAG Pipelines",
      "FAISS",
      "Pinecone",
      "Weaviate",
      "Prompt Engineering",
      "Fine-Tuning",
      "AI Agents",
      "GPT",
      "LLaMA",
      "Gemini",
      "Claude"
    ]
  },
  {
    id: "backend",
    name: "Backend & Frameworks",
    badge: "API & Inference",
    skills: [
      "FastAPI",
      "Streamlit",
      "Plotly Dash",
      "React",
      "Vite",
      "spaCy",
      "scikit-learn",
      "XGBoost",
      "LSTM",
      "PyTorch"
    ]
  },
  {
    id: "programming",
    name: "Programming & Core",
    badge: "Foundation",
    skills: [
      "Python",
      "SQL",
      "Data Structures and Algorithms"
    ]
  },
  {
    id: "core_cs",
    name: "Core Computer Science",
    badge: "CS Theory",
    skills: [
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Design and Analysis of Algorithms",
      "Computer Organization and Architecture",
      "Software Engineering",
      "Automata and Formal Languages",
      "Data Mining and Data Warehousing"
    ]
  },
  {
    id: "cloud_mlops",
    name: "Cloud, DevOps & MLOps",
    badge: "Deployment",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git/GitHub",
      "Google Cloud Platform (GCP)",
      "Cloud Run",
      "GKE",
      "MLflow",
      "Weights & Biases",
      "Vercel",
      "Render"
    ]
  },
  {
    id: "testing_tools",
    name: "Testing & Tools",
    badge: "Quality & Streaming",
    skills: [
      "Pytest",
      "Playwright",
      "Selenium",
      "Postman",
      "Kafka",
      "Reddit API",
      "Matplotlib",
      "Seaborn"
    ]
  }
];

export const PROJECTS = [
  {
    id: "rag-document-qa",
    number: "01",
    title: "RAG Document Q&A System",
    tagline: "Retrieval-Augmented Generation for Enterprise Documents",
    category: "Generative AI / RAG",
    featured: true,
    summary:
      "Built an advanced retrieval-augmented generation system using LangChain, Hugging Face Transformers, and FAISS for semantic document search, context retrieval, and precise question answering.",
    keyPoints: [
      "Built semantic document search and context retrieval engine using LangChain and Hugging Face Transformers.",
      "Integrated FAISS vector database to index and search high-dimensional text embeddings.",
      "Implemented custom prompt templates and chunking strategies to minimize hallucination and maximize precision.",
      "Developed an intuitive Streamlit interface featuring robust error handling and cross-platform compatibility."
    ],
    techStack: [
      "LangChain",
      "Hugging Face Transformers",
      "FAISS",
      "Streamlit",
      "Python",
      "Vector Search"
    ],
    problem:
      "Standard foundation LLMs struggle with private domain-specific data and risk generating hallucinations when answering questions outside their pretraining cutoff.",
    approach:
      "Constructed a modular RAG pipeline that extracts document text, performs semantic chunking, computes dense vector embeddings, stores them in FAISS, and dynamically feeds retrieved context into curated prompt templates.",
    implementation:
      "Employed LangChain orchestrators with local Hugging Face transformer models for embeddings and QA. Crafted custom prompt guards and chunk overlap algorithms to preserve context boundaries. Built an interactive Streamlit UI with state preservation and responsive query feedback.",
    outcome:
      "Accurate, grounded context retrieval with verified reduction in hallucinated responses, providing dependable document question answering."
  },
  {
    id: "sentiment-pipeline",
    number: "02",
    title: "Real-Time Sentiment Analysis & AI Pipeline Dashboard",
    tagline: "Event-Driven Streaming Ingestion with Transformer Inference",
    category: "Streaming AI & MLOps",
    featured: true,
    summary:
      "Developed a real-time data ingestion and sentiment analysis pipeline utilizing Reddit API, Kafka, and Hugging Face transformer models with FastAPI and Streamlit.",
    keyPoints: [
      "Engineered real-time data ingestion pipeline streaming live discussions via Reddit API.",
      "Managed message distribution and high-throughput event processing with Apache Kafka.",
      "Inferred real-time sentiment classifications using Hugging Face transformer models.",
      "Exposed backend inference via FastAPI microservices and built live Streamlit dashboard for monitoring."
    ],
    techStack: [
      "Reddit API",
      "Kafka",
      "Hugging Face",
      "FastAPI",
      "Streamlit",
      "Python"
    ],
    problem:
      "Capturing real-time sentiment shifts across large social discussions requires an architecture that can decouple high-velocity ingestion from computationally intensive NLP inference.",
    approach:
      "Implemented an asynchronous publish-subscribe model using Apache Kafka to buffer incoming Reddit posts, routing them to scalable FastAPI inference workers running Hugging Face sentiment models.",
    implementation:
      "Configured Kafka producers for live Reddit ingestion and consumers for batched tokenization and transformer inference. Exposed endpoints via FastAPI microservices and created a live auto-refreshing Streamlit analytics dashboard for real-time visualization of sentiment trends and LLM outputs.",
    outcome:
      "Resilient, decoupled streaming pipeline capable of processing live social media feeds and rendering real-time sentiment analytics."
  },
  {
    id: "ott-monetization",
    number: "03",
    title: "OTT Platform Monetization & Machine Learning Analysis",
    tagline: "Full-Stack Predictive Retention & Behavioral Segmentation",
    category: "Full-Stack Machine Learning",
    featured: true,
    summary:
      "Engineered ML models (Random Forest, XGBoost, Logistic Regression) to analyze customer churn, revenue streams, and behavioral segmentation, deployed with React/Vite, FastAPI, and Docker.",
    keyPoints: [
      "Trained and evaluated Random Forest, XGBoost, and Logistic Regression models for customer churn prediction.",
      "Analyzed subscription revenue streams and conducted multi-dimensional behavioral segmentation.",
      "Developed a modern full-stack web application with React/Vite frontend and FastAPI microservice backend.",
      "Containerized entire architecture with Docker and deployed across Vercel and Render."
    ],
    techStack: [
      "Random Forest",
      "XGBoost",
      "Logistic Regression",
      "React",
      "Vite",
      "FastAPI",
      "Docker",
      "Vercel",
      "Render"
    ],
    problem:
      "Subscription streaming platforms experience subscriber attrition and lack real-time predictive risk scoring to guide retention offers and monetization strategies.",
    approach:
      "Engineered a full-stack predictive ML pipeline that transforms subscriber viewing history, engagement patterns, and payment profiles into churn probabilities and customer segments.",
    implementation:
      "Cleaned and engineered feature sets, trained classification models (Random Forest, XGBoost, Logistic Regression), and deployed predictive APIs via FastAPI. Built an interactive React/Vite user interface for analytics and packaged the service in Docker containers deployed to Render and Vercel.",
    outcome:
      "Production-ready containerized analytical dashboard delivering real-time churn risk indicators and revenue insights."
  },
  {
    id: "resume-matcher",
    number: "04",
    title: "Resume / Job Description Matcher & Semantic Scoring Tool",
    tagline: "Dense Embedding Matching & Automated Screening",
    category: "NLP & Semantic Search",
    featured: false,
    summary:
      "Created a semantic matching tool using SentenceTransformers, spaCy, and TF-IDF to calculate semantic similarity scores between resumes and job descriptions, streamlining automated screening workflows.",
    keyPoints: [
      "Calculated semantic similarity scores between candidate resumes and target job descriptions.",
      "Leveraged SentenceTransformers for deep dense vector semantic representations.",
      "Employed spaCy for linguistic preprocessing, tokenization, and named entity recognition.",
      "Incorporated TF-IDF vectorization for keyword density alignment alongside dense embeddings."
    ],
    techStack: [
      "SentenceTransformers",
      "spaCy",
      "TF-IDF",
      "Scikit-Learn",
      "Python"
    ],
    problem:
      "Traditional keyword-matching screening systems penalize qualified candidates who use synonymous phrasing or different terminology for the same core skills.",
    approach:
      "Combined dense contextual sentence embeddings from SentenceTransformers with linguistic entity extraction via spaCy and TF-IDF statistical weighting to form a holistic relevance score.",
    implementation:
      "Parsed unstructured resume and job description text, preprocessed tokens with spaCy, computed cosine distance across SentenceTransformer dense vectors, and weighted critical technical qualifications.",
    outcome:
      "Streamlined screening pipeline providing nuanced, semantic-aware alignment scores to accelerate candidate evaluation."
  },
  {
    id: "time-series",
    number: "05",
    title: "Time Series Forecasting Application",
    tagline: "Statistical & Deep Learning Sequential Forecasting",
    category: "Deep Learning & Forecasting",
    featured: false,
    summary:
      "Implemented and benchmarked ARIMA, Prophet, and LSTM (PyTorch) models for predictive time series analysis, visualized with interactive Plotly Dash components.",
    keyPoints: [
      "Benchmarked classical statistical models (ARIMA) against additive seasonal models (Prophet).",
      "Designed and trained Long Short-Term Memory (LSTM) recurrent neural networks in PyTorch.",
      "Compared multi-step forecasting horizons and sequential error metrics across datasets.",
      "Built interactive visual dashboard utilizing Plotly Dash components for exploratory data analysis."
    ],
    techStack: [
      "ARIMA",
      "Prophet",
      "LSTM",
      "PyTorch",
      "Plotly Dash",
      "Python"
    ],
    problem:
      "Evaluating sequential time-series patterns requires understanding when statistical baselines outperform complex deep learning models and vice versa.",
    approach:
      "Constructed a comparative forecasting testbed implementing classical ARIMA, additive Prophet models, and deep recurrent LSTM networks under consistent evaluation metrics.",
    implementation:
      "Wrote custom PyTorch dataset loaders and recurrent layers for LSTM modeling. Calibrated ARIMA orders and Prophet seasonal parameters. Developed an interactive Plotly Dash interface allowing dynamic selection of models, confidence intervals, and forecasting horizons.",
    outcome:
      "Interactive time-series analysis platform providing clear comparative metrics between classical and deep sequential learning algorithms."
  }
];

export const EDUCATION = {
  institution: "Kalinga Institute of Industrial Technology (KIIT)",
  degree: "B.Tech in Computer Science and Engineering",
  location: "Bhubaneswar, Odisha, India",
  graduation: "Expected Graduation: 2026",
  status: "Final-Year Undergraduate",
  focus: "Generative AI, Large Language Models, Machine Learning & Backend Engineering"
};

export const CERTIFICATIONS = [
  {
    id: "gcp-genai",
    title: "Google Cloud Generative AI Learning Path",
    issuer: "Google Cloud",
    badge: "Cloud AI",
    description: "Comprehensive foundational and practical training covering generative AI architectures, prompt design, and cloud-scale foundation model deployments."
  },
  {
    id: "ibm-aiml",
    title: "IBM AI/ML Certification",
    issuer: "IBM",
    badge: "AI Engineering",
    description: "Rigorous curriculum focused on machine learning algorithms, deep learning principles, model evaluation, and practical AI application development."
  },
  {
    id: "lbs-program",
    title: "London Business School Certificate Program",
    issuer: "London Business School",
    badge: "Strategic Leadership",
    description: "Executive certificate curriculum developing analytical perspective, technology decision-making, and commercial impact strategy."
  }
];

export const AI_PIPELINE_NODES = [
  { id: "input", label: "Multi-Modal Documents / Live Streams", type: "source", color: "from-blue-500 to-cyan-400" },
  { id: "chunk", label: "Semantic Chunking & spaCy Preprocessing", type: "process", color: "from-cyan-400 to-teal-400" },
  { id: "embed", label: "SentenceTransformers Dense Embeddings", type: "model", color: "from-teal-400 to-emerald-400" },
  { id: "vector", label: "FAISS / Pinecone / Weaviate Vector Store", type: "database", color: "from-emerald-400 to-indigo-500" },
  { id: "agent", label: "LangChain / LlamaIndex Agentic Orchestrator", type: "orchestrator", color: "from-indigo-500 to-purple-500" },
  { id: "llm", label: "Foundation Models (GPT / LLaMA / Claude / Gemini)", type: "llm", color: "from-purple-500 to-pink-500" },
  { id: "serving", label: "FastAPI Microservices & Dockerized Pipelines", type: "serving", color: "from-pink-500 to-blue-500" }
];
