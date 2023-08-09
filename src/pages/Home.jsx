import Header from "../components/Header";
import Hero from "../components/Hero";
import Works from "../components/Works";

const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <Hero h1="Hi there! I'm  Damir Farziev" />

      <Works
        workID="0x.bet"
        tags={["building", "motion", "direction"]}
        description="Новинка 2022 года! Современное и функциональное крипто-гейминг с минималистичным дизайном и удобным интерфейсом. Бонусы, круглосуточная поддержка, кешбек, а главное — безопасность! Продукт, который соответствует времени и дает игрокам ровно то, что им нужно."
        img="./0x.png"
        button_link="https://0x.bet/"
      />
      <Works
        workID="Betibet.com"
        tags={["building", "motion", "direction"]}
        description="Продукт, сочетающий в себе онлайн-гейминг и платформу для ставок на спорт! Строгий и минималистичный интерфейс позволяет сконцентрироваться на сути игры и позволяет игрокам погружаться в свои эмоции от ставок или игр."
        img="./betibet.png"
        button_link="https://betibet.com/"
      />

      <Works
        workID="Play.betibet.com"
        tags={["building", "motion", "direction"]}
        description="Продукт, сочетающий в себе онлайн-гейминг и платформу для ставок на спорт! Строгий и минималистичный интерфейс позволяет сконцентрироваться на сути игры и позволяет игрокам погружаться в свои эмоции от ставок или игр."
        img="./play-betibet.png"
        button_link="https://play.betibet.com/"
      />

      <Works
        workID="Bingobonga.com"
        tags={["building", "motion", "direction"]}
        description="Онлайн-гейминг еще никогда не был таким веселым! Множество увлекательных игр, круглосуточная поддержка, честная и веселая игра, классные бонусы — это лишь малая часть того, что есть в BingoBonga!"
        img="./bingo.png"
        button_link="https://bingobonga.com/"
      />

      <Works
        workID="Jacktop.com"
        tags={["building", "motion", "direction"]}
        description="Приветствуем вас в казино JackTop — самой горячей новинке 2023 года! Мы сделали все возможное, чтобы создать стильный и функциональный онлайн-гейминг проект с большим выбором игр, бонусов и удобным интерфейсом, который добавляет комфорта и удовольствия в игру. Наш уникальный персонаж и дизайн-решения позволят вашим игрокам наслаждаться неповторимым игровым опытом. Будучи новым казино на рынке, JackTop уже привлекло внимание игроков и обещает стать одним из лучших в индустрии."
        img="./jacktop.png"
        button_link="https://jacktop.com/"
      />
      <Works
        workID="Zotabet.com"
        tags={["building", "motion", "direction"]}
        description="Специально для наших посетителей из Австралии! Продукт, сочетающий в себе онлайн-гейминг и платформу для ставок, стильный и удобный интерфейс позволяет игрокам наслаждаться игрой в полную силу! Круглосуточная поддержка, выгодные бонусы и эмоции, эмоции, эмоции!"
        img="./zotabet.png"
        button_link="https://zotabet.com/"
      />
      <Works
        workID="Polmetra.ru"
        tags={["building", "motion", "direction"]}
        description="Интернет-магазин с большим ассортиментом межкомнатных дверей и напольных покрытий, более 100 производителей. Продаем продукцию напрямую с 40+ складов наших партнеров. Работаем с юр лицами, доставляем собственным транспортом и через ТК по РФ. Действуют постоянные акции"
        img="./polmetra.png"
        button_link="https://Polmetra.ru/"
      />

      <Works
        workID="Двери и точка"
        tags={["building", "motion", "direction"]}
        description="Чётко отлаженные поставки, высокий уровень клиентского сервиса, тщательный подбор ассортимента, конкурентные цены – эти и многие другие особенности подхода к делу позволяют нам занимать лидирующие позиции на рынке продажи дверей и напольных покрытий.

        Мы сможем индивидуально подобрать разные варианты решения вашего вопроса."
        img="./dveri-i-dot.png"
        button_link="https://dveri-i.ru/"
      />

      <Works
        workID="Dovita"
        tags={["building", "motion", "direction"]}
        description="Dovita Bridal is your one-stop solution to getting the perfect attire for the perfect day. Being an exclusive bridal boutique, we serve the Vaughan and Greater Toronto area, Ontario with our wide variety of inspiring wedding and evening dress collections."
        img="./dovita-i.png"
        button_link="https://dovitabridalcanada.com/"
      />

      <Works
        workID="Codersafe.ru"
        tags={["building", "motion", "direction"]}
        description="Компания, занимающаяся созданием и разработкой сайтов, их оптимизацией и последующим продвижением. Наш офис находится в Москве. Комплексная web разработка, изготовление и последующее развитие интернет проекта, оказываемая одним исполнителем, позволит вам снизить затраты, а нам даст возможность с максимальной эффективностью подготовить ресурс для долгой и успешной жизни в интернете.
        "
        img="./codersafe.png"
        button_link="https://codersafe.ru/"
      />

      <Works
        workID="Uber777.Moscow.ru"
        tags={["building", "motion", "direction"]}
        description="did it long time ago"
        img="./uber.png"
        button_link=""
      />
      <Works
        workID="Sanri.ru"
        tags={["building", "motion", "direction"]}
        description="did it long time ago"
        img="./sanri.png"
        button_link=""
      />
      <Works
        workID="Known.sg"
        tags={["building", "motion", "direction"]}
        description="did it long time ago"
        img="./known.png"
        button_link=""
      />

      <Works />
    </>
  );
};

export default Home;
