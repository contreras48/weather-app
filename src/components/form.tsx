import { useState } from "react";
import { Search } from 'react-feather';

import { getLocation } from "../services/weather";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function Form({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState<string>("")
  const [list, setList] = useState<any>([])
  const [selected, setSelected] = useState<any>(null)

  const renderList = (list: any) => list.map((l: any, i: number) => {
    return <li className="mb-2" key={i} onClick={() => handleSelected(l)}>{l.name}, {l.state ? l.state + ', ' : ''}{l.country}</li>;
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      setList(await getLocation(e.target.value));
    } else {
      setList([]);
    }

  }

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(selected);
      setQuery("")
    }
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
            className="bg-accend rounded-lg w-full h-[30px] px-2 outline-none text-base" type="text" name="" id=""
            value={query}
            onChange={handleChange}
          />
          {list.length > 0 && (<ul className="w-full absolute top-7 bg-accend border rounded-lg mt-1 z-10 shadow-lg text-sm px-2 pt-2">
            {renderList(list)}
          </ul>)}
        </label>
        <button
          className="border border-accend bg-accend text-secondaryText  rounded-full p-1.5"
          onClick={handleSearch}
        >
          <Search size={16} />
        </button>
      </form>
    </>
  )
}

export default Form;