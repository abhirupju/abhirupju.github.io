import { Paper, Profile, NewsItem, Student, Blog } from './src/types';

export const PROFILE: Profile = {
  name: "Abhirup Ghosh",
  title: "Assistant Professor",
  affiliation: "School of Computer Science, Univrersity of Birmingham",
  email: "a.ghosh.1@bham.ac.uk",
  scholarLink: "https://scholar.google.com/citations?user=JY7HrcQAAAAJ&hl=en",
  githubLink: "",
  twitterLink: "",
  linkedinLink: "https://www.linkedin.com/in/abhirup-ghosh-cs/",
  bio: "<p>I’m an Assistant Professor in the <a class=\"text-blue-600 hover:underline\" href=\"https://www.birmingham.ac.uk/about/college-of-engineering-and-physical-sciences/computer-science\" target=\"_blank\" rel=\"noreferrer\">School of Computer Science</a> at the University of Birmingham and a visiting researcher at the <a class=\"text-blue-600 hover:underline\" href=\"https://mobile-systems.cl.cam.ac.uk/\" target=\"_blank\" rel=\"noreferrer\">Mobile Systems Research Lab, University of Cambridge</a>. I completed my PhD at the University of Edinburgh under Dr. Rik Sarkar.</p>\b<p>My vision is to design algorithms that autonomously keep machine learning models updated on smart edge devices with minimal resource overhead and under practical data constraints. My work sits at the intersection of machine learning and distributed systems, advancing federated learning, test-time adaptation, and Mixture-of-Agents. I’m also passionate about the geometric and topological characteristics of modern ML systems, and use these structures to gain efficiency.</p>\b<p>I’m especially interested in problems that mix system constraints, privacy, and real-world sensing data across graphs, mobility, and health. I’m always looking for motivated PhD students and collaborators — if this vibes with you, let’s talk.</p>",
  interests: ["Machine Learning", "Test Time Adaptation", "Federated Learning", "Multi-agent Systems"]
};

// Toggle site features
export const SHOW_BLOGS = false;

// Configuration for which papers to show in the selected publications section
export const SELECTED_PAPER_IDS = ["p1", "p2", "p6", "p4", "p5"];

