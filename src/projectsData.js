import NFTbuy from './assets/image/NFTickets/buy.png';
import NFTmain from './assets/image/NFTickets/main.png';
import NFTmain2 from './assets/image/NFTickets/main2.png';
import NFTconstructor from './assets/image/NFTickets/constuctor.png';
import NFTmarketplace from './assets/image/NFTickets/marketplace.png';
import NFTqr from './assets/image/NFTickets/qr.png';

import TodoDark from './assets/image/Todo/dark.png';
import TodoLight from './assets/image/Todo/light.png';
import TodoReverse from './assets/image/Todo/reverse.png';

import EFLmain from './assets/image/efl/main.png';
import EFLfilter from './assets/image/efl/filter.png';
import EFLsearch from './assets/image/efl/search.png';
import EFLfiles from './assets/image/efl/files.png';
import EFLfoldable from './assets/image/efl/foldable.png';
import EFLlaba from './assets/image/efl/laba.png';
import EFLwhite from './assets/image/efl/white.png';

import MapMarker from './assets/image/Maps/marker.png';
import MapMain from './assets/image/Maps/main.png';
import MapRoute from './assets/image/Maps/route.png';

import GameGame from './assets/image/Minesweeper/game.png';
import GameMain from './assets/image/Minesweeper/main.png';
import GameOver from './assets/image/Minesweeper/gameover.png';

import Bot1 from './assets/image/Bot/recognition.png';
import Bot2 from './assets/image/Bot/syntheth.png';

const data = [
  {
    name: 'NFTickets',
    work: 'front-end',
    type: 'Проект в рамках хакатона Сбер',
    url: 'http://194.135.20.93:5000/',
    stack: 'React, redux-toolkit, SCSS, Axios, ethers, web3, async/await, react-qr-reader',
    repo: 'https://github.com/flogea/NFTickets-Platform',
    images: [
      {
        url: NFTmain,
      },
      {
        url: NFTmain2,
      },
      {
        url: NFTconstructor,
      },
      {
        url: NFTmarketplace,
      },
      {
        url: NFTbuy,
      },
      {
        url: NFTqr,
      },
    ],
  },
  {
    name: 'Todo App',
    work: 'front-end',
    type: 'Проект в рамках летней практики',
    url: 'https://flogea.github.io/todo-practice/',
    stack: 'React, TypeScript, MobX, SCSS, Webpack, Axios, async/await, i18next',
    repo: 'https://github.com/flogea/todo-practice',
    images: [
      {
        url: TodoDark,
      },
      {
        url: TodoLight,
      },
      {
        url: TodoReverse,
      },
    ],
  },
  {
    name: 'Elegant fiber labs',
    work: 'front-end, back-end',
    type: 'Дипломный проект',
    url: '',
    info: 'В разработке',
    stack:
      'React, Redux-toolkit, SCSS, NodeJs, Express, MongoDB, Axios, async/await, child_process, fs, mongoose, speakeasy, express-fileupload',
    repo: 'https://github.com/flogea/elegant-fiber-labs',
    images: [
      {
        url: EFLmain,
      },
      {
        url: EFLfilter,
      },
      {
        url: EFLsearch,
      },
      {
        url: EFLfiles,
      },
      {
        url: EFLfoldable,
      },
      {
        url: EFLlaba,
      },
      {
        url: EFLwhite,
      },
    ],
  },
  {
    name: 'Работа с картами Leaflet',
    work: 'fron-end',
    type: 'Тестовый небольшой проект',
    url: 'https://flogea.github.io/testing-work-map/',
    stack: 'React, Redux-toolkit, Redux-Saga, SCSS, Leaflet, axios, async/await',
    repo: 'https://github.com/flogea/testing-work-map',
    images: [
      {
        url: MapMain,
      },
      {
        url: MapRoute,
      },
      {
        url: MapMarker,
      },
    ],
  },
  {
    name: 'Сапёр',
    work: 'front-end',
    type: 'Тестовый небольшой проект',
    url: 'https://flogea.github.io/minesweeper-vk/',
    stack: 'React, SCSS',
    repo: 'https://github.com/flogea/minesweeper-vk',
    images: [
      {
        url: GameMain,
      },
      {
        url: GameGame,
      },
      {
        url: GameOver,
      },
    ],
  },
  {
    name: 'Телеграм бот распознования и синтезирования речи',
    work: 'back-end',
    type: 'Тестовый небольшой проект',
    url: '',
    info: 'Отключён',
    stack: 'NodeJS, express, MongoDB, Axios, mongoose, node-telegram-bot-api, play-sound',
    repo: 'https://github.com/flogea/speech-recognition-bot',
    images: [
      {
        url: Bot1,
      },
      {
        url: Bot2,
      },
    ],
  },
];

export default data;
