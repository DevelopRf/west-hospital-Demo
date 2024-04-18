import SearchDoctor from "./Search/Search"
import Select from "./Select/Select"

const Filter = () => {

    return (
        <div className="row row-gap-3">
            <div className="col-lg-6 d-flex justify-content-end order-lg-2">
                <SearchDoctor />
            </div>
            <div className="col-lg-6 d-flex justify-content-start order-lg-1">
                <Select />
            </div>
        </div>
    )

}

export default Filter