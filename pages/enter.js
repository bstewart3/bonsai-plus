import { auth, googleAuthProvider } from '../lib/firebase';

export default function EnterPage({ }) {
    const user = null;
    const username = null;


    return (
        <main>
            {user ?
                !username ? <UsernameForm/> : <SignOutButton/>
                :
                <SignInButton />

            }
        </main>
    );
}


//Sign in with Google button
function SignInButton() {

}

// Sign out Button
function SignOutButton() {

}

//username
function UsernameForm() {

}