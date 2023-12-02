import React,{useContext, useState} from "react";
import './main.css'
import op from './img/op.jpeg'
import np from './img/np.jpg'
import t3 from './img/t3.jpeg'
import axios from 'axios';
import arr from './img/arr.png'
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./usercontext";
function Register(){
  const { user, setUser } = useContext(UserContext);

  const images = [op, np, t3];
  const [errors,setErrors]=useState({})
  const [values,setValues] =useState({
    customer_Name:'',
    customer_Email:'',
    customer_Password:'',
  })
  let schema = yup.object().shape({
    customer_Name: yup.string().required('Nama diperlukan').min(4,'Minimum character for your name is 4'),
    customer_Email: yup.string().email('Masukkan alamat email yang valid').required('Email diperlukan').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Masukkan alamat email yang valid'),
    customer_Password: yup.string().min(8, 'Password harus memiliki setidaknya 8 karakter')
    .matches(/[A-Z]/, 'Password harus memiliki setidaknya 1 huruf kapital')
    .matches(/\d/, 'Password harus memiliki setidaknya 1 angka')
    .matches(/[@$!%*#?&]/, 'Password harus memiliki setidaknya 1 simbol unik')
    .required('Password diperlukan'),
  });
  const [currentImage, setCurrentImage] = useState(0);
  const navigate=useNavigate();
  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  }
  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('early try')
      await schema.validate(values, { abortEarly: false });
      setErrors({});
    } catch (err) {
      
      const newErrors = err.inner.reduce((acc, currentError) => {
        return {...acc, [currentError.path]: currentError.message};
      }, {});
      setErrors(newErrors);
      return;
    }
    
    axios.post('https://localhost:7132/api/Data/register', values)
      .then(res => {
        if (res.status === 200) {
          setUser(res.data);
          navigate('/');
        } else {
          alert(res.data.Error);
        }
      })
      .catch(err => console.log(err));
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
            <h2 className="font">Sign-Up</h2>
          </div>
          
          <form onSubmit={handlesubmit}>
            <div className="mt-5 mb-3 row"> 
              <label htmlFor="name" className="font col-sm-12 col-form-label text-start"><strong>Name</strong></label>
              <div className="col-sm-12">
                <input type="text" placeholder="Enter Name.." onChange={e=>
                  setValues({...values,customer_Name:e.target.value})
                } name='customer_Name' className="form-control rounded-0 mb-3 dark-input"/>
                {errors.customer_Name && <p className="font2">{errors.customer_Name}</p>}
              </div>
            </div>
            <div className="mb-3 row"> 
              <label htmlFor="email" className="font col-sm-12 col-form-label text-start "><strong>Email</strong></label>
              <div className="col-sm-12">
                <input type="email" placeholder="Enter Email.." name='customer_Email' onChange={e=>
                  setValues({...values,customer_Email:e.target.value})
                }className="form-control rounded-0 mb-3 dark-input"/>
                {errors.customer_Email && <p className="font2">{errors.customer_Email}</p>}
              </div>
            </div>
            <div className="mb-3 row"> 
              <label htmlFor="password" className="font col-sm-12 col-form-label text-start"><strong>Password</strong></label>
              <div className="col-sm-12">
                <input type="password" placeholder="Enter Password.." name='customer_Password' onChange={e=>
                  setValues({...values,customer_Password:e.target.value})
                }className="form-control rounded-0 mb-3 dark-input"/>
                {errors.customer_Password && <p className="font2">{errors.customer_Password}</p>}
              </div>
            </div>
            <p className="font text-start">By creating account you are agree to out terms and policies</p>
            <button style={{backgroundColor:'rgb(185, 185, 64)'}} type="submit" className="bt1 btn btn-success w-100 rounded-0 mb-3">Submit</button>
            
            <Link to='/Login' style={{color:'white', backgroundColor:'gray'}} className="bt2 btn  w-100 rounded-0 text-decoration-none mau">Log in</Link>
          </form>
        </div>
        
        <div className="mt-2 w-25">      
        
          <img style={{width:'100%',height:'100%'}} src={images[currentImage]} alt="op" className="w-100"/>         
        </div>
        <div>
        <img style={{width:20,height:20}} onClick={handleNext} src={arr} alt="tes" />
        </div>
        
      </div>
    </div>
  )
}

export default Register;
