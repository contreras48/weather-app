import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function Form({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState<string>("")
  const [list, setList] = useState<any>([])
  const [selected, setSelected] = useState<any>(null)

  const renderList = (list: any) => list.map((l: any, i: number) => <li className="mb-2" key={i} onClick={() => handleSelected(l)}>{l.name} {l.state ?? ""} {l.country}</li>)

  const getLocation = async (query: string) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setList(data)
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if(value.trim()){
      getLocation(e.target.value);
    }else{
      setList([]);
    }
    
  }

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSearch(selected);
    setQuery("")
  }

  const handleSelected = (val: any) => {
    setSelected(val);
    setQuery(`${val.name} ${val.state ?? ""} ${val.country}`)
    setList([])
  }

  return (
    <>
      <form className="w-full flex gap-x-2.5 justify-center items-center" action="">
        <label className="w-2/3 relative">
          <input
            className="bg-accend rounded-lg w-full h-[28px] px-2 outline-none text-base" type="text" name="" id=""
            value={query}
            onChange={handleChange}
          />
          {list.length > 0 && (<ul className="w-full absolute top-7 bg-accend border rounded-lg mt-1 z-10 shadow-lg text-sm px-2 pt-2">
          {renderList(list)}
        </ul>)}
        </label>
        <button
          className="border border-accend bg-accend text-secondaryText text-sm rounded-full p-1.5"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </form>
    </>
  )
}

export default Form;