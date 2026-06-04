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
  title: "Frenchzone Academy — Học tiếng Pháp A1 từ đầu",
  description:
    "Lớp tiếng Pháp A1 nhóm nhỏ 4–5 học viên, học từ phát âm, câu cơ bản đến phản xạ giao tiếp đơn giản.",
};

export const sharedClassInfo = [
  "Trình độ: A1 cho người mới học hoặc mất gốc",
  "Hình thức: online hoặc offline tại Hà Nội",
  "Sĩ số: 4–5 học viên/lớp",
  "Thời lượng: 90 phút/buổi",
  "Có phần ôn lại sau buổi học",
  "Có hỗ trợ thêm qua fzone.site",
];

export const classCards: ClassCardContent[] = [
  {
    level: "A1",
    href: "/a1",
    title: "A1 — Học từ đầu, chậm mà chắc",
    description:
      "Dành cho bạn mới học, mất gốc hoặc từng học nhưng chưa có hệ thống.",
    price: "Tư vấn theo lớp",
    bestFor: "Chưa học hoặc mất gốc",
    focus: "Phát âm, câu cơ bản, giao tiếp đơn giản",
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
  "Mới bắt đầu từ số 0",
  "Từng học nhưng mất gốc",
  "Học ở trường nhưng chưa chắc",
  "Sinh viên/người đi làm muốn học thêm ngoại ngữ",
  "Muốn có nền A1–A2 trước khi lên B1 hoặc ôn DELF/TCF",
];

export const a1LearningFocus = [
  {
    title: "Phát âm cơ bản",
    body: "Làm quen cách đọc tiếng Pháp và sửa sớm những âm dễ sai.",
  },
  {
    title: "Từ và mẫu câu quen thuộc",
    body: "Học theo chủ đề gần gũi để dùng được trong câu ngắn.",
  },
  {
    title: "Ngữ pháp vừa đủ dùng",
    body: "Giống, số, mạo từ, động từ và cách đặt câu cơ bản.",
  },
  {
    title: "Nói câu đơn giản",
    body: "Tập chào hỏi, tự giới thiệu và hỏi đáp ngắn.",
  },
  {
    title: "Đọc đoạn ngắn",
    body: "Nhận ra từ, mẫu câu đã học và nắm ý chính.",
  },
  {
    title: "Viết câu/đoạn ngắn",
    body: "Viết về bản thân, lịch học, sở thích và hoạt động hằng ngày.",
  },
  {
    title: "Ôn lại sau buổi học",
    body: "Có bài luyện và phần tổng hợp để không quên bài khi về nhà.",
  },
];

export const a1SmallClassReasons = [
  {
    title: "Nhiều lượt nói hơn",
    body: "Mỗi bạn có thêm thời gian đọc, nói và đặt câu trong buổi học.",
  },
  {
    title: "Được sửa sớm",
    body: "Phát âm và cách đặt câu sai nếu để lâu sẽ rất khó sửa.",
  },
  {
    title: "Không bị trôi",
    body: "Giáo viên dễ nhận ra bạn đang vướng ở đâu để nhắc lại kịp lúc.",
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
    body: "Đủ nhỏ để từng bạn có lượt nói và được sửa.",
  },
  {
    value: "90",
    label: "phút/buổi",
    body: "Có thời gian học bài mới, luyện nói và hỏi lại.",
  },
  {
    value: "HN",
    label: "online/offline",
    body: "Linh hoạt theo lịch và nhu cầu của lớp.",
  },
  {
    value: "A1",
    label: "học từ đầu",
    body: "Có phần ôn lại để giữ nhịp sau mỗi buổi.",
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
    label: "đã từng hỗ trợ",
  },
  {
    value: "4–5 học viên/lớp",
    label: "nhóm nhỏ dễ sửa bài",
  },
];

export const levelSelectionGuide = [
  {
    level: "A1" as const,
    title: "Bắt đầu từ gốc",
    body: "Phù hợp nếu bạn mới học, mất gốc hoặc muốn học lại cho chắc.",
    href: "/a1",
  },
  {
    level: "A2" as const,
    title: "Mở rộng sau A1",
    body: "Khi đã quen phát âm và câu cơ bản, bạn có thể lên A2 để giao tiếp nhiều hơn.",
    href: "/a2",
  },
  {
    level: "B1" as const,
    title: "Hướng tới B1/DELF",
    body: "Đi tiếp khi bạn đã đủ chắc để đọc, nghe và trình bày ý rõ hơn.",
    href: "/b1",
  },
];

export const classFinderQuiz = {
  title: "Bạn nên bắt đầu từ lớp nào?",
  subtitle:
    "Trả lời vài câu ngắn, bọn mình sẽ gợi ý mức học phù hợp hơn.",
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
      body: "Phù hợp nếu bạn mới học, mất gốc hoặc muốn học lại phát âm, câu cơ bản và giao tiếp đơn giản.",
      cta: "Đăng ký tư vấn lớp A1",
      level: "A1",
    } as QuizResultContent & { level: QuizLevel },
    A2: {
      title: "Bạn có thể phù hợp với A2",
      body: "Phù hợp nếu bạn đã học A1 nhưng muốn giao tiếp chắc hơn và ôn lại ngữ pháp.",
      cta: "Đăng ký tư vấn lớp A2",
      level: "A2",
    } as QuizResultContent & { level: QuizLevel },
    B1: {
      title: "Bạn có thể phù hợp với B1",
      body: "Phù hợp nếu bạn đang ở khoảng A2/A2+ và muốn dùng tiếng Pháp độc lập hơn.",
      cta: "Đăng ký tư vấn lớp B1",
      level: "B1",
    } as QuizResultContent & { level: QuizLevel },
    UNCERTAIN: {
      title: "Mình cần hỏi thêm một chút",
      body: "Nếu bạn chưa chắc trình độ, cứ để lại thông tin. Bọn mình sẽ hỏi nhanh rồi gợi ý sau.",
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
    body: "Phát âm, chào hỏi, câu ngắn và từ vựng quen thuộc.",
  },
  {
    level: "A2",
    title: "Học chắc",
    body: "Giao tiếp quen thuộc, ôn ngữ pháp và mở rộng nghe đọc.",
  },
  {
    level: "B1",
    title: "Dùng tự tin hơn",
    body: "Trình bày ý kiến, luyện 4 kỹ năng và định hướng DELF nếu cần.",
  },
];

