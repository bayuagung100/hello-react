import React from 'react';

const Top = () => {

    //Handling Events pada Function
    const HandlePesan = (value,e) =>{
        e.preventDefault();
        alert("Halaman Top Tampil");
        alert(value);
    }

    return (
        <a href="/" onClick={e => HandlePesan("Pesan Dari Top",e)}>Halaman Top</a>
    );
};

export default Top;