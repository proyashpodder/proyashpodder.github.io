/* ==========================================================================
   SITE CONTENT
   --------------------------------------------------------------------------
   This is the only file you need to edit for day-to-day updates:
   news, publications, research, teaching, students.
   Every page reads from here, so a change shows up everywhere at once.

   Strings may contain simple HTML (links, <em>, <b>).
   ========================================================================== */

window.SITE = {

  /* ---------------------------------------------------------------- profile */
  profile: {
    name: "Proyash Podder",
    authorName: "P. Podder",               // how your name appears in author lists
    title: "Assistant Professor of Computer Science",
    department: "Department of Mathematics, Computer Science and Statistics",
    institution: "Muhlenberg College",
    institutionUrl: "https://www.muhlenberg.edu",
    address: "2400 Chew Street, Allentown, PA 18104",
    email: "proyashpodder@muhlenberg.edu",
    office: "Trumbower Building, Room 143",
    photo: "assets/img/profile.jpg",
    links: {
      scholar: "https://scholar.google.com/citations?user=s3KlgVwAAAAJ&hl=en",
      github: "https://github.com/proyashpodder",
      linkedin: "https://www.linkedin.com/in/proyash-podder/",
      // cv: "assets/Proyash_Podder_CV.pdf",   // copy your CV into assets/ and uncomment
    },
  },

  /* ------------------------------------------------------------- navigation */
  nav: [
    { href: "index.html",        label: "Home",         page: "home" },
    { href: "research.html",     label: "Research",     page: "research" },
    { href: "publications.html", label: "Publications", page: "publications" },
    { href: "teaching.html",     label: "Teaching",     page: "teaching" },
    { href: "students.html",     label: "Students",     page: "students" },
    { href: "news.html",         label: "News",         page: "news" },
  ],

  /* -------------------------------------------------------------- education */
  education: [
    {
      degree: "Ph.D. in Computer Science", year: "2023",
      school: "Florida International University, Knight Foundation School of Computing and Information Sciences",
      details: [
        "Dissertation: <em>Automation of Named Data Networking Security by Schematized Authentication and Confidentiality Policies</em>",
        "Advisor: Dr. Alexander Afanasyev",
      ],
    },
    { degree: "M.S. in Computer Science", year: "2023", school: "Florida International University", details: ["Earned en route to the Ph.D."] },
    { degree: "B.Sc. in Computer Science and Engineering", year: "2017", school: "Bangladesh University of Engineering and Technology (BUET)" },
  ],

  /* ------------------------------------------------------------------- news */
  // Newest first. date: "YYYY-MM" or "YYYY". Optional `when` replaces the
  // displayed date (e.g. "Summer 2026").
  news: [
    { date: "2026-09", text: "Our paper &ldquo;Bypassing IoT Cryptography: Key Extraction and Fuzzing on a Consumer IoT Device,&rdquo; led by Michael O&rsquo;Malley and Thomas Cerruti, was published at <a href=\"https://www.intcec.org/editions.html\">IEEE INTCEC 2026</a> in Chicago, IL. Congratulations, Michael and Thomas!" },
    { date: "2026-06", when: "Summer 2026", text: "Mentored five undergraduate researchers in summer research, supported by a Muhlenberg College Summer Research Grant." },
    { date: "2026-02", text: "Presented our paper &ldquo;An Experimental Study of Vulnerabilities in the Zigbee Protocol for IoT Systems&rdquo; at <a href=\"http://www.conf-icnc.org/2026/\">IEEE ICNC 2026</a>." },
    { date: "2025-11", text: "Our paper &ldquo;An Experimental Study of Vulnerabilities in the Zigbee Protocol for IoT Systems,&rdquo; led by Aidan Weingrad, was accepted at <a href=\"http://www.conf-icnc.org/2026/\">IEEE ICNC 2026</a>. Congratulations, Aidan!" },
    { date: "2025-06", when: "Summer 2025", text: "Mentored three undergraduate researchers in summer research on IoT security, supported by a Muhlenberg College Summer Research Grant." },
    { date: "2024-06", when: "Summer 2024", text: "Received a Muhlenberg College New Course Development Grant to develop <em>Introduction to Cybersecurity</em>." },
    { date: "2023-08", text: "Joined Muhlenberg College as a Tenure-track Assistant Professor of Computer Science." },
    { date: "2023-06", text: "Successfully defended my Ph.D. dissertation at Florida International University." },
    { date: "2023-03", text: "Presented my Ph.D. proposal and advanced to candidacy." },
    { date: "2023-03", text: "Organized and attended the <a href=\"https://14th-ndn-hackathon.named-data.net\">14th NDN Hackathon</a>, and worked on an interactive <em>NDN 101</em> website for newcomers." },
    { date: "2023-03", text: "Attended <a href=\"https://www.nist.gov/news-events/events/2023/03/ndncomm-2023\">NDNComm 2023</a>, where our work on SEANAC was presented." },
    { date: "2023-02", text: "Presented two papers at <a href=\"http://www.conf-icnc.org/2023/\">IEEE ICNC 2023</a> in Honolulu, Hawaii." },
    { date: "2022-11", text: "Two papers accepted to <a href=\"http://www.conf-icnc.org/2023/\">IEEE ICNC 2023</a>." },
  ],

  /* --------------------------------------------------------- research areas */
  // The first area is shown as the primary focus.
  areas: [
    {
      id: "iot",
      title: "IoT Security",
      short: "Security of Internet of Things devices and the protocols and platforms that connect them.",
      summary: "IoT security is the main focus of my research, which I carry out with undergraduate researchers at Muhlenberg. Connected devices such as sensors, smart-home appliances, and controllers run lightweight wireless protocols and are often managed through third-party platforms, which creates security risks at every layer. With my students, I built an openHAB-based IoT testbed to study vulnerabilities in the Zigbee protocol and its implementations, and we extract keys from and fuzz consumer IoT devices to test their cryptographic protections. This builds on my earlier work on formal analysis of Zigbee, policy enforcement for smart-home platforms, and secure device bootstrapping.",
    },
    {
      id: "cps",
      title: "Vehicular and Cyber-Physical Systems Security",
      short: "Securing in-vehicle networks and vehicle-to-everything (C-V2X) communication.",
      summary: "Modern vehicles are networks of embedded devices. During my Ph.D., I worked on securing communication inside the vehicle, across buses such as CAN, LIN, and automotive Ethernet, and between vehicles and their surroundings over 5G C-V2X.",
    },
    {
      id: "ndn",
      title: "Named Data Networking Security",
      short: "Trust schemas, automated access control, and secure data sharing; the focus of my doctoral research.",
      summary: "My doctoral research focused on automating security for Named Data Networking (NDN), a data-centric Internet architecture in which every piece of data is signed: languages and compilers for trust schemas and name-based access control, and security for a federated storage system for large scientific datasets.",
    },
  ],

  /* --------------------------------------------------------------- projects */
  // status: "current" (Muhlenberg, with students) or "phd" (Florida International University)
  projects: [
    {
      area: "iot", status: "current",
      title: "Experimental Security Analysis of Zigbee in IoT Systems",
      summary: "An IoT testbed for finding vulnerabilities in the Zigbee protocol and its implementations.",
      bullets: [
        "Built an openHAB-based IoT testbed with multiple Zigbee devices and communication models, together with undergraduate researchers.",
        "Identified vulnerabilities in the Zigbee protocol and its implementations.",
      ],
      keywords: ["Zigbee", "openHAB", "IoT testbed"],
      papers: ["zigbee-icnc26"],
    },
    {
      area: "iot", status: "current",
      title: "Key Extraction and Fuzzing on Consumer IoT Devices",
      summary: "Testing whether the cryptographic protections of consumer IoT devices hold up in practice.",
      bullets: [
        "With two undergraduate researchers, extracted cryptographic keys from a consumer IoT device and fuzzed it to bypass its cryptographic protections.",
      ],
      keywords: ["Key extraction", "Fuzzing", "Embedded security"],
      papers: ["iotcrypto-intcec26"],
    },
    {
      area: "iot", status: "phd",
      title: "Formal Security Analysis of Zigbee",
      summary: "Formal models of Zigbee 1.0 and 3.0 that reveal security flaws in a widely deployed IoT protocol.",
      bullets: [
        "Modeled Zigbee 1.0 and 3.0 in the Tamarin Prover and confirmed the vulnerabilities with captured traffic.",
      ],
      keywords: ["Zigbee", "Tamarin Prover", "Formal methods"],
      papers: ["zigbee-hotsos20"],
    },
    {
      area: "iot", status: "phd",
      title: "Policy Enforcement for Smart-Home Platforms",
      summary: "Expectation-based policy analysis and enforcement that keeps smart-home automations from violating users&rsquo; security expectations.",
      bullets: [
        "Built expectation-based policy enforcement for programmable smart-home platforms, demonstrated on openHAB.",
      ],
      keywords: ["Smart homes", "openHAB", "Policy enforcement"],
      papers: ["expat-sacmat19"],
    },
    {
      area: "iot", status: "phd",
      title: "Secure Bootstrapping of IoT Devices",
      summary: "Vibration-assisted, automated bootstrapping that brings new IoT devices into a secure network with minimal user effort.",
      bullets: [],
      keywords: ["Device onboarding", "Bootstrapping"],
      papers: ["ndnviber-iccw20"],
    },
    {
      area: "cps", status: "phd",
      title: "Securing Automotive Architectures",
      summary: "NDN-based secure in-vehicle networking.",
      bullets: [
        "Helped build NDN-based secure in-vehicle networking across CAN, LIN, and automotive Ethernet.",
      ],
      keywords: ["CAN", "LIN", "Automotive Ethernet"],
      papers: ["auto-itsc22", "invehicle-autosec22"],
    },
    {
      area: "cps", status: "phd",
      title: "C-V2X Communication for Pedestrian Safety",
      summary: "A scalable pedestrian-safety application over 5G C-V2X.",
      bullets: [
        "Designed a C-V2X-over-NDN forwarding strategy for a scalable pedestrian-safety application, evaluated with ndnSIM (ns-3) and SUMO.",
      ],
      keywords: ["5G C-V2X", "ns-3", "SUMO"],
      papers: ["spa-icnc23"],
    },
    {
      area: "ndn", status: "phd",
      title: "Automating NDN Security with Schemas",
      summary: "Policy languages and compilers that turn high-level security requirements into enforceable rules and keys.",
      bullets: [
        "Designed domain-specific policy languages and compilers for NDN trust schemas (VerSec) and name-based access control (SEANAC).",
        "Developed the TLV encoding, integration with the ndn-cxx library, and automated key generation and distribution.",
      ],
      keywords: ["Trust schemas", "Access control", "Compilers"],
      papers: ["seanac-icnc23", "versec-hoticn22", "versec-icn22"],
    },
    {
      area: "ndn", status: "phd",
      title: "Hydra: Decentralized Storage for Large Scientific Datasets",
      summary: "A federated, decentralized storage system for large genomics datasets.",
      bullets: [
        "Designed the security bootstrapping procedure and access-control policies.",
      ],
      keywords: ["Distributed storage", "Genomics data"],
      papers: ["hydra-icnc24", "hydra-arxiv22"],
    },
  ],

  /* ----------------------------------------------------------- publications */
  // Authors ending in † are undergraduate students mentored at Muhlenberg.
  // type: "conference" | "workshop" | "preprint"
  // short: label used when projects link to the paper
  // venueUrl: optional link to the conference website
  // selected: true → also listed on the home page
  publications: [
    {
      id: "iotcrypto-intcec26", type: "conference", year: 2026, when: "September 2026", short: "IEEE INTCEC 2026", selected: true,
      title: "Bypassing IoT Cryptography: Key Extraction and Fuzzing on a Consumer IoT Device",
      authors: ["M. O’Malley†", "T. Cerruti†", "P. Podder"],
      venue: "IEEE INTCEC 2026, Chicago, IL",
      venueUrl: "https://www.intcec.org/editions.html",
    },
    {
      id: "zigbee-icnc26", type: "conference", year: 2026, short: "IEEE ICNC 2026", selected: true,
      title: "An Experimental Study of Vulnerabilities in the Zigbee Protocol for IoT Systems",
      authors: ["A. Weingrad†", "P. Podder"],
      venue: "International Conference on Computing, Networking and Communications (ICNC), IEEE",
      venueUrl: "http://www.conf-icnc.org/2026/",
    },
    {
      id: "hydra-icnc24", type: "conference", year: 2024, short: "IEEE ICNC 2024",
      title: "Hydra: A Scalable Decentralized P2P Storage Federation for Large Scientific Datasets",
      authors: ["J. Presley", "X. Wang", "X. Ai", "T. Yu", "T. Brandel", "P. Podder", "V. Patil", "A. Afanasyev", "F. A. Feltus", "L. Zhang", "S. Shannigrahi"],
      venue: "International Conference on Computing, Networking and Communications (ICNC), IEEE",
    },
    {
      id: "seanac-icnc23", type: "conference", year: 2023, short: "IEEE ICNC 2023",
      title: "SEANAC: Schema Enforced Automation of Name-Based Access Control",
      authors: ["P. Podder", "A. Afanasyev"],
      venue: "International Conference on Computing, Networking and Communications (ICNC), IEEE",
    },
    {
      id: "spa-icnc23", type: "conference", year: 2023, short: "IEEE ICNC 2023",
      title: "SPA: A Scalable Pedestrian-Awareness Application Using NDN over C-V2X",
      authors: ["P. Podder", "A. Neishaboori", "S. Datta Gupta", "A. Afanasyev"],
      venue: "International Conference on Computing, Networking and Communications (ICNC), IEEE",
    },
    {
      id: "versec-hoticn22", type: "conference", year: 2022, short: "IEEE HotICN 2022",
      title: "A Systematic Analysis to Improve Versatility of VerSec Trust Schema",
      authors: ["P. Podder", "A. Afanasyev"],
      venue: "5th International Conference on Hot Information-Centric Networking (HotICN), IEEE",
      url: "https://ieeexplore.ieee.org/iel7/10036187/10036190/10036225.pdf",
    },
    {
      // REVIEW: your CV lists six authors; the earlier site (and arXiv) also listed S. Thanasoulas and S. Ghafoor.
      id: "auto-itsc22", type: "conference", year: 2022, short: "IEEE ITSC 2022", pages: "2663–2668",
      title: "Securing Automotive Architectures with Named Data Networking",
      authors: ["Z. Threet", "C. Papadopoulos", "W. Lambert", "P. Podder", "S. Thanasoulas", "A. Afanasyev", "S. Ghafoor", "S. Shannigrahi"],
      venue: "IEEE 25th International Conference on Intelligent Transportation Systems (ITSC)",
      url: "https://arxiv.org/pdf/2206.08278",
    },
    {
      id: "zigbee-hotsos20", type: "conference", year: 2020, short: "HotSoS 2020", pages: "1–11", selected: true,
      title: "A Formal Security Analysis of ZigBee (1.0 and 3.0)",
      authors: ["P. Podder", "L. Li", "E. Hoque"],
      venue: "7th Symposium on Hot Topics in the Science of Security (HotSoS), ACM",
      url: "https://dl.acm.org/doi/pdf/10.1145/3384217.3385617",
    },
    {
      id: "expat-sacmat19", type: "conference", year: 2019, short: "ACM SACMAT 2019", selected: true,
      title: "ExPAT: Expectation-Based Policy Analysis and Enforcement for Appified Smart-Home Platforms",
      authors: ["M. Yahyazadeh", "P. Podder", "E. Hoque", "O. Chowdhury"],
      venue: "24th ACM Symposium on Access Control Models and Technologies (SACMAT)",
      url: "https://dl.acm.org/doi/pdf/10.1145/3322431.3325107",
    },
    {
      id: "versec-icn22", type: "workshop", year: 2022, short: "ACM ICN 2022",
      title: "On Improving Versatility of VerSec Trust Schema",
      authors: ["P. Podder", "A. Afanasyev"],
      venue: "9th ACM Conference on Information-Centric Networking (ICN)",
      url: "https://dl.acm.org/doi/pdf/10.1145/3517212.3559487",
    },
    {
      // REVIEW: author order differs between your CV and the earlier site; this follows the earlier site.
      id: "invehicle-autosec22", type: "workshop", year: 2022, short: "AutoSec 2022",
      title: "In-Vehicle Communication Using Named Data Networking",
      authors: ["Z. Threet", "C. Papadopoulos", "P. Podder", "W. Lambert", "H. Burnell", "A. Afanasyev", "S. Ghafoor", "S. Shannigrahi"],
      venue: "Workshop on Automotive and Autonomous Vehicle Security (AutoSec), co-located with NDSS",
      url: "https://www.ndss-symposium.org/wp-content/uploads/autosec2022_23011_paper.pdf",
    },
    {
      id: "ndnviber-iccw20", type: "workshop", year: 2020, short: "IEEE ICC Workshops 2020", pages: "1–6",
      title: "NDNViber: Vibration-Assisted Automated Bootstrapping of IoT Devices",
      authors: ["S. K. Ramani", "P. Podder", "A. Afanasyev"],
      venue: "IEEE International Conference on Communications Workshops (ICC Workshops)",
      url: "https://ieeexplore.ieee.org/iel7/9138348/9145032/09145306.pdf",
    },
    {
      id: "hydra-arxiv22", type: "preprint", year: 2022, short: "arXiv 2022",
      title: "Hydra: A Federated Data Repository over NDN",
      authors: ["J. Presley", "X. Wang", "T. Brandel", "X. Ai", "P. Podder", "T. Yu", "V. Patil", "L. Zhang", "A. Afanasyev", "F. A. Feltus", "S. Shannigrahi"],
      venue: "arXiv preprint arXiv:2211.00919",
      url: "https://arxiv.org/pdf/2211.00919",
    },
  ],

  pubTypes: [
    { id: "conference", title: "Peer-Reviewed Conference Papers" },
    { id: "workshop",   title: "Workshop Papers, Posters, and Short Papers" },
    { id: "preprint",   title: "Preprints" },
  ],

  /* ----------------------------------------------------------------- grants */
  grants: [
    { title: "Summer Research Grant, Muhlenberg College", when: "Summer 2026", text: "Support for eight weeks of summer research." },
    { title: "Summer Research Grant, Muhlenberg College", when: "Summer 2025", text: "Support for eight weeks of summer research." },
    { title: "New Course Development Grant, Muhlenberg College", when: "Summer 2024", text: "Support for developing <em>Introduction to Cybersecurity</em>, first offered Spring 2025." },
  ],

  /* --------------------------------------------------------------- teaching */
  currentTerm: "Fall 2026",
  // Courses taught at Muhlenberg, in curriculum order.
  courses: [
    { title: "Introduction to Game Programming with Python", terms: ["Spring 2024", "Fall 2024", "Fall 2025"] },
    { title: "Introduction to Data Science", terms: ["Fall 2026"] },
    { title: "Computer Science II", terms: ["Spring 2025", "Spring 2026"] },
    { title: "Data Structures and Algorithms", terms: ["Fall 2024", "Spring 2025", "Fall 2025", "Spring 2026", "Fall 2026"] },
    { title: "Introduction to Cybersecurity", terms: ["Spring 2025"], note: "New course I designed and developed" },
    { title: "Software Engineering", terms: ["Fall 2023"] },
    { title: "Computer Networks", terms: ["Spring 2024", "Spring 2026"] },
    { title: "Operating Systems", terms: ["Fall 2023", "Fall 2026"] },
  ],

  /* --------------------------------------------------------------- students */
  mentoringSummary: "Since Spring 2025, I have mentored nine undergraduate researchers at Muhlenberg. Three students have co-authored peer-reviewed conference papers, two of them as first author.",
  mentoring: [
    { when: "Summer 2026", text: "Summer undergraduate research: 5 students" },
    { when: "Summer 2025", text: "Summer undergraduate research: 3 students" },
    { when: "Spring 2025", text: "Undergraduate research: 1 student" },
    { when: "2018 – 2023", text: "Graduate mentor, NSF Research Experiences for Undergraduates (REU), Florida International University" },
  ],
  // Optional: list students by name. Sections stay hidden while a list is empty.
  students: [
    // { name: "Jane Doe", detail: "Computer Science, Class of 2027", project: "Security analysis of a smart-home protocol" },
  ],
  alumni: [
    // { name: "John Smith", detail: "Class of 2025", project: "Zigbee traffic analysis", now: "Graduate student, ..." },
  ],
};