export const whyFrenchzone = [
  {
    title: "Nhóm nhỏ, sửa kỹ hơn",
    body: "Mỗi lớp chỉ khoảng 4–5 học viên để có thời gian sửa bài kỹ hơn.",
  },
  {
    title: "Học theo từng bước",
    body: "Đi từ phát âm, câu cơ bản đến giao tiếp ngắn, không nhảy quá nhanh.",
  },
  {
    title: "Có chỗ để ôn lại",
    body: "Sau giờ học, bạn vẫn có tài liệu và bài luyện thêm qua Frenchzone.",
  },
];

export const teacherIntro =
  "Bọn mình học tiếng Pháp từ lớp 1, có DELF B2 từ năm 2019 và đã hỗ trợ hơn 100 học viên ở nhiều trình độ. Với lớp này, bọn mình ưu tiên cách giải thích dễ hiểu, sửa lỗi trực tiếp và tài liệu rõ ràng để bạn có thể tự ôn ở nhà.";

export const teacherHighlights = [
  "16 năm học tiếng Pháp từ lớp 1",
  "DELF B2 từ năm 2019",
  "Hơn 100 học viên đã được hỗ trợ",
  "Sửa kỹ phát âm, chia động từ, đặt câu và phản xạ nói",
];

export const teacherMaterials = [
  "Giáo án và slides theo từng buổi",
  "Bài tập và phần tổng hợp để ôn lại",
  "Tài liệu chọn lọc từ Nouveau Taxi, Édito và nguồn A1–A2",
  "Hỗ trợ luyện thêm qua fzone.site",
];

