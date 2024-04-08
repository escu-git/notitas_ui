import { FriendRequestModel } from "@src/models/FriendRequest"
import friendsService from "@src/services/friendsService"
import { useEffect, useState } from "react"

type hookProps={
    reload: boolean
}

const useFriendRequestsList = ({reload}:hookProps) =>{
    const [requests, setRequests] = useState<Array<FriendRequestModel>>([])
    const [loadingRequests, setLoadingRequests] = useState<boolean>(true);

    const fetchRequests = async()=>{
        try{
            const response = await friendsService.getFriendRequests()
            setRequests(response)
        }catch(err){
            console.log(err)
        }
        finally{
            setLoadingRequests(false);
        }
    }

    useEffect(()=>{
        fetchRequests()
    },[reload])

    return {requests, loadingRequests}
}

export default useFriendRequestsList;