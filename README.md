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
    - **번개 합방**: 즉석 합방 생성
    - **공개 합방**: 전체 공개 합방 모집
- 초대 메시지 전송
    - **치즈허브(내부 플랫폼)**
    - **디스코드 Webhook 연동**
- 합방 정보 관리
    - 카테고리, 인원 수, 일정, 공지, 상세 내용 등록
- 상태 관리
    - 합방 모집 / 취소 / 완료 처리

---

## DB 설계

### 사용자
- id: 치지직 고유 스트리머 아이디
- profile: 프로필 url
- follower: 팔로워 수
- created_at: 스트리머 인증 시간
- updated_at: 사용자 정보 업데이트 시간

### 크루
- uuid: 크루를 구분하기 위한 고유 id
- notification : 공지사항 내용

### 친구
- 아직 고민중


