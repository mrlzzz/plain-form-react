import { useState } from "react";
import UserProfile from "./UserProfile";
import { User } from "./shared/typings/User";
import { calculateAge } from "./shared/utils/calculateAge";

const App = () => {
    const [users, setUsers] = useState<User[]>([
        {
            firstName: "John",
            lastName: "Doe",
            birthDate: "03-02-1990",
        },
    ]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const handleSortByAge = (arr: User[]) => {
        const newArr = [...arr];
        newArr.sort(
            (a, b) => calculateAge(a.birthDate) - calculateAge(b.birthDate)
        );
        setUsers(newArr);
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-20">
            <div className="flex gap-4">
                <h1>Users:</h1>
                {users?.map((user, idx) => (
                    <UserProfile key={idx} user={user} index={idx} />
                ))}
            </div>
            <form className="max-w-7xl flex flex-col text-black [&>input]:px-4 [&>input]:py-1 [&>label]:text-white [&>label]:mt-4">
                <label>First Name</label>
                <input
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    type="text"
                />
                <label>Last Name</label>
                <input
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    type="text"
                />
                <label>Birth date</label>
                <input
                    onChange={(e) => {
                        setBirthDate(e.target.value);
                    }}
                    type="date"
                />
                <button
                    className="bg-white/80 my-4 p-2 font-bold text-gray-600 hover:brightness-90"
                    onClick={(e) => {
                        e.preventDefault();
                        setUsers([
                            ...users,
                            {
                                firstName: firstName,
                                lastName: lastName,
                                birthDate: birthDate,
                            },
                        ]);
                    }}
                >
                    Submit
                </button>
            </form>
            <button
                className="bg-white/80 my-4 p-2 font-bold text-gray-600 hover:brightness-90"
                onClick={() => {
                    handleSortByAge(users);
                }}
            >
                Sort
            </button>
        </div>
    );
};

export default App;
