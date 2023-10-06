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
      const response = await fetch(`http://20.121.114.90:8000/gan/generate-image/`, {method: "POST", body: JSON.stringify({"text": inputText})});
      const data = await response.text();
      
      const dataUri = `data:image/jpeg;base64,${generatedImageUrl}`;
      
      setImageUrl(dataUri);
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
