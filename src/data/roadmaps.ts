// DevOpulse - DevOps & Cloud Career Roadmaps
// Specialized roadmaps for DevOps and Cloud engineering careers

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  category: 'DevOps Fundamentals' | 'Career Transitions' | 'Cloud Platforms' | 'Tools & Technologies' | 'Advanced DevOps' | 'Specialized Roles';
  subcategory?: 'Intern to DevOps' | 'Fresher to DevOps' | 'Non-IT to DevOps' | 'Software Engineer to DevOps' | 'SysAdmin to DevOps' | 'QA to DevOps' | 'Support to DevOps';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedMonths: number;
  roadmapShId: string; // The ID used in roadmap.sh embed URL - default: 694d74e0a509d28290af971a
  tags: string[];
  popular?: boolean;
  new?: boolean;
  salary?: string;
  icon?: string;
  prerequisites?: string[];
  learningPath?: string[];
  locked?: boolean; // If true, roadmap is not accessible yet
  comingSoon?: boolean; // Display "Coming Soon" badge
}

export const roadmaps: Roadmap[] = [
  // ========== FEATURED: UNLOCKED ROADMAP ==========
  {
    id: 'intern-to-devops',
    title: 'Intern to DevOps Engineer',
    description: 'Complete roadmap for interns to break into DevOps with hands-on projects and certifications',
    category: 'Career Transitions',
    subcategory: 'Intern to DevOps',
    difficulty: 'Beginner',
    estimatedMonths: 6,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Entry Level', 'Intern', 'Career Start', 'DevOps', 'Projects'],
    new: true,
    popular: true,
    salary: '$60k-$90k',
    icon: '🌱',
    prerequisites: ['Basic CS knowledge', 'Eagerness to learn'],
    learningPath: ['Linux fundamentals', 'Python/Bash scripting', 'Docker basics', 'CI/CD tools', 'Cloud basics (AWS/Azure)', 'Build portfolio projects'],
  },

  // ========== DEVOPS FUNDAMENTALS ==========
  {
    id: 'devops-fundamentals',
    title: 'DevOps Fundamentals',
    description: 'Master the core principles of DevOps: CI/CD, automation, infrastructure as code, and collaboration culture',
    category: 'DevOps Fundamentals',
    difficulty: 'Beginner',
    estimatedMonths: 4,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['DevOps', 'CI/CD', 'Git', 'Linux', 'Automation'],
    popular: true,
    salary: '$85k-$130k',
    icon: '🚀',
    prerequisites: ['Basic programming knowledge', 'Command line familiarity'],
    learningPath: ['Linux basics', 'Git & version control', 'CI/CD concepts', 'Docker basics'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'linux-for-devops',
    title: 'Linux for DevOps Engineers',
    description: 'Deep dive into Linux system administration, shell scripting, and server management essential for DevOps',
    category: 'DevOps Fundamentals',
    difficulty: 'Beginner',
    estimatedMonths: 3,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Linux', 'Bash', 'Shell Scripting', 'System Administration'],
    popular: true,
    salary: '$75k-$125k',
    icon: '🐧',
    learningPath: ['Linux distributions', 'File systems & permissions', 'Process management', 'Shell scripting', 'Package management'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'git-github-devops',
    title: 'Git & GitHub for DevOps',
    description: 'Master version control, branching strategies, GitHub Actions, and collaboration workflows',
    category: 'DevOps Fundamentals',
    difficulty: 'Beginner',
    estimatedMonths: 2,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Git', 'GitHub', 'Version Control', 'GitHub Actions', 'GitOps'],
    popular: true,
    salary: '$80k-$130k',
    icon: '📦',
    learningPath: ['Git fundamentals', 'Branching strategies', 'Pull requests', 'GitHub Actions', 'GitOps principles'],
    locked: true,
    comingSoon: true
  },

  // ========== CAREER TRANSITIONS TO DEVOPS ==========
  {
    id: 'fresher-to-devops',
    title: 'Fresher to DevOps Engineer',
    description: 'Step-by-step guide for fresh graduates to land their first DevOps role with zero experience',
    category: 'Career Transitions',
    subcategory: 'Fresher to DevOps',
    difficulty: 'Beginner',
    estimatedMonths: 5,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Fresh Graduate', 'Entry Level', 'First Job', 'DevOps'],
    popular: true,
    salary: '$65k-$95k',
    icon: '🎓',
    prerequisites: ['Computer science degree or bootcamp'],
    learningPath: ['Choose a programming language (Python/Go)', 'Learn Linux & networking', 'Master Git', 'Docker & Kubernetes basics', 'AWS/Azure fundamentals', 'Build 3-5 projects'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'non-it-to-devops',
    title: 'Non-IT Background to DevOps',
    description: 'Career switcher roadmap: transition from non-tech fields into high-paying DevOps roles',
    category: 'Career Transitions',
    subcategory: 'Non-IT to DevOps',
    difficulty: 'Beginner',
    estimatedMonths: 8,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Career Change', 'Non-Tech', 'Bootcamp', 'Self-Taught'],
    new: true,
    salary: '$70k-$110k',
    icon: '🔄',
    prerequisites: ['Strong motivation', 'Willingness to learn'],
    learningPath: ['Computer fundamentals', 'Programming basics (Python)', 'Linux essentials', 'Networking basics', 'Cloud computing intro', 'DevOps tools', 'Certifications (AWS/Azure)', 'Build portfolio'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'software-engineer-to-devops',
    title: 'Software Engineer to DevOps',
    description: 'Leverage your development skills to transition into DevOps/SRE roles with cloud and infrastructure expertise',
    category: 'Career Transitions',
    subcategory: 'Software Engineer to DevOps',
    difficulty: 'Intermediate',
    estimatedMonths: 4,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Developer', 'SRE', 'Infrastructure', 'Platform Engineering'],
    popular: true,
    salary: '$100k-$160k',
    icon: '💻',
    prerequisites: ['Programming experience', 'Understanding of SDLC'],
    learningPath: ['Infrastructure as Code (Terraform/Pulumi)', 'Kubernetes deep dive', 'Observability (Prometheus/Grafana)', 'Cloud architecture', 'Security best practices', 'SRE principles'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'sysadmin-to-devops',
    title: 'System Admin to DevOps Engineer',
    description: 'Transform your sysadmin experience into modern DevOps practices with automation and cloud',
    category: 'Career Transitions',
    subcategory: 'SysAdmin to DevOps',
    difficulty: 'Intermediate',
    estimatedMonths: 5,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['SysAdmin', 'Infrastructure', 'Automation', 'Cloud Migration'],
    popular: true,
    salary: '$90k-$140k',
    icon: '🖥️',
    prerequisites: ['Linux administration', 'Networking knowledge'],
    learningPath: ['Learn programming (Python/Go)', 'Infrastructure as Code', 'CI/CD pipelines', 'Containerization', 'Cloud platforms', 'Monitoring & logging'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'qa-to-devops',
    title: 'QA/Test Engineer to DevOps',
    description: 'Transition from manual/automation testing to DevOps with focus on CI/CD and quality automation',
    category: 'Career Transitions',
    subcategory: 'QA to DevOps',
    difficulty: 'Intermediate',
    estimatedMonths: 5,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['QA', 'Testing', 'Test Automation', 'CI/CD'],
    salary: '$85k-$130k',
    icon: '✅',
    prerequisites: ['Testing experience', 'Basic scripting'],
    learningPath: ['Advanced scripting', 'CI/CD tools (Jenkins/GitLab)', 'Test automation frameworks', 'Docker & Kubernetes', 'Infrastructure testing', 'Security testing'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'support-to-devops',
    title: 'IT Support to DevOps Engineer',
    description: 'Grow from helpdesk/support role into DevOps with systematic skill development',
    category: 'Career Transitions',
    subcategory: 'Support to DevOps',
    difficulty: 'Beginner',
    estimatedMonths: 7,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['IT Support', 'Helpdesk', 'Career Growth', 'Upskilling'],
    new: true,
    salary: '$75k-$120k',
    icon: '🎧',
    prerequisites: ['IT support experience', 'Problem-solving skills'],
    learningPath: ['Linux administration', 'Networking deep dive', 'Programming (Python)', 'Cloud basics', 'Automation scripting', 'DevOps tools', 'Build projects'],
    locked: true,
    comingSoon: true
  },

  // ========== CLOUD PLATFORMS ==========
  {
    id: 'aws-devops',
    title: 'AWS for DevOps Engineers',
    description: 'Complete AWS roadmap: EC2, S3, Lambda, ECS, EKS, CloudFormation, and DevOps best practices',
    category: 'Cloud Platforms',
    difficulty: 'Intermediate',
    estimatedMonths: 5,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['AWS', 'Cloud', 'EC2', 'Lambda', 'EKS', 'CloudFormation'],
    popular: true,
    salary: '$95k-$150k',
    icon: '☁️',
    learningPath: ['AWS fundamentals', 'Compute (EC2, Lambda)', 'Storage (S3, EBS)', 'Networking (VPC, Route53)', 'Containers (ECS, EKS)', 'IaC (CloudFormation, CDK)', 'Certifications'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'azure-devops',
    title: 'Azure DevOps Engineer',
    description: 'Master Azure cloud services, Azure DevOps pipelines, AKS, and enterprise cloud solutions',
    category: 'Cloud Platforms',
    difficulty: 'Intermediate',
    estimatedMonths: 5,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Azure', 'Microsoft', 'AKS', 'Azure DevOps', 'Pipelines'],
    popular: true,
    salary: '$95k-$145k',
    icon: '🔷',
    learningPath: ['Azure fundamentals', 'Azure DevOps', 'Virtual machines & App Services', 'AKS (Azure Kubernetes)', 'Azure networking', 'ARM templates & Bicep', 'Certifications (AZ-400)'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'gcp-devops',
    title: 'Google Cloud Platform (GCP) DevOps',
    description: 'GCP services for DevOps: Compute Engine, GKE, Cloud Build, and Google Cloud architecture',
    category: 'Cloud Platforms',
    difficulty: 'Intermediate',
    estimatedMonths: 5,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['GCP', 'Google Cloud', 'GKE', 'Cloud Build', 'BigQuery'],
    salary: '$95k-$150k',
    icon: '🌐',
    learningPath: ['GCP fundamentals', 'Compute Engine & Cloud Functions', 'GKE (Google Kubernetes Engine)', 'Cloud Build & deployment', 'Networking & security', 'Terraform on GCP'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'multi-cloud-devops',
    title: 'Multi-Cloud DevOps Strategy',
    description: 'Master multi-cloud architecture across AWS, Azure, and GCP with unified DevOps practices',
    category: 'Cloud Platforms',
    difficulty: 'Advanced',
    estimatedMonths: 8,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Multi-Cloud', 'AWS', 'Azure', 'GCP', 'Architecture'],
    new: true,
    salary: '$120k-$180k',
    icon: '🌍',
    prerequisites: ['Experience with at least one cloud platform'],
    learningPath: ['Cloud-agnostic tools', 'Terraform multi-cloud', 'Kubernetes federation', 'Cost optimization', 'Security across clouds', 'Disaster recovery'],
    locked: true,
    comingSoon: true
  },

  // ========== TOOLS & TECHNOLOGIES ==========
  {
    id: 'docker-containerization',
    title: 'Docker & Containerization',
    description: 'Master Docker containers, Docker Compose, multi-stage builds, and container best practices',
    category: 'Tools & Technologies',
    difficulty: 'Beginner',
    estimatedMonths: 2,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Docker', 'Containers', 'Docker Compose', 'Containerization'],
    popular: true,
    salary: '$85k-$135k',
    icon: '🐳',
    learningPath: ['Docker basics', 'Images & containers', 'Docker Compose', 'Networking', 'Volumes', 'Multi-stage builds', 'Security'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'kubernetes-orchestration',
    title: 'Kubernetes Container Orchestration',
    description: 'Complete Kubernetes guide: pods, deployments, services, ingress, Helm, and production clusters',
    category: 'Tools & Technologies',
    difficulty: 'Advanced',
    estimatedMonths: 4,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Kubernetes', 'K8s', 'Orchestration', 'Helm', 'Service Mesh'],
    popular: true,
    salary: '$100k-$160k',
    icon: '☸️',
    learningPath: ['K8s architecture', 'Pods & deployments', 'Services & networking', 'ConfigMaps & Secrets', 'Helm charts', 'Monitoring', 'CKA/CKAD prep'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'terraform-iac',
    title: 'Terraform Infrastructure as Code',
    description: 'Master Terraform for multi-cloud infrastructure: modules, state management, and best practices',
    category: 'Tools & Technologies',
    difficulty: 'Intermediate',
    estimatedMonths: 3,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Terraform', 'IaC', 'Infrastructure as Code', 'Automation'],
    popular: true,
    salary: '$95k-$145k',
    icon: '🏗️',
    learningPath: ['Terraform basics', 'Providers & resources', 'Modules', 'State management', 'Workspaces', 'Best practices', 'Multi-cloud IaC'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'ansible-automation',
    title: 'Ansible Configuration Management',
    description: 'Automate server configuration, application deployment, and orchestration with Ansible',
    category: 'Tools & Technologies',
    difficulty: 'Intermediate',
    estimatedMonths: 3,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Ansible', 'Automation', 'Configuration Management', 'Playbooks'],
    salary: '$90k-$140k',
    icon: '🤖',
    learningPath: ['Ansible fundamentals', 'Playbooks & roles', 'Inventory management', 'Variables & templates', 'Ansible Galaxy', 'Best practices'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'jenkins-cicd',
    title: 'Jenkins CI/CD Pipelines',
    description: 'Build robust CI/CD pipelines with Jenkins: Jenkinsfile, plugins, and enterprise automation',
    category: 'Tools & Technologies',
    difficulty: 'Intermediate',
    estimatedMonths: 3,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Jenkins', 'CI/CD', 'Pipelines', 'Automation'],
    popular: true,
    salary: '$90k-$140k',
    icon: '🔧',
    learningPath: ['Jenkins basics', 'Freestyle vs Pipeline', 'Jenkinsfile', 'Plugins', 'Integration with Git/Docker', 'Blue Ocean', 'Best practices'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'gitlab-cicd',
    title: 'GitLab CI/CD & DevOps Platform',
    description: 'Master GitLab as a complete DevOps platform: pipelines, runners, security scanning',
    category: 'Tools & Technologies',
    difficulty: 'Intermediate',
    estimatedMonths: 3,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['GitLab', 'CI/CD', 'DevSecOps', 'Runners'],
    salary: '$90k-$140k',
    icon: '🦊',
    learningPath: ['GitLab basics', 'CI/CD pipelines', 'Runners', 'Security scanning', 'Container registry', 'GitOps'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'prometheus-grafana',
    title: 'Prometheus & Grafana Monitoring',
    description: 'Implement comprehensive monitoring and observability with Prometheus, Grafana, and alerting',
    category: 'Tools & Technologies',
    difficulty: 'Intermediate',
    estimatedMonths: 3,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Prometheus', 'Grafana', 'Monitoring', 'Observability', 'Metrics'],
    popular: true,
    salary: '$95k-$145k',
    icon: '📊',
    learningPath: ['Prometheus architecture', 'PromQL queries', 'Exporters', 'Grafana dashboards', 'Alertmanager', 'Best practices'],
    locked: true,
    comingSoon: true
  },

  // ========== ADVANCED DEVOPS ==========
  {
    id: 'sre-practices',
    title: 'Site Reliability Engineering (SRE)',
    description: 'Learn Google\'s SRE principles: SLIs, SLOs, error budgets, incident management, and reliability',
    category: 'Advanced DevOps',
    difficulty: 'Advanced',
    estimatedMonths: 6,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['SRE', 'Reliability', 'SLO', 'Incident Management', 'On-Call'],
    popular: true,
    salary: '$120k-$180k',
    icon: '🛡️',
    prerequisites: ['DevOps experience', 'Production systems knowledge'],
    learningPath: ['SRE fundamentals', 'SLIs & SLOs', 'Error budgets', 'Incident response', 'Post-mortems', 'Chaos engineering', 'Toil reduction'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'devsecops',
    title: 'DevSecOps Security Integration',
    description: 'Integrate security into DevOps: SAST, DAST, container security, secrets management',
    category: 'Advanced DevOps',
    difficulty: 'Advanced',
    estimatedMonths: 5,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['DevSecOps', 'Security', 'SAST', 'DAST', 'Compliance'],
    new: true,
    salary: '$110k-$170k',
    icon: '🔐',
    learningPath: ['Security fundamentals', 'SAST/DAST tools', 'Container security', 'Secrets management', 'Compliance as code', 'Security scanning in CI/CD'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'platform-engineering',
    title: 'Platform Engineering',
    description: 'Build internal developer platforms, self-service infrastructure, and developer experience tools',
    category: 'Advanced DevOps',
    difficulty: 'Advanced',
    estimatedMonths: 7,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Platform Engineering', 'Internal Tools', 'Developer Experience', 'Self-Service'],
    new: true,
    popular: true,
    salary: '$120k-$180k',
    icon: '🏗️',
    prerequisites: ['DevOps expertise', 'Infrastructure knowledge'],
    learningPath: ['Platform thinking', 'Internal developer portals', 'Self-service infrastructure', 'Golden paths', 'Platform as a product'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'gitops-argocd',
    title: 'GitOps with ArgoCD & Flux',
    description: 'Implement GitOps methodology with ArgoCD and Flux for declarative Kubernetes deployments',
    category: 'Advanced DevOps',
    difficulty: 'Advanced',
    estimatedMonths: 4,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['GitOps', 'ArgoCD', 'Flux', 'Kubernetes', 'Declarative'],
    popular: true,
    salary: '$105k-$160k',
    icon: '🔄',
    prerequisites: ['Kubernetes knowledge', 'Git proficiency'],
    learningPath: ['GitOps principles', 'ArgoCD setup', 'Flux installation', 'Application deployment', 'Multi-cluster management', 'Best practices'],
    locked: true,
    comingSoon: true
  },

  // ========== SPECIALIZED ROLES ==========
  {
    id: 'cloud-architect',
    title: 'Cloud Solution Architect',
    description: 'Design scalable cloud architectures, lead cloud migrations, and make strategic technical decisions',
    category: 'Specialized Roles',
    difficulty: 'Advanced',
    estimatedMonths: 12,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Architecture', 'Cloud Design', 'Solution Design', 'Enterprise'],
    salary: '$130k-$200k',
    icon: '🏛️',
    prerequisites: ['5+ years cloud experience', 'Multiple cloud platforms'],
    learningPath: ['Architecture patterns', 'Cloud certifications (AWS SA/Azure Architect)', 'Well-Architected Framework', 'Cost optimization', 'Security architecture'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'devops-team-lead',
    title: 'DevOps Team Lead / Manager',
    description: 'Lead DevOps teams, manage projects, mentor engineers, and drive DevOps transformation',
    category: 'Specialized Roles',
    difficulty: 'Advanced',
    estimatedMonths: 24,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['Leadership', 'Management', 'Team Lead', 'Agile'],
    salary: '$130k-$190k',
    icon: '👨‍💼',
    prerequisites: ['DevOps expertise', 'Technical leadership experience'],
    learningPath: ['People management', 'Agile methodologies', 'Technical strategy', 'Hiring & mentoring', 'Stakeholder management'],
    locked: true,
    comingSoon: true
  },
  {
    id: 'cloud-cost-optimization',
    title: 'Cloud Cost Optimization Specialist',
    description: 'Master cloud cost management, FinOps practices, and cost optimization strategies',
    category: 'Specialized Roles',
    difficulty: 'Advanced',
    estimatedMonths: 5,
    roadmapShId: '694d74e0a509d28290af971a',
    tags: ['FinOps', 'Cost Optimization', 'Cloud Economics', 'Budgeting'],
    new: true,
    salary: '$110k-$170k',
    icon: '💰',
    learningPath: ['FinOps framework', 'Cost visibility tools', 'Resource rightsizing', 'Reserved instances', 'Tagging strategies', 'Cost allocation'],
    locked: true,
    comingSoon: true
  }
];

// Helper functions
export function getRoadmapById(id: string): Roadmap | undefined {
  return roadmaps.find(r => r.id === id);
}

export function getRoadmapsByCategory(category: Roadmap['category']): Roadmap[] {
  return roadmaps.filter(r => r.category === category);
}

export function getPopularRoadmaps(): Roadmap[] {
  return roadmaps.filter(r => r.popular);
}

export function getNewRoadmaps(): Roadmap[] {
  return roadmaps.filter(r => r.new);
}

export function getAllCategories(): Roadmap['category'][] {
  return Array.from(new Set(roadmaps.map(r => r.category)));
}

export function searchRoadmaps(query: string): Roadmap[] {
  const lowerQuery = query.toLowerCase();
  return roadmaps.filter(r =>
    r.title.toLowerCase().includes(lowerQuery) ||
    r.description.toLowerCase().includes(lowerQuery) ||
    r.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getRoadmapsBySubcategory(subcategory: Roadmap['subcategory']): Roadmap[] {
  return roadmaps.filter(r => r.subcategory === subcategory);
}

// DevOps-specific helpers
export function getCareerTransitionRoadmaps(): Roadmap[] {
  return roadmaps.filter(r => r.category === 'Career Transitions');
}

export function getCloudPlatformRoadmaps(): Roadmap[] {
  return roadmaps.filter(r => r.category === 'Cloud Platforms');
}
