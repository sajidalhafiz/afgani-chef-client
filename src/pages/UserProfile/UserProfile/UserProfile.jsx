import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaCircleUser, FaPenToSquare } from "react-icons/fa6";

const UserProfile = () => {

    const fileRef = useRef();
    const nameRef = useRef();
    
    const { user, updateUser } = useContext(AuthContext);
    // console.log(user)
    const [enableEdit, setEnableEdit] = useState(false);

    const [avatar, setAvatar] = useState("https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-hand-draw-chef-cook-icon-vector-png-image_6702795.png");
    const [name, setName] = useState("Display name is not given.");
    const [email, setEmail] = useState("Email is not given.");

    useEffect(() => {
        if (user?.photoURL) {
            setAvatar(user.photoURL)
        }
        if(user?.displayName){
            setName(user.displayName)
        }
        if(user?.email){
            setEmail(user.email)
        }
    }, [user])

    const handleSubmit = e => {
        // e.preventDefault();
        const nameInput = nameRef.current.value;
        const imageInput = fileRef.current.value;
        if(nameInput){
            setName(nameInput)
        }
        if(imageInput){
            setAvatar(imageInput)
        }
        
        updateUser(name, avatar);
    }

    return (
        <>
            <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                <button onClick={() => setEnableEdit(!enableEdit)} className='border shadow rounded px-2 bg-slate-200 text-gray-500 hover:text-slate-400 cursor-pointer absolute top-6 right-6'>
                    {enableEdit ? 'cancel' : 'edit'}
                </button>
                {enableEdit ? <form onSubmit={handleSubmit} className="flex flex-col items-center py-10">
                    <input type="file" ref={fileRef} name="updatePhoto" className="choosePhoto" />
                    <input type="text" ref={nameRef} name="updateName" className='outline-none focus:border-slate-500 my-2 px-2 py-1 border-2 border-slate-400 rounded text-gray-900 dark:text-white' placeholder={name} />
                    <button className='inline-flex gap-3 items-center mt-2 px-3 py-1 text-sm text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'>Save</button>
                </form> :
                    <div className="flex flex-col items-center py-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg border-2 border-slate-400" src={avatar} alt="" />
                        <span type='text' className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
                    </div>}
            </div>
        </>
    );
};

export default UserProfile;