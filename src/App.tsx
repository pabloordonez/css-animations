import { useState } from "react";
import "./App.scss";
import useEventHandler from "./hooks/UseEventHandler";
import Slide, { ISlideProps, SlideAnimationType } from "./Slide";

const slides: ISlideProps[] = [
    {
        heading: "Slide 1",
        paragraph: "This is the first slide",
        image: "./images/image-1.jpeg",
        animationType: SlideAnimationType.rightToLeft
    },
    {
        heading: "Slide 2",
        paragraph: "This is the second slide",
        image: "./images/image-2.jpeg",
        animationType: SlideAnimationType.rightToLeft,
    },
    {
        heading: "Slide 3",
        paragraph: "This is the third slide",
        image: "./images/image-3.jpeg",
        animationType: SlideAnimationType.bottomToTop,
    },
    {
        heading: "Slide 4",
        paragraph: "This is the fourth slide",
        image: "./images/image-4.jpeg",
        animationType: SlideAnimationType.bottomToTop,
    },
];

/*
TODO: create the inverse scroll

function getPreviousIndex(index: number): number {
    return index <= 0 ? 0 : index - 1;
}
*/

function getNextIndex(index: number): number {
    return index >= slides.length - 1 ? slides.length - 1 : index + 1;
}

function App() {
    const [currentSlideIndex, setSlideIndex] = useState(0);
    const [appearing, setAppearing] = useState(true);
    const currentSlide = slides[currentSlideIndex];

    currentSlide.zIndex = 1000;
    currentSlide.appearing = appearing;

    useEventHandler(document, "click", (e: MouseEvent) => {
        setAppearing(!appearing);

        setTimeout(() => {
            setSlideIndex(getNextIndex(currentSlideIndex));
            setAppearing(true);
        }, 3000);
    });

    return (
        <div className="App">
            <Slide key={currentSlideIndex} {...currentSlide} />
        </div>
    );
}

export default App;
