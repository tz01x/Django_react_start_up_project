import React, { useState } from 'react';

import NAVbar from './nav/navbar'
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import KeyboardArrowRightSharpIcon from '@material-ui/icons/KeyboardArrowRightSharp';
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));
function App(props) {
 
  const classes = useStyles();
  const [values, setValues] = React.useState({
    user: '',
    address: '',
    phone: '', 
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [submintFrom,setsubmintFrom]=React.useState(false);
  const[meds,set_meds ]= React.useState([{
    med_name:'',
    quantity:0
  }]);
// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];
const heandleChange_ = (i,name,event)=>{
  const all_med=[...meds];
  all_med[i][`${name}`]=event.target.value;
set_meds(all_med);
// console.log(event.target.value);
}
const handleChange = name => event => {

  setValues({ ... values, [name]: event.target.value });
};

const addMed=()=>{
  const all_med=[...meds];
  all_med.push({med_name:'',quantity:0})
  set_meds(all_med);
};

const handleRemove= i =>{
  const all_med=[...meds];
  all_med.splice(i,1);
  set_meds(all_med);
}

const _onSubmit_form=(event)=>{
  event.preventDefault();
  const value=[{...values,med:meds}]
  console.log(value[0]);
  
// console.log(values.name);
// console.log(values.address);
// console.log(values.phone);


// axios.post(`http://127.0.0.1:8000/request_med_Serializers_create_api/`, value[0])
// .then(res => {
//   console.log(res);
//   console.log(res.data);
// });
fetch('./create/', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers : {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body:JSON.stringify(value[0])
            }).then((res) => res.json())
            .then((data) => {
              // console.log(data)
              // alert('Succesfull');

              // setsubmintFrom(true);
              handleClickOpen();

            } )
            .catch((err)=>alert(err));

};

function add_another(e){
  // console.log(e);
  const all_med=[...meds];
  all_med.push({med_name:'',quantity:0})
  set_meds(all_med);
}
  return (

  // <Some_props />
  <div>
    
    <form onSubmit={_onSubmit_form}>
    
    <TextField
        id="standard-with-placeholder"
        label="name"
        value={values.user}
        placeholder="you name"
        className={classes.textField}
        onChange={handleChange('user')}
        margin="normal"
        type='text'
      />
       <TextField
        id="standard-with-placeholder"
        label="Phone"
        value={values.phone}
        type='number'

        placeholder="enter you phone"
        onChange={handleChange('phone')}
        className={classes.textField}
        // multiline
        margin="normal"
      />
      <TextField
        id="standard-full-width"
        label="Address"
        value={values.address}

        onChange={handleChange('address')}
        style={{ margin: 8 }}
        placeholder="you address"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      {/* <button type='button'onClick={add_another}>add more</button> */}
      {
        meds.map((field,idx)=>{
          return(
            <div key={`${field}-${idx}`}>
              {/* <input
              type="text"
              placeholder="Enter text"
              onChange={e => heandleChange_(idx,'name',e)}
            /> */}
            <Med_field values={field}  idx={idx}classes={classes} handleChange={heandleChange_} handleRemove={handleRemove}/>
            
            </div>
          );

        })

      }

    <Button onClick={add_another} color="primary">
      Add more
    </Button>
      
      
      {/* <input type="submit" className="btn" onClick={_onSubmit_form}></input> */}
      

      <Button
       onClick={_onSubmit_form}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<KeyboardArrowRightSharpIcon />}
      >
        submit
      </Button>
      
      
    </form>




        {/* <TextField
        id="standard-select-currency"
        select
        label="Select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField> */}

  <Dia_log handleClose={handleClose} open={open}></Dia_log>
  </div>
  
  );
}

export default App;

const Some_props = (props)=> {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    </div>
  );
  
}





const Card = (props) => {

  return (
    <option value={props.value}>{props.label}</option>
  );

}
const Med_field=(props)=>{
  return (   
  <div>

<TextField
    id="standard-with-placeholder"
    label="medicin name"
    value={props.values.med_name}
    placeholder="you name"
    className={props.classes.textField}
    onChange={e=>{props.handleChange(props.idx,'med_name',e)}}
    margin="normal"
    type='text'
  />
   <TextField
    id="standard-with-placeholder"
    label="quantity"
    value={props.values.quantity}
    type='number'

    placeholder="enter you phone"
    onChange={e=>{props.handleChange(props.idx,'quantity',e)}}
    className={props.classes.textField}
    // multiline
    margin="normal"
  />

    

    <Button onClick={() => props.handleRemove(props.idx)} color="secondary" className={props.classes.button}>
    Remove
    </Button>
     
  </div>
 

  );

    
}
// const appTEmp =(props)=>{
//   return (
//     // const stateArr = React.useState({
//     //   counter: 'what the f',
//     // });
//     // const styel = {
//     //   color: "red",
//     // };
  
//     const [currentState, Function_updateState] = stateArr; //array destructuring
//     //starArr first element will be current state , or currnet data. and secound element is update state , this tell react we will change state
//     const changeName = (event) => {
//       Function_updateState({
//         counter: event.target.value,
//       });
//     };
//     const [selectedOption, setSelectOption] = useState('');
  
//     const options = [
//       { value: 'chocolate', label: 'Chocolate' },
//       { value: 'strawberry', label: 'Strawberry' },
//       { value: 'vanilla', label: 'Vanilla' },
//     ];
//     const handleChange = (e) => {
//       console.log(e.target.value);
//     };
//     // list_property = (
//     //   currnt_persons.people.map((value, index) => {
//     //     return <LIST Change_name={(event) => Change_name(event, index)} name={value['name']} key={value['id']} id={value['id']} />
//     //   }));
//     const options_list = (
//       options.map((value, index) => {
//         return (<Card value={value.value} label={value.label} key={index} />
//         );
//       })
//     );
//    const changeFrom=()=>{
  
//    }
  
//     return (
  
//       <div className="App">
//         <header>
//           <NAVbar />
//           <p></p>
//         </header>
  
//         <br></br>
//         {/* <h1 style={styel}>My first react app {currentState.counte
//         r}</h1>
//         <p>hello</p> */}
  
//         {/* <select id="lang" onChange={handleChange} value={selectedOption}>
//           {options_list}
//         </select> */}
//   <form onSubmit={(event)=>{event.preventDefault;
//     console.log(e)}
//     }>
//   <div>
//   <label>full_name</label>
//   <input type='text' name='full_name' onChange={changeFrom}></input>
//   </div>
//   <div>
//   <label>phone_number</label>
//   <input type='text' name='phone_number' placeholder='phone number' onChange={changeFrom}></input>
//   </div><div>
//   <label>address</label>
//   <input type='text' name='address' onChange={changeFrom}></input>
//   </div>
//   <div><input type='submit'/></div>
//   </form>
        
//       </div>
//   );
// }

const Dia_log =(props)=>{
  return (   
<Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
  <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
    From sbmited sucessefull
  </DialogTitle>
  <DialogContent dividers>
    <Typography gutterBottom>
      Your request been , submited sucessefuly ,
      
    </Typography>
    <Typography gutterBottom>
      we will contract with you soon as possible .
    </Typography>
   
  </DialogContent>
  <DialogActions>
    <Button onClick={props.handleClose} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>
);
}