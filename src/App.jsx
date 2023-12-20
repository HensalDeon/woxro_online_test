import { useState } from "react";
import "./App.css";

function App() {
    const [director, setDirector] = useState("");
    const [movie, setMovie] = useState("");
    const [datas, setDatas] = useState([]);

    const handleDirector = (e) => {
        setDirector(e.target.value);
    };
    const handleMovie = (e) => {
        setMovie(e.target.value);
    };
    const handleAdd = () => {
        console.log(director, movie);
        const newItem = { director: director, movie: movie };
        const updatedItem = [...datas];
        updatedItem.push(newItem);
        setDatas(updatedItem);
    };

    const handleRemove = (index) => {
        console.log(index);
        let reducedData = [...datas];
        reducedData.splice(index, 1);
        setDatas(reducedData)
    };

    return (
        <div className="p-10">
            <div className="flex w-100vw gap-3">
                <input className="w-full bg-gray-300 p-2 text-gray-800" type="text" name="director_name" placeholder="Director Name" onChange={handleDirector} />
                <input className="w-full bg-gray-300 p-2 text-gray-800" type="text" name="movie_name" placeholder="Movie Name" onChange={handleMovie} />
                <button className="bg-green-600 p-3 rounded-md" onClick={handleAdd}>
                    Add
                </button>
            </div>
            {datas?.map((data, index) => (
                <div key={index} className="w-full flex pt-3 gap-3">
                    <div className="w-full px-2 flex items-center" style={{borderWidth:"2px", borderColor:"black"}}>{data?.director}</div>
                    <div className="w-full px-2 flex items-center" style={{borderWidth:"2px", borderColor:"black"}}>{data?.movie}</div>
                    <button className="bg-red-500 p-3 rounded-md" onClick={() => handleRemove(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default App;
