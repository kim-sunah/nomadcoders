# useEffect

---

특정 코드의 실행을 component가 맨 처음 render될 때로 제한하고 싶을 때 사용

```sh
(alias) function useEffect(effect: EffectCallback, deps?: DependencyList): void
import useEffect

- 두 개의 argument를 가지는 함수
- 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
- 두 번째는 [] 배열을 넣어줌
-> useEffect가 컴포넌트의 첫 번째 렌더 시점에 iRunOnlyOnce 함수 호출
그리고 상태를 변화시키면 iRunOnlyOnce는 호출되지 않음
즉, 한번만 렌더링 됨
단순화 하여 useEffect(() => {
console.log("CALL THE API")
},[]);
써도 됨

```
