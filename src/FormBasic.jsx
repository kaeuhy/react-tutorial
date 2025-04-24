import { useForm } from 'react-hook-form';

export default function FormBasic() {
    const defaultValues = {
        name: '홍길동',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    };

    const { register, handleSubmit,
        formState: { errors} } = useForm({
        defaultValues
    });

    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            {/* 검증 규칙 등을 폼에 연결 */}
            <div>
                <label htmlFor="name">이름::</label><br/>
                <input id="name" type="text"
                       {...register('name', {
                           required: '이름은 필수 입력 항목입니다.',
                           maxLength: {
                               value: 20,
                               message: '이름은 20자 이내로 작성해주세요.'
                           }
                       })}
                />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">성별:</label><br/>
                <label>
                    <input type="radio" value="male"
                           {...register('gender', {
                               required: '성별은 필수입니다.',
                           })} />남성
                </label>
                <label>
                    <input type="radio" value="female"
                           {...register('gender', {
                               required: '성펼은 필수입니다.',
                           })} />여성
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">이메일 주소:</label><br/>
                <input id="email" type="email"
                       {...register('email', {
                           required: '이메일 주소는 필수 입력사항입니다.',
                           pattern: {
                               value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                               message: '이메일 주소 형식이 잘못되었습니다.'
                           }
                       })} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">비고:</label><br/>
                <textarea id="memo"
                          {...register('memo', {
                              required: '비고는 필수 입력 항목입니다.',
                              minLength: {
                                  value: 10,
                                  message: '비고는 10자 이상으로 작성해주세요.'
                              }
                          })} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">제출하기</button>
            </div>
        </form>
    );
}