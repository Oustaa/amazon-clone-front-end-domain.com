import React, { useState } from "react";
import { InputGroup, StyledButton } from "../../styles";
import styled from "styled-components";
import { BsCaretUp, BsCaretDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const StyledQuestionsSection = styled.section`
  display: flex;
  padding-block: var(--spacing-xxl);
`;

const StyledQuestions = styled.div`
  width: 60%;
`;

const StyledQuestionContainer = styled.div`
  display: flex;
  & + & {
    margin-top: var(--spacing-xl);
  }

  .votes {
    border-right: 1px solid var(--dark-400);
    width: fit-content;
    padding-right: var(--spacing-lg);
    h4 {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--dark-500);
      span {
        color: var(--dark-700);
        font-size: 1.5rem;
      }
    }
  }
  .body {
    padding-left: var(--spacing-lg);
  }
  .body_group {
    display: flex;
    h4 {
      width: 13%;
      min-width: fit-content;
    }
  }
`;

const StyledAskQuestion = styled.form`
  width: 40%;
`;

const Questions = ({ product }) => {
  const username = useSelector((state) => state.auth.username);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async (e) => {
    e.preventDefault();

    if (question.length < 20) return;
    setLoading(true);
    try {
      const resp = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/products/question/${product._id}`,
        { text: question },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      const data = await resp.data;
      if (data.modifiedCount === 1) {
        setQuestion("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledQuestionsSection id="questions">
      <StyledQuestions>
        {product.QandA.length ? (
          product.QandA.map((question) => (
            <StyledQuestionContainer key={question._id}>
              <div className="votes">
                {/* <StyledButton bgColor="transparent" color="var(--dark-700)">
                <BsCaretUp />
              </StyledButton> */}
                <h4>
                  <span>{question.vote}</span>
                  votes
                </h4>
                {/* <StyledButton bgColor="transparent" color="var(--dark-700)">
                <BsCaretDown />
              </StyledButton> */}
              </div>
              <div className="body">
                <div className="body_group">
                  <h4>Question:</h4>
                  <h3>{question.question}</h3>
                </div>
                <div className="body_group">
                  <h4>Answer:</h4>
                  <h3>{question.answer}</h3>
                </div>
              </div>
            </StyledQuestionContainer>
          ))
        ) : (
          <>
            <h3>No questions</h3>
            <p>
              No questions was asked about this item, if you have somthing in
              mind don't hesitate to ask....
            </p>
          </>
        )}
      </StyledQuestions>
      <StyledAskQuestion onSubmit={askQuestion}>
        {username ? (
          <InputGroup>
            <label htmlFor="ask">
              <h3>Ask:</h3>
            </label>
            <textarea
              rows="4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
            <StyledButton>{loading ? "Loading" : "Ask"}</StyledButton>
          </InputGroup>
        ) : (
          <>
            <h2>Log in to ask a Question.</h2>

            <StyledButton>
              <Link to={"/login"} style={{ color: "white" }}>
                Log in
              </Link>
            </StyledButton>
          </>
        )}
      </StyledAskQuestion>
    </StyledQuestionsSection>
  );
};

export default Questions;
