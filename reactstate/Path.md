**첫번째 주차 목표**

```
나는 상태를 잘 관리하고 있는가?
반복적인 UI를 최소화하기 위해 노력하고있는가?
```

---

---

### 1. 리엑트에서 상태 최적화를 하기 위해서는 어떻게 해야할까?

**(1) 부주의한 부모, 독립적인 자식**

```
부주의한 부모와 독립적인 자식이란
자식 컴포넌트가 하는 일을 반드시 부모가 알 필요가 없다는 것을 말합니다.

부모가 항상 자식에게 무엇을 하라고 말할 필요가 없듯이
자식이 해야할 상태를 부모가 알 필요 없음을 이야기합니다.

예를 들면

**const App = () => {**
	const [isEdit, setIsEdit] = useState()

  const onPressEditButton = () => {
		setIsEdit(true)
	}

	return (
			**<input {...{isEdit, setIsEdit, onPressEditButton }/>**
	 )
**}**

----------------------------------------------

**const Input = ({isEdit, setIsEdit, onPressEditButton }) => {**
**}**

-----------------------------------------------

아래의 Input Component의 isEdit이라는 state는 App Component가 알아야하는 값이 아니기에
부모가 무엇을 하라고 이야기 할 필요가 없습니다.

따라서 이는 Input Component로 상태를 이동해야하며 isEdit을 변경하는 함수도 모두
Input Component로 독립적인 상태로 유지할 수 있습니다.

**const Input = ({isEdit, setIsEdit}) => {**
	const [isEdit, setIsEdit] = useState()

  const onPressEditButton = () => {
		setIsEdit(true)
	}
**}**

**** 해당 컴포넌트에서 props 전달이 이루어졌을 때 이 상태는 부모 컴포넌트가
알 필요가 있는 상태인가**

```

**(2) 상태 해체(상태 올리기) 고려하기**

```
반대로, 자식 컴포넌트와 관련된 상태이지만 부모가 알아야하는 상태도 존재합니다.
예를 들면 이런 상황입니다.

**cons TODOLIST = [**
  {
		id: 1,
		todo: "example-1",
	},
  {
    id: 2,
		todo: "example-2",
  }
**]**

**const App = () => {**
	 return <>
		{**TODOLIST.map((todo) => (
				<OneTodo {...todo} />
		)}**
   </>
**}

const OneTodo = ( {id, todo} ) => {**
  const [state, setState] = useState()

  const onPressStateButton = () => {
    setState(prev => !prev)
  }

  **return
}**

----------------------------------------------------------------------

이 상태에서 state는 OneTodo 내부에서만 존재하는 값이며 굳이 부모인 App이 알 필요가 없는
상태입니다. 그러나 만약 state이 값이 아래처럼 쓰인다면 어떻게 될까요?

**const App = () => {**
	 return <>
		{**TODOLIST.map((todo) => (
		<>
			<OneTodo {...todo} />
      {todo.state && ... }
		</>
		)}**
   </>
**}**

부모에 todo의 state값의 필요성이 생겼고 이를 위해선 부모의 todoList를 상태로 만들어 줄
필요가 있습니다.

이처럼 부모가 알아야하는 상태인지 확인하고 만약 부모가 알아야한다면
상태를 상단으로 올려주는 것을 lifting the state (상태 올리기)라고 합니다.

**const App = () => {
   const [todoList, setTodoList] = useState([**
	  {
			id: 1,
			todo: "example-1",
      state: false
		},
	  {
	    id: 2,
			todo: "example-2",
      state: true
	  }
   **])**


	 return <>
		{**TODOLIST.map((todo) => (
			<>
				<OneTodo {...todo} />
	      {todo.state && ... }
			</>
		)}**
   </>
**}**
```

**(3) 상태를 최소화하기**

