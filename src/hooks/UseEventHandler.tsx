import { useEffect } from "react";

export default function useEventHandler(control: HTMLElement | Document, eventName: string, callback: (...args: any[]) => void): void {
    useEffect(() => {
        control.addEventListener(eventName, callback);
        return () => control.removeEventListener(eventName, callback);
    }, [control, eventName, callback]);
}
