import { useState } from "react";

function GitProfileForm({search}) {
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        search(term);
        setTerm("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username..." onChange={handleChange}/>
            <button>Search</button>
        </form>
    )
}

export default GitProfileForm;