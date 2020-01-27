import React from 'react';
import {Bar,defaults} from 'react-chartjs-2';

defaults.global.animation=false;

var i1=0,j1=0;
const ar=[65, 59, 80, 81, 56, 55, 40,85,24,77,33,40];
var data1=ar.map((x)=>{
    return({
      label: 'ar[i]',
      backgroundColor: 'rgb(77, 121, 255)',
      hoverBackgroundColor:'rgb(77, 121, 255)',
      borderColor: 'black',
      borderWidth:1,
      data: [x]
    })
})
const data2 = {
  datasets: data1
};
//console.log(data2.datasets);
class Sort extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             i:0,
             j:0,
             finished:ar.length,
             data:data2,
             start:0
        }
    }
    componentDidMount(){
      console.log(this.state.data.datasets);
    }

    bubbleSort(){
        let n=ar.length;
//        n--;
        for(;i1<n-1;i1++)
        {
            for(;j1<n-1-i1;j1++)
            {
                setTimeout(() => {
                    let x=this.state.data;
                    x.datasets[j1].backgroundColor='yellow';
                    x.datasets[j1].hoverBackgroundColor='yellow';
                    x.datasets[j1+1].backgroundColor='yellow';
                    x.datasets[j1+1].hoverBackgroundColor='yellow';
                    if(j1>0){
                        x.datasets[j1-1].backgroundColor='rgb(77, 121, 255)';
                        x.datasets[j1-1].hoverBackgroundColor='rgb(77, 121, 255)';
                    }
                    this.setState(prev=>({
                        data:x,
                        start:1
                    })
                )},j1* 1000)
//                if(ar[i1]>ar[i1+1])
//                {
//                    let t=ar[i1];
//                    ar[i1]=ar[i1+1];
//                    ar[i1+1]=t;
//                }
            }
            j1=0;
        }
    }
    bubbleSort1(){
      let n=ar.length;
      for(let i=0;i<n;i++)
      {
        setTimeout(() => {
          let x=this.state.data;
          x.datasets[i].backgroundColor='yellow';
          x.datasets[i].hoverBackgroundColor='yellow';
          this.setState({
            data:x,
            start:1
          })
        }, 1000);
      }
    }

  render() {
      let str=this.state.start===1? <button onClick={this.bubbleSort1()}>Start</button> : <button onClick={()=>this.bubbleSort1()}>Start</button>
    return (
      <div>
        <h2>Bubble Sort</h2>
        <Bar
          data={this.state.data}
          width={100}
          height={250}
          options={{
            maintainAspectRatio: false,
            scales: {
                xAxes: [{display: true,gridLines:{display:false}}],
                yAxes:[{display:false}]
            }
          }}
        />
        {str}
      </div>
    );
  }
};
export default Sort;