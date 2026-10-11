export type Mark = "y" | "n" | "p";

export type Details = {
  gapIntro: string;
  gaps: { title: string; text: string }[];
  response?: string[];
  table: { cols: string[]; rows: [string, Mark[]][] };
  mainQuestion?: string;
  subQuestions?: string[];
  mainObjective: string;
  objectives: string[];
  approach: string;
  steps?: string[];
  techniques: { name: string; text: string }[];
  tools: [string, string][];
  modules: { name: string; text: string }[];
  evalTitle: string;
  metrics: { name: string; text?: string }[];
  ethics?: string[];
  plan: { label: string; when: string }[];
  planNote?: string;
  budget: { label: string; lkr: number | null }[];
  total: number;
};

export const details: Record<number, Details> = {
  1: {
    gapIntro:
      "Although Augmented Reality has been widely studied in educational contexts, several important limitations remain unaddressed in the existing literature.",
    gaps: [
      {
        title: "Learning and assessment are structurally separated",
        text: "Most AR apps are content-delivery platforms. Understanding is then evaluated through written tests outside the AR environment, removing real-time feedback at the moment it would be most valuable.",
      },
      {
        title: "No immediate feedback inside AR",
        text: "Few AR educational apps deliver corrective feedback in real time. Students may finish a whole AR session with an incorrect understanding, only discovering it through a post-test score that offers no targeted remediation.",
      },
      {
        title: "Long-term retention is rarely measured",
        text: "Most AR studies measure outcomes right after the session. Delayed retention assessment is rarely included, leaving the durability of AR-based learning unanswered.",
      },
    ],
    response: [
      "Embed quizzes and challenges directly inside the AR learning environment",
      "Give immediate visual feedback within the AR experience",
      "Develop a Review AR Mode for concept revision",
      "Measure immediate and delayed learning with pre-test, post-test and one-week retention tests",
    ],
    table: {
      cols: ["AR Storybook Studies", "AR Learning Systems", "Formative Assessment Research", "Proposed Research"],
      rows: [
        ["AR-based interactive learning", ["y", "y", "n", "y"]],
        ["In-AR embedded assessment", ["n", "n", "n", "y"]],
        ["Immediate visual feedback in AR", ["n", "n", "p", "y"]],
        ["Pre-test & post-test evaluation", ["p", "p", "y", "y"]],
        ["Review / revision AR mode", ["n", "n", "n", "y"]],
        ["Long-term retention (1-week delayed test)", ["n", "n", "n", "y"]],
        ["Assessment integrated inside AR environment", ["n", "n", "n", "y"]],
      ],
    },
    mainQuestion:
      "How does embedding assessment mechanisms directly within an Augmented Reality learning environment influence the learning outcomes and long-term knowledge retention of primary school students learning about simple machines?",
    subQuestions: [
      "To what extent do in-AR quizzes and challenges improve students' conceptual understanding of simple machines compared to traditional post-lesson assessments?",
      "How does immediate visual feedback delivered within the AR environment influence students' ability to correct misconceptions during the learning session?",
      "Does a review AR mode for concept revision contribute to improved knowledge retention, as measured by a delayed test one week after the learning session?",
    ],
    mainObjective:
      "To design and evaluate an assessment-integrated Augmented Reality learning system that measures student learning outcomes and long-term knowledge retention in primary science education.",
    objectives: [
      "Develop interactive quizzes and problem-solving challenges embedded within the AR environment for formative assessment.",
      "Implement immediate visual feedback that guides students toward correct understanding during learning activities.",
      "Design a review AR mode so students can revisit and consolidate simple machine concepts.",
      "Collect and analyze pre-test and post-test scores to measure immediate learning outcomes.",
      "Evaluate long-term retention with a delayed assessment one week later, compared with immediate post-test performance.",
    ],
    approach:
      "A mixed-method quasi-experimental design that compares learning outcomes within a single group of about 30 primary school students aged around 10, rather than splitting them into separate groups. Assessment scores give the quantitative picture; observation captures how students engaged with the AR environment and responded to feedback.",
    steps: ["Pre-test", "AR session with embedded assessments", "Immediate post-test", "Delayed retention test (1 week)"],
    techniques: [
      { name: "In-AR Quiz and Challenge Engine", text: "Multiple-choice questions and problem-solving challenges are triggered automatically as students progress through story chapters." },
      { name: "Immediate Visual Feedback", text: "Correct answers get positive visual indicators; incorrect ones trigger corrective guidance without simply revealing the answer." },
      { name: "Review AR Mode", text: "Students scan completed storybook pages and re-engage with AR content and quizzes, supporting spaced repetition and consolidation." },
      { name: "Assessment Data Logging", text: "Quiz responses, response times, error patterns and task completion are recorded for post-session analysis." },
    ],
    tools: [
      ["Unity Game Engine", "AR application and assessment interactions"],
      ["Vuforia AR SDK", "Marker-based tracking for storybook pages"],
      ["Blender", "3D models of simple machines"],
      ["C#", "Quiz logic, feedback and data logging"],
      ["Android", "Deployment and testing on mobile devices"],
      ["Google Forms / Printed Sheets", "Pre-test, post-test and retention test"],
    ],
    modules: [
      { name: "AR Learning Module", text: "Shows 3D models of levers, pulleys, inclined planes and wheels & axles when students scan printed pages." },
      { name: "Assessment Engine", text: "Presents in-AR quizzes and challenges and evaluates responses in real time." },
      { name: "Feedback Module", text: "Delivers immediate visual feedback based on student responses." },
      { name: "Review AR Module", text: "A dedicated revision mode for returning to completed chapters." },
      { name: "Assessment Data Module", text: "Stores responses, times, error patterns and pre / post / retention scores." },
    ],
    evalTitle: "Performance metrics",
    metrics: [
      { name: "Pre-test → Post-test score gain", text: "Immediate learning improvement after the AR session" },
      { name: "Post-test → Retention score", text: "Knowledge retained one week later" },
      { name: "In-AR quiz accuracy", text: "% correct during embedded activities" },
      { name: "Error correction rate", text: "Self-corrections after receiving visual feedback" },
      { name: "Task completion time", text: "Time to finish in-AR quiz activities" },
      { name: "Learner engagement", text: "Observed attention and participation" },
    ],
    ethics: [
      "Parental or guardian consent before participation",
      "Anonymized data, no personally identifiable information",
      "Safe, age-appropriate, non-stressful activities",
      "Students may withdraw at any time without consequence",
    ],
    plan: [
      { label: "Planning & Literature Review", when: "Weeks 1–3" },
      { label: "System Design", when: "Weeks 4–6" },
      { label: "Development", when: "Weeks 7–14" },
      { label: "Testing & Evaluation", when: "Weeks 15–18" },
      { label: "Analysis & Documentation", when: "Weeks 19–22" },
    ],
    planNote: "Cross-team coordination at Week 4 (architecture), Week 14 (integration) and Week 22 (final presentation).",
    budget: [
      { label: "Android test devices", lkr: 15000 },
      { label: "Software (Unity, AR SDK, tools)", lkr: null },
      { label: "3D model assets", lkr: 8000 },
      { label: "AR marker storybook printing", lkr: 6500 },
      { label: "Pre / post / retention test materials", lkr: 3500 },
      { label: "Surveys & observation worksheets", lkr: 2000 },
      { label: "Personnel support", lkr: 8000 },
      { label: "Contingency", lkr: 5000 },
    ],
    total: 48000,
  },

  2: {
    gapIntro:
      "Although AR shows strong potential for engagement and visualization, several limitations remain in current research on how the interaction itself affects learning.",
    gaps: [
      {
        title: "Interaction design is rarely the research focus",
        text: "Most studies focus on general benefits such as motivation and visualization, and rarely investigate how the design of AR interaction influences learning effectiveness.",
      },
      {
        title: "Passive viewing vs active manipulation is not compared",
        text: "There is limited empirical research comparing passive observation of AR models with active manipulation. Without it, it is hard to tell whether more interaction improves understanding or simply increases cognitive load.",
      },
      {
        title: "Engagement and usability dominate evaluation",
        text: "Systems are often evaluated on engagement or usability rather than cognitive learning outcomes, so developers and educators lack evidence-based design guidelines.",
      },
    ],
    response: [
      "Compare view-only AR with interactive AR manipulation for simple machines",
      "Analyze the cognitive impact of AR interaction design",
      "Produce design guidelines for AR interaction complexity",
    ],
    table: {
      cols: ["Study 1", "Study 2", "Study 3", "Study 4", "Proposed Study"],
      rows: [
        ["AR-based visualization for education", ["y", "y", "y", "y", "y"]],
        ["AR storytelling for engagement", ["y", "y", "n", "n", "y"]],
        ["Interactive AR object manipulation", ["n", "n", "y", "n", "y"]],
        ["Comparison of passive vs interactive AR learning", ["n", "n", "n", "n", "y"]],
        ["Analysis of cognitive impact of AR interaction design", ["n", "n", "n", "n", "y"]],
        ["Design guidelines for AR interaction complexity", ["n", "n", "n", "n", "y"]],
      ],
    },
    mainQuestion:
      "How do different types of AR interactions influence primary school students’ conceptual understanding, cognitive engagement, and learning performance when learning simple machines?",
    subQuestions: [
      "RQ1: How do different AR interaction types (view-only vs. interactive manipulation) affect students’ conceptual understanding of simple machines?",
      "RQ2: What cognitive differences, such as attention levels, reasoning processes and error patterns, are observed between passive and interactive AR learners?",
      "RQ3: Which AR interaction features (object rotation, force application, motion animation) contribute most to learning performance and conceptual comprehension?",
    ],
    mainObjective:
      "To design and evaluate two AR interaction modes within an AR-enhanced storybook that teaches simple machines, and identify how interaction complexity affects cognitive learning outcomes.",
    objectives: [
      "Develop two modes: view-only (observe models) and interactive (rotate objects, apply forces, trigger motion animations).",
      "Implement visual feedback such as directional arrows and force indicators to clarify mechanical movements.",
      "Record and analyze interaction logs and learning performance metrics.",
      "Evaluate the cognitive impact of interaction complexity by comparing passive and interactive AR experiences.",
    ],
    approach:
      "A small group of primary school students uses the AR storybook in either the view-only or the interactive mode. The system records interaction data, learning performance and observational results to analyze how interaction complexity affects conceptual learning and engagement.",
    steps: ["Scan printed marker", "3D model loads", "View-only or interactive mode", "Arrows & force indicators", "Interaction logging", "Analysis"],
    techniques: [
      { name: "View-Only Mode", text: "Students observe the machine and watch animations demonstrating its operation." },
      { name: "Interactive Mode", text: "Students rotate objects, apply simulated forces and trigger motion animations." },
      { name: "Visual feedback", text: "Directional arrows and motion indicators illustrate the direction of force and movement." },
      { name: "Interaction logging", text: "Touch inputs, interaction frequency, time on task and error attempts are recorded." },
    ],
    tools: [
      ["Unity Game Engine", "Main AR development platform"],
      ["Vuforia / AR Foundation", "Marker detection and AR rendering"],
      ["Blender", "3D models of simple machines"],
      ["C#", "System logic and interaction behavior"],
      ["Android devices", "Running and testing the AR app"],
    ],
    modules: [
      { name: "AR Interaction Module", text: "View-only mode, interactive manipulation, object rotation controller, force application interface and motion animation engine." },
      { name: "Visual Feedback Module", text: "Direction arrows, force magnitude indicators and animated movement guides." },
      { name: "Interaction Logging Module", text: "Interaction frequency, object manipulation actions, time per task and error attempts." },
      { name: "Observation & Evaluation Module", text: "Collects learning performance data and observational feedback during testing sessions." },
    ],
    evalTitle: "Evaluation methods",
    metrics: [
      { name: "Conceptual tests", text: "Short pre- and post-tests measuring understanding of simple machines" },
      { name: "Interaction log analysis", text: "Interaction frequency, time-on-task and task completion patterns" },
      { name: "Observational analysis", text: "Engagement levels, exploration patterns and reasoning attempts" },
    ],
    ethics: [
      "All student data anonymized and stored securely",
      "Access restricted to authorized researchers",
      "Compliance with ethical guidelines for research involving minors",
      "Designed for children aged 9–11, with interaction response under 1 second",
    ],
    plan: [
      { label: "Literature review & analysis", when: "Month 1" },
      { label: "Architecture & interaction framework", when: "Month 2" },
      { label: "AR interaction modes (view-only & interactive)", when: "Month 3" },
      { label: "Visual feedback mechanisms", when: "Month 4" },
      { label: "Interaction logging system", when: "Month 5" },
      { label: "User testing & observation sessions", when: "Month 6" },
      { label: "Data analysis & cognitive-impact evaluation", when: "Month 7" },
      { label: "Final report & documentation", when: "Month 8" },
    ],
    budget: [
      { label: "Hardware (test device, printing, data collection, misc.)", lkr: 20000 },
      { label: "Software licenses", lkr: null },
      { label: "Cloud services", lkr: 3000 },
      { label: "Human effort (developer, 3D designer, analyst)", lkr: 6000 },
    ],
    total: 29000,
  },

  3: {
    gapIntro:
      "Many AR learning systems focus on visualization and 3D interaction rather than adapting the experience to each learner's progress.",
    gaps: [
      {
        title: "AR systems don't adapt to the learner",
        text: "Most AR learning systems concentrate on visualization and interaction with 3D objects rather than adapting the experience to individual learner progress.",
      },
      {
        title: "AR storybooks target literacy, not STEM",
        text: "Studies show AR storybooks boost motivation, but mostly for reading comprehension. Little research shows how AR storytelling supports conceptual learning in science education.",
      },
      {
        title: "Narratives are linear",
        text: "Many AR storytelling systems give every learner the same sequence of content, ignoring different learning speeds, comprehension levels and engagement patterns.",
      },
      {
        title: "Adaptive mechanisms rarely meet immersive AR",
        text: "Difficulty adjustment and hints exist in traditional digital learning systems, but are rarely combined with immersive AR storytelling.",
      },
      {
        title: "Engagement analytics are thin",
        text: "Studies focus on learning outcomes and give little attention to interaction frequency, AR usage patterns, time-on-task and story-path selections.",
      },
    ],
    response: [
      "Develop an AR-enhanced storybook with adaptive storytelling for simple machines",
      "Adjust difficulty, hints and story progression from learner performance",
      "Analyze engagement indicators during science learning activities",
    ],
    table: {
      cols: ["AR Storybooks", "AR Learning Systems", "Adaptive Learning Systems", "Proposed Research"],
      rows: [
        ["AR-based learning visualization", ["y", "y", "n", "y"]],
        ["Narrative-based learning", ["y", "n", "n", "y"]],
        ["Adaptive learning mechanisms", ["n", "n", "y", "y"]],
        ["Adaptive storytelling in AR", ["n", "n", "n", "y"]],
        ["STEM concept learning using AR", ["n", "y", "n", "y"]],
        ["Engagement analytics (time-on-task, interaction patterns)", ["n", "n", "n", "y"]],
      ],
    },
    mainObjective:
      "To design and evaluate an adaptive AR storytelling system that improves learner engagement and motivation in primary science education.",
    objectives: [
      "Implement adaptive storytelling mechanisms that adjust task difficulty based on learner performance.",
      "Develop branching story paths so learners can progress through different narrative sequences.",
      "Track engagement indicators such as AR usage patterns, time-on-task and story navigation behavior.",
      "Analyze how adaptive storytelling influences motivation and engagement in AR-based STEM learning.",
    ],
    approach:
      "A Design Science Research (DSR) approach combined with an experimental evaluation. DSR fits because the study designs and implements a technological artifact, an adaptive AR storytelling system, to address a real educational problem; the experiment then analyzes its effect on engagement, motivation and interaction behavior.",
    steps: ["Scan storybook page", "Story + AR scene loads", "Learner responds to task", "Adaptive Decision Engine", "Branch / hint / difficulty change", "Engagement tracked"],
    techniques: [
      { name: "Difficulty Adjustment Algorithm", text: "Adjusts the complexity of learning tasks based on learner performance." },
      { name: "Hint Generation Mechanism", text: "Provides contextual hints when learners struggle to complete tasks." },
      { name: "Branching Story Logic", text: "Directs learners to different narrative paths depending on success or failure in story-based tasks." },
      { name: "Engagement Tracking Algorithm", text: "Records time-on-task, AR usage frequency and story navigation patterns." },
    ],
    tools: [
      ["Unity Game Engine", "Developing the AR application"],
      ["Vuforia AR SDK", "Marker-based AR tracking"],
      ["Blender", "3D models of simple machines"],
      ["C#", "Adaptive logic and interactions"],
      ["Android", "Deployment on mobile devices"],
    ],
    modules: [
      { name: "Story Content Module", text: "Stores and manages story segments, learning tasks and page-level content about simple machines." },
      { name: "AR Interaction Module", text: "Displays 3D simple machine models inside the story environment." },
      { name: "Adaptive Decision Engine", text: "Analyzes performance and decides whether to change difficulty, give hints or redirect to another segment." },
      { name: "Branching Story Controller", text: "Chooses the next story path from success, mistakes or response time." },
      { name: "Engagement Tracking Module", text: "Logs time-on-task, interaction frequency, AR usage and story-path selections." },
    ],
    evalTitle: "Performance metrics",
    metrics: [
      { name: "Learner engagement", text: "Time-on-task" },
      { name: "Interaction frequency" },
      { name: "Story path selections" },
      { name: "Task completion success rate" },
      { name: "Learner motivation feedback" },
    ],
    ethics: [
      "Parental consent before participation",
      "Learner data stored anonymously, no personally identifiable information",
      "Data kept securely on-device or in protected storage",
    ],
    plan: [
      { label: "Literature review & system design", when: "Start" },
      { label: "Narrative structure, adaptive engine, branching paths, tracking", when: "Development" },
      { label: "User testing with primary school students", when: "Testing" },
      { label: "Data analysis & final report", when: "Final stage" },
    ],
    planNote: "The proposal gives the plan as a staged Gantt chart across the semester rather than fixed dates.",
    budget: [
      { label: "Hardware (AR test devices)", lkr: 12000 },
      { label: "Storybook materials", lkr: 5000 },
      { label: "Testing & evaluation", lkr: 6000 },
      { label: "Software tools", lkr: null },
      { label: "Miscellaneous", lkr: 4000 },
    ],
    total: 27000,
  },
};
