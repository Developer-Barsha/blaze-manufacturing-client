import { useState, useEffect } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.email;
        const currentUser = { email: email };

        if (email) {
            fetch(`https://blaze-manufacturing.herokuapp.com/users/${user.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('accessToken', token);
                    setToken(data?.token);
                    console.log('inside use token', data)
                });
        }
    }, [user, token])

    return [token];
}
export default useToken;