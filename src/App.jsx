import Rating from "./components/Rating";
import Rate from "./components/Rate";
import { useState } from "react";
function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <>
      {showThankYouPage ? (
        <Rate rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThankYouPage={setShowThankYouPage}
        />
      )}
    </>
  );
}

export default App;
