import { type RefObject, useEffect, useState } from "react";

export function useNavigationOverflow(navRef: RefObject<HTMLElement | null>) {
    const [hasOverflow, setHasOverflow] = useState(false);

    useEffect(() => {
        const nav = navRef.current;

        if (!nav) {
            return;
        }

        const updateOverflow = () => {
            setHasOverflow(nav.scrollWidth > nav.clientWidth + 1);
        };

        updateOverflow();
        const observer = new ResizeObserver(updateOverflow);
        observer.observe(nav);

        return () => observer.disconnect();
    }, [navRef]);

    return hasOverflow;
}

export function useHorizontalNavigationScroll(
    headerRef: RefObject<HTMLElement | null>,
    navRef: RefObject<HTMLElement | null>,
) {
    useEffect(() => {
        const header = headerRef.current;

        if (!header) {
            return;
        }

        const handleWheel = (event: WheelEvent) => {
            const nav = navRef.current;

            if (!nav || nav.scrollWidth <= nav.clientWidth) {
                return;
            }

            nav.scrollLeft += event.deltaY;
            event.preventDefault();
        };

        header.addEventListener("wheel", handleWheel, { passive: false });

        return () => header.removeEventListener("wheel", handleWheel);
    }, [headerRef, navRef]);
}

export function useHeaderScrollState() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateHeaderState = () => setIsScrolled(window.scrollY > 16);

        updateHeaderState();
        window.addEventListener("scroll", updateHeaderState, { passive: true });

        return () => window.removeEventListener("scroll", updateHeaderState);
    }, []);

    return isScrolled;
}
