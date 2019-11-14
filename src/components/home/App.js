import React, { Component } from 'react';
import Header from "./Header";
// import {Header} from "./Header"; //kalau diexportnya tidak pakai default
import Footer from "./Footer";
// import List from "./List";
import Top from './Top';
// import Main from './Main';
// import Form from './Form';
import CustomInput from './CustomInput';


class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 terbaik"/>
        <Top/>
        <CustomInput/>
        {/* <Form/> */}

        {/* //Lists dan Keys dari Props (seperti json) */}
        {/* <Main MenuMakanan={[
                {
                    nama: "Mie Ayam",
                    harga: 10000
                },
                {
                    nama: "Bakso",
                    harga: 15000
                },
                {
                    nama: "Mie Ayam Bakso",
                    harga: 20000
                },
                {
                    nama: "Soto",
                    harga: 10000
                },
            ]} /> */}
        
        {/* <Main/>
        <List/> */}
        <Footer name="Makanan Nusantara" tahun="2019"/>
        {/* <Footer name="Makanan Nusantara"/> //props */}
      </div>
    );
  }
}

export default App;
