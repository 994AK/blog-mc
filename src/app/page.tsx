"use client"
import {useUser} from "../../services/useUser";
import React from "react";

interface UserListProps {
    name: string;
}

const ListLoading = () => {
    return (
        <div className='flex flex-col gap-5 p-2 w-2/5'>
            <span className='rounded h-8 bg-gradient-to-r from-cyan-100 to-purple-500 animate-gradient-x'></span>
            <span className='rounded h-8 bg-gradient-to-r from-cyan-200 to-purple-500 animate-gradient-x'></span>
            <span className='rounded h-8 bg-gradient-to-r from-cyan-300 to-purple-500 animate-gradient-x'></span>
            <span className='rounded h-8 bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient-x'></span>
            <span className='rounded h-8 bg-gradient-to-r from-cyan-500 to-purple-500 animate-gradient-x'></span>
        </div>
    )
}

const UserList: React.FC<UserListProps> = ({ name }) => {
    return <div className='flex flex-col rounded border p-2'>
        <span className='rounded'>{name}</span>

    </div>
}

const User = () => {
    const {user, isLoading} = useUser('api/minecraft/state')

    if (isLoading) return <ListLoading />;

    return (
        <div className='flex flex-col gap-5 w-2/5'>
            {user?.data.players.list.map((item: string, index: number) => (
                <UserList key={index} name={item} />
            ))}
        </div>
    )
}

export default function Home() {
    return (
        <>
            <div className='m-4'>
                <div className='pb-5'>服务器在线人数:</div>
                <User />
            </div>
        </>
    )
}
