import React, { Component } from 'react';
import MenuMakanan from './lib/Food';

//Lists dan Keys dari Internal File (seperti json)
// const MenuMakanan= [
//     {
//         nama: "Mie Ayam",
//         harga: 10000
//     },
//     {
//         nama: "Bakso",
//         harga: 15000
//     },
//     {
//         nama: "Mie Ayam Bakso",
//         harga: 20000
//     },
//     {
//         nama: "Soto",
//         harga: 10000
//     },
// ];

class Main extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: "Menu Makanan",
            title2: "Menu Minuman",
            InputValue: "",
            InputKota: "",

            //Lists dan Keys dari State (seperti json)
            // MenuMakanan: [
            //     {
            //         nama: "Mie Ayam",
            //         harga: 10000
            //     },
            //     {
            //         nama: "Bakso",
            //         harga: 15000
            //     },
            //     {
            //         nama: "Mie Ayam Bakso",
            //         harga: 20000
            //     },
            //     {
            //         nama: "Soto",
            //         harga: 10000
            //     },
            // ]
        };
        this.rubahData = this.rubahData.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
    }

    //setState yang disarankan (merubah data)
    rubahData(){
        this.setState((state, props)=>{
            return {
                title: state.title2,
                title2: state.title
            };
        });
    }

    //setState juga (merubah data)
    // rubahData(){
    //     this.setState({
    //         title: "Pilih Makanan"
    //     });
    // }

    //Handling Events onChange pada Input Element
    // HandleChange(){
    //     console.log("jalan");
    // }
        //Handling Events onChange pada Input Element dengan Event Target Value
        HandleChange(value, e){

            //jika var nya ada sedikit
            this.setState({
                [value]: e.target.value
            });

            //jika var nya ada Banyak
            // const eventTarget = e.target.value;
            // this.setState((state, props)=>{
            //     return {
            //         InputValue: eventTarget
            //     };
            // });
        }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.title2}</h2>
                <button onClick={this.rubahData}>Rubah Data</button>
                <br/>
                <br/>
                <input 
                    type="text" 
                    value={this.state.InputValue} 
                    onChange={e => this.HandleChange("InputValue",e)}
                    placeholder="nama"
                />
                <br/>
                <br/>
                <input 
                    type="text" 
                    value={this.state.InputKota} 
                    onChange={e => this.HandleChange("InputKota",e)}
                    placeholder="kota"
                />

                {/* //Memanggil Lists dan Keys dari State (seperti json) */}
                {/* {
                    this.state.MenuMakanan.map((value, index) => {
                        console.log(value);
                        return(
                            <div key={index}>
                                <p>No : {index+1}</p>
                                <p>Nama Makanan : {value.nama}</p>
                                <p>Harga : {value.harga}</p>
                            </div>
                        );
                    })
                } */}

                {/* //Memanggil Lists dan Keys dari Props (seperti json) */}
                {/* {
                    this.props.MenuMakanan.map((value, index) => {
                        console.log(value);
                        return(
                            <div key={index}>
                                <p>No : {index+1}</p>
                                <p>Nama Makanan : {value.nama}</p>
                                <p>Harga : {value.harga}</p>
                            </div>
                        );
                    })
                } */}

                {/* //Memanggil Lists dan Keys dari Internal/Eksternal File (seperti json) */}
                {
                    MenuMakanan.map((value, index) => {
                        console.log(value);
                        return(
                            <div key={index}>
                                <p>No : {index+1}</p>
                                <p>Nama Makanan : {value.nama}</p>
                                <p>Harga : {value.harga}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Main;