import React from 'react';
import { useParams, useHistory } from "react-router-dom";

const FAQ = () => {

    let { faqID } = useParams();
    let history = useHistory();

    const handleClick = () => {
        history.push('/')
    }
  return <>

    <h2>{faqID}</h2>
    <br />
    FAQ's

    <button onClick={handleClick}>Navigate to Home page</button>
    </>;

};

export default FAQ;
