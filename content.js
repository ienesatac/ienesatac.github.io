/* ==========================================================================
   WEBSITE CONTENT FILE — content.js
   ==========================================================================
   HOW TO EDIT YOUR WEBSITE:
   Almost everything on your website lives right here in this single file!

   1. TO UPDATE YOUR CV:
      Replace `files/cv.pdf` in the `files/` folder with your new PDF
      (keep the filename `cv.pdf`, or update `cvPdf` below).

   2. TO ADD A NEW PUBLICATION:
      Copy one of the `{ ... }` blocks inside `publications` below, paste it
      at the top of `publications`, and fill in `title`, `authors`, `venue`,
      `year`, `status` ("published", "forthcoming", or "under_review"), etc.
      Upload its PDF into the `files/` folder if you want a [PDF] button.

   3. TO MOVE A PAPER FROM "UNDER REVIEW" TO "FORTHCOMING" OR "PUBLISHED":
      Just change `status: "under_review"` to `status: "forthcoming"` or
      `status: "published"` and add `venue` / `year` / `doi` / `pdf`.

   4. TO ADD A NEWS / HIGHLIGHT ITEM:
      Add a new `{ date: "Month DD, YYYY", text: "...", link: "..." }` block
      at the very top of `news` below. The top 5 items automatically appear
      on your Home page, and all items appear on the News page.
   ========================================================================== */

