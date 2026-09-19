import {
  Home,
  Users,
  Code2,
  ClipboardList,
  MessagesSquare,
  CreditCard,
  ShieldAlert,
  Star,
  BarChart3,
  Settings,
  ArrowRight,
  Briefcase,
  ShieldCheck,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

const dashboardItems = [
  {
    title: "الرئيسية",
    description: "نظرة عامة على المنصة وأهم الإحصاءات الرئيسية.",
    icon: Home,
    path: "/",
  },
  {
    title: "إدارة المستخدمين",
    description: "إدارة حسابات المستخدمين والمستقلين والعملاء.",
    icon: Users,
    path: "/users",
  },
  {
    title: "إدارة الخدمات",
    description: "مراجعة الخدمات التي يقدمها المستقلون وإدارتها.",
    icon: Code2,
    path: "/services",
  },
  {
    title: "إدارة المشاريع",
    description: "متابعة المشاريع المنشورة وحالات تنفيذها.",
    icon: ClipboardList,
    path: "/projects",
  },
  {
    title: "إدارة الطلبات والعقود",
    description: "متابعة المشاريع المتعاقد عليها وحالات تنفيذها.",
    icon: MessagesSquare,
    path: "/orders",
  },
  {
    title: "المدفوعات والمصروفات",
    description: "متابعة العمليات المالية والمدفوعات والمصروفات.",
    icon: CreditCard,
    path: "/payments",
  },
  {
    title: "البلاغات والنزاعات",
    description: "مراجعة الشكاوى والمشاكل واتخاذ الإجراءات المناسبة.",
    icon: ShieldAlert,
    path: "/reports",
  },
  {
    title: "التقييمات والتعليقات",
    description: "مراجعة التقييمات والتعليقات والتعامل مع المخالفات.",
    icon: Star,
    path: "/reviews",
  },
  {
    title: "الإحصائيات",
    description: "مراجعة أداء المنصة وأعداد المستخدمين والمشاريع.",
    icon: BarChart3,
    path: "/statistics",
  },
  {
    title: "الملف الشخصي والإعدادات",
    description: "إدارة بيانات الحساب وتعديل الإعدادات وتسجيل الخروج.",
    icon: Settings,
    path: "/settings",
  },
];

function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-[#F1F4F8] to-[#EAF0F5] px-[6%] py-[42px] text-[#203753]">

      {/* Decorative top leaves */}
      <div className="pointer-events-none absolute -right-5 -top-9 h-[170px] w-[170px] opacity-[0.18]">
        <div className="absolute right-[55px] top-[30px] h-[80px] w-[35px] rotate-45 rounded-[100%_0_100%_0] bg-[#475D75]" />

        <div className="absolute right-[25px] top-[85px] h-[65px] w-[28px] -rotate-[25deg] rounded-[100%_0_100%_0] bg-[#475D75]" />
      </div>

      {/* Decorative bottom leaves */}
      <div className="pointer-events-none absolute -bottom-9 -left-5 h-[170px] w-[170px] rotate-180 opacity-[0.18]">
        <div className="absolute bottom-[30px] left-[55px] h-[80px] w-[35px] rotate-45 rounded-[100%_0_100%_0] bg-[#475D75]" />

        <div className="absolute bottom-[85px] left-[25px] h-[65px] w-[28px] -rotate-[25deg] rounded-[100%_0_100%_0] bg-[#475D75]" />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto mb-[34px] flex max-w-[1120px] items-center justify-between max-[550px]:flex-col max-[550px]:gap-6">

        <div className="flex items-center gap-[17px]">

          <div className="relative h-[62px] w-[52px]">
            <div className="absolute left-[10px] top-[7px] h-[45px] w-[27px] rotate-[38deg] rounded-[100%_0_100%_0] bg-[#203753]" />

            <div className="absolute left-[4px] top-[39px] h-[3px] w-[32px] -rotate-45 bg-[#203753]" />
          </div>

          <div>
            <h1 className="font-['Playfair_Display'] text-[34px] font-semibold text-[#203753] max-[550px]:text-[28px]">
              Hub Freelance
            </h1>

            <p className="mt-[2px] text-[13px] tracking-[5px] text-[#203753] max-[550px]:text-[10px]">
              Admin Dashboard
            </p>
          </div>

        </div>

        <div className="flex rotate-[-4deg] flex-col text-center font-['Playfair_Display'] text-[17px] leading-[1.15] text-[#203753]">
          <span>Manage</span>
          <span>Connect</span>
          <span>Grow ♡</span>
        </div>

      </header>

      {/* Dashboard Cards */}
      <main className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-1 gap-[18px] min-[551px]:grid-cols-2 min-[901px]:grid-cols-4 min-[1101px]:grid-cols-5">

        {dashboardItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="group relative flex min-h-[278px] flex-col items-center rounded-[20px] border border-[#DCE3EA] bg-[#F9FAFC] px-4 pb-[17px] pt-[22px] text-center text-[#203753] shadow-[7px_7px_17px_rgba(32,55,83,0.12),-6px_-6px_16px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[10px_12px_25px_rgba(32,55,83,0.15),-8px_-8px_20px_rgba(255,255,255,0.98)]"
            >

              <div className="mb-[15px] flex h-[101px] w-[101px] items-center justify-center rounded-full border border-[#E0E6EC] bg-[#F7F9FB] text-[#203753] shadow-[inset_3px_3px_7px_rgba(32,55,83,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.9),4px_5px_12px_rgba(32,55,83,0.07)]">
                <Icon
                  size={45}
                  strokeWidth={1.8}
                />
              </div>

              <h2 className="mb-[9px] text-[17px] font-semibold leading-[1.5]">
                {item.title}
              </h2>

              <p className="max-w-[185px] text-[11px] leading-[1.9] opacity-75">
                {item.description}
              </p>

              <div className="absolute bottom-[13px] right-[13px] flex h-9 w-9 items-center justify-center rounded-full border border-[#D7DFE7] bg-[#E7ECF1] text-[#203753] shadow-[3px_3px_7px_rgba(32,55,83,0.13),-3px_-3px_7px_rgba(255,255,255,0.95)] transition-all duration-300 group-hover:translate-x-[3px] group-hover:bg-[#203753] group-hover:text-white">
                <ArrowRight size={19} />
              </div>

            </Link>
          );
        })}

      </main>

      {/* Statistics */}
      <section className="relative z-10 mx-auto mt-[19px] grid min-h-[65px] max-w-[1120px] grid-cols-1 items-center rounded-[12px] border border-[#DCE3EA] bg-[rgba(249,250,252,0.88)] shadow-[5px_5px_14px_rgba(32,55,83,0.09),-5px_-5px_14px_rgba(255,255,255,0.95)] backdrop-blur-[8px] min-[551px]:grid-cols-2 min-[901px]:grid-cols-4">

        <div className="flex min-h-[44px] items-center justify-center gap-3 border-r border-[#DDE4EA] text-[#203753] max-[550px]:border-r-0">
          <Users size={24} />

          <div className="flex flex-col">
            <strong className="text-[11px] font-bold">
              12,458
            </strong>

            <span className="text-[8px] text-[#475D75]">
              Active Freelancers
            </span>
          </div>
        </div>

        <div className="flex min-h-[44px] items-center justify-center gap-3 border-r border-[#DDE4EA] text-[#203753] max-[900px]:border-r-0">
          <Briefcase size={24} />

          <div className="flex flex-col">
            <strong className="text-[11px] font-bold">
              8,932
            </strong>

            <span className="text-[8px] text-[#475D75]">
              Active Projects
            </span>
          </div>
        </div>

        <div className="flex min-h-[44px] items-center justify-center gap-3 border-r border-[#DDE4EA] text-[#203753] max-[900px]:border-r-0">
          <ShieldCheck size={24} />

          <div className="flex flex-col">
            <strong className="text-[11px] font-bold">
              Secure Payments
            </strong>

            <span className="text-[8px] text-[#475D75]">
              Safe &amp; Trusted
            </span>
          </div>
        </div>

        <div className="flex min-h-[44px] items-center justify-center gap-3 text-[#203753]">
          <Globe size={24} />

          <div className="flex flex-col">
            <strong className="text-[11px] font-bold">
              Global Community
            </strong>

            <span className="text-[8px] text-[#475D75]">
              Work from Anywhere
            </span>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Dashboard;
