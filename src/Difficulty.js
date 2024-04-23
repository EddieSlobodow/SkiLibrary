
function Difficulty(props) {

    const styles = {
        backgroundColor: props.color,
        padding: "30px 16px",
        width: "88%",
        borderRadius: "5px",
        fontWeight: "bold",
    }

    return(
        <div style = {styles} >{props.text}</div>
    );
}

export default Difficulty;