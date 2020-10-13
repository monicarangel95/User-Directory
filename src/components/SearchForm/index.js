import React from "react";
import "./style.css";
function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="language"></label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Search any employee name"
                    id="search"
                />
            </div>
        </form>
    );
}

export default SearchForm;
