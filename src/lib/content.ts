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

export const siteConfig = {
  name: "Frenchzone Academy",
  title: "Frenchzone Academy — Lớp tiếng Pháp A1, A2, B1",
  description:
    "Lớp tiếng Pháp nhóm nhỏ A1, A2, B1 cùng Phạm Quang Huy. Online, có lộ trình, bài tập sau buổi học và Frenchzone hỗ trợ luyện thêm.",
};

export const sharedClassInfo = [
  "Hình thức: online",
  "Nhóm nhỏ: 3–5 học viên",
  "Thời lượng: 90 phút/buổi",
  "Có bài tập sau buổi học",
  "Có tư vấn chọn lớp trước khi học",
  "Có tài liệu và hoạt động luyện thêm qua Frenchzone",
];

export const classCards: ClassCardContent[] = [
  {
    level: "A1",
    href: "/a1",
    title: "A1 — Cho người mới bắt đầu",
    description:
      "Dành cho người chưa từng học tiếng Pháp, mất gốc hoặc muốn học lại từ đầu một cách bài bản.",
    price: "150.000đ/buổi",
    bestFor: "Chưa học hoặc mất gốc",
    focus: "Phát âm, nền tảng A1, thói quen học",
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

export const classPages: Record<LevelKey, ClassPageContent> = {
  A1: {
    ...classCards[0],
    metadata: {
      title: "Lớp tiếng Pháp A1 cho người mới bắt đầu — Frenchzone Academy",
      description:
        "Học tiếng Pháp A1 từ đầu: phát âm, giao tiếp cơ bản, ngữ pháp nền tảng và từ vựng thông dụng.",
    },
    pageTitle: "Lớp tiếng Pháp A1 cho người mới bắt đầu",
    subtitle:
      "Bắt đầu từ phát âm, chào hỏi, giao tiếp cơ bản, ngữ pháp nền tảng và từ vựng thông dụng.",
    positioning:
      "Lớp A1 phù hợp nếu bạn muốn bắt đầu tiếng Pháp từ con số 0 hoặc học lại từ đầu một cách có hệ thống.",
    who: [
      "Người chưa từng học tiếng Pháp",
      "Người học mất gốc",
      "Người muốn học lại từ đầu",
      "Học sinh/sinh viên cần nền tảng chắc",
      "Người muốn chuẩn bị lộ trình lên A2/B1",
    ],
    outcomes: [
      "Đọc và phát âm các âm cơ bản trong tiếng Pháp",
      "Chào hỏi và giới thiệu bản thân",
      "Nói về gia đình, học tập, công việc, sở thích",
      "Nắm các cấu trúc ngữ pháp A1 nền tảng",
      "Làm quen với bài nghe và bài đọc ngắn",
      "Có thói quen học và làm bài sau buổi học",
    ],
    info: [
      { label: "Trình độ", value: "A1" },
      { label: "Hình thức", value: "online" },
      { label: "Số lượng", value: "3–5 học viên" },
      { label: "Thời lượng", value: "90 phút/buổi" },
      { label: "Học phí", value: "150.000đ/buổi" },
      { label: "Phù hợp với", value: "người mới bắt đầu" },
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

export const whyFrenchzone = [
  {
    title: "Nhóm nhỏ, theo sát hơn",
    body: "Mỗi lớp 3–5 học viên để có thời gian sửa phát âm, sửa bài và hỏi kỹ hơn.",
  },
  {
    title: "Lộ trình rõ theo trình độ",
    body: "A1, A2, B1 được tách riêng để người học không bị học quá dễ hoặc quá khó.",
  },
  {
    title: "Không học xong rồi bỏ đó",
    body: "Sau buổi học có bài tập, tài liệu và hoạt động luyện thêm để giữ nhịp học.",
  },
];

export const heroHighlights = [
  "Nhóm nhỏ 3–5 học viên",
  "Tư vấn chọn lớp trước khi học",
  "Có bài luyện sau buổi học",
];

export const credibilityStats = [
  {
    value: "~100 học viên",
    label: "Đã từng đồng hành",
  },
  {
    value: "14+ năm",
    label: "Gắn bó với tiếng Pháp",
  },
  {
    value: "DELF B2",
    label: "Từ năm 2019",
  },
  {
    value: "A1 → B1",
    label: "Lộ trình nền tảng đến độc lập",
  },
];

export const levelSelectionGuide = [
  {
    level: "A1" as const,
    title: "Chưa học hoặc mất gốc",
    body: "Bắt đầu từ phát âm, câu cơ bản, từ vựng quen thuộc và nền tảng ngữ pháp đầu tiên.",
    href: "/a1",
  },
  {
    level: "A2" as const,
    title: "Đã có nền tảng nhưng chưa chắc",
    body: "Củng cố lại A1, học có hệ thống hơn và tăng phản xạ nghe, nói, đọc, viết.",
    href: "/a2",
  },
  {
    level: "B1" as const,
    title: "Muốn dùng tiếng Pháp độc lập hơn",
    body: "Phù hợp nếu bạn muốn diễn đạt ý kiến rõ hơn hoặc định hướng luyện DELF B1.",
    href: "/b1",
  },
];

export const frenchzonePlatform = {
  title: "Học trên lớp, luyện thêm với Frenchzone",
  body: "Frenchzone là hệ thống học tiếng Pháp mình đang phát triển để hỗ trợ học viên ngoài giờ học. Mục tiêu là giúp học viên có thêm bài luyện, tài liệu và định hướng ôn tập rõ ràng sau mỗi buổi.",
  bullets: [
    "Luyện thêm ngoài giờ học",
    "Theo dõi lộ trình học rõ hơn",
    "Tài liệu và bài tập được tổ chức theo trình độ",
    "Định hướng dần từ A1/A2 lên B1 và các kỹ năng DELF/TCF",
  ],
  cta: "Khám phá fzone.site",
  href: "https://fzone.site",
  disclaimer:
    "Frenchzone Academy là site tuyển sinh lớp học. Nền tảng học chính được phát triển tại fzone.site.",
};

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
    title: "Tư vấn chọn lớp",
    body: "Bạn gửi trình độ hiện tại và mục tiêu học. Mình tư vấn xem nên bắt đầu từ A1, A2 hay B1.",
  },
  {
    title: "Học nhóm nhỏ",
    body: "Lớp online 3–5 học viên, 90 phút/buổi, có sửa phát âm và theo sát tiến độ.",
  },
  {
    title: "Luyện thêm sau buổi học",
    body: "Sau mỗi buổi, học viên có bài tập, tài liệu và hoạt động luyện thêm qua Frenchzone.",
  },
  {
    title: "Theo dõi tiến độ",
    body: "Mục tiêu là học có hệ thống, biết mình đang mạnh/yếu ở đâu và cần luyện gì tiếp.",
  },
];

export const teacherIntro =
  "Mình là Phạm Quang Huy, đã học tiếng Pháp hơn 14 năm, có DELF B2 từ năm 2019 và đã đồng hành cùng khoảng 100 học viên ở nhiều mục tiêu khác nhau: học từ đầu, củng cố nền tảng, học ở trường, luyện giao tiếp và định hướng chứng chỉ.";

export const frenchzoneSupport =
  frenchzonePlatform.body;

export const faqItems = [
  {
    question: "Mình chưa học tiếng Pháp bao giờ thì nên học lớp nào?",
    answer:
      "Bạn nên bắt đầu với A1. Lớp A1 được thiết kế cho người mới bắt đầu từ con số 0.",
  },
  {
    question: "Mình từng học rồi nhưng mất gốc thì sao?",
    answer:
      "Bạn có thể đăng ký tư vấn. Nếu nền tảng còn yếu, mình sẽ khuyên học lại A1 nhanh hoặc vào A2 nếu bạn vẫn giữ được kiến thức cơ bản.",
  },
  {
    question: "Lớp học online hay offline?",
    answer:
      "Trước mắt lớp học online để dễ xếp lịch và phù hợp với nhóm nhỏ.",
  },
  {
    question: "Có học thử không?",
    answer:
      "Có thể có buổi học thử hoặc buổi tư vấn đầu vào tùy từng lớp và số lượng học viên.",
  },
  {
    question: "Có tài liệu không?",
    answer:
      "Có. Học viên sẽ có tài liệu theo buổi học và bài luyện thêm trên Frenchzone.",
  },
  {
    question: "Có phù hợp để thi DELF không?",
    answer:
      "A1 và A2 giúp xây nền tảng. Với B1, nếu học viên có mục tiêu thi DELF B1, lớp có thể lồng ghép luyện kỹ năng và dạng bài DELF.",
  },
];
