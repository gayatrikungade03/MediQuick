import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { URL } from "../../../config"
import { Link } from "react-router-dom";
//import medicineType from "../../../Components/medicineType"

const AddItem=()=>{

    const [name,setName]=useState('')
   /// const [type,setType]=useState([])
    const [price,setPrice]=useState('')
    const[imagePath,setImagePath]=useState('')
    const[isRequired,setIsRequired]=useState('')
    const [type, setType] = useState(-1)
     const types = ['allergy','pcm']


    const navigate=useNavigate()

    const save=()=>{
        if(name.length==0){
            toast.warning('Please enter medicine name')
        }else if(price.length==0){
            toast.warning('Please enter medicine price')
        }else if(type.length==0){
            toast.warning('Please enter medicine type')
        }else if(imagePath.length==0){
            toast.warning('Please enter medicine image path')
        }
        else {
            const body={
            name,
            price,
            type,
            imagePath,
            medicineItemId:sessionStorage['id'],
            pharmacyId:sessionStorage['restId'],
            }

        const url=`${URL}/pharmacymanager/addmedicineitem`
        axios.post(url,body).then((response)=>{
            const result=response.data
            if(result['status']=='SUCCESS'){
            toast.success('New item added')

           
            navigate('/menu')
            }else{
                toast.error(result['ERROR'])
            }

        })
    }
    }
    return(
     <div>
         <h2 className="title">Add Menu Items</h2>
           <div className="row">
             <div className="col"></div>
             <div className="col">
               <div className="form">
                    <div className="mb-3">
                        <label htmlFor="" className="label-control">
                                medicine Item Name
                        </label>
                        <input value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                        type="text" className="form-control"  required/>
                    </div>


                 
                {/* <div className="mb-2">
                    <label htmlFor="" className="label-control">
                            medicine Type
                    </label>
                    </div>
                    <div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                       
                    {/* <option selected>Open this select menu</option> */}
                    {/* <option value={}></option> */}
                    {/* <option value="id"></option>
                     <option value="id"></option> */}
                    {/* </select>
                  
                </div> */} 

                <div className="mb-3">
                        <label htmlFor="">Type</label>
                        <select
                        onChange={(e) => {
                            setType(e.target.value)
                        }}
                        className="form-control">
                        {types.map((type) => {
                            return (
                            <option value={type}>{type}</option>
                            )
                        })}
                        </select>
                    </div>

                <div className="mb-3">
                    <label htmlFor="" className="label-control">
                            Price
                    </label>
                    <input value={price}
                      onChange={(e)=>{
                          setPrice(e.target.value)
                      }}
                      type="number" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="label-control">
                            Image Url
                    </label>
                    <input value={imagePath}
                      onChange={(e)=>{
                          setImagePath(e.target.value)
                      }}
                      type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                        
                     <label htmlFor="" className="label-control">
                            urgently required
                    </label>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="id" id="flexCheckIndeterminate"/>
                    </div>
                </div>

                <div className="col-md text-center">
                    <button onClick={save} className="btn btn-primary">Add
                    </button>
                    <Link to={"/home"}><button type="button" className="btn btn-primary">Back To Home</button>
                    </Link>
                </div>  

            </div>
         </div>
            <div className="col"></div>
            </div>
        </div>
    )
}
export default AddItem