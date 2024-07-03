import Accordion from "./Accordion";

const accordionData = [
  {
    id: 1,
    title: "01 / What is digital marketing?",
    content: `Digital marketing is the process of advertising your brand via online channels like social media, email, and Google so as to increase revenue.`,
    image:
      "https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "02 / What is a digital marketing agency?",
    content: `A digital marketing agency is a team of people who perform your online marketing efforts, such as social media marketing and email marketing, on behalf of your business. LYFE Marketing is the #1 digital marketing agency for small businesses due to our 12+ year track record of driving revenue.`,
    image:
      "https://images.unsplash.com/photo-1608096281339-5bcae1ec2f12?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "03 / Why is digital marketing important?",
    content: `Digital marketing is important because when done well, it helps businesses drastically increase their brand awareness and ROI for a low cost. LYFE Marketing knows what it takes to help businesses from any industry exponentially scale their revenue.`,
    image:
      "https://images.unsplash.com/photo-1583511655805-3d0a917bd436?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "04 / Can you increase my follower count?",
    content: `Yes! One of the most important aspects of social media marketing campaigns is your number of followers. After all, what's the use in creating all of that amazing content marketing if no one sees it? At the end of the day, you need to get your brand and your marketing message in front of your target audience. True North Social can help your account go from zero to thousands of real engaged followers in a matter of months.`,
    image:
      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "05 / What platforms do you create ads and content for?",
    content: `Meta (Facebook & Instagram), TikTok, YouTube, Pinterest
    `,
    image:
      "https://images.unsplash.com/photo-1704402838523-f3acf8f7ce61?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Faq() {
  return (
    <section className="faq container-fluid">
      <h3>FAQ's</h3>
      <div className="accordion">
        {accordionData.map(({ id, title, content, image }) => (
          <Accordion key={id} title={title} content={content} image={image} />
        ))}
      </div>
    </section>
  );
}
