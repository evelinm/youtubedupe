import {useState} from "react";

const SearchBar = ({ onTernmSubmit }) => {

    const [term, setTerm] = useState('')
    
    const onInputChange = (e) => {
       setTerm(e.target.value)
 
    }
    // AIzaSyDgdMU3lnbmLejPTNYVm1FmzNSBFKE9LiQ
    const onSubmit = (e) => {
        e.preventDefault()
        onTernmSubmit(e)
        //todo call back from parent component
    }

    return(
        <div className="searh-bar ui segment">
            <form  onSubmit={ (e)=> onSubmit(e)} className="ui form">
                <div className="field">
                    <label> Video Search </label>
                    <input type="text" value={term} onChange={(e) => onInputChange(e)}/>
                </div>
            </form>

        </div>
    )
}
export default SearchBar;