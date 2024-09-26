import React from 'react';

function BlogPost({ title, subtitle, subtopics, image, imageAlt, additionalContent }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      
      {subtitle && <h3 style={styles.subtitle}>{subtitle}</h3>}
      {image && <img src={image} alt={imageAlt} style={styles.image} />}
      {subtopics && subtopics.map((subtopic, index) => (
        <div key={index} style={styles.subtopicContainer}>
          {subtopic.title && <h4 style={styles.subtopicTitle}>{subtopic.title}</h4>}
          <div style={styles.subtopicContent}>
            {subtopic.content.split('\n\n').map((paragraph, i) => (
              <p key={i} style={styles.paragraph}>{paragraph}</p>
            ))}
          </div>
          {subtopic.image && <img src={subtopic.image} alt={subtopic.imageAlt} style={styles.subtopicImage} />}
        </div>
      ))}
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
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '10px',
  },
  subtopicContainer: {
    marginBottom: '20px',
  },
  subtopicTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '10px',
  },
  subtopicContent: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '10px',
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
  subtopicImage: {
    width: '100%',
    borderRadius: '8px',
    marginTop: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  additionalContent: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
    marginTop: '20px',
  },
};

export default BlogPost;
