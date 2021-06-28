import React from "react";
import {Logos} from "./components/shared/svg/Logos";
import {logosBg, logosBgQuestions, storiosBg, storiosBgQuestions} from "./constants/images";
import {Storios} from "./components/shared/svg/Storios";

export const planets = [
    {
        id: '1',
        name: 'Логос',
        img: Logos,
        bgImg: logosBg,
        attempts: 1,
        startScreen: 3,
        questionBg: logosBgQuestions,
        introText: 'Жители планеты Логос проверят твою логику! Тебе предстоит ответить на три вопроса. \n' +
            'Но не беспокойся, если ошибёшься, жители планеты дадут тебе возможность ответить на вопросы заново',
        questions: [
            {
                id: '1',
                text: 'Чувства объединяют народы всех планет, причем как позитивные, так и \nнегативные. Как думаешь, где в космосе живут "страх" и "паника"?',
                answers: [
                    {
                        id: '1',
                        text: 'Очевидно! Речь о спутниках Марса',
                        isCorrect: true
                    },
                    {
                        id: '2',
                        text: 'Вопрос с подвохом! В космосе и живут :)',
                        isCorrect: false
                    },
                    {
                        id: '3',
                        text: 'Это какие-то недавно открытые планеты! Видимо, Хаббл испугался…',
                        isCorrect: false
                    },
                    {
                        id: '4',
                        text: 'Там, где еще не кончилась сессия',
                        isCorrect: false
                    }
                ]
            },
            {
                id: '2',
                text: 'В какую сторону надо встать космонавту, чтобы для его девушки, наблюдающей за ним с Земли, он казался более высоким, стройным и поджарым? \n' +
                    'P.S. Удачные ракурсы в космосе не спасут :)',
                answers: [
                    {
                        id: '1',
                        text: 'Ничего не нужно делать, космонавт и так кажется очень маленьким с Земли',
                        isCorrect: false
                    },
                    {
                        id: '2',
                        text: 'Я думаю, что перегрузки во время путешествий в космосе и так заставили космонавта похудеть',
                        isCorrect: false
                    },
                    {
                        id: '3',
                        text: 'Нужно встать вдоль вектора скорости! \n' +
                            'Так космонавта немного растянет теорией относительности',
                        isCorrect: true
                    },
                    {
                        id: '4',
                        text: 'Космонавт должен встать в сторону Солнца и боком к Земле - так половина его тела будет в тени',
                        isCorrect: false
                    }
                ]
            },
            {
                id: '3',
                text: 'У космонавтов на МКС есть 100 кг еды в тюбиках на случай непредвиденных обстоятельств. 99% веса этой еды состоит из воды. Из-за продолжительного хранения содержание воды сократилось до 98%. Сколько теперь весят экстренные запасы космонавтов? Весом тюбика можно пренебречь :)',
                answers: [
                    {
                        id: '1',
                        text: '99 кг',
                        isCorrect: false
                    },
                    {
                        id: '2',
                        text: '98,8 кг',
                        isCorrect: false
                    },
                    {
                        id: '3',
                        text: '50 кг',
                        isCorrect: true
                    },
                    {
                        id: '4',
                        text: '97,02 кг',
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: 'Сториос',
        img: Storios,
        bgImg: storiosBg,
        questionBg: storiosBgQuestions,
        attempts: 2,
        startScreen: 8,
        introText: 'Сториос славится своими преданиями об аудите, они как греческие мифы, только подвиги тут умственные :) Сможешь ответить на вопросы о здешних жителях? Старейшины планеты обязательно дадут тебе подсказку, если с первого раза ты не дашь правильный ответ!',
        questions: [
            {
                id: '1',
                text: 'Какой герой из произведений отечественной художественной литературы — самый яркий предтеча аудиторов?',
                answers: [
                    {
                        id: '1',
                        text: 'Ну конечно Ревизор Гоголя! \n' +
                            'Только тот, что настоящий :)',
                        isCorrect: true
                    },
                    {
                        id: '2',
                        text: 'Кто-то у Толстого? Есть, из кого выбирать...',
                        isCorrect: false
                    },
                    {
                        id: '3',
                        text: 'Варя из Вишневого сада! Человека хозяйственнее и учтивее не сыскать',
                        isCorrect: false
                    },
                    {
                        id: '4',
                        text: 'Может Чичиков из Мёртвых душ? \n' +
                            'Был на редкость внимательным',
                        isCorrect: false
                    }
                ],
                tip: ''
            },
            {
                id: '2',
                text: 'Что лучше всего делает аудитор?',
                answers: [
                    {
                        id: '1',
                        text: 'Слушает, это же этимология \n' +
                            'самого слова “аудит”',
                        isCorrect: true
                    },
                    {
                        id: '2',
                        text: 'Считает, потому что это его работа',
                        isCorrect: false
                    },
                    {
                        id: '3',
                        text: 'Распознает ложь, иначе никакой проверки сделать не получится',
                        isCorrect: false
                    },
                    {
                        id: '4',
                        text: 'Читает - аудиторам нужно всегда поддерживать квалификацию и быть в курсе',
                        isCorrect: false
                    }
                ],
                tip: ''
            },
            {
                id: '3',
                text: 'Какая страна является родиной и образцом передового аудита?',
                answers: [
                    {
                        id: '1',
                        text: 'Англия! У них всегда было хорошо с учетом и контролем',
                        isCorrect: true
                    },
                    {
                        id: '2',
                        text: 'Германия! Сложно подумать о более организованной стране',
                        isCorrect: false
                    },
                    {
                        id: '3',
                        text: 'США! Они всегда развивались очень быстро',
                        isCorrect: false
                    },
                    {
                        id: '4',
                        text: 'Италия! Торговая столица Европы - куда без аудита?',
                        isCorrect: false
                    }
                ],
                tip: ''
            }
        ]
    },
    {
        id: '3',
        name: 'Аудит',
        attempts: null,
        subjects: {
            home: [
                {
                    id: 'home-1',
                    svg: <div style={{background: 'red', width: 50, height: 50}} />
                },
                {
                    id: 'home-2',
                    svg: <div style={{background: 'green', width: 50, height: 50}} />
                }
            ],
            work: [
                {
                    id: 'work-1',
                    svg: <div style={{background: 'yellow', width: 50, height: 50}} />
                },
                {
                    id: 'work-2',
                    svg: <div style={{background: 'blue', width: 50, height: 50}} />
                }
            ],
            habit: [
                {
                    id: 'habit-1',
                    svg: <div style={{background: 'black', width: 50, height: 50}} />
                },
                {
                    id: 'habit-2',
                    svg: <div style={{background: 'orange', width: 50, height: 50}} />
                }
            ],
            memory: [
                {
                    id: 'memory-1',
                    svg: <div style={{background: 'violet', width: 50, height: 50}} />
                },
                {
                    id: 'memory-2',
                    svg: <div style={{background: 'beige', width: 50, height: 50}} />
                }
            ]
        }
    },

]