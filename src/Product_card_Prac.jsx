function Product_card_Prac(props){
    return(
        <div style={StyleSheet.card}>
            <img src={props.image} alt="product" style={styles.image} />
            <h3>{props.title}</h3>
            <p style={props.price}>${props.price}</p>
            <p>⭐ {props.rating}</p>
            <button style={styles.button}></button>


        </div>
    );
}

const styles = {
    card :{
        width: "250px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        margin: "10px"
        },
    image :{
        width: "100%",
        height: "180px",
        objectFit: "cover"
     },
    price: {
        color : "green",
        fontWeight: "bold"
    },
    button: {
        backroundColor: "#f0c14b",
        border: "none",
        padding: "8px 12px",
        cursor: "pointer",
        marginTop: "10px"
    }
};

export default Product_card_Prac;