export const PAPERS: Paper[] = [
  {
    id: "p1",
    title: "BoTTA: Benchmarking on-device Test Time Adaptation",
    authors: ["Michal Danilowski", "Soumyajit Chatterjee", "Abhirup Ghosh"],
    venue: "accepted in SenSys",
    year: 2026,
    abstract: "BoTTA introduces a benchmark to evaluate test-time adaptation methods under realistic on-device constraints, providing actionable guidance for resource-constrained deployments.",
    link: "https://arxiv.org/abs/2504.10149",
    tags: ["Test-Time Adaptation", "On-device", "Benchmark"]
  },
  {
    id: "p2",
    title: "E-BATS: Efficient Backpropagation-Free Test-Time Adaptation for Speech Foundation Models",
    authors: ["Jiaheng Dong", "Hong Jia", "Soumyajit Chatterjee", "Abhirup Ghosh", "James Bailey", "Ting Dang"],
    venue: "accepted in NeurIPS",
    year: 2025,
    abstract: "E-BATS introduces the first efficient backpropagation-free test-time adaptation framework for speech foundation models, achieving 4.1%–13.5% accuracy gains with 2.0×–6.4× memory savings.",
    link: "https://arxiv.org/abs/2506.07078",
    tags: ["Speech", "Test-Time Adaptation", "Efficient TTA"]
  },
  {
    id: "p7",
    title: "NEO: No-Optimization Test-Time Adaptation through Latent Re-Centering",
    authors: ["Alexander Murphy", "Michal Danilowski", "Soumyajit Chatterjee", "Abhirup Ghosh"],
    venue: "accepted in ICLR",
    year: 2026,
    abstract: "NEO presents a hyperparameter-free test-time adaptation method through latent re-centering, reducing inference time by 63% and memory usage by 9% on edge devices.",
    link: "https://arxiv.org/abs/2510.05635",
    tags: ["Test-Time Adaptation", "Computer Vision", "Efficient TTA"]
  },
  {
    id: "p3",
    title: "Uncertainty-Aware Personalized Federated Learning for Realistic Healthcare Applications",
    authors: ["Yuwei Zhang", "Tong Xia", "Abhirup Ghosh", "Cecilia Mascolo"],
    venue: "Machine Learning for Health (ML4H)@NeurIPS",
    year: 2025,
    abstract: "FedEE proposes an uncertainty-aware personalized federated learning framework for healthcare, achieving 15% improvement in uncertainty estimation with 5× efficiency gains.",
    link: "https://www.semanticscholar.org/paper/dcd30d03770924b583517eec1509873d47949fb2",
    tags: ["Federated Learning", "Healthcare", "Uncertainty", "Personalization"]
  },
  {
    id: "p6",
    title: "FLea: Addressing Data Scarcity and Label Skew in Federated Learning via Privacy-preserving Feature Augmentation",
    authors: ["Tong Xia", "Abhirup Ghosh", "Xinchi Qiu", "Cecilia Mascolo"],
    venue: "KDD",
    year: 2024,
    abstract: "FLea addresses data scarcity and label skew in federated learning through privacy-preserving feature augmentation, achieving over 5% improvement in 13 of 18 experimental settings.",
    link: "https://dl.acm.org/doi/10.1145/3637528.3671899",
    tags: ["Federated Learning", "Data Augmentation", "Privacy"]
  },
  {
    id: "p4",
    title: "Modeling with Homophily Driven Heterogeneous Data in Gossip Learning",
    authors: ["Abhirup Ghosh", "Cecilia Mascolo"],
    venue: "IJCAI",
    year: 2023,
    abstract: "Proposes a neighbor-weighting strategy for Gossip Learning to accelerate convergence when devices have homophily-driven heterogeneous data; includes efficient and fair augmentations and evaluation on real and synthetic datasets.",
    link: "https://www.ijcai.org/proceedings/2023/0416.pdf",
    tags: ["Gossip Learning", "Heterogeneous Data", "Federated Learning"]
  },
  {
    id: "p5",
    title: "Machine learning detects altered spatial navigation features in outdoor behaviour of Alzheimer\u2019s disease patients",
    authors: ["Abhirup Ghosh", "Vaisakh Puthusseryppady", "Dennis Chan", "Cecilia Mascolo", "Michael Hornberger"],
    venue: "Scientific Reports",
    year: 2022,
    abstract: "Using GPS tracking and machine learning, this study identifies spatiotemporal outdoor navigation features that discriminate Alzheimer\u2019s disease patients from controls, demonstrating potential wearable-based digital biomarkers.",
    link: "https://doi.org/10.1038/s41598-022-06899-w",
    tags: ["Digital Biomarkers", "Alzheimer's", "Wearables", "Mobility"]
  },
  {
    id: "p8",
    title: "Human-centred artificial intelligence for mobile health sensing: challenges and opportunities",
    authors: ["Ting Dang", "Dimitris Spathis", "Abhirup Ghosh", "Cecilia Mascolo"],
    venue: "Royal Society Open Science",
    year: 2023,
    abstract: "A comprehensive survey exploring challenges and opportunities in human-centred AI for mobile health sensing, focusing on audio, location, and activity tracking modalities.",
    link: "https://royalsocietypublishing.org/doi/10.1098/rsos.230806",
    tags: ["Mobile Health", "Human-Centred AI", "Survey"]
  },
  {
    id: "p9",
    title: "Cross-device federated learning for mobile health diagnostics: A first study on COVID-19 detection",
    authors: ["Tong Xia", "Jing Han", "Abhirup Ghosh", "Cecilia Mascolo"],
    venue: "ICASSP",
    year: 2023,
    abstract: "FedLoss introduces a novel cross-device federated learning framework for health diagnostics that averages models based on predictive loss rather than sample count, achieving 79% AUC-ROC for COVID-19 detection.",
    link: "https://ieeexplore.ieee.org/document/10096516",
    tags: ["Federated Learning", "Mobile Health", "COVID-19"]
  },
  {
    id: "p10",
    title: "Investigating domain-agnostic performance in activity recognition using accelerometer data",
    authors: ["Apinan Hasthanasombat", "Abhirup Ghosh", "Dimitris Spathis", "Cecilia Mascolo"],
    venue: "UbiComp/ISWC Adjunct",
    year: 2022,
    abstract: "Presents domain-agnostic human activity recognition models that generalize to unseen test domains without requiring target domain data, using a leave-datasets-out evaluation regime and showing simple models can outperform deep learning approaches.",
    link: "https://dl.acm.org/doi/10.1145/3544793.3560381",
    tags: ["Activity Recognition", "Domain Adaptation", "Wearables"]
  },
  {
    id: "p11",
    title: "Publishing asynchronous event times with pufferfish privacy",
    authors: ["Jiaxin Ding", "Abhirup Ghosh", "Rik Sarkar", "Jie Gao"],
    venue: "DCOSS",
    year: 2022,
    abstract: "Addresses privacy concerns in publishing IoT event timestamps by formulating three privacy issues and proposing mechanisms using Pufferfish privacy framework with timestamp perturbation and fake event injection.",
    link: "https://ieeexplore.ieee.org/document/9884862",
    tags: ["Privacy", "IoT", "Differential Privacy"]
  },
  {
    id: "p12",
    title: "Continual and Sliding Window Release for Private Empirical Risk Minimization",
    authors: ["Lauren Watson", "Abhirup Ghosh", "Benedek Rozemberczki", "Rik Sarkar"],
    venue: "arXiv preprint",
    year: 2022,
    abstract: "Develops regularized empirical risk minimization algorithms for continually releasing private machine learning models with bounded differential privacy cost and near-optimal accuracy over infinite time horizons.",
    link: "https://arxiv.org/abs/2203.03594",
    tags: ["Differential Privacy", "Continual Learning", "Machine Learning"]
  },
  {
    id: "p13",
    title: "Benchmarking Federated Machine Unlearning methods for Tabular Data",
    authors: ["Chenguang Xiao", "Abhirup Ghosh", "Han Wu", "Shuo Wang", "Diederick van Thiel"],
    venue: "arXiv preprint",
    year: 2025,
    abstract: "Presents the first comprehensive benchmark study of machine unlearning methods in federated learning environments for tabular data, comparing fidelity, certifiability, and computational efficiency across various algorithms.",
    link: "https://arxiv.org/abs/2504.00921",
    tags: ["Federated Learning", "Machine Unlearning", "Privacy"]
  },
  {
    id: "p14",
    title: "Mobility-based individual poi recommendation to control the covid-19 spread",
    authors: ["Abhirup Ghosh", "Tong Xia"],
    venue: "IEEE Big Data",
    year: 2021,
    abstract: "Proposes an individual-level POI recommendation system that reduces COVID-19 infections by up to 50% while satisfying all check-in needs, based on crowd density and temporal visit patterns.",
    link: "https://ieeexplore.ieee.org/document/9671717",
    tags: ["COVID-19", "Mobility", "Recommendation Systems"]
  },
  {
    id: "p15",
    title: "HYPO: skew-resilient partitioning for trajectory datasets",
    authors: ["Giannis Evagorou", "Abhirup Ghosh", "Thomas Heinis"],
    venue: "ACM SIGSPATIAL Workshop",
    year: 2021,
    abstract: "Develops HYPO, a hybrid partitioning algorithm for distributing trajectory datasets across clusters that performs robustly against data skew, enabling efficient Query by Path execution at scale.",
    link: "https://dl.acm.org/doi/10.1145/3486635.3491076",
    tags: ["Trajectory Data", "Distributed Systems", "Spatial Computing"]
  },
  {
    id: "p16",
    title: "Heterogeneous interventions reduce the spread of COVID-19 in simulations on real mobility data",
    authors: ["Haotian Wang", "Abhirup Ghosh", "Jiaxin Ding", "Rik Sarkar", "Jie Gao"],
    venue: "Scientific Reports",
    year: 2021,
    abstract: "Demonstrates that targeted interventions focused on highly mobile individuals and popular venues are more effective than broad lockdowns, reducing peak infection rates while maintaining high social activity levels.",
    link: "https://doi.org/10.1038/s41598-021-87034-z",
    tags: ["COVID-19", "Mobility", "Epidemiological Modeling"]
  },
  {
    id: "p17",
    title: "Differentially private range counting in planar graphs for spatial sensing",
    authors: ["Abhirup Ghosh", "Jiaxin Ding", "Rik Sarkar", "Jie Gao"],
    venue: "IEEE INFOCOM",
    year: 2020,
    abstract: "Develops novel hierarchical data structures for differentially private range counting over arbitrary planar graphs, enabling efficient spatial sensing queries with poly-logarithmic error and distributed processing capabilities.",
    link: "https://ieeexplore.ieee.org/document/9155375",
    tags: ["Differential Privacy", "Spatial Computing", "Graph Algorithms"]
  },
  {
    id: "p18",
    title: "Machine learning and privacy preserving algorithms for spatial and temporal sensing",
    authors: ["Abhirup Ghosh"],
    venue: "PhD Thesis, University of Edinburgh",
    year: 2019,
    abstract: "PhD thesis proposing theoretically grounded algorithms for learning from location and time stamps in sensor data, leveraging geometry, topology, and statistics for privacy-preserving spatial-temporal analysis.",
    link: "https://era.ed.ac.uk/handle/1842/36923",
    tags: ["PhD Thesis", "Spatial-Temporal", "Privacy", "Machine Learning"]
  },
  {
    id: "p19",
    title: "Topological signatures for fast mobility analysis",
    authors: ["Abhirup Ghosh", "Benedek Rozemberczki", "Subramanian Ramamoorthy", "Rik Sarkar"],
    venue: "ACM SIGSPATIAL",
    year: 2018,
    abstract: "Introduces topological signatures that map trajectories to low-dimensional Euclidean space for efficient mobility analysis, enabling faster data mining tasks and accurate mobility prediction with theoretical guarantees.",
    link: "https://dl.acm.org/doi/10.1145/3274895.3274943",
    tags: ["Topology", "Mobility", "Trajectory Analysis"]
  },
  {
    id: "p20",
    title: "Finding periodic discrete events in noisy streams",
    authors: ["Abhirup Ghosh", "Christopher Lucas", "Rik Sarkar"],
    venue: "ACM CIKM",
    year: 2017,
    abstract: "Develops a particle filter-based model for detecting and predicting periodic events in noisy streams with constant computational complexity, enabling real-time performance in low-resource settings.",
    link: "https://dl.acm.org/doi/10.1145/3132847.3132953",
    tags: ["Time Series", "Streaming Algorithms", "Periodic Detection"]
  },
  {
    id: "p21",
    title: "In-Network Approximate and Efficient Spatiotemporal Range Queries on Moving Objects",
    authors: ["Guang Yang", "Abhirup Ghosh", "Liang Liang", "Thomas Heinis"],
    venue: "EDBT",
    year: 2024,
    abstract: "Proposes a novel planar graph-based framework for privacy-aware in-network spatiotemporal range queries, achieving 13.8% relative error with 25.6% of sensors and 3.5× speedup over exact methods.",
    link: "https://www.semanticscholar.org/paper/In-Network-Approximate-and-Efficient-Spatiotemporal-Yang-Liang/de0d44dbd81b87c1caf9dfb7474a3049f9a8c02c",
    tags: ["Spatial Computing", "In-Network Processing", "Moving Objects"]
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "n0",
    date: "Feb 2026",
    title: "NEO accepted at ICLR 2026",
    content: "Big congratulations to Alex Murphy who did this as part of his internship.",
  },
  {
    id: "n1",
    date: "Nov 2025",
    title: "Co-Publication Chair — ACM MobiSys 2026",
    content: "I am serving as a co-Publication Chair for ACM MobiSys 2026. Consider submitting your best work!",
    link: "https://www.sigmobile.org/mobisys/2026/"
  },
  {
    id: "n2",
    date: "Oct 2025",
    title: "New joint PhD student: Jiaheng Dong",
    content: "Jiaheng Dong has joined as a joint PhD student with the University of Melbourne; jointly supervised by Dr. Ting Dang.",
  },
    {
    id: "n3",
    date: "Oct 2025",
    title: "BoTTA accepted at SenSys 2026",
    content: "Congratulations Michal Danilowski!",
    relatedPaperId: "p1"
  },
  {
    id: "n4",
    date: "Sep 2025",
    title: "Royal Society project on Test-Time Adaptation concluded",
    content: "The Royal Society Research funding project on Test-Time Adaptation (1 yr) has now ended. This has resulted in two papers: BoTTA (see selected publications) and NEO (https://arxiv.org/abs/2510.05635).",
    relatedPaperId: "p1"
  },
  {
    id: "n5",
    date: "Sep 2025",
    title: "E-BATS accepted at NeurIPS 2025",
    content: "Congratulations to Jiaheng Dong, Hong Jia, Soumyajit Chatterjee, James Bailey, Ting Dang!",
    relatedPaperId: "p2"
  },
];

