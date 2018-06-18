import CMS from 'netlify-cms';
import BlogPostPreview from './preview-templates/BlogPostPreview.jsx';

CMS.registerPreviewStyle('/admin/styles/prism-tomorrow.css');
CMS.registerPreviewStyle('/admin/styles/antd.min.css');
CMS.registerPreviewTemplate('blog', BlogPostPreview);
