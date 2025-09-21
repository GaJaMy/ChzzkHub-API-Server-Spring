# ChzzkHub-API-Server-Spring

치지직(Chzzk) 방송 합방 멤버 구하기 플랫폼의 Spring 기반 API 서버 프로젝트입니다.  
스트리머들이 보다 쉽게 합방 멤버를 모집하고, 크루/친구 관리 및 메시지 전송을 지원합니다.

---

## 🚀 기술 스택
- **Framework**: Spring Boot 3.5.5
- **Language**: Java 17
- **Database**: MySQL 8.0+
- **Cache & Session**: Redis
- **Build Tool**: Gradle
- **Frontend**: Thymeleaf + Bootstrap 5 + JavaScript
- **API 문서화**: Spring REST Docs (예정)
- **인증/인가**: JWT 기반

---
## 📌 주요 기능

### 1. 사용자(User)
- 치지직 스트리머 인증
- 로그인
- 로그아웃

### 2. 크루(Crew)
- 크루 생성 및 관리
- 크루원 초대 / 삭제
- 크루 해체
- 크루 공지 등록

### 3. 친구(Friend)
- 친구 초대 및 수락
- 친구 삭제
- 1:1 메시지 전송

### 4. 합방(Collaboration / Co-Streaming)
- 합방 방 생성
    - **크루 합방**: 크루 단위로 합방 생성
    - **번개 합방**: 즉석 합방(친구들만 초대 가능능) 생성
    - **공개 합방**: 전체 공개 합방 모집
- 초대 메시지 전송
    - **치즈허브(내부 플랫폼)**
    - **디스코드 Webhook 연동**
- 합방 정보 관리
    - 카테고리, 인원 수, 일정, 공지, 상세 내용 등록
- 상태 관리
    - 합방 모집 / 취소 / 완료 처리

---

## 🎨 프론트엔드 기능(Cursor AI로 개발)

### 웹 페이지 구성
- **메인 페이지** (`/`): 플랫폼 소개 및 주요 기능 안내
- **로그인 페이지** (`/login`): 치지직 스트리머 인증 및 로그인
- **크루 관리** (`/crew`): 크루 생성, 관리, 멤버 초대/삭제
- **친구 관리** (`/friend`): 친구 추가, 메시지 전송, 상태 관리
- **합방 관리** (`/collaboration`): 합방 생성, 초대, 상태 관리

### UI/UX 특징
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **모던한 UI**: Bootstrap 5 기반의 깔끔한 디자인
- **직관적인 네비게이션**: 사용자 친화적인 메뉴 구성
- **실시간 피드백**: 로딩 상태, 알림 메시지, 상태 표시
- **애니메이션 효과**: 부드러운 전환 효과 및 호버 애니메이션

### 주요 컴포넌트
- **카드 기반 레이아웃**: 정보를 구조화된 카드로 표시
- **모달 다이얼로그**: 폼 입력 및 상세 정보 표시
- **드롭다운 메뉴**: 액션 버튼 및 필터링 옵션
- **배지 시스템**: 상태 및 카테고리 표시
- **아바타 시스템**: 사용자 프로필 이미지 표시

---

## DB 설계

### 📊 Entity Relationship Diagram
**ERDCloud에서 직접 보기**: [ChzzkHub Database Schema](https://www.erdcloud.com/p/xgAq475HHrSBvQLC9)
- 업데이트
  - 2025-09-21 특정 테이블에 생성시간, 업데이트 시간 업데이트


### 📊 주요 테이블 구성

- **USERS**: 사용자 정보 (치지직 스트리머)
- **CREW**: 크루 정보 및 관리
- **CREW_REQUEST**: 크루 가입 요청
- **CREW_MEMBER**: 크루 멤버십
- **FRIEND**: 친구 관계
- **FRIEND_REQUEST**: 친구 요청
- **COLLABORATION**: 합방 정보
- **COLLABORATION_MEMBER**: 합방 참여자
- **COLLABORATION_REQUEST**: 합방 요청


## 🚀 실행 방법

### 1. 프로젝트 클론 및 빌드
```bash
git clone [repository-url]
cd ChzzkHub-API-Server-Spring
./gradlew build
```

### 2. 애플리케이션 실행
```bash
./gradlew bootRun
```

### 3. 웹 브라우저에서 접속
- **메인 페이지**: http://localhost:8080
- **로그인 페이지**: http://localhost:8080/login
- **크루 관리**: http://localhost:8080/crew
- **친구 관리**: http://localhost:8080/friend
- **합방 관리**: http://localhost:8080/collaboration

### 4. 개발 환경 설정
- **IDE**: IntelliJ IDEA 또는 Eclipse
- **Java**: JDK 17 이상
- **Gradle**: 프로젝트에 포함된 Gradle Wrapper 사용

---

## 📁 프로젝트 구조

```
src/
├── main/
│   ├── java/com/gajamy/ChzzkHub/
│   │   ├── ChzzkHubApplication.java
│   │   └── controller/
│   │       └── WebController.java
│   └── resources/
│       ├── application.properties
│       ├── static/
│       │   ├── css/
│       │   │   └── style.css
│       │   └── js/
│       │       └── main.js
│       └── templates/
│           ├── index.html
│           ├── login.html
│           ├── crew.html
│           ├── friend.html
│           ├── collaboration.html
│           └── layout.html
└── test/
    └── java/com/gajamy/ChzzkHub/
        └── ChzzkHubApplicationTests.java
```

---

## 🔧 개발 도구 및 라이브러리

### Frontend Dependencies
- **Bootstrap 5.3.0**: CSS 프레임워크
- **Font Awesome 6.0.0**: 아이콘 라이브러리
- **Thymeleaf**: 서버사이드 템플릿 엔진

### Backend Dependencies
- **Spring Boot Starter Web**: 웹 애플리케이션 개발
- **Spring Boot Starter Thymeleaf**: 템플릿 엔진
- **Spring Boot Starter Data JPA**: 데이터베이스 연동
- **H2 Database**: 인메모리 데이터베이스 (개발용)
- **Lombok**: 코드 간소화


