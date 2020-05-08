import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}

export default ({ muscles, onSelect, category }) => {
    const index = category ? muscles.findIndex(group => group === category) + 1 : 0;
    const width = useWidth();
    console.log(width);
    const onIndexSelected = (event, index) => {
        onSelect(index === 0 ? '' : muscles[index - 1]);
    }

    return <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
        <Tabs
            value={index}
            onChange={onIndexSelected}
            indicatorColor="secondary"
            textColor="secondary"
            centered={width !== 'xs' && width !== 'sm'}
            variant={width === 'xs' || width === 'sm' ? "scrollable" : "standard"}
        >
            <Tab label="All" />
            {muscles.map(group =>
                <Tab key={group} label={group} />
            )}
        </Tabs>
    </AppBar>
}    