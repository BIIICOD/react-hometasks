import { useEffect, useRef, useState } from 'react';
import styles from './HomeWork2.module.css';

interface ScrollWidgetProps {
    scrollTop: number;
}

export const HomeWork2 = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const containerHeight = containerRef.current?.offsetHeight;
        const contentHeight = document.getElementById('content')?.offsetHeight || 0;

        const newScroll = Math.floor(
            (containerRef.current.scrollTop * 100) /
            (contentHeight - containerHeight)
        );
        setScrollTop(newScroll);
    };

    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <ScrollWidget scrollTop={scrollTop} />
            <Content />
        </div>
    );
};

const ScrollWidget = ({ scrollTop }: ScrollWidgetProps) => {
    return (
        <p className={styles.ptext}>{scrollTop} %</p>
    );
};

const Content = () => {
    return (
        <div id='content' className={styles.content}>

        </div>
    );
};