window.SITE_CONTENT = {
  // ------------------------------------------------------------------------
  // 1. PROFILE & SIDEBAR LINKS
  // ------------------------------------------------------------------------
  profile: {
    name: "Ibrahim Enes Atac",
    authorHighlight: "Ibrahim Enes Atac", // Automatically bolded in author lists
    role: "Ph.D. Candidate",
    department: "Sociology & Social Data Analytics",
    departmentUrl: "https://sociology.la.psu.edu/",
    institution: "Penn State University",
    institutionFull: "The Pennsylvania State University",
    institutionUrl: "https://www.psu.edu/",
    email: "iza5155@psu.edu",
    avatar: "assets/profile.jpg",
    avatarAlt: "Portrait of Ibrahim Enes Atac",
    cvPdf: "files/cv.pdf",
    domain: "https://enesatac.org",
    social: [
      {
        label: "Email",
        icon: "email",
        url: "mailto:iza5155@psu.edu",
        display: "iza5155@psu.edu"
      },
      {
        label: "Curriculum Vitae",
        icon: "cv",
        url: "files/cv.pdf"
      },
      {
        label: "Google Scholar",
        icon: "scholar",
        url: "https://scholar.google.com/citations?hl=en&user=rqlrdDgAAAAJ&view_op=list_works"
      },
      {
        label: "ORCID",
        icon: "orcid",
        url: "https://orcid.org/0000-0002-3557-6304"
      },
      {
        label: "Bluesky",
        icon: "bluesky",
        url: "https://bsky.app/profile/ienesatac.bsky.social"
      },
      {
        label: "X (Twitter)",
        icon: "x",
        url: "https://x.com/ienesatac"
      },
      {
        label: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/enes-atac/"
      }
    ]
  },

  // ------------------------------------------------------------------------
  // 2. NAVIGATION BAR
  // ------------------------------------------------------------------------
  navigation: [
    { id: "home", label: "Home", href: "index.html" },
    { id: "publications", label: "Publications", href: "publications.html" },
    { id: "teaching", label: "Teaching", href: "teaching.html" },
    { id: "public-sociology", label: "Public Sociology", href: "public-sociology.html" },
    { id: "highlights", label: "News", href: "highlights.html" },
    { id: "cv", label: "CV", href: "cv.html" }
  ],

  // ------------------------------------------------------------------------
  // 3. HOME PAGE — BIOGRAPHY (HTML allowed for links and italics)
  // ------------------------------------------------------------------------
  aboutHeading: "About",
  bioParagraphs: [
    `I am a sociologist who uses quantitative and computational methods to study intergroup relations, immigration, culture, and politics. In my research, I examine how group boundaries are drawn, contested, and politicized across different settings. Within this context, I have developed two complementary research agendas: (1) the cross-national study of intergroup relations and anti-immigrant attitudes, and (2) the study of how nationalism and ideology shape political attitudes and elite rhetoric.`,

    `My recent article in <em>Social Forces</em>, <a href="https://academic.oup.com/sf/article-abstract/103/3/1144/7716415" target="_blank" rel="noopener">Religious Rebound, Political Backlash, and the Youngest Cohort: Understanding Religious Change in Turkey</a>, received the <a href="https://sssreligion.org/awards-grants/distinguished-article-award/" target="_blank" rel="noopener">2025 Distinguished Article Award from the Society for the Scientific Study of Religion (SSSR)</a>. It also earned the 2025 Lombra Outstanding Graduate Research Award from Penn State’s College of the Liberal Arts, recognizing it as the best social science article published by a graduate student at the Pennsylvania State University.`,

    `My research has been published or is forthcoming in <em>Social Forces</em>, <em>Socius</em>, <em>Demography</em>, <em>Social Science Quarterly</em>, <em>Current Sociology</em>, <em>International Journal of Comparative Sociology</em>, and <em>Journal of Medical Internet Research</em>, and has been featured in several media outlets. Feel free to explore this website for more details about my research.`
  ],

  homeNewsHeading: "Recent News",
  homeNewsCount: 5,

  // ------------------------------------------------------------------------
  // 4. PUBLICATIONS & WORKING PAPERS
  //    status options: "published" | "forthcoming" | "under_review"
  //    Multi-row filter bar (OR within a row, AND across rows):
  //    Edit `publicationFilterGroups` to rename/add/remove filter pills,
  //    and edit `topics`, `methods`, and `contexts` on any paper below.
  // ------------------------------------------------------------------------
  publicationFilterGroups: [
    {
      key: "topics",
      label: "Topic",
      options: [
        "Immigration, Race & Ethnicity",
        "Religion & Politics",
        "Science & Knowledge"
      ]
    },
    {
      key: "methods",
      label: "Data / Methods",
      options: [
        "Survey",
        "Computational & Text",
        "Multilevel",
        "Longitudinal"
      ]
    },
    {
      key: "contexts",
      label: "Context",
      options: [
        "Cross-National",
        "United States",
        "Türkiye",
        "Europe"
      ]
    }
  ],

  publications: [
    {
      title: "Health Discourse Regarding Syrian Refugees in Türkiye on X (Formerly Twitter): Longitudinal Sentiment and Stance Analysis",
      authors: "Ömer Ataç, Abdul Basit Adeel, Ibrahim Enes Atac",
      venue: "Journal of Medical Internet Research",
      details: "vol. 28(6)",
      year: 2026,
      status: "published",
      topics: ["Immigration, Race & Ethnicity"],
      methods: ["Computational & Text", "Longitudinal"],
      contexts: ["Türkiye"],
      pdf: "files/atac-adeel-atac-2026-jmir.pdf",
      doi: "https://doi.org/10.2196/93227",
      abstract: `Background: Since 2011, Türkiye has become the primary destination for Syrian refugees. Although health care is a fundamental human right, public discourse surrounding refugee health services can influence policy and social cohesion.\n\nObjective: The objective of our study was to examine 14 years of health-related discourse in Türkiye regarding Syrian refugees on platform X (formerly Twitter) to identify evolving patterns in sentiment, stance, and key grievances.\n\nMethods: From a dataset of 4.5 million tweets (2009-2022), 116,172 health-related posts were identified. We used a fine-tuned Turkish Bidirectional Encoder Representations from Transformers (BERT)–based large language model to perform multitask classification for sentiment, stance, and health topics. Tweets were categorized into 5 domains: provision of health care services, financing and coverage, human resources, public health and disease prevention, and access to medications and pharmaceutical services. Lift scores and heatmaps were used to analyze the relationship between keywords and public attitudes.\n\nResults: The fine-tuned Turkish BERT model achieved high classification performance, with a weighted F1-score of 0.814 for sentiment and 0.757 for stance detection. Public discourse shifted from neutral or positive tones in 2011 to increasingly negative tones over time. By 2021, negative sentiment reached 79.9% (13,148/16,456), and the anti-refugee stance peaked at 78.3% (12,882/16,456). Prominent topics evolved from provision of health care services (38/80, 47.5% in 2011) to public health and disease prevention (9428/16,456, 57.3% in 2021) and human resources (13,969/40,368, 34.6% in 2022). High lift scores revealed that an anti-refugee stance was strongly associated with keywords such as “appointment,” “vaccine,” and “free.”\n\nConclusions: There is a marked and consistent rise in anti-refugee sentiment within Turkish digital health discourse, often fueled by misinformation and perceived systemic strain. Public health authorities should prioritize evidence-based communication strategies to counter digital polarization and ensure the legibility of health policies to the host population.`
    },
    {
      title: "Cultural Solidarity, Economic Threat: How Discrimination Influences Anti-Immigrant Attitudes",
      authors: "Ibrahim Enes Atac, Charles Seguin, Brandon Gorman",
      venue: "Current Sociology",
      details: "",
      year: 2026,
      status: "published",
      topics: ["Immigration, Race & Ethnicity"],
      methods: ["Survey", "Multilevel"],
      contexts: ["Cross-National"],
      pdf: "files/atac-seguin-gorman-2026-current-sociology.pdf",
      doi: "https://doi.org/10.1177/00113921261467791",
      abstract: `Studies on the attitudes of minorities toward immigrants have produced mixed results, as while some suggest that minorities are more tolerant of immigrants, others find minorities resemble majority groups in their attitudes. We argue these inconsistencies stem from differences in how people evaluate immigrants’ cultural and economic impacts. Using data from the International Social Survey Programme linked with group-level measures of political, economic, religious, and linguistic discrimination from the Minorities at Risk and Ethnic Power Relations datasets, we examine how minority and majority groups assess immigration across economic and cultural dimensions. We find that minority group members are significantly less likely than majority group members to view immigrants as a cultural threat, yet they express similar levels of concern about the economic impacts of immigration. This suggests that minority groups may feel a sense of solidarity with immigrants based on shared experiences of discrimination, which reduces perceptions of immigrants as a cultural threat, even as their concerns about economic competition remain similar to those of majority groups. We conclude that anti-immigrant sentiment is multidimensional, which helps clarify how social position shapes attitudes.`
    },
    {
      title: "What Would Jesus Fund? Christian Nationalism and Americans’ Views on Government Spending",
      authors: "Ibrahim Enes Atac, Lena Kunjan, Forrest Lovette, Samuel L. Perry",
      venue: "Socius",
      details: "",
      year: 2026,
      status: "published",
      topics: ["Religion & Politics", "Immigration, Race & Ethnicity"],
      methods: ["Survey"],
      contexts: ["United States"],
      pdf: "files/atac-et-al-2026-socius.pdf",
      doi: "https://doi.org/10.1177/23780231261447651",
      abstract: `Research on government spending focuses primarily on the roles of partisanship, ideology, and in-group self-interest. Beyond these, the authors propose that religiopolitical schemas have an independent (though interrelated) role in shaping Americans’ conceptions of government’s purpose, beneficiaries, and resource allocation. Conceiving of “Christian nationalism” as a religiopolitical schema rooted in “us versus them” hierarchical conceptions of social order and neoliberal ideas of government, the authors theorize Christian nationalism is associated with greater American support for government spending on controlling and punishing problematized populations, less spending on vulnerable populations and out-group interests, and no systematic preference when the in-group or out-group interest is less salient. Data from the 2021 General Social Survey affirm these expectations. Even after accounting for partisanship, ideology, and White victimhood, Christian nationalism is associated with support for greater government spending on crime, law enforcement, and the military and less spending on Blacks, safety nets, science, the environment, and other Democratic issues but is unrelated to spending on parks, highways, social security, and other areas in which in-group distinctions are less salient. Interactions reveal that Christian nationalism is more strongly associated with views on government spending among non-Republicans and nonconservatives. The authors discuss how Christian nationalist rhetoric is associated with spending priorities that reflect inequalities across multiple domains.`
    },
    {
      title: "Moral Intuitions and Support for Immigration",
      authors: "John Iceland, Eric Silver, Ibrahim Enes Atac",
      venue: "Social Science Quarterly",
      details: "vol. 107, e70146",
      year: 2026,
      status: "published",
      topics: ["Immigration, Race & Ethnicity"],
      methods: ["Survey"],
      contexts: ["United States"],
      pdf: "files/iceland-silver-atac-2026-ssq.pdf",
      doi: "https://doi.org/10.1111/ssqu.70146",
      abstract: `Introduction: Attitudes toward immigration are often shaped by whether immigrants are perceived as a threat to one's racial, ethnic, or nativity group status. Yet recent research shows that such perceptions vary not only between different groups but also within them. Drawing on Moral Foundations Theory, our study investigates the moral intuitions that lead some individuals to view immigrants as threats and others to see them as deserving of care and support.\n\nMethods: Using data from a national YouGov survey of 4000 US respondents, we examined the association between moral intuitions and attitudes toward immigration, including whether immigration should be a human right and support for higher levels of immigration.\n\nResults: We find that people with strong individualizing intuitions—including those emphasizing care and fairness—are more likely to support immigration. In contrast, those with strong binding intuitions—especially those emphasizing a respect for authority and sanctity—are less supportive, likely reflecting concerns about maintaining the rule of law and apprehensions about outsiders.\n\nConclusion: These findings highlight the importance of moral frameworks in shaping public attitudes toward immigration. Differences in individualizing versus binding moral intuitions help explain why some individuals view immigrants primarily through a lens of care and fairness, while others emphasize social order and the importance of maintaining boundaries.`
    },
    {
      title: "The Wages of Ethnic Power: Socioeconomic Status, Group Threat, and Anti-Immigrant Attitudes in Western Europe",
      authors: "Ibrahim Enes Atac, Charles Seguin, Brandon Gorman",
      venue: "International Journal of Comparative Sociology",
      details: "",
      year: 2025,
      status: "published",
      topics: ["Immigration, Race & Ethnicity"],
      methods: ["Survey", "Multilevel"],
      contexts: ["Cross-National", "Europe"],
      pdf: "files/atac-seguin-gorman-2025-ijcs.pdf",
      doi: "https://doi.org/10.1177/00207152251387940",
      abstract: `Group threat theories explain anti-immigrant attitudes as emerging from threats to the perceived or actual power of one’s ethnic group. Studies also show that individual-level socioeconomic status (SES) is negatively correlated with attitudes toward immigrants, where SES is often conceptualized as an individual-level variable which relates to an individual’s experience of economic competition or general political orientation. Here we argue that the effect of SES is conditional on an individual’s ethnic group’s power. Using data from the European Social Survey and Ethnic Power Relations datasets, we examine how interactions between ethnic group power and individual SES shape attitudes toward immigrants across 16 Western European countries. We find that majority group members generally exhibit more anti-immigrant attitudes than members of minority groups. SES is negatively correlated with anti-immigrant attitudes, generally, but especially for majority group members, where lower-SES individuals have the most anti-immigrant attitudes. At the highest levels of SES there are almost zero differences in anti-immigrant attitudes between majority and minority group members. Our results highlight the need to look to how the “psychological wages” of ethnic group power are influenced by individual SES.`
    },
    {
      title: "Religious Rebound, Political Backlash, and the Youngest Cohort: Understanding Religious Change in Turkey",
      authors: "Ibrahim Enes Atac, Gary J. Adler Jr.",
      venue: "Social Forces",
      details: "vol. 103(3), pp. 1144–1166",
      year: 2025,
      status: "published",
      topics: ["Religion & Politics"],
      methods: ["Survey", "Longitudinal"],
      contexts: ["Türkiye"],
      awards: [
        "2025 SSSR Distinguished Article Award",
        "2025 Lombra Outstanding Graduate Research Award"
      ],
      pdf: "files/atac-adler-2025-social-forces.pdf",
      doi: "https://doi.org/10.1093/sf/soae102",
      abstract: `We distinguish two streams of theory that dominate explanations of religious change: cohort-based cumulative decline theory, which emphasizes small and ongoing declines in individual religiosity accruing across generations; and political backlash theory, which emphasizes period- and identity-based changes due to the politicized meaning of religion. Notably, Muslim countries have largely been excluded from a recent wave of quantitative research on individual-level religious change, implicitly continuing an assumption that Islamic societies require different theoretical concepts. We deploy both theories to examine religious identity and behavior over multiple decades in Turkey, a Muslim-majority country with recent social conflict over religion. Utilizing age-period-cohort interaction models, our results suggest minimal evidence for a cohort-based process in Turkey, in contrast to that observed in Western countries. Rather, a political transformation—the politicization of religion through the rise of Turkey's AKP (Justice and Development Party) and President Erdogan—is most salient to Turkish religious change. We introduce two concepts to backlash theory—identity updating and performance signaling—to show how different dimensions of individual religiosity respond to different politicized contexts. These findings extend our understanding of religious change beyond the Western context, with further implications for theorizing political backlash and cohort-based processes.`
    },

    // --- FORTHCOMING ---
    {
      title: "From Fertility Rates to Social Inequalities: The Evolving Focus of Demographic Research",
      authors: "John Iceland, Ashton Verdery, Ibrahim Enes Atac, Abdul Basit Adeel",
      venue: "Demography",
      details: "",
      year: "",
      status: "forthcoming",
      topics: ["Science & Knowledge"],
      methods: ["Computational & Text", "Longitudinal"],
      contexts: []
    },

    // --- UNDER REVIEW ---
    {
      title: "Is Sociology Becoming Predominantly a Science of Inequality? Implications of a Hundred-Year Bibliometric Trend for the Future of the Discipline",
      authors: "Abdul Basit Adeel, Ibrahim Enes Atac, David Baker",
      venue: "",
      details: "",
      year: "",
      status: "under_review",
      topics: ["Science & Knowledge"],
      methods: ["Computational & Text", "Longitudinal"],
      contexts: []
    },
    {
      title: "Religious Nationalism and Confidence in Authoritarian Leaders: A Cross-National Study",
      authors: "Ibrahim Enes Atac, Samuel L. Perry",
      venue: "",
      details: "",
      year: "",
      status: "under_review",
      topics: ["Religion & Politics"],
      methods: ["Survey", "Multilevel"],
      contexts: ["Cross-National"],
      grants: [
        "Global Religious Futures Research Grant, Pew Research Center–John Templeton Foundation"
      ]
    },
    {
      title: "Is Science a World Culture? Restricted Actorhood and Public Trust in Science",
      authors: "Jungsik Choi, Ibrahim Enes Atac",
      venue: "",
      details: "",
      year: "",
      status: "under_review",
      topics: ["Science & Knowledge"],
      methods: ["Survey", "Multilevel"],
      contexts: ["Cross-National"],
      grants: [
        "McCourtney Institute for Democracy Research Grant"
      ]
    }
  ],

  // ------------------------------------------------------------------------
  // 5. TEACHING & STUDENT EVALUATIONS
  // ------------------------------------------------------------------------
  teaching: {
    heading: "Teaching",
    subheading: "Courses Taught",
    courses: [
      {
        role: "Instructor of Record",
        code: "SOC 5",
        title: "Social Problems",
        term: "Summer 2025",
        institution: "Penn State University",
        syllabus: "", // Optional: e.g. "files/soc5-syllabus.pdf"
        evaluationsHeading: "Selected Student Evaluations",
        evaluations: [
          "The instructor is really passionate about the subject, which highly influenced me in putting more effort into the course. There are helpful topic discussions and questions that helps in the discussion and interaction between the students. I also loved the organization of the slides the instructor put together, it helps a lot, easier to understand the textbook.",
          "The instructor always make sure that the students are free to ask questions during and after the class. Also, the instructor makes sure that everyone has their chance to speak without interruptions, even during class discussions, making sure that everyone is being respected.",
          "My instructor is very welcoming and offers everyone to have a chance to speak their mind about any of the content we learn in class.",
          "The way the professor acts and teaches is helpful and makes me feel like my opinions matter",
          "Personally, group discussions and expressing my personal opinions during class are one of the improvements I’ve gained, thanks to the welcoming environment the instructor and the peers have created."
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // 6. PUBLIC SOCIOLOGY & MEDIA
  // ------------------------------------------------------------------------
  publicSociology: {
    heading: "Public Sociology",
    items: [
      {
        title: "Medyascope interview with Ruşen Çakır",
        description: "Discussion on common misconceptions about refugees in Turkey [in Turkish].",
        date: "July 8, 2024",
        articleUrl: "https://medyascope.tv/2024/07/08/rusen-cakirin-konugu-enes-atac-turkiyedeki-siginmacilar-hakkinda-dogru-bilinen-yanlislar/",
        youtubeEmbedUrl: "https://www.youtube.com/embed/YOlmoJAWOe4",
        youtubeTitle: "Medyascope interview with Ruşen Çakır on common misconceptions about refugees in Turkey"
      }
    ]
  },

  // ------------------------------------------------------------------------
  // 7. NEWS & HIGHLIGHTS (Newest at the top)
  // ------------------------------------------------------------------------
  newsHeading: "News & Highlights",
  news: [
    {
      date: "Sep 25, 2026",
      text: `My article, “Health Discourse Regarding Syrian Refugees in Türkiye on X (Formerly Twitter): Longitudinal Sentiment and Stance Analysis,” has been published in the <em>Journal of Medical Internet Research</em>.`,
      link: "https://www.jmir.org/2026/1/e93227"
    },
    {
      date: "Jul 16, 2026",
      text: `My article, “Cultural Solidarity, Economic Threat: How Discrimination Influences Anti-Immigrant Attitudes,” has been published in <em>Current Sociology</em>.`,
      link: "https://journals.sagepub.com/doi/10.1177/00113921261467791"
    },
    {
      date: "May 28, 2026",
      text: `My article, “What Would Jesus Fund? Christian Nationalism and Americans’ Views on Government Spending,” has been published in <em>Socius</em>.`,
      link: "https://journals.sagepub.com/doi/10.1177/23780231261447651"
    },
    {
      date: "May 11, 2026",
      text: `I have been selected as the recipient of the Alan Booth Award for Outstanding Graduate Student Work in Sociology.`,
      link: ""
    },
    {
      date: "Mar 25, 2026",
      text: `My article, “Moral Intuitions and Support for Immigration,” has been published in <em>Social Science Quarterly</em>.`,
      link: "https://onlinelibrary.wiley.com/doi/full/10.1111/ssqu.70146"
    },
    {
      date: "Nov 12, 2025",
      text: `My article, “The Wages of Ethnic Power: Socioeconomic Status, Group Threat, and Anti-Immigrant Attitudes in Western Europe,” has been published in the <em>International Journal of Comparative Sociology</em>.`,
      link: "https://journals.sagepub.com/doi/full/10.1177/00207152251387940"
    },
    {
      date: "Nov 1, 2025",
      text: `My recent paper in <em>Social Forces</em>, “Religious Rebound, Political Backlash, and the Youngest Cohort: Understanding Religious Change in Turkey,” received the 2025 Distinguished Article Award from the Society for the Scientific Study of Religion (SSSR).`,
      link: "https://sssreligion.org/awards-grants/distinguished-article-award/"
    },
    {
      date: "May 12, 2025",
      text: `I received the Raymond E. Lombra and Roberta Lombra Outstanding Graduate Research Award from the College of the Liberal Arts at Penn State, recognizing the best article published by a graduate student in the social sciences.`,
      link: "https://doi.org/10.1093/sf/soae102"
    },
    {
      date: "May 2, 2025",
      text: `My project with Jungsik Choi, “Is Science a World Culture? Threat and Public Trust in Science,” has been awarded a research grant by the McCourtney Institute for Democracy at Penn State.`,
      link: "https://democracy.psu.edu/research-grant-recipients/"
    },
    {
      date: "Jul 18, 2024",
      text: `My first academic publication, “Religious Rebound, Political Backlash, and the Youngest Cohort: Understanding Religious Change in Turkey,” has been published in <em>Social Forces</em>.`,
      link: "https://academic.oup.com/sf/article-abstract/103/3/1144/7716415?login=false"
    },
    {
      date: "Jul 8, 2024",
      text: `I appeared on Medyascope with Ruşen Çakır to discuss common misperceptions about Syrian refugees in Turkey [in Turkish].`,
      link: "https://medyascope.tv/2024/07/08/rusen-cakirin-konugu-enes-atac-turkiyedeki-siginmacilar-hakkinda-dogru-bilinen-yanlislar/"
    },
    {
      date: "May 27, 2024",
      text: `I received the 2024 Huber-Form Sociology Master Thesis Award for my thesis, “Varieties of Group Threat: Ethnic Group Position, Individual-Level Status, and Anti-Immigrant Sentiments.”`,
      link: "https://sociology.la.psu.edu/news/may-2024-good-news/"
    }
  ]
};
