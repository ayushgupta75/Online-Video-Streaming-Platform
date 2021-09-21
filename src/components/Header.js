import React ,{ useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { auth ,provider} from '../firebase'
import { selectUserName, selectUserPhoto,setUserLogin ,setSignOut} from '../features/user/userSlice';
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router';

export default function Header() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email:user.email,
                    photo: user.photoURL
                }))
                history.push("/")
            }
        })

    },[])

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>{
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email:user.email,
                photo: user.photoURL
            }))
            history.push("/")
        })
    }

    const signOut = () =>{
        auth.signOut().then(() => {
            dispatch(setSignOut());
            history.push("/login")
        })
    }
    return (
        <Nav>
            <Link to="/"><Logo  src="/images/disney-hotstar-logo.svg" /></Link>
            {
                !userName ? 
                <LoginContainer>
                <Login onClick={signIn}>Login</Login>
                </LoginContainer>
                :

            <>
                <NavMenu>
                    <Link to="/">
                        <img src="/images/home-icon.svg" />
                        <span>HOME</span>
                        
                    </Link>
                    <Link>
                        <img src="/images/search-icon.svg" />
                        <span>SEARCH</span>
                    </Link>
                    <Link>
                        <img src="/images/watchlist-icon.svg" />
                        <span>WATCHLIST</span>
                    </Link>
                    <Link>
                        <img src="/images/original-icon.svg" />
                        <span>ORIGINALS</span>
                    </Link>
                    <Link>
                        <img src="/images/movie-icon.svg" />
                        <span>MOVIE</span>
                    </Link>
                    <Link>
                        <img src="/images/series-icon.svg" />
                        <span>SERIES</span>
                    </Link>

                </NavMenu>
                <UserImg onClick={signOut} src="/images/20191104_134845.jpeg" />
            </>
            }
        </Nav>
    )
}


const Nav = styled.div`
height: 70px;
background: #090b13;
display: flex;
align-item: center;
padding: 0 36px;
overflow-x: hidden;
`

const Logo = styled.img`
    width: 90px;
    margin-top: 20px;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: white;
        text-decoration: none;

        img {
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0px;
                right: 0px;
                bottom: -6px;
                opacity:  0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }

        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    padding: 10px

`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    margin-top: 25px;
    margin-bottom: 10px;
    padding: 6px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;
    align-items: center;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`

const LoginContainer = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`
