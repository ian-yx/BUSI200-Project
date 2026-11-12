export type AiPolicy = 'green' | 'yellow' | 'red'
export type FilterTag =
  | 'all'
  | 'required'
  | 'prereq'
  | 'low-load'
  | 'ai-ok'

export interface Course {
  id: string
  code: string
  nameZh: string
  nameEn: string
  category: string
  credits: string
  professors: string[]
  weeklyHours: string
  weeklyHoursMin: number
  examFormat: string
  attendance: string
  aiPolicy: AiPolicy
  aiPolicyLabel: string
  difficulty: number
  tip: string
  gradingBreakdown: { item: string; weight: string }[]
  gradeFloor: string
  detailedAdvice: string[]
  examCount: number
  tags: FilterTag[]
  season: 'fall' | 'spring' | 'anytime'
}

export interface Mentor {
  id: string
  nameZh: string
  nameEn: string
  year: string
  track: string
  identityTag: string
  avatarColor: string
  initials: string
  courseIds: string[]
  courseHistory: Record<
    string,
    { professor: string; term: string; grade: string }
  >
  matchScore: number
  matchReasons: string[]
  specialties: string[]
  replySpeed: string
  karma: number
}

export interface ChatMessage {
  id: string
  role: 'user' | 'mentor'
  text: string
  timestamp: number
}

export interface MatchSession {
  id: string
  courseId: string
  mentorId: string
  createdAt: number
  unread: number
  messages: ChatMessage[]
  karmaGiven: boolean
}

export const AI_POLICY_META: Record<
  AiPolicy,
  { label: string; color: string; bg: string; border: string }
