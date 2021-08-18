import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ListWithCheckBoxItem({ list, handleChange }) {
    const classes = useStyles();
    const [checkedId, setCheckedId] = React.useState(null);

    const handleToggle = (id) => () => {
        // const currentIndex = checked.indexOf(value);
        // const newChecked = [...checked];

        // if (currentIndex === -1) {
        //     newChecked.push(value);
        // } else {
        //     newChecked.splice(currentIndex, 1);
        // }
        // handleChange(newChecked)
        // setChecked(newChecked);
        let newCheckedId = id;
        
        if(checkedId === newCheckedId){
            newCheckedId = null;
        }
        
        setCheckedId(newCheckedId);
        handleChange(newCheckedId)
    };
   

    return (
        <List className={classes.root}>
            {list.map((value) => {
                const labelId = `${value.id}`;

                return (
                    <ListItem key={value.id} role={undefined} dense button onClick={handleToggle(value.id)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checkedId === value.id}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${value.name}`} />
                    </ListItem>
                );
            })}
        </List>
    );
}