export const STUDENTS: Student[] = [
  {
    id: "s1",
    name: "Michal Danilowski",
    topic: "Decentralized ways to keep on-device ML models updated",
    type: "PhD"
  },
  {
    id: "s2",
    name: "Jiaheng Dong",
    topic: "Efficient ways to keep Speech models updated",
    type: "PhD"
  },
];

export const BLOGS: Blog[] = [
  {
    id: "b1",
    title: "The Future of Systems for AI",
    date: "June 15, 2024",
    readTime: "5 min read",
    excerpt: "Why we need to rethink operating system abstractions for the era of large foundation models.",
    content: "The rapid rise of Large Language Models (LLMs) has shifted the bottleneck of computation from traditional logic to massive data movement and parallel tensor operations. Traditional OS abstractions, designed for CPU-centric general-purpose computing, are increasingly becoming a hindrance... [Full article content would go here] ... We need to move towards a more data-centric OS architecture.",
    tags: ["Systems", "AI", "Opinion"],
    coverImage: "https://picsum.photos/id/48/800/400"
  },
  {
    id: "b2",
    title: "Notes from OSDI 2024",
    date: "May 30, 2024",
    readTime: "3 min read",
    excerpt: "Key takeaways and interesting papers from this year's OSDI conference in Santa Clara.",
    content: "OSDI this year was packed with papers addressing the scalability challenges of generative AI. One of the most interesting trends was the focus on heterogeneous computing clusters... [Full article content would go here] ... Overall, a very inspiring conference.",
    tags: ["Conference", "Travel", "Research"],
    coverImage: "https://picsum.photos/id/20/800/400"
  },
  {
    id: "b3",
    title: "Getting Started with Distributed Training",
    date: "April 10, 2024",
    readTime: "8 min read",
    excerpt: "A tutorial on setting up PyTorch DDP on a small university cluster.",
    content: "Distributed Data Parallel (DDP) is the bread and butter of modern deep learning. However, setting it up on a bespoke SLURM cluster can be tricky. In this guide, I walk through the common pitfalls... [Full article content would go here] ... Happy training!",
    tags: ["Tutorial", "PyTorch", "Engineering"],
    coverImage: "https://picsum.photos/id/60/800/400"
  }
];