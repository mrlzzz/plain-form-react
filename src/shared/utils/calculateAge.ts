export const calculateAge = (birthDate: string): number => {
    // JavaScript's Date object can understand (YYYY-MM-DD)
    // This one: DD/MM/YYYY

    const [day, month, year] = birthDate.split("/");

    const date = new Date(year + "-" + month + "-" + day);
    const ageInMilliseconds = Date.now() - date.getTime();
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    return Math.floor(ageInMilliseconds / millisecondsInYear);
};