```

개발자가 의도하지 않은 순간에 리랜더가 되거나 중복해서 리랜더가 된다면
이는 퍼포먼스에 영향이 끼칠 수 있는 기피해야하는 행위입니다.

이러한 의도치 않은 리랜더가 일어나는 것을 피하기 위해
관리해야하는 상태의 수를 줄이는 것은 당연히 필요한 것입니다.

----------------------------------------------------------------------

**안좋은 사례입니다.
result라는 state는 first와 second의 합으로 두 state가 변할 때 마다
re-rendering은 발생하고 굳이 상태가 아니어도 ui에 표현할 수 있습니다.**

**const Component: React.FC = () => {**
	const [first, setFirst] = useState<number>(0)
	const [second, setSecond] = useState<number>(0)
	const [result, setResult] = useState<number>(0)

	useEffect(() => setResult(first + second), [first, second])

	return <>
		<input type="number" value={first} onChange={(e) => setFirst(e.target.value)} />
		+
		<input type="number" value={second} onChange={(e) => setSecond(e.target.value)} />
		=
		{result}
	</>
**}**

----------------------------------------------------------------------

**좋은 사례입니다.
두 수가 변했을 때만 re-rendering이 일어나고 이 합산은 연산으로 표기하였습니다.**

**const Component: React.FC = () => {**
	const [first, setFirst] = useState<number>(0)
	const [second, setSecond] = useState<number>(0)
	return <>
		<input type="number" value={first} onChange={(e) => setFirst(e.target.value)} />
		+
		<input type="number" value={second} onChange={(e) => setSecond(e.target.value)} />
		=
		{first + second}
	</>
**}**

----------------------------------------------------------------------

**부적절한 예시일 수도 있지만 만약 두 상태의 값이
특정한 개념을 공유한다면 이렇게 object로 만드는 것이 상태를 더 관리하기 용이할 수
있습니다.**

**const Component: React.FC = () => {**

	const [numbers, setNumbers] = useState({
		first: 0,
    second: 0
	})

	const onChnageNumber = (e) => setNumbers((prev) => {
        ...prev
				[e.target.name]: e.target.value
	})}


	return <>
		<input type="number" value={first} name={first}
      onChange={onChnageNumber} />
		+
		<input type="number" value={second} name={second]
      onChange={onChnageNumber} />
		=
		{first + second}
	</>
**}**

```

### 2. 반복되는 UI패턴 자료구조로 반복하기

```

**아래는 대표적인 필터링 select의 ui를 표현한 것입니다.**

반복되는 UI를 자료구조를 사용하지 않는다면 반복되는 로직이 onHandler Event에
부여될 수 있고 css-in-js나 특정 component를 참조한 경우 가독성마저 엄청 떨어져 보이겠죠!

****
**const Filter = () => {**
	return (
	   <>
			<select>
				<option> 10개씩 보기
				<option> 50개씩 보기
			</select>
			<select>
				<option> 인기순
				<option> 판매순
				<option> 리뷰순
			</select>
			<select>
				<option> 오름차순
				<option> 내림차순
			</select>
		 </>
		)
**}**

--------------------------------------------------------------------------------

**이럴 때는 자료구조를 통해 반복되는 UI를 순회하여 표현할 수 있습니다.**

**const PRODUCT_TABLE_FILTER = [**
	{
		type: "limt"
		option: [
			{
				value: 10,
				text: "10개씩보기"
			}
		]
	},
	{},
	{}
**]

const Filter = () => {**
	return (
	   <>
			{**PRODUCT_TABLE_FILTER.map((filter) => (
				<select>
					{filter.option.map(()=>)}
				</select>
			)}**
		)
**}**

--------------------------------------------------------------------------------

```

### 3. 컴포넌트 구조 나누기에 대하여 생각해보기

```
컴포넌트를 나누는 기주는 개발자마다 상이할 수 있습니다.
그러나 반드시 나눠야하는 순간이 있을 수 있는데요!

아래는 컴포넌트를 나누기 위한 기준 중 가장 대표적인 사례들입니다.
아례 사례들을 파악하고 **각 사레마다 예시를 반드시 구현해보세요**

**(1) 가독성이 좋지 않을 때

(2) 관심사를 분리해야할 때

(3) 상태를 최적화 해야할 때

(4) 재사용되는 컴포넌트일 때**

```

