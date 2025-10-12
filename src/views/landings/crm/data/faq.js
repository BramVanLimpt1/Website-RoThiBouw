// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Frequently Asked Questions',
  caption: 'With advanced analytics and reporting, you can track customer behavior, sales trends, & many more to make',
  defaultExpanded: 'panel3',
  faqList: [
    {
      question: `How to integrate our latest business report with ${branding.brandName}?`,
      answer: `Integrating your business reports with ${branding.brandName} is simple. Our platform supports various data formats and can seamlessly import reports from multiple sources, allowing you to centralize your business intelligence for enhanced decision-making.`
    },
    {
      question: `Is there any mobile app version of ${branding.brandName}?`,
      answer: {
        content: `Yes, ${branding.brandName} offers a mobile app version that allows you to stay connected on the go. The app supports key features, including customer management, reporting, and real-time insights.`,
        type: 'list',
        data: [
          { primary: `Manage your CRM from anywhere with our intuitive mobile app.` },
          { primary: 'Access reports and analytics for performance tracking on the go.' },
          { primary: 'Stay updated on sales trends, customer interactions, and more with mobile notifications.' }
        ]
      }
    },
    {
      question: 'What is a CRM platform, and why do I need it?',
      answer: `A CRM platform helps you manage and analyze customer interactions throughout their lifecycle. With ${branding.brandName}'s CRM, you can streamline processes, improve customer relationships, and increase profitability by staying organized and responsive to your customers' needs.`
    },
    {
      question: `Are our customer data will be safe by using ${branding.brandName}?`,
      answer: {
        content: 'Utilize AI to predict customer behavior, sales trends, and identify opportunities',
        type: 'list',
        data: [
          { primary: `Leverage the CRM's reporting and analytics tools to gain insights.` },
          { primary: 'Identify opportunities, analyze performance, and make data-driven decisions.' },
          { primary: 'Take action based on the data to enhance relationships, sales, and business success.' }
        ]
      }
    },
    {
      question: 'What kind of analytics and reporting does your CRM provide?',
      answer: `${branding.brandName} offers robust analytics and reporting capabilities, including detailed customer behavior analysis, sales tracking, and custom report generation. These insights allow you to make data-driven decisions to improve your business strategy.`
    }
  ]
};
