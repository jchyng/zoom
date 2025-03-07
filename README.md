# Noom

Zoom Clone using NodeJS, WebRTC and Websocket.

## STEP

1. node init -y
2. npm i nodemon -D
3. git init .
4. npm i @babel/core @babel/cli @babel/node -D
5. npm i @babel/preset-env -D
6. npm i express
7. npm i pug
8. npm i socket.io

## 🌈 chatting process

1. 채팅방 입장
  - socket 연결
  - 안읽은 메세지 전부 읽음 처리
    - 현시점에 해당 유저가 받은 모든 메세지는 읽음 처리로 수행하고 이는 배치로 돌린다.
    - 서버 로직 상에서 socket으로 접속하면 모든 메세지는 읽음으로 처리한다.
  - redis에서 최신 메세지 조회
  - 메세지 양이 적은 경우 mongoDB에서 추가 조회
  - 스크롤 시 페이징처럼 일부 메세지만 mongoDB에서 조회
2. 메세지 전송
  - redis에 저장
  - socket 전송
  - 오프라인의 경우 fcm
  



1. 지역 별 실시간 채팅방
2. 여행자, 현지인 구분