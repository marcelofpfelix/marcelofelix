export type ProfileLink = {
  label: string;
  href: string;
};

export type ProfileMeta = {
  label: string;
  value: string;
};

export type CvItem = {
  title: string;
  dates?: string;
  location?: string;
  description?: string;
};

export type CvGroup = {
  entity?: string;
  url?: string;
  logo?: string;
  items: CvItem[];
};

export type CvSection = {
  id: string;
  title: string;
  icon: string;
  page: 1 | 2;
  groups: CvGroup[];
};

export type ProfileProject = {
  repo: string;
  description: string;
};

export const profile = {
  name: "Marcelo Félix",
  handle: "marcelofpfelix",
  headline: "Telco/CS Eng @telnyx",
  avatar: "/cv/marcelo/marcelo.jpg",
  favicon: "/cv/marcelo/marcelo.ico",
  ogImage: "/cv/marcelo/og.png",
  canonicalCv: "https://bandonga.com/cv/marcelo",
  location: "Working remote at Europe",
  summary:
    "Telco and CS Engineer working in VoIP Operations, with a background in Software Programming and Networking. Broad knowledge, from Real-Time Protocols to Infra, with troubleshooting experience.",
  email: "marcelo [at] bandonga.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marcelofelix" },
    { label: "GitHub", href: "https://github.com/marcelofpfelix" },
    { label: "Telegram", href: "https://t.me/marcelofpfelix" },
    { label: "Keybase", href: "https://keybase.io/marcelofpfelix" },
    { label: "bandonga.com", href: "https://bandonga.com" },
  ] satisfies ProfileLink[],
  meta: [
    { label: "Location", value: "Working remote at Europe" },
    { label: "Nationality", value: "Portuguese" },
    { label: "Language", value: "Proficient in English" },
    { label: "Role", value: "SW Eng (Backend | VoIP)" },
    { label: "Role", value: "DevOps (SRE | Cloud)" },
  ] satisfies ProfileMeta[],
};

