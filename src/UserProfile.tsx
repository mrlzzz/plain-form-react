import { useContext } from "react";
import { User } from "./shared/typings/User";
import { calculateAge } from "./shared/utils/calculateAge";
import { DefaultContext } from "./context/DefaultContext";

type UserProfileProps = {
    user: User;
    index: number;
};

const UserProfile = ({ user, index }: UserProfileProps) => {
    const { firstName, lastName, birthDate } = user;
    const age = calculateAge(birthDate);
    const s = useContext(DefaultContext);

    return (
        <div className="border rounded-md p-2">
            <h1>{index}</h1>
            <h1>Name: {firstName}</h1>
            <h1>Last name: {lastName}</h1>
            <h1>Age: {age}</h1>
            <p>{s?.state}</p>
        </div>
    );
};

export default UserProfile;
