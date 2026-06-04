export type LevelKey = "A1" | "A2" | "B1";

export type ClassCardContent = {
  level: LevelKey;
  href: string;
  title: string;
  description: string;
  price: string;
  bestFor: string;
  focus: string;
};

export type QuizLevel = "A1" | "A2" | "B1";
export type QuizResultState = QuizLevel | "UNCERTAIN";

type QuizQuestion = {
  id: string;
  title: string;
  options: string[];
};

type QuizResultContent = {
  title: string;
  body: string;
  cta: string;
};

export type ClassPageContent = ClassCardContent & {
  metadata: {
    title: string;
    description: string;
  };
  pageTitle: string;
  subtitle: string;
  positioning: string;
  who: string[];
  outcomes: string[];
  info: { label: string; value: string }[];
  cta: string;
};

export type CampaignHighlight = {
  value: string;
  label: string;
  body: string;
};

export type A1ClassScheduleItem = {
  days: string;
  time: string;
  teacher: "Đức" | "Huy";
};

export type ContactMethod = {
  name: string;
  label: string;
  value: string;
};

export const siteConfig = {
  name: "Frenchzone Academy",
  title: "Frenchzone Academy — Lớp tiếng Pháp A1 cho người mới bắt đầu",
  description:
    "Lớp tiếng Pháp A1 nhóm nhỏ cùng Đức và Huy, 4–5 học viên/lớp, online hoặc offline tại Hà Nội, có bài tập và phần tổng hợp sau từng buổi học.",
};

export const sharedClassInfo = [
  "Trình độ: A1 cho người mới bắt đầu / mất gốc",
  "Hình thức: online hoặc offline tại Hà Nội",
  "Sĩ số: 4–5 học viên/lớp",
  "Thời lượng: 90 phút/buổi",
  "Có bài tập và phần tổng hợp sau buổi học",
  "Có hỗ trợ học thêm qua Frenchzone tại fzone.site",
];

export const classCards: ClassCardContent[] = [
  {
    level: "A1",
    href: "/a1",
    title: "A1 — Cho người mới bắt đầu / mất gốc",
    description:
      "Dành cho học viên muốn học chắc từ đầu: phát âm, từ vựng, ngữ pháp nền tảng, đọc hiểu, viết câu ngắn và phản xạ giao tiếp đơn giản.",
    price: "Tư vấn theo lớp",
    bestFor: "Chưa học hoặc mất gốc",
    focus: "Học chắc nền tảng, không học vẹt, không học lan man",
  },
  {
    level: "A2",
    href: "/a2",
    title: "A2 — Học chắc hơn, giao tiếp tốt hơn",
    description:
      "Dành cho người đã có nền tảng A1 nhưng muốn củng cố ngữ pháp, từ vựng, nghe đọc và phản xạ nói.",
    price: "170.000đ/buổi",
    bestFor: "Đã học A1 nhưng chưa chắc",
    focus: "Củng cố nền tảng, giao tiếp quen thuộc",
  },
  {
    level: "B1",
    href: "/b1",
    title: "B1 — Dùng tiếng Pháp độc lập hơn",
    description:
      "Dành cho người đã có nền tảng A2/A2+ và muốn cải thiện 4 kỹ năng hoặc chuẩn bị DELF B1.",
    price: "200.000đ/buổi",
    bestFor: "Muốn dùng tiếng Pháp độc lập hơn",
    focus: "4 kỹ năng, diễn đạt ý kiến, định hướng DELF",
  },
];

export const a1SuitableLearners = [
  "Người chưa biết gì về tiếng Pháp và muốn học từ đầu",
  "Người từng học nhưng bị mất gốc",
  "Người đã học rời rạc, chưa có hệ thống rõ ràng",
  "Học sinh THCS/THPT cần củng cố kiến thức tiếng Pháp ở trường",
  "Sinh viên hoặc người đi làm muốn bắt đầu một ngoại ngữ mới",
  "Người muốn xây nền A1–A2 trước khi học lên B1 hoặc ôn DELF/TCF",
];

