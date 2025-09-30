# Portfolio Environment Variables Configuration

This portfolio uses environment variables to manage personal information and social media links. This makes it easy to update your information without modifying the code.

## Setup

1. Copy `.env.local` to your project root
2. Update the values with your personal information
3. Restart your development server

## Environment Variables

### Personal Information
- `NEXT_PUBLIC_FULL_NAME` - Your full name (displayed in navigation and hero section)
- `NEXT_PUBLIC_EMAIL` - Your email address
- `NEXT_PUBLIC_PHONE` - Your phone number with country code
- `NEXT_PUBLIC_LOCATION` - Your location/city
- `NEXT_PUBLIC_TIMEZONE` - Your timezone

### Social Media Links
- `NEXT_PUBLIC_GITHUB_URL` - Your GitHub profile URL
- `NEXT_PUBLIC_LINKEDIN_URL` - Your LinkedIn profile URL
- `NEXT_PUBLIC_TWITTER_URL` - Your Twitter profile URL (optional)
- `NEXT_PUBLIC_PORTFOLIO_URL` - Your portfolio website URL (optional)

### Resume Configuration
- `NEXT_PUBLIC_RESUME_PATH` - Path to your resume file (should be in public folder)
- `NEXT_PUBLIC_RESUME_FILENAME` - Filename for download

### Contact Links
- `NEXT_PUBLIC_CONTACT_EMAIL_LINK` - mailto: link
- `NEXT_PUBLIC_CONTACT_PHONE` - tel: link

## Usage

All components automatically use these environment variables. When you update the `.env.local` file, the changes will be reflected throughout the portfolio.

## Security Note

These variables are prefixed with `NEXT_PUBLIC_` which means they are exposed to the browser. Only include information you're comfortable sharing publicly.