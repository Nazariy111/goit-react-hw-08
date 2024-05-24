
import css from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';




const SearchBox = () => {
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    const handleSearch = (e) => {dispatch(changeFilter(e.target.value));};

    return (
        <div className={css.searchBox} >
            <p className={css.searchTitle}>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={filter} onChange={handleSearch}/>
        </div> 
    )
}

export default SearchBox