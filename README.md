# 낮에 뜨는 달
![KakaoTalk_20231030_205402465](https://github.com/rhdmswls12/the-moon/assets/71330240/bc53be62-fa29-4c6b-a132-4991da031c99)
레포지토리: <a href="https://github.com/rhdmswls12/the-moon">the-moon</a>

## 프로젝트 소개
* 불빛으로 가득했던 도심의 야경을 바라보며 사용자가 원하는 시간대의 배경을 설정하고 그 날의 할 일과 일기를 기록할 수 있는 공간을 구현하고자 했습니다.
* 일반적으로 사용하는 다크 모드, 라이트 모드에서 더 나아가 일출, 낮, 일몰, 밤 등의 모드를 제공하여 사용자가 다양한 배경을 경험할 수 있도록 했습니다.
* 감성적인 화면 구성을 위해 도심 이미지와 지하철을 배치했고, linear-gradient 효과를 적용해 실시간으로 변하는 하늘 배경을 연출했습니다.

## 개발환경
#### 기술 스택
<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
</div>

#### 사용 툴
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white" />


## 프로젝트 사용 방법
#### [사이트 접속]
![ezgif com-video-to-gif](https://github.com/rhdmswls12/the-moon/assets/71330240/eafcc43d-aa5b-49ec-a05e-bf5277e3532f)
* 애니메이션을 적용하여 실시간으로 변하는 하늘과 다리 위로 이동하는 지하철을 표현했고, 도심의 모습을 구현했습니다.
* 화면 중앙에는 '투두 리스트'와 '일기' 아이콘이 있습니다.

#### [Todo List]
![ezgif com-crop](https://github.com/rhdmswls12/the-moon/assets/71330240/c59beb6b-7538-4414-825b-5489e50a8043)

* '투두 리스트' 아이콘을 클릭하면 /todo로 넘어가 오늘 해야 할 일을 확인할 수 있습니다.
* 아래에 있는 녹색 '+' 버튼을 클릭하면 할 일을 생성할 수 있는 input란이 생기며, 해당 기능을 통해 할 일을 추가할 수 있습니다.
* 해야 할 일을 완료했을 경우 토글 버튼을 누르면 버튼의 모양과 색상이 변경되어 할 일이 완료됐음을 표시해줍니다.

![ezgif com-crop (1)](https://github.com/rhdmswls12/the-moon/assets/71330240/fed1d8d7-9046-4242-93f3-9f5eb1398e53)

* 잘못 작성된 할 일은 삭제 버튼을 통해 삭제할 수 있습니다.

![ezgif com-crop (2)](https://github.com/rhdmswls12/the-moon/assets/71330240/d00a1bab-9b6f-4c56-89f9-ec625d94664c)

* 할 일을 수정해야 할 경우 수정 버튼을 눌러 해당 내용을 수정할 수 있으며 만약 수정할 필요가 없으면 취소 버튼을, 수정이 완료되면 체크 표시를 통해 수정을 마무리할 수 있습니다.
  
#### [Diary]
![ezgif com-crop (3)](https://github.com/rhdmswls12/the-moon/assets/71330240/6f4c3ba0-0e7a-4d0b-8c99-26290ac3bb8c)

* '일기' 아이콘을 클릭하면 /diary로 넘어가 그 날의 기록을 작성할 수 있으며 저장된 일기들을 월 별로 확인할 수 있습니다.

![ezgif com-crop (4)](https://github.com/rhdmswls12/the-moon/assets/71330240/9c879cff-fe78-41c2-b33a-8b9cfedc9170)

* 즐겨 찾기를 원한다면 상단에 있는 즐겨찾기 버튼을 클릭하여 목록에서 즐겨 찾기 아이콘으로 표시된 것을 확인할 수 있습니다.

#### [전환]
![ezgif com-crop (5)](https://github.com/rhdmswls12/the-moon/assets/71330240/b3a961a3-ecd2-4851-a980-8e2a0d4c8318)

* 메인 페이지, 투두 리스트 페이지, 일기 페이지 등 각각의 페이지에서 원하는 페이지로 이동할 수 있도록 구성했습니다.

## 프로젝트 회고
* Context API, Theme Provider, localStorage, styled components 등 다양한 기술들을 활용해 볼 수 있었던 뜻 깊은 프로젝트였습니다.
* 추후에는 지금의 네 가지 모드로만 배경을 설정하는 것이 아닌, 색상 팔레트를 보여주어 사용자가 직접 색을 골라 적용할 수 있도록 수정하고자 합니다.