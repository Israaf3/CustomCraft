import img1 from '../../Assets/images/hoodi.png'
import img2 from '../../Assets/images/photo2.png'
import img3 from '../../Assets/images/long sleeve front 1.png'
import img4 from '../../Assets/images/sports_pants_men_01v_bright_color_0003 1.png'
import img5 from '../../Assets/images/z01-1 2.png'
import img6 from '../../Assets/images/polo front 1.png'
import img7 from '../../Assets/images/sleeves front 1.png'
import img8 from '../../Assets/images/AdobeStock_494861273_Preview_result 1.png'

import style from "../Cutomize/Customize.module.css"

export default function Cutomize(){
    return <>
    <div className="container my-5">
        <div className="row">
            <div className="col-12">
                <h1 className="mt-5 py-3">Choose a Blank</h1>


                <div className="row g-3">
                    <div className="col-xl-3 col-lg-4 col-md-6 cursor ">
                    <div className={style.item}>
                        <div className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}>
                            <img src={img1} className='w-75' alt="design product"  />
                        </div>
                        <div className={style.bg}></div>

                        <p className={style.text}>Hoodie</p>
                    </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 cursor ">
                        <div className={style.item}>
                            <div className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}>
                            <img src={img2} className='w-75' alt="design product"  />
                        </div>
                        <div className={style.bg}></div>

                        <p className={style.text}>Sweater</p>
                    </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 cursor ">
                    <div className={style.item}>
                        <div className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}>
                            <img src={img3} className='w-75' alt="design product"  />
                        </div>
                        <div className={style.bg}></div>

                        <p className={style.text}>Long Sleeve T-shirt</p>
                    </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 cursor ">
                    <div className={style.item}>
                        <div className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}>
                            <img src={img4} className='w-75' alt="design product"  />
                        </div>
                        <div className={style.bg}></div>

                        <p className={style.text}>Sweatpants</p>
                    </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 cursor ">
                    <div className={style.item}>
                        <div className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}>
                            <img src={img5} className='w-75' alt="design product"  />
                        </div>
                        <div className={style.bg}></div>

                        <p className={style.text}>Half Sleeve T-shirt</p>
                    </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 cursor ">
                    <div className={style.item}>
                        <div className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}>
                            <img src={img6} className='w-75' alt="design product"  />
                        </div>
                        <div className={style.bg}></div>

                        <p className={style.text}>Polo T-shirt</p>
                    </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 cursor ">
                    <div className={style.item}>
                        <div className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}>
                            <img src={img7} className='w-75' alt="design product"  />
                        </div>
                        <div className={style.bg}></div>

                        <p className={style.text}>Tank Top</p>
                    </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 cursor ">
                    <div className={style.item}>
                        <div className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}>
                            <img src={img8} className='w-75' alt="design product"  />
                        </div>
                        <div className={style.bg}></div>

                        <p className={style.text}>Sports shorts</p>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
}