import { useEffect, useState } from 'react';
import Search from './Search';
import Carousel from './Carousel';
import ListingContainer from './ListingContainer';

function Home(){
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetch("/listings")
        .then((r) => r.json())
        .then(data => setListings(data))
    })

    return(
        <div>
            <Search />
            <Carousel />
            <ListingContainer listings = {listings}/>
        </div>
    )
}

export default Home;