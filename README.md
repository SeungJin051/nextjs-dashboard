## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

# 1. Getting Started

## Folder structure

- /app: 애플리케이션에 필요한 모든 경로, 구성 요소, 논리가 포함되어 있습니다. 주로 여기에서 작업을 진행하게 됩니다.
- /app/lib: 재사용 가능한 유틸리티 함수, 데이터 가져오기 함수 등 애플리케이션에서 사용되는 함수가 포함되어 있습니다.
- /app/ui: 카드, 테이블, 양식 등 애플리케이션의 모든 UI 구성 요소를 포함합니다. 시간을 절약하기 위해 이러한 구성 요소를 미리 스타일 지정했습니다.
- /public: 이미지 등 애플리케이션의 모든 정적 자산을 포함합니다.
- 구성 파일next.config.js : 애플리케이션 루트 와 같은 구성 파일도 볼 수 있습니다 . 이러한 파일의 대부분은 .를 사용하여 새 프로젝트를 시작할 때 생성되고 사전 구성됩니다 create-next-app. 이 과정에서는 이를 수정할 필요가 없습니다.

## Placeholder Data

- JSON 형식이나 JavaScript 객체로 플레이스홀더 데이터 사용.
- mockAPI와와 같은 서비스 사용 가능.

이 프로젝트에서는 .에서 일부 플레이스홀더 데이터를 제공했습니다 app/lib/placeholder-data.ts. 파일의 각 JavaScript 객체는 데이터베이스의 테이블을 나타냅니다. 예를 들어, invoices 테이블의 경우: 데이터베이스 설정 장에서 이 데이터를 사용하여 데이터베이스에 시드(초기 데이터로 채우기)를 적용합니다.

## TypeScript

/app/lib/definitions.ts. 여기서는 데이터베이스에서 반환될 유형을 수동으로 정의합니다. 예를 들어, invoices 테이블에는 다음과 같은 유형이 있습니다.

TypeScript 개발자라면: 데이터 유형을 수동으로 선언하고 있지만 더 나은 유형 안전성을 위해 Prisma를 권장.

# 2. CSS Styling

## CSS Styling

- Global CSS
- Tailwind
- CSS Modules
- 라이브러리를 사용하여 clsx클래스 이름 전환 (`clsx`를 사용하여 클래스 이름을 조건부로 적용합니다.)

# 3. Optimizing Fonts and Images

- 글꼴 최적화를 하는 이유
  - 누적 레이아웃 이동Google에서 웹사이트의 성능과 사용자 경험을 평가하는 데 사용하는 지표에 영향을 미침
- Next.js는 모듈을 사용할 때 애플리케이션의 글꼴을 자동으로 최적화합니다 next/font. 빌드 시 글꼴 파일을 다운로드하여 다른 정적 자산과 함께 호스팅합니다.

```text
  다른 정적 자산과 함께 글꼴 파일을 호스팅하므로 추가 네트워크 요청이 발생하지 않습니다.
```

antialiased 클래스는 텍스트를 부드럽게 렌더링하는 데 사용됩니다.

## Add Font

