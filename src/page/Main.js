import React, { Fragment } from "react";
import Catalog from "../component/Catalog";


class Main extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <section className='row'>
                            <div className='col-12'>
                                <input className='form-control form-control-lg' type='text' id="keyword" placeholder='Search' />
                            </div>
                            <div class='col-12 mt-3'>
                                <div class='form-check form-check-inline'>
                                    <input class="form-check-input"  type="radio"
                                    name="filter" id="byName" checked/>
                                    <label class="form-check-label" for="filter_name">Title</label>
                                </div>
                            </div>
                    </section>
                </div>
                <Catalog />
            </Fragment>
        );
    }
}
export default Main;