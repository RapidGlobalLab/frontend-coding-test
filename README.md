## 문제1: react-query+Typescript

Typescript의 제네릭, 인터페이스를 활용하여 useQuery(GET), useMutation(POST) 함수를 만들어주세요.

# 요구사항

이미 설치되어있는 axios, @tanstack/react-query 라이브러리를 사용해주세요.
필요하다면 추가로 인터페이스를 작성하여 구현해도 됩ㄴ디ㅏ.
1. POST:로그인하기
   API : https://stage-backend.heyseller.kr/api/v1/auth/login POST
- Req DTO : LoginDTO ( name : rapid , password : rapid123! )
  로그인 성공 시 access_token 토큰이 반환됩니다.
  토큰을 원하는 곳에 저장하신 뒤 메인페이지(Route : /)로 이동시켜주세요.
  2번 문제부터 API 호출 시 header Authorization에 Bearer ${토큰} 를 넣어주셔야 합니다.

2. GET:목록 불러오기
   API : https://stage-backend.heyseller.kr/api/v1/product/list GET
- Req DTO: SearchProductListDTO
- Res DTO : PaginationResDTO<SimpleProductDTO>

# 데이터 예시
- DTO 를 참고해주세요.

## 문제2: 넘버 타입을 검증하는 유틸 함수

```ts
console.log(isNumber(42));      // true
console.log(isNumber(42));      // true
console.log(isNumber(3.14));    // true
console.log(isNumber(1e5));     // true
console.log(isNumber("42"));    // true
console.log(isNumber("3.14"));  // true
console.log(isNumber("abc"));   // false
console.log(isNumber(""));      // false
console.log(isNumber(NaN));     // false
console.log(isNumber(true));    // false
console.log(isNumber(['a']));   // false
```
해당 조건을 모두 만족하는 유틸함수를 작성해주세요.
유틸함수는 `src/utils/index.ts` 에 작성해주세요.

## 문제3: 상품 데이터 처리
당신은 온라인 쇼핑몰의 개발자로, 상품 목록을 관리하는 코드를 작성해야 합니다. 각 상품은 name(상품명), price(가격), quantity(수량) 속성을 가집니다.
# 데이터 예시

```ts
const products = [
  { name: "노트북", price: 1000000, quantity: 4 },
  { name: "키보드", price: 100000, quantity: 10 },
  { name: "마우스", price: 50000, quantity: 5 },
  { name: "모니터", price: 300000, quantity: 2 },
  { name: "헤드셋", price: 150000, quantity: 8 },
];
```

# 요구 사항

- 총 재고 가치 계산하기: map과 reduce 메소드를 사용하여 모든 상품의 총 재고 가치를 계산하세요. 상품의 재고 가치는 상품의 가격(price)과 수량(quantity)을 곱한 값입니다. 모든 상품의 재고 가치의 합을 구하세요.
- 특정 가격 이하 상품 찾기: filter와 map 메소드를 사용하여 가격이 100,000원 이하인 모든 상품의 이름을 배열로 반환하세요.

# 제출 형식

문제 1과 문제 2에 대한 답을 각각 Typescript 코드로 작성하세요.
주어진 products 배열을 사용하세요.
