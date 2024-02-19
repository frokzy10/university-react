import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

const TeachingSection = () => {
    return (
        <div>
            <section className="podhod">
                <h3 className="podhodTitle">Наш подход к обучению</h3>
                <ul>
                    {ways.map((way) => {
                        return <WayToTeach key={way.id} {...way} />
                    })}
                </ul>
            </section>
        </div>
    );
};

export {TeachingSection}