export const a1LearningFocus = [
  {
    title: "Phát âm từ đầu",
    body: "Làm quen cách đọc tiếng Pháp, âm dễ sai và thói quen đọc đúng ngay từ những buổi đầu.",
  },
  {
    title: "Từ vựng gần gũi",
    body: "Học từ vựng cơ bản theo chủ đề quen thuộc để có thể dùng trong câu và hội thoại ngắn.",
  },
  {
    title: "Ngữ pháp nền tảng",
    body: "Giống, số, mạo từ, động từ cơ bản, cách đặt câu và các cấu trúc A1 cần dùng thường xuyên.",
  },
  {
    title: "Phản xạ giao tiếp",
    body: "Tập chào hỏi, giới thiệu bản thân, hỏi đáp đơn giản và trả lời bằng câu rõ ràng.",
  },
  {
    title: "Đọc hiểu đoạn ngắn",
    body: "Luyện đọc các đoạn A1 ngắn, nắm ý chính và nhận diện từ/cấu trúc đã học.",
  },
  {
    title: "Viết câu và đoạn ngắn",
    body: "Tập viết câu đúng, đoạn ngắn về bản thân, gia đình, lịch học, sở thích và hoạt động hằng ngày.",
  },
  {
    title: "Bài tập sau từng buổi",
    body: "Có bài tập và phần tổng hợp nội dung để học viên ôn lại thay vì chỉ nghe giảng trên lớp.",
  },
];

export const a1SmallClassReasons = [
  {
    title: "Sửa lỗi trực tiếp",
    body: "Người mới học rất dễ sai phát âm, chia động từ và đặt câu. Sĩ số 4–5 học viên giúp giáo viên có thời gian nghe, sửa và nhắc lại cho từng bạn.",
  },
  {
    title: "Học có hệ thống",
    body: "Lớp đi từ nền tảng A1, giúp học viên hiểu mình đang học gì và dùng được kiến thức đã học, thay vì học vẹt hoặc học lan man.",
  },
  {
    title: "Giữ nhịp học",
    body: "Nhóm nhỏ giúp giáo viên theo sát tiến độ, giao bài vừa sức và hỗ trợ kịp thời để học viên không mất động lực sau vài buổi đầu.",
  },
];

export const a1ClassSchedule: A1ClassScheduleItem[] = [
  { days: "Thứ 2 / Thứ 4", time: "15h00 – 16h30", teacher: "Huy" },
  { days: "Thứ 3 / Thứ 7", time: "15h00 – 16h30", teacher: "Huy" },
  { days: "Thứ 2 / Thứ 4", time: "19h00 – 20h30", teacher: "Huy" },
  { days: "Thứ 2 / Thứ 4", time: "17h00 – 18h30", teacher: "Đức" },
  { days: "Thứ 3 / Thứ 5", time: "15h00 – 16h30", teacher: "Đức" },
  { days: "Thứ 4 / Thứ 6", time: "20h15 – 21h45", teacher: "Đức" },
];

export const campaignHighlights: CampaignHighlight[] = [
  {
    value: "4–5",
    label: "học viên/lớp",
    body: "Nhóm nhỏ để giáo viên theo sát từng bạn.",
  },
  {
    value: "90",
    label: "phút/buổi",
    body: "Đủ thời lượng để học lý thuyết, luyện nói và sửa lỗi.",
  },
  {
    value: "HN",
    label: "online/offline",
    body: "Học online hoặc offline tại Hà Nội tùy nhu cầu của lớp.",
  },
  {
    value: "A1",
    label: "học chắc từ đầu",
    body: "Có bài tập và phần tổng hợp sau từng buổi học.",
  },
];

export const credibilityStats = [
  {
    value: "16 năm",
    label: "học tiếng Pháp từ lớp 1",
  },
  {
    value: "DELF B2",
    label: "chứng chỉ từ năm 2019",
  },
  {
    value: "100+ học viên",
    label: "đã từng đồng hành",
  },
  {
    value: "4–5 học viên/lớp",
    label: "nhóm nhỏ dễ theo sát",
  },
];

export const levelSelectionGuide = [
  {
    level: "A1" as const,
    title: "Bắt đầu hoặc học lại từ gốc",
    body: "Lớp trọng tâm hiện tại dành cho người mới bắt đầu, mất gốc hoặc cần học lại tiếng Pháp có hệ thống.",
    href: "/a1",
  },
  {
    level: "A2" as const,
    title: "Sau khi đã chắc nền A1",
    body: "Khi đã nắm phát âm, câu cơ bản và thói quen học, học viên có thể tiếp tục lên A2 để mở rộng giao tiếp.",
    href: "/a2",
  },
  {
    level: "B1" as const,
    title: "Định hướng DELF/TCF về sau",
    body: "A1 là nền để học lên B1 hoặc ôn DELF/TCF sau này, nhưng không cần học vội khi nền tảng chưa chắc.",
    href: "/b1",
  },
];