> = {
  green: {
    label: '允许使用 AI',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  yellow: {
    label: '有限制使用 AI',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  red: {
    label: '严禁使用 AI',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
  },
}

export const FILTER_OPTIONS: { id: FilterTag; label: string }[] = [
  { id: 'all', label: '全部商科课程' },
  { id: 'required', label: '大一秋季/春季必修' },
  { id: 'prereq', label: '微积分/统计/经济先修' },
  { id: 'low-load', label: '低负荷友好 (<4h/周)' },
  { id: 'ai-ok', label: '允许使用 AI' },
]

export const courses: Course[] = [
  {
    id: 'busi-200',
    code: 'BUSI 200',
    nameZh: '释放你的领导力潜能',
    nameEn: 'Unlocking Your Leadership Potential',
    category: '商学院直通车大一秋季必修 (FBA Only)',
    credits: '3.0 学分',
    professors: ['Prof. Shimul Melwani'],
    weeklyHours: '3–4 小时/周',
    weeklyHoursMin: 3,
    examFormat: '0 场闭卷考试（全过程团队项目 + 个人反思报告）',
    attendance: '极严格（大课最多缺勤 2 次，Lab 最多缺勤 1 次，超额扣分）',
    aiPolicy: 'yellow',
    aiPolicyLabel: '黄灯（允许用于头脑风暴与原型开发，严禁用于代写个人反思）',
    difficulty: 2.4,
    tip: '全课堂禁用电子设备（No-Tech），重头戏是每周的 Peer Lab 互动、Humans of Chapel Hill 咖啡访谈以及期末的 Changemaking 原型路演。',
    gradingBreakdown: [
      { item: 'Peer Lab 参与与反思', weight: '25%' },
      { item: '团队 Changemaking 项目', weight: '35%' },
      { item: '个人领导力反思报告', weight: '25%' },
      { item: '考勤与课堂贡献', weight: '15%' },
    ],
    gradeFloor: 'FBA 直通车学生需认真完成全部交付，重在参与与成长而非刷分。',
    detailedAdvice: [
      '手机和平板请放包里——No-Tech 政策执行严格，被发现会扣分。',
      'Humans of Chapel Hill 访谈建议提前预约被访者，不要拖到周末前一晚。',
      '期末路演可在 Bell Hall 或 McColl 大楼找空教室彩排，学长常在那里练讲稿。',
      '个人反思必须用自己的声音写，AI 只能帮你整理思路，不能代写。',
    ],
    examCount: 0,
    tags: ['required', 'low-load', 'ai-ok'],
    season: 'fall',
  },
  {
    id: 'busi-100',
    code: 'BUSI 100',
    nameZh: '商业导论',
    nameEn: 'Introduction to Business',
    category: '商学院直通车大一春季必修 (FBA Designated Section)',
    credits: '1.5–3.0 学分',
    professors: ['Prof. Paul Friga', 'Prof. Gary Shoesmith'],
    weeklyHours: '2–3 小时/周',
    weeklyHoursMin: 2,
    examFormat: '2 场期中考试 + 小组商业案例分析',
    attendance: '强制打卡点名',
    aiPolicy: 'green',
    aiPolicyLabel: '绿灯（允许用于案例商业数据检索，需规范注明引用）',
    difficulty: 2.2,
    tip: '商学院入门全景课，围绕 People, Profits, and Planet 展开；直通车学生大一下必须选 FBA 专属 Section 并拿到 C 或以上。',
    gradingBreakdown: [
      { item: '期中考试（2 场）', weight: '40%' },
      { item: '小组商业案例分析', weight: '30%' },
      { item: '课堂参与与点名', weight: '15%' },
      { item: '小测验 / 作业', weight: '15%' },
    ],
    gradeFloor: 'FBA 直通车学生必须选 FBA Designated Section，并拿到 C 或以上以保住席位。',
    detailedAdvice: [
      '选课系统里务必核对 Section 标注是否含 FBA，普通 Section 不满足直通车要求。',
      '案例讨论前先读完案例正文，课堂冷场时主动发言加分明显。',
      'People / Profits / Planet 三框架记牢，期中常以框架分析题出题。',
      '可去 McColl 大楼问 UBP 学术辅导是否有本课答疑时段。',
    ],
    examCount: 2,
    tags: ['required', 'low-load', 'ai-ok'],
    season: 'spring',
  },
  {
    id: 'econ-101',
    code: 'ECON 101',
    nameZh: '经济学原理',
    nameEn: 'Introduction to Economics',
    category: '商学院直通车硬性先修课 (经济学要求)',
    credits: '4.0 学分',
    professors: ['Prof. Rita Balaban', 'Prof. Staub'],
    weeklyHours: '5–7 小时/周',
    weeklyHoursMin: 5,
    examFormat: '3 场期中考试 + 累计范围期末考',
    attendance: '课堂 PollEverywhere 实时答题计分',
    aiPolicy: 'red',
    aiPolicyLabel: '红灯（计分作业与线上练习严禁使用 AI）',
    difficulty: 3.6,
    tip: '商学院三大先修里最著名的筛选课（Weed-out），想稳拿 C 以上保住商学院席位，考前必须刷透往年真题（Practice Exams）；若已有 AP 宏微观高分可直接豁免。',
    gradingBreakdown: [
      { item: '期中考试（3 场）', weight: '45%' },
      { item: '期末考试（累计范围）', weight: '25%' },
      { item: '作业与线上练习', weight: '20%' },
      { item: 'PollEverywhere 课堂答题', weight: '10%' },
    ],
    gradeFloor: '商学院直通车硬性要求：成绩须达到 C 或以上，否则影响 Assured Enrollment 席位。',
    detailedAdvice: [
      '开学第一周就找往年 Practice Exams，考前至少完整刷两轮。',
      'PollEverywhere 占平时分，迟到或手机没电都会丢分。',
      'AP Macro + Micro 高分可申请豁免，但要想扎实打底可考虑重修。',
      'Bell Hall 自习室考前很满，建议提前占座；也可约 UBP 同伴互助。',
    ],
    examCount: 4,
    tags: ['prereq'],
    season: 'anytime',
  },
  {
    id: 'stor-155',
    code: 'STOR 155',
    nameZh: '数据模型与统计推断导论',
    nameEn: 'Intro to Data Models & Inference',
    category: '商学院直通车硬性先修课 (统计学要求)',
    credits: '3.0 学分',
    professors: ['Prof. Mario Giacomazzo', 'Prof. Jan Hannig'],
    weeklyHours: '4–6 小时/周',
    weeklyHoursMin: 4,
    examFormat: '2 场期中 + 期末考 + 每周 R 语言实验作业',
    attendance: '大课自愿 / 每周 Lab 实验课强制出席',
    aiPolicy: 'yellow',
    aiPolicyLabel: '黄灯（仅限用于排查 R 语言代码语法报错）',
    difficulty: 3.1,
    tip: '商学院量化先修三选一（STOR 155 / STOR 120 / DATA 110）中最经典的一门，只要跟紧每周 R 语言实验课就非常稳。',
    gradingBreakdown: [
      { item: '期中考试（2 场）', weight: '35%' },
      { item: '期末考试', weight: '25%' },
      { item: '每周 R Lab 作业', weight: '30%' },
      { item: 'Lab 出勤', weight: '10%' },
    ],
    gradeFloor: '商学院统计学先修要求：成绩须达到 C 或以上。',
    detailedAdvice: [
      'Lab 千万别翘——实验作业和出勤直接挂钩，补做很麻烦。',
      'R 语法报错可以用 AI 辅助排查，但统计概念与作业答案不能代写。',
      '跟紧每周实验节奏，期末几乎就是 Lab 内容的综合。',
      '不确定选 STOR 155 还是 STOR 120 / DATA 110 时，可先问修过课的 UBP 学长。',
    ],
    examCount: 3,
    tags: ['prereq', 'ai-ok'],
    season: 'anytime',
  },
  {
    id: 'math-231',
    code: 'MATH 231',
    nameZh: '单变量微积分 I',
    nameEn: 'Calculus of Functions of One Variable I',
    category: '商学院直通车硬性先修课 (微积分要求)',
    credits: '4.0 学分',
    professors: ['Prof. Linda Green', 'Prof. McLaughlin'],
    weeklyHours: '6–8 小时/周',
    weeklyHoursMin: 6,
    examFormat: '3 场期中 + 全校统考期末 (Common Final)',
    attendance: '通过每周习题课 (Recitation) 考核出勤',
    aiPolicy: 'red',
    aiPolicyLabel: '红灯（严格禁止任何 AI 工具）',
    difficulty: 3.9,
    tip: '商学院微积分先修（MATH 231 / MATH 252 / STOR 113）中选课人数最多的一门，全校统考难度较高，建议看 Prof. Green 的翻转课堂视频辅助。',
    gradingBreakdown: [
      { item: '期中考试（3 场）', weight: '45%' },
      { item: 'Common Final 全校统考', weight: '30%' },
      { item: '作业与 WebAssign', weight: '15%' },
      { item: 'Recitation 习题课', weight: '10%' },
    ],
    gradeFloor: '商学院微积分先修要求：成绩须达到 C 或以上。',
    detailedAdvice: [
      'Prof. Green 的翻转课堂视频强烈推荐，尤其适合第一次接触大学微积分的同学。',
      'Common Final 比平时作业难一档，务必用历年统考卷限时模拟。',
      'Recitation 出勤计入成绩，助教答疑比自己硬啃效率高。',
      '已有 AP Calc 学分可豁免，但若打算冲量化/金融方向，重修打底也很常见。',
    ],
    examCount: 4,
    tags: ['prereq'],
    season: 'anytime',
  },
  {
    id: 'busi-102',
    code: 'BUSI 102',
    nameZh: '财务会计导论',
    nameEn: 'Financial Accounting',
    category: '商学院核心先导课 (Accounting Foundation)',
    credits: '3.0 学分',
    professors: ['Prof. Courtney Knoll', 'Prof. Wayne Landsman'],
    weeklyHours: '5–7 小时/周',
    weeklyHoursMin: 5,
    examFormat: '3 场期中考试 + 综合期末考 + 财报分析作业',
    attendance: '课堂签到与随堂练习计入平时分',
    aiPolicy: 'red',
    aiPolicyLabel: '红灯（计算题与考试严禁使用 AI）',
    difficulty: 3.5,
    tip: '想走投行（IB）或会计金融方向的同学必经之路，概念环环相扣，前两周借贷记账法（Debit/Credit）一定要彻底弄懂。',
    gradingBreakdown: [
      { item: '期中考试（3 场）', weight: '45%' },
      { item: '综合期末考', weight: '25%' },
      { item: '财报分析作业', weight: '20%' },
      { item: '签到与随堂练习', weight: '10%' },
    ],
    gradeFloor: '作为会计金融方向基础课，建议目标 B 以上；先修衔接阶段以扎实理解为先。',
    detailedAdvice: [
      '前两周 Debit/Credit 没搞懂后面会雪崩，一定要当天消化。',
      '财报分析作业可去 McColl 大楼找学长看范例结构，但数字必须自己算。',
      '计算题考试严禁 AI，平时练习也建议手算培养手感。',
      '想冲 IB / 会计方向的同学，这门课成绩会被招聘方留意。',
    ],
    examCount: 4,
    tags: ['prereq'],
    season: 'anytime',
  },
]

export const mentors: Mentor[] = [
  {
    id: 'm1',
    nameZh: '陈思远',
    nameEn: 'Ryan Chen',
    year: "大三 '28",
    track: '金融方向',
    identityTag: '同为 FBA 直通车学长',
    avatarColor: '#4B9CD3',
    initials: 'RC',
    courseIds: ['busi-200', 'busi-100', 'econ-101'],
    courseHistory: {
      'busi-200': {
        professor: 'Prof. Shimul Melwani',
        term: '2025 秋季',
        grade: 'A',
      },
      'busi-100': {
        professor: 'Prof. Paul Friga',
        term: '2026 春季',
        grade: 'A-',
      },
      'econ-101': {
        professor: 'Prof. Rita Balaban',
        term: '2025 秋季',
        grade: 'B+',
      },
    },
    matchScore: 97,
    matchReasons: ['同为 FBA 直通车', '支持中英双语交流', '平均 5 分钟内回复'],
    specialties: ['#BUSI200高分秘籍', '#先修课保C攻略', '#期末路演彩排经验'],
    replySpeed: '平均 5 分钟内回复',
    karma: 128,
  },
  {
    id: 'm2',
    nameZh: '林雨桐',
    nameEn: 'Emily Lin',
    year: "大二 '29",
    track: '咨询方向',
    identityTag: '同为 FBA 直通车学姐',
    avatarColor: '#13294B',
    initials: 'EL',
    courseIds: ['busi-200', 'stor-155', 'busi-100'],
    courseHistory: {
      'busi-200': {
        professor: 'Prof. Shimul Melwani',
        term: '2025 秋季',
        grade: 'A',
      },
      'stor-155': {
        professor: 'Prof. Mario Giacomazzo',
        term: '2025 秋季',
        grade: 'A-',
      },
      'busi-100': {
        professor: 'Prof. Gary Shoesmith',
        term: '2026 春季',
        grade: 'A',
      },
    },
    matchScore: 94,
    matchReasons: ['同为 FBA 直通车', '擅长案例与 Lab 节奏管理', '回复友好耐心'],
    specialties: ['#R语言Lab避坑', '#PeerLab互动技巧', '#咨询方向选课规划'],
    replySpeed: '平均 8 分钟内回复',
    karma: 96,
  },
  {
    id: 'm3',
    nameZh: '王浩然',
    nameEn: 'Alex Wang',
    year: "大四 '27",
    track: '投行方向',
    identityTag: 'Kenan-Flagler UBP 学长',
    avatarColor: '#059669',
    initials: 'AW',
    courseIds: ['busi-102', 'econ-101', 'math-231'],
    courseHistory: {
      'busi-102': {
        professor: 'Prof. Courtney Knoll',
        term: '2024 春季',
        grade: 'A',
      },
      'econ-101': {
        professor: 'Prof. Staub',
        term: '2023 秋季',
        grade: 'A-',
      },
      'math-231': {
        professor: 'Prof. Linda Green',
        term: '2023 秋季',
        grade: 'B+',
      },
    },
    matchScore: 92,
    matchReasons: ['IB 方向实战经验', '会计与先修双重辅导', '支持中英双语交流'],
    specialties: ['#财务会计入门', '#AP豁免还是重修建议', '#先修课保C攻略'],
    replySpeed: '平均 10 分钟内回复',
    karma: 210,
  },
  {
    id: 'm4',
    nameZh: '赵欣怡',
    nameEn: 'Sophia Zhao',
    year: "大三 '28",
    track: '市场营销方向',
    identityTag: 'Kenan-Flagler UBP 学姐',
    avatarColor: '#d97706',
    initials: 'SZ',
    courseIds: ['busi-100', 'busi-200', 'stor-155'],
    courseHistory: {
      'busi-100': {
        professor: 'Prof. Paul Friga',
        term: '2025 春季',
        grade: 'A',
      },
      'busi-200': {
        professor: 'Prof. Shimul Melwani',
        term: '2024 秋季',
        grade: 'A-',
      },
      'stor-155': {
        professor: 'Prof. Jan Hannig',
        term: '2024 秋季',
        grade: 'B+',
      },
    },
    matchScore: 91,
    matchReasons: ['擅长轻松破冰沟通', 'FBA Section 选课经验丰富', '平均快速回复'],
    specialties: ['#FBA专属Section提醒', '#HumansOfChapelHill访谈', '#低压力微聊'],
    replySpeed: '平均 6 分钟内回复',
    karma: 142,
  },
  {
    id: 'm5',
    nameZh: '周子墨',
    nameEn: 'Jason Zhou',
    year: "大二 '29",
    track: '量化金融方向',
    identityTag: '同为 FBA 直通车学长',
    avatarColor: '#7c3aed',
    initials: 'JZ',
    courseIds: ['math-231', 'stor-155', 'econ-101'],
    courseHistory: {
      'math-231': {
        professor: 'Prof. Linda Green',
        term: '2025 秋季',
        grade: 'A',
      },
      'stor-155': {
        professor: 'Prof. Mario Giacomazzo',
        term: '2026 春季',
        grade: 'A',
      },
      'econ-101': {
        professor: 'Prof. Rita Balaban',
        term: '2025 秋季',
        grade: 'A-',
      },
    },
    matchScore: 95,
    matchReasons: ['量化先修三门全 A 档', '翻转课堂学习法达人', '支持中英双语交流'],
    specialties: ['#微积分统考攻略', '#R语言Lab避坑', '#AP豁免还是重修建议'],
    replySpeed: '平均 4 分钟内回复',
    karma: 175,
  },
  {
    id: 'm6',
    nameZh: '吴佳宁',
    nameEn: 'Grace Wu',
    year: "大三 '28",
    track: '会计方向',
    identityTag: 'Kenan-Flagler UBP 学姐',
    avatarColor: '#e11d48',
    initials: 'GW',
    courseIds: ['busi-102', 'busi-100', 'math-231'],
    courseHistory: {
      'busi-102': {
        professor: 'Prof. Wayne Landsman',
        term: '2025 春季',
        grade: 'A',
      },
      'busi-100': {
        professor: 'Prof. Gary Shoesmith',
        term: '2024 春季',
        grade: 'A-',
      },
      'math-231': {
        professor: 'Prof. McLaughlin',
        term: '2024 秋季',
        grade: 'B+',
      },
    },
    matchScore: 90,
    matchReasons: ['会计方向专业对口', '擅长拆解 Debit/Credit', '耐心细致'],
    specialties: ['#财务会计入门', '#借贷记账法打底', '#招聘向成绩建议'],
    replySpeed: '平均 7 分钟内回复',
    karma: 158,
  },
  {
    id: 'm7',
    nameZh: '郑宇轩',
    nameEn: 'Kevin Zheng',
    year: "大四 '27",
    track: '战略咨询方向',
    identityTag: 'Kenan-Flagler UBP 学长',
    avatarColor: '#0f766e',
    initials: 'KZ',
    courseIds: ['busi-200', 'econ-101', 'busi-102'],
    courseHistory: {
      'busi-200': {
        professor: 'Prof. Shimul Melwani',
        term: '2023 秋季',
        grade: 'A',
      },
      'econ-101': {
        professor: 'Prof. Rita Balaban',
        term: '2023 秋季',
        grade: 'B+',
      },
      'busi-102': {
        professor: 'Prof. Courtney Knoll',
        term: '2024 春季',
        grade: 'A-',
      },
    },
    matchScore: 93,
    matchReasons: ['系统思维强', '擅长期末路演辅导', '同校真实经历'],
    specialties: ['#Changemaking路演', '#先修课保C攻略', '#UBP学术辅导入口'],
    replySpeed: '平均 9 分钟内回复',
    karma: 201,
  },
  {
    id: 'm8',
    nameZh: '黄诗涵',
    nameEn: 'Hannah Huang',
    year: "大二 '29",
    track: '创业方向',
    identityTag: '同为 FBA 直通车学姐',
    avatarColor: '#2563eb',
    initials: 'HH',
    courseIds: ['busi-200', 'busi-100', 'math-231'],
    courseHistory: {
      'busi-200': {
        professor: 'Prof. Shimul Melwani',
        term: '2025 秋季',
        grade: 'A',
      },
      'busi-100': {
        professor: 'Prof. Paul Friga',
        term: '2026 春季',
        grade: 'A',
      },
      'math-231': {
        professor: 'Prof. Linda Green',
        term: '2025 秋季',
        grade: 'B',
      },
    },
    matchScore: 89,
    matchReasons: ['原型开发经验丰富', 'AI 合规使用讲解清晰', '氛围轻松'],
    specialties: ['#AI使用边界', '#原型头脑风暴', '#NoTech课堂生存指南'],
    replySpeed: '平均 5 分钟内回复',
    karma: 88,
  },
  {
    id: 'm9',
    nameZh: '刘峻熙',
    nameEn: 'Leo Liu',
    year: "大三 '28",
    track: '运营与供应链方向',
    identityTag: 'Kenan-Flagler UBP 学长',
    avatarColor: '#b45309',
    initials: 'LL',
    courseIds: ['stor-155', 'econ-101', 'busi-100'],
    courseHistory: {
      'stor-155': {
        professor: 'Prof. Jan Hannig',
        term: '2025 春季',
        grade: 'A-',
      },
      'econ-101': {
        professor: 'Prof. Staub',
        term: '2024 秋季',
        grade: 'B+',
      },
      'busi-100': {
        professor: 'Prof. Gary Shoesmith',
        term: '2025 春季',
        grade: 'A',
      },
    },
    matchScore: 88,
    matchReasons: ['统计与经济双辅导', '擅长制定周学习计划', '回复稳定'],
    specialties: ['#每周学习节奏', '#PollEverywhere技巧', '#PracticeExam刷题法'],
    replySpeed: '平均 12 分钟内回复',
    karma: 134,
  },
  {
    id: 'm10',
    nameZh: '孙梦瑶',
    nameEn: 'Mia Sun',
    year: "大二 '29",
    track: '金融分析方向',
    identityTag: '同为 FBA 直通车学姐',
    avatarColor: '#be185d',
    initials: 'MS',
    courseIds: ['math-231', 'busi-102', 'econ-101'],
    courseHistory: {
      'math-231': {
        professor: 'Prof. Linda Green',
        term: '2025 秋季',
        grade: 'A-',
      },
      'busi-102': {
        professor: 'Prof. Courtney Knoll',
        term: '2026 春季',
        grade: 'A',
      },
      'econ-101': {
        professor: 'Prof. Rita Balaban',
        term: '2025 秋季',
        grade: 'A-',
      },
    },
    matchScore: 96,
    matchReasons: ['同为 FBA 直通车', '先修课高分路径清晰', '支持中英双语交流'],
    specialties: ['#先修课保C攻略', '#AP豁免还是重修建议', '#CommonFinal备考'],
    replySpeed: '平均 5 分钟内回复',
    karma: 167,
  },
  {
    id: 'm11',
    nameZh: '马天成',
    nameEn: 'Tom Ma',
    year: "大四 '27",
    track: '房地产与金融方向',
    identityTag: 'Kenan-Flagler UBP 学长',
    avatarColor: '#334155',
    initials: 'TM',
    courseIds: ['busi-102', 'stor-155', 'busi-200'],
    courseHistory: {
      'busi-102': {
        professor: 'Prof. Wayne Landsman',
        term: '2024 秋季',
        grade: 'A-',
      },
      'stor-155': {
        professor: 'Prof. Mario Giacomazzo',
        term: '2023 春季',
        grade: 'B+',
      },
      'busi-200': {
        professor: 'Prof. Shimul Melwani',
        term: '2023 秋季',
        grade: 'A',
      },
    },
    matchScore: 87,
    matchReasons: ['高年级全局视野', '擅长简历向领导力故事', 'Mentor Karma 活跃'],
    specialties: ['#导师积分体系', '#领导力履历写法', '#McColl大楼资源'],
    replySpeed: '平均 15 分钟内回复',
    karma: 245,
  },
  {
    id: 'm12',
    nameZh: '何雨菲',
    nameEn: 'Fiona He',
    year: "大三 '28",
    track: '国际商务方向',
    identityTag: 'Kenan-Flagler UBP 学姐',
    avatarColor: '#0369a1',
    initials: 'FH',
    courseIds: ['busi-100', 'econ-101', 'stor-155'],
    courseHistory: {
      'busi-100': {
        professor: 'Prof. Paul Friga',
        term: '2025 春季',
        grade: 'A',
      },
      'econ-101': {
        professor: 'Prof. Rita Balaban',
        term: '2024 秋季',
        grade: 'A-',
      },
      'stor-155': {
        professor: 'Prof. Jan Hannig',
        term: '2025 春季',
        grade: 'A',
      },
    },
    matchScore: 91,
    matchReasons: ['双语交流自然', '擅长缓解新生焦虑', 'FBA 路径熟悉'],
    specialties: ['#冷开场破冰', '#PeopleProfitsPlanet框架', '#新生第一学期节奏'],
    replySpeed: '平均 6 分钟内回复',
    karma: 119,
  },
]

const REPLY_BANK: Record<string, string[]> = {
  'busi-200': [
    '学弟/学妹好！BUSI 200 每周课外大概 3–4 小时：Peer Lab 准备 + 反思写作是大头。课堂全程 No-Tech，建议提前打印阅读材料。期末 Changemaking 路演可以约队友去 Bell Hall 空教室彩排，效果很好。',
    'Prof. Melwani 更看重真诚参与和团队协作，没有传统闭卷考试。拿 A 的关键是认真做 Humans of Chapel Hill 访谈、Lab 不缺勤，个人反思千万别让 AI 代写——黄灯政策只允许头脑风暴和原型开发。',
    '这门课没有 AP 可抵。它是 FBA 大一秋季专属必修，重点是领导力与社会创新体验。如果担心表达，破冰时直接问「Lab 怎么准备」就很自然，学长都懂新生紧张。',
  ],
  'busi-100': [
    'BUSI 100 负担相对友好，每周大约 2–3 小时。核心是 People / Profits / Planet 框架 + 小组案例。直通车同学一定要选 FBA Designated Section，成绩需 C 或以上才能保住席位。',
    'Prof. Friga / Shoesmith 的评分偏应用：期中会考框架分析，案例讨论发言很加分。AI 可以帮你检索行业数据，但引用必须规范标注。想拿 A 就课前读完案例，课堂上主动接一两轮讨论。',
    '这门课一般不能用 AP 直接免修，而且 FBA 学生大一下是指定必修。与其纠结免修，不如把它当成认识商学院全景和同学网络的入口，McColl 大楼里很多 UBP 活动也会挂钩这门课的主题。',
  ],
  'econ-101': [
    'ECON 101 是著名 Weed-out，每周真实投入大概 5–7 小时。想稳 C 以上，考前务必刷透 Practice Exams；PollEverywhere 占平时分，千万别因为忘带手机丢分。',
    'Balaban / Staub 出题偏概念应用，期末是累计范围。作业和线上练习是红灯——严禁 AI。Bell Hall 自习室考前很卷，建议组 2–3 人小分队互讲图表题。',
    '如果你 AP 宏微观都是高分，可以申请豁免。若高中经济学基础一般、又想冲商学院量化方向，我更建议在 UNC 修一遍打底；豁免省时间，但先修「保席」心态上要更有把握。',
  ],
  'stor-155': [
    'STOR 155 关键是跟紧每周 R Lab：大课可以弹性，Lab 强制。每周大约 4–6 小时，作业节奏稳住了，期中期末就不会崩。AI 只建议用来查 R 报错，统计逻辑还得自己过。',
    'Giacomazzo / Hannig 的课重实验理解。评分里 Lab 占比不低，缺一次就很肉疼。拿 A-/A 的同学通常都是「当天 Lab 当天清」。UBP 也常有统计互助局，可以去 McColl 问问当期安排。',
    '商学院统计先修是三选一（STOR 155 / STOR 120 / DATA 110）。没有特别的编程焦虑的话，155 最经典也最好找学长带。AP Stats 高分有时可讨论学分，但多数同学仍会在 UNC 修一门量化先修巩固。',
  ],
  'math-231': [
    'MATH 231 每周 6–8 小时很常见。Common Final 全校统考难度高于平时作业，一定要限时刷历年卷。Prof. Green 的翻转课堂视频强烈安利，比自己硬啃教材高效。',
    '评分严在统考和 WebAssign 进度。Recitation 出勤计入成绩，助教答疑请珍惜。这门课是红灯——任何 AI 工具都不允许，被发现风险极大。想保 C，至少把错题本维持到期末。',
    '有 AP Calc 学分可以豁免。若你目标是金融量化或后续还要碰更多数学，重修 MATH 231 打底很常见；若时间紧、AP 分数扎实，豁免去把精力放在 ECON / STOR 上也合理。可以按你的方向再细聊。',
  ],
  'busi-102': [
    'BUSI 102 前两周 Debit/Credit 是生死线，没懂后面会雪崩。每周大约 5–7 小时，三场期中 + 期末 + 财报作业。想走 IB / 会计的同学，这门成绩招聘方会看。',
    'Knoll / Landsman 注重概念连贯和计算准确。课堂签到与随堂练习占平时分。计算题和考试绝对红灯，平时也建议手算培养手感。财报作业可以去 McColl 看结构范例，数字必须自己完成。',
    '这门通常不是用 AP 直接抵掉的那种先修；它是商学院会计金融路径的基础衔接。与其纠结免修，不如把借贷分录练到条件反射——后面中级会计会轻松很多。',
  ],
}

export function getIcebreakers(course: Course): string[] {
  return [
    `学长好！这门课（${course.code}）每周课外作业和小组讨论大概需要花多少小时？`,
    `这个教授的考试/评分风格严不严？拿 A 或保住先修 C 难吗？`,
    `我有 AP 学分可以抵掉这门先修，你是建议直接免修还是在 UNC 重修一遍？`,
  ]
}

export function getMentorReply(courseId: string, userText: string): string {
  const bank = REPLY_BANK[courseId] ?? REPLY_BANK['busi-200']
  const lower = userText.toLowerCase()
  if (
    lower.includes('小时') ||
    lower.includes('耗时') ||
    lower.includes('作业') ||
    lower.includes('week') ||
    lower.includes('hour')
  ) {
    return bank[0]
  }
  if (
    lower.includes('考试') ||
    lower.includes('评分') ||
    lower.includes('拿 a') ||
    lower.includes('保') ||
    lower.includes('难') ||
    lower.includes('grade')
  ) {
    return bank[1]
  }
  if (
    lower.includes('ap') ||
    lower.includes('免修') ||
    lower.includes('重修') ||
    lower.includes('豁免')
  ) {
    return bank[2]
  }
  return bank[Math.floor(Math.random() * bank.length)]
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id)
}

export function getMentorById(id: string): Mentor | undefined {
  return mentors.find((m) => m.id === id)
}

export function getMentorsForCourse(courseId: string): Mentor[] {
  return mentors
    .filter((m) => m.courseIds.includes(courseId))
    .sort((a, b) => b.matchScore - a.matchScore)
}

export function filterCourses(
  query: string,
  tag: FilterTag,
): Course[] {
  const q = query.trim().toLowerCase()
  return courses.filter((c) => {
    const matchTag =
      tag === 'all' ||
      (tag === 'low-load'
        ? c.weeklyHoursMin < 4
        : tag === 'ai-ok'
          ? c.aiPolicy === 'green' || c.aiPolicy === 'yellow'
          : c.tags.includes(tag))

    if (!matchTag) return false
    if (!q) return true

    const haystack = [
      c.code,
      c.nameZh,
      c.nameEn,
      ...c.professors,
      c.category,
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
}
