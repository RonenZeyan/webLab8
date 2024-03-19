import './App.css'
import React,{ useState, useEffect } from 'react'
import Table from './components/table'
import BigImage from './components/bigImage'
import Image from './components/image'
import ImageList from './components/imageList'

function App() {
  const [data, setData] = useState([])
  const [selectedImage,setSelectedImage] = useState(null) //

  useEffect(() => {
    // const fd = ['id', 'title', 'price', 'brand', 'category', 'description']
    // const url = `https://dummyjson.com/products?limit=10&skip=0&select=${fd.join(',')}`
    const url = `https://picsum.photos/v2/list?limit=20`
    fetch(url)
      .then(response => response.json())
      .then(d => setData(d))
  }, [])

  const handleSelectedImage = (ImageURL) => {
    setSelectedImage(ImageURL)
  };

  return (<div className="App">
    <div className='container'>
      <h1 className='text-primary text-left' style={{display:'flex',justifyContent:'center'}}>Image List</h1>
      {data && <ImageList data={data} onImageClick={handleSelectedImage}/>}
      {selectedImage && <BigImage imageURL={selectedImage}/>}
      {/* {data && <Table data={data}/>} */}
    </div>
  </div>)
}

export default App


// mydata = []
// for(let i=0;i<20;i++){
//   //we also can get number as random 
//   let ImageURL = `https://picsum.photos/id/${i}/50/50`;
//   mydata.push(ImageURL)
// }


// var app = angular.module("app", [])
// app.controller("ctr", function ($scope) {
// // $scope.fields = fields
// $scope.data = mydata
// $scope.selectedPic = 'https://picsum.photos/id/0/50/50'
// $scope.BigImage = 'https://picsum.photos/id/0/350/350';
// $scope.choosePic = function(bigImage){
//   $scope.selectedPic = bigImage
//  var manipulatedPicSize = bigImage.replace('/50/50','/350/350')
//   $scope.BigImage = manipulatedPicSize
// };
