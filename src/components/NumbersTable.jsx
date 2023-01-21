function NumbersTable(props){

    const table = [...Array(props.limit)];

    return (
        <div>
            {table.map((elem, index) => {
                if(index % 2 === 0){  
                 return   <div style={{backgroundColor:"white"}}>{index + 1}</div>
                }else{
                 return   <div style={{backgroundColor:"red", }}>{index + 1}</div>
                }

            })}

        </div>
    )
}

export default NumbersTable;