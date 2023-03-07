import React, { useState } from 'react'
import Select from 'react-select';
import Spinner from './Spinner';

import { Link } from 'react-router-dom'

export default function Navbar(props) {
    console.log("Inside Navbar component");
    const [selectedOptions, setSelectedOptions] = useState()
    const [loading, SetLoading] = useState(false);

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     document.getElementById('countryName').innerText = event.target.id;
    //     console.log("On handle change");
    //     console.log("Event is: ", event);
    //     console.log("Data: ", event.target.id)
    //     props.setCountry(event.target.id);
    // }

    // Array of all options
    const optionList = [
        { value: "ae", label: "United Arab Emirates" },
        { value: "ar", label: "Argentina" },
        { value: "at", label: "Austria" },
        { value: "au", label: "Australia" },
        { value: "be", label: "Belgium" },
        { value: "bg", label: "Bulgaria" },
        { value: "br", label: "Brazil" },
        { value: "ca", label: "Canada" },
        { value: "ch", label: "Switzerland" },
        { value: "cn", label: "China" },
        { value: "co", label: "Colombia" },
        { value: "cu", label: "Cuba" },
        { value: "cz", label: "Czech Republic" },
        { value: "de", label: "Germany" },
        { value: "eg", label: "Egypt" },
        { value: "fr", label: "France" },
        { value: "gb", label: "United Kingdom" },
        { value: "gr", label: "Greece" },
        { value: "hk", label: "Hong Kong" },
        { value: "hu", label: "Hungary" },
        { value: "id", label: "Indonesia" },
        { value: "ie", label: "Ireland" },
        { value: "il", label: "Israel" },
        { value: "in", label: "India" },
        { value: "it", label: "Italy" },
        { value: "jp", label: "Japan" },
        { value: "kr", label: "South Korea" },
        { value: "lt", label: "Lithuania" },
        { value: "lv", label: "Latvia" },
        { value: "ma", label: "Morocco" },
        { value: "mx", label: "Mexico" },
        { value: "my", label: "Malaysia" },
        { value: "ng", label: "Nigeria" },
        { value: "nl", label: "Netherlands" },
        { value: "no", label: "Norway" },
        { value: "nz", label: "New Zealand" },
        { value: "ph", label: "Philippines" },
        { value: "pl", label: "Poland" },
        { value: "pt", label: "Portugal" },
        { value: "ro", label: "Romania" },
        { value: "rs", label: "Serbia" },
        { value: "ru", label: "Russia" },
        { value: "sa", label: "Saudi Arabia" },
        { value: "se", label: "Sweden" },
        { value: "sg", label: "Singapore" },
        { value: "si", label: "Slovenia" },
        { value: "sk", label: "Slovakia" },
        { value: "th", label: "Thailand" },
        { value: "tr", label: "Turkey" },
        { value: "tw", label: "Taiwan" },
        { value: "ua", label: "Ukraine" },
        { value: "us", label: "United States" },
        { value: "ve", label: "Venezuela" },
        { value: "za", label: "South Africa" },
    ];

    // Function triggered on selection
    function handleSelect(data) {
        setSelectedOptions(data);
        console.log("On handle change");
        console.log("Data: ", data);
        props.setCountry(data.value);
    }

    return (
        <nav className="navbar sticky-top bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>

                    </ul>
                    <div className="dropdown-container">
                        <Select className='bg-dark'
                            options={optionList}
                            placeholder="Select Country"
                            onChange={handleSelect}
                            isSearchable={true}
                            value={selectedOptions}
                        />
                    </div>
                </div>
            </div >
        </nav >
    )
}
