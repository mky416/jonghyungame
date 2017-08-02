import { load } from 'js-yaml';

const data = load(`
- songId: 'WyiIGEHQP8o'
  title: '빨간 맛'
  artist: '레드벨벳'
  time: '0:16'
  
- songId: 'lnXXfYA91Y8'
  title: '귀를 기울이면'
  artist: '여자친구'
  time: '0:40'
  
- songId: 'afxLaQiLu-o'
  title: '비도 오고 그래서'
  artist: '헤이즈'
  time: '0:30'
- songId: '8Oz7DG76ibY'
  title: 'DINOSAUR'
  artist: '악동뮤지션'
  time: '0:54'
  
- songId: 'obzb7nlpXZ0'
  title: 'Artist'
  artist: '지코'
  time: '0:09'
`);


export const loadData = () => {
    console.log(data);
}
