import { useEffect, useState } from "react";
import GitProfileForm from "./GitProfileForm";

const BASE_URL = 'https://api.github.com/users';

function GitProfileSearch() {
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        setIsLoading(true);
        setError(null);     // Reset error before a new fetch
        try {
            const response = await fetch(`${BASE_URL}/${username}`);
            if(!response.ok) {
                throw new Error(
                    response.status === 404 ? "User not found!" : "Something went wrong!"
                );
            }
            const data = await response.json();
            console.log("DATA: ", data);
            setProfile(data);           
        } catch (err) {
            setError(err.message);
            setProfile(null);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, [username]);

    useEffect(() => {
        console.log("Profile: ", profile);
    }, [profile]);

    const search = (username) => {
        setUsername(username);
    }

    return (
        <div>
        <GitProfileForm search={search} />
        {isLoading && <i>Loading...</i>}
        {error && <p style={{color: 'red'}}>Error: {error}</p>}
        {profile && !error && 
        <>
        <img src={profile.avatar_url} alt="Profile-Picture" style={{width: "300px", height: "300px", borderRadius: "50%"}}/>
        <p><strong>Picture:</strong> </p>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>Public Repos:</strong> {profile.public_repos}</p>
        </>        
        } 
        </div>
    )
}

export default GitProfileSearch;