import { useSelector, useDispatch } from "react-redux";
import {ADD_COUNTER, MIN_COUNTER, RESET_COUNTER} from '../constants/type';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import card from '../asset/card.jpg'
import "./counter.css"

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


export default function Counter(){

    const counter = useSelector((state) => state.counterReducer);
    
     const dispatch = useDispatch();
     const subtractHandler = () => {
        
          dispatch({ type: MIN_COUNTER });
        
      };
      const addHandler = () => {
        dispatch({ type: ADD_COUNTER });
      };
      const reset = () => {
        dispatch({ type: RESET_COUNTER });
      };
      const classes = useStyles();
    return(
        <div>
            <img src={card} alt="card" className="bgcard" />
            <AddRoundedIcon  className='plus' fontSize='large' onClick= {addHandler} />
            <RemoveRoundedIcon className='sub' fontSize='large' onClick= {subtractHandler} />
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                className='reset'
                startIcon={<RotateLeftOutlinedIcon />}
                onClick={reset}
            >
                Reset
            </Button>
            <div className='count'>{counter.count}</div>
        </div>
        // <div>
        //     <div>{counter.count}</div>
        //     <button onClick={addHandler}>add</button>
        //     <button onClick={reset}>reset</button>
        //     <button onClick={subtractHandler}>subtract</button>
        // </div>
    )
}
