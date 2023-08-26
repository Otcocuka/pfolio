import Hero from "../components/Hero";
import Works from "../components/Works";
import ContactLinks from "../components/ContactLinks";
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
        description="Introducing the New Arrival of 2022!
        Experience modern and functional crypto-gaming with a minimalist design and user-friendly interface. Our cutting-edge product offers bonuses, round-the-clock support, cashback, and, most importantly, top-notch security. It's a product that aligns with the times, providing players with exactly what they need."
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
        description="An innovative fusion of online gaming and sports betting platform! The sleek and minimalist interface allows players to focus on the essence of the game, immersing themselves in the excitement of bets and gameplay."
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
        description="Introducing a groundbreaking product that seamlessly combines online gaming with a sports betting platform! With its sleek and minimalist interface, players can immerse themselves in the essence of the game, allowing for an immersive experience that heightens the thrill of both bets and gameplay."
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
        description="Online gaming has never been this enjoyable! Explore a multitude of captivating games, backed by round-the-clock support, fair and enjoyable gameplay, and fantastic bonuses – just a glimpse of what BingoBonga has to offer."
        img="./bingo.png"
        button_link="https://bingobonga.com/"
        styled="style1"
        styledImage1="./bingo-1.png"
        backgroundText="Bingobonga.com"
      />

      <Works
        workID="Jack Top Casino"
        tags={["maintenance", "innovation", "management", "design", "SEO"]}
        description="Welcome to JackTop Casino – the hottest addition of 2023! We've gone the extra mile to create a stylish and functional online gaming project, offering a vast selection of games, bonuses, and a user-friendly interface that enhances comfort and enjoyment during gameplay. Our unique character and design solutions promise an unparalleled gaming experience for your players. As a new player in the market, JackTop has already captured the attention of gamers and aims to become a top player in the industry."
        img="./jacktop.png"
        button_link="https://jacktop.com/"
        styled="style1"
        styledImage1="./jacktop-1.png"
        styledImage2="./jacktop-2.png"
        backgroundText="Jacktop.com"
      />
      <Works
        workID="Zota Bet Casino"
        tags={["maintenance", "innovation", "management", "design", "SEO"]}
        description="Especially tailored for our visitors from Australia! Introducing a product that seamlessly combines online gaming with a sports betting platform. With its stylish and user-friendly interface, players can fully immerse themselves in the game. Round-the-clock support, enticing bonuses, and a flood of emotions await at every turn!"
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
        description="We present an online store featuring an extensive range of interior doors and flooring options from over 100 manufacturers. Our unique offering stems from direct partnerships with 40+ warehouses, ensuring swift delivery from our partners' facilities. Serving both corporate entities and individuals, we provide delivery through our fleet and third-party courier services across the Russian Federation. Explore ongoing promotions as part of our commitment to exceptional value."
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
        description="Precisely streamlined deliveries, a high level of customer service, meticulous assortment curation, and competitive pricing – these and many other distinctive features characterize our approach to business, enabling us to secure leading positions in the doors and flooring market. We have the ability to individually tailor various solution options to address your specific needs."
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
        description="EccMarket - Engineering Consulting Center. A New Industrial Standard on Your Desk."
        img="./eccmarket.png"
        button_link="https://www.eccmarket.ru/"
        styled="default"
        styledImage1="./eccmarket-1.png"
        styledImage2="./eccmarket-2.png"
        backgroundText="Uber777.Moscow.ru"
      />
      <Works
        workID="Lunch-Time"
        tags={["project managing", "development", "content management"]}
        description="With a track record dating back to 1999, we specialize in the field of meal delivery and catering. We have perfected a model service for delivering hot meals to offices, as well as providing delicious and satisfying food for tour groups and catering events."
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
        description="My first significant project. It all started here"
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
        description="Reviving a vintage full-service advertising agency website founded in 1995. Paying homage to the times when table-based layout was the norm and not a shame."
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
        button_link="https://otcocuka.github.io/Template/"
        styled="default"
        styledImage1="./known-1.png"
        styledImage2="./known-2.png"
        backgroundText="Known.sg"
      />
      <ContactLinks />
    </>
  );
};

export default Home;
