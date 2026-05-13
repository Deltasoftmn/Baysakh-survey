import type { Language } from "@/i18n/language-provider";

export type NavItem = { label: string; href: string };

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

export type ProjectItem = {
  image: string;
  images: string[];
  title: string;
  timeframe: string;
  summary: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type CapabilityItem = {
  icon: string;
  title: string;
  description: string;
};

export type EquipmentItem = {
  icon: string;
  title: string;
  description: string;
};

export type TeamItem = {
  name: string;
  role: string;
  note: string;
};

export type SiteCopy = {
  brand: {
    name: string;
    legal: string;
    tagline: string;
  };
  nav: NavItem[];
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string;
    missionTitle: string;
    missionBody: string;
    visionTitle: string;
    visionBody: string;
    stats: StatItem[];
  };
  services: {
    kicker: string;
    title: string;
    body: string;
    items: ServiceItem[];
  };
  projects: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
    items: ProjectItem[];
  };
  capabilities: {
    kicker: string;
    title: string;
    body: string;
    items: CapabilityItem[];
  };
  equipment: {
    kicker: string;
    title: string;
    body: string;
    items: EquipmentItem[];
  };
  team: {
    kicker: string;
    title: string;
    body: string;
    items: TeamItem[];
    cta: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    formTitle: string;
    formFields: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    infoTitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    mapTitle: string;
    ctaTitle: string;
    ctaBody: string;
  };
  footer: {
    quickLinks: string;
    servicesLinks: string;
    contact: string;
    copyright: string;
  };
};

