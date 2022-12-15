import { useEffect, useState } from "react";
import axios from "axios";
const useCustomfetch = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then((response) => {
                setData(response.data.results.map(({ name }) => <li key={name}>{name}</li>));
            });
    }, []);
    return (
        <div>
            <div>
                List of Pokemons are:
            </div>
            {data}
        </div>
    );
}
export default useCustomfetch;
