import React from 'react';

function BlogPost({ title, content, image, imageAlt, additionalContent }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.content}>
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} style={styles.paragraph}>{paragraph}</p>
        ))}
      </div>
      {image && <img src={image} alt={imageAlt} style={styles.image} />}
      {additionalContent && (
        <div style={styles.additionalContent}>
          {additionalContent.split('\n\n').map((paragraph, index) => (
            <p key={index} style={styles.paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    borderBottom: '1px solid #ddd',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  content: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '20px',
  },
  paragraph: {
    marginBottom: '1.5em',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  additionalContent: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#555',
    marginTop: '20px',
  },
  bold: {
    fontWeight: 'bold',
  },
};

export default BlogPost;
