import React from 'react';

const HelpList = ({ data }) => {
    if (!data || !data.question || !data.answer) {
        console.log(data)
        return <div>Ошибка: Некорректные данные</div>;
        
      }
  return (
    <div className="text">
      <h2>Загрузка данных из Google Sheets</h2>
      <div className="question_wrapper">
        <div className="question">{data.question}</div>
        <div className="output">{data.answer}</div>
      </div>
    </div>
  );
};

export default HelpList;