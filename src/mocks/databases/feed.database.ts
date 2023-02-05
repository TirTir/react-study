import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data";
import { v4 } from "uuid";

export const feedDB = factory({
  parentFeed: {
    id: primaryKey(() => v4()),
    title: () => "",
  },
  feed: {
    id: primaryKey(() => v4()),
    title: () => "",
    tags: manyOf("tag"),
    contents: () => "",
    user: oneOf("user"),
    parentFeeds: manyOf("parentFeed"),
    createAt: () => "2023-02-01 14:10:12",
  },
  tag: {
    id: primaryKey(() => v4()),
    name: () => "",
  },
  user: {
    profileImage: () =>
      "https://avatars.githubusercontent.com/u/40460655?s=96&v=4",
    name: () => "Outsung",
  },
});

const devTag = feedDB.tag.create({ name: "개발" });
const outsungUser = feedDB.user.create();
const duoFeed = feedDB.feed.create({
  tags: [devTag],
  user: outsungUser,
  title: "Duo 프로젝트",
  contents: "게임 같이 할 사람 찾는 사이트",
});

feedDB.feed.create({
  parentFeeds: [duoFeed],
  tags: [devTag],
  title: "Duo 1일차",
  user: outsungUser,
  contents: `D?o를 만들자고 생각했던 시기는 7월(2020) 이다. 지금까지 어영부영 하다가 시간이 많이 지났지만 열심히 해보려 한다.

아마 그 당시 게임을 혼자 하는 것 보다는 마음 맞는 사람과 하는게 더 재밌었고, 마땅히 사람을 구하기엔 한정적인 방법이 전부였다.
같이 게임할 사람을 구하는 것을 메인으로 삼는 사이트는 없을 뿐더러 포트폴리오 겸 만들면 재밌겠다는 생각이 들었다.

물론 일단 대단한걸 만들고 싶다는 생각은 아니고, 좋은 아이템인거 같다는 생각도 아니다.
추후에 찾아본 내용인데 거기다 이미 [NEXT.op.gg](https://next.op.gg/) 라는 거의 동일한 사이트까지 존재하는 상황이다.`,
  createAt: "2023-02-02 14:10:12",
});

feedDB.feed.create({
  parentFeeds: [duoFeed],
  tags: [devTag],
  title: "Duo 2일차",
  user: outsungUser,
  contents: `이 프로젝트에서 얻고자 하는 것은 최대한 많은 기술에 익숙해 지는 것도 있다.
  일단 경험을 해봐야 뭐가 나한테 맞고 좋은지 알 수 있다고 생각했다.
  
  그래서 많은 시간이 들더라도 간단하고 같은 기능을
  여러가지 타입으로 분류, 사용한 기술 나열해서 사용해본 후 기술스택을 결정하기로 했다.
  
  먼저 현재 러닝커브가 가장 낮은 Context Api ( 상태 관리 ) + es6 ( 불변성 관리 )를 먼저 사용하기로 했다.
  추후 Redux ( 상태 관리 ) + Immer ( 불변성 관리 ) 사용 해볼 예정이다.`,
  createAt: "2023-02-03 14:10:12",
});

feedDB.feed.create({
  parentFeeds: [duoFeed],
  tags: [devTag],
  title: "Duo 3일차",
  user: outsungUser,
  contents: `history 의 버전이 5.x.x 이다.

나는 그냥 $ npm install history 했는데,
찾아보니까 history v5 와 react-router-dom v5 이렇게 두개를 쓰면 history.push() 가 정상적으로 작동하지 않는다는 것이다.

 

해결 방법은 history 를 4.10.1 로 다운그레이드 하면 된다.

$ npm install history@4.10.1

이제 완벽하게 utils/api.ts 에서 history를 해도 정상적으로 작동한다 👍
  `,
  createAt: "2023-02-04 14:10:12",
});

feedDB.feed.create({
  parentFeeds: [duoFeed],
  tags: [devTag],
  title: "Duo 4일차",
  user: outsungUser,
  contents: `D?o를 만들자고 생각했던 시기는 7월(2020) 이다. 지금까지 어영부영 하다가 시간이 많이 지났지만 열심히 해보려 한다.

아마 그 당시 게임을 혼자 하는 것 보다는 마음 맞는 사람과 하는게 더 재밌었고, 마땅히 사람을 구하기엔 한정적인 방법이 전부였다.
같이 게임할 사람을 구하는 것을 메인으로 삼는 사이트는 없을 뿐더러 포트폴리오 겸 만들면 재밌겠다는 생각이 들었다.

물론 일단 대단한걸 만들고 싶다는 생각은 아니고, 좋은 아이템인거 같다는 생각도 아니다.
추후에 찾아본 내용인데 거기다 이미 [NEXT.op.gg](https://next.op.gg/) 라는 거의 동일한 사이트까지 존재하는 상황이다.`,
  createAt: "2023-02-05 14:10:12",
});

feedDB.feed.create({
  parentFeeds: [duoFeed],
  tags: [devTag],
  title: "Duo 5일차",
  user: outsungUser,
  contents: `## Github-Page를 이용해서 사이트를 올리기

  일단 기본적으로
  
  deploy 할 repository - new Branch 생성
  deploy 할 repository - setting - GitHub Pages - Source에 생성한 Branch로 설정
  
  그 이후 변경사항이 있을 때 마다
  
  1. React app 빌드  $ npm run build
  2. build 폴더에 있는 정적파일을 생성한 Branch에 올리기
  3. **[사용자 이름].github.io/[repository 이름]** 에 자동적으로 올라감
  
  음... 매우 불편한거 같다.. 🤒
  
  라고 느낀다면 **Github Action** 한번 써보는 것을 추천한다.`,
  createAt: "2023-02-06 14:10:12",
});

feedDB.feed.create({
  parentFeeds: [duoFeed],
  tags: [devTag],
  title: "Duo 6일차",
  user: outsungUser,
  contents: `
  ## 메인 컨셉 & Color 정하기

**D?o** 프로젝트의 기능이 매우 간단하므로 메인 컨셉이나 색깔을 고르기가 편했다.

[**Awwwards](https://www.awwwards.com/)** 에서 참고할 페이지를 보다가 레트로 컨셉으로 정했다.

- **Retro** 컨셉
    - 화면 최상단에 nosie 넣어주기
- **제목** - **소제목** 구조로 맞추기
    - 제목 : 각진 폰트 + 작은 사이즈
    - 소제목 : 둥근 폰트 + 큰 사이즈
- **사소한것** + **사소한것** = **완성도**
    - 디테일한 부분 꼭 챙기기
- **SPA**으로 만들기
    - page가 별로 없음
    - 모든 기능 로그인 이후 사용 가능
    - Front를 정적으로 만들 수 있음
    `,
  createAt: "2023-02-07 14:10:12",
});

feedDB.feed.create({
  parentFeeds: [duoFeed],
  tags: [devTag],
  title: "Duo 7일차",
  user: outsungUser,
  contents: `메인 화면 인터랙티브를 어떤 식으로 표현하면 좋을까 생각을 해보았다.

  대략 생각한 내용을 정리하면 
  
  - **three js**를 이용해서 **3D 인터랙티브** 표현
  - **scrollmagic**를 사용해서 **scroll 인터랙티브** 표현
  - **handpose**를 활용하기
  - **matter js**를 사용해서 **2D 물체 인터랙티브** 표현`,
  createAt: "2023-02-08 14:10:12",
});
