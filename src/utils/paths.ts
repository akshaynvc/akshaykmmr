// Utility functions for handling GitHub Pages deployment

export const getAssetPath = (path: string): string => {
  // In production (GitHub Pages), we need to include the basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/akshaykmmr' : '';
  return `${basePath}${path}`;
};

export const downloadResume = () => {
  const link = document.createElement('a');
  const resumePath = process.env.NEXT_PUBLIC_RESUME_PATH || '/Akshay_Kumar.pdf';
  link.href = getAssetPath(resumePath);
  link.download = process.env.NEXT_PUBLIC_RESUME_FILENAME || 'Akshay_Kumar_Resume.pdf';
  link.click();
};