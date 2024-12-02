import React from 'react';
import BlogPost from './BlogPost';
import digitalDivideImage from '../assets/digital_divide.png';
import globalInternetUsageImage from '../assets/global_internet_usage_growth.png';
import urbanRuralAccessImage from '../assets/urban_vs_rural_internet_access.png';
import incomePerPersonMapImage from '../assets/income_per_person_map.png';
import internetUsageRateMapImage from '../assets/internet_usage_rate_map.png';
import correlationHeatmapImage from '../assets/correlation_heatmap.png';
import clusterDistributionImage from '../assets/cluster_distribution.png';
import unitedStandImage from '../assets/united_stand.png';  // Import the new image
import backgroundImage from '../assets/backgroundImage.png'; // Ensure this path is correct


function SocialEnterprisesPage() {
  const posts = [
    {
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
    },
    {
      title: 'Analyzing the Global Digital Divide: Insights from Internet Usage Data',
      subtitle: 'A deep dive into the disparities in global Internet access.',
      subtopics: [
        {
          title: 'Introduction: What Is the Digital Divide?',
          content: `
            The term "digital divide" refers to the gap between those with Internet access and those without it. However, this divide is far more nuanced and multifaceted, encompassing issues such as availability, affordability, quality of service, and relevance of content. According to an article by the Internet Society, titled What Is the Digital Divide?, the divide is not a simple binary; it involves various factors that create disparities in Internet access both globally and locally.
            Nearly 3.6 billion people worldwide remain unconnected to the Internet, which equates to approximately 50% of the global population.
          `,
        },
        {
          title: 'The Global Digital Divide: A Closer Look',
          content: `
            When we examine the global digital divide more closely, we find significant disparities in Internet access between urban and rural areas. This divide is often more pronounced in developing countries, where infrastructure and affordability issues are more severe.
          `,
          image: urbanRuralAccessImage,
          imageAlt: 'Urban vs Rural Internet Access',
        },
        {
          title: 'Income and Internet Access Correlation',
          content: `
            Another critical factor in understanding the digital divide is income. Generally, countries with higher income levels tend to have better Internet access. However, this relationship is not always straightforward, as other factors such as government policies, urbanization, and regional disparities also play a role.
          `,
          image: incomePerPersonMapImage,
          imageAlt: 'Income per Person Map',
        },
        {
          title: 'Correlation Analysis: Income, Urbanization, and Internet Usage',
          content: `
            To further explore the factors that influence Internet access, I analyzed the correlation between income, urbanization, and Internet usage. These factors are interrelated, and their correlation provides insights into how these variables together impact digital access.
          `,
          image: correlationHeatmapImage,
          imageAlt: 'Correlation Heatmap',
        },
        {
          title: 'Clustering Analysis: Grouping Countries by Digital Access',
          content: `
            To categorize countries based on their digital divide characteristics, I applied clustering techniques using the PyCaret library. This approach allowed me to group countries with similar digital access features, revealing distinct patterns and insights.
          `,
          image: clusterDistributionImage,
          imageAlt: 'Cluster Distribution',
        },
        {
          title: 'Conclusion: The Multifaceted Nature of the Digital Divide',
          content: `
            My analysis reinforces the idea that the digital divide is not merely a question of whether people have Internet access or not. It is influenced by a range of factors including income, urbanization, affordability, quality of service, and the relevance of content. Even within countries that have relatively high connectivity rates, there are significant disparities that reflect broader socioeconomic inequalities.
          `,
        },
      ],
      additionalContent: `
        References:
        - What Is the Digital Divide?
        - Wealth Inequality by Country 2022: World Population Review
      `,
    },
    {
      title: 'A United Stand: Demanding Digital Equity in Rural Villages',
      subtitle: '',
      subtopics: [
        {
          title: 'Symbolism of the Segmented Fist',
          content: `
            The image of a segmented fist symbolizes both the fractures within our society and the collective power we hold to mend them. It serves as a stark reminder that while technology and connectivity have advanced in leaps and bounds, the benefits are unevenly distributed. This divide leaves remote villages cut off from the digital resources that are essential for education, economic opportunity, and overall social development.
          `,
          image: unitedStandImage,  // Adding the image to the first subtopic
          imageAlt: 'A segmented fist symbolizing unity and the fight for digital equity',
        },
        {
          title: 'Call to Action: Addressing Digital Inequity',
          content: `
            My pamphlet, featuring this compelling image, calls for immediate action to address the digital inequity that plagues rural areas. We must unite our voices to demand better infrastructure, greater access to technology, and the inclusion of all communities in the digital revolution. This isn't just about connecting people to the internet—it's about connecting them to opportunities, knowledge, and a brighter future.
          `,
        },
        {
          title: 'The Urgency of Change',
          content: `
            Let's make it clear: the time for change is now. We cannot stand by while rural communities are left in the digital shadows. By raising our fists together, we can break down the barriers that separate us and ensure that everyone, regardless of where they live, has the chance to thrive in our increasingly connected world.
          `,
        },
        {
          title: 'Join the Fight for Digital Equity',
          content: `
            Join us in the fight for digital equity—because every voice matters, and every community deserves to be heard.
          `,
        },
      ],
      additionalContent: `
        The fight for digital equity is not just about providing technology; it's about ensuring that every community has the tools and opportunities they need to thrive in today's digital world. Together, we can make this a reality.
      `,
    },
    {
      title: 'Bridging the Digital Divide in Rural Education: A Strategic Proposal',
      subtitle: 'Fictional Organizational Memo from an NGO to the Government',
      subtopics: [
        {
          title: 'Overview',
          content: `
            The COVID-19 pandemic has significantly exacerbated the digital divide in rural India, particularly in the field of education. The shift to e-learning has further marginalized students in rural areas who lack access to basic digital infrastructure. This Organizational Memo proposes a comprehensive strategy to address these challenges, leveraging technology to improve access, quality, and affordability of education in remote regions of India.
          `,
        },
        {
          title: 'Proposed Strategy: Expanding Internet Coverage and Services',
          content: `
            - Partner with telecom companies and the government to extend high-speed internet to remote and underserved areas.
            - Explore innovative solutions like satellite internet and community Wi-Fi networks to ensure connectivity in the most inaccessible regions.
          `,
        },
        {
          title: 'Proposed Strategy: Training and Development of Human Resources',
          content: `
            - Launch nationwide training programs for teachers and educators to effectively use digital tools and platforms.
            - Develop localized content that is culturally relevant and available in regional languages to enhance learning outcomes.
          `,
        },
        {
          title: 'Proposed Strategy: Ensuring Electricity and Power Supply',
          content: `
            - Collaborate with energy companies to provide reliable electricity in rural areas, particularly in schools and learning centers.
            - Promote the use of renewable energy sources such as solar power to ensure continuous access to e-learning platforms.
          `,
        },
        {
          title: 'Proposed Strategy: Increasing Accessibility to Technology and Hardware',
          content: `
            - Facilitate public-private partnerships to distribute affordable devices (tablets, laptops) to students in rural areas.
            - Implement recycling programs for old or unused digital devices, refurbishing them for use by rural students.
          `,
        },
        {
          title: 'Proposed Strategy: Promoting MOOCs and Online Learning Platforms',
          content: `
            - Expand the availability of Massive Open Online Courses (MOOCs) tailored to the needs of rural learners.
            - Collaborate with educational institutions to integrate MOOCs into the rural curriculum, providing alternative learning pathways for students.
          `,
        },
        {
          title: 'Existing Initiatives',
          content: `
            - E-Kranti: A government-led initiative focused on developing digital infrastructure to connect rural and remote areas with urban centers.
            - Collaborative Education Delivery: Partnerships between NGOs and private companies to transition from traditional blackboards to digital learning platforms.
          `,
        },
        {
          title: 'Conclusion',
          content: `
            This memo calls for an urgent, coordinated effort to address the educational inequities in rural India. By focusing on these key areas, stakeholders can create a more inclusive, equitable educational landscape that empowers every child, regardless of their geographical location, to succeed in the digital age.
          `,
        },
      ],
      additionalContent: `
        **Note:** This is a fictional organizational memo created to illustrate a strategic approach to addressing the digital divide in rural education.
      `,
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.pageTitle}>Creating, Managing, and Leading Social Enterprises Assignment</h2>
      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>  {/* Adding margin here */}
          <BlogPost 
            title={post.title}
            subtitle={post.subtitle}
            subtopics={post.subtopics}
            additionalContent={post.additionalContent}
          />
        </div>
      ))}
    </div>
  );
  
}

const styles = {
  container: {
    padding: '20px',
    width: '100%',             // Make the container full width
    maxWidth: '1200px',        // Set a max-width for better readability on larger screens
    margin: '0 auto',          // Center the container
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  pageTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#fff',
  },
};

export default SocialEnterprisesPage;


