import { ReactElement } from "react";
import { className } from "../shared/ClassName";
import styles from "./Slide.module.scss";

export enum SlideAnimationType {
    rightToLeft,
    bottomToTop,
}

export interface ISlideProps {
    heading?: string;
    paragraph?: string;
    image: string;
    animationType: SlideAnimationType;
    appearing?: boolean;
    zIndex?: number;
}

export default function Slide(props: ISlideProps): ReactElement {
    return (
        <div {...className({
            [styles.container]: true,
            [styles.appearRightToLeft]: props.appearing && props.animationType === SlideAnimationType.rightToLeft,
            [styles.appearBottomToTop]: props.appearing && props.animationType === SlideAnimationType.bottomToTop,
            [styles.disappearRightToLeft]: !props.appearing && props.animationType === SlideAnimationType.rightToLeft,
            [styles.disappearBottomToTop]: !props.appearing && props.animationType === SlideAnimationType.bottomToTop,
        })}>
            <div className={styles.banner} style={{zIndex: props.zIndex }}>
                <h1 className={styles.heading}>{props.heading}</h1>
                <div className={styles.paragraph}>{props.paragraph}</div>
            </div>
            <img className={styles.image} src={props.image} alt={props.heading} />
        </div>
    );
}
