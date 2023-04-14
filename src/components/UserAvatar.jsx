import { useContext, useEffect } from "react"
import { CurrentUserContext } from "../App"
import { useState } from "react"
import * as api from "../api"


export default function UserAvatar(){
    const [users, setUsers] = useState()
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const [visible, setVisible] = useState(false)
    
    useEffect(()=>{
        api.getUsers().then((usersData)=>{
            console.log("Fetched Users: ", usersData)
            setUsers(usersData)
        })
    }, [])
    console.log(users)
    return(
        <>  
            <div className="popup">
                <img 
                    src={currentUser.avatar_url} 
                    alt={currentUser.username} 
                    onClick={()=>{
                        setVisible(!visible);
                    }}
                />
                <div className={`popup-content ${visible ? "show" : null}`}>
                    <span><b>List of users:</b></span>

                    {users ? users.map((user)=>{
                        const {username, avatar_url} = user;
                        return (
                            <div 
                                className="user"
                                onClick={()=>{
                                    setCurrentUser(user)
                                }}
                            >
                                <img src={avatar_url} alt={`${username}'s Avatar`} />
                                <span>{username}</span>
                            </div>
                        )
                    }) : <span>Loading...</span>}
                </div>
            </div>
        
            <style jsx="true">{`
                img{
                    aspect-ratio: 1/1;
                    width: 50px;
                    cursor: pointer;

                }

                .popup{
                    position: relative;
                    display: inline-block;
                }
                .popup-content {
                    visibility: hidden;
                    width: 300px;
                    background-color: #555;
                    color: #fff;
                    text-align: center;
                    border-radius: 6px;
                    padding: 8px 5px;
                    position: absolute;
                    z-index: 1;
                    left: 50%;
                    margin-left: -80px;
                    font-size: 1.4rem;

                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .user {
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    display: flex;
                    justify-content: left;
                    gap: 5px;
                }

                .user:hover {
                    border: 2px solid black;
                    border-radius: 10px;
                }
                .popup .show {
                    visibility: visible;
                    -webkit-animation: fadeIn 1s;
                    animation: fadeIn 1s
                }
                  
                /* Add animation (fade in the popup) */
                @-webkit-keyframes fadeIn {
                    from {opacity: 0;}
                    to {opacity: 1;}
                }
                  
                @keyframes fadeIn {
                    from {opacity: 0;}
                    to {opacity:1 ;}
                }
            `}</style>
        </>
    )   
}