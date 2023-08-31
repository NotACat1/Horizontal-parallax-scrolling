# Горизонтальный скролл с параллакс-эффектом

![main](https://github.com/NotACat1/WEB-TRANING-Horizontal-parallax-scrolling/assets/113008873/b41190a0-9294-4804-8abd-fec590a37fcd)

## О проекте

[Данный веб-сайт]() представляет собой практическое руководство по созданию горизонтального слайдера с использованием мощной библиотеки Swiper. Swiper - это интуитивно понятная и гибкая библиотека, разработанная специально для создания разнообразных слайд-шоу, каруселей и галерей на веб-страницах. Благодаря её простой интеграции и богатому функционалу, вы сможете легко добавить интерактивные слайды на ваш сайт без головной боли.

Идея взята с видеоурока: [https://youtu.be/QFq6PiZ1BQ8](https://youtu.be/QFq6PiZ1BQ8).

## Реализованный функционал

### Горизонтальный скролл

Горизонтальный скролл - это интересная и нестандартная фишка, которая может добавить оригинальности и интерактивности вашему веб-сайту. Он позволяет пользователям переключаться между разными слайдами горизонтально, создавая визуально привлекательный и современный дизайн. В сочетании с возможностью пользователей предоставлять контент для каждого слайда, это может создать динамичное и увлекательное взаимодействие.

### Параллакс эффект

Параллакс-эффект – это действительно интересная и эффектная техника в веб-дизайне. Он создает впечатление глубины и движения, путем движения фоновых элементов в разной скорости по отношению к переднему плану. Это добавляет динамичности и визуального интереса на вашем веб-сайте.

### Фоновые частицы

Фоновые частицы являются отличным способом придать вашему веб-сайту дополнительную динамику и визуальный интерес. Они создают ощущение движения и живости на фоне, что делает пользовательский опыт более привлекательным и увлекательным.

## Используемые технологии

### 1. Swiper

[Swiper.js](https://swiperjs.com/) - это современная, мощная и гибкая библиотека для создания интерактивных слайд-шоу, галерей и каруселей на веб-сайтах. Она предоставляет интуитивно понятный интерфейс и богатый набор опций, позволяя разработчикам легко создавать динамичные и привлекательные интерактивные элементы.

### 2. Particles.js

[Particles.js](https://marcbruederlin.github.io/particles.js/) - это легковесная JavaScript библиотека для создания красочных и анимированных фоновых частиц на веб-сайтах. Она позволяет добавить визуальную динамику и эффектность, создавая ощущение движения и интерактивности на фоне страницы.

### 3. Normalize.css

[Normalize.css](https://necolas.github.io/normalize.css/) предоставляет браузерам возможность более последовательного отображения всех элементов согласно современным стандартам. Он акцентируется на нормализации только тех стилей, которые действительно требуют коррекции.

```css
/* index.css */
@import url(../vendor/normalize.css);
```

### 3. Webpack

[Webpack](https://webpack.js.org/) - это инструмент с открытым исходным кодом для сборки веб-приложений. Он позволяет объединять различные файлы, такие как HTML, CSS, JavaScript, изображения, в единый пакет для оптимизированной доставки на веб-сервер. Webpack также поддерживает использование различных загрузчиков и плагинов, что облегчает процесс разработки, минимизации и управления зависимостями.

Настройки Webpack:

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[hash][ext]',
          }
      },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
            filename: 'fonts/[name].[hash][ext]',
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

  ]
}
```

#### 3.1 Babel

[Babel](https://babeljs.io/) - это инструмент для транспиляции кода на JavaScript. Он позволяет разработчикам писать код, используя современные функции языка, которые могут быть не поддержаны всеми браузерами. Babel преобразует этот код в совместимый с более старыми версиями браузеров, обеспечивая кросс-браузерную поддержку и совместимость.

Настройки Babel:

```js
// babel.config.js
const presets = [
  ['@babel/preset-env', {
    targets: {
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    useBuiltIns: "entry"
  }]
];
module.exports = { presets };
```

#### 3.2 PostCSS

[PostCSS](https://postcss.org/) - это инструмент для обработки и трансформации кода CSS. Он позволяет разработчикам применять различные плагины к CSS коду, автоматизируя задачи, такие как автопрефиксинг, оптимизация, генерация переменных и многое другое. PostCSS гибкий и настраиваемый, что позволяет адаптировать его под конкретные потребности проекта.

Настройки PostCSS:

```js
// postcss.config.js
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
};
```
