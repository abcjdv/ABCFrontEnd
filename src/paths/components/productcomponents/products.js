import "./product.css";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate"
import optionsData from "./options";
import Cookies from "universal-cookie";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from "../Pagination";
import TrackMyOrder from "../../../utils/TrackMyOrder";
import Carts from "./Carts";
import Filters from "./filters";
const cookies = new Cookies();
export default function Productsitems(props) {
  const [loader, setLoader] = useState()
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(2);
  const axiosPrivate = useAxiosPrivate();
  const [favourites, setFavourites] = useState([]);
  const [data, setData] = useState([])
  const [filteredList, setFilteredList] = useState([]);
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [countryOPAPI, setCountryOPAPI] = useState([]);
  const [categoryOPAPI, setCategoryOPAPI] = useState([])
  const ageOptions = (optionsData.age);
  const sizeOptions = (optionsData.size);
  const raceOptions = (optionsData.race);
  const [cartBool, setCartBool] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    axiosPrivate.get("product_country_list/",
    )
      .then(res => {
        setCountryOPAPI(res.data)
      })
  }, [])
  useEffect(() => {
    axiosPrivate.get("product_category_list/",
    )
      .then(res => {
        setCategoryOPAPI(res.data)
      })
  }, [])
  const countryOptions = countryOPAPI.map((obj, index) => {
    return {
      label: obj.country_name,
      value: obj.id
    }
  });
  const categoryOptions = categoryOPAPI.map((obj, index) => {
    return {
      label: obj.name,
      value: obj.id
    }
  });
  useEffect(() => {
    axiosPrivate.get("product/cart_items_list/",
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.get('access')}`
        },
        withCredentials: true
      }
    )
      .then(res => {
        setCartItem(res.data)
      })
  }, [cartBool]);
  const mystyle = {
    verticalAlign: "middle",
    fontSize: "1.5rem",
    border: "2px solid #fff",
    padding: "6px",
    borderRadius: "50%",
    color: "#E86669",

  };
  const mystyle1 = {
    verticalAlign: "middle",
    fontSize: "1.5rem",
    border: "2px solid #fff",
    padding: "6px",
    borderRadius: "50%",
    color: "#fff",

  };
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      await axiosPrivate.get("/product_list/",
      )
        .then(res => {
          setData(res.data)
          // const indexOfLastProduct = currentPage * productPerPage;
          // const indexOfFirstProduct = indexOfLastProduct - productPerPage;
          // setFilteredList(res.data.slice(indexOfFirstProduct, indexOfLastProduct))
          setFilteredList(res.data)
          setLoading(false)
        })
    }
    fetchProducts();
  }, [cartBool], [currentPage]);
  useEffect(() => {
    axiosPrivate.get("product/favourites_list/",
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.get('access')}`
        },
        withCredentials: true
      }
    ).then(res => {
      setFavourites(res.data)
    })
  }, [isFavourite])

  // <-----filters function----->


  const filterByAge = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedAge) {
      return filteredData;
    }

    const filteredClothes = filteredData.filter(
      (clothes) => {
        if (clothes.age == selectedAge) {
          return selectedAge;
        }
        //  clothes.age === selectedAge
      });
    return filteredClothes;
  };

  const filterByCountry = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedCountry) {
      return filteredData;
    }

    const filteredClothes = filteredData.filter(
      (clothes) => {
        if (clothes.country == selectedCountry) {
          return selectedCountry;
        }
        //  clothes.age === selectedAge
      });
    return filteredClothes;
  };

  const filterByCategory = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedCategory) {
      return filteredData;
    }

    const filteredClothes = filteredData.filter(
      (clothes) => {
        if (clothes.category == selectedCategory) {
          return selectedCategory;
        }
        //  clothes.age === selectedAge
      });
    return filteredClothes;
  };
  const filterBySize = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedSize) {
      return filteredData;
    }

    const filteredClothes = filteredData.filter(
      (clothes) => {
        if (clothes.bodyType == selectedSize) {
          return selectedSize;
        }
        //  clothes.age === selectedAge
      });
    return filteredClothes;
  };

  const filterByRace = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedRace) {
      return filteredData;
    }

    const filteredClothes = filteredData.filter(
      (clothes) => {
        if (clothes.race == selectedRace) {
          return selectedRace;
        }
        //  clothes.age === selectedAge
      });
    return filteredClothes;
  };

  // <----filters function ended ----->
  const percentage = (value) => {
    return 20 * value / 100;
  }
  useEffect(() => {
    var filteredData = filterByAge(data);
    filteredData = filterBySize(filteredData);
    filteredData = filterByCountry(filteredData);
    filteredData = filterByCategory(filteredData);
    filteredData = filterByRace(filteredData);
    setFilteredList(filteredData);
  }, [selectedAge, selectedSize, selectedCountry, selectedCategory, selectedRace]);

  const HandleAddToFavourite = async (id) => {
    setLoader(id)
    try {
      const response = await axiosPrivate.post(`product/add_to_favourite/${id}/`, {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.get('access')}`
          },
          withCredentials: true
        }
      );
      setIsFavourite(prev => !prev)
      setLoader("")
      //clear state and controlled inputs
      //need value attrib on inputs for this
    } catch (err) {
      if (!err?.response) {
      }
    }
  }
  const HandleRemoveFromFavourite = async (id) => {
    setLoader(id)
    let favId;
    for (let i = 0; i < favourites.length; i++) {
      if (id === favourites[i].products) {
        favId = favourites[i].id;
      }
    }
    try {
      const response = await axiosPrivate.delete(`product/remove_from_favourite/${favId}/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.get('access')}`
          },
          withCredentials: true
        }
      );
      setIsFavourite(prev => !prev)
      setLoader("")
    } catch (err) {
      if (!err?.response) {
      }
    }
  }
  const isInFav = (id) => {
    for (let i = 0; i < favourites.length; i++) {
      if (id === favourites[i].products) {
        return true;
      }
    }
    return false;
  }
  const AddToCart = async (id) => {
    setLoader(id)
    try {
      const response = await axiosPrivate.post(`/product/add_to_cart/${id}/`, {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.get('access')}`
          },
          withCredentials: true
        }
      );
      props.onChange(!props.checkCart)
      setCartBool(prev => !prev)
      setLoader("")
    } catch (err) {
      if (!err?.response) {
      }
    }
  }
  const fun = (id) => {
    for (let i = 0; i < cartItem.length; i++) {
      if (id === cartItem[i].item.id) {
        return true;
      }
    }
    return false;
  }
  const filterData = filteredList.map((g, index) => {
    if (g.gender === props.gender)
      return (
        <Carts
          key={index} 
          {...g}
          percentage={percentage}
          fun={fun}
          isInFav={isInFav}
          mystyle1={mystyle1}
          mystyle={mystyle}
          loader={loader}
          index={index}
          HandleRemoveFromFavourite={HandleRemoveFromFavourite}
          HandleAddToFavourite={HandleAddToFavourite}
          AddToCart={AddToCart}
        />
      )
  })
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <TrackMyOrder />
      <Filters
        ageOptions={ageOptions}
        sizeOptions={sizeOptions}
        countryOptions={countryOptions}
        categoryOptions={categoryOptions}
        raceOptions={raceOptions}
        location={props.location}
        btn={props.btn}
        genderbtn={props.genderbtn}
        ageOnChange={value => setSelectedAge(value)}
        sizeOnChange={value => setSelectedSize(value)}
        countryOnChange={value => setSelectedCountry(value)}
        categoryOnChange={value => setSelectedCategory(value)}
        raceOnChange={value => setSelectedRace(value)}
      />
      <div className="row">
        {filterData}
      </div>
      {/* <Pagination
        postsPerPage={productPerPage}
        totalPosts={data.length}
        paginate={paginate}
      /> */}
    </>
  )
}
