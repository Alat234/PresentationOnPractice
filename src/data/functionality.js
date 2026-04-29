const functionality = {
  summary: [
    {
      title: 'Робота з користувачем',
      value: 'Authentication + access control',
      description:
        'Користувач може зареєструватися, увійти в систему та працювати лише зі своїми даними.',
    },
    {
      title: 'Робота з маршрутами',
      value: 'Upload → parse → visualize',
      description:
        'Система приймає файли маршрутів, перевіряє формат, зчитує координати та готує їх до відображення.',
    },
    {
      title: 'Аналіз',
      value: 'Comparison + statistics',
      description:
        'Маршрути можна порівнювати між собою, а також переглядати їхню статистику і допоміжну інформацію.',
    },
  ],
  groups: [
    {
      title: 'User features',
      items: [
        'registration and login',
        'user-specific access to uploaded tracks',
        'separation of data between different users',
      ],
    },
    {
      title: 'Track processing',
      items: [
        'upload of GPX/KML files',
        'validation of file format before processing',
        'parsing coordinates and preparing route data',
        'saving file metadata and parsed data to database',
      ],
    },
    {
      title: 'Visualization and analysis',
      items: [
        'displaying tracks on an interactive map',
        'start and finish markers for routes',
        'route comparison by similarity',
        'route statistics: points, bounds, approximate distance',
      ],
    },
    {
      title: 'Dashboard usability',
      items: [
        'search and sorting in the track list',
        'recent uploads block',
        'compact dashboard layout for daily work with tracks',
      ],
    },
  ],
}

export default functionality
