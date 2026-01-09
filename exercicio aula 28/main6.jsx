const MyHeader = styled.h1`
padding: 10px 20px;
background-color: #007bff;
color: white;
`;

const MyBody = styled.h2`
padding: 10px 20px;
background-color: #ff0000ff;
color: white;
`;

function App() {
return (
<>
<MyHeader>Welcome!</MyHeader>
<MyBody>This is my styled header</MyBody>
</>
);
}

ReactDOM.render(<App />, document.getElementById('root'));