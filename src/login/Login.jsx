
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLoginActions } from '../store/userLoginStore'
import Loading from '../loading/Loading'
import './Login.scss'
export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const userLoginStore = useSelector(store => store.userLoginStore);
    useEffect(() => {
        if (userLoginStore.userInfor == null) {
            if (localStorage.getItem("token")) {
                dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
            }
        } else {
            navigate('/Man')
        }
    }, [userLoginStore.userInfor])
    return (
        <div className='login_container'>
            {
                userLoginStore.loading ? <Loading></Loading> : <></>
            }
            <form onSubmit={(eventForm) => {
                eventForm.preventDefault(); // vô hiệu hành vi mặc định form
                
                console.log('logu1121212',eventForm.target.inputUserName.value,eventForm.target.inputPassword.value);
                if (eventForm.target.inputUserName.value == "" || eventForm.target.inputPassword.value == "") {
                    alert("vui lòng điền đầy đủ các trường")
                    return
                }
                dispatch(userLoginActions.login(
                    {
                        userName: eventForm.target.inputUserName.value,
                        password: eventForm.target.inputPassword.value
                    }
                ))
            }} className='login_form'>
                <p className='form_title'>Login Form</p>
                {/* input User Name */}
                <div className="form_input input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            username
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name='inputUserName'
                    />
                </div>
                {/* input User Name */}
                <div className="form_input input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            password
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name='inputPassword'
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

        </div>
    )
}
