# qetta MVP

개인신용대출 매칭 플랫폼 - AI 기반 신용분석 및 맞춤형 대출상품 추천

## 프로젝트 개요

qetta는 소득금액증명원 PDF를 업로드하면 AI가 자동으로 신용점수를 분석하고, 사용자에게 최적의 대출 상품을 추천하는 핀테크 플랫폼입니다.

### 주요 기능

- **PDF 업로드**: 소득금액증명원 드래그 앤 드롭 업로드
- **AI 신용분석**: OCR 및 AI 기반 자동 신용점수 산출
- **맞춤형 추천**: 개인별 최적의 대출 상품 매칭
- **2-Tier 서비스**:
  - **무료**: 기본 신용점수 범위 + 일반 대출 추천
  - **프리미엄 (₩29,000)**: 정확한 점수 + 대출 가능성 + 상세 리포트

## 기술 스택

- **Frontend**: Next.js 16, React, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub (코드 저장소)
- **Version Control**: Git

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 프로젝트 구조

```
qetta-mvp/
├── app/                 # Next.js App Router
│   ├── page.tsx        # 랜딩 페이지
│   ├── layout.tsx      # 루트 레이아웃
│   └── globals.css     # 글로벌 스타일
├── components/          # 재사용 가능한 컴포넌트
├── lib/                # 유틸리티 함수
├── hooks/              # 커스텀 React Hooks
└── types/              # TypeScript 타입 정의
```

## 개발 로드맵

### Phase 1: MVP (현재)
- [x] GitHub 저장소 생성
- [x] Next.js 프로젝트 초기화
- [x] 랜딩 페이지 디자인
- [ ] PDF 업로드 기능
- [ ] OCR 엔진 연동
- [ ] 신용점수 분석 로직
- [ ] 결제 시스템 (무료/프리미엄)

### Phase 2: 데이터베이스 & 인증
- [ ] Supabase 연동
- [ ] 사용자 인증 (이메일/비밀번호)
- [ ] 데이터베이스 스키마 구축

### Phase 3: 배포 & 모니터링
- [ ] Vercel 배포
- [ ] 에러 모니터링
- [ ] 성능 최적화

## 환경 변수

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```bash
# GitHub
GITHUB_PERSONAL_ACCESS_TOKEN=your_token

# Supabase (추후 추가)
# SUPABASE_URL=your_url
# SUPABASE_SERVICE_ROLE_KEY=your_key

# Vercel (추후 추가)
# VERCEL_TOKEN=your_token
```

## 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 라이선스

© 2025 qetta. All rights reserved.

---

**Built with**: Next.js 16 + TypeScript + Tailwind CSS
**Powered by**: AI & Claude Code