- [Google Fonts](https://fonts.google.com/)
- [Type error: Cannot find module '@/app/ui/fonts'](https://github.com/vercel/next.js/discussions/60173)

## Images Optimizing

일반 HTML으로 이미지를 최적화 하려면 다음을 수동으로 수행해야 합니다.

- 다양한 화면 크기에서 이미지가 반응하는지 확인하세요.
- 다양한 장치에 맞게 이미지 크기를 지정하세요.
- 이미지가 로드될 때 레이아웃이 전환되는 것을 방지합니다.
- 사용자 뷰포트 밖에 있는 이미지를 지연 로드합니다.
  `<Image>`는 해당 기능을 자동으로 수행하며 WebP 와 같은 최신 형식으로 이미지 제공 합니다.

```text
크기가 지정되지 않은 이미지나 웹 글꼴은 브라우저가 추가 리소스를 다운로드해야 하기 때문에 레이아웃이 변경되는 일반적인 원인입니다.
```

- [이미지 최적화 문서](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [글꼴 최적화 문서](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [이미지로 웹 성능 개선(MDN)](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia)
- [웹 폰트(MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
- [Core Web Vitals가 SEO에 미치는 영향](https://vercel.com/blog/how-core-web-vitals-affect-seo)

## Creating Layouts and Pages

### 중첩 라우팅

Next.js는 폴더가 중첩 경로를 만드는 데 사용 되는 파일 시스템 라우팅을 사용합니다. 각 폴더는 URL 세그먼트 에 매핑되는 경로 세그먼트를 나타냅니다.

### Layout.tsx

Next.js에서 레이아웃을 사용하는 한 가지 이점은 탐색 시 페이지 구성 요소만 업데이트되고 레이아웃은 다시 렌더링되지 않는다는 것입니다. 이를 부분 렌더링 이라고 합니다.

## Navigating Between Pages

### 탐색 최적화

`<Link />`구성 요소
Next.js에서는 `<Link />`Component를 사용하여 애플리케이션의 페이지 간을 연결할 수 있습니다. JavaScript로 클라이언트 측 탐색이`<Link>` 가능합니다 .

<!-- nav에 사용하는 `<Link />>` name, href, icon `map()`으로 설정하기 -->

`<Link />>`를 사용하면 전체 새로 고침을 보지 않고도 페이지 사이를 탐색할 수 있어야 합니다. 애플리케이션의 일부는 서버에서 렌더링되지만 전체 페이지 새로 고침이 없으므로 웹 앱처럼 느껴집니다. 그 이유는 무엇일까요?

### 자동 코드 분할 및 사전 페칭

탐색 경험을 개선하기 위해 Next.js는 경로 세그먼트별로 애플리케이션을 자동으로 코드 분할합니다. 이는 기존 React SPA 와 다릅니다,

- 코드 분할
  - 현재 경로에 필요한 코드만 탐색에 로드됩니다.
- 사전 페칭(Prefetching)
  - Prefetching은 사용자가 경로를 방문하기 전에 백그라운드에서 경로를 미리 로드하는 방법입니다.
- 캐싱
  - Next.js에는 Router Cache 라는 메모리 내 클라이언트 측 캐시가 있습니다 . 사용자가 앱을 탐색할 때 미리 가져온 경로 세그먼트와 방문한 경로의 React Server Component Payload가 캐시에 저장됩니다.즉, 탐색 시 서버에 새로운 요청을 하는 대신 캐시를 최대한 재사용하여 요청 수와 전송되는 데이터 수를 줄여 성능을 향상시킵니다.
- [라우팅: 연결 및 탐색](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works)

### 패턴: 활성 링크 표시

일반적인 UI 패턴은 사용자에게 현재 어떤 페이지에 있는지 알려주기 위해 활성 링크를 표시하는 것입니다. 이를 위해 URL에서 사용자의 현재 경로를 가져와야 합니다. Next.js는 `usePathname()`경로를 확인하고 이 패턴을 구현하는 데 사용할 수 있는 후크를 제공합니다.

`usePathname()` `nav-links.tsx`후크이므로 클라이언트 컴포넌트로 전환해야 합니다. React의 `"use client"`지시문을 파일 맨 위에 추가한 다음, 다음 `usePathname()`을 가져옵니다

### clsx

clsx 장에서 소개한 라이브러리를 사용하면 링크가 활성화될 때 클래스 이름을 조건부로 적용할 수 있습니다.

## Setting Up Your Database

### 프로젝트 연결 및 배포

- [Next.js How to fix ERR_PNPM_OUTDATED_LOCKFILE?](https://stackoverflow.com/questions/76869615/next-js-how-to-fix-err-pnpm-outdated-lockfile)
- [Vercel 배포](https://nextjs-dashboard-rho-hazel-23.vercel.app/)
  - GitHub 저장소를 연결하면 메인 브랜치에 변경 사항을 푸시할 때마다 Vercel이 구성이 필요 없이 자동으로 애플리케이션을 다시 배포합니다. 풀 리퀘스트를 열면 즉시 미리 볼 수도 있습니다.이를 통해 배포 오류를 조기에 포착하고 팀원과 프로젝트 미리보기를 공유하여 피드백을 받을 수 있습니다.

### Postgres 데이터베이스 생성

다음으로, 데이터베이스를 설정하려면

- 대시보드로 계속을 클릭 하고 Vercel 프로젝트 대시보드에서 저장소 탭을 선택합니다.
- Connect Store → 새로 만들기 → Postgres → 계속을 선택합니다.
- .env. Vercel에서 복사한 내용을 붙여넣습니다.
- 마지막으로 터미널에서 `pnpm i @vercel/postgres`

### 데이터베이스에 시드하기

이제 데이터베이스가 생성되었으니 초기 데이터를 입력해 보겠습니다.

내부에는 `/app`라는 폴더가 있습니다 seed. 이 파일의 주석 처리를 해제합니다. 이 폴더에는 `Next.js Route Handler` 가 들어 있으며, `route.ts`이는 데이터베이스를 시드하는 데 사용됩니다. 이렇게 하면 브라우저에서 액세스하여 데이터베이스를 채우기 시작할 수 있는 서버 측 엔드포인트가 생성됩니다.

코드의 모든 내용을 이해하지 못하더라도 걱정하지 마세요. 개요를 알려드리자면, 스크립트는 SQL을 `placeholder-data.ts` 사용하여 테이블을 만들고, 테이블이 만들어진 후에는 파일 의 데이터를 사용하여 테이블을 채웁니다.

로컬 개발 서버가 실행 중인지 확인하고 `pnpm run dev`다음으로 이동하세요.`localhost:3000/seed`브라우저에서. 완료되면 브라우저에 "데이터베이스가 성공적으로 시딩되었습니다"라는 메시지가 표시됩니다. 완료되면 이 파일을 삭제할 수 있습니다.

### 데이터베이스 탐색

Vercel DB 사이드 내비게이션에서 데이터를 클릭하세요.
데이터베이스에 시드 한 테이블을 찾을 수 있음.
각 테입르을 선택하면 해당 레코드를 보고 항목이 파일의 데이터와 일치하는지 확인할 수 있습니다. `placeholder-data.ts`

### 쿼리 실행

Vercel "쿼리" 탭으로 전환하여 데이터베이스와 상호 작용할 수 있습니다. 이 섹션은 표준 SQL 명령을 지원합니다.

## Fetching Data

이제 데이터베이스를 만들고 시딩했으니, 애플리케이션에 대한 데이터를 가져오는 다양한 방법과 대시보드 개요 페이지를 구축하는 방법에 대해 알아보겠습니다.

### 데이터를 가져오는 방법 선택

- API 계층

  - API는 애플리케이션 코드와 데이터베이스 사이의 중간 계층입니다. API를 사용할 수 있는 몇 가지 경우가 있습니다.
  - API를 제공하는 제3자 서비스를 사용하는 경우
  - 클라이언트에서 데이터를 가져오는 경우, 데이터베이스 비밀이 클라이언트에 노출되는 것을 방지하기 위해 서버에서 실행되는 API 계층이 필요합니다.
  - Next.js에서는 Route Handlers를 사용하여 API 엔드포인트를 생성할 수 있습니다.

- 데이터베이스 쿼리
  풀스택 애플리케이션을 만들 때는 데이터베이스와 상호 작용하기 위한 로직도 작성해야 합니다. 관계형 데이터베이스 의 경우Postgres와 마찬가지로 SQL이나 [ORM](https://vercel.com/docs/storage/vercel-postgres/using-an-orm)을 사용하여 이 작업을 수행할 수 있습니다.

데이터베이스 쿼리를 작성해야 하는 몇 가지 경우는 다음과 같습니다.

- API 엔드포인트를 생성할 때 데이터베이스와 상호작용하는 로직을 작성해야 합니다.
  -React Server Components(서버에서 데이터를 가져오는)를 사용하는 경우, API 계층을 건너뛰고 데이터베이스 비밀을 클라이언트에 노출할 위험 없이 데이터베이스를 직접 쿼리할 수 있습니다.

### 서버 구성 요소를 사용하여 데이터 가져오기

기본적으로 Next.js 애플리케이션은 React Server Components를 사용합니다. Server Components로 데이터를 가져오는 것은 비교적 새로운 접근 방식이며 이를 사용하는 데는 몇 가지 이점이 있습니다.

- 서버 구성 요소는 약속을 지원하여 데이터 페칭과 같은 비동기 작업에 대한 더 간단한 솔루션을 제공합니다. 또는 데이터 페칭 라이브러리에 손을 대지 않고도 구문을 사용할 수 있습니다 `async/await`.` useEffect``useState `
- 서버 구성 요소는 서버에서 실행되므로 비용이 많이 드는 데이터 가져오기 및 로직을 서버에서 처리하고 결과만 클라이언트로 전송할 수 있습니다.
- 앞서 언급했듯이 서버 구성 요소는 서버에서 실행되므로 추가 API 계층 없이도 데이터베이스를 직접 쿼리할 수 있습니다.

### SQL 사용

[대시보드 프로젝트의 경우 Vercel Postgres SDK](https://vercel.com/docs/storage/vercel-postgres/sdk)를 사용하여 데이터베이스 쿼리를 작성합니다.그리고 SQL. 우리가 SQL을 사용할 몇 가지 이유가 있습니다:

- SQL은 관계형 데이터베이스를 쿼리하기 위한 산업 표준입니다(예: ORM은 내부적으로 SQL을 생성합니다).
- SQL에 대한 기본적인 이해가 있으면 관계형 데이터베이스의 기본을 이해하는 데 도움이 되며, 이를 통해 다른 도구에 지식을 적용할 수 있습니다.
- SQL은 다재다능하여 특정 데이터를 가져오고 조작하는 데 적합합니다.
- Vercel Postgres SDK는 [SQL 주입 으로부터 보호 기능을 제공합니다.](https://vercel.com/docs/storage/vercel-postgres/sdk#preventing-sql-injections)

### 대시보드 개요 페이지에 대한 데이터 가져오기

```tsx
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}
```

위의 코드에서:

- 페이지는 비동기 구성 요소 입니다. 이를 통해 데이터를 가져오는 데 사용할 수 있습니다 `await`.
- 데이터를 수신하는 3개의 구성 요소도 있습니다: `<Card>`, `<RevenueChart>`, 및 `<LatestInvoices>`. 이들은 현재 애플리케이션 오류를 방지하기 위해 주석 처리되어 있습니다.

### 데이터를 가져오는 중`<RevenueChart/>`

`<RevenueChart/> `구성 요소에 대한 데이터를 가져오려면 `fetchRevenue`함수를 가져와 `data.ts`구성 요소 내부에서 호출합니다.

```tsx
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data'; // ---- new

export default async function Page() {
  const revenue = await fetchRevenue(); // ---- new
  // ...
}
```
