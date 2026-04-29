const appliedKnowledge = {
  summary: [
    {
      title: 'Архітектура',
      value: 'Layered structure',
      description:
        'Контролери, сервіси, репозиторії, DTO та окремий exception handling були виділені в самостійні шари.',
    },
    {
      title: 'Web development',
      value: 'Spring + UI',
      description:
        'Підходи web development були використані для побудови backend-логіки, маршрутизації та інтерфейсу користувача.',
    },
    {
      title: 'Data processing',
      value: 'Files + database',
      description:
        'Робота з файлами, парсинг маршруту, збереження даних у БД і керування користувацькими сутностями були об’єднані в єдину систему.',
    },
  ],
  mapping: [
    {
      topic: 'OOP, clean code, design principles',
      implementation: [
        'структура проєкту була розділена на controller, service, repository, dto, entity та exception layer',
        'основні модулі мають чіткі зони відповідальності',
      ],
    },
    {
      topic: 'XML / JSON processing',
      implementation: [
        'реалізовано обробку маршрутів із GPX/KML файлів',
        'координати маршруту готуються до візуалізації на карті та до подальшого аналізу',
      ],
    },
    {
      topic: 'Database and persistence',
      implementation: [
        'файли, маршрути, користувачі та службові дані зберігаються в базі даних',
        'реалізовано окрему роботу з repository layer та user-owned data',
      ],
    },
    {
      topic: 'Spring MVC and Spring Boot',
      implementation: [
        'побудовано web application із контролерами, сервісами, шаблонами та конфігурацією',
        'підготовлено dashboard-підхід до відображення функціоналу системи',
      ],
    },
    {
      topic: 'Spring Security',
      implementation: [
        'реалізовано реєстрацію, вхід і контроль доступу до користувацьких даних',
        'кожен користувач працює тільки зі своїми маршрутами',
      ],
    },
    {
      topic: 'Testing and quality assurance',
      implementation: [
        'у проєкті додано автоматичні тести для DTO, validation та exception handler',
        'це дозволило перевірити коректність ключових частин системи',
      ],
    },
  ],
}

export default appliedKnowledge
