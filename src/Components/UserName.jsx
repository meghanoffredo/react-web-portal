// remove double & single quotes from string
const UserName = () => {

    const getName = localStorage.getItem('name');
    const withoutQuotes = getName.replace(/['"]+/g, '');

    return withoutQuotes;
}

export default UserName;