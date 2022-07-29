import React from "react";
import Search from "../components/Search";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-[38px] font-bold leading-none mb-6">
            <br />
            Search properties to rent
           </h1> 
           <MDBInputGroup>
              <MDBInput label="Search with SearchBar" />
            </MDBInputGroup>
          <br />
        </div>
      </div>

      <Search />
    </section>
  );
};

export default Banner;
