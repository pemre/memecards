/**
 * Card type {
 *   name: string,
 *   backgroundColor?: string,
 *   items: [{
 *     size: number,
 *     type: string, // 'text' | 'image'
 *     value: string
 *   }],
 * }
 */
const cards = [
  {
    name: 'Need a break',
    items: [
      {
        type: 'text',
        value: 'NEED',
        size: 6.3,
      },
      {
        type: 'text',
        value: 'A BREAK',
        size: 4,
      },
      {
        type: 'image',
        value: './images/coffee.jpg',
      },
    ],
  },
  {
    name: 'Elmo',
    items: [
      {
        type: 'text',
        value: 'ELMO',
        size: 6,
      },
      {
        type: 'image',
        value: './images/elmo.gif',
      },
      {
        type: 'text',
        value: 'ENOUGH!',
        size: 4,
      },
      {
        type: 'text',
        value: 'Let\'s Move On',
        size: 2.8,
      },
    ],
  },
  {
    name: 'BRB',
    items: [
      {
        type: 'text',
        value: 'BRB',
        size: 9,
      },
      {
        type: 'image',
        value: './images/brb.webp',
      },
      {
        type: 'text',
        value: 'Be Right Back',
        size: 2.5,
      },
    ],
  },
  {
    name: 'I have to go',
    backgroundColor: 'rgb(228 107 0)',
    items: [
      {
        type: 'text',
        value: 'I HAVE',
        size: 5,
      },
      {
        type: 'text',
        value: 'TO GO',
        size: 5,
      },
      {
        type: 'image',
        value: './images/run.jpg',
      },
    ],
  },
  {
    name: 'Mute',
    items: [
      {
        type: 'text',
        value: 'PLEASE',
        size: 5,
      },
      {
        type: 'image',
        value: './images/mute.jpg',
      },
      {
        type: 'text',
        value: 'YOURSELF',
        size: 3.5,
      },
    ],
  },
  {
    name: 'Unmute',
    items: [
      {
        type: 'text',
        value: 'PLEASE',
        size: 5,
      },
      {
        type: 'image',
        value: './images/unmute.gif',
      },
      {
        type: 'text',
        value: 'UNMUTE',
        size: 4,
      },
    ],
  },
  {
    name: 'Rejected',
    items: [
      {
        type: 'image',
        value: './images/sad.png',
      },
      {
        type: 'image',
        value: './images/rejected.png',
      },
    ],
  },
  {
    name: 'Approved',
    items: [
      {
        type: 'image',
        value: './images/approved.png',
      },
      {
        type: 'image',
        value: './images/proud.gif',
      },
    ],
  },
  {
    name: 'Can\'t Hear You',
    items: [
      {
        type: 'text',
        value: 'CAN\'T HEAR',
        size: 5,
      },
      {
        type: 'image',
        value: './images/hear.jpg',
      },
      {
        type: 'text',
        value: 'YOU',
        size: 6,
      },
    ],
  },
  {
    name: '5 Minutes left',
    backgroundColor: 'rgb(0 160 0)',
    items: [
      {
        type: 'text',
        value: '5',
        size: 5,
      },
      {
        type: 'text',
        value: 'MINUTES',
        size: 4,
      },
      {
        type: 'image',
        value: './images/yoda.png',
      },
      {
        type: 'text',
        value: 'LEFT',
        size: 5,
      },
    ],
  },
  {
    name: '3 Minutes left',
    backgroundColor: 'rgb(0 0 160)',
    items: [
      {
        type: 'text',
        value: '3',
        size: 5,
      },
      {
        type: 'text',
        value: 'MINUTES',
        size: 4,
      },
      {
        type: 'image',
        value: './images/yoda.png',
      },
      {
        type: 'text',
        value: 'LEFT',
        size: 5,
      },
    ],
  },
  {
    name: '1 Minute left',
    backgroundColor: 'rgb(180 0 0)',
    items: [
      {
        type: 'text',
        value: '1',
        size: 5,
      },
      {
        type: 'text',
        value: 'MINUTE',
        size: 5,
      },
      {
        type: 'image',
        value: './images/yoda.png',
      },
      {
        type: 'text',
        value: 'LEFT',
        size: 5,
      },
    ],
  },
];
