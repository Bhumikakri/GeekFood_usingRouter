import './quote.css';
import list from './QuoteContent.json';
import Card from './QuoteCard';
const Quote = () =>{
    return(
        <>
        <div className="QuoteContainer">
        {
        list.map((content)=>{
          return<Card
          cotation={content.Details}
          name={content.Name}
          />
        })
      }
        </div>
        </>
    );
}

export default Quote;