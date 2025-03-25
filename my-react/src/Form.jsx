import {useState} from "react";

export function Form() {
    const [student, setStudent] = useState({
        name: '근원',
        age: 26,
        number: 20191874,
    });

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setStudent((student) => ({
                ...student,
                [name]: value,
            })
        )
    }

    return (
        <>
            <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleFormChange}
                placeholder="이름"/>
            <input
                type="text"
                name="age"
                value={student.age}
                onChange={handleFormChange}
                placeholder="나이"/>
            <input
                type="text"
                name="number"
                value={student.number}
                onChange={handleFormChange}
                placeholder="학번"/>

            <p>{student.name}, {student.age}, {student.number}</p>
        </>
    )
}