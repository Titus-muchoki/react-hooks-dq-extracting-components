// ResultItem.js
function ResultItem(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Price: {props.price}</p>
        <p>Location: {props.location}</p>
      </div>
    );
  }
  
  export default ResultItem;
  
  // App.js
  import ResultItem from "./ResultItem";
  
  function App() {
    return (
      <div>
        <ResultItem name="Bubby's" price="$$$" location="Tribeca" />
        <ResultItem name="Nathan's Famous" price="$" location="Coney Island" />
      </div>
    );
  }