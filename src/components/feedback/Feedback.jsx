// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import Button from "../button/Button.jsx";
import FeedbackCard from "../FeedbackCard.jsx";
import {feedbacks} from "../../data.js";

// eslint-disable-next-line react/prop-types
const Feedback = ({openModal,onCloseModal,onModalOpen,dontShowModal}) => {
    let [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [total, setTotal] = useState(0);
    const [allFeedbacks, setAllFeedbacks] = useState([]);

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        event.preventDefault()
    };

    const handleFeedbackTextChange = (event) => {
        const value = event.target.value;
        setFeedback(value);
        event.preventDefault();
    };

    const handleRate = (event) => {
        const value = event.target.value;
        setTotal(value);
    };
    const handleSubmitFeedback = () => {
        if (!name.trim() || !feedback.trim()) {
            alert("Введите значения поля");
            return;
        }

        const newFeedback = {
            name: name,
            feedback: feedback,
            total: total,
        };

        const savedDataString = localStorage.getItem('allData');
        const savedData = JSON.parse(savedDataString) || [];

        const updatedFeedbacks = [...savedData, newFeedback];

        // Сохраняем обновленный список в локальном хранилище
        localStorage.setItem('allData', JSON.stringify(updatedFeedbacks));

        // Обновляем состояние для отображения нового отзыва
        setAllFeedbacks(updatedFeedbacks);
        setFeedback("");
        setName('');
    };


    return (
        <div className="feedbackInput_container">
            <h2>Оставьте ваш отзыв</h2>
            <label htmlFor="">Ваше имя</label>
            <input
                name={name}
                className="feedbackInput"
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor="selectRate">Оставьте оценку от 0 до 10</label>
            <select onChange={handleRate} value={total} name="selectRate" id="feedbackSelect">
                {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            <textarea
                className="feedback_textarea"
                placeholder={"Напишите отзыв"}
                value={feedback}
                onChange={handleFeedbackTextChange}
                cols="30"
                rows="10"
            ></textarea>
            <Button
                onClickBtn={() => {
                    handleSubmitFeedback();
                    if (!name.trim() || !feedback.trim()) {
                        dontShowModal();
                    } else {
                        onModalOpen();
                        name={name}
                    }
                }}
            >
                Отправить
            </Button>
            {allFeedbacks.map((feed, index) => (
                <FeedbackCard key={index} {...feed} />
            ))}
            {feedbacks.map((f) => (
                <FeedbackCard key={f.id} {...f} />
            ))}
        </div>
    );
};
export default Feedback;