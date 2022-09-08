import React from "react";
import { Link } from "react-router-dom"
const Filters = ({
    ageOptions,
    sizeOptions,
    countryOptions,
    categoryOptions,
    raceOptions,
    location,
    btn,
    genderbtn,
    ageOnChange,
    sizeOnChange,
    countryOnChange,
    categoryOnChange,
    raceOnChange,
}) => {
    return (
        <div className="row ">
            <div className="col-lg-12 text-lg-center text-md-center text-sm-start pt-3 mb-5" role="group">
                <div className="btn-group">
                    <select id="ageFilter"
                        className="btn-btn dropdown-toggle"
                        style={{ background: "#040919" }}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onChange={(e) => {
                            { ageOnChange(e.target.value) }
                        }}
                    >
                        {ageOptions.map(
                            (obj, index) => (
                                <option key={index} value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div className="btn-group">
                    <select
                        className="btn-btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        style={{ background: "#040919" }}
                        aria-expanded="false"
                        onChange={(e) => {
                            { sizeOnChange(e.target.value) }
                        }}>
                        {sizeOptions.map(
                            (obj, index) => (
                                <option key={index} value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div className="btn-group">
                    <select
                        type="button"
                        className="btn-btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        style={{ background: "#040919" }}
                        aria-expanded="false"
                        onChange={(e) => {
                            { countryOnChange(e.target.value) }
                        }}
                    >
                        <option value="" className="dropdown-list" style={{ backgroundColor: "#060c22" }}>Country
                        </option>
                        {countryOptions.map(
                            (obj, index) => (
                                <option key={index} value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div className="btn-group">
                    <select
                        type="button"
                        className="btn-btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        style={{ background: "#040919" }}
                        aria-expanded="false"
                        onChange={(e) => {
                            { categoryOnChange(e.target.value) }
                        }}>
                        <option value="" className="dropdown-list" style={{ backgroundColor: "#060c22" }}>Category
                        </option>
                        {categoryOptions.map(
                            (obj, index) => (
                                <option key={index} value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div className="btn-group">
                    <select
                        type="button"
                        className="btn-btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        style={{ background: "#040919" }}
                        aria-expanded="false"
                        onChange={(e) => {
                            { raceOnChange(e.target.value) }
                        }}>
                        {raceOptions.map(
                            (obj, index) => (
                                <option key={index} value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <Link to={location} className={btn}>{genderbtn}</Link>
            </div>
        </div>

    )
}
export default Filters;