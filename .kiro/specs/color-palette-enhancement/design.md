# Design Document

## Overview

This design document outlines the implementation of a new green-based color palette for the Mr Riders website. The new color scheme replaces the existing orange theme with a sophisticated green palette that better represents the outdoor, eco-friendly nature of bike rentals while maintaining professional appeal and accessibility standards.

## Architecture

### Color System Structure

The new color palette will be implemented using CSS custom properties (CSS variables) to ensure consistency and easy maintenance across the entire website. The color system will be organized into primary, secondary, accent, and neutral color categories.

### Color Palette Definition

Based on the provided color palette image, the following colors will be implemented:

**Primary Colors:**
- Deep Forest Green: `#2d5a3d` (Primary brand color)
- Medium Green: `#4a7c59` (Secondary green)
- Sage Green: `#6b9080` (Tertiary green)

**Accent Colors:**
- Bright Lime: `#a7f3d0` (Highlight/accent color)
- Light Green: `#86efac` (Success states, positive feedback)

**Neutral Colors:**
- Charcoal Gray: `#4b5563` (Dark text, headings)
- Medium Gray: `#6b7280` (Secondary text)
- Light Gray: `#9ca3af` (Borders, subtle elements)
- Pale Gray: `#f3f4f6` (Background sections)

**System Colors:**
- White: `#ffffff` (Primary background)
- Black: `#111827` (High contrast text)

## Components and Interfaces

### CSS Variable System

The color system will be implemented through CSS custom properties defined in the root element:

```css
:root {
  /* Primary Brand Colors */
  --primary-color: #2d5a3d;
  --primary-hover: #1f3d2a;
  --primary-light: #4a7c59;
  
  /* Secondary Colors */
  --secondary-color: #f3f4f6;
  --secondary-green: #6b9080;
  
  /* Accent Colors */
  --accent-bright: #a7f3d0;
  --accent-success: #86efac;
  
  /* Text Colors */
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-muted: #6b7280;
  
  /* Background Colors */
  --background-color: #ffffff;
  --background-section: #f3f4f6;
  --background-card: #ffffff;
  
  /* Border Colors */
  --border-light: #e5e7eb;
  --border-medium: #9ca3af;
}
```

### Component Color Mapping

**Navigation Header:**
- Background: White with green accent on scroll
- Logo: Primary green (#2d5a3d)
- Navigation links: Dark gray with green hover states
- CTA Button: Primary green background

**Hero Section:**
- Overlay: Dark green with opacity
- Text: White
- Primary CTA: Primary green
- Secondary CTA: White with green text

**Service Cards:**
- Background: White
- Borders: Light gray
- Hover states: Subtle green accent
- CTA buttons: Primary green

**Pricing Cards:**
- Background: White
- Featured card border: Primary green
- Price text: Primary green
- CTA buttons: Primary green

**Forms and Inputs:**
- Border: Light gray
- Focus state: Primary green
- Submit buttons: Primary green

## Data Models

### Color Configuration Object

```javascript
const colorConfig = {
  primary: {
    main: '#2d5a3d',
    hover: '#1f3d2a',
    light: '#4a7c59',
    contrast: '#ffffff'
  },
  secondary: {
    main: '#f3f4f6',
    green: '#6b9080',
    contrast: '#111827'
  },
  accent: {
    bright: '#a7f3d0',
    success: '#86efac'
  },
  neutral: {
    gray900: '#111827',
    gray700: '#4b5563',
    gray500: '#6b7280',
    gray300: '#9ca3af',
    gray100: '#f3f4f6',
    white: '#ffffff'
  }
};
```

## Error Handling

### Color Contrast Validation

- All color combinations will be tested against WCAG AA standards
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- Fallback colors will be provided for accessibility

### Browser Compatibility

- CSS custom properties are supported in all modern browsers
- Fallback values will be provided for older browsers
- Progressive enhancement approach for advanced color features

### Color Blindness Considerations

- Color combinations will be tested with color blindness simulators
- Information will not rely solely on color differentiation
- Alternative visual cues (icons, patterns) will supplement color coding

## Testing Strategy

### Visual Regression Testing

1. **Screenshot Comparison**: Before and after screenshots of all major page sections
2. **Cross-browser Testing**: Verify color consistency across Chrome, Firefox, Safari, and Edge
3. **Device Testing**: Test color appearance on various screen types and resolutions

### Accessibility Testing

1. **Contrast Ratio Testing**: Use tools like WebAIM's contrast checker
2. **Color Blindness Testing**: Use simulators for different types of color blindness
3. **Screen Reader Testing**: Ensure color changes don't affect screen reader functionality

### Performance Testing

1. **CSS Load Time**: Measure impact of color changes on stylesheet size
2. **Rendering Performance**: Ensure color updates don't affect page rendering speed
3. **Memory Usage**: Monitor for any memory leaks from color animations

### User Acceptance Testing

1. **A/B Testing**: Compare user engagement with old vs new color scheme
2. **Feedback Collection**: Gather user feedback on the new color palette
3. **Conversion Tracking**: Monitor impact on booking conversion rates

## Implementation Phases

### Phase 1: Core Color System
- Update CSS custom properties
- Apply to navigation and hero section
- Test accessibility and contrast

### Phase 2: Content Sections
- Update service cards and pricing sections
- Apply to testimonials and contact forms
- Implement hover and interaction states

### Phase 3: Fine-tuning
- Adjust color saturation and brightness based on testing
- Optimize for different screen types
- Final accessibility and performance validation

## Migration Strategy

The color palette update will be implemented as a complete replacement of the existing orange theme. The migration will:

1. Preserve all existing functionality
2. Maintain current layout and spacing
3. Update only color-related CSS properties
4. Ensure backward compatibility during transition
5. Provide rollback capability if issues arise