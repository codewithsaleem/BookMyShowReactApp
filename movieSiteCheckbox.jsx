import React, { Component } from "react";

class Checkbox extends Component {
    state = {
        isExpandedLanguage: false,
        isExpandedFormat: false,
        isExpandedGenre: false,
        checkForm: { language: [], format: [], genre: [] },
        products: [],
    };

    toggleClass = (num) => {
        if (num === 1) this.setState({ isExpandedLanguage: !this.state.isExpandedLanguage });
        if (num === 2) this.setState({ isExpandedFormat: !this.state.isExpandedFormat });
        if (num === 3) this.setState({ isExpandedGenre: !this.state.isExpandedGenre });
    };

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let options = { ...this.props.options };
        if (input.name === "lang" || input.name === "genre" || input.name === "format") {
            options[input.name] = this.updateCBs(options[input.name], input.checked, input.value);
        }
        this.props.onOptionChange(options);
    };

    updateCBs = (inpValues, checked, value) => {
        let newArr = inpValues ? inpValues.split(",") : [];
        if (checked) {
            newArr.push(value);
        } else {
            let index = newArr.findIndex((ele) => ele === value);
            if (index >= 0) {
                newArr.splice(index, 1);
            }
        }
        return newArr.join(",");
    };

    renderCheckboxItems = (arr, name, checkedValues) => {
        return arr.map((ele, index) => (
            <div key={index} className="form-check m-2">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name={name}
                    value={ele}
                    checked={checkedValues.includes(ele)}
                    onChange={this.handleChange}
                />
                <label className="form-check-label">{ele}</label>
            </div>
        ));
    };

    render() {
        const { isExpandedLanguage, isExpandedFormat, isExpandedGenre } = this.state;
        const { lang = "", genre = "", format = "" } = this.props.options;

        const languages = ["Hindi", "English", "Punjabi", "Tamil"];
        const formats = ["2D", "3D", "4DX"];
        const genres = ["Action", "Adventure"];

        return (
            <div className="container">
                <div className="row mt-4 ms-2 bg-warning">
                    <div className="col-2">
                        <span
                            className="fa-stack fa-1x text-secondary"
                            style={{ cursor: "pointer" }}
                            onClick={() => this.toggleClass(1)}
                        >
                            <i className={`fa-solid fa-stack-2x ${isExpandedLanguage ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </span>

                        {isExpandedLanguage && this.renderCheckboxItems(languages, "lang", lang)}
                    </div>
                    <div className="col-5">
                        <h4>Select Language</h4>
                    </div>
                </div>

                <div className="row mt-4 ms-2" style={{backgroundColor: 'lightgreen'}}>
                    <div className="col-2">
                        <span
                            className="fa-stack fa-1x text-secondary"
                            style={{ cursor: "pointer" }}
                            onClick={() => this.toggleClass(2)}
                        >
                            <i className={`fa-solid fa-stack-2x ${isExpandedFormat ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </span>

                        {isExpandedFormat && this.renderCheckboxItems(formats, "format", format)}
                    </div>
                    <div className="col-5">
                        <h4>Format</h4>
                    </div>
                </div>

                <div className="row mt-4 ms-2 bg-info">
                    <div className="col-2">
                        <span
                            className="fa-stack fa-1x text-secondary"
                            style={{ cursor: "pointer" }}
                            onClick={() => this.toggleClass(3)}
                        >
                            <i className={`fa-solid fa-stack-2x ${isExpandedGenre ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </span>

                        {isExpandedGenre && this.renderCheckboxItems(genres, "genre", genre)}
                    </div>
                    <div className="col-5">
                        <h4>Genre</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkbox;
