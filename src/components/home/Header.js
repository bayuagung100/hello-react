//class component (yang disarankan)
import React, { Component } from "react";
import "./header.css";

//css inline internal
const judul = {
  color: "orange",
  backgroundColor: "blue",
  marginTop: "100px"
}

//export component (yang disarankan)
class Header extends Component {
  //penulisan state (yang disarankan) karena bisa menampung data props
  constructor(props) {
    super(props);
    this.state = {
        daftar: "Daftar Makanan Nusantara",
        datalist: this.props.list,
        statusRendering: true,
        date: new Date()
    };
    //bind handling eventnya
    this.HandlePesan = this.HandlePesan.bind(this);
    this.HandleElement = this.HandleElement.bind(this);
  }

  //Handling Events pada Class Component (harus di bind juga didalam constructornya kalo menggunakan state)
  // HandlePesan(){
  //   alert(this.state.daftar);
  // }
    //Handling Events dengan Parameters
    // HandlePesan(value){
    //   alert(this.state.daftar);
    //   alert(value);
    // }
      //Handling Events dengan Parameters dengan preventDefault(preventDefault itu tanpa loading lagi)
      HandlePesan(value,e){
        e.preventDefault();
        alert(this.state.daftar);
        alert(value);
      }

      HandleElement(){
        this.setState((state,props)=>{
          return{
            statusRendering: !state.statusRendering
          };
        });
      }

  //penulisan state juga tapi tidak bisa menampung data props
  // constructor() {
  //   super();
  //   this.state = {
  //       daftar: "Daftar Makanan Nusantara"
  //   };
  // }

  //component yang dijalankan setelah render
  componentDidMount(){
    console.log("Jalan: componentDidMount");
  }

  render(){
    console.log("Jalan: Render");
    console.log(this.state.statusRendering);
    //conditional rendering
    return(
      <div>
        {
          this.state.statusRendering ===true ? (
            <div>
              {/* //css inline yang disarankan (jika ada 2 suku kata maka kata kedua nya wajib kapital dan jika ada - dihapus - nya contoh:backgroundColor: "orange") */}
              <h1 
                style={{
                  color: "blue", 
                  backgroundColor: "orange", 
                  marginTop: "100px"
                }}
              >
                Selamat Datang
              </h1>
              {/* //css internal */}
              <h2
                style={judul}
              >
                Silahkan Pilih Makanan
              </h2>
            </div>
          ):(
            <div>
              {/* //css eksternal */}
              <h1 id="judulKedua">Selamat Tinggal</h1>
              {/* //css className */}
              <h2 className="judulInfo">Jangan Lupa Datang Kembali</h2>
            </div>
          )
        }
        <button onClick={this.HandleElement}>Change</button>
      </div>
    );

    // return(
    //   <div>
    //   <h2>Makanan Khas Indonesia</h2>
    //   <p>{this.state.daftar}</p>
    //   <p>{this.state.datalist}</p>

    //   {/* //handling event */}
    //   {/* <a href="/" onClick={this.HandlePesan}>Halaman Header</a>  */}

    //   {/* handling event dan parameters */}
    //   {/* <a href="/" onClick={()=>this.HandlePesan("Pesan Dari Header")}>Halaman Header</a>  */}

    //   {/* handling event dan parameters dengan preventDefault */}
    //   <a href="/" onClick={e => this.HandlePesan("Pesan Dari Header",e)}>Halaman Header</a> 


    //   </div>
    // );
  }
}

  export default Header;

//export component juga
// export default class Header extends Component {
//   render(){
//     return(
//       <div>
//       <h2>Makanan Khas Indonesia</h2>
//       </div>
//     )
//   }
// }

//export component juga loh
// export class Header extends Component {
//   render(){
//     return(
//       <div>
//       <h2>Makanan Khas Indonesia</h2>
//       </div>
//     )
//   }
// }

//class component juga
// import React from "react";

// class Header extends React.Component {
//     render(){
//       return(
//         <div>
//         <h2>Makanan Khas Indonesia</h2>
//         </div>
//       )
//     }
//   }

  // export default Header;
