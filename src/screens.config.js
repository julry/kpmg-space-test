import { Intro } from './components/screens/Intro/Intro';
import {Intro2} from "./components/screens/Intro/Intro-2";
import {LogosIntro} from "./components/screens/Logos/LogosIntro";
import {LogosIntroQuestion} from "./components/screens/Logos/LogosIntroQuestion";
import {LogosQuestion1} from "./components/screens/Logos/LogosQuestion1";
import {LogosQuestion2} from "./components/screens/Logos/LogosQuestion2";
import {LogosQuestion3} from "./components/screens/Logos/LogosQuestion3";
import {StoriosIntro} from "./components/screens/Storios/StoriosIntro";
import {StoriosIntroQuestion} from "./components/screens/Storios/StoriosIntroQuestion";
import {StoriosQuestion1} from "./components/screens/Storios/StoriosQuestion1";
import {StoriosQuestion2} from "./components/screens/Storios/StoriosQuestion2";
import {StoriosQuestion3} from "./components/screens/Storios/StoriosQuestion3";
import {AuditIntro} from "./components/screens/Audit/AuditIntro";
import {AuditTask} from "./components/screens/Audit/AuditTask";
import {Final} from "./components/screens/Final";

import {auditBg, introBg, logosBg, logosBgQuestions, storiosBg, storiosBgQuestions} from "./constants/images";


export const ScreenType = {
  Intro: 'intro',
  Question: 'question',
  Final: 'final',
  PlanetIntro: 'planet',
};

export const ModalTypes = {
  Error: 'error',
  Tip: 'tip'
}

export const screens = [
  {
    name: 'intro',
    component: Intro,
    type: ScreenType.Intro,
    preloadImages: [introBg],
  },{
    name: 'intro-2',
    component: Intro2,
    type: ScreenType.Intro,
    preloadImages: [logosBg],
    image: [introBg]
  },
  {
    name: 'logos-intro',
    component: LogosIntro,
    type: ScreenType.PlanetIntro,
    preloadImages: [logosBgQuestions],
    image: [logosBg]
  },
  {
    name: 'logos-question-intro',
    component: LogosIntroQuestion,
    type: ScreenType.Question,
    preloadImages: [logosBgQuestions],
    image: [logosBgQuestions]
  },
  {
    name: 'logos-question-1',
    component: LogosQuestion1,
    type: ScreenType.Question,
    preloadImages: [logosBgQuestions],
    image: [logosBgQuestions]
  },
  {
    name: 'logos-question-2',
    component: LogosQuestion2,
    type: ScreenType.Question,
    preloadImages: [logosBgQuestions],
    image: [logosBgQuestions],
  },
  {
    name: 'logos-question-3',
    component: LogosQuestion3,
    type: ScreenType.Question,
    preloadImages: [storiosBg],
    image: [logosBgQuestions],
  },
  {
    name: 'storios-intro',
    component: StoriosIntro,
    type: ScreenType.PlanetIntro,
    preloadImages: [storiosBgQuestions],
    image: [storiosBg],
  },
  {
    name: 'storios-question-intro',
    component: StoriosIntroQuestion,
    type: ScreenType.Question,
    preloadImages: [storiosBgQuestions],
    image: [storiosBgQuestions],
  },
  {
    name: 'storios-question-1',
    component: StoriosQuestion1,
    type: ScreenType.Question,
    preloadImages: [storiosBgQuestions],
    image: [storiosBgQuestions],
  },
  {
    name: 'storios-question-2',
    component: StoriosQuestion2,
    type: ScreenType.Question,
    preloadImages: [storiosBgQuestions],
    image: [storiosBgQuestions],
  },
  {
    name: 'storios-question-3',
    component: StoriosQuestion3,
    type: ScreenType.Question,
    preloadImages: [introBg],
    image: [storiosBgQuestions],
  },
  {
    name: 'audit-intro',
    component: AuditIntro,
    type: ScreenType.PlanetIntro,
    preloadImages: [auditBg],
    image: [introBg],
  },
  {
    name: 'audit-task',
    component: AuditTask,
    type: ScreenType.Question,
    preloadImages: [auditBg],
  },
  {
    name: 'final',
    component: Final,
    type: ScreenType.Final,
  },
];