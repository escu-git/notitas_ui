import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

type componentProps={
    // list: Array<FriendRequestModel | FriendshipModel>;
}

const FriendTable = ({list, title}) =>{

    return(
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <Typography>{title}</Typography>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((l) => (
                            <TableRow key={l.id}>
                                <TableCell>{l.sender}</TableCell>
                                <TableCell>
                                    {/* <Button onClick={() => handleAccept(friend.id)}>Aceptar</Button>
                                    <Button onClick={() => handleReject(friend.id)}>Rechazar</Button> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default FriendTable;