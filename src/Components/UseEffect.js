// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function EffectTutorial() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((response) => {
//         setData(response.data.map(({email})=><li key={email}>{email}</li>));
//       });
//   }, []);

//   return (
//     <div>
//       List of Emails are: 
//       {data}
//         </div>
//   );
// }

// export default EffectTutorial;

// ---------------------------Exercise--------------------------------------//

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function EffectTutorial() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon")
//       .then((response) => {
//         setData(response.data.results.map(({name})=><li key={name}>{name}</li>));
//       });
//   }, []);

//   return (
//     <div>
//       List of Pokemons are: 
//       <div>
//         {data}
//         </div>
//     </div>
//   );
// }

// export default EffectTutorial;

import React, { useState, useEffect } from "react";
function EffectTutorial() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=100"
            );
            const data = await response.json();
            setPokemons(data.results);
        };

        fetchData();
    }, []);

    return (
        <ul>
            {pokemons.map(({ name, url }) => (
                <li key={url}>{name}</li>
            ))}
        </ul>
    );
};
export default EffectTutorial
