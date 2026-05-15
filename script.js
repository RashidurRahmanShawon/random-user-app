const getUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const { email, name: { first }, picture: { large } } = data.results[0];
        document.getElementById('email').textContent = `Email: ${email}`;
        document.getElementById('name').textContent = `Name: ${first}`;
        document.getElementById('picture').src = large;
    }
    catch (err) {
        console.error('error fetching user data:', err);
    }

}
