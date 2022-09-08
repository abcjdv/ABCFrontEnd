import { Link } from 'react-router-dom';
const ProductdescriptionMain = (props) => {
  //console.log(props.id == props.imageId,'amin')
  //console.log(props.id,'id')
  if (props.id == props.imageId) {
    return (

      <main id="main" className="main-page mt-lg-0" >

        {/*<!-- ======= Product Details Sectionn ======= -->*/}
        <section id="speakers-details">
          <div className="container">

            <div className="row justify-content-between">
              <div className="col-lg-5 col-md-10  col-12 mx-auto Product_img" >
                <img src={props.image} alt="Speaker 1" width="100%" height="100%" className="" />
              </div>
              <div className="col-lg-6 col-md-10  col-12 mx-auto mt-md-3 mt-3">
                <div className="details">
                  <h2>{props.name}</h2>
                  <h4><strong>{props.price}</strong></h4>
                  <p>{props.description}</p>
                </div >
              </div >
            </div >
          </div >
        </section >
      </main >
    )
  }
}

export default ProductdescriptionMain;