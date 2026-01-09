function App() {
return (
<div>
<button className="mybutton primary">
My Primary Button
</button>
<br/>
<br/>
<button className="mybutton secondary">
My Secondary Button
</button>
<button className="mybutton tertiary">
  my tertiary button
</button>
</div>
);
}

ReactDOM.render(<App />, document.getElementById('root'));