//props is an object 

//props = {prodName: "t-shirt",color:"blue",price:"400"}

export function C1(props)
{
    return (
        <div>
            <h1>I have a {props.prodName} in {props.color} color which is around {props.price} rupees</h1>
        </div>
    )
}
//Excepted output: I have a t-shirt 
//Obtained output: I have a props.prodName

export function C2()
{
    return (
        <div>
            <h1>C2 component</h1>
        </div>
    )
}