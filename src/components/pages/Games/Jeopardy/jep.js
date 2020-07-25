import React from "react";

const headerHeight = "75";

const styles = {
  maindiv: {
    margin: "auto",
    width: "1000px",
    paddingTop: "50px",
  },
  col: {
    width: "200px",
    float: "left",
    backgroundColor: "black",
  },
  colHeader: {
    width: "200px",
    height: "75px",
    border: "1px solid #000",
    backgroundColor: "blue",
    lineHeight: `${headerHeight}px`,
    textAlign: "center",
    color: "#cbfdff",
    fontSize: "1.5em",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "15px",
  },
};

class Flipper extends React.Component {
  render() {
    let Q = Object.keys(this.props.data);
    let A = this.props.data[Q];

    return (
      <div className='flip-container'>
        <div className='flipper'>
          <div className='front'>
            <p>{Q}</p>
          </div>
          <div className='back'>
            <p>{A}</p>
          </div>
        </div>
      </div>
    );
  }
}

class Column extends React.Component {
  render() {
    console.log(this.props.data);
    let header = Object.keys(this.props.data)[0]; //should only be one
    console.log("header");
    console.log(header);

    let flippers = this.props.data[header].map((e, i) => (
      <Flipper data={e} key={i} />
    ));

    return (
      <div style={styles.col}>
        <div style={styles.colHeader}>{header}</div>
        {flippers}
      </div>
    );
  }
}

class Jeopardy extends React.Component {
  render() {
    //headlines is an array like ['headline one', 'headline 2', etc...]
    let headlines = Object.keys(this.props.data);

    let cols = [];

    for (var h = 0; h < headlines.length; h++) {
      //for every headline...
      let r = {}; //the result to send to Column
      let QnA = this.props.data[headlines[h]]; //QnA is an array of objects like [ {q1:a1}, {q2:a2}, etc...]
      r[headlines[h]] = QnA; //r is now like {'headline 1' : QnA array here}

      cols.push(<Column data={r} key={~~(Math.random() * 100000)} />);
    }

    return <div style={styles.maindiv}>{cols}</div>;
  }
}

let stubQuestions = {
  "Headline One": [
    { "question 1": "answer 1-1" },
    { "question 1": "answer 1-2" },
    { "question 1": "answer 1-3" },
    { "question 1": "answer 1-4" },
    { "question 1": "answer 1-5" },
  ],
  "Headline Two": [
    { "question 2": "answer 2-1" },
    { "question 2": "answer 2-2" },
    { "question 2": "answer 2-3" },
    { "question 2": "answer 2-4" },
    { "question 2": "answer 2-5" },
  ],
  "Headline Three": [
    { "question 3": "answer 3-1" },
    { "question 3": "answer 3-2" },
    { "question 3": "answer 3-3" },
    { "question 3": "answer 3-4" },
    { "question 3": "answer 3-5" },
  ],
  "Headline Four": [
    { "question 4": "answer 4-1" },
    { "question 4": "answer 4-2" },
    { "question 4": "answer 4-3" },
    { "question 4": "answer 4-4" },
    { "question 4": "answer 4-5" },
  ],
  "Headline Five": [
    { "question 5": "answer 5-1" },
    { "question 5": "answer 5-2" },
    { "question 5": "answer 5-3" },
    { "question 5": "answer 5-4" },
    { "question 5": "answer 5-5" },
  ],
};

let actualQuestions = {
  Reddit: [
    { "This sub has the most subscribers": "/r/askReddit, with 17,478,021" },
    { "This is the name of Reddits mascot": "Snoo" },
    { "$5.00": "What is the cost of Reddit Gold" },
    { "What year was Reddit created?": "2005" },
    { "Why am I doing this?": "I am bored as hell." },
  ],
  JavaScript: [
    { "1 == true": "true" },
    { '"" + 0 == true': "false" },
    { 'typeof "apple" == false': "false" },
    { '~~("apple") == false': "true" },
    { "0.1 + 0.2 == 0.3": "false" },
  ],
  OP: [
    { "If mad at OP, this is who you direct critiques to": "OPs mom" },
    { "OP is a _____ ______ ___": "you know it, but Im not putting it here" },
    { "Likely cause of OPs death": "Dying in a fire" },
    { "The method OP used to kill you in COD": "Camping. Filthy casual." },
    { "The OP is literally worse than this person": "Hitler" },
  ],
  "Cat, or Dog?": [
    { "Haz Cheesburger": "cat" },
    { "Whos a good boy?": "dog" },
    { "Animated tv show on Nickelodeon": "catdog" },
    { "Likely to chase a duck": "cat" },
    { "Likely to be chased by a duck": "dog" },
  ],
  "Before & After": [
    { "question 5": "answer 5-1" },
    { "question 5": "answer 5-2" },
    { "question 5": "answer 5-3" },
    { "question 5": "answer 5-4" },
    { "question 5": "answer 5-5" },
  ],
};
let useActualQuestions = true; // set to true to use my questions instead of the stubs
let data = useActualQuestions ? actualQuestions : stubQuestions;

export default Jeopardy;
