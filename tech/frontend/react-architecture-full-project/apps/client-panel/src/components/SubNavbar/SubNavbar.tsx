import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ExclamationCircle, type HTMLDivProps } from "ui";

import { ISubNavbarProps } from "@app-types/index";

type Props = HTMLDivProps & ISubNavbarProps;

export const SubNavbar = ({ links, keepSearchParams, ...props }: Props) => {
    const spanRef = useRef<HTMLSpanElement>(null!);
    const location = useLocation();
    useEffect(() => {
        if (spanRef.current) {
            // make element visible
            spanRef.current.scrollIntoView({ inline: "center", block: "center" });
        }
    }, [location]);

    // keep previous search params if specified
    const previousSearchParams = keepSearchParams ? location.search : "";

    return (
        <div {...props}>
            <div className="links-container">
                {links.map((link) => (
                    <NavLink
                        to={`${link.to}${previousSearchParams}`}
                        key={link.text}
                        className={`link ${link.className}`}
                    >
                        {({ isActive }) => (
                            <span className="link-content">
                                <span ref={isActive ? spanRef : null}>{link.text}</span>
                                <ExclamationCircle className="error-icon" />
                            </span>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
