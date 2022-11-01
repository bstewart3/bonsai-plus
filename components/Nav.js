import Link from "next/link";

//top navbar

export default function Navbar() {
    const user = true;
    const username = true;


    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href='/'>
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                    {/* user is signed-in and has username */}
                    {username && (
                        <>
                            <li>
                                <Link href='/admin'>
                                    <button className="btn-blue">Write Posts</button>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${username}`}>
                                    <img src={user?.photoURL}/>
                                </Link>
                            </li>
                        </>
                    )}


                    {/* user has not signed-in or has not created a username */}
                    {!username && (
                        <li>
                            <Link href='/enter'>
                                <button className="btn-blue">Log in</button>
                            </Link>
                        </li>
                        )}                    
                
            </ul>
        </nav>
    )
}