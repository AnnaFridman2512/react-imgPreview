
import { useState } from 'react';
import './App.css';

function App() {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);


  const handleImageChange = (e) =>{
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/png"];

    if(selected && ALLOWED_TYPES.includes(selected.type)){
      let reader = new FileReader();
      reader.onloadend = () =>{
        setImgPreview(reader.result);//show the img that is selected
      }
      reader.readAsDataURL(selected);
    }else{
      setError(true);
    }
  }

  return (
    <div className="App">
      <div className="container">
        {error && <p className="errorMsg">File not supported</p>}
      <div
       className="imgPreview"
       style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : "#131313"}} //if we choose am img- show preview, else show background color
       >
        {!imgPreview && (
          <>
          <p>Add pic</p>
          <label htmlFor="fileUpload" className="customFileUpload">Choose file</label>
          <input type="file" id="fileUpload" onChange={handleImageChange} />
          <span>(jpg, jpeg or png)</span>
          </>
        )}
      </div>
      {/*if imgPreview exists we render the button*/}
      {imgPreview && (
        <button onClick={()=> setImgPreview(null)}>Remove image</button>
      )}
    </div>
  </div>
  );
};

export default App;
