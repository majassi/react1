const Person = (props) => {

    return(
        <div>
            <p>Navn: {props.name}</p>
            <p>Varighed: {props.age}</p>
            <p>Genre: {props.personality}</p>
            <hr></hr>
        </div>
    );



}

export default Person