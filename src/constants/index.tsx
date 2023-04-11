export type AreaItems = {
  name: string;
  image?: string;
  adress?: string;
  phone?: string;
  email?: string;
  description?: string;
  coordinates?: number[];
};

export type AreaProps = {
  title: string;
  items: AreaItems[];
};

export const areas: AreaProps[] = [
  {
    title: "Государственные природные заповедники:",
    items: [
      {
        name: "Государственный природный биосферный заповедник «Чёрные земли»",
        image: "/src/assets/AreasImages/black_earths.jpg",
        adress:
          "359240, Республика Калмыкия, Черноземельский район, пос.Комсомольский, ул.Некрасова, д.31",
        email: "zapovchz@mail.ru",
        phone:
          "8(937)-190-70-40 (приемная), 8(927)-593-46-46 (заказ экскурсий) ",
        description: `«Чёрные земли» — государственный природный биосферный заповедник, образованный 11 июня 1990 года. Заповедник «Чёрные Земли» — это единственный в России полигон для изучения степных, полупустынных и пустынных ландшафтов, а также охраны и изучения калмыцкой популяции сайгака. Заповедник включает две отличные друг от друга территории — на основном участке «Черные Земли» осуществляется охрана и восстановление популяции сайгака, а участок «Озеро Маныч-Гудило» является водно-болотным угодьем международного значения, здесь находятся гнездовья и зимовки многих редких видов водоплавающих и околоводных птиц. Последний был создан путём передачи в мае 1996 года заповеднику территории бывшего республиканского заказника «Маныч-Гудило».\n
        Основной участок заповедника расположен на Прикаспийской низменности, между низовьями рек Кума и Волга. Общая площадь заповедника — 121 900 га. Площади участков: «Чёрные земли» (степной) — 94 300 га, «Маныч-Гудило» (орнитологический) — 27 600 га. Охранная зона заповедника составляет 91 170 га. Заповедник получил официальный биосферный статус ЮНЕСКО 3 декабря 1993 года.`,
        coordinates: [45.908647512112796, 46.2026740677206],
      },
    ],
  },
  {
    title: "Государственные национальные парки:",
    items: [
      {
        name: "Природный парк Республики Калмыкия",
        image: "/src/assets/AreasImages/nature_park.jpg",
        description: `Природный парк Республики Калмыкия — особо охраняемая природная территория регионального значения. Природный парк образован постановлением Народного Хурала (Парламента) Республики Калмыкия от 24 ноября 1995 года № 195-I «О создании природного парка Республики Калмыкия». Он занимает небольшой участок Волго-Ахтубинской поймы. Его площадь составляет около 40 квадратных километров. Тянется вдоль берега Волги на восемь километров.\n
          Парк был создан с целью сохранения редких видов растений и животных, характерных для этого региона. Из флоры здесь встречаются ежевика, тростник, пырей, осот. Представители фауны - большой тушканчик, енотовидная собака, горностай, ласка, полевка и многие другие.\n
          Ежегодно в парке проходят конференции ученых. Заглянуть сюда могут и туристы. Специально для них разработана программа знакомства с природой Калмыкии. Для этого необходимо оставить заявку на официальном сайте или позвонить по указанному телефону. Работники парка проведут вам незабываемую экскурсию в мир дикой природы.`,
        phone: "+7 (84744) 9-28-80",
        email: "sdavaev@mail.ru",
        adress: "поселок Цаган-Аман, Юстинский район, республика Калмыкия",
        coordinates: [47.569167, 46.783056],
      },
      { name: "Природный парк «Бамб цецг»" },
    ],
  },
  {
    title: "Государственные природные заказники федерального значения:",
    items: [
      { name: "«Сарпинский»" },
      { name: "«Меклетинский»" },
      { name: "«Харбинский»" },
    ],
  },
  {
    title: "Государственные природные заказники республиканского значения:",
    items: [
      { name: "«Морской Бирючок»" },
      { name: "«Каспийский»" },
      { name: "«Зунда»" },
      { name: "«Состинский»" },
      { name: "«Ханата»" },
      { name: "«Лесной»" },
      { name: "«Чограйский»" },
      { name: "«Южный»" },
      { name: "«Тингута»" },
    ],
  },
  {
    title: "Памятники природы республиканского значения:",
    items: [
      { name: "Городовиковская дубовая роща" },
      { name: "Цоросовская лесная роща" },
      { name: "Дубовая роща" },
      { name: "Одинокий тополь с каскадом родников" },
      { name: "Санаторная роща" },
      { name: `Группа родников "Киитн булг"` },
      { name: "Остров тюльпанов" },
      { name: "Байрачный лес" },
    ],
  },
];
