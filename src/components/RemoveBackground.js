import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActionStatus } from "../features/removeBackground";
import loadImage from "blueimp-load-image";

export default function RemoveBackground() {
    const status = useSelector((state) => state.status.bgRemoved);
    const dispatch = useDispatch();

    let blob = null;

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [progress, setProgress] = useState(0);

    const imgUpload = (e) => {
        setSelectedFiles(e.target.files);
        var input = document.getElementById("upload");
        var infoArea = document.getElementById("upload-label");
        var fileName = input.files.length > 1 ? `${input.files.length} files selected` : input.files[0].name;
        infoArea.textContent = "File name: " + fileName;
    };

    const uploadImages = async () => {
        dispatch(setActionStatus(false));
        setLoading(true);
        const results = [];
        const errorMessages = [];
        const totalFiles = selectedFiles.length;
        let processedFiles = 0;

        for (let file of selectedFiles) {
            const resizedImage = await loadImage(file, {
                // resize before sending to Remove.bg for performance
                maxWidth: 500,
                maxHeight: 500,
                canvas: true,
            });

            resizedImage.image.toBlob(async function (inputBlob) {
                const formData = new FormData();
                formData.append("image_file", inputBlob);

                try {
                    const response = await fetch("https://sdk.photoroom.com/v1/segment", {
                        method: "POST",
                        headers: {
                            "X-Api-Key": "deed47790c2a7859eca191ceb2c52b6bffb26622",
                        },
                        body: formData,
                    });

                    if (response.status === 200) {
                        dispatch(setActionStatus(true));
                        const outputBlob = await response.blob();
                        const imageUrl = URL.createObjectURL(outputBlob);
                        results.push({ url: imageUrl, error: null });
                    } else {
                        throw new Error("Failed to remove background");
                    }
                } catch (error) {
                    console.error('Error removing background:', error);
                    errorMessages.push(`Error processing ${file.name}: ${error.message}`);
                    results.push({ url: null, error: error.message });
                }

                processedFiles += 1;
                setProgress(Math.round((processedFiles / totalFiles) * 100));
                setImages(results);
                setErrors(errorMessages);

                if (processedFiles === totalFiles) {
                    setLoading(false);
                }
            });
        }
    };

    return (
        <div className="row py-4">
            <div className="col-lg-6 mx-auto text-center">
                <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                    <input
                        id="upload"
                        type="file"
                        multiple
                        onChange={imgUpload}
                        className="form-control border-0"
                    />
                    <label
                        id="upload-label"
                        htmlFor="upload"
                        className="font-weight-light text-muted"
                    >
                        Choose files
                    </label>

                    <div className="input-group-append">
                        <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4">
                            {" "}
                            <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                            <small className="text-uppercase font-weight-bold text-muted">
                                Choose files
                            </small>
                        </label>
                    </div>
                </div>
                <button
                    className="btn btn-outline-light remove-button"
                    onClick={uploadImages}
                    disabled={loading}
                >
                    {loading ? `Processing... ${progress}%` : 'Remove Background'}
                </button>
                <div>
                    <div className="row py-4">
                        <div className="col-lg-6 mx-auto text-center">
                            <p className="font-italic text-white text-center">
                                The result will be rendered inside the box below.
                            </p>
                            <div className="image-area mt-4 justify-content-center">
                                {loading && (
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
                                )}
                                {!loading && images.map((image, index) => (
                                    image.error ?
                                    <div key={index} style={{ color: 'red' }}>{image.error}</div> :
                                    <img
                                        key={index}
                                        id={`imageResult${index}`}
                                        src={image.url}
                                        alt={`Processed ${index}`}
                                        className="img-fluid rounded shadow-sm mx-auto d-block"
                                    />
                                ))}
                            </div>
                            {status && images.map((image, index) => (
                                image.url &&
                                <a key={index} id={`down${index}`} href={image.url} download={`img${index}.jpeg`}>
                                    <button className="btn btn-light down-button">
                                        {" "}
                                        <i className="fas fa-download" /> Download
                                    </button>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
