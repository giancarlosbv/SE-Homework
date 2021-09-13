function Box (props){
    return (

        <div className={`${props.className}`}>
        
    <h1>
    {props.title}
        </h1>
    <p>
    {props.value}
        </p>
            </div>
    )

}

export default Box