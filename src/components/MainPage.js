import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/backgroundImage.png'; // Ensure this path is correct

function MainPage() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <section style={styles.section}>
        <h2 style={styles.title}>Welcome to Joka Forum</h2>
        <p style={styles.description}>
          Joka Forum is our college community platform where you can share blogs, articles, and other resources that will be helpful for members. Whether you're discussing case competitions, hostel infrastructure, staff, or any other topic, this is the place to share your thoughts and ideas.
        </p>
      </section>

      <section style={styles.topicsSection}>
        <h3 style={styles.subtitle}>Topics</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <Link to="/social-enterprises" style={styles.link}>Creating, Managing, and Leading Social Enterprises Assignment</Link>
            <p style={styles.listDescription}>
              A collection of digital objects related to complex social problems created as part of the Social Enterprises course. <Link to="/social-enterprises" style={styles.linkMore}>Click more</Link> to view the full series.
            </p>
          </li>
          <li style={styles.listItem}>
            <Link to="/case-competitions" style={styles.link}>Case Competitions</Link>
            <p style={styles.listDescription}>
              Explore a variety of case competitions, strategies, and tips to excel. <Link to="/case-competitions" style={styles.linkMore}>Click more</Link> to discover the latest case comp guides.
            </p>
          </li>
          <li style={styles.listItem}>
            <Link to="/hostel-infrastructure" style={styles.link}>Hostel Infrastructure</Link>
            <p style={styles.listDescription}>
              Discuss and suggest improvements to our hostel facilities and infrastructure. <Link to="/hostel-infrastructure" style={styles.linkMore}>Click more</Link> to join the conversation.
            </p>
          </li>
          <li style={styles.listItem}>
            <Link to="/staff-feedback" style={styles.link}>Staff Feedback and Discussions</Link>
            <p style={styles.listDescription}>
              Share your thoughts and feedback on our college staff, and contribute to building a supportive environment. <Link to="/staff-feedback" style={styles.linkMore}>Click more</Link> to participate.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '40px 20px',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity here
    zIndex: 1,
  },
  section: {
    position: 'relative',
    zIndex: 2,
    marginBottom: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '20px',
    borderRadius: '8px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign: 'center',
  },
  topicsSection: {
    position: 'relative',
    zIndex: 2,
    marginTop: '20px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  listItem: {
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for better text visibility
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  },
  link: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1E90FF',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  linkMore: {
    fontSize: '1rem',
    color: '#1E90FF',
    textDecoration: 'underline',
    marginLeft: '5px',
  },
  listDescription: {
    fontSize: '1rem',
    marginTop: '5px',
    color: '#ccc',
  },
};

export default MainPage;
