
import excelIcon from '../assets/icons/excel.svg';
import seabornIcon from '../assets/icons/seaborn.svg';
import latexIcon from '../assets/icons/latex.svg';
import uvIcon from '../assets/icons/uv.svg';

export type Category = 'languages_db' | 'visualization' | 'ml_stats' | 'software_eng';

export interface Skill {
  name: string;
  icon: string;
  description: string;
  category: Category;
}

export const skills: Skill[] = [
  // Linguagens & BDs
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Linguagem principal para Data Science, Machine Learning e automação.',
    category: 'languages_db'
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: 'Consultas complexas, otimização e manipulação de bancos de dados.',
    category: 'languages_db'
  },
  {
    name: 'R',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    description: 'Análise estatística avançada e visualização de dados.',
    category: 'languages_db'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Desenvolvimento web e interatividade em dashboards.',
    category: 'languages_db'
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Estruturação semântica para web e relatórios.',
    category: 'languages_db'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Estilização de interfaces e layouts responsivos.',
    category: 'languages_db'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    description: 'Banco de dados relacional robusto para grandes volumes de dados.',
    category: 'languages_db'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    description: 'Banco de dados NoSQL orientado a documentos para big data.',
    category: 'languages_db'
  },
  {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    description: 'Banco de dados leve e embutido para aplicações locais.',
    category: 'languages_db'
  },

  // Visualização
  {
    name: 'Power BI',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    description: 'Criação de dashboards interativos e storytelling de dados.',
    category: 'visualization'
  },
  {
    name: 'Excel',
    icon: excelIcon,
    description: 'Análise exploratória, tabelas dinâmicas e automação.',
    category: 'visualization'
  },
  {
    name: 'Tableau',
    icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
    description: 'Visualização de dados avançada e business intelligence.',
    category: 'visualization'
  },
  {
    name: 'Matplotlib',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
    description: 'Biblioteca fundamental para plotagem de gráficos em Python.',
    category: 'visualization'
  },
  {
    name: 'Seaborn',
    icon: seabornIcon,
    description: 'Visualização de dados estatísticos atraentes e informativos.',
    category: 'visualization'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    description: 'Prototipagem de UI e Design de Dashboards.',
    category: 'visualization'
  },

  // ML & Estatística
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    description: 'Manipulação e análise de dados estruturados de alta performance.',
    category: 'ml_stats'
  },
  {
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    description: 'Computação numérica e operações matriciais eficientes.',
    category: 'ml_stats'
  },
  {
    name: 'Scikit-learn',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    description: 'Algoritmos de machine learning para classificação e regressão.',
    category: 'ml_stats'
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    description: 'Framework open-source para deep learning e redes neurais.',
    category: 'ml_stats'
  },
  {
    name: 'LaTeX',
    icon: latexIcon,
    description: 'Redação técnica e formatação de documentos científicos.',
    category: 'ml_stats'
  },

  // Engenharia de Software
  {
    name: 'Jupyter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    description: 'Ambiente interativo para desenvolvimento e documentação.',
    category: 'software_eng'
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    description: 'Editor de código poderoso para desenvolvimento ágil.',
    category: 'software_eng'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: 'Controle de versão distribuído para colaboração.',
    category: 'software_eng'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Containerização para padronização de ambientes.',
    category: 'software_eng'
  },
  {
    name: 'UV',
    icon: uvIcon,
    description: 'Gerenciador de projetos e pacotes Python de alta performance.',
    category: 'software_eng'
  }
];

export const skillTabs = [
  { id: 'languages_db', label: 'Linguagens & BDs' },
  { id: 'visualization', label: 'Visualização & Design' },
  { id: 'ml_stats', label: 'ML & Estatística' },
  { id: 'software_eng', label: 'Engenharia de Software' },
];