export const cvSections: CvSection[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "user",
    page: 1,
    groups: [
      {
        items: [
          {
            title: "Profile",
            description:
              "Telco and CS Engineer working in VoIP Operations, with a background in Software Programming and Networking. Broad knowledge, from Real-Time Protocols to Infra, with troubleshooting experience. Eager to learn more about SRE, Linux, Networking, VoIP, DevOps, Coding, Monitoring, Cloud Computing, Automation, Microservices and Containers. Enthusiastic about open source, writing and experimenting in a Homelab.",
          },
        ],
      },
    ],
  },
  {
    id: "experience",
    title: "Professional Experience",
    icon: "briefcase",
    page: 1,
    groups: [
      {
        entity: "Telnyx",
        url: "https://telnyx.com/",
        logo: "/cv/marcelo/telnyx.png",
        items: [
          {
            title: "SW Engineer",
            dates: "May 2021 - Present",
            location: "Remote",
            description:
              "DevOps Engineeer, specialised in RTC communications (SIP proxies), using kamailio and developing in python, go.",
          },
        ],
      },
      {
        entity: "Talkdesk",
        url: "https://talkdesk.com/",
        logo: "/cv/marcelo/talkdesk.png",
        items: [
          {
            title: "VoIP Network Engineer",
            dates: "Nov 2018 - Mai 2021",
            location: "Remote",
            description:
              "Professional Services and Support Eng Voice specialist responsible to diagnose and solve complex Call Quality issues in CCaaS and SIP trunk setups between multiple SBC/PBX and a CPaaS, with E2E troubleshooting and Service Delivery.",
          },
        ],
      },
      {
        entity: "Celfocus",
        url: "https://celfocus.com/",
        logo: "/cv/marcelo/celfocus.png",
        items: [
          {
            title: "Service Operations",
            dates: "2014 - Nov 2018",
            location: "Lisboa",
            description:
              "Capgemini and CELFocus project in the Unified Communications team, with Vodafone One Net and GCC service. SRE-style operations for Red Hat Linux, SIP Trunks, PBX, Weblogic, ActiveMQ JMS Broker and NOKIA mCAS. Development of tools and scripting with bash and python for monitoring and automation. Tier 2 support, fault/change management, release acceptance, on-call, networking troubleshooting, REST/SOAP Web Services, VoIP and SIP flows in the IMS Network.",
          },
        ],
      },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    icon: "tools",
    page: 1,
    groups: [
      {
        items: [
          {
            title: "Skills",
            description:
              "<ul><li>Software Eng programming in Python, Go, Bash, git.</li><li>Linux (RedHat/Debian), Docker containers and Kubernetes Administration.</li><li>Automation and CI/CD with Ansible, Packer, Vagrant and Jenkins.</li><li>Monitoring with ElasticSearch, Prometheus and Grafana.</li><li>Understanding of Networking (TCP/IP), routing and switching.</li><li>Experience in RTC SIP/RTP Protocols, IMS Network, WebRTC, SIP Servers/Proxies (Kamailio).</li><li>Interaction with PostgresDB, InfluxDB and OracleDB.</li><li>Homelab with Proxmox VE virtualization.</li></ul>",
          },
        ],
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    icon: "school",
    page: 2,
    groups: [
      {
        entity: "Técnico - Universidade de Lisboa",
        url: "https://tecnico.ulisboa.pt/",
        logo: "/cv/marcelo/tecnico.png",
        items: [
          {
            title: "Master in Computers Science & Electrical Engineering",
            location: "Lisboa",
            description:
              "<strong>Specialisation in Telecommunications and Computer Science</strong><br>Knowledge of Fundamentals of Communications, Propagation and Radiation, and Telecommunication Networks and Systems. Development of programming skills in C, JAVA and MATLAB. SQL, DB modeling and Entity relationship diagrams. Additional basic knowledge of Mathematica, HTML5, Javascript and PHP.",
          },
        ],
      },
    ],
  },
  {
    id: "certifications",
    title: "Certifications",
    icon: "award",
    page: 2,
    groups: [
      {
        entity: "WebLogic Server 12c Administrator",
        url: "https://www.youracclaim.com/users/marcelofelix",
        logo: "/cv/marcelo/weblogic.png",
        items: [{ title: "Oracle" }],
      },
    ],
  },
  {
    id: "organizations",
    title: "Organizations",
    icon: "university",
    page: 2,
    groups: [
      {
        entity: "Best",
        url: "https://www.best.eu.org",
        logo: "/cv/marcelo/best.png",
        items: [
          {
            title: "Sprint course",
            dates: "May 2013",
            location: "Lyon",
            description: "Course about telecommunications, with students around Europe.",
          },
        ],
      },
      {
        entity: "SystemsGroup",
        url: "https://systems-group.org/",
        logo: "/cv/marcelo/systemsgroup.png",
        items: [
          {
            title: "Finance Board",
            dates: "2010 - 2011",
            location: "Lisboa",
            description:
              "Youth Association with IT services and aim to support entrepreneurship and the creation of junior companies.",
          },
        ],
      },
      {
        entity: "República \"A Desordem dos Engenheiros\"",
        url: "https://desordem.org",
        logo: "/cv/marcelo/desordem.png",
        items: [
          {
            title: "Secretary / President",
            dates: "2008 - 2013",
            location: "Lisboa",
            description:
              "A fraternity house connected to Instituto Superior Técnico. I was involved with financial, human and material resources, diplomatic relationships with other fraternities and institutions, and organized events.",
          },
        ],
      },
    ],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    icon: "hands",
    page: 2,
    groups: [
      {
        entity: "Colégio Maria Auxiliadora",
        url: "https://sdb.org",
        logo: "/cv/marcelo/salesianos.png",
        items: [
          {
            title: "Volunteer lead",
            dates: "Aug 2014",
            location: "Namaacha",
            description:
              "The leader in a short-term GASTagus project: management of a five-volunteer team, supervisor of project design and implementation, and cooperation with local NGOs.",
          },
        ],
      },
      {
        entity: "ACRIDES",
        url: "http://acrides.org.cv",
        logo: "/cv/marcelo/acrides.png",
        items: [
          {
            title: "Volunteer / Volunteer lead",
            dates: "Aug 2012 / Aug 2013",
            location: "Praia",
            description:
              "Volunteer in the GASTagus project in the outskirts of Praia: cooperation with a local NGDO, ACRIDES, giving training to children, teenagers and adults in education for development, and leader in the next year.",
          },
        ],
      },
      {
        entity: "Leigos para o Desenvolvimento",
        url: "https://pontosj.pt/leigos/",
        logo: "/cv/marcelo/leigos.png",
        items: [
          {
            title: "Volunteer",
            dates: "2012",
            location: "Lisboa",
            description:
              "Supporting immigrant children in school underachievement and integration at Centro S. Pedro Claver.",
          },
        ],
      },
      {
        entity: "GASTagus",
        url: "https://www.gastagus.org",
        logo: "/cv/marcelo/gastagus.png",
        items: [
          {
            title: "Volunteer / Collaborator / Collaborator lead",
            dates: "2011 - 2014",
            location: "Lisboa",
            description:
              "NGDO where I received 120 hours of training in education for development and fundraising. Collaborator responsible for volunteer recruitment and training, plus financial and logistic coordination for short-term international youth volunteer projects.",
          },
        ],
      },
    ],
  },
];

export const timelineEvents = cvSections
  .flatMap(section => section.groups.flatMap(group => group.items.map(item => ({
    date: item.dates ?? section.title,
    content: `<strong>${item.title}</strong>${group.entity ? ` · ${group.entity}` : ""}`,
  }))))
  .filter(event => event.date !== "Skills" && event.date !== "Profile");

export const profileProjects: ProfileProject[] = [
  {
    repo: "marcelofpfelix/paper-pure",
    description: "Reusable Astro theme package wrapping Pure with a Paper-like blog surface.",
  },
  {
    repo: "marcelofpfelix/astrocv",
    description: "Astro CV theme direction inspired by jekyllcv, with data-driven sections and A4 print output.",
  },
  {
    repo: "marcelofpfelix/tmx",
    description: "Rust replacement idea for local tmux helper scripts and terminal workflow glue.",
  },
];
