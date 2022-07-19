import {useState} from "react";

const SearchBar = () => {

    const [term, setTerm] = useState('')
    
    const onInputChange = (e) => {
       setTerm(e.target.value)
 
    }
    // AIzaSyDgdMU3lnbmLejPTNYVm1FmzNSBFKE9LiQ
    const onFormSubmit = (e) => {
        e.preventDefault()
        //todo call back from parent component
    }

    return(
        <div className="searh-bar ui segment">
            <form  onSubmit={ (e)=> onFormSubmit(e)} className="ui form">
                <div className="field">
                    <label> Video Search </label>
                    <input type="text" value={term} onChange={(e) => onInputChange(e)}/>
                </div>
            </form>

        </div>
    )
}
export default SearchBar;