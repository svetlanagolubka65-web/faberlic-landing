(() => {
  const questions = [
    {
      text: 'Что вас больше всего привлекает сейчас?',
      options: [
        ['A', 'Покупать продукцию для себя выгоднее'],
        ['B', 'Немного подрабатывать в свободное время'],
        ['C', 'Создать дополнительный источник дохода'],
        ['D', 'Развиваться, обучаться и со временем создать свою команду']
      ]
    },
    {
      text: 'Сколько времени вы готовы этому уделять?',
      options: [
        ['A', 'Практически нисколько — только покупки для себя'],
        ['B', 'Иногда, когда есть свободное время'],
        ['C', 'Несколько часов в неделю'],
        ['D', 'Готов(а) заниматься регулярно и развиваться']
      ]
    },
    {
      text: 'Что вам ближе?',
      options: [
        ['A', 'Пользоваться продуктами и выбирать для себя'],
        ['B', 'Делиться находками с друзьями и знакомыми'],
        ['C', 'Общаться с людьми, вести соцсети или работать онлайн'],
        ['D', 'Обучаться и со временем помогать другим']
      ]
    },
    {
      text: 'Как вы относитесь к продажам?',
      options: [
        ['A', 'Не хочу продавать — интересны покупки для себя'],
        ['B', 'Могу рекомендовать то, что мне действительно понравилось'],
        ['C', 'Готов(а) попробовать, если мне покажут, как начать'],
        ['D', 'Есть опыт или хочу серьёзно этому научиться']
      ]
    },
    {
      text: 'Какой результат вам наиболее интересен?',
      options: [
        ['A', 'Выгоднее покупать продукцию для себя и семьи'],
        ['B', 'Получить первые небольшие деньги от рекомендаций'],
        ['C', 'Создать стабильный дополнительный доход'],
        ['D', 'Развиваться, обучаться и постепенно создавать свою команду']
      ]
    }
  ];

  const results = {
    A: {
      icon: '🛍',
      title: 'Выгодный покупатель',
      text: 'Вам сейчас важнее пользоваться продукцией и покупать её для себя и семьи на более выгодных условиях, чем превращать Faberlic в работу. Начать можно именно с покупок и спокойно знакомиться с ассортиментом.',
      actions: [
        ['Посмотреть каталог', 'https://faberlic.com/?sponsornumber=703802273'],
        ['Спросить Светлану', 'https://t.me/GolubkaSveta']
      ]
    },
    B: {
      icon: '🌱',
      title: 'Лёгкий старт',
      text: 'Вам подходит спокойный старт без давления: пользоваться продукцией, делиться удачными находками и постепенно пробовать рекомендации. Не нужно сразу строить команду — можно начать с малого и посмотреть, насколько вам это подходит.',
      actions: [
        ['Узнать, с чего начать', 'https://t.me/GolubkaSveta'],
        ['Посмотреть каталог', 'https://faberlic.com/?sponsornumber=703802273']
      ]
    },
    C: {
      icon: '💼',
      title: 'Дополнительный доход',
      text: 'Вам интересно познакомиться с Faberlic как с дополнительным направлением. Имеет смысл спокойно изучить возможности, понять первые шаги и выбрать удобный темп без обещаний конкретного заработка.',
      actions: [
        ['Обсудить со Светланой', 'https://t.me/GolubkaSveta'],
        ['Новости Faberlic', 'https://t.me/Faberlinovosti']
      ]
    },
    D: {
      icon: '🚀',
      title: 'Развитие и команда',
      text: 'Вам ближе системный подход: обучение, работа с людьми, онлайн-инструменты и постепенное развитие своей команды. Следующий шаг — познакомиться с возможностями и обучением, а затем принимать решение о дальнейшем пути.',
      actions: [
        ['Поговорить со Светланой', 'https://t.me/GolubkaSveta'],
        ['Перейти к обучению', 'https://academy.faberlic.com/']
      ]
    }
  };

  const style = document.createElement('style');
  style.textContent = `
    #quiz { background: linear-gradient(135deg, #FDF0F4 0%, #FFF8F2 100%); }
    .quiz-wrap { max-width: 760px; margin: 0 auto; }
    .quiz-card { background: #fff; border-radius: 22px; padding: 34px; box-shadow: 0 16px 50px rgba(200,82,122,.13); border: 1px solid #f2d7e0; }
    .quiz-kicker { color: var(--rose); font-weight: 700; font-size: 14px; text-align: center; margin-bottom: 10px; }
    .quiz-title { font-size: clamp(26px, 4vw, 36px); line-height: 1.2; text-align: center; margin-bottom: 14px; }
    .quiz-intro { color: var(--gray); text-align: center; max-width: 620px; margin: 0 auto 22px; }
    .quiz-note { background: var(--rose-lt); border-radius: 14px; padding: 13px 16px; color: var(--dark); text-align: center; font-size: 14px; margin-bottom: 24px; }
    .quiz-progress-row { display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:10px; color:var(--gray); font-size:14px; }
    .quiz-progress { height:8px; background:#f3e5ea; border-radius:20px; overflow:hidden; margin-bottom:26px; }
    .quiz-progress > span { display:block; height:100%; width:0; background:var(--rose); transition:width .25s ease; }
    .quiz-question { font-size:23px; font-weight:800; margin-bottom:20px; }
    .quiz-options { display:grid; gap:12px; }
    .quiz-option { width:100%; text-align:left; border:2px solid #f1dce4; background:#fff; color:var(--dark); border-radius:14px; padding:15px 17px; font:inherit; cursor:pointer; transition:.2s; }
    .quiz-option:hover { border-color:var(--rose); transform:translateY(-1px); }
    .quiz-option.selected { border-color:var(--rose); background:var(--rose-lt); box-shadow:0 6px 18px rgba(200,82,122,.12); }
    .quiz-option strong { color:var(--rose); margin-right:8px; }
    .quiz-actions { display:flex; justify-content:space-between; gap:12px; margin-top:26px; flex-wrap:wrap; }
    .quiz-btn { border:0; border-radius:50px; padding:14px 24px; font:inherit; font-weight:700; cursor:pointer; text-decoration:none; display:inline-flex; justify-content:center; align-items:center; }
    .quiz-btn.primary { background:var(--rose); color:#fff; }
    .quiz-btn.secondary { background:#fff; color:var(--rose); border:2px solid var(--rose); }
    .quiz-btn:disabled { opacity:.38; cursor:not-allowed; }
    .quiz-error { min-height:22px; margin-top:12px; color:#9b4b62; font-size:14px; }
    .quiz-result-icon { font-size:58px; text-align:center; margin-bottom:10px; }
    .quiz-result-title { font-size:31px; text-align:center; margin-bottom:14px; }
    .quiz-result-text { color:var(--gray); font-size:16px; text-align:center; max-width:610px; margin:0 auto 24px; }
    .quiz-result-actions { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
    .quiz-disclaimer { color:var(--gray); font-size:13px; text-align:center; margin-top:20px; }
    @media (max-width:640px) { .quiz-card{padding:24px 18px}.quiz-question{font-size:20px}.quiz-actions .quiz-btn{flex:1}.quiz-result-actions .quiz-btn{width:100%} }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'quiz';
  section.innerHTML = `
    <div class="section-inner quiz-wrap">
      <div class="quiz-card" id="quizCard"></div>
    </div>
  `;

  const interactive = document.getElementById('interactive');
  if (!interactive) return;
  interactive.insertAdjacentElement('afterend', section);

  const card = document.getElementById('quizCard');
  let current = -1;
  const answers = Array(questions.length).fill(null);

  function scrollToQuiz() {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderStart() {
    current = -1;
    answers.fill(null);
    card.innerHTML = `
      <div class="quiz-kicker">Мини-квиз Faberlic</div>
      <h2 class="quiz-title">Какой формат Faberlic подходит именно вам?</h2>
      <p class="quiz-intro">Ответьте на 5 коротких вопросов. Это займёт около минуты, а в конце вы получите свой вариант старта.</p>
      <div class="quiz-note">Здесь нет правильных и неправильных ответов. Выберите то, что ближе именно вам.</div>
      <div class="quiz-actions" style="justify-content:center">
        <button class="quiz-btn primary" id="quizStart">Начать квиз</button>
      </div>
    `;
    document.getElementById('quizStart').addEventListener('click', () => { current = 0; renderQuestion(); });
  }

  function renderQuestion() {
    const q = questions[current];
    const progress = (current + 1) * 20;
    card.innerHTML = `
      <div class="quiz-progress-row"><span>Вопрос ${current + 1} из 5</span><span>${progress}%</span></div>
      <div class="quiz-progress"><span style="width:${progress}%"></span></div>
      <div class="quiz-question">${q.text}</div>
      <div class="quiz-options">
        ${q.options.map(([key, label]) => `<button class="quiz-option ${answers[current] === key ? 'selected' : ''}" data-key="${key}"><strong>${key}.</strong>${label}</button>`).join('')}
      </div>
      <div class="quiz-error" id="quizError"></div>
      <div class="quiz-actions">
        ${current > 0 ? '<button class="quiz-btn secondary" id="quizBack">Назад</button>' : '<span></span>'}
        <button class="quiz-btn primary" id="quizNext" ${answers[current] ? '' : 'disabled'}>${current === 4 ? 'Узнать мой результат' : 'Далее'}</button>
      </div>
    `;

    card.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        answers[current] = btn.dataset.key;
        card.querySelectorAll('.quiz-option').forEach(x => x.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById('quizNext').disabled = false;
        document.getElementById('quizError').textContent = '';
      });
    });

    const back = document.getElementById('quizBack');
    if (back) back.addEventListener('click', () => { current -= 1; renderQuestion(); });

    document.getElementById('quizNext').addEventListener('click', () => {
      if (!answers[current]) {
        document.getElementById('quizError').textContent = 'Сначала выберите вариант, который вам ближе.';
        return;
      }
      if (current < 4) {
        current += 1;
        renderQuestion();
      } else {
        renderResult();
      }
    });
  }

  function getResultKey() {
    const score = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(key => { if (key) score[key] += 1; });
    const max = Math.max(...Object.values(score));
    const leaders = Object.keys(score).filter(key => score[key] === max);
    if (leaders.length === 1) return leaders[0];
    return answers[4] || leaders[0];
  }

  function renderResult() {
    try {
      const key = getResultKey();
      const result = results[key];
      if (!result) throw new Error('result');
      card.innerHTML = `
        <div class="quiz-kicker">Готово</div>
        <div class="quiz-result-icon">${result.icon}</div>
        <h2 class="quiz-result-title">${result.title}</h2>
        <p class="quiz-result-text">${result.text}</p>
        <div class="quiz-result-actions">
          ${result.actions.map(([label, url], i) => `<a class="quiz-btn ${i === 0 ? 'primary' : 'secondary'}" href="${url}" target="_blank" rel="noopener">${label}</a>`).join('')}
        </div>
        <div class="quiz-disclaimer">Результат квиза — ориентир, а не обязательство. Вы всегда можете выбрать другой путь.</div>
        <div class="quiz-actions" style="justify-content:center"><button class="quiz-btn secondary" id="quizRestart">Пройти ещё раз</button></div>
      `;
      document.getElementById('quizRestart').addEventListener('click', () => { renderStart(); scrollToQuiz(); });
    } catch (e) {
      card.innerHTML = `
        <h2 class="quiz-result-title">Не удалось определить результат</h2>
        <p class="quiz-result-text">Попробуйте пройти квиз ещё раз.</p>
        <div class="quiz-actions" style="justify-content:center"><button class="quiz-btn primary" id="quizRestart">Начать заново</button></div>
      `;
      document.getElementById('quizRestart').addEventListener('click', renderStart);
    }
  }

  document.querySelectorAll('a.path-btn').forEach(link => {
    if (link.textContent.trim().includes('Пройти квиз')) {
      link.setAttribute('href', '#quiz');
      link.removeAttribute('target');
      link.addEventListener('click', (event) => {
        event.preventDefault();
        renderStart();
        scrollToQuiz();
      });
    }
  });

  renderStart();
})();