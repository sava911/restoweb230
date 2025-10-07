# План реализации шапки сайта

## 1. Анализ предоставленного HTML-кода шапки

Шапка сайта состоит из следующих элементов:

1. Логотип (изображение)
2. Навигационное меню с ссылками: Портфолио, Блог, Услуги, Команда, Контакты
3. Элементы для мобильного меню (три точки)
4. Номер телефона
5. Кнопка "Оставить заявку"

## 2. Структура файлов

- `restoweb230/app/index.html` - основной HTML-файл, где нужно заменить содержимое тега `<header>`
- `restoweb230/app/sass/_header.scss` - SCSS-файл для стилей шапки (нужно создать)
- `restoweb230/app/sass/style.scss` - основной SCSS-файл, который импортирует `_header.scss`

## 3. Необходимые изменения

### 3.1. Создание файла стилей

Создать файл `restoweb230/app/sass/_header.scss` со следующими стилями:

```scss
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  // Добавить другие стили по необходимости
}

.logo img {
  max-height: 50px;
  // Адаптировать размер логотипа при необходимости
}

.header__nav {
  // Стили для навигации
}

.menu {
  display: flex;
  list-style: none;

  li {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;

    &:hover {
      color: #007bff;
    }
  }
}

.header__menu_dots {
  display: none; // Скрыть на больших экранах

  span {
    display: block;
    width: 4px;
    height: 4px;
    background-color: #333;
    margin: 3px 0;
    border-radius: 50%;
  }
}

.header__tel {
  color: #333;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #007bff;
  }
}

.blue_btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }
}

// Адаптивность
@media (max-width: 768px) {
  .header {
    flex-wrap: wrap;
  }

  .header__nav {
    display: none; // Скрыть на мобильных устройствах
    width: 100%;
    order: 3;
  }

  .header__menu_dots {
    display: flex;
    flex-direction: column;
  }

  .menu {
    flex-direction: column;

    li {
      margin: 10px 0;
    }
  }
}
```

### 3.2. Изменения в index.html

Заменить содержимое тега `<header>` на следующий код:

```html
<div class="header" data-v-e167d94e="">
  <div class="logo" data-v-e167d94e="">
    <img
      src="https://pranaadmimwp.pranait.ru/wp-content/uploads/2024/11/logo.svg"
      alt="Логотип"
      data-v-e167d94e=""
    />
  </div>
  <div class="header__nav" data-v-e167d94e="">
    <nav data-v-e167d94e="">
      <ul class="menu" data-v-e167d94e="">
        <li data-v-e167d94e="">
          <a href="/portfolio" class="" data-v-e167d94e="">Портфолио</a>
        </li>
        <li data-v-e167d94e="">
          <a href="/blog" class="" data-v-e167d94e="">Блог</a>
        </li>
        <li data-v-e167d94e="">
          <a href="/services" class="" data-v-e167d94e="">Услуги</a>
        </li>
        <li data-v-e167d94e="">
          <a href="/comanda" class="" data-v-e167d94e="">Команда</a>
        </li>
        <li data-v-e167d94e=""><a href="#" data-v-e167d94e="">Контакты</a></li>
      </ul>
    </nav>
  </div>
  <div class="header__menu_dots" data-v-e167d94e="">
    <span data-v-e167d94e=""></span>
    <span data-v-e167d94e=""></span>
    <span data-v-e167d94e=""></span>
  </div>
  <a class="header__tel" href="tel:8 800 500-81-54" data-v-e167d94e=""
    >8 800 500-81-54</a
  >
  <button
    type="button"
    class="blue_btn hover_bg btn_transparent header_start_project_btn header__transparent"
    data-v-e167d94e=""
    style="--022fc1d6:28px;"
    data-v-79b269d0=""
  >
    <span class="blue_btn__title" data-v-79b269d0="">Оставить заявку</span>
    <!---->
  </button>
</div>
```

## 4. Проверка

После внесения изменений необходимо проверить:

1. Корректность HTML-разметки
2. Работу стилей на разных разрешениях экрана
3. Функциональность навигационных ссылок
4. Отображение логотипа
5. Работу кнопки "Оставить заявку" и ссылки с телефоном
