import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedTextWord from "../components/AnimatedTextWord";
function HelpYourself() {
  const backgroundText = "Mistakes are a path to wisdom";

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const [data, setData] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/627e1b13-42f6-43e9-80dd-fec1b699b8f0"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getRandomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleNextQuestion = () => {
    let minIndex = 0;
    let maxIndex = 0;

    if (selectedCategory === "html") {
      minIndex = 0;
      maxIndex = 10;
    } else if (selectedCategory === "css") {
      minIndex = 11;
      maxIndex = 38;
    } else if (selectedCategory === "js") {
      minIndex = 39;
      maxIndex = 106;
    } else {
      return; // Если категория не выбрана, ничего не делаем
    }

    setCurrentIndex(getRandomIndex(minIndex, maxIndex));
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
    setIsSubmitClicked(false);
    // Сбросить текущий индекс при изменении категории
  };

  const handleFormSubmit = () => {
    // Проверка, отмечены ли чекбоксы
    if (selectedCategory === "") {
      setIsSubmitClicked(true);
    } else {
      handleNextQuestion(); // Переход к следующему вопросу при успешной проверке
    }
  };

  return (
    <>
      <Hero
        data={"Get a random common frontend interview question"}
        backgroundText="Try Me"
      />
      <div className="helpYourself">
        {/* свяжите чекбоксы с обработчиком */}
        <motion.div
          style={{ x: y3 }}
          id="text"
          className="helpYourself_background_text_container"
        >
          <AnimatedTextWord
            class="helpYourself_background_text"
            text={backgroundText}
          />
        </motion.div>

        <div className="choose_category" ref={ref}>
          {isSubmitClicked && selectedCategory === "" && (
            <div className="hidden_block">Please select category.</div>
          )}

          <div>
            <input
              className="checkbox"
              id="html"
              type="checkbox"
              checked={selectedCategory === "html"}
              onChange={() => handleCheckboxChange("html")}
            />

            <label className="label" htmlFor="html">
              HTML
            </label>
          </div>
          <div>
            <input
              className="checkbox"
              id="css"
              type="checkbox"
              checked={selectedCategory === "css"}
              onChange={() => handleCheckboxChange("css")}
            />
            <label className="label" htmlFor="css">
              CSS
            </label>
          </div>
          <div>
            <input
              className="checkbox"
              id="js"
              type="checkbox"
              checked={selectedCategory === "js"}
              onChange={() => handleCheckboxChange("js")}
            />
            <label className="label" htmlFor="js">
              JS
            </label>
          </div>
          <button
            className="choose_category_button button-primary"
            onClick={handleFormSubmit}
          >
            Get random question
          </button>
        </div>
        {data && (
          <div
            className="question_wrapper"
            data={currentIndex}
            key={currentIndex}
          >
            <div className="question">{data[currentIndex]?.question}</div>
            <div className="output">{data[currentIndex]?.answer}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default HelpYourself;
