// eslint-disable-next-line react/prop-types
const FeedbackCard = ({name, feedback, total}) => {
    return (
        <div>
            <div className="feedback_card">
                <h2>{name}</h2>
                <p>{feedback}</p>
                <div>Оценка клиента: {total}</div>
            </div>
        </div>
    );
};

export default FeedbackCard;