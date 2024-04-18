const callback = () =>{
    let a = 10
    let i = 1
    let x = 0
    let c = 0
    let y = 1
    let stop;
    let z = 1
    let intervalID = setInterval (() => {

        if(z){
            console.log(i+' : '+x)
            c=x
            x+=y
            y=c
            
        }
        
        i++
        if (i>a){
            stop = prompt ("Bitirmek ucun - Q - herfini daxil edin \nDavam etmek ucun - C - herfini daxil edin")
            if (stop.toUpperCase() == "Q"){
                x+=y
                z=5
            }else if(stop.toUpperCase() == "C"){
                a+=10
                z=1
            }else{
                console.log('Duzgun secim etmediniz')
                --i
                z=0
            }
        }
        if(z == 5){
            clearInterval(intervalID)
        }
    }, 300)
    
    return intervalID
}
callback()