export const classFinderQuiz = {
  title: "Bạn nên bắt đầu từ lớp nào?",
  subtitle:
    "Trả lời nhanh vài câu để mình gợi ý bạn nên bắt đầu với A1, A2 hay B1.",
  questions: [
    {
      id: "q1",
      title: "Bạn đã từng học tiếng Pháp chưa?",
      options: [
        "Chưa học bao giờ",
        "Từng học nhưng mất gốc",
        "Đã học A1",
        "Đã học A2 hoặc gần A2",
        "Không chắc",
      ],
    },
    {
      id: "q2",
      title: "Hiện tại bạn thấy khó nhất ở phần nào?",
      options: [
        "Phát âm",
        "Ngữ pháp nền tảng",
        "Nghe hiểu",
        "Nói phản xạ",
        "Viết câu/đoạn",
        "Không biết mình yếu phần nào",
      ],
    },
    {
      id: "q3",
      title: "Mục tiêu chính của bạn là gì?",
      options: [
        "Học từ đầu cho chắc",
        "Giao tiếp cơ bản",
        "Học ở trường/đại học",
        "Chuẩn bị DELF/TCF",
        "Du học/công việc",
        "Lấy lại gốc",
      ],
    },
  ] satisfies QuizQuestion[],
  optionToLevel: {
    "Chưa học bao giờ": "A1",
    "Từng học nhưng mất gốc": "A1",
    "Đã học A1": "A2",
    "Đã học A2 hoặc gần A2": "B1",
    "Không chắc": "UNCERTAIN",
    "Phát âm": "A1",
    "Ngữ pháp nền tảng": "A1",
    "Nghe hiểu": "A2",
    "Nói phản xạ": "B1",
    "Viết câu/đoạn": "B1",
    "Không biết mình yếu phần nào": "UNCERTAIN",
    "Học từ đầu cho chắc": "A1",
    "Giao tiếp cơ bản": "A2",
    "Học ở trường/đại học": "A2",
    "Chuẩn bị DELF/TCF": "B1",
    "Du học/công việc": "B1",
    "Lấy lại gốc": "A1",
  } satisfies Record<string, QuizResultState>,
  results: {
    A1: {
      title: "Bạn có thể bắt đầu với A1",
      body: "Phù hợp nếu bạn mới học, mất gốc hoặc muốn xây lại nền tảng phát âm, giao tiếp cơ bản và ngữ pháp từ đầu.",
      cta: "Đăng ký tư vấn lớp A1",
      level: "A1",
    } as QuizResultContent & { level: QuizLevel },
    A2: {
      title: "Bạn có thể phù hợp với A2",
      body: "Phù hợp nếu bạn đã có nền tảng A1 nhưng muốn giao tiếp chắc hơn, củng cố ngữ pháp, nghe đọc và phản xạ nói.",
      cta: "Đăng ký tư vấn lớp A2",
      level: "A2",
    } as QuizResultContent & { level: QuizLevel },
    B1: {
      title: "Bạn có thể phù hợp với B1",
      body: "Phù hợp nếu bạn đã ở khoảng A2/A2+ và muốn dùng tiếng Pháp độc lập hơn hoặc định hướng DELF B1.",
      cta: "Đăng ký tư vấn lớp B1",
      level: "B1",
    } as QuizResultContent & { level: QuizLevel },
    UNCERTAIN: {
      title: "Mình cần hỏi thêm một chút",
      body: "Nếu bạn chưa chắc trình độ hiện tại, hãy đăng ký tư vấn. Mình sẽ hỏi nhanh mục tiêu học và gợi ý nên bắt đầu từ A1, A2 hay B1.",
      cta: "Đăng ký tư vấn miễn phí",
      level: "UNCERTAIN",
    } as QuizResultContent & { level: QuizResultState },
  } as Record<
    QuizResultState,
    QuizResultContent & { level: QuizResultState }
  >,
};

