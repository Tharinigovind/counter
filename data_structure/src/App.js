import React from 'react';
class Structure extends React.Component{
  constructor() {
    super();
    this.state = {
      arr : [1,2,3,4,5,6,7,8,9,10],
      searchElement: "",
      index: ""
    }
}
onChange(event) {
  this.setState({ searchElement: event.target.value})
}
binarySearch() {
    let searchElement = Number(this.state.searchElement);
    //console.log(searchElement);
    let arr = this.state.arr;
    //console.log(arr);
    let low = 0
    let high = arr.length-1
    let mid=Math.floor((low + high) / 2)
    //console.log(mid);
    while (arr[mid] !== searchElement && low < high) {
      if (searchElement < arr[mid]) {
        high= mid - 1
      } 
      else
       {
        low= mid + 1
       }
   mid =Math.floor((low+ high) / 2)
   //console.log(mid);
    }
   if(arr[mid] !==searchElement) 
   {
      this.setState({
       index:-1
      })
    }
   else
   this.setState({
     index:mid
   })
  }
render() {
    return (
        <div>
          <input name="searchElement" onChange={(e)=>this.onChange(e)}/>
          <button onClick={()=> this.binarySearch()}>Find</button>
          <span>{this.state.index}</span>
        </div>
    );
}}
export default Structure;
