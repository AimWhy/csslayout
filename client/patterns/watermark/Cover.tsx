/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                <div
                    style={{
                        color: 'rgba(0, 0, 0, 0.3)',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        transform: 'rotate(-45deg)',
                    }}
                >
                    Draft
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
