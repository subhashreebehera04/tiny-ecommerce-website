const NavigationBar=()=>{
    return(
                <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='categories col-sm-12 d-flex align-items-center justify-content-center'>
                                <li className="list-inline-items">
                                    <button className='sarees position-relative ml-5 mr-5'>sarees</button>
                                </li>
                                <li className="list-inline-items">
                                    <button className='kurtis position-relative ml-5 mr-5'>kurtis</button>
                                </li>
                                <li className="list-inline-items">
                                    <button className='kurtiSets position-relative ml-5 mr-5'>kurti sets</button>
                                </li>
                                <li className="list-inline-items">
                                    <button className='lehenga position-relative ml-5 mr-5'>lehenga</button>
                                </li>
                                <li className="list-inline-items">
                                    <button className='sharara position-relative ml-5 mr-5'>sharara</button>
                                </li>
                                
                            </div>

                        </div>

                    </div>
                    <hr/>
                </nav>        
    )
}

export default NavigationBar;                