const mn: SiteCopy = {
  brand: {
    name: "БАЯСАХ СУРВЭЙ",
    legal: "“БАЯСАХ СУРВЭЙ” ХХК",
    tagline: "Геодезийн хэмжилт • Зураглал • Инженерийн шийдэл"
  },
  nav: [
    { label: "Нүүр", href: "#home" },
    { label: "Бидний тухай", href: "#about" },
    { label: "Үйлчилгээ", href: "#services" },
    { label: "Төслүүд", href: "#projects" },
    { label: "Тоног төхөөрөмж", href: "#equipment" },
    { label: "Баг хамт олон", href: "#team" },
    { label: "Холбоо барих", href: "#contact" }
  ],
  hero: {
    headline: "Геодезийн хэмжилт, зураглалын мэргэжлийн шийдэл",
    subheadline:
      "“Bayasakh Survey” ХХК нь 2009 оноос хойш барилга, авто ба төмөр зам, уул уурхай, инженерийн шугам сүлжээ, дроны зураглалын төслүүдэд өндөр нарийвчлалтай геодезийн иж бүрэн үйлчилгээ үзүүлж байна.",
    primaryCta: "Төслүүд үзэх",
    secondaryCta: "Холбоо барих"
  },
  about: {
    kicker: "Компани",
    title: "2009 оноос хойш — нарийвчлал, стандарт, хариуцлага",
    body:
      "“Баясах Сурвэй” ХХК нь геодезийн бүх төрлийн хэмжилт боловсруулалт, судалгааг орчин үеийн техник технологи болон инженерийн оновчтой шийдэлтэй хослуулан өндөр түвшинд хийж гүйцэтгэх зорилгоор 2009 онд анх үүсгэн байгуулагдсан бөгөөд одоогийн байдлаар 50 инженер, техникийн ажилчдын бүрэлдэхүүнтэйгээр амжилттай үйл ажиллагаа эрхэлж байна.",
    missionTitle: "Эрхэм зорилго",
    missionBody:
      "Өдөр тутам чанарыг эрхэмлэн хамтын хүчээр монгол улсын дэд бүтцийн хөгжилд хувь нэмэр оруулах.",
    visionTitle: "Алсын хараа",
    visionBody:
      "Олон улсад геодезийн хэмжилт, зураглалын ажлыг ISO стандартаар түвшинд хийж гүйцэтгэх, Үндэсний үйлдвэрлэлийг групп компани болон өргөжих.",
    stats: [
      { value: "2009", label: "онд байгуулагдсан" },
      { value: "Томоохон", label: "дэд бүтэц, уул уурхайн төслүүд" },
      { value: "Иж бүрэн", label: "геодезийн үйлчилгээ" }
    ]
  },
  services: {
    kicker: "Үйлчилгээ",
    title: "Геодезийн иж бүрэн үйлчилгээ",
    body:
      "Барилга угсралтын нарийвчлалтай гүйцэтгэл, дэд бүтцийн төслийн найдвартай дата, орон зайн мэдээллийн шийдлээр төслөө эрсдэлгүй удирдахад тусална.",
    items: [
      {
        icon: "building-2",
        title: "Барилгын геодезийн иж бүрэн хэмжилт, хяналт шалгалт, мониторинг",
        description:
          "Төлөвлөлтөөс ашиглалтад оруулах хүртэл гүйцэтгэлийн хэмжилт, деформацын мониторинг, хяналт-шалгалтыг нарийвчлалтай гүйцэтгэнэ."
      },
      {
        icon: "train-front",
        title: "Авто ба төмөр замын геодезийн иж бүрэн хэмжилт",
        description:
          "Трасс тогтоолт, тэнхлэг шилжүүлэлт, хэвтээ/босоо төлөвлөлт, гүйцэтгэлийн зураглал болон хэмжилтийн хяналтын цогц үйлчилгээ."
      },
      {
        icon: "network",
        title: "Инженерийн шугам сүлжээний геодезийн ажил",
        description:
          "Дулаан, ус, бохир, холбоо, цахилгаан зэрэг инженерийн шугам сүлжээний байрлал, өндөржилт, гүйцэтгэлийн зураглал."
      },
      {
        icon: "map",
        title: "Төрөл бүрийн масштабын зураглал, боловсруулалт",
        description:
          "Топографийн зураглал, тоон загвар, орон зайн мэдээллийн боловсруулалт, GIS өгөгдөл бэлтгэл."
      },
      {
        icon: "land-plot",
        title: "Кадастрын зураглал",
        description:
          "Газрын кадастр, хил зааг тогтоолт, акталгааны хэмжилт, баримт бичгийн боловсруулалт."
      },
      {
        icon: "drone",
        title: "Дроны нислэг, зураглал, фото боловсруулалт, бичлэг",
        description:
          "Өндөр нягтаршилтай ортофото, 3D модел, эзлэхүүний тооцоо, талбайн хяналт, тайлангийн дүрс бичлэг."
      }
    ]
  },
  projects: {
    kicker: "Төслүүд",
    title: "Томоохон төслийн туршлага — бодит лавлагаа",
    body:
      "Эрчим хүч, уул уурхай, төмөр зам, ус дамжуулах, үйлдвэрлэлийн байгууламжийн төслүүдэд хэмжилтийн чанар, хугацаа, аюулгүй ажиллагааны шаардлагыг нэг түвшинд баримталж ажилладаг.",
    cta: "Дэлгэрэнгүй",
    items: [
      {
        image: "/projects/buuruljuut.jpg",
        images: [
          "/projects/buuruljuut.jpg",
          "/projects/buuruljuut (1).jpg",
          "/projects/buuruljuut (2).jpg",
          "/projects/buuruljuut (3).jpg",
          "/projects/buuruljuut (4).jpg",
          "/projects/buuruljuut (5).jpg",
          "/projects/buuruljuut (6).jpg",
          "/projects/buuruljuut (7).jpg",
          "/projects/buuruljuut (8).jpg",
          "/projects/buuruljuut (9).jpg",
          "/projects/buuruljuut (10).jpg",
        ],
        title: "Бөөрөлжүүтийн цахилгаан станцын төсөл",
        timeframe: "2018–2020",
        summary:
          "Талбайн геодезийн суурь тогтолцоо, гүйцэтгэлийн хэмжилт, мониторинг, зураглалын үйлчилгээ."
      },
      {
        image: "/projects/groundwater.jpg",
        images: [
          "/projects/groundwater.jpg",
          "/projects/groundwater (1).jpg",
          "/projects/groundwater (2).jpg",
          "/projects/groundwater (3).jpg",
          "/projects/groundwater (4).jpg",
        ],
        title: "Газар доорх усны эх үүсвэрийн худгууд болон дамжуулах хоолойн барилга угсралтын төсөл",
        timeframe: "2019–2021",
        summary:
          "Шугам хоолойн трасс, тэнхлэг, өндөржилтийн хяналт, гүйцэтгэлийн зураглал, өгөгдөл боловсруулалт."
      },
      {
        image: "/projects/ot-ug.jpg",
        images: [
          "/projects/ot-ug.jpg",
          "/projects/ot-ug (1).jpg",
          "/projects/ot-ug (2).jpg",
          "/projects/ot-ug (3).jpg",
          "/projects/ot-ug (4).jpg",
          "/projects/ot-ug (5).jpg",
          "/projects/ot-ug (6).jpg",
          "/projects/ot-ug (7).jpg",
          "/projects/ot-ug (8).jpg",
          "/projects/ot-ug (9).jpg",
          "/projects/ot-ug (10).jpg",
          "/projects/ot-ug (11).jpg",
          "/projects/ot-ug (12).jpg",
          "/projects/ot-ug (13).jpg",
          "/projects/ot-ug (14).jpg",
          "/projects/ot-ug (15).jpg",
          "/projects/ot-ug (16).jpg",
          "/projects/ot-ug (17).jpg",
          "/projects/ot-ug (18).jpg",
          "/projects/ot-ug (19).jpg",
          "/projects/ot-ug (20).jpg",
        ],
        title: "Оюутолгой-Гүний уурхайн бүтээн байгуулалт",
        timeframe: "2017–2022",
        summary:
          "Уурхайн дэд бүтцийн геодезийн хэмжилт, үйлдвэрлэлийн байгууламжийн байрлал, гүйцэтгэлийн хяналт."
      },
      {
        image: "/projects/scada.jpg",
        images: [
          "/projects/scada.jpg",
          "/projects/scada (1).jpg",
          "/projects/scada (2).jpg",
          "/projects/scada (3).jpg",
          "/projects/scada (4).jpg",
          "/projects/scada (5).jpg",
          "/projects/scada (6).jpg",
          "/projects/scada (7).jpg",
        ],
        title:
          "Ус дамжуулах систем, ДЦС-3, ДЦС-4 ТӨХК дээрх өөрчлөлтийн ажлууд, СКАДА системийн барилга угсралтын ажил",
        timeframe: "2020–2022",
        summary:
          "Инженерийн шугам сүлжээ, байгууламжийн гүйцэтгэлийн зураглал, хяналт-шалгалтын багц ажил."
      },
      {
        image: "/projects/tt-loading.jfif",
        images: [
          "/projects/tt-loading.jfif",
          "/projects/tt-loading (1).jfif",
          "/projects/tt-loading (2).jfif",
          "/projects/tt-loading (3).jfif",
          "/projects/tt-loading (4).jfif",
          "/projects/tt-loading (5).jfif",
          "/projects/tt-loading (6).jfif",
          "/projects/tt-loading (7).jfif",
          "/projects/tt-loading (8).jfif",
          "/projects/tt-loading (9).jfif",
          "/projects/tt-loading (10).jfif",
          "/projects/tt-loading (11).jfif",
          "/projects/tt-loading (12).jfif",
          "/projects/tt-loading (13).jfif",
          "/projects/tt-loading (14).jfif",
          "/projects/tt-loading (15).jfif",
          "/projects/tt-loading (16).jfif",
          "/projects/tt-loading (17).jfif",
          "/projects/tt-loading (18).jfif",
          "/projects/tt-loading (19).jfif",
          "/projects/tt-loading (20).jfif",
        ],
        title: "Тавантолгойн нүүрс ачих логистикийн төв - ТНАЛТ төсөл",
        timeframe: "2019–2020",
        summary:
          "Үйлдвэрлэлийн талбай, агуулах, тээвэрлэлтийн байгууламжийн тэнхлэг шилжүүлэлт, гүйцэтгэл."
      },
      {
        image: "/projects/railway.jpg1",
        images: [
          // "/projects/railway.jpg",
          // "/projects/railway (1).jpg",
          // "/projects/railway (2).jpg",
          // "/projects/railway (3).jpg",
          // "/projects/railway (4).jpg",
          // "/projects/railway (5).jpg",
          // "/projects/railway (6).jpg",
          // "/projects/railway (7).jpg",
          // "/projects/railway (8).jpg",
          // "/projects/railway (9).jpg",
          // "/projects/railway (10).jpg",
          // "/projects/railway (11).jpg",
          // "/projects/railway (12).jpg",
          // "/projects/railway (13).jpg",
          // "/projects/railway (14).jpg",
          // "/projects/railway (15).jpg",
          // "/projects/railway (16).jpg",
          // "/projects/railway (17).jpg",
          // "/projects/railway (18).jpg",
        ],
        title: "Тавантолгой-Гашуунсухайт чиглэлийн төмөр замын цогцолбор төсөл",
        timeframe: "2020–2023",
        summary:
          "Төмөр замын трасс, газар шорооны ажил, байгууламжийн гүйцэтгэлийн хэмжилт ба зураглал."
      },
      {
        image: "/projects/rail-connection.jpg",
        images: [
          "/projects/rail-connection.jpg",
          "/projects/rail-connection (1).jpg",
          "/projects/rail-connection (2).jpg",
          "/projects/rail-connection (3).jpg",
          "/projects/rail-connection (4).jpg",
        ],
        title: "Тавантолгой-Зүүнбаян Тавантолгой-Гашуунсухайт чиглэлийн төмөр замуудыг холбох төмөр замын төсөл",
        timeframe: "2021–2023",
        summary:
          "Трассын хэмжилт, суурь сүлжээ, гүйцэтгэлийн шалгалт, тайлангийн өгөгдлийн боловсруулалт."
      },
      {
        image: "/projects/conveyor.svg",
        images: [
          "/projects/conveyor.svg",
          "/projects/ot-ug.jpg",
          "/baysakh.1.jpg"
        ],
        title: "Industrial conveyor / crusher engineering projects",
        timeframe: "2016–2022",
        summary:
          "Үйлдвэрийн шугам тоноглол, суурийн байрлал, угсралтын нарийвчлалын хяналт, мониторинг."
      }
    ]
  },
  capabilities: {
    kicker: "Чадамж",
    title: "Стандарт, аюулгүй ажиллагаа, нарийвчлал",
    body:
      "Төслийн геодезийн ажлыг зөвхөн хэмжилтээр хязгаарлахгүй — өгөгдлийн чанар, стандарт нийцэл, тайлагнал, эрсдэлийн удирдлагын түвшинд гүйцэтгэдэг.",
    items: [
      {
        icon: "crosshair",
        title: "Өндөр нарийвчлал",
        description:
          "Суурь сүлжээ, тэнхлэг, өндөржилтийн хяналтыг төслийн шаардлагад тохируулан тогтвортой баталгаажуулна."
      },
      {
        icon: "shield-check",
        title: "Стандарт ба журам",
        description:
          "Хэмжилт, боловсруулалт, тайлагналын дотоод журам, шалгах хуудас, чанарын хяналтын горим."
      },
      {
        icon: "cpu",
        title: "Орчин үеийн технологи",
        description:
          "GNSS, тотал станц, тоон нивелир, UAV зураглал, тоон загварлалт, өгөгдлийн интеграц."
      },
      {
        icon: "hard-hat",
        title: "Дэд бүтцийн туршлага",
        description:
          "Эрчим хүч, төмөр зам, авто зам, уул уурхай, ус дамжуулах систем зэрэг том төслүүдийн орчинд ажилласан туршлага."
      }
    ]
  },
  equipment: {
    kicker: "Тоног төхөөрөмж",
    title: "Дэвшилтэт хэмжилтийн парк",
    body:
      "Төслийн төрөл, нөхцөлд тохируулан өндөр нарийвчлалтай хэмжилт хийх боломжтой багаж, программ хангамж, боловсруулалтын урсгалтай.",
    items: [
      {
        icon: "ruler",
        title: "Total Station",
        description:
          "Тэнхлэг, байрлал, өндөржилтийн хэмжилт, гүйцэтгэлийн хяналт болон угсралтын нарийвчлал."
      },
      {
        icon: "waves",
        title: "Digital Level",
        description:
          "Өндөржилтийн өндөр нарийвчлалтай сүлжээ, суурийн мониторинг, деформацын хяналт."
      },
      {
        icon: "satellite",
        title: "GPS / GNSS",
        description:
          "RTK/PPK горим, суурь сүлжээ, трасс, талбайн хяналт, өгөгдлийн интеграц."
      },
      {
        icon: "drone",
        title: "Drone equipment",
        description:
          "Ортофото, 3D модел, эзлэхүүн/талбайн тооцоо, талбайн богино хугацааны зураглал."
      }
    ]
  },
  team: {
    kicker: "Баг хамт олон",
    title: "Инженерүүд ба техникчдийн мэргэшсэн баг",
    body:
      "Манай баг төслийн горим, аюулгүй ажиллагаа, хэмжилтийн стандарт, өгөгдлийн чанарын шаардлагыг мөрдөж ажилладаг туршлагатай инженерүүд, техникчдээс бүрдэнэ. Хүний нөөцийн мэдээллийг төслийн хэрэгцээнд нийцүүлэн тусгай хуудсаар дэлгэрүүлэн танилцуулах боломжтой.",
    cta: "Бидэнтэй хамтран ажиллах",
    items: [
      {
        name: "Төслийн удирдлага",
        role: "Геодезийн ахлах инженер",
        note: "Төслийн төлөвлөлт, чанарын хяналт, тайлагнал, стандартын хэрэгжилт."
      },
      {
        name: "Талбайн баг",
        role: "Геодезийн инженер / техникч",
        note: "Тэнхлэг шилжүүлэлт, гүйцэтгэлийн хэмжилт, мониторинг, талбайн зохион байгуулалт."
      },
      {
        name: "Өгөгдөл боловсруулалт",
        role: "GIS / дата боловсруулалтын инженер",
        note: "Топо боловсруулалт, тоон загвар, тайлан, зураг төслийн өгөгдлийн интеграц."
      }
    ]
  },
  contact: {
    kicker: "Холбоо барих",
    title: "Төслөө баталгаатай датагаар удирдъя",
    body:
      "Төслийн мэдээллээ товч илгээнэ үү. Бид шаардлага, хамрах хүрээ, хугацааны нөхцөлийг тодруулж, хамтын ажиллагааны санал хүргэнэ.",
    formTitle: "Хүсэлт илгээх",
    formFields: {
      name: "Нэр",
      email: "Имэйл",
      phone: "Утас",
      message: "Төслийн товч мэдээлэл",
      submit: "Илгээх"
    },
    infoTitle: "Холбоо барих мэдээлэл",
    addressLabel: "Хаяг",
    phoneLabel: "Утас",
    emailLabel: "Имэйл",
    mapTitle: "Газрын зураг",
    ctaTitle: "Хамтын ажиллагаа",
    ctaBody:
      "Дэд бүтэц, уул уурхай, барилгын төслүүдэд геодезийн иж бүрэн үйлчилгээ — найдвартай гүйцэтгэл, өндөр нарийвчлал, тайлагнал."
  },
  footer: {
    quickLinks: "Цэс",
    servicesLinks: "Үйлчилгээ",
    contact: "Холбоо барих",
    copyright: "© {year} Bayasakh Survey LLC. Бүх эрх хуулиар хамгаалагдсан."
  }
};

