const name = 'maria';
const today = new Date();

function DateComponent() {
  return (
    <>
     <p>Olá, {name}. Hoje é {today.toLocaleDateString()}.</p>
    
    </>
  );
}
ReactDOM.render(<DateComponent />, document.getElementById('root'));
