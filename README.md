![](https://media.vlpt.us/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif)

---

# 썸네일 메이커 만들기

---

![](https://images.velog.io/images/oneook/post/b0c0d7ab-d5fc-462a-80d0-cba412283931/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.38.31.png)

## 개요 📋

> **프로젝트명** : 썸네일 메이커 (Thumbnail-Maker)
> **기획 및 제작** : **`WONKOOK LEE`** > **분류** : 토이 프로젝트 (개인)
> **제작 기간 | 배포일** : 2021.08.09 (1-day)
> **주요 기능** : 간편한 썸네일 구성, 편집, 이미지 포맷(PNG) 컨버팅
> **타겟 유저** : 포토샵 등 편집 프로그램이 익숙치 않거나 썸네일 만드는게 번거로운 유저
> **사용 툴** : `HTML`, `CSS`, `JavaScript`, `HTML2CANVAS(JS-Library)` > **링크** : [썸네일 메이커 - 벨로그 포맷 v 1.2.1](https://blog.wonkooklee.com/playground/thumbnail-maker/)

<br>

---

<br>

## 1. 만든 이유?

> **누구든지 10초 안에 무난한 벨로그 썸네일을 만들 수 있습니다.**
> 어도비, 오피스 없어도 됩니다. 당신은 개발과 글쓰기에만 집중하세요.

같이 공부하는 기수 분들 중에 포토샵 같은 편집 프로그램이 익숙치 않은 분들도 계실 것이다. 벨로그에 기술블로그를 꾸준히 쓰는것도 일인데 썸네일 만드는데 엄한 시간을 뺏기진 않을까 생각이 들었다.

썸네일 메이커는 '배경색 랜덤 생성과 필드 입력 값을 헤더에 출력하는 정도의 간단한 기술로 무난한 썸네일 정도는 만들 수 있지 않을까' 라는 생각에서 시작됐다. DOM API로 HTML과 CSS 조작하는 것도 배웠는데 쓸모있는 것을 만들어보고 싶었고 아이디어를 실제로 구현하는 연습도 필요했기에 그냥 한 번 만들었다.

_단지 기능을 구현하는 것을 목표로 만들어서 코드 퀄리티는 절대 보장할 수 없다 (심지어 모두 전역 접근 가능). Release Notes 적는법과 배포 방법 조차 모르고 공부 삼아 만들었기 때문에 테스트용 MVP(minimum viable product)로서 의미만 있다. 이 점 감안하여 봐주셨으면 좋겠다._
<br>

---

<br>

## 2. 기획과 디자인

### 2-1. 내멋대로 만든 유저 플로우 🗺

![](https://images.velog.io/images/oneook/post/732581c1-ef49-4856-ad03-79ce2af7cb8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%204.26.38.png)

> **썸네일 메이커의 목표**는 표현의 다양성 대신 선택지를 줄여 사용자의 고민을 덜어주는 것이다. 기본적인 텍스트 구성과 랜덤 배경색, 이미지 백그라운드 설정 등 필요한 기능 외엔 모두 덜어내기 위해 고민했다.

![](https://images.velog.io/images/oneook/post/3b8f7621-198b-4a70-8352-b2a3014f0472/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.28.00.png)

목표 사용자는 편집 프로그램이 익숙하지 않은데 썸네일이 필요한 분들이다. 썸네일 제작에 포토샵, 일러스트레이터 같은 프로그램을 사용하는 분들이야 원하는대로 개성있는 썸네일을 만들 수 있고, 자신의 마음에 드는 썸네일이 나올 때 까지 만들고자 하는 의지가 있다. 만약 사용자가 썸네일이라는 개념 조차 생소하다면 오히려 선택지를 줄이고, 일률적이더라도 무난한 템플릿으로 구성하는 것이 좋겠다고 생각했다.
<br>

### 2-2. 화면 구성 🎨

#### 2-2-1. 화면 구획 및 구성 (Wireframing) 🏗

![](https://images.velog.io/images/oneook/post/31cfc3ab-09e9-479d-8b01-c9f73eb97c3d/id-Artboard%201%20copy%202@2x-100.jpg)

> 썸네일을 블로그 포맷에 넣었을때 어떻게 보일지 짐작할 수 있는 화면 구성이 좋지 않을까?

썸네일은 결국 플랫폼의 포스팅 용도로 사용되기 때문에, 플랫폼의 화면 구성과 썸네일에 이질감이 없는지 실시간으로 보여져야 한다는 결론으로 귀결되었다.

#### 2-2-2. 디자인 구체화 👨🏻‍🎨

![](https://images.velog.io/images/oneook/post/64df2e7c-ac8b-4749-bf8c-fbe7f03419e5/id-Artboard%201@2x-100.jpg)

따라서 인터페이스 디자인은 벨로그의 화면 구성 중 #태그 검색했을때 나타나는 레이아웃을 참고하고 각각의 컴포넌츠들이 플랫폼의 디자인 컨텍스트와 궤를 함께 하도록 의도하였다. 사용자 프로필 썸네일, 사용자 아이디와 같이 깨알같은 요소들을 반영하는 것은 만드는 재미를 더했다.

> 내가 참고한 벨로그 화면 구성
> ![](https://images.velog.io/images/oneook/post/e9bec783-60be-40a0-977f-705657ad1072/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.51.25.png)

<br>

---

<br>

## 3. 주요 기능

### ⌨️ 제목과 부제목, 분류 텍스트 입력

![](https://images.velog.io/images/oneook/post/7958ea07-00f4-4633-b49b-6674468cdbb1/ezgif-7-b4a332d1436f.gif)사용자는 제목과 부제목, 분류를 인풋창을 통해 입력하게 된다. `addEventListener`로 `input` 이벤트를 감지하여 입력 필드에 타이핑이 될 때마다 `textContent`를 갱신하는 방법을 사용했다.

```js
const inputFields = document.querySelectorAll(".input__field");

const updateInputValue = function (e) {
  const target = e.target.dataset.set;
  document.querySelector(`.${target}`).textContent = e.target.value;
};

inputFields.forEach((e) => {
  e.addEventListener("input", updateInputValue);
});
```

리팩토링 할 땐 `input` 요소마다 각각의 이벤트 핸들러를 생성하는 대신 이벤트 위임(Event Delegation)으로 간결하게 수정할 예정.
<br>

---

<br>

### 🎲 랜덤 그라디언트, 단색 배경 만들기

![](https://images.velog.io/images/oneook/post/35758997-135c-4129-ae6c-34c0864e6bec/ezgif-7-0622eb62a251.gif)사용자가 고민하는 시간을 최대한 줄여주고 싶었다. 요즘처럼 선택장애라는 말이 자주 언급되는 때도 없을 것이다. 어떤 색상으로 시리즈, 포스트 썸네일을 만들까 고민하기 전에 사용자에게 색상을 마구 집어던지는 기능이 되어버렸다.

버튼을 누르면 무작위의 색상 코드가 만들어져서 사용자는 마음에 드는 색상이 나올때까지 클릭하면 된다. ~~이중에하나는사용자취향이겠지~~

랜덤 컬러라고 해서 너무 칙칙한 색이 나와버리면 안되기 때문에 `RGB` 값 각각 0에서 255까지의 범위 중 최소 150 이상, 너무 밝으면 글자가 안보이니 150과 240 사이의 범위에서 값이 생성되도록 `Math.random` 함수를 만들었다.

또한 DOM으로 백그라운드 색상 코드 전달할때 `rgb(??, ??, ??)`는 적용이 안되어 16진법 hex 코드로 각각 변환 후 이어붙여줬다. 이때 사용한 메소드는 `toString(16)`.

```js
const randomRGB = function () {
  let rgb = "";
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, "0");
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, "0");
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, "0");
  return rgb;
};
```

<br>

---

<br>

### 🌅 URL 입력해서 배경에 이미지 삽입

![](https://images.velog.io/images/oneook/post/748ba38f-e953-4124-acec-72c42dc7d026/ezgif-7-c16ba6bc2e63.gif)배경색만 있으면 활용도가 너무 떨어질 것 같아 선택지를 추가했다. 바로 이미지 주소를 입력해서 배경에 이미지를 삽입하는 기능이다. `prompt`로 주소값을 전달하여 DOM의 `style` 프로퍼티로 간단하게 만들었다.

썸네일이 만들어지는 프레임 뿐만 아니라 `body`에도 블러 처리된 이미지를 깔아주어 사용자가 썸네일의 테마를 경험할 수 있도록 고려해봤다.
<br>

---

<br>

### 💾 핵심기능: 이미지 포맷으로 화면 저장하기 - HTML2CANVAS

![](https://images.velog.io/images/oneook/post/d8137495-951d-4702-88ab-c37a682c7676/ezgif-7-5fdecfa9bd2f.gif)DOM으로 화면에서 꾸미는 것은 어떻게든 해결이 된다지만, 특정 화면을 이미지로 캡쳐해서 파일로 저장하는 것은 지금 내가 구현할 수 없는 기술이었다.

**HTML2CANVAS** 라는 자바스크립트 라이브러리를 사용하여 해결하였다. 이 라이브러리는 HTML 내의 특정 DOM 요소의 영역을 캡쳐해서 이미지 포맷으로 출력, 저장이 가능하도록 만들어준다.

아래는 라이브러리의 사용 예제 스니펫

```html
<!-- HTML -->
<div id="capture" style="padding: 10px; background: #f5da55">
  <h4 style="color: #000; ">Hello world!</h4>
</div>
```

```js
// JavaScript
html2canvas(document.querySelector("#capture")).then((canvas) => {
  document.body.appendChild(canvas);
});
```

`capture`라는 `id`값을 가진 요소를 캡쳐하여 해당 이미지를 담은 `canvas`를 `body`의 자식 요소로 추가한다. 옵션 기능을 잘 몰라서 이미지 배경이 최종 결과에 반영되지 않아 많이 해메였지만 다행히 StackOverflow에서 답을 찾아 해결할 수 있었다.

**[HTML2CANVAS](https://html2canvas.hertzen.com/)**
<br>

---

<br>

### 📐 구성 요소(레이아웃) 변경과 텍스트 스타일 옵션

![](https://images.velog.io/images/oneook/post/f692231c-6b7b-4218-a27e-90a5221943e6/ezgif-7-e306b4c29906.gif)내가 만든 썸네일 메이커의 핵심은 다양한 커스터마이징 기능을 제공하는 것이 아니다. 최대한 단순한 사용성을 추구하는 것이 목적이기 때문에 몇 안되는 간단한 레이아웃, 텍스트 스타일 옵션을 만들어 텍스트가 배경에 묻히지 않도록 고려했다.

각 스타일 옵션별로 부모 요소에 특정 `id`를 부여하고 자식 요소들은 `id`값에 따라 CSS 스타일이 달라지도록, 옵션 값에 맞게 따로 프리셋을 만들었다.

<br>

---

<br>

## 4. 사용 예시 🖨

> 최소한의 옵션으로 최대한의 바리에이션을 만들 수 있도록 시도해보았다.
> 아래는 예제로 만든 샘플들이다.

![](<https://images.velog.io/images/oneook/post/9b08d976-7f1a-4c94-92b3-a43b1bded6d7/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(6).png>)

![](https://images.velog.io/images/oneook/post/e79515a9-4ac8-4a70-b525-c5caec6d1651/module.png)

![](https://images.velog.io/images/oneook/post/bbdd1745-6660-4c8c-92af-36de0dcf7613/3.png)

![](<https://images.velog.io/images/oneook/post/ab598e34-066b-4860-a363-e5934325d0f2/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(1).png>)

![](https://images.velog.io/images/oneook/post/48562a05-9c6c-48b5-92e8-c7f11e0d3556/15.png)

![](https://images.velog.io/images/oneook/post/3cda059d-c541-4da2-bcfb-a9d52b172508/as.png)

![](https://images.velog.io/images/oneook/post/4ff903b2-402c-42e2-9306-b7f4747208f9/37.png)

![](https://images.velog.io/images/oneook/post/0d43fce1-0193-4040-9d90-c861428afff8/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png)

![](https://images.velog.io/images/oneook/post/393fb2ba-4627-4696-8830-73da166cdf2b/3.png)

![](https://images.velog.io/images/oneook/post/8d31b114-c440-4994-9d61-a4a120974c2d/12.png)

[배경 이미지 - Unsplash](https://unsplash.com/)

<br>

---

<br>

## 5. 남은 과제

### 🧹 리팩토링

일단 만드는 것은 달성했으니 이제 코드를 깔끔하게 정리하여 효율을 높이는 일이 남았다. 하지만 이게 만드는 것 보다 더 어려울 것 같다.

급하게 만들다보니 중복되는 요소도 많고, 변수 선언과 함수도 난무한다. DRY(Don't Repeat Yourself) 원칙에 맞게 리팩토링 하는 과정이 남았는데, 이 과정이 내가 발전할 수 있는 진짜 계기가 되지 않을까 생각한다.

> #### 개선 예정

- Encapsulation (Private Variables, Functions)
- Implementing JS Module Pattern or 👇🏻
- Organizing Properties in Prototypes
- Implementing CSS cross-browsing (e.g. web-kit)
- Undo / Redo (5 steps)

- More Vivid Color Range 👇

![](https://images.velog.io/images/oneook/post/323cb9af-d24a-4445-994d-f040d0a2e47a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.58.48.png)

RGB 모두 같은 범위 내에서 생성된 난수이기 때문에 쨍한 색감 대신 밋밋한 색상이 나오기도 한다. 트렌디한 파스텔톤 그라디언트를 목표로 만들었는데, 모호한 색이 적게 나오도록 비비드, 파스텔 톤의 색상 위주로 개선할 예정이다.
<br>

---

<br>

## 6. Log 💻

<br>

### 새로 발견된 문제점 (08/11)

- CORS 정책을 따르는 사이트의 이미지 URL은 CANVAS 출력이 안된다.

> #### CORS(Cross-Origin Resource Sharing)란?
>
> 보안 상의 이유로 JavaScript에서 보내는 교차 출처(자신과 다른 출처) HTTP 요청을 제한하기 위한 정책
> [출처] CORS (Cross-Origin Resource Sharing)가 무엇일까 | 작성자 이노그리드

---

### 사용성 개선 의견 (08/12)

**Boram Kim** 님께서 사용성 개선 의견(`issue`)을 보내주셨습니다. (감사합니다 🥰)
골자는 이미지 링크 값이 `falsy`일때 `alert`를 띄운 후 함수가 종료되는 `validation` 절차에서 불필요한 `alert`의 제거에 대한 의견입니다.

> ![](https://images.velog.io/images/oneook/post/88c8d2b2-59d3-4046-aaee-d37eb02ea532/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.52.57.png)

**답변**
소중한 의견 주셔서 정말정말 감사합니다. 불필요하게 `alert`을 띄워 사용자의 불편감을 야기하는 것은 말씀하신 바와 같이 좋은 방식이 아닌 것 같습니다. `alert` 다이얼로그 대신 버튼 위에 작게 툴팁 같은 메시지(e.g. '잘못된 형식의 주소입니다')를 띄우는 방법으로 교체하고, 이미지의 유효성을 비동기적으로 확인할 수 있는 별도의 validation process를 연구하겠습니다. 감사합니다 🙇🏻

<br>

---

<br>

## 🙏🏻 감사한 일

처음 만들어서 동기 채널에 처음으로 배포한 미니 프로젝트라서 별 기대는 안했다. 너무나 감사하게도 내가 만든 앱을 사용하여 블로그 썸네일로 활용하는 분들이 계셨다.

![](https://images.velog.io/images/oneook/post/4e9e01bb-0546-499e-9592-ee876b8cd416/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%204.13.01.png)

디자이너나 개발자나 자신이 만든 제품과 서비스를 기꺼이 사용해주시는 고마운 분들이 계시기에 직업적 보람을 느끼지 않을까 생각하게 된다. 이 자리를 빌어 다시 한번 감사한다는 말을 표현하고 싶다. 🤗

## 🙇🏻 감사한 일 2

![](https://images.velog.io/images/oneook/post/86736ef1-542a-4a48-bdbc-4297f3701b89/Artboard%201@2x.png)

소중한 분들의 관심 덕분에 썸네일 메이커 포스팅이 벨로그 주간 트렌딩 포스트 상단에 올라갔습니다. 🥰
제가 만든 컨텐츠가 많은 분들에게 보여질 수 있는 기회를 얻은 것에 그저 감사할 따름입니다.

<br>

---

<br>

## 👉🏻 [썸네일 메이커 구경하기](https://blog.wonkooklee.com/playground/thumbnail-maker/)

글과 이미지
Wonkook Lee ⓒ All Rights Reserved

> _Thumbnail-Maker is the simplest thumbnail generator for blogging. Thumbnail-Maker has been built as part of a toy project which in my very first phase of being a web developer._
> credit: `Wonkook Lee (@oneook)`
> contact: `const.wonkook@gmail.com`

<br />
<br />
