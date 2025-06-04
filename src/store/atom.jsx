import { atom, selector } from 'recoil';

export const counterAtom = atom({
    key: 'counterAtom',
    default: 0
});

// 할 일 목록 정의
export const todoAtom = atom({
    key: 'todosAtom',
    default: [
        {
            id: 1,  // id 값
            title: '우진이 사료 주문하기',  // Todo 본체
            isDone: false,  // 실행 완료 여부
        },
        {
            id: 2,
            title: '수영 다녀오기',
            isDone: true,
        },
        {
            id: 3,
            title: '모험의서 읽기',
            isDone: true,
        },
        {
            id: 4,
            title: '소금빵 만들기',
            isDone: false,
        },
        {
            id: 5,
            title: '창문 청소하기 ',
            isDone: false,
        },
    ],
});

export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get: ({ get }) => {
        // 할 일 목록 마지막 할 일 가져오기
        const todo = get(todoAtom);
        return todo.at(-1)?.id ?? 0;
    },
});