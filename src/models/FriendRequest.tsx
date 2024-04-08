
export interface FriendRequestModel{
    sender: string;
    receiver: string;
    status: string;
    createdAt: Date;
    connected: boolean
}