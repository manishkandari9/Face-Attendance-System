import React, { useState, useRef, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import CameraIcon from '@mui/icons-material/Camera';
import StopIcon from '@mui/icons-material/Stop';
import FaceIcon from '@mui/icons-material/Face';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import axios from 'axios';

export default function Scan() {
  const [isActive, setIsActive] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [emotions, setEmotions] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [studentData, setStudentData] = useState({
    name: '',
    branch: '',
    year: '',
    rollNumber: '',
  });
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      setIsScanning(true);
      startScan();
    }
  }, [isActive]);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error('Error accessing camera:', err);
      });
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
    setIsScanning(false);
    setIsActive(false);
  };

  const startScan = () => {
    setTimeout(() => {
      captureImage();
    }, 10000);
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      const formData = new FormData();
      formData.append('image', blob, 'capture.png');

      axios.post('http://localhost:3000/upload', formData)
        .then(response => {
          const detectedFaces = response.data.faces;
          if (detectedFaces.length > 0) {
            setOpenForm(true);
            setEmotions(detectedFaces);
          } else {
            alert("No face recognized. Please try again.");
          }
        })
        .catch(err => {
          console.error('Error uploading image:', err);
        });
    }, 'image/png');
  };

  const handleFormChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    console.log('Student Data:', studentData);
   
    setOpenForm(false); 
    setStudentData({
      name: '',
      branch: '',
      year: '',
      rollNumber: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">
          <FaceIcon className="mr-2 text-5xl" />
          Face Recognition
        </h1>

        <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-6">
          <video
            ref={videoRef}
            autoPlay
            className="absolute inset-0 w-full h-full object-cover"
          />

          {isScanning && (
            <div className="absolute inset-0 bg-transparent flex items-center justify-center z-10">
              <div className="scan-overlay w-full h-full absolute inset-0"></div>
            </div>
          )}
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <Button
            variant="contained"
            color={isActive ? "secondary" : "primary"}
            startIcon={isActive ? <StopIcon /> : <CameraIcon />}
            onClick={() => {
              setIsActive(!isActive);
              if (!isActive) {
                startCamera(); 
              } else {
                stopCamera(); 
              }
            }}
            className={`py-3 px-6 text-lg ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}
          >
            {isActive ? 'Stop' : 'Start'} Recognition
          </Button>
        </div>

        <div className="bg-indigo-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800 flex items-center">
            <SentimentSatisfiedAltIcon className="mr-2" />
            Detected Emotions
          </h2>
          {emotions.length > 0 ? (
            <ul>
              {emotions.map((emotion, index) => (
                <li key={index} className="text-gray-600">
                  Face {index + 1}: {emotion.landmarks.length} landmarks detected
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">
              Emotion detection results will appear here once the recognition is active.
            </p>
          )}
        </div>
      </div>

      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogTitle>Student Registration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={studentData.name}
            onChange={handleFormChange}
          />
          <TextField
            margin="dense"
            name="branch"
            label="Branch"
            type="text"
            fullWidth
            variant="outlined"
            value={studentData.branch}
            onChange={handleFormChange}
          />
          <TextField
            margin="dense"
            name="year"
            label="Year"
            type="text"
            fullWidth
            variant="outlined"
            value={studentData.year}
            onChange={handleFormChange}
          />
          <TextField
            margin="dense"
            name="rollNumber"
            label="Roll Number"
            type="text"
            fullWidth
            variant="outlined"
            value={studentData.rollNumber}
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

    
      <style jsx>{`
        .scan-overlay {
          background: rgba(0, 0, 255, 0.3);
          animation: scan 10s linear 1;
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        video {
          filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.3));
        }
      `}</style>
    </div>
  );
}
