# 뉴베리프 브랜드 사이트 (neuvelif.com)

판매하지 않는 브랜드 소개 사이트입니다. [Astro](https://astro.build)로 만든 정적 사이트이며, `main` 브랜치에 올리면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

## 폴더 안내

| 위치 | 내용 |
|---|---|
| `src/pages/` | 페이지 (주소와 폴더 이름이 같습니다) |
| `src/components/` | 머리·바닥, 구매처, 시술 선택 같은 공통 부품 |
| `src/data/` | 구매처 링크(`stores.ts`), 홈 슬라이드·시술 그룹(`home.ts`), 시술별 가이드(`procedures-laser.json`) |
| `src/site.ts` | 회사 정보, 이메일, 주소 경로 |
| `src/schema.ts` | 검색엔진·AI용 구조화 데이터 |
| `public/` | 이미지, 파비콘 |

## 임시 주소와 정식 오픈

- 지금은 임시 주소(neuvelif.github.io) 기간이라 검색엔진 수집을 막아 두었습니다 (`PUBLIC_STAGING`).
- 정식 오픈 때 `.github/workflows/deploy.yml`의 `PUBLIC_STAGING`을 `'false'`로, `SITE_URL`을 `https://neuvelif.com`으로 바꾸고 도메인을 연결합니다.

## 내 컴퓨터에서 미리 보기

```
npm install
npm run dev
```
