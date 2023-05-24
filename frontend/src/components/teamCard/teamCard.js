import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import axios from 'axios';

const TeamCard = ({ member }) => {
    const [team, setTeam] = useState(member);

    useEffect(() => {
        const GITHUB_APIURL = "https://api.github.com/users/";
        
        async function getUserDetails(username) {
            try {
                const { data } = await axios(GITHUB_APIURL + username);
                setTeam(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        getUserDetails(member.github_username)
    }, [member])

    const { name, bio, html_url, avatar_url } = team;

    return (
        <div className='flex flex-col items-center justify-between h-[350px]'>
            <div className='w-[250px] bg-BubbleBackground rounded-lg shadow shadow-BoxShadow p-6'>
                    <p className='bold text-center text-[#000000] capitalize text-xl mb-3 font-bold font-space-grotesk'>{name}</p>
                    <p className='bold text-center text-[#71717A] text-sm'>{bio}</p>
            </div>
            <a
                href={html_url || ''}
                target='_blank'
                rel='noreferrer'
                className='grid place-items-center'>
                <div className='w-[200px] rounded-[50%]'>
                    <Image 
                        src={avatar_url || ''}
                        alt={name}
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-full"
                    />
                </div>
            </a>
        </div>
    )
}

export default TeamCard;
