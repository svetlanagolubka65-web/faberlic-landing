(() => {
  const questions = [
    {
      text: "Что вам сейчас интереснее всего в Faberlic?",
      answers: [
        ["Покупать любимые товары выгоднее", "buyer"],
        ["Попробовать без обязательств и посмотреть", "start"],
        ["Получать дополнительный доход", "income"],
        ["Развиваться и со временем создать команду", "team"]
      ]
    },
    {
      text: "Какой формат вам ближе?",
      answers: [
        ["Покупать для себя и семьи", "buyer"],
        ["Начать спокойно, в своём темпе", "start"],
        ["Совмещать с основной работой или делами", "income"],
        ["Активно развиваться и работать с людьми", "team"]
      ]
    },
    {
      text: "Сколько времени вы готовы уделять Faberlic?",
      answers: [
        ["Только когда мне нужны покупки", "buyer"],
        ["Пока совсем немного", "start"],
        ["Несколько часов в неделю", "income"],
        ["Готова уделять время регулярно", "team"]
      ]
    },
    {
      text: "Какой результат был бы для вас самым приятным?",
      answers: [
        ["Экономить на покупках", "buyer"],
        ["Разобраться и понять, подходит ли мне это", "start"],
        ["Получать дополнительный доход", "income"],
        ["Создать своё направление и команду", "team"]
      ]
    },
    {
      text: "Что вам ближе прямо сейчас?",
      answers: [
        ["Выгода и хорошие покупки", "buyer"],
        ["Начать без давления и обязательств", "start"],
        ["Попробовать зарабатывать", "income"],
        ["Развиваться, обучаться и помогать другим", "team"]
      ]
    }
  ];

  const results = {
    buyer: {
      icon: "🛍️",
      title: "Выгодный покупатель",
      text: "Вам больше всего подходит знакомство с Faberlic через покупки для себя и семьи. Можно выбирать нужные товары, следить за новинками и пользоваться выгодными предложениями без необходимости строить команду.",
      button: "Посмотреть каталог",
      link: "https://faberlic.com/by/ru/catalogs?sponsornumber=703802273"
    },
    start: {
      icon: "🌱",
      title: "Лёгкий старт",
      text: "Вам подходит спокойное знакомство с Faberlic без спешки и давления. Сначала можно разобраться в возможностях, попробовать продукцию и только потом решить, хотите ли вы двигаться дальше.",
      button: "Написать Светлане",
      link: "https://t.me/GolubkaSveta"
    },
    income: {
      icon: "💼",
      title: "Дополнительный доход",
      text: "Вам может подойти Faberlic как вариант дополнительного дохода. Начать можно постепенно, совмещая с привычными делами. Я помогу разобраться с первыми шагами и возможностями.",
      button: "Обсудить со Светланой",
      link: "https://t.me/GolubkaSveta"
    },
    team: {
      icon: "🚀",
      title: "Развитие и команда",
      text: "Вам интересно не только пользоваться возможностями Faberlic, но и развиваться дальше. Вам может подойти обучение, работа с людьми и постепенное создание своей команды.",
      button: "Перейти к обучению",
      link: "https://academy.faberlic.com/"
    }
  };

  const style = document.createElement("style");
  style.textContent = `
    #quiz {
      max-width: 820px;
      margin: 60px auto;
      padding: 24px;
      font-family: inherit;
    }

    .faberlic-quiz {
      background: #fff;
      border-radius: 24px;
      padding: 34px;
      box-shadow: 0 12px 40px rgba(0,0,0,.08);
      border: 1px solid #f2d9df;
    }

    .quiz-progress {
      height: 8px;
      background: #f4e8eb;
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 28px;
    }

    .quiz-progress-bar {
      height: 100%;
      background: #c8527a;
      transition: width .3s ease;
    }

    .quiz-step {
      color: #777;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .quiz-title {
      font-size: 28px;
      line-height: 1.25;
      margin: 0 0 24px;
      color: #2c2c2c;
    }

    .quiz-answer {
      display: block;
      width: 100%;
      text-align: left;
      padding: 16px 18px;
      margin: 10px 0;
      border: 2px solid #f0dce2;
      background: #fff;
      border-radius: 14px;
      cursor: pointer;
      font: inherit;
      color: #2c2c2c;
      transition: .2s;
    }

    .quiz-answer:hover {
      border-color: #c8527a;
    }

    .quiz-answer.selected {
      border-color: #c8527a;
      background: #fff1f5;
    }

    .quiz-nav {
      display: flex;
      gap: 12px;
      justify-content: space-between;
      margin-top: 26px;
    }

    .quiz-btn {
      border: 0;
      border-radius: 30px;
      padding: 14px 25px;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }

    .quiz-back {
      background: #eee;
      color: #333;
    }

    .quiz-next {
      background: #c8527a;
      color: #fff;
      margin-left: auto;
    }

    .quiz-next:disabled {
      opacity: .45;
      cursor: not-allowed;
    }

    .quiz-result {
      text-align: center;
    }

    .quiz-result-icon {
      font-size: 48px;
      margin-bottom: 10px;
    }

    .quiz-result p {
      line-height: 1.7;
      color: #555;
      max-width: 650px;
      margin: 0 auto 24px;
    }

    .quiz-result-link {
      display: inline-block;
      background: #c8527a;
      color: #fff;
      text-decoration: none;
      padding: 15px 25px;
      border-radius: 30px;
      font-weight: 700;
      margin: 5px;
    }

    .quiz-restart {
      display: inline-block;
      background: transparent;
      color: #c8527a;
      border: 1px solid #c8527a;
      padding: 14px 24px;
      border-radius: 30px;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      margin: 5px;
    }

    @media (max-width: 600px) {
      #quiz {
        margin: 35px auto;
        padding: 14px;
      }

      .faberlic-quiz {
        padding: 24px 18px;
      }

      .quiz-title {
        font-size: 22px;
      }
    }
  `;
  document.head.appendChild(style);

  let quiz = document.getElementById("quiz");

  if (!quiz) {
    quiz = document.createElement("section");
    quiz.id = "quiz";

    const interactive = document.getElementById("interactive");
    if (interactive) {
      interactive.insertAdjacentElement("afterend", quiz);
    } else {
      document.body.appendChild(quiz);
    }
  }

  let current = 0;
  let answers = new Array(questions.length).fill(null);

  function renderQuestion() {
    const q = questions[current];
    const selected = answers[current];

    quiz.innerHTML = `
      <div class="faberlic-quiz">
        <div class="quiz-progress">
          <div class="quiz-progress-bar"
               style="width:${((current + 1) / questions.length) * 100}%"></div>
        </div>

        <div class="quiz-step">
          Вопрос ${current + 1} из ${questions.length}
        </div>

        <h2 class="quiz-title">${q.text}</h2>

        <div class="quiz-answers">
          ${q.answers.map((a, i) => `
            <button class="quiz-answer ${selected === i ? "selected" : ""}"
                    data-index="${i}">
              ${a[0]}
            </button>
          `).join("")}
        </div>

        <div class="quiz-nav">
          ${current > 0
            ? '<button class="quiz-btn quiz-back">← Назад</button>'
            : ''}

          <button class="quiz-btn quiz-next"
                  ${selected === null ? "disabled" : ""}>
            ${current === questions.length - 1
              ? "Узнать результат"
              : "Далее →"}
          </button>
        </div>
      </div>
    `;

    quiz.querySelectorAll(".quiz-answer").forEach(btn => {
      btn.addEventListener("click", () => {
        answers[current] = Number(btn.dataset.index);
        renderQuestion();
      });
    });

    const back = quiz.querySelector(".quiz-back");
    if (back) {
      back.addEventListener("click", () => {
        current--;
        renderQuestion();
      });
    }

    quiz.querySelector(".quiz-next").addEventListener("click", () => {
      if (answers[current] === null) return;

      if (current < questions.length - 1) {
        current++;
        renderQuestion();
      } else {
        showResult();
      }
    });
  }

  function calculateResult() {
    const score = {
      buyer: 0,
      start: 0,
      income: 0,
      team: 0
    };

    answers.forEach((answerIndex, questionIndex) => {
      const key = questions[questionIndex].answers[answerIndex][1];
      score[key]++;
    });

    const max = Math.max(...Object.values(score));
    const tied = Object.keys(score).filter(key => score[key] === max);

    if (tied.length === 1) return tied[0];

    // При ничьей решающим считается ответ на вопрос №5.
    const lastAnswer = answers[4];
    const lastKey = questions[4].answers[lastAnswer][1];

    if (tied.includes(lastKey)) return lastKey;

    return tied[0];
  }

  function showResult() {
    const key = calculateResult();
    const result = results[key];

    quiz.innerHTML = `
      <div class="faberlic-quiz quiz-result">
        <div class="quiz-result-icon">${result.icon}</div>

        <div class="quiz-step">Ваш персональный результат</div>

        <h2 class="quiz-title">${result.title}</h2>

        <p>${result.text}</p>

        <a class="quiz-result-link"
           href="${result.link}"
           target="_blank"
           rel="noopener">
          ${result.button}
        </a>

        <button class="quiz-restart">
          Пройти ещё раз
        </button>
      </div>
    `;

    quiz.querySelector(".quiz-restart").addEventListener("click", () => {
      current = 0;
      answers = new Array(questions.length).fill(null);
      renderQuestion();
      quiz.scrollIntoView({ behavior: "smooth" });
    });
  }

  function openQuiz(event) {
    event.preventDefault();

    current = 0;
    answers = new Array(questions.length).fill(null);

    renderQuestion();

    setTimeout(() => {
      quiz.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 50);
  }

  document.querySelectorAll('a[href="#quiz"]').forEach(link => {
    link.addEventListener("click", openQuiz);
  });

  renderQuestion();
})();
