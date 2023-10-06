import SearchButton from "../../images/SearchButton.svg"

function Search() {
    return (
        <label className='filters__label'>
            <img className='tablechart__image' src={SearchButton} />
            <input
                className="tablechart__search"
                type="search"
                placeholder="Поиск... (alt + s)"
            />
        </label>
    )
}

export default Search