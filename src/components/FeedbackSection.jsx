// eslint-disable-next-line no-unused-vars
import React, {useRef, useState, useEffect} from "react";
import Feedback from "./feedback/Feedback.jsx";
import Button from "./button/Button.jsx";

const FeedbackSection = () => {
    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef(null);
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [reason, setReason] = useState("help");
    const [needName, setNeedName] = useState("");

    const ModalOpen = () => {
        setOpenModal(true);
        document.body.classList.add("modal-open");
    };

    const addClassesToModal = () => {
        const modalElement = modalRef.current;
        if (modalElement) {
            modalElement.classList.add("activeModal");
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        document.body.classList.remove("modal-open");
    };

    useEffect(() => {
        if (openModal) {
            addClassesToModal();
        }
    }, [openModal]);

    function handleNameChange(e) {
        setNeedName(e.target.value);
    }

    return (
        <section className="feedback_container">
            <Feedback
                openModal={openModal}
                onCloseModal={handleCloseModal}
                onModalOpen={ModalOpen}
                dontShowModal={handleCloseModal}
                name={name}
                setName={setName}
                feedback={feedback}
                setFeedback={setFeedback}
            />

            <h3 className="number">Обратная связь</h3>
            <form action="">
                <label htmlFor="name">Ваша фамилия</label>
                <input type="text" id="name" className="control" onChange={handleNameChange} value={needName}/>

                <label htmlFor="reason">Причина обращения</label>
                <select
                    className="control"
                    id="reason"
                    value={reason}
                    style={{
                        border: name.trim().length ? null : '1px solid red'
                    }}
                    onChange={e => setReason(e.target.value)}
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
                <Button>Отправить</Button>
                <pre >
                    Name: {needName}
                    <br/>
                    Reason: {reason}
                </pre>
            </form>

            <div ref={modalRef} className={`modal ${openModal ? 'open' : ''}`}>
                <div className="modal-content">
                    <h2>Ваш отзыв был оставлен</h2>
                    <div className="closeModal" onClick={handleCloseModal}>&times;</div>
                </div>
            </div>
        </section>
    );
};

export {FeedbackSection};