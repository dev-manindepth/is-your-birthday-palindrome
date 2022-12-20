import "./styles.css";
import instaLogo from "./assets/instagram.svg";
import githubLogo from "./assets/github-alt.svg";
import linkedInLogo from "./assets/linkedin-alt.svg";
import twitterLogo from "./assets/twitter-alt.svg";
import { useState } from "react";
export default function App() {
  const [birthDay, setBirthDay] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const getDateInAllFormat = (date) => {
    const ddmmyyyy = date.day + date.month + date.year;
    const mmddyyyy = date.month + date.day + date.year;
    const yyyymmdd = date.year + date.month + date.day;
    const ddmmyy = date.day + date.month + date.year.slice(-2);
    const mmddyy = date.month + date.day + date.year.slice(-2);
    const yyddmm = date.year.slice(-2) + date.day + date.month;

    const dates = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
    const datesWithoutZeros = dates.map((date) =>
      date
        .split("")
        .filter((char) => char !== "0")
        .join("")
    );
    // console.log(datesWithoutZeros);
    // console.log(ddmmyyyy, mmddyyyy, yyyymmdd);
    // return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
    return [...dates, ...datesWithoutZeros];
  };
  const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
  };
  const isBirthDayPalindrome = () => {
    if (!birthDay) {
      setResult("");
      return setError("Please Select your birthday");
    }
    const [yyyy, mm, dd] = birthDay.split("-");
    const date = {
      day: dd,
      month: mm,
      year: yyyy
    };

    const datesInAllFormat = getDateInAllFormat(date);
    for (let i = 0; i < datesInAllFormat.length; i++) {
      if (isPalindrome(datesInAllFormat[i])) {
        return setResult("🎉 Yay!! Your birthday is palindrome");
      }
    }
    setResult("😔 Your birthday is not palindrome");
    setError("");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Palindrome Birthday!</h1>
        <p className="input-label">Enter Your Birthdate</p>
        <input
          type="date"
          value={birthDay}
          onChange={(e) => setBirthDay(e.target.value)}
          onClick={() => setResult("")}
        />
        <div className="error">{error}</div>
        <button className="submit-btn" onClick={isBirthDayPalindrome}>
          Show
        </button>

        <div className="result">{result}</div>
      </div>
      <footer>
        <div className="footer-container">
          <div> &copy; | 2022 | natkhatbalak</div>
          <div className="social-links">
            <div>
              {" "}
              <a
                href="https://github.com/dev-manindepth"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={githubLogo} alt="social link" />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://www.linkedin.com/in/manish-kumar-a7913818a/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={linkedInLogo} alt="social link" />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://twitter.com/Manishk73087268"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={twitterLogo} alt="social link" />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://www.instagram.com/manishpatedhawala/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={instaLogo} alt="social link" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