const en: SiteCopy = {
  brand: {
    name: "Bayasakh Survey",
    legal: "Bayasakh Survey LLC",
    tagline: "Geodesy • Mapping • Engineering Solutions"
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Equipment", href: "#equipment" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    headline: "Professional geodetic surveying and mapping solutions",
    subheadline:
      "Since 2009, Bayasakh Survey delivers high-precision surveying for construction, railways, mining, engineering networks, and drone mapping — backed by modern equipment, standards compliance, and reliable reporting.",
    primaryCta: "View projects",
    secondaryCta: "Contact us"
  },
  about: {
    kicker: "Company",
    title: "Since 2009 — precision, standards, accountability",
    body:
      "We support projects across design, construction, and operations with surveying, as-built control, monitoring, mapping, and data processing. Our workflows combine modern instruments, trained teams, and quality checks suitable for large-scale infrastructure and mining environments.",
    missionTitle: "Mission",
    missionBody:
      "Provide high-precision geodetic services that improve project quality, safety, and performance for infrastructure, mining, and construction.",
    visionTitle: "Vision",
    visionBody:
      "Advance Mongolia’s surveying delivery to international levels through modern technology and data-driven engineering solutions.",
    stats: [
      { value: "2009", label: "Established" },
      { value: "Major", label: "infrastructure & mining references" },
      { value: "End-to-end", label: "geodetic services" }
    ]
  },
  services: {
    kicker: "Services",
    title: "End-to-end surveying services",
    body:
      "We deliver reliable spatial data and control for accurate execution, risk reduction, and decision-making across complex engineering projects.",
    items: [
      {
        icon: "building-2",
        title:
          "Construction surveying, control, inspection, and monitoring",
        description:
          "From layout to commissioning: as-built control, deformation monitoring, and quality checks aligned to project requirements."
      },
      {
        icon: "train-front",
        title: "Road & railway surveying",
        description:
          "Route alignment, setting-out, horizontal/vertical control, as-built mapping, and measurement verification."
      },
      {
        icon: "network",
        title: "Engineering networks surveying",
        description:
          "Utilities positioning and as-built mapping for water, wastewater, heating, telecom, and electrical networks."
      },
      {
        icon: "map",
        title: "Mapping at multiple scales",
        description:
          "Topographic surveys, digital terrain models, GIS-ready datasets, and professional deliverables."
      },
      {
        icon: "land-plot",
        title: "Cadastral surveying",
        description:
          "Boundary definition, cadastral measurements, documentation preparation, and compliance-ready outputs."
      },
      {
        icon: "drone",
        title: "Drone flights, photogrammetry, processing, and video",
        description:
          "High-resolution orthophotos, 3D models, volume calculations, site monitoring, and reporting visuals."
      }
    ]
  },
  projects: {
    kicker: "Projects",
    title: "Industrial references with measurable impact",
    body:
      "We maintain consistent standards for data quality, scheduling, and safety across energy, mining, rail, water transmission, and industrial facilities.",
    cta: "Details",
    items: [
      {
        image: "/projects/buuruljuut.jpg",
        images: [
          "/projects/buuruljuut.jpg",
          "/projects/buuruljuut.svg",
          "/baysakh.1.jpg"
        ],
        title: "Buuruljuut Power Plant Project",
        timeframe: "2018–2020",
        summary:
          "Control networks, as-built surveys, monitoring, and mapping deliverables for power infrastructure."
      },
      {
        image: "/projects/groundwater.jpg",
        images: [
          "/projects/groundwater.jpg",
          "/projects/groundwater.svg",
          "/baysakh.1.jpg"
        ],
        title: "Groundwater Source Well and Pipeline Construction Project",
        timeframe: "2019–2021",
        summary:
          "Pipeline alignment control, elevation verification, as-built mapping, and processing workflows."
      },
      {
        image: "/projects/ot-ug.jpg",
        images: [
          "/projects/ot-ug.jpg",
          "/projects/ot-ug.svg",
          "/baysakh.1.jpg"
        ],
        title: "Oyu Tolgoi Underground Mining Development",
        timeframe: "2017–2022",
        summary:
          "Surveying support for mining infrastructure and industrial facility control and verification."
      },
      {
        image: "/projects/scada.jpg",
        images: [
          "/projects/scada.jpg",
          "/projects/scada.svg",
          "/baysakh.1.jpg"
        ],
        title:
          "Water Transmission System / Thermal Power Plant / SCADA Construction Project",
        timeframe: "2020–2022",
        summary:
          "Utility networks and facility as-built deliverables with inspection and reporting."
      },
      {
        image: "/projects/tt-loading.jfif",
        images: [
          "/projects/tt-loading.jfif",
          "/projects/tt-loading.svg",
          "/baysakh.1.jpg"
        ],
        title: "Tavan Tolgoi Coal Loading Logistics Center Project",
        timeframe: "2019–2020",
        summary:
          "Setting-out and as-built control for logistics and industrial site facilities."
      },
      {
        image: "/projects/railway.jpg",
        images: [
          "/projects/railway.jpg",
          "/projects/railway.svg",
          "/projects/rail-connection.jpg",
          "/baysakh.1.jpg"
        ],
        title: "Tavantolgoi–Gashuunsukhait Railway Complex Project",
        timeframe: "2020–2023",
        summary:
          "Rail alignment control, earthworks surveying, structures verification, and mapping."
      },
      {
        image: "/projects/rail-connection.jpg",
        images: [
          "/projects/rail-connection.jpg",
          "/projects/rail-connection.svg",
          "/projects/railway.jpg",
          "/baysakh.1.jpg"
        ],
        title: "Railway connection project",
        timeframe: "2021–2023",
        summary:
          "Control networks, as-built checks, and processed deliverables for rail connectivity."
      },
      {
        image: "/projects/conveyor.svg",
        images: [
          "/projects/conveyor.svg",
          "/projects/ot-ug.jpg",
          "/baysakh.1.jpg"
        ],
        title: "Industrial conveyor / crusher engineering projects",
        timeframe: "2016–2022",
        summary:
          "Precision control and monitoring for industrial equipment foundations and installations."
      }
    ]
  },
  capabilities: {
    kicker: "Capability",
    title: "Precision, compliance, and execution discipline",
    body:
      "We treat surveying as an engineering data system: controlled workflows, documented checks, and deliverables suitable for high-stakes infrastructure environments.",
    items: [
      {
        icon: "crosshair",
        title: "High precision control",
        description:
          "Stable control networks and verified setting-out aligned to project tolerances and scope."
      },
      {
        icon: "shield-check",
        title: "Standards & procedures",
        description:
          "Measurement, processing, and reporting procedures with internal QA checkpoints."
      },
      {
        icon: "cpu",
        title: "Modern technology stack",
        description:
          "GNSS, total stations, digital leveling, UAV mapping, and integrated processing pipelines."
      },
      {
        icon: "hard-hat",
        title: "Infrastructure experience",
        description:
          "Energy, rail, roads, mining, and water transmission systems with site-ready operations."
      }
    ]
  },
  equipment: {
    kicker: "Equipment",
    title: "Advanced surveying instruments",
    body:
      "We select the right instrument and workflow for each project environment to deliver reliable accuracy and consistent outputs.",
    items: [
      {
        icon: "ruler",
        title: "Total Station",
        description:
          "Setting-out, as-built control, installation verification, and high-precision measurement."
      },
      {
        icon: "waves",
        title: "Digital Level",
        description:
          "High-precision leveling networks, monitoring, and deformation control."
      },
      {
        icon: "satellite",
        title: "GPS / GNSS",
        description:
          "RTK/PPK operations for control networks, corridors, and integrated datasets."
      },
      {
        icon: "drone",
        title: "Drone equipment",
        description:
          "Orthomosaics, 3D models, volumes, rapid site mapping, and reporting visuals."
      }
    ]
  },
  team: {
    kicker: "Team",
    title: "Experienced engineers and technicians",
    body:
      "Our team operates with strict safety and QA discipline. A dedicated team page can be added later to present full profiles, certifications, and roles by project need.",
    cta: "Request cooperation",
    items: [
      {
        name: "Project leadership",
        role: "Lead Survey Engineer",
        note: "Planning, QA/QC, reporting, and standards compliance."
      },
      {
        name: "Field operations",
        role: "Survey Engineer / Technician",
        note: "Setting-out, as-built surveys, monitoring, and site coordination."
      },
      {
        name: "Data processing",
        role: "GIS / Data Engineer",
        note: "Topographic processing, models, reporting, and data integration."
      }
    ]
  },
  contact: {
    kicker: "Contact",
    title: "Manage your project with trusted data",
    body:
      "Send a brief request. We’ll clarify scope and timing and share a proposal for cooperation.",
    formTitle: "Send a request",
    formFields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Project details",
      submit: "Submit"
    },
    infoTitle: "Contact information",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    mapTitle: "Map",
    ctaTitle: "Cooperation",
    ctaBody:
      "Surveying for infrastructure, mining, and construction — reliable execution, precision control, and professional reporting."
  },
  footer: {
    quickLinks: "Links",
    servicesLinks: "Services",
    contact: "Contact",
    copyright: "© {year} Bayasakh Survey LLC. All rights reserved."
  }
};

export function getCopy(lang: Language): SiteCopy {
  return lang === "en" ? en : mn;
}

