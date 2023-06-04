import React,{useState,useEffect} from 'react';
import CustomNavbar from '../components/CustomNavbar';
import '../index.css';
import Card from '../components/CustomCard';
import jsonData from '../utils/data.json'
const Home = () => {
  const [data, setData] = useState(jsonData);
  const oldData =jsonData;
  const [filter, setFilter] = useState("");



  function handleChangeFilter(event) {
    setFilter(event.target.value);
    const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(event.target.value.toLowerCase()) || item.price.toString().includes(event.target.value)
  );
   setData(filtered);
   console.log(event)
   if(event.target.value==='' || event.keyCode === 8){
    setData(oldData);
  }
  }
    
  return (
    <>
     <CustomNavbar/>
     <div className="banner">
        <div className="container">
           <h1 className="text-center text-white">Find Cars</h1>
           <p className="text-center text-white">Search from over 99,00,000 Active ads &amp; Post free unlimited classifieds ads!</p>
           <div className='searchbar'>
           <input type='text' className="form-control" values={filter} onChange={handleChangeFilter} placeholder="search here" />
           </div>
        </div>
     </div>

    <div className="container py-4">
        <div className="row pb-5">
            <div className="col-12 pb-4"><h1 className="text-center">Featured Used Cars</h1></div>
        {data.map((card) => (
           <div key={card.id} className="col-12 col-lg-4">
             <Card
              id={card.id}
              title={card.title}
              image={card.image}
              description={card.description}
              price={card.price}
             />
           </div>
  ))}
            
        </div>
    </div>
    </>
  )
}

export default Home