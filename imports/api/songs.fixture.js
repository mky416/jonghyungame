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
  
- songId: '4tdOzlB6I7w'
  title: '신기루'
  artist: '씨잼'
  time: '0:15'
  
- songId: 'NTjGmp5MTV4'
  title: '111%'
  artist: '도끼'
  time: '0:10'
  
- songId: 'vvkWaI91mLM'
  title: '널 너무 모르고'
  artist: '헤이즈'
  time: '0:19'
  
- songId: 'Amq-qlqbjYA'
  title: '마지막처럼'
  artist: '블랙핑크'
  time: '0:17'
  
- songId: 'Ue9NG1hAr78'
  title: '나로 말할 것 같으면'
  artist: '마마무'
  time: '0:09'
  
- songId: 'Z1pGxkXyDvc'
  title: '남이 될 수 있을까'
  artist: '볼빨간사춘기'
  time: '0:12'
  
- songId: 'gSQmYh-kpHY'
  title: '매일 듣는 노래'
  artist: '황치열'
  time: '3:37'
  
- songId: '9kaCAbIXuyg'
  title: '무제'
  artist: 'G-DRAGON'
  time: '0:00'
  
- songId: 'KPhUlyhlUbM'
  title: '처음부터 너와 나'
  artist: '볼빨간사춘기'
  time: '0:04'
  
- songId: 'b22Ed7f0D-0'
  title: 'FIVE'
  artist: '에이핑크'
  time: '0:06'
  
- songId: 'JGwWNGJdvx8'
  title: 'SHAPE OF YOU'
  artist: 'Ed Sheeran'
  time: '0:16'
  
- songId: 'OwJPPaEyqhI'
  title: 'NEW FACE'
  artist: '싸이'
  time: '0:12'
  
- songId: 'a3JqIwCx8Cs'
  title: '오늘 취하면'
  artist: '수란'
  time: '0:16'
  
- songId: 'VQtonf1fv_s'
  title: 'SIGNAL'
  artist: '트와이스'
  time: '0:35'
  
- songId: 'd9IxdwEFk1c'
  title: '팔레트'
  artist: '아이유'
  time: '0:19'
  
- songId: '4tBnF46ybZk'
  title: 'REALLY REALLY'
  artist: 'WINNER'
  time: '0:10'
  
- songId: 'Xvjnoagk6GU'
  title: 'I LUV IT'
  artist: '싸이'
  time: '0:12'
  
- songId: 'KK-1xrOsqXI'
  title: '미치고 싶다'
  artist: '한동근'
  time: '0:04'
  
- songId: 'EHgeGRU3wDI'
  title: "WHY DON'T YOU KNOW"
  artist: '청하'
  time: '0:17'
  
- songId: 'PJlsUe1DUnQ'
  title: 'NEVER'
  artist: '국민의아들'
  time: '0:17'
  
- songId: 'aBSN0g7CdlU'
  title: 'BLUE MOON'
  artist: '효린,창모'
  time: '0:17'
  
- songId: '6rS7OUGXUik'
  title: '첫눈처럼 너에게 가겠다'
  artist: '에일리'
  time: '0:14'
  
- songId: 'KbXV2R_Yd1E'
  title: 'LONELY'
  artist: '씨스타'
  time: '0:13'
  
- songId: '--knPjoSlNE'
  title: 'MARRY ME'
  artist: '마크툽'
  time: '0:28'
  
- songId: 'IdssuxDdqKk'
  title: 'KO KO BOP'
  artist: 'EXO'
  time: '0:13'
  
- songId: 'dMn509ddAkc'
  title: '사랑이 잘'
  artist: '아이유'
  time: '0:14'
  
- songId: 'Nv5_uvyqI9s'
  title: '맞지?'
  artist: '언니쓰'
  time: '0:58'
  
- songId: 'b1kQvZhQ6_M'
  title: '좋니'
  artist: '윤종신'
  time: '0:6'
  
- songId: 'OJ6alJj1hQw'
  title: '아침에'
  artist: '양홍원'
  time: '0:18'
  
- songId: 'y5MAgMVwfFs'
  title: '좋다고 말해'
  artist: '볼빨간사춘기'
  time: '0:13'
  
- songId: 'ywwU5ka1fBs'
  title: '아름다워'
  artist: '창모'
  time: '0:21'
  
- songId: 'gnLwCb8Cz7I'
  title: '사랑앓이'
  artist: 'FTISLAND'
  time: '0:18'
  
- songId: 'pC6tPEaAiYU'
  title: 'TOMBOY'
  artist: '혁오'
  time: '0:04'
  
- songId: '8A2t_tAjMz8'
  title: 'KNOCK KNOCK'
  artist: '트와이스'
  time: '0:14'
  
- songId: 'iLlLLBuuvVU'
  title: '나만 안되는 연애'
  artist: '볼빨간사춘기'
  time: '0:15'
  
- songId: 'lT7Q93fy1us'
  title: 'ALL I WANNA DO'
  artist: '박재범'
  time: '0:09'
  
- songId: '9U8uA702xrE'
  title: '우주를 줄게'
  artist: '볼빨간사춘기'
  time: '0:06'
  
- songId: '9pdj4iJD08s'
  title: '불장난'
  artist: 'BLACKPINK'
  time: '0:21'
  
- songId: 'OQu1AsKHH4Q'
  title: '돌아오지마'
  artist: '헤이즈'
  time: '0:20'
  
- songId: 'xEeFrLSkMm8'
  title: '봄날'
  artist: '방탄소년단'
  time: '0:47'
  
- songId: 'PT2_F-1esPk'
  title: 'CLOSER'
  artist: 'The Chainsmokers'
  time: '0:10'
  
- songId: 'GYX5QOVkHxc'
  title: 'FANXY CHILD'
  artist: '지코'
  time: '0:06'
  
- songId: 'Nkbz1te_lqI'
  title: 'OUTSIDE'
  artist: 'Crush'
  time: '0:41'
  
- songId: 'eelfrHtmk68'
  title: 'D'
  artist: 'DEAN'
  time: '0:22'
  
- songId: '1xVB4UajjgY'
  title: '먹구름'
  artist: '헤이즈'
  time: '0:18'
  
- songId: 'wxQZ48TgqZk'
  title: '부담이 돼'
  artist: '정키'
  time: '0:33'
  
- songId: 'OmjN_b07syo'
  title: '오빠야'
  artist: '신현희와김루트'
  time: '0:03'
  
- songId: '4Les0OrRuZ0'
  title: '아재개그'
  artist: '마무무'
  time: '0:13' 
`);


export const loadData = () => {
    console.log(data);
}