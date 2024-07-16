import { useEffect, useState } from 'react';
import AuthStateContext from '../Context/AuthStateContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../configs/firestore';

function AuthStateProvider({ children }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubcribes = onAuthStateChanged(auth, (currentUserState) => {
            if (currentUserState) {
                console.log('AuthStateProvider:', currentUserState);
                setUser(currentUserState);
                return;
            } else {
                setUser(null);
            }
        });
        return () => unsubcribes();
    });
    return <AuthStateContext.Provider value={[user]}>{children}</AuthStateContext.Provider>;
}

export default AuthStateProvider;
