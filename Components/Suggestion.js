import React, { useEffect, useState } from 'react'
import faker from '@faker-js/faker';

function Suggestion() {

    const [Suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        const suggestion = [...Array(5)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))

        setSuggestion(suggestion);
    }, []);

    return (
        <div className='ml-10 mt-4'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>

            {
                Suggestion.map((profile) => {
                    return (
                        <div className='flex justify-between items-center mt-3' key={profile.id}>
                            <img className='w-10 h-10 rounded-full border p-[2px]' src={profile.avatar} alt="" />

                            <div className='flex-1 ml-4'>
                                <h2 className='font-semibold text-sm'>{profile.username}</h2>
                                <h3 className='text-sm text-gray-400'>Works at {profile.company.name}</h3>
                            </div>

                            <button className='text-blue-400 text-sm'>Follow</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Suggestion