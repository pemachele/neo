import logo from './logo.svg';
import './App.css';
import{getResults} from "./Services";
import SearchPage from "./View/SearchPage";



function App() {
    //         const url='https://api.twitter.com/1.1/search/tweets.json';
    // const token='AAAAAAAAAAAAAAAAAAAAALq%2BJQEAAAAAWazLr8OF4fqSc40DomDUvQ97KKc%3Dj6GTYzE6kA90QkEnH0PAxEINENX8cLMk8h8Rh1WyouV9xAiy1x'
    // axios.get(url,
    //     { headers: { Authorization: `Bearer ${token}` } }
    //    ).then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
  return (
    <div className="App">
        <SearchPage/>
        {/*{console.log(getResults())}*/}

    </div>
  );
}

export default App;
