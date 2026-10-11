const U = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const img = {
  hero: U("1633356122544-f134324a6cee", 2000),
  vr: U("1592478411213-6153e4ebc07d"),
  kids: U("1503676260728-1c00da094a0b"),
  gears: U("1581092160562-40aa08e78837"),
  tablet: U("1509062522246-3755977927d7"),
  reading: U("1516321318423-f06f85e504b3"),
  study: U("1434030216411-0b793f4b4173"),
  tech: U("1535378917042-10a22c95931a"),
  classroom: U("1522202176988-66273c2fd55f"),
  books: U("1456513080510-7bf3a84b82f8"),
};

export type Component = {
  no: number;
  title: string;
  researcher: string;
  studentId: string;
  photo: string;
  accent: string;
  image: string;
  summary: string[];
  focus: string[];
  tags: string[];
};

export const components: Component[] = [
  {
    no: 1,
    title: "Assessment-Integrated AR and Learning Retention",
    researcher: "Pathirana M.P.S.A.",
    studentId: "IT21817458",
    photo: "/team/pathirana.png",
    accent: "#38bdf8",
    image: img.study,
    summary: [
      "This research investigates how embedding quizzes, problem-solving challenges, and immediate visual feedback directly into an AR-enhanced storybook can improve students’ understanding and long-term retention of simple machine concepts.",
      "The system includes a Review AR Mode that allows students to revisit difficult concepts. Learning outcomes are evaluated using a pre-test, an immediate post-test, and a delayed retention test conducted one week after the learning session.",
    ],
    focus: [
      "Assessment integrated into AR learning activities.",
      "Immediate feedback and misconception correction.",
      "Revision through Review AR Mode.",
      "Measurement of learning improvement and knowledge retention.",
    ],
    tags: ["Quizzes", "Review AR Mode", "Pre / Post / Retention tests"],
  },
  {
    no: 2,
    title: "AR Interaction Design and Cognitive Impact",
    researcher: "Jayasinghe I.B.K.S.",
    studentId: "IT22550330",
    photo: "/team/jayasinghe.png",
    accent: "#a78bfa",
    image: img.gears,
    summary: [
      "This research examines how different AR interaction styles influence students’ conceptual understanding, cognitive engagement, and learning performance.",
      "It compares two interaction modes: View-Only Mode, where students observe AR models, and Interactive Mode, where they manipulate objects, rotate components, apply forces, and trigger mechanical animations.",
      "The research analyzes learner behavior and interaction data to investigate how different interaction features contribute to understanding scientific concepts.",
    ],
    focus: [
      "Comparison of passive viewing and interactive manipulation.",
      "Effects of object rotation, force application, and animations.",
      "Analysis of attention, reasoning, and error patterns.",
      "Evidence-based AR interaction design recommendations.",
    ],
    tags: ["View-Only Mode", "Interactive Mode", "Interaction data"],
  },
  {
    no: 3,
    title: "Adaptive AR Storytelling and Engagement",
    researcher: "Abeywickrama W.D.S.",
    studentId: "IT22279798",
    photo: "/team/abeywickrama.png",
    accent: "#fb923c",
    image: img.reading,
    summary: [
      "This research investigates how adaptive storytelling can improve student engagement, motivation, and participation in AR-based science learning.",
      "The proposed system adjusts the learning experience according to student performance through difficulty adjustment, contextual hints, and branching story progression. Instead of presenting identical activities to every learner, it aims to provide a more personalized learning experience.",
      "Student engagement is examined using indicators such as AR usage patterns, story-path selections, task completion, and time spent on learning activities.",
    ],
    focus: [
      "Adaptive story progression based on learner performance.",
      "Personalized difficulty levels and contextual hints.",
      "Branching narratives and interactive learning activities.",
      "Analysis of student motivation, engagement, and participation.",
    ],
    tags: ["Branching story", "Contextual hints", "Engagement analytics"],
  },
];

export const together = [
  { who: "Pathirana M.P.S.A.", title: "Learning Assessment and Retention", text: "Investigates how students learn and remember scientific concepts.", accent: "#38bdf8" },
  { who: "Jayasinghe I.B.K.S.", title: "Interaction Design and Cognitive Impact", text: "Investigates how different interaction styles influence understanding and cognitive engagement.", accent: "#a78bfa" },
  { who: "Abeywickrama W.D.S.", title: "Adaptive Storytelling and Engagement", text: "Investigates how personalized story experiences influence motivation and participation.", accent: "#fb923c" },
];
