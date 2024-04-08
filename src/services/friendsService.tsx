const API_URL = import.meta.env.VITE_API_URL

const friendsService = {
    getFriends: async () => {
        const response = await fetch('http://localhost:3001/friends');
        const friends = await response.json();
        return friends;
    },
    getFriendRequests: async () => {
        const response = await fetch(`${API_URL}/friends/getFriendRequests`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const friendRequests = await response.json();
        return friendRequests.data;
    }
    // addFriend: async (friend) => {
    //     const response = await fetch('http://localhost:3001/friends', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(friend)
    //     });
    //     const newFriend = await response.json();
    //     return newFriend;
    // },
    // deleteFriend: async (id) => {
    //     const response = await fetch(`http://localhost:3001/friends/${id}`, {
    //         method: 'DELETE'
    //     });
    //     const deletedFriend = await response.json();
    //     return deletedFriend;
    // }
}

export default friendsService;