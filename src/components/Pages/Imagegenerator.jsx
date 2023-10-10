import React, { useState } from 'react';

import './ImageGenerator.css';

import predefinedImage from '../../assest/predefined.jpg';

 

const ImageGenerator = () => {

  const [imageUrl, setImageUrl] = useState(predefinedImage);

  const [inputText, setInputText] = useState('');

  const [loading, setLoading] = useState(false);

 

  const generateImage = async () => {

    setLoading(true);

    try {

      const response = await fetch(`http://20.121.114.90:8000/gan/generate-image/`, {

        method: "POST",

        body: JSON.stringify({ "text": inputText }),

        headers: {

          'Content-Type': 'application/json',

        },

      });

      if (response.status === 200) {

        const data = await response.text();

        console.log(data)

        if (data) {

          const dataUri = atob(data);

          const uint8Array = new Uint8Array(dataUri.length);

                for (let i = 0; i < dataUri.length; i++) {

                    uint8Array[i] = dataUri.charCodeAt(i);

                }

          const blob = new Blob([uint8Array], { type: 'image/png' });      

          setImageUrl(URL.createObjectURL(blob));

        } else {

          console.error('Image data not found in the response');

        }

      } else {

        console.error('Server responded with an error status:', response.status);

      }

    } catch (error) {

      console.error('Error generating image:', error);

    } finally {

      setLoading(false);

    }

  };

 

  return (

    <div className="image-generator-container">

      <div>

        {loading ? (

          <div className="spinner"></div>

        ) : (

          <img src={imageUrl} alt="Generated" className="generated-image" />

        )}

      </div>

      <br />

      <div>

        <input

          type="text"

          placeholder="Enter Text"

          value={inputText}

          onChange={(e) => setInputText(e.target.value)}

        />

      </div>

      <div>

        <button onClick={generateImage} disabled={loading}>

          {loading ? 'Generating...' : 'Generate Image'}

        </button>

      </div>

    </div>

  );

};

 

export default ImageGenerator;
