import React from 'react';

export default function ListTemplate({ src, children }) {
    return (
        <dl>
            {src.map(elem => (
                <React.Fragment key={elem}>
                    {children}
                </React.Fragment>
            ))}
        </dl>
    );
}