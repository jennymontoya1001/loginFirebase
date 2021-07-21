import {types} from '../types/types';
import {firebase,google} from '../firebase/firebaseConfig';

export const loginGoogle = () =>{

     return (dispatch) =>{

      firebase.auth().signInWithPopup(google)
         .then(({user}) =>{
             console.log(user);
               dispatch(
                   login(user.uid,user.displayName)
               ) 
         })

     }
}



//Primera función asíncrona
export const loginEmailPassword = (email,password) =>{
    //devuelve un callback
     return (dispatch) =>{

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) =>{
              dispatch(
                  login(user.uid,user.displayName)
              ) 
        })
        .catch(e =>{
            console.log(e);
        })
     }
}

export const login = (id,displayName) => {
      return{
          type: types.login,
          payload:{
              id,
              displayName
          }

      }
}