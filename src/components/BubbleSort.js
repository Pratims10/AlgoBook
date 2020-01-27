import React, { Component } from 'react'
import './Sort.css';
var bubblectr=0;
var sorted=false;
var width=50;
var reset=true;
var color1='rgb(0, 204, 0)';
var timeouts=[]
var skip=false
//var ctr1=0;
class BubbleSort extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ar:[],
             n:20,
             delay:250.0
        }
        this.resetArray=this.resetArray.bind(this);
    }

    componentDidMount(){
        this.resetArray();
        reset=true;
        sorted=false;
        document.getElementById('skip').disabled=true;
    }
    componentDidUpdate(){
        if(skip===true)
        {
            console.log("sa");
            for(let i=0;i<this.state.n;i++)
            {
                const arr_bar=document.getElementsByClassName('array-bar');
                arr_bar[i].style.backgroundColor='blue';
            }
        }
        else console.log("ASDDF");
    }
    resetCSS(){
        let arr=this.state.ar;
            arr.sort(function(a, b){return a - b});
            this.setState({
                ar:arr
            })
        for(let i=0;i<this.state.n;i++)
        {
            const arr_bar=document.getElementsByClassName('array-bar');
            arr_bar[i].style.backgroundColor='blue';
        }
    }

    resetArray(){
        reset=true;
        sorted=false;

        let array = [];
        for (let i = 0; i < this.state.n; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({
            ar:array
        });
        if(bubblectr===1)
        for(let i=0;i<this.state.n;i++)
        {
            const arr_bar=document.getElementsByClassName('array-bar');
            arr_bar[i].style.transform='translateX(0px)';
            arr_bar[i].style.backgroundColor='blue';
        }
        bubblectr=1;
    }
    
    buttons(x){
        document.getElementById('reset').disabled=x;
        document.getElementById('selectionsort').disabled=x;
        document.getElementById('bubblesort').disabled=x;
        document.getElementById('insertionsort').disabled=x;
        document.getElementById('arr_size').disabled=x;
        document.getElementById('delay').disabled=x;
        document.getElementById('skip').disabled=!x;
        if(x===true)
        {
            for(let i=0;i<this.state.n;i++)
            {
                const arr_bar=document.getElementsByClassName('array-bar');
                arr_bar[i].style.transform='translateX(0px)';
                arr_bar[i].style.backgroundColor='blue';
            }
        }
        sorted= !x;
    }

    changeArrSize(){
        var x=document.getElementById('arr_size');
        bubblectr=0;
        let wdth=.8*window.innerWidth;
        let n1=Math.floor(x.value*3.6);
//doubt about width formula
        width=Math.floor(wdth/n1)-2;
        this.setState({
            n:n1
        },function(){
            this.resetArray();
            const arr_bar=document.getElementsByClassName('array-bar');
            if(typeof arr_bar==='undefined')
            for(let i=0;i<this.state.n;i++)
            {
                arr_bar[i].style.backgroundColor='blue';
            }
        })
    }

    changeDelay(){
        let x=document.getElementById('delay');
        let val;
        if(x.value>=1450)
        val=.05;
        else if(x.value>=1350)
        val=.1;
        else if(x.value>=1250)
        val=.25;
        else if(x.value>=1150)
        val=.5;
        else if(x.value>1000)
        val=.75;
        else val=1001-x.value;
        this.setState({
            delay:val
        },function(){
            if(sorted===true)
            {
                let arr=this.state.ar;
                arr.sort(function(a, b){return a - b});
                this.setState({
                    ar:arr
                })
            }
            for(let i=0;i<this.state.n;i++)
            {
                const arr_bar=document.getElementsByClassName('array-bar');
                arr_bar[i].style.backgroundColor='blue';
            }
        })
    }

    skipAnimations(){
        skip=true;
        for(let i=0;i<timeouts.length;i++)
        window.clearTimeout(timeouts[i]);
        const arr_bar=document.getElementsByClassName('array-bar');
        for(let i=0;i<this.state.n;i++)
        {
            arr_bar[i].style.transform='translateX(0px)';
        }
        let arr=this.state.ar;
        arr.sort(function(a, b){return a - b});
        this.setState({
            ar:arr
        })
        for(let i=0;i<this.state.n;i++)
        {
            arr_bar[i].style.backgroundColor=color1;
        }
        this.buttons(false);
        timeouts=[];
        skip=false;
    }

    //Bubble Sort
    BubbleSortAnimations(){
        let animations=[];
        let ar=this.state.ar;
        for(let i=0;i<this.state.n-1;i++)
        {
            for(let j=0;j<this.state.n-1-i;j++)
            {
                if(ar[j]>ar[j+1])
                {
                    animations.push({
                        i:j,
                        j:j+1,
                        color:'red',
                        swap:false
                    })
                    let t=ar[j];
                    ar[j]=ar[j+1];
                    ar[j+1]=t;
                    animations.push({
                        i:j,
                        j:j+1,
                        color:'green',
                        swap:true
                    })
                    animations.push({
                        i:j,
                        j:j+1,
                        color:'green',
                        swap:false
                    })
                }
                else{
                    animations.push({
                        i:j,
                        j:j+1,
                        color:'green',
                        swap:false
                    })
                }
            }
            animations.push({
                i:this.state.n-1-i,
                j:-1,
                color:'orange',
                swap:false
            })
        }
        animations.push({
            i:0,
            j:-1,
            color:'orange',
            swap:false
        })
        return animations;
    }

    bubbleSort()
    {
        timeouts=[]
        if(reset===false)
        this.resetCSS();
        this.buttons(true);
        const animations=this.BubbleSortAnimations();
        let ptr=[];
        for(let i=0;i<this.state.ar.length;i++)
        ptr[i]={
            i:i,
            ctr:0
        };
        let len=animations.length;
        const arr_bar=document.getElementsByClassName('array-bar');
        for(let i=0;i<len;i++)
        {
            let idx1=animations[i].i;
            let idx2=animations[i].j;
            if(idx2===-1)
            {
                let qq=setTimeout(() => {
                    arr_bar[ptr[idx1].i].style.backgroundColor=color1;
                    if(idx1>0 && arr_bar[ptr[idx1-1].i].style.backgroundColor==='palegreen')
                    arr_bar[ptr[idx1-1].i].style.backgroundColor='blue';
                }, i*this.state.delay);
                timeouts.push(qq)
                continue;
            }
            if(animations[i].swap===true)
            {
                let qq=setTimeout(() => {
                         ptr[idx1].ctr+=1;
                         let y=ptr[idx1].ctr*(width+2);
                         arr_bar[ptr[idx1].i].style.transform=`translateX(${y}px)`
                         ptr[idx2].ctr-=1;
                         y=ptr[idx2].ctr*(width+2);
                         arr_bar[ptr[idx2].i].style.transform=`translateX(${y}px)`
                         let tm=ptr[idx1];
                         ptr[idx1]=ptr[idx2];
                         ptr[idx2]=tm;
                         arr_bar[ptr[idx1].i].style.backgroundColor='palegreen';
                         arr_bar[ptr[idx2].i].style.backgroundColor='palegreen';
                     }, i*this.state.delay);
                     timeouts.push(qq);
            }
            else
            {
                if(animations[i].color==='green')
                {
                    let qq=setTimeout(() => {
                        if(idx1>0&&arr_bar[ptr[idx1-1].i].style.backgroundColor==='palegreen')
                        arr_bar[ptr[idx1-1].i].style.backgroundColor='blue';
                        arr_bar[ptr[idx1].i].style.backgroundColor='palegreen';
                        arr_bar[ptr[idx2].i].style.backgroundColor='palegreen';
                    }, i*this.state.delay);
                    timeouts.push(qq);
                }
                else
                {
                    let qq=setTimeout(() => {
                        if(idx1>0&&arr_bar[ptr[idx1-1].i].style.backgroundColor==='palegreen')
                        arr_bar[ptr[idx1-1].i].style.backgroundColor='blue';
                        arr_bar[ptr[idx1].i].style.backgroundColor='red';
                        arr_bar[ptr[idx2].i].style.backgroundColor='red';
                    }, i*this.state.delay);
                    timeouts.push(qq);
                }
            }
        }
        let qq=setTimeout(() => {
            this.buttons(false);
            reset=false;
        }, (animations.length+1)*this.state.delay);
        timeouts.push(qq);
    }

    //Selection Sort
    selectionSortAnimations(){
        let animations=[]
        let ar=this.state.ar
        for(let i=0;i<this.state.n;i++)
        {
            let min=1000000001,minpos;
            for(let j=i+1;j<this.state.n;j++)
            {
                if(min>ar[j])
                {
                    min=ar[j];
                    minpos=j;
                    animations.push({
                        i:i,
                        j:j,
                        color:'orange'
                    })
                }
                else{
                    animations.push({
                        i:i,
                        j:j,
                        color:'palegreen'
                    })
                }
            }
            animations.push({
                i:-1,
                j:0,
                color:'dummy'
            })
            if(ar[i]>ar[minpos])
            {
                let temp=ar[i];
                ar[i]=ar[minpos];
                ar[minpos]=temp;
                animations.push({
                    i:i,
                    j:minpos,
                    color:'swap'
                })
            }
            animations.push({
                i:i,
                j:-1,
                color:'green'
            })
        }
        return animations;
    }

    selectionSort(){
        timeouts=[]
        if(reset===false)
        this.resetCSS();
        this.buttons(true);
        const animations=this.selectionSortAnimations();
        let ptr=[];
        let previdx=-1;
        for(let i=0;i<this.state.ar.length;i++)
        ptr[i]={
            i:i,
            ctr:0
        };
        let len=animations.length;
        const arr_bar=document.getElementsByClassName('array-bar');
        for(let i=0;i<len;i++)
        {
            let idx1=animations[i].i;
            let idx2=animations[i].j;
            if(idx1===-1)
            {
                let qq=setTimeout(() => {
                    if(arr_bar[ptr[this.state.n-1].i].style.backgroundColor==='palegreen')
                    arr_bar[ptr[this.state.n-1].i].style.backgroundColor='blue';
                }, i*this.state.delay);
                timeouts.push(qq);
            }
            else if(idx2===-1)
            {
                let qq=setTimeout(() => {
                    arr_bar[ptr[idx1].i].style.backgroundColor=color1;
                }, i*this.state.delay);
                previdx=-1;
                timeouts.push(qq);
            }
            else
            {
                if(animations[i].color==='swap')
                {
                    let qq=setTimeout(() => {
                        ptr[idx1].ctr+=idx2-idx1;
                        let y=ptr[idx1].ctr*(width+2);
                        arr_bar[ptr[idx1].i].style.transform=`translateX(${y}px)`
                        ptr[idx2].ctr-=idx2-idx1;
                        y=ptr[idx2].ctr*(width+2);
                        arr_bar[ptr[idx2].i].style.transform=`translateX(${y}px)`
                        let tm=ptr[idx1];
                        ptr[idx1]=ptr[idx2];
                        ptr[idx2]=tm;
                        arr_bar[ptr[idx1].i].style.backgroundColor='palegreen';
                        arr_bar[ptr[idx2].i].style.backgroundColor='blue';
                    }, i*this.state.delay);
                    timeouts.push(qq);
                }
                else
                {
                    if(animations[i].color==='palegreen')
                    {
                        let qq=setTimeout(() => {
                            arr_bar[ptr[idx1].i].style.backgroundColor='palegreen';
                            arr_bar[ptr[idx2].i].style.backgroundColor='palegreen';
                            if(arr_bar[ptr[idx2-1].i].style.backgroundColor==='palegreen')
                            arr_bar[ptr[idx2-1].i].style.backgroundColor='blue';
                        }, i*this.state.delay);
                        timeouts.push(qq);
                    }
                    else
                    {
                        let qq=setTimeout(() => {
                            arr_bar[ptr[idx1].i].style.backgroundColor='palegreen';
                            if(previdx>=0&&arr_bar[previdx].style.backgroundColor==='orange')
                            arr_bar[previdx].style.backgroundColor='blue';
                            previdx=ptr[idx2].i;
                            arr_bar[ptr[idx2].i].style.backgroundColor='orange';
                            if((ptr[idx2-1].i !== ptr[idx1].i) && (arr_bar[ptr[idx2-1].i].style.backgroundColor==='palegreen' || arr_bar[ptr[idx2-1].i].style.backgroundColor==='orange'))
                            arr_bar[ptr[idx2-1].i].style.backgroundColor='blue';
                        }, i*this.state.delay);
                        timeouts.push(qq);
                    }
                }
            }
        }
        let qq=setTimeout(() => {
            this.buttons(false);
            reset=false;
        }, (animations.length+1)*this.state.delay)
        timeouts.push(qq);
    }

    //Insertion Sort
    insertionSortAnimations(){
        let animations=[]
        let ar=this.state.ar;
        for(let i=0;i<this.state.n;i++)
        {
            let j=i;
            animations.push({
                i:i,
                j:-2,
                color:'red'
            })
            while(j>0 && ar[j]<ar[j-1])
            {
                animations.push({
                    i:j,
                    j:j-1,
                    color:'swap'
                })
                animations.push({
                    i:-1,
                    j:-1,
                    color:'delay'
                })
                let temp=ar[j];
                ar[j]=ar[j-1];
                ar[j-1]=temp;
                j--;
            }
            animations.push({
                i:j,
                j:-1,
                color:'green'
            })
        }
        return animations;
    }

    insertionSort(){
        timeouts=[]
        if(reset===false)
        this.resetCSS();
        this.buttons(true);
        const animations=this.insertionSortAnimations();
        let ptr=[];
        for(let i=0;i<this.state.ar.length;i++)
        ptr[i]={
            i:i,
            ctr:0
        };
        let len=animations.length;
        const arr_bar=document.getElementsByClassName('array-bar');
        for(let i=0;i<len;i++)
        {
            let idx1=animations[i].i;
            let idx2=animations[i].j;
            if(idx1===-1)
            {
                let qq=setTimeout(() => {
                    
                }, i*this.state.delay);
                timeouts.push(qq);
            }
            else if(idx2===-1)
            {
                let qq=setTimeout(() => {
                    arr_bar[ptr[idx1].i].style.backgroundColor=color1;
                }, i*this.state.delay);
                timeouts.push(qq);
            }
            else if(animations[i].color==='red')
            {
                let qq=setTimeout(() => {
                    arr_bar[ptr[idx1].i].style.backgroundColor='red';
                }, i*this.state.delay);
                timeouts.push(qq);
            }
            else
            {
                let qq=setTimeout(() => {
                    ptr[idx1].ctr+=idx2-idx1;
                    let y=ptr[idx1].ctr*(width+2);
                    arr_bar[ptr[idx1].i].style.transform=`translateX(${y}px)`
                    ptr[idx2].ctr-=idx2-idx1;
                    y=ptr[idx2].ctr*(width+2);
                    arr_bar[ptr[idx2].i].style.transform=`translateX(${y}px)`
                    let tm=ptr[idx1];
                    ptr[idx1]=ptr[idx2];
                    ptr[idx2]=tm;
                    arr_bar[ptr[idx2].i].style.backgroundColor='red';
                }, i*this.state.delay);
                timeouts.push(qq);
            }
        }
        let qq=setTimeout(() => {
            this.buttons(false);
            reset=false;
        }, (animations.length+1)*this.state.delay);
        timeouts.push(qq);
    }

    render() {
        let i;
        for(i=1000;i>=0;i--)
        {
            let wdth=.8*window.innerWidth;
            let n1=Math.floor(i*3.6);
            let width1=Math.floor(wdth/n1)-2;
            if(width1>0)
            break;
        }
        let maxn=i;
        let str;
        let ctr1=0;
         if(reset===false)
        str=this.state.ar.map((x) => (
            <div className="array-bar" key={ctr1++ + 'e'} style={{backgroundColor: 'blue',height: `${x}px`, width:`${width}px`}}> </div>
            ))
        else
        str=this.state.ar.map((x) => (
            <div className="array-bar" key={ctr1++ + 'w'} style={{backgroundColor: 'blue',height: `${x}px`, width:`${width}px`, transform:'translateX(0px)', transition:`transform ${this.state.delay}ms linear`}}> </div>
            ))
        return (
            <div>
            <h1 style={{color:'black'}}>Sorting Visualizer</h1>
            <span>Data size</span>
            <input type="range"  min={2} max={maxn} defaultValue={4} onChange={()=>this.changeArrSize()} className="slider" id="arr_size"/>
            <button onClick={()=>this.resetArray()} id='reset'>Reset</button>
            <button onClick={()=>this.bubbleSort()} id='bubblesort'>Bubble Sort</button>
            <button onClick={()=>this.selectionSort()} id='selectionsort'>Selection Sort</button>
            <button onClick={()=>this.insertionSort()} id='insertionsort'>Insertion Sort</button>
            <button onClick={()=>this.skipAnimations()} id='skip'>Skip</button>
            <span>Speed</span>
            <input type="range"  min={1} max={1505} defaultValue={751} onChange={()=>this.changeDelay()} className="slider" id="delay"/>
            <div className="array-container">
            { str }
            </div>
            </div>
        )
    }
}
// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export default BubbleSort