---

---

### 과제: Amdin Toggle Page 만들기

**요구사항**

**react, css library, react-router-dom 구현을 위한 기본적인 라이브러리 외 그 어떠한 라이브러리도 사용할 수 없습니다**

**[1] 유저 목록 동적으로 생성하기**

- 고유번호, 이름, 생년월일, 연락처, 마지막 로그인으로 이루어진 200명의 user 목록을 동적으로 생성할 것, 연락처는 반드시 “010-0000-000”으로 이루어져야하며 생년월일을 “YYYY-MM-DD”형태로 파싱되어야 합니다.

---

**[2] 회원 목록 테이블 만들기**

위 데이터를 통해 표 형태로 구독이 가능한 회원 목록 보이기, 페이지네이션과 필터링도 구현해야합니다. 데이터에는 마지막 로그인, 생년월일, 연락처, 이름, 고유번호가 모두 노출되어야하며 전화번호의 중간 자리는 모두 \*\*\*로 보여야합니다.

ex)

1 | 김성용 | 2003-03-03 | 010-\*\*\*\*-1234 | 2023.03.02.13:52:36:22

---

**[3] 페이지 네이션 만들기**

- 하나의 페이지당 총 20개의 유저 목록이 보여져야하며 이는 5개 단위의 페이지 네이션으로 보여져야 합니다. 마지막 페이지는 [10]입니다.

**ex)**

- **<< < [1] [2] [3] [4] [5] > >>**

- 페이지 번호는 뒤로가기가 지원되어야하며 선택된 페이지에는 포커스가 이루져야합니다.

참고 링크 [https://velog.io/@ahsy92/React-Pagination-구현하기](https://velog.io/@ahsy92/React-Pagination-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)(페이지네이션) , https://goddaehee.tistory.com/304(css 스타일)

---

[4] **필터링 옵션 만들기**

- 20개씩 보기, 50개씩 보기
- 이름 순, 마지막 로그인 순, 생년월일 순으로 정렬하기
- 오름차순 내림차순 정렬하기

단, 모든 조건의 필터링은 반드시 모두 뒤로가기가 지원 되어야합니다.

**ex)**

**20개씩 → 50개씩 보기, 이름순, 오름차순 → 내림차순(뒤로가기) → 50개씩 보기, 이름순, 오름차순**

---

[5] **토글 슬라이드가 가능한 사이드 메뉴 만들기**

- **회원관리**
  - 회원목록 (위에서 구현한 회원 목록 표가 나와야함)
  - 회원등록 (빈화면, 구분만 가능하도록 “회원등록” 글씨만 정중앙에 노출)
- **상품관리**
  - 상품목록 (빈화면)
  - 상품등록 (빈화면)

**단, 모든 토글은 뒤로가기가 지원해야하며, 새로고침 및 뒤로가기 시 열어두었던
토글은 닫혀서 안됩니다.**

**(1)** 회원관리(열림) → 회원목록 → 회원등록 → 뒤로기기 → **회원관리가 열린상태로 회원목록**

**(2)** 회원관리(열림) → 회원목록 → 상품등록(열림) → 상품목록 → 뒤로가기 →
**회원관리, 상품관리가 모두 열려있어야 함**

---

**[1] 유저 목록 동적으로 생성하기**

- 고유번호, 이름, 생년월일, 연락처, 마지막 로그인으로 이루어진 200명의 user 목록을 동적으로 생성할 것, 연락처는 반드시 “010-0000-000”으로 이루어져야하며 생년월일을 “YYYY-MM-DD”형태로 파싱되어야 합니다.

랜덤 이름 생성 참고 페이지 : https://codechacha.com/ko/javascript-random-string/