export const frenchzonePlatform = {
  title: "Học trên lớp, ôn lại qua fzone.site",
  body: "Ngoài giờ học, học viên có thêm một nơi để làm bài luyện, xem lại nội dung đã học và giữ nhịp ôn tập.",
  bullets: [
    "Làm bài luyện sau giờ học",
    "Xem lại nội dung đã học",
    "Theo dõi bài và phần tổng hợp",
    "Có thêm tài liệu để tự ôn",
  ],
  cta: "Khám phá fzone.site",
  href: "https://fzone.site",
  disclaimer:
    "Frenchzone Academy là trang tuyển sinh lớp học. fzone.site là nền tảng riêng để hỗ trợ học viên ngoài giờ.",
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
    title: "Gửi thông tin",
    body: "Bạn cho bọn mình biết trình độ hiện tại, mục tiêu và lịch rảnh.",
  },
  {
    title: "Học nhóm nhỏ",
    body: "Mỗi lớp khoảng 4–5 học viên, 90 phút/buổi.",
  },
  {
    title: "Sửa lỗi trên lớp",
    body: "Giáo viên nghe, sửa phát âm, câu và phản xạ nói.",
  },
  {
    title: "Ôn lại ở nhà",
    body: "Bạn có phần tổng hợp và bài luyện thêm qua Frenchzone.",
  },
];

export const frenchzoneSupport = frenchzonePlatform.body;

export const faqItems = [
  {
    question: "Chưa học tiếng Pháp bao giờ có học được không?",
    answer:
      "Có. Lớp đi từ phát âm, từ vựng và mẫu câu rất cơ bản.",
  },
  {
    question: "Lớp học nhanh hay chậm?",
    answer:
      "Lớp học chậm mà chắc, ưu tiên hiểu bài và dùng được kiến thức.",
  },
  {
    question: "Lớp học online hay offline?",
    answer:
      "Lớp có thể học online hoặc offline tại Hà Nội tùy theo nhu cầu và lịch của nhóm học viên.",
  },
  {
    question: "Mỗi lớp có bao nhiêu học viên?",
    answer:
      "Mỗi lớp khoảng 4–5 học viên để từng bạn có thời gian nói và được sửa.",
  },
  {
    question: "Có bài tập sau buổi học không?",
    answer:
      "Có. Học viên có phần tổng hợp và bài luyện thêm qua Frenchzone.",
  },
  {
    question: "Học A1 xong có thể học tiếp gì?",
    answer:
      "Khi đã chắc hơn, bạn có thể học tiếp A2, B1 hoặc định hướng DELF/TCF.",
  },
];

export const classPages: Record<LevelKey, ClassPageContent> = {
  A1: {
    ...classCards[0],
    metadata: {
      title:
        "Học tiếng Pháp A1 từ đầu — Frenchzone Academy",
      description:
        "Lớp tiếng Pháp A1 nhóm nhỏ cho bạn mới học hoặc mất gốc, đi từ phát âm đến giao tiếp đơn giản.",
    },
    pageTitle: "Học tiếng Pháp A1 từ đầu, chậm mà chắc",
    subtitle:
      "Dành cho bạn mới học, mất gốc hoặc từng học nhưng chưa có hệ thống. Lớp nhóm nhỏ giúp bạn học từ phát âm đến câu giao tiếp đơn giản.",
    positioning:
      "Phù hợp nếu bạn muốn bắt đầu từ số 0, học lại phần đã quên hoặc cần một lớp nhỏ để được sửa kỹ hơn.",
    who: a1SuitableLearners,
    outcomes: [
      "Đọc và phát âm các âm cơ bản",
      "Tự giới thiệu, hỏi đáp đơn giản",
      "Nắm từ vựng và mẫu câu quen thuộc",
      "Viết câu/đoạn ngắn",
      "Biết cách ôn lại sau buổi học",
    ],
    info: [
      { label: "Trình độ", value: "A1 cho người mới học / mất gốc" },
      { label: "Hình thức", value: "online hoặc offline tại Hà Nội" },
      { label: "Sĩ số", value: "4–5 học viên" },
      { label: "Thời lượng", value: "90 phút/buổi" },
      { label: "Sau buổi học", value: "có phần ôn lại" },
      { label: "Hỗ trợ thêm", value: "qua fzone.site" },
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
