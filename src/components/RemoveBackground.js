import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActionStatus } from "../features/removeBackground";
import loadImage from "blueimp-load-image";
import FormData from "form-data";

export default function RemoveBackground() {
  const status = useSelector((state) => state.status.bgRemoved);
  const dispatch = useDispatch();

  let blob = null;


  const [image, setImage] = useState(null);

  const imgUpload = (e) => {
    const img = e.target.files[0];
    var input = document.getElementById("upload");
    var infoArea = document.getElementById("upload-label");
    var fileName = input.files[0].name;
    infoArea.textContent = "File name: " + fileName;

    setImage(img);
  };

  const uploadImage = async () => {
    dispatch(setActionStatus(false));

    const resizedImage = await loadImage(image, {
      // resize before sending to Remove.bg for performance
      maxWidth: 500,
      maxHeight: 500,
      canvas: true,
    });

    resizedImage.image.toBlob(async function (inputBlob) {
      const formData = new FormData();
      formData.append("image_file", inputBlob);


      // Requires "axios" and "form-data" to be installed (see https://www.npmjs.com/package/axios and https://www.npmjs.com/package/form-data)
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const inputPath = '/path/to/file.jpg';
const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'azg5hfYYG3vhmQJs6wBjZfud',
  },
  encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync("no-bg.png", response.data);
})
.catch((error) => {
    return console.error('Request failed:', error);
});

      // const response = await fetch({
      //   method: 'post',url: 'https://api.remove.bg/v1.0/removebg',
      //   data: formData,
      //   responseType: 'arraybuffer',
      //   headers: {
      //     'X-Api-Key': 'azg5hfYYG3vhmQJs6wBjZfud',
      //   },
      //   encoding: 'null'
      // })
      // .then((response) => {
      //   // eslint-disable-next-line eqeqeq
      //   if(response.status != 200) return console.error('Error:', response.status, response.statusText);
      //   dispatch(setActionStatus(true));
      // })
      // .catch((error) => {
      //     return console.error('Request failed:', error);
      // });

      // if (response.status === 200) {
      //   dispatch(setActionStatus(true));
      // } else {
      //   dispatch(setActionStatus(false));
      // }

      const outputBlob = await response.blob();

      blob = URL.createObjectURL(outputBlob);
      const image= document.getElementById('imageResult')
      const down = document.getElementById("down");
      image.src = blob;
      down.href = blob;
      down.download = "pic.png";
    });
  };

  return (
    <div className="row py-4">
      <div className="col-lg-6 mx-auto text-center">
        <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
          <input
            id="upload"
            type="file"
            onChange={imgUpload}
            className="form-control border-0"
          />
          <label
            id="upload-label"
            htmlFor="upload"
            className="font-weight-light text-muted"
          >
            Choose file
          </label>

          <div className="input-group-append">
            <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4">
              {" "}
              <i className="fa fa-cloud-upload mr-2 text-muted"></i>
              <small className="text-uppercase font-weight-bold text-muted">
                Choose file
              </small>
            </label>
          </div>
        </div>
        <button
          className="btn btn-outline-light remove-button"
          onClick={uploadImage}
        >
          Remove Background
        </button>
        <div>
          <div className="row py-4">
            <div className="col-lg-6 mx-auto text-center">
              <p className="font-italic text-white text-center">
                The result will be rendered inside the box below.
              </p>
              <div className="image-area mt-4 justify-content-center">
                {status === false ? (
                  <div className="lds-roller mb-3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <img
                    id="imageResult"
                    src=""
                    alt=""
                    className="img-fluid rounded shadow-sm mx-auto d-block"
                  />
                )}{" "}
              </div>
              {status ? (

                   <a href="/#" id="down">
                  <button className="btn btn-light down-button">
                    {" "}
                    <i className="fas fa-download" /> Download
                  </button>
                  </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
