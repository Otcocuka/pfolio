// import Header from "../components/Header";
import Hero from "../components/Hero";
import Works from "../components/Works";
import ContactLinks from "../components/ContactLinks";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <Hero
        data="I craft digital experiences for humans"
        backgroundText="2023"
      />

      <Works
        workID="Dovita Bridal Canada"
        tags={["development"]}
        description="Dovita Bridal is an exclusive bridal boutique, serving in Canada with their wide variety of inspiring wedding and evening dress collections."
        img="./dovita-i.png"
        button_link="https://dovitabridalcanada.com/"
        styled="default"
        styledImage1="./Laura.jpg"
        styledImage2="./Romana.jpeg"
        backgroundText="Dovita Bridal Canada"
      />

      <Works
        workID="0x Bet Casino"
        tags={["maintenance", "innovation", "management", "design", "SEO"]}
        description="Новинка 2022 года! Современное и функциональное крипто-гейминг с минималистичным дизайном и удобным интерфейсом. Бонусы, круглосуточная поддержка, кешбек, а главное — безопасность! Продукт, который соответствует времени и дает игрокам ровно то, что им нужно."
        img="./0x.png"
        button_link="https://0x.bet/"
        styled="default"
        styledImage1="./0x3.png"
        styledImage2="./0x1-1.png"
        backgroundText="0x.bet"
      />
      <Works
        workID="Beti Bet Bookmaker"
        tags={["maintenance", "innovation", "management", "design", "SEO"]}
        description="Продукт, сочетающий в себе онлайн-гейминг и платформу для ставок на спорт! Строгий и минималистичный интерфейс позволяет сконцентрироваться на сути игры и позволяет игрокам погружаться в свои эмоции от ставок или игр."
        img="./betibet.png"
        button_link="https://betibet.com/"
        styled="reversed_default"
        styledImage1="./betibet2.png"
        styledImage2="./betibet1.png"
        backgroundText="Betibet.com"
      />

      <Works
        workID="Beti Bet Casino"
        tags={["maintenance", "innovation", "management", "design", "SEO"]}
        description="Продукт, сочетающий в себе онлайн-гейминг и платформу для ставок на спорт! Строгий и минималистичный интерфейс позволяет сконцентрироваться на сути игры и позволяет игрокам погружаться в свои эмоции от ставок или игр."
        img="./play-betibet.png"
        button_link="https://play.betibet.com/"
        styled="reversed_default"
        styledImage1="./play-betibet-2.png"
        styledImage2="./play-betibet-1.png"
        backgroundText="Play.betibet.com"
      />

      <Works
        workID="Bingo Bonga Casino"
        tags={["maintenance", "innovation", "management", "design", "SEO"]}
        description="Онлайн-гейминг еще никогда не был таким веселым! Множество увлекательных игр, круглосуточная поддержка, честная и веселая игра, классные бонусы — это лишь малая часть того, что есть в BingoBonga!"
        img="./bingo.png"
        button_link="https://bingobonga.com/"
        styled="style1"
        styledImage1="./bingo-1.png"
        backgroundText="Bingobonga.com"
      />

      <Works
        workID="Jack Top Casino"
        tags={["maintenance", "innovation", "management", "design", "SEO"]}
        description="Приветствуем вас в казино JackTop — самой горячей новинке 2023 года! Мы сделали все возможное, чтобы создать стильный и функциональный онлайн-гейминг проект с большим выбором игр, бонусов и удобным интерфейсом, который добавляет комфорта и удовольствия в игру. Наш уникальный персонаж и дизайн-решения позволят вашим игрокам наслаждаться неповторимым игровым опытом. Будучи новым казино на рынке, JackTop уже привлекло внимание игроков и обещает стать одним из лучших в индустрии."
        img="./jacktop.png"
        button_link="https://jacktop.com/"
        styled="default"
        styledImage1="./jacktop-1.png"
        styledImage2="./jacktop-2.png"
        backgroundText="Jacktop.com"
      />
      <Works
        workID="Zota Bet Casino"
        tags={["maintenance", "innovation", "management", "design", "SEO"]}
        description="Специально для наших посетителей из Австралии! Продукт, сочетающий в себе онлайн-гейминг и платформу для ставок, стильный и удобный интерфейс позволяет игрокам наслаждаться игрой в полную силу! Круглосуточная поддержка, выгодные бонусы и эмоции, эмоции, эмоции!"
        img="./zotabet.png"
        button_link="https://zotabet.com/"
        styled="default"
        styledImage1="./zotabet-1.png"
        styledImage2="./zotabet-2.png"
        backgroundText="Zotabet.com"
      />
      <Works
        workID="Polmetra"
        tags={["development", "management", "design"]}
        description="Интернет-магазин с большим ассортиментом межкомнатных дверей и напольных покрытий, более 100 производителей. Продаем продукцию напрямую с 40+ складов наших партнеров. Работаем с юр лицами, доставляем собственным транспортом и через ТК по РФ. Действуют постоянные акции"
        img="./polmetra.png"
        button_link="https://Polmetra.ru/"
        styled="reversed_default"
        styledImage2="./polmetra-2.png"
        styledImage1="./polmetra-1.png"
        backgroundText="Polmetra.ru"
      />

      <Works
        workID="Двери и Точка"
        tags={["development", "management", "design"]}
        description="Чётко отлаженные поставки, высокий уровень клиентского сервиса, тщательный подбор ассортимента, конкурентные цены – эти и многие другие особенности подхода к делу позволяют нам занимать лидирующие позиции на рынке продажи дверей и напольных покрытий.

        Мы сможем индивидуально подобрать разные варианты решения вашего вопроса."
        img="./dveri-i-dot.png"
        button_link="https://dveri-i.ru/"
        styled="default"
        // styled='no-style'
        styledImage1="./dveri-i-dot-1.png"
        styledImage2="./dveri-i-dot-2.png"
        backgroundText="Двери и точка"
      />

      {/* <Works
        workID="Codersafe"
        tags={["development"]}
        description="Компания, занимающаяся созданием и разработкой сайтов, их оптимизацией и последующим продвижением. Наш офис находится в Москве. Комплексная web разработка, изготовление и последующее развитие интернет проекта, оказываемая одним исполнителем, позволит вам снизить затраты, а нам даст возможность с максимальной эффективностью подготовить ресурс для долгой и успешной жизни в интернете.
        "
        img="./codersafe.png"
        button_link="https://codersafe.ru/"
        styled="default"
        backgroundText="Codersafe.ru"
      /> */}

      <Works
        workID="Eccmarket"
        tags={["project managing", "development", "content management"]}
        description="did it long time ago"
        img="./eccmarket.png"
        button_link=""
        styled="default"
        styledImage1="./eccmarket-1.png"
        styledImage2="./eccmarket-2.png"
        backgroundText="Uber777.Moscow.ru"
      />
      <Works
        workID="Lunch-Time"
        tags={["project managing", "development", "content management"]}
        description="did it long time ago"
        img="./lunchtime.png"
        button_link=""
        styled="reversed_default"
        styledImage1="./lunchtime-1.png"
        styledImage2="./lunchtime-2.png"
        backgroundText="Uber777.Moscow.ru"
      />
      <Works
        workID="Uber777 Moscow"
        tags={["development", "design"]}
        description="did it long time ago"
        img="./uber.png"
        button_link=""
        styled="reversed_default"
        styledImage2="./uber-1.png"
        styledImage1="./uber-2.png"
        backgroundText="Uber777.Moscow.ru"
      />
      <Works
        workID="Sanri"
        tags={["development"]}
        description="Рекламное агентство полного цикла, основанное в 1995 году"
        img="./sanri.png"
        button_link=""
        styled="style1"
        styledImage1="./sanri-1.png"
        styledImage2="./betibet1.png"
        backgroundText="Sanri.ru"
      />
      <Works
        workID="Known"
        tags={["development"]}
        description="did it long time ago"
        img="./known.png"
        button_link=""
        styled="default"
        styledImage1="./known-1.png"
        styledImage2="./known-2.png"
        backgroundText="Known.sg"
      />
      <ContactLinks />
      <Footer />
    </>
  );
};

export default Home;
