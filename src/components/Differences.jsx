import Button from "./button/Button.jsx";
import {differnences} from "../data.js";
import {useState} from "react";

const Differences = () => {
    const [contentType, setContentType] = useState(null);
    function handleClick(type) {
        setContentType(type);
    }
    return (
        <div>
            <section className='btns'>
                <h3 className={'buttonTitle'}>Чем мы отличаемся от других</h3>
                <Button isActive={contentType === 'way'} onClickBtn={() => handleClick('way')}>Подход</Button>
                <Button isActive={contentType === 'easy'}
                        onClickBtn={() => handleClick('easy')}>Доступность</Button>
                <Button isActive={contentType === 'program'}
                        onClickBtn={() => handleClick('program')}>Концентрация</Button>
                <div className='buttonShowDescriptions'>
                    {contentType ? <p >{differnences[contentType]}</p> : <p>Нажми на кнопку</p>}
                </div>
            </section>
        </div>
    );
};

export {Differences};