export const learningPathway = [
  {
    level: "A1",
    title: "Xây nền",
    body: "Phát âm, chào hỏi, giới thiệu bản thân, ngữ pháp và từ vựng cơ bản.",
  },
  {
    level: "A2",
    title: "Học chắc",
    body: "Giao tiếp tình huống quen thuộc, củng cố ngữ pháp, mở rộng nghe đọc.",
  },
  {
    level: "B1",
    title: "Dùng độc lập hơn",
    body: "Trình bày ý kiến, luyện 4 kỹ năng, có thể định hướng DELF B1.",
  },
];

export const whyFrenchzone = [
  {
    title: "Nhóm nhỏ, theo sát hơn",
    body: "Mỗi lớp chỉ khoảng 4–5 học viên để có thời gian sửa phát âm, sửa câu và theo dõi tiến độ từng bạn.",
  },
  {
    title: "Lộ trình rõ cho người mới",
    body: "A1 được xây từ phát âm, từ vựng và ngữ pháp cơ bản để học viên hiểu mình đang học gì.",
  },
  {
    title: "Không học xong rồi bỏ đó",
    body: "Sau buổi học có bài tập, tài liệu tổng hợp và hoạt động luyện thêm qua Frenchzone.",
  },
];

export const teacherIntro =
  "Lớp được phụ trách bởi Đức và Huy, với định hướng dạy chắc nền tảng cho người mới bắt đầu. Đức và Huy có 16 năm học tiếng Pháp từ lớp 1, đạt DELF B2 từ năm 2019 và đã từng đồng hành, giảng dạy cho hơn 100 học viên ở nhiều độ tuổi và trình độ khác nhau.";

export const teacherHighlights = [
  "16 năm học tiếng Pháp từ lớp 1",
  "DELF B2 từ năm 2019",
  "Đã đồng hành/giảng dạy cho hơn 100 học viên",
  "Theo sát các lỗi dễ gặp: phát âm, chia động từ, đặt câu và phản xạ giao tiếp",
];

export const teacherMaterials = [
  "Có giáo án, slides bài giảng, tài liệu ôn tập và bài tập sau từng buổi",
  "Tài liệu được chọn lọc từ Nouveau Taxi, Édito và các nguồn A1–A2",
  "Nội dung được điều chỉnh lại theo hướng dễ hiểu, phù hợp với người mới bắt đầu",
];

export const frenchzonePlatform = {
  title: "Học trên lớp, ôn lại rõ ràng qua fzone.site",
  body: "Ngoài bài giảng trực tiếp, học viên có website học tập riêng để làm bài tập, luyện lại nội dung đã học, theo dõi bài sau từng buổi và có thêm tài liệu/hoạt động luyện tập.",
  bullets: [
    "Làm bài tập sau từng buổi học",
    "Luyện lại nội dung đã học trên lớp",
    "Theo dõi bài học và phần tổng hợp sau buổi học",
    "Có thêm tài liệu và hoạt động luyện tập để giữ nhịp học",
  ],
  cta: "Khám phá fzone.site",
  href: "https://fzone.site",
  disclaimer:
    "Frenchzone Academy là trang tuyển sinh/lớp học. Nền tảng học chính được phát triển riêng tại fzone.site để hỗ trợ học viên ngoài giờ học.",
};

export const contactMethods: ContactMethod[] = [
  {
    name: "Đức",
    label: "SĐT/Zalo Đức",
    value: "0927.931.314",
  },
  {
    name: "Phạm Quang Huy",
    label: "SĐT/Zalo Phạm Quang Huy",
    value: "038.237.4800",
  },
];

export const studentFeedback = [
  "“Anh giảng dễ hiểu, em thấy tiếng Pháp bớt sợ hơn nhiều.”",
  "“Em tự tin hơn khi nói và làm bài tiếng Pháp.”",
  "“Cảm ơn anh đã giúp bọn em đạt aim ạ.”",
  "“Lớp ít người nên em được sửa lỗi kỹ hơn.”",
  "“Sau mỗi buổi em biết mình cần ôn gì tiếp.”",
  "“Ngữ pháp được giải thích rõ, dễ nhớ hơn so với tự học.”",
];

export const howClassesWork = [
  {
    title: "Tư vấn đầu vào",
    body: "Phụ huynh hoặc học viên gửi nền tảng hiện tại, mục tiêu và lịch rảnh. Đức hoặc Huy tư vấn lớp phù hợp.",
  },
  {
    title: "Học nhóm nhỏ",
    body: "Mỗi lớp khoảng 4–5 học viên, 90 phút/buổi, online hoặc offline tại Hà Nội tùy nhu cầu của lớp.",
  },
  {
    title: "Sửa lỗi trong buổi học",
    body: "Giáo viên theo sát phát âm, cách đặt câu, chia động từ và phản xạ giao tiếp cơ bản.",
  },
  {
    title: "Ôn lại sau buổi học",
    body: "Sau mỗi buổi, học viên có bài tập, tài liệu tổng hợp và hoạt động luyện thêm qua Frenchzone.",
  },
];

export const frenchzoneSupport = frenchzonePlatform.body;

export const faqItems = [
  {
    question: "Chưa học tiếng Pháp bao giờ có học được không?",
    answer:
      "Có. Lớp A1 được thiết kế cho người mới bắt đầu hoặc mất gốc, đi từ phát âm, từ vựng và ngữ pháp nền tảng.",
  },
  {
    question: "Lớp học nhanh hay chậm?",
    answer:
      "Mục tiêu của lớp không phải học thật nhanh, mà là học chắc từ đầu, hiểu mình đang học gì và dùng được kiến thức đã học.",
  },
  {
    question: "Lớp học online hay offline?",
    answer:
      "Lớp có thể học online hoặc offline tại Hà Nội tùy theo nhu cầu và lịch của nhóm học viên.",
  },
  {
    question: "Mỗi lớp có bao nhiêu học viên?",
    answer:
      "Mỗi lớp chỉ khoảng 4–5 học viên để giáo viên có thể theo sát, sửa lỗi trực tiếp và hỗ trợ từng bạn.",
  },
  {
    question: "Có bài tập sau buổi học không?",
    answer:
      "Có. Học viên sẽ có bài tập, phần tổng hợp nội dung sau buổi học và hoạt động luyện thêm qua Frenchzone.",
  },
  {
    question: "Học A1 xong có thể học tiếp gì?",
    answer:
      "Khi nền A1 đã chắc, học viên có thể học tiếp A2, B1 hoặc định hướng ôn DELF/TCF sau này tùy mục tiêu.",
  },
];

