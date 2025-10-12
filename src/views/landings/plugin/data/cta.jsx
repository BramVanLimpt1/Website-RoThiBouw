// @mui
import Typography from '@mui/material/Typography';

/***************************  CALL TO ACTION - HEADLINE  ***************************/

function HeadlineText() {
  return (
    <Typography variant="h2">
      Join Thousands of Successful Businesses -{' '}
      <Typography variant="h2" component="span" sx={{ color: 'primary.main' }}>
        Activate Your Conversion Toolkit
      </Typography>
    </Typography>
  );
}

/***************************  CALL TO ACTION - DATA  ***************************/

export const cta4 = {
  headLine: <HeadlineText />,
  primaryBtn: { children: 'Get Started' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  },
  list: [{ primary: `Enhanced Customer Satisfaction` }, { primary: 'Boosted Conversions' }],
  clientContent: '300+ Client Trust Us'
};

export const cta5 = {
  heading: `Get Started with Our Platform Today`,
  caption: 'Take Control of Your Success - Get Started with Our Conversion-Boosting Tools',
  label: 'Join Community',
  input: {
    adornmentBtn: { children: 'Get Started' },
    helpertext: '1 email per week. No spam. Ever. Unsubscribe anytime'
  },
  saleData: { count: 10, defaultUnit: 'X', caption: 'Enhanced Customer Satisfaction and Boosted Conversions' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  }
};
