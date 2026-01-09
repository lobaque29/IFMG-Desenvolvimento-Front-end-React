const Header = () => {
const myStyle = {
color: "white",
backgroundColor: "DodgerBlue",
padding: "10px",
fontFamily: "Sans-Serif"
};
const myStyle2 = {
color: "yellow",
backgroundColor: "Black",
};
return (
<>
<h1 style={myStyle}>Hello Style!</h1>
<p style={myStyle2}>Add a little style!</p>
</>
);
}

ReactDOM.render(<Header />, document.getElementById('root'));

