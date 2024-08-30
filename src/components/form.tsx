import { FaSearch } from "react-icons/fa";

function Form() {
  return (
    <form className="flex gap-x-2.5 justify-center">
      <label>
        <input className="border border-neutral-dark rounded-lg" type="text" name="" id="" />
      </label>
      <button className="border border-neutral-dark text-highlight rounded-full p-1.5"><FaSearch /></button>
    </form>
  )
}

export default Form;