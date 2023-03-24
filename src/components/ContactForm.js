import React, { useState, useEffect, useRef } from 'react';

export default function ContactForm(props) {

    const [feedback, setFeedback] = useState({
        name: "", email: "", date: "", eatInOrOut: "", service: "",
        food: "", value: "", howWasExperience: "", howExperienceCouldBeBetter: "", otherComments: ""
    });

    const inputChanged = (event) => {
        setFeedback({ ...feedback, [event.target.name]: event.target.value });
    }

    const addFeedback = (event) => {
        let feedbackString = JSON.stringify(feedback);
        alert(feedbackString);
    }

    // Page output
    return (
        <div id="gridContainer">
            <div id="one">
                <h2>🍔 Feedback Form 🍟</h2>
                <hr class="solid"></hr>
            </div>
            {/* User input elements */}
            <div id="two">
                <label>Name:</label>
            </div>
            <div id="twoR">
                <input type="text" onChange={inputChanged} name="name" value={feedback.name} />
            </div>
            <div id="three">
                <label>Email:</label>
            </div>
            <div id="threeR">
                <input type="text" onChange={inputChanged} name="email" value={feedback.email} />
            </div>
            <div id="four">
                <label>Day Visited:</label>
            </div>
            <div id="fourR">
                <input type="date" onChange={inputChanged} name="date" value={feedback.date} />
            </div>
            <div id="five">
                <label>Did you</label>
            </div>
            <div id="fiveR">
                <input type="radio" id="eatin" onChange={inputChanged} name="eatInOrOut" value="eatin" />
                <label>eat in</label>
                <label> / </label>
                <input type="radio" id="takeout" onChange={inputChanged} name="eatInOrOut" value="takeout" />
                <label>take out</label>
            </div>
            <div id="six">
                <label>Service:</label>
            </div>
            <div id="sixR">
                <input type="radio" onChange={inputChanged} name="service" value="1" />
                <label>1</label>
                <input type="radio" onChange={inputChanged} name="service" value="2" />
                <label>2</label>
                <input type="radio" onChange={inputChanged} name="service" value="3" />
                <label>3</label>
                <input type="radio" onChange={inputChanged} name="service" value="4" />
                <label>4</label>
                <input type="radio" onChange={inputChanged} name="service" value="5" />
                <label>5</label>
            </div>
            <div id="seven">
                <label>Food:</label>
            </div>
            <div id="sevenR">
                <input type="radio" onChange={inputChanged} name="food" value="1" />
                <label>1</label>
                <input type="radio" onChange={inputChanged} name="food" value="2" />
                <label>2</label>
                <input type="radio" onChange={inputChanged} name="food" value="3" />
                <label>3</label>
                <input type="radio" onChange={inputChanged} name="food" value="4" />
                <label>4</label>
                <input type="radio" onChange={inputChanged} name="food" value="5" />
                <label>5</label>
            </div>
            <div id="eight">
                <label>Value for money:</label>
            </div>
            <div id="eightR">
                <input type="radio" onChange={inputChanged} name="value" value="1" />
                <label>1</label>
                <input type="radio" onChange={inputChanged} name="value" value="2" />
                <label>2</label>
                <input type="radio" onChange={inputChanged} name="value" value="3" />
                <label>3</label>
                <input type="radio" onChange={inputChanged} name="value" value="4" />
                <label>4</label>
                <input type="radio" onChange={inputChanged} name="value" value="5" />
                <label>5</label>
            </div>
            <div id="nine">
                <label>How was your experience?</label>
                <br></br>
                <textarea onChange={inputChanged} name="howWasExperience" rows="4" cols="50" />
            </div>
            <div id="ten">
                <label>How could we improve?</label>
                <br></br>
                <textarea onChange={inputChanged} name="howExperienceCouldBeBetter" rows="4" cols="50" />
            </div>
            <div id="eleven">
                <label>Any other comments?</label>
                <br></br>
                <textarea onChange={inputChanged} name="otherComments" rows="4" cols="50" />
            </div>
            <div id="twelve">
                <button onClick={addFeedback}>Submit</button>
            </div>
        </div >
    );
}