import React,{useState,useContext} from "react";
import './main.css'
import op from './img/op.jpeg'
import np from './img/np.jpg'
import t3 from './img/t3.jpeg'
import arr from './img/arr.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from 'yup'
import UserContext from "./usercontext";
function Login(){
  const { user, setUser } = useContext(UserContext);
  const images = [op, np, t3];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate=useNavigate();
  const [errors,setErrors]=useState({})
  axios.defaults.withCredentials=true;
  let schema = yup.object().shape({
    customer_Email: yup.string().email('Masukkan alamat email yang valid').required('Email diperlukan').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Masukkan alamat email yang valid'),
    customer_Password: yup.string().min(8, 'Password harus memiliki setidaknya 8 karakter')
    .matches(/[A-Z]/, 'Password harus memiliki setidaknya 1 huruf kapital')
    .matches(/\d/, 'Password harus memiliki setidaknya 1 angka')
    .matches(/[@$!%*#?&]/, 'Password harus memiliki setidaknya 1 simbol unik')
    .required('Password diperlukan'),
  });
  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
    
  }
  const [values,setValues] =useState({
    customer_Email:'',
    customer_Password:'',
  })
  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('early try')
      await schema.validate(values, { abortEarly: false });
      setErrors({});
    } catch (err) {
      console.log('early catch')
      const newErrors = err.inner.reduce((acc, currentError) => {
        return {...acc, [currentError.path]: currentError.message};
      }, {});
      setErrors(newErrors);
      return;
    }
    console.log('early axios')
    axios.post('https://localhost:7132/api/Data/login', values ,{ withCredentials: true })
      .then(res => {
        console.log('tes')
        if (res.status === 200) {
          setUser(res.data);
          navigate('/')
        } else {
          alert(res.data.Error)
        }
      })
      .catch(err => console.log(err))
  }

  return(
    <div className="d-flex justify-content-center align-items-center bg-black vh-100">
      <div className="cont1 mt-4 p-3 cont d-flex justify-content-around align-items-center w-75">
        <div className="mr-2 bg-black p-2 rounded w-50">
          <div className="position-absolute top-0 start-0 p-3">
            <p style={{fontSize:30, fontWeight: 'bold', fontStyle: 'italic', color:'#C9AE00' }}onClick={()=>{
              navigate('/')
            }}>CineMajesty</p>
          </div>
          <div className="text-start mt-1">
            <h2 className="font">Log-in</h2>
          </div>
          
          <form onSubmit={handlesubmit}>
            <div className="mb-3 row"> 
              <label htmlFor="email" className="font col-sm-12 col-form-label text-start "><strong>Email</strong></label>
              <div className="col-sm-12">
                <input type="email" placeholder="Enter Email.." name='customer_Email' className="form-control rounded-0 mb-3 dark-input"
                  onChange={e=>
                  setValues({...values,customer_Email:e.target.value})
                }
                />
                {errors.customer_Email && <p className="font2">{errors.customer_Email}</p>}
              </div>
            </div>
            <div className="mb-3 row"> 
              <label htmlFor="password" className="font col-sm-12 col-form-label text-start"><strong>Password</strong></label>
              <div className="col-sm-12">
                <input type="password" placeholder="Enter Password.." name='customer_Password' className="form-control rounded-0 mb-3 dark-input"
                  onChange={e=>
                  setValues({...values,customer_Password:e.target.value})
                }
                />
                {errors.customer_Password && <p className="font2">{errors.customer_Password}</p>}
              
              </div>
            </div>
            <button style={{backgroundColor:'rgb(185, 185, 64)'}} type="submit" className="bt1 btn btn-success w-100 rounded-0 mb-3">Submit</button>
            
            <Link to='/register'  style={{color:'white', backgroundColor:'gray'}} className="bt2 btn  w-100 rounded-0 text-decoration-none mau">Sign in</Link>
          </form>
        </div>
        
        <div className="mt-2 w-25">      
        <div className="" style={{ whiteSpace: 'normal',fontSize:30, fontWeight: 'bold', fontStyle: 'italic',}}>
          <p className="font">upcoming movies!</p>
        </div>   
          <img src={images[currentImage]} alt="op" className="w-100"/>         
        </div>
        <div>
        <img style={{width:20,height:20}} onClick={handleNext} src={arr} alt="tes" />
        </div>
        
      </div>
    </div>
  )
}

export default Login;
