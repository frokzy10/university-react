import Header from "./components/Header/Header.jsx";
import {Differences} from "./components/Differences.jsx";
import {TeachingSection} from "./components/TeachingSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import {FeedbackSection} from "./components/FeedbackSection.jsx";
import {Routes, Route} from "react-router-dom";


export default function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <IntroSection/>
                            <TeachingSection/>
                            <Differences/>
                        </>
                    }/>
                    <Route path="/feedback" element={
                        <>
                            <IntroSection/>
                            <FeedbackSection/>
                        </>
                    }/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </main>
        </>
    )
}

function Error() {
    return (
        <h2 className="error_title">Этот сайт не найден</h2>
    )
}