import React from 'react';
import BlogPost from './BlogPost';
import digitalDivideImage from '../assets/digital_divide.png';

function SocialEnterprisesPage() {
  const post = {
    title: 'Bridging the Digital Divide: A Reflection on Education Access in Rural India',
    subtitle: 'Understanding the challenges and opportunities in rural education.',
    subtopics: [
      {
        title: 'Personal Reflection: Barriers to Success',
        content: `
          When I sat for the JEE Advance after clearing JEE Main, I believed my chances of success were slim because I came from a tier-3 city, Tuticorin, where my family had little awareness of IITs. For a long time, I blamed my place of birth for not making it to IIT. However, this thought now fills me with a sense of shame, knowing that millions of children in rural India still don't even have access to basic internet and education. While I had the opportunity to dream of IIT, these children face barriers so fundamental that the very idea of accessing quality education remains a distant reality for them. This realization has made me reflect deeply on the privileges I had, despite my perceived limitations, and on the urgent need to bridge the educational divide in our country.
        `,
      },
      {
        title: 'The Digital Divide in Rural India',
        content: `
          NSSO (National Sample Survey Office) data reveals a staggering disparity: only 24% of rural households have internet access, compared to 66% in cities. This data points to a significant digital divide that acts as a critical barrier to education in remote Indian villages. Without access to digital resources, students in these areas are left behind, unable to compete on an equal footing with their urban counterparts.
        `,
      },
      {
        title: 'Visualizing the Digital Divide',
        content: `
          This image illustrates the concept of the digital divide as a critical barrier to education access in remote Indian villages. The visual metaphor of a chasm represents the significant gap in educational opportunities faced by rural children. The bridge, formed by laptops and internet connectivity, symbolizes the essential tools needed to cross this divide. These digital resources are depicted as the pathway to learning, connecting students in remote areas to educational opportunities that are otherwise out of reach. The presence of a teacher in the top corner emphasizes the role of educators who can only reach their students through these digital means, while the icon of two children reading together suggests the communal aspect of learning that is being hindered by the lack of access to technology.
        `,
        image: digitalDivideImage,
        imageAlt: 'Digital divide as a critical barrier to education access in remote Indian villages',
      },
      {
        title: 'Creating the Image',
        content: `
          I created this image using the Figma design tool, with the thought that visualizing the digital divide as a physical chasm might help convey the seriousness of the issue. My goal was to emphasize how fundamental digital tools have become in accessing education and how their absence creates an almost insurmountable barrier for children in rural areas. The bridge made of laptops and internet connectivity serves as a reminder that technology, when accessible, can be the key to unlocking educational opportunities and closing the gap between urban and rural education.
        `,
      },
      {
        title: 'Conclusion',
        content: `
          Reflecting on my own experiences, I realize how fortunate I was to have access to the resources that allowed me to even consider higher education. Yet, for many children in rural India, the digital divide is a barrier that keeps them from reaching their full potential. As a society, it is imperative that we work towards bridging this gap, ensuring that every child, regardless of where they are born, has the opportunity to access quality education. Only then can we hope to create a more equitable and just future for all.
        `,
      },
    ],
    additionalContent: `
      The digital divide is not just a challenge of infrastructure; it is a challenge of opportunity. As we move forward in the 21st century, bridging this divide must be a priority to ensure that every child, regardless of their geographical location, has access to the tools they need to succeed in the modern world.
    `,
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.pageTitle}>Creating, Managing, and Leading Social Enterprises Assignment</h2>
      <BlogPost 
        title={post.title}
        subtitle={post.subtitle}
        subtopics={post.subtopics}
        additionalContent={post.additionalContent}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  pageTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
};

export default SocialEnterprisesPage;
