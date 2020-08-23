# Level 1

---

## Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения

- пользователя;
- менеджера проекта;
- дизайнера;
- верстальщика;
- клиентского программиста;
- серверного программиста.

Для пользователя сайт должен быть в первую очередь понятным и доступным.
Пользователь с легкостью может покинуть сайт, если он будет долго искать, то что
ему нужно. Для дизайнера важно, чтобы сайт был сверстан так, как он задумывал.
Однако он все равно готов к предложениям верстальщика. Верстальщик должен не
только четко сверстать сайт по макету, но и задуматься о гибкости сайта, о его
доступности и производительности. Клиетский программист работает с компонентами.
Для него важно, чтобы он мог спокойно исользовать любую компоненту и сразу
приступить к реализации ее логики.

## Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.

## Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

Для многостраничных сайтов следует использовать такие методологии и технологии,
как БЭМ, сборщик (Gulp, Webpack) и препроцессор (SASS, LESS). Если
разрабатывается React-приложение, то можно использовать CSS modules, заменяющий
БЭМ.

## Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Для того, чтобы сайт корректно отображался как на больших экранах, так и на
маленьких следует создавать адаптивную верстку, используя нужные для этого
технлогии, например Flexbox, CSS Grid, media queries. Лично мне требовалось
поддерживать экраны вплоть до 320px. Для этого я использовал подход
mobile-first, где сначала указываются стили для маленьких экранов, а потом за
счет медиа запросов стили переопределялись для экранов больше. Проверял
результат, меняя ширину экрана в инстументах разработчика.

## Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Emmet, препроцессоры, сборщики вместе с нужными плагинами для экономии времени и
eslint для проверки кода.

## Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Для начала я посмотрю, что именно не отображатеся корректно. Посмотрю на HTML и
CSS в инстументах разработчика. Возможно просто стили, который написал другой
разработчки, не поддерживаются в данном браузере. Проверить это можно на сайте
https://caniuse.com/

## Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Спрошу у дизайнера про поведения интерактивных элементов (может он просто забыл
указать). А так пока начну писать стили, браузер сам устанавливает свои стили
при наведении на интерактиные элементы. Может придется самому писать стили при
наведении.

## Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).

## Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или и то, и другое?

## Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

Ресурсы:

- Телеграм-каналы ("Frontend разработчик", "Твой Программист", "Senior
  Frontend", "CodeRoll", "For Web")
- Medium (ежедневные рассылки)
- Youtube (к счасью у меня в рекомендациях в основном видео по программированию)

Мне очнеь близко JS-программирование. А вообще в идеале и JS и верстка. Мне и
то, и другое интересно. Что касается других областей знаний, то мне интересны
иностанные языки.

## Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Мне 19 лет, учусь на факультете Информатика и вычислительная техника. Последнее
время пишу прилодения на React. Помимо создания своих собственных приложений,
есть также опыт в командной разработке проекта – платформа, объединяющая
студентов в команды. Постоянно получаю знания из мира фронтенда через
телеграм-каналы, посещения хакатонов и митапов. Pet-проекты:

- Приложение для поиска фильмов (React, Typescript) –
  https://github.com/MrMargaryan/moovy (репо),
  https://moovy-react-app.herokuapp.com/ (сайт)
- COVID-19 трекер (React, Chart.js, Countup) –
  https://github.com/MrMargaryan/covid (репо)

Проект в команде: Teamunite – платформа, объединяющая студентов в команды
(React, Redux, Typescript, Node.js, MongoDB). В этом проекте я отвечаю за
фронтенд.
