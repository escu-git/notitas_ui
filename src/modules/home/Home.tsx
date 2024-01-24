import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={()=>navigate("/signin")}>Login</button>
            <p>This is a basic home page in TypeScript React.</p>
        </div>
    );
};

export default Home;
