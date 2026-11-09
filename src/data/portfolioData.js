/*
  All site content lives here. Components hide anything left empty:
  - an empty repoUrl / demoUrl hides that link
  - an empty image shows a generated placeholder tile
  - an empty EXPERIENCE array hides the Experience section and its nav link
  Put images in /public/images and reference them as "/images/file.png".
*/

export const PERSONAL_INFO = {
  name: 'Ayushman Banerjee',
  role: 'Generative AI & LLM Engineer',
  location: 'Durgapur, India',
  email: 'banerjeeayushman280405@gmail.com',
  github: 'https://github.com/Ayushman2804',
  linkedin: 'https://linkedin.com/in/ayushman-banerjee-07b625319',
  resumePath: '/Ayushman_Banerjee_Resume.pdf',
  // Square headshot, at least 800px, e.g. '/images/ayushman.jpg'
  photo: '',
  availability: 'Open to Generative AI and LLM engineering roles.',
  bio: [
    'I’m a final-year Computer Science student at KIIT. Most of my work is on the retrieval side of language models: chunking documents well, choosing embeddings, and keeping answers grounded in the source text.',
    'Around that I build the plumbing that makes a model usable: FastAPI services, Kafka streams, Docker images and deployments on Google Cloud, Vercel and Render.',
  ],
};

/*
  Projects are listed in the order shown. The first three (featured: true)
  get large rows; the rest are listed compactly underneath.
*/
export const PROJECTS = [
  {
    id: 'rag-document-qa',
    featured: true,
    title: 'RAG document Q&A',
    tagline: 'Ask questions of your own documents and get answers grounded in them.',
    summary:
      'A retrieval-augmented generation system that chunks documents, indexes their embeddings in FAISS and answers questions using only the retrieved passages.',
    techStack: ['LangChain', 'Hugging Face Transformers', 'FAISS', 'Streamlit', 'Python'],
    repoUrl: '',
    demoUrl: '',
    image: '',
    keyPoints: [
      'Semantic search and context retrieval with LangChain and Hugging Face Transformers.',
      'FAISS index over dense text embeddings for fast nearest-neighbour lookup.',
      'Custom prompt templates and chunk-overlap settings to reduce hallucinated answers.',
      'Streamlit interface with error handling for unsupported or malformed files.',
    ],
    problem:
      'General-purpose LLMs don’t know your private documents, and when asked about them they tend to make answers up.',
    approach:
      'Extract text, split it into overlapping semantic chunks, embed each chunk, store the vectors in FAISS, and feed the top matches into a prompt that tells the model to answer only from that context.',
    implementation:
      'LangChain orchestrates the pipeline with local Hugging Face models for both embeddings and generation. Chunk overlap preserves context across boundaries, and prompt guards keep the model from answering beyond what was retrieved. The Streamlit UI keeps session state between questions.',
    outcome:
      'Answers stay tied to the uploaded documents, with noticeably fewer hallucinated responses than querying the model directly.',
  },
  {
    id: 'sentiment-pipeline',
    featured: true,
    title: 'Real-time sentiment pipeline',
    tagline: 'Live Reddit discussions, scored for sentiment as they arrive.',
    summary:
      'Streams Reddit posts through Kafka to FastAPI workers running a Hugging Face sentiment model, with a live Streamlit dashboard on top.',
    techStack: ['Kafka', 'FastAPI', 'Hugging Face', 'Reddit API', 'Streamlit', 'Python'],
    repoUrl: '',
    demoUrl: '',
    image: '',
    keyPoints: [
      'Live ingestion of discussions through the Reddit API.',
      'Apache Kafka buffers and distributes events between ingestion and inference.',
      'Transformer-based sentiment classification on each batch.',
      'FastAPI inference service feeding an auto-refreshing Streamlit dashboard.',
    ],
    problem:
      'Tracking sentiment across fast-moving discussions means ingestion can’t wait on slow NLP inference.',
    approach:
      'Decouple the two with publish–subscribe: Kafka buffers incoming posts, and inference workers consume them at their own pace.',
    implementation:
      'Kafka producers pull from the Reddit API; consumers batch and tokenize posts and run a Hugging Face sentiment model. Results are served through FastAPI endpoints and plotted in a Streamlit dashboard that refreshes automatically.',
    outcome:
      'A resilient pipeline that keeps up with live feeds and shows sentiment trends as they shift.',
  },
  {
    id: 'ott-monetization',
    featured: true,
    title: 'OTT churn and revenue analysis',
    tagline: 'Predicting which streaming subscribers are about to leave.',
    summary:
      'Churn prediction and behavioural segmentation for a streaming platform, served through a FastAPI backend and a React dashboard.',
    techStack: ['XGBoost', 'Random Forest', 'Logistic Regression', 'FastAPI', 'React', 'Docker'],
    repoUrl: 'https://github.com/Ayushman2804/OTT_PLATFORM_MONETIZATION_ANALYSIS',
    demoUrl: '',
    image: '',
    keyPoints: [
      'Compared Random Forest, XGBoost and Logistic Regression for churn prediction.',
      'Analysed subscription revenue and segmented subscribers by behaviour.',
      'React and Vite frontend over a FastAPI prediction service.',
      'Containerised with Docker and deployed on Vercel and Render.',
    ],
    problem:
      'Subscription platforms lose subscribers without warning and have no per-user risk score to target retention offers.',
    approach:
      'Turn viewing history, engagement and payment data into churn probabilities and customer segments.',
    implementation:
      'Cleaned and engineered features, trained and compared three classifiers, and exposed predictions through a FastAPI service. A React/Vite dashboard presents risk and revenue views, and the whole stack runs in Docker.',
    outcome:
      'A deployed dashboard showing churn risk and revenue insights per segment.',
  },
  {
    id: 'resume-matcher',
    featured: false,
    title: 'Resume and job description matcher',
    tagline: 'Scores how well a resume fits a job, beyond exact keywords.',
    summary:
      'Combines SentenceTransformer embeddings, spaCy preprocessing and TF-IDF into one relevance score between a resume and a job description.',
    techStack: ['SentenceTransformers', 'spaCy', 'TF-IDF', 'scikit-learn', 'Python'],
    repoUrl: 'https://github.com/Ayushman2804/RESUME_JOB_DESCRIPTION_MATCHER',
    demoUrl: '',
    image: '',
    keyPoints: [
      'Dense sentence embeddings capture meaning, not just shared words.',
      'spaCy handles tokenisation and named-entity extraction.',
      'TF-IDF weighting keeps important keywords in the score.',
    ],
    problem:
      'Keyword screeners penalise qualified candidates who describe the same skill in different words.',
    approach:
      'Blend semantic similarity from embeddings with entity extraction and keyword weighting into a single score.',
    implementation:
      'Parse resume and job text, preprocess with spaCy, compute cosine similarity between SentenceTransformer vectors, and weight key technical qualifications with TF-IDF.',
    outcome:
      'Match scores that reward equivalent experience phrased differently, speeding up first-pass screening.',
  },
  {
    id: 'time-series',
    featured: false,
    title: 'Time series forecaster',
    tagline: 'ARIMA, Prophet and LSTM compared on the same data.',
    summary:
      'A forecasting testbed that benchmarks classical and deep-learning models, with an interactive Plotly Dash interface.',
    techStack: ['PyTorch', 'LSTM', 'ARIMA', 'Prophet', 'Plotly Dash', 'Python'],
    repoUrl: 'https://github.com/Ayushman2804/TIME_SERIES_FORECASTER',
    demoUrl: '',
    image: '',
    keyPoints: [
      'ARIMA and Prophet baselines against an LSTM written in PyTorch.',
      'Multi-step horizons evaluated with the same error metrics.',
      'Dash interface to switch models, horizons and confidence intervals.',
    ],
    problem:
      'It’s not obvious when a statistical baseline beats a deep model for a given series, and when it doesn’t.',
    approach:
      'Run all three model families under identical evaluation so the comparison is fair.',
    implementation:
      'Custom PyTorch dataset loaders and recurrent layers for the LSTM, tuned ARIMA orders and Prophet seasonality, and a Dash app for exploring the results.',
    outcome:
      'Side-by-side metrics showing where each approach does best.',
  },
];

/*
  Add internships, research or work here, most recent first, e.g.
  {
    role: 'Machine Learning Intern',
    org: 'Company name',
    orgUrl: 'https://company.com',
    period: 'May 2025 – Jul 2025',
    location: 'Remote',
    points: ['What you built or changed, and the result.'],
    stack: ['Python', 'FastAPI'],
  },
*/
export const EXPERIENCE = [];

export const EDUCATION = {
  institution: 'Kalinga Institute of Industrial Technology (KIIT)',
  degree: 'B.Tech, Computer Science and Engineering',
  location: 'Bhubaneswar, India',
  period: 'Expected 2026',
  coursework: [
    'Data structures and algorithms',
    'Operating systems',
    'DBMS',
    'Computer networks',
    'Design and analysis of algorithms',
    'Computer organisation and architecture',
    'Software engineering',
    'Automata and formal languages',
    'Data mining and warehousing',
  ],
};

export const CERTIFICATIONS = [
  { title: 'Generative AI learning path', issuer: 'Google Cloud', url: '' },
  { title: 'AI and machine learning certification', issuer: 'IBM', url: '' },
  { title: 'Certificate programme', issuer: 'London Business School', url: '' },
];

export const SKILL_GROUPS = [
  {
    name: 'LLMs and retrieval',
    skills: [
      'LangChain',
      'LlamaIndex',
      'Hugging Face Transformers',
      'Sentence Transformers',
      'FAISS',
      'Pinecone',
      'Weaviate',
      'Prompt engineering',
      'Fine-tuning',
      'AI agents',
      'GPT',
      'LLaMA',
      'Gemini',
      'Claude',
    ],
  },
  {
    name: 'ML and backend',
    skills: [
      'Python',
      'SQL',
      'PyTorch',
      'scikit-learn',
      'XGBoost',
      'spaCy',
      'FastAPI',
      'Kafka',
      'Streamlit',
      'Plotly Dash',
      'React',
    ],
  },
  {
    name: 'Cloud and MLOps',
    skills: ['Docker', 'Kubernetes', 'Google Cloud (Cloud Run, GKE)', 'CI/CD', 'MLflow', 'Weights & Biases', 'Git', 'Vercel', 'Render'],
  },
  {
    name: 'Testing and analysis',
    skills: ['Pytest', 'Playwright', 'Selenium', 'Postman', 'Matplotlib', 'Seaborn'],
  },
];
