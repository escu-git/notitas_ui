import React from 'react';

interface Friend {
    id: number;
    name: string;
}

interface FriendsListProps {
    friends: Friend[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friends }) => {
    return (
        <div>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>{friend.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsList;