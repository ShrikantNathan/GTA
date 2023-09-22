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
      const response = await fetch("http://20.185.69.17:8000/gan/generate-image/", {
        method: "POST",
        body: JSON.stringify({ "text": inputText }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      const data = await response.json();
      const generatedImageUrl = data.imageUrl;
      setImageUrl(generatedImageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <div className="image-generator-container">
      <div>
        <img
          src={imageUrl}
          alt="Generated"
          className="generated-image"
          onLoad={() => console.log('Image loaded successfully')}
          onError={(e) => console.error('Error loading image:', e)}
        />
      </div>
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