export const classPages: Record<LevelKey, ClassPageContent> = {
  A1: {
    ...classCards[0],
    metadata: {
      title:
        "Lớp tiếng Pháp A1 cho người mới bắt đầu / mất gốc — Frenchzone Academy",
      description:
        "Lớp tiếng Pháp A1 nhóm nhỏ cùng Đức và Huy cho người mới bắt đầu hoặc mất gốc, học chắc phát âm, từ vựng, ngữ pháp, phản xạ giao tiếp và có bài tập sau buổi học.",
    },
    pageTitle: "Lớp tiếng Pháp A1 cho người mới bắt đầu / mất gốc",
    subtitle:
      "Học từ nền tảng, không học vội: phát âm, từ vựng cơ bản, ngữ pháp nền tảng, phản xạ giao tiếp, đọc hiểu và viết câu/đoạn ngắn.",
    positioning:
      "Lớp A1 phù hợp nếu bạn muốn bắt đầu tiếng Pháp từ con số 0, từng học nhưng mất gốc hoặc cần học lại theo một hệ thống rõ ràng.",
    who: a1SuitableLearners,
    outcomes: [
      "Đọc và phát âm các âm cơ bản trong tiếng Pháp",
      "Nắm từ vựng A1 theo chủ đề gần gũi",
      "Hiểu giống, số, mạo từ, động từ cơ bản và cách đặt câu",
      "Giao tiếp đơn giản: chào hỏi, giới thiệu bản thân, hỏi đáp ngắn",
      "Đọc hiểu đoạn ngắn và viết câu/đoạn ngắn đúng trọng tâm",
      "Có thói quen làm bài, ôn lại và theo dõi tiến độ sau buổi học",
    ],
    info: [
      { label: "Trình độ", value: "A1 cho người mới bắt đầu / mất gốc" },
      { label: "Hình thức", value: "online hoặc offline tại Hà Nội" },
      { label: "Sĩ số", value: "4–5 học viên" },
      { label: "Thời lượng", value: "90 phút/buổi" },
      { label: "Sau buổi học", value: "có bài tập và phần tổng hợp" },
      { label: "Hỗ trợ thêm", value: "qua Frenchzone tại fzone.site" },
    ],
    cta: "Đăng ký tư vấn lớp A1",
  },
  A2: {
    ...classCards[1],
    metadata: {
      title: "Lớp tiếng Pháp A2 — Frenchzone Academy",
      description:
        "Củng cố nền tảng A1, giao tiếp chắc hơn, học ngữ pháp và từ vựng A2 có hệ thống.",
    },
    pageTitle:
      "Lớp tiếng Pháp A2 để giao tiếp chắc hơn và học có hệ thống hơn",
    subtitle:
      "Dành cho người đã có nền tảng A1 nhưng còn yếu phản xạ, ngữ pháp, nghe đọc hoặc chưa biết học tiếp thế nào.",
    positioning:
      "Lớp A2 giúp bạn nối phần nền tảng A1 với khả năng giao tiếp và đọc hiểu tự nhiên hơn.",
    who: [
      "Người đã học hết hoặc gần hết A1",
      "Người biết chào hỏi, giới thiệu bản thân nhưng nói chưa tự nhiên",
      "Người muốn củng cố ngữ pháp và từ vựng",
      "Người muốn chuẩn bị lên B1",
      "Người từng học tiếng Pháp nhưng kiến thức bị rời rạc",
    ],
    outcomes: [
      "Giao tiếp tốt hơn trong các tình huống quen thuộc",
      "Mở rộng vốn từ vựng theo chủ đề",
      "Củng cố thì hiện tại, quá khứ gần, tương lai gần, passé composé cơ bản",
      "Đọc hiểu văn bản ngắn tốt hơn",
      "Nghe các đoạn hội thoại ngắn và nắm ý chính",
      "Viết đoạn ngắn về bản thân, thói quen, trải nghiệm và kế hoạch",
    ],
    info: [
      { label: "Trình độ", value: "A2" },
      { label: "Hình thức", value: "online" },
      { label: "Số lượng", value: "3–5 học viên" },
      { label: "Thời lượng", value: "90 phút/buổi" },
      { label: "Học phí", value: "170.000đ/buổi" },
      { label: "Phù hợp với", value: "người đã có nền tảng A1" },
    ],
    cta: "Đăng ký tư vấn lớp A2",
  },
  B1: {
    ...classCards[2],
    metadata: {
      title: "Lớp tiếng Pháp B1 — Frenchzone Academy",
      description:
        "Học tiếng Pháp B1 để cải thiện nghe, đọc, nói, viết và có thể chuẩn bị DELF B1.",
    },
    pageTitle: "Lớp tiếng Pháp B1 để dùng tiếng Pháp độc lập hơn",
    subtitle:
      "Dành cho người đã có nền tảng A2 và muốn cải thiện nghe, đọc, nói, viết theo hướng thực tế hơn, có thể kết hợp chuẩn bị DELF B1.",
    positioning:
      "Lớp B1 giúp người học chuyển từ mức cơ bản sang khả năng trình bày ý kiến, hiểu ý chính và viết/nói có cấu trúc hơn.",
    who: [
      "Người đã học A2 hoặc đang ở khoảng A2+",
      "Người muốn chuẩn bị B1 hoặc DELF B1",
      "Người nghe đọc được nhưng nói viết còn yếu",
      "Người cần tiếng Pháp cho du học, công việc hoặc mục tiêu dài hạn",
      "Người muốn có lộ trình rõ thay vì học rời rạc",
    ],
    outcomes: [
      "Hiểu ý chính của bài nghe và bài đọc B1",
      "Trình bày quan điểm cá nhân ở mức đơn giản",
      "Viết đoạn văn có cấu trúc",
      "Mở rộng từ vựng theo chủ đề xã hội, học tập, công việc, văn hóa",
      "Luyện phản xạ nói qua câu hỏi B1",
      "Làm quen định dạng DELF B1 nếu học viên có nhu cầu",
    ],
    info: [
      { label: "Trình độ", value: "B1" },
      { label: "Hình thức", value: "online" },
      { label: "Số lượng", value: "3–5 học viên" },
      { label: "Thời lượng", value: "90 phút/buổi" },
      { label: "Học phí", value: "200.000đ/buổi" },
      { label: "Phù hợp với", value: "người học A2/A2+" },
    ],
    cta: "Đăng ký tư vấn lớp B1",
  },
};
