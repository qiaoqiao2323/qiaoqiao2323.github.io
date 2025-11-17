// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Home of my papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Different chapters during my PhD.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-our-paper-wins-the-best-paper-award-at-the-international-conference-on-social-robotics-2024",
          title: 'Our paper wins the best paper award at the International Conference on Social...',
          description: "",
          section: "News",},{id: "news-our-paper-tactile-interaction-with-social-robots-influences-attitudes-and-behaviour-was-accepted-by-the-international-journal-of-social-robotics",
          title: 'Our paper “Tactile interaction with social robots influences attitudes and behaviour” was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-was-accepted-by-icassp-2025",
          title: 'Our paper was accepted by ICASSP 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-touched-by-chatgpt-using-an-llm-to-drive-affective-tactile-interaction-was-accepted-as-a-late-breaking-report-at-acm-ieee-hri-2025",
          title: 'Our paper “Touched by ChatGPT: Using an LLM to Drive Affective Tactile Interaction”,...',
          description: "",
          section: "News",},{id: "news-i-m-thrilled-to-share-that-i-ve-started-a-new-journey-as-a-visiting-phd-researcher-at-cognitive-architecture-for-collaborative-technologies-of-the-italian-institute-of-technology",
          title: 'I’m thrilled to share that I’ve started a new journey as a Visiting...',
          description: "",
          section: "News",},{id: "news-our-paper-situated-haptic-interaction-exploring-the-role-of-context-in-affective-perception-of-robotic-touch-was-accepted-by-the-ieee-ro-man-2025",
          title: 'Our paper “Situated Haptic Interaction: Exploring the Role of Context in Affective Perception...',
          description: "",
          section: "News",},{id: "news-our-paper-exploring-llm-generated-culture-specific-affective-human-robot-tactile-interaction-was-accepted-by-the-international-conference-on-social-robotics-2025",
          title: 'Our paper “Exploring LLM-generated Culture-specific Affective Human-Robot Tactile Interaction” was accepted by the...',
          description: "",
          section: "News",},{id: "news-our-paper-soundscape-captioning-using-sound-affective-quality-network-and-large-language-model-was-accepted-by-the-ieee-transactions-on-multimedia",
          title: 'Our paper “Soundscape Captioning using Sound Affective Quality Network and Large Language Model”...',
          description: "",
          section: "News",},{id: "news-i-ve-been-invited-to-give-a-spotlight-talk-and-take-part-in-the-panel-discussion-at-the-icsr-2025-workshop-beyond-words-the-role-of-touch-in-social-robotics",
          title: 'I’ve been invited to give a spotlight talk and take part in the...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-share-that-i-ve-started-a-new-position-as-a-postdoctoral-researcher-at-the-kth-royal-institute-of-technology-working-on-the-erc-project-intimate-touch",
          title: 'I’m happy to share that I’ve started a new position as a Postdoctoral...',
          description: "",
          section: "News",},{id: "projects-tactile-interaction-influences-risk-taking-behaviour-and-attitude",
          title: 'Tactile interaction Influences risk-taking behaviour and attitude.',
          description: "Qiaoqiao Ren and Tony Belpaeme",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-no-more-mumbles-enhancing-robot-intelligibility-through-speech-adaptation",
          title: 'No More Mumbles; Enhancing Robot Intelligibility Through Speech Adaptation',
          description: "Q Ren, Y Hou, D Botteldooren, T Belpaeme",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-conveying-emotions-to-robots-through-touch-and-sound",
          title: 'Conveying Emotions to Robots through Touch and Sound',
          description: "Our preliminary results are shown in this page, all the results are still under submission",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-multimodal-superiority-vibrotactile-and-sound-in-robot-human-emotion-communication",
          title: 'Multimodal Superiority; Vibrotactile and Sound in Robot-Human Emotion communication',
          description: "Qiaoqiao Ren and Tony Belpame",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-touched-by-chatgpt-using-an-llm-to-drive-affective-tactile-interaction",
          title: 'Touched by ChatGPT; Using an LLM to Drive Affective Tactile Interaction',
          description: "Qiaoqiao Ren and Tony Belpaeme",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%51%69%61%6F%71%69%61%6F.%72%65%6E@%75%67%65%6E%74.%62%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/qiaoqiao-ren-36736a297", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Qiaoqiao-Ren-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=-cb6-PMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
