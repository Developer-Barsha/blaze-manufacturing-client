import { useState, useEffect } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.email;
        const currentUser = { email: email };

        if (email) {
            fetch(`https://blaze-manufacturing.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data.token);
                    localStorage.setItem('accessToken', token);
                    console.log(data.token, 'token:-', token);
                });
        }
    }, [user, token])

    return [token];
}
export default useToken;