# Тестовое задание для компании PROФинанс

## Запуск и управление проектом

Для успешного запуска и управления проектом используйте следующие команды:

### Установка зависимостей

Перед началом работы убедитесь, что все необходимые зависимости установлены. Выполните команду:

```shell
npm install
```

### Запуск проекта в режиме разработки

Для запуска проекта в режиме разработки и одновременного запуска mock-сервера выполните команду:

```shell
npm run dev
```

### Сборка проекта

Для создания оптимизированной сборки проекта используйте команду:

```shell
npm run build
```

### Форматирование кода

Для автоматического форматирования кода используйте команду:

```shell
npm run prettier
```

## Функциональность

В проекте реализованы следующие функции:

-   **Загрузка данных из CSV**: При нажатии на кнопку «Загрузить данные из CSV» данные загружаются из файла `data.json` (расположенного в корне проекта) с использованием `json-server`, и таблица автоматически заполняется. Это позволяет динамически обновлять содержимое таблицы на основе данных из файла.

-   **Экспорт данных**: При нажатии на кнопку «Экспорт» данные могут быть сохранены на диске в формате JSON или CSV (при этом сохранение не работает при отсутствии данных). 

-   **Редактирование ячеек**: Двойной щелчок по ячейке таблицы позволяет редактировать её содержимое. Введённые данные проверяются на валидность, в ячейки с цифрами не разрешается вводить текстовые значения. Изменения в ячейке изменяют данные на сервере с помощью запроса PATCH.

-   **Пересчёт итогов**: Итоги (сумма и количество) автоматически пересчитываются при изменении данных в таблице, что обеспечивает актуальность отображаемой информации.

## Дополнительные функции (плюсом):

-   **Фильтрация данных**: Реализован фильтр, который позволяет пользователям формировать и применить фильтры к данным в таблице.

-   **Сортировка**: Сортировка данных по нажатию на стрелочку рядом с заголовком столбца позволяет упорядочить данные по возрастанию или убыванию.

## Используемые технологии

В этом проекте использованы современные веб-технологии и инструменты для создания эффективного и масштабируемого приложения:

-   **React**: Основная библиотека для построения пользовательских интерфейсов.

-   **CSS**: Для стилизации компонентов использовался обычный CSS, было добавлено немного адаптивной вёрстки.

-   **TypeScript**: Для типизации проекта был использован TS.

-   **Ant Design**: Из UI компонентов была использована библиотека Ant Design.

-   **React Query**: Библиотека для управления состоянием данных и кэширования запросов.

-   **Vite**: Современный сборщик для быстрой разработки и сборки проекта с минимальным временем ожидания и автоматической переработкой кода.

-   **ESLint и Prettier**: Инструменты для анализа и форматирования кода, помогающие поддерживать высокое качество и единообразие кода в проекте.

-   **json-server**: Для работы с данными была выбрана утилита для создания mock-сервера, что позволяет легко тестировать и разрабатывать функциональность, взаимодействующую с API.

-   **papaparse**: Библиотека для парсинга CSV-файлов, упрощающая работу с данными в формате CSV.

-   **file-saver**: Библиотека для сохранения файлов на клиентской стороне, что удобно для реализации функций экспорта данных.

## Компоненты

-   [InventoryPage](./src/Pages/InventoryPage/InventoryPage.tsx) - главная страница инвентаря
-   [Account](./src/components/Account/Account.tsx) - компонент отображения информации об аккаунте
-   [ExportButton](./src/components/ExportButton/ExportButton.tsx) - кнопка для экспорта данных в форматах JSON и CSV
-   [FilterInput](./src/components/FilterInput/FilterInput.tsx) - текстовое поле для фильтрации данных
-   [InventoryActions](./src/components/InventoryActions/InventoryActions.tsx) - панель действий для управления инвентарем
-   [InventoryFilters](./src/components/InventoryFilters/InventoryFilters.tsx) - компонент фильтров для инвентаря
-   [Menu](./src/components/Menu/Menu.tsx) - навигационное меню с различными пунктами

-   [InventoryTable](./src/components/InventoryTable/InventoryTable.tsx) - основной компонент для отображения таблицы инвентаря
-   [EditableCell](./src/components/InventoryTable/components/EditableCell/EditableCell.tsx) - компонент для редактируемой ячейки в таблице
-   [EditableRow](./src/components/InventoryTable/components/EditableRow/EditableRow.tsx) - компонент для редактируемой строки в таблице
-   [TableFooter](./src/components/InventoryTable/components/TableFooter/TableFooter.tsx) - компонент отображения футера таблицы

-   [helpers](./src/components/InventoryTable/helpers) - утилиты и хелперы для работы с таблицей
-   [calculateTotals.ts](./src/components/InventoryTable/helpers/calculateTotals.ts) - функция для расчёта итогов по данным продуктов
-   [getColumns.ts](./src/components/InventoryTable/helpers/getColumns.ts) - функция для получения конфигурации колонок таблицы

## Хуки

-   [hooks](./src/hooks) - пользовательские хуки для работы с данными
-   [useData.ts](./src/hooks/useData.ts) - хук для получения данных
-   [useUpdateData.ts](./src/hooks/useUpdateData.ts) - хук для обновления данных

## API

-   [api.ts](./src/api/api.ts) - основной файл для настройки и вызова API
-   [data.json](./src/api/data.json) - файл с тестовыми данными
-   [QueryClient.ts](./src/api/QueryClient.ts) - файл для настройки клиента запросов
-   [validateResponse.ts](./src/api/validateResponse.ts) - утилита для валидации ответов от API
