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

export const PAPERS: Paper[] = [
  {
    id: "p1",
    title: "BoTTA: Benchmarking on-device Test Time Adaptation",
    authors: ["Michal Danilowski", "Soumyajit Chatterjee", "Abhirup Ghosh"],
    venue: "accepted in SenSys",
    year: 2026,
    abstract: "BoTTA introduces a benchmark to evaluate test-time adaptation (TTA) methods under realistic on-device constraints (limited samples, limited categories, diverse shifts) and reports system-level metrics on real devices to guide practical TTA for mobile and edge deployments.",
    link: "https://arxiv.org/abs/2504.10149",
    tags: ["Test-Time Adaptation", "On-device", "Benchmark"]
  },
  {
    id: "p2",
    title: "E-BATS: Efficient Backpropagation-Free Test-Time Adaptation for Speech Foundation Models",
    authors: ["Jiaheng Dong", "Hong Jia", "Soumyajit Chatterjee", "Abhirup Ghosh", "James Bailey", "Ting Dang"],
    venue: "accepted in NeurIPS",
    year: 2025,
    abstract: "E-BATS is a backpropagation-free test-time adaptation framework tailored for speech foundation models combining lightweight prompt adaptation, a multi-scale loss, and a test-time EMA to improve accuracy while keeping memory use low for resource-constrained settings.",
    link: "https://arxiv.org/abs/2506.07078",
    tags: ["Speech", "Test-Time Adaptation", "Efficient TTA"]
  },
  {
    id: "p3",
    title: "Uncertainty-Aware Personalized Federated Learning for Realistic Healthcare Applications",
    authors: ["Yuwei Zhang", "Tong Xia", "Abhirup Ghosh", "Cecilia Mascolo"],
    venue: "Machine Learning for Health (ML4H)@NeurIPS",
    year: 2025,
    abstract: "This paper proposes an uncertainty-aware personalized federated learning approach for healthcare applications, improving robustness and personalization by modelling predictive uncertainty and tailoring models to local client distributions.",
    link: "https://www.semanticscholar.org/paper/dcd30d03770924b583517eec1509873d47949fb2",
    tags: ["Federated Learning", "Healthcare", "Uncertainty", "Personalization"]
  },
  {
    id: "p6",
    title: "FLea: Addressing Data Scarcity and Label Skew in Federated Learning via Privacy-preserving Feature Augmentation",
    authors: ["Tong Xia", "Abhirup Ghosh", "Xinchi Qiu", "Cecilia Mascolo"],
    venue: "KDD",
    year: 2024,
    abstract: "FLea proposes a global feature buffer, feature-augmentation via activation mix-ups, and an obfuscation method to reduce correlation between activations and source data; it improves federated learning under data scarcity and label skew while preserving privacy.",
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
  }
];

export const NEWS: NewsItem[] = [
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