# Mr Riders Admin Panel

## Overview
A comprehensive admin panel system for Mr Riders Bike Rentals and Taxi Service website. This system allows complete management of website content, bookings, settings, and more.

## Features

### 🔐 Authentication System
- Secure admin login with multiple credential options
- Session management with configurable timeout
- Remember me functionality
- Automatic redirect for authenticated users

### 📊 Dashboard
- Real-time statistics and analytics
- Quick action buttons for common tasks
- Recent activity feed
- Overview cards showing key metrics

### 🏍️ Content Management
- **Bike Management**: Add, edit, delete bikes with images, pricing, and features
- **Taxi Services**: Manage taxi service offerings and pricing
- **Testimonials**: Customer review management
- **General Content**: Edit hero section, contact info, terms & conditions
- **Pickup Points**: Manage pickup locations and descriptions

### 🖼️ Image Management
- Upload and organize images by category
- Drag & drop image upload
- Image optimization and resizing
- Copy image URLs for use in content
- Search and filter functionality

### ⚙️ Settings Management
- **General Settings**: Website configuration, maintenance mode, security
- **Business Info**: Contact details, hours, location settings
- **Social Media**: Social platform links and sharing settings
- **Integrations**: Analytics, payment gateways, email/SMS services
- **Appearance**: Theme customization, colors, fonts
- **Backup & Export**: Data export and import functionality

## File Structure

```
admin-login.html          # Admin authentication page
admin-dashboard.html      # Main dashboard with navigation
admin-content.html        # Content management interface
admin-image-manager.html  # Image upload and management
admin-settings.html       # Website settings and configuration
```

## Default Admin Credentials

| Username | Password | Role |
|----------|----------|------|
| admin | mrriders2024 | Admin |
| mrriders | admin123 | Admin |
| admin@mrriders.com | mrriders2024 | Admin |

> **⚠️ Important**: Change these default credentials after first login for security.

## Setup Instructions

1. **Upload Files**: Upload all admin files to your web server
2. **Access Login**: Navigate to `admin-login.html` in your browser
3. **Login**: Use one of the default credentials above
4. **Configure**: Update settings, add content, and customize your website

## Data Storage

The admin panel uses browser localStorage for data persistence:
- `admin_token`: Authentication token
- `admin_user`: User information
- `mrr_content_data`: Website content (bikes, services, testimonials)
- `mrr_images`: Image library data
- `mrr_settings`: Website settings and configuration

## Security Features

- **Session Management**: Automatic logout after inactivity
- **Input Validation**: Form validation and sanitization
- **Authentication Check**: Protected routes with auth verification
- **Data Encryption**: Secure token storage
- **Error Handling**: Graceful error management

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Mobile Responsiveness

The admin panel is fully responsive and optimized for:
- Desktop computers (1920px+)
- Tablets (768px - 1024px)
- Mobile devices (320px - 767px)

## Usage Guide

### Managing Bikes

1. Navigate to **Dashboard** → **Bikes**
2. Click **Add New Bike** to create a new listing
3. Fill in bike details:
   - Name and description
   - Price per day
   - Features and specifications
   - Upload bike images
   - Set availability status
4. Click **Save** to publish

### Managing Taxi Services

1. Go to **Dashboard** → **Taxi Services**
2. Click **Add New Service**
3. Enter service details:
   - Service name and description
   - Pricing (per km/hour)
   - Features and benefits
   - Upload service images
4. Save changes

### Updating Website Content

1. Navigate to **Content Management**
2. Select the content section to edit:
   - **Hero Section**: Main banner content
   - **Contact Information**: Business details
   - **Terms & Conditions**: Legal text
   - **Pickup Points**: Location information
3. Make changes and click **Save All Changes**

### Managing Images

1. Go to **Image Manager**
2. Upload new images:
   - Click **Upload Images**
   - Select or drag files
   - Choose category
   - Click **Upload**
3. Organize images by category
4. Copy image URLs for use in content

### Configuring Settings

1. Access **Settings** from the dashboard
2. Configure different sections:
   - **General**: Website title, SEO settings
   - **Business Info**: Contact details, hours
   - **Social Media**: Social platform links
   - **Integrations**: Analytics, payments
   - **Appearance**: Colors, fonts, branding
3. Save settings after making changes

## Backup and Export

### Creating Backups

1. Go to **Settings** → **Backup & Export**
2. Choose backup type:
   - **All Data**: Complete website backup
   - **Content Only**: Bikes, services, testimonials
   - **Settings Only**: Configuration data
3. Click **Export** to download backup file

### Importing Data

1. In **Backup & Export** section
2. Click **Choose File** and select backup file
3. Click **Import Data**
4. Refresh page to see imported data

## Troubleshooting

### Common Issues

**Login Problems**
- Clear browser cache and cookies
- Check username/password spelling
- Ensure JavaScript is enabled

**Data Not Saving**
- Check browser localStorage isn't full
- Verify no browser extensions blocking storage
- Try in incognito/private browsing mode

**Images Not Uploading**
- Check file size (max 10MB)
- Verify file format (JPG, PNG, GIF, WEBP)
- Ensure stable internet connection

**Responsive Issues**
- Clear browser cache
- Check viewport settings
- Test in different browsers

## Performance Optimization

- **Image Optimization**: Compress images before upload
- **Data Cleanup**: Regularly clean old data
- **Browser Cache**: Clear cache periodically
- **Session Management**: Logout when done

## Support

For technical support or feature requests:
- Email: support@mrriders.com
- Phone: +91 9972544847

## License

This admin panel is proprietary software created specifically for Mr Riders Bike Rentals and Taxi Service. Unauthorized distribution or modification is prohibited.

## Version History

- **v1.0.0**: Initial release with basic functionality
- **v1.1.0**: Added image management
- **v1.2.0**: Enhanced settings panel
- **v2.0.0**: Complete redesign with responsive layout
- **v2.1.0**: Current version with advanced features

---

*Last updated: January 2024*
*Created by: Mr Riders Development Team* 