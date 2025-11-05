# No Save Password Web Component

A custom web component that provides secure password input functionality while preventing browser password managers from interfering. This component is form-associated and integrates seamlessly with native HTML forms.

## Live Demo

[View Interactive Demo](https://muratbudun.github.io/no_save_password/)

## Overview

This component prevents browser autofill and password saving mechanisms while maintaining standard input behavior and accessibility. It supports custom masking, reveal toggles, and full validation capabilities.

## Key Features

- Prevents browser password manager interference
- Custom masking characters with configurable reveal toggle
- Full form integration and validation support (required, minlength, maxlength, pattern)
- Copy/paste control with disable-paste attribute
- Comprehensive CSS customization through custom properties
- Accessibility support with ARIA attributes
- Undo/redo history management
- Touch-friendly interface
- Zero dependencies

## Installation

### Direct Usage

Download `no_save_password_control.js` and include it in your HTML:

```html
<script type="module" src="./no_save_password_control.js"></script>
```

### Quick Start

```html
<form>
  <label>
    Access Code:
    <no-save-password
      name="accessCode"
      placeholder="Enter your code"
      mask-char="•"
      minlength="6"
      reveal-toggle
      required
    ></no-save-password>
  </label>
  <button type="submit">Submit</button>
</form>
```

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | - | Field name for form submission |
| `placeholder` | string | - | Placeholder text when empty |
| `mask-char` | string | `*` | Character used for masking (first char only) |
| `minlength` | number | - | Minimum required length |
| `maxlength` | number | - | Maximum allowed length |
| `pattern` | string | - | Regular expression for validation |
| `required` | boolean | - | Makes the field mandatory |
| `disabled` | boolean | - | Disables the input |
| `reveal-toggle` | boolean | - | Shows toggle button to reveal/hide text |
| `disable-paste` | boolean | - | Prevents paste operations |

## CSS Custom Properties

### Input Styles
- `--no-save-password-padding` - Input padding (default: `0.5rem 0.75rem`)
- `--no-save-password-padding-right` - Right padding when toggle visible (default: `2.75rem`)
- `--no-save-password-border` - Border style (default: `1px solid #d0d7de`)
- `--no-save-password-border-radius` - Corner radius (default: `4px`)
- `--no-save-password-background` - Background color (default: `#fff`)
- `--no-save-password-color` - Text color (default: `inherit`)
- `--no-save-password-box-shadow` - Box shadow (default: `none`)
- `--no-save-password-placeholder-color` - Placeholder text color (default: `#6b7280`)
- `--no-save-password-transition` - Transition effects

### Focus States
- `--no-save-password-focus-ring` - Focus outline color (default: `#0969da`)
- `--no-save-password-focus-border-color` - Border color on focus
- `--no-save-password-focus-outline` - Outline style
- `--no-save-password-focus-outline-offset` - Outline offset (default: `1px`)

### Toggle Button
- `--no-save-password-toggle-padding` - Button padding (default: `0.25rem`)
- `--no-save-password-toggle-right` - Distance from right edge (default: `0.25rem`)
- `--no-save-password-toggle-top` - Vertical position (default: `50%`)
- `--no-save-password-toggle-size` - Button dimensions (default: `2.25rem`)
- `--no-save-password-toggle-border-radius` - Button corner radius (default: `4px`)
- `--no-save-password-toggle-background` - Button background (default: `transparent`)
- `--no-save-password-toggle-hover-background` - Hover background
- `--no-save-password-toggle-active-background` - Active state background
- `--no-save-password-toggle-icon-size` - Icon dimensions (default: `1.25rem`)
- `--no-save-password-toggle-icon-color` - Icon color (default: `currentColor`)
- `--no-save-password-toggle-focus-ring` - Focus ring style

### Disabled State
- `--no-save-password-disabled-background` - Background when disabled (default: `#f3f4f6`)
- `--no-save-password-disabled-color` - Text color when disabled (default: `#6b7280`)
- `--no-save-password-disabled-border-color` - Border color when disabled

### Layout
- `--no-save-password-display` - Display mode (default: `inline-block`)
- `--no-save-password-width` - Component width (default: `auto`)
- `--no-save-password-min-width` - Minimum width
- `--no-save-password-touch-target` - Touch target size (default: `44px`)

## Styling Examples

### Basic Customization

```css
no-save-password {
  --no-save-password-padding: 0.75rem 1rem;
  --no-save-password-border: 1px solid #cbd5e1;
  --no-save-password-border-radius: 6px;
  --no-save-password-focus-ring: #3b82f6;
}
```

### Dark Theme

```css
no-save-password {
  --no-save-password-background: #1e293b;
  --no-save-password-color: #f1f5f9;
  --no-save-password-border: 1px solid #475569;
  --no-save-password-placeholder-color: #94a3b8;
  --no-save-password-focus-ring: #60a5fa;
  --no-save-password-toggle-icon-color: #cbd5e1;
}
```

### Custom Toggle Button

```css
no-save-password {
  --no-save-password-toggle-padding: 0.5rem;
  --no-save-password-toggle-right: 0.5rem;
  --no-save-password-toggle-icon-size: 1.5rem;
  --no-save-password-toggle-icon-color: #64748b;
  --no-save-password-toggle-hover-background: rgba(59, 130, 246, 0.1);
  --no-save-password-toggle-active-background: rgba(59, 130, 246, 0.2);
}
```

## JavaScript API

### Properties

```javascript
const input = document.querySelector('no-save-password');

// Get/set value
console.log(input.value);
input.value = 'new-value';

// Check validity
if (input.checkValidity()) {
  console.log('Valid input');
}

// Get validation message
console.log(input.validationMessage);
```

### Events

```javascript
const input = document.querySelector('no-save-password');

// Listen for input changes
input.addEventListener('input', (e) => {
  console.log('Value changed:', e.target.value);
});

// Listen for invalid input
input.addEventListener('invalid', (e) => {
  console.log('Validation failed:', e.target.validationMessage);
});
```

## Custom Validation Messages

Use data attributes to provide custom error messages:

```html
<no-save-password
  name="pin"
  minlength="6"
  maxlength="6"
  pattern="[0-9]{6}"
  required
  data-required-message="PIN is required"
  data-too-short-message="PIN must be 6 digits"
  data-pattern-message="PIN must contain only numbers"
></no-save-password>
```

Available data attributes:
- `data-required-message`
- `data-too-short-message`
- `data-too-long-message`
- `data-pattern-message`

## Browser Compatibility

This component uses modern web standards:
- Custom Elements v1
- Shadow DOM
- ElementInternals API
- ES6+ JavaScript

Supported browsers:
- Chrome/Edge 90+
- Firefox 93+
- Safari 16.4+

## Security Considerations

### What This Component Does
- Prevents browser password managers from auto-filling
- Prevents browser save password prompts (on most browsers)
- Optionally disables paste operations
- Prevents copy operations

### What This Component Does NOT Do
- Does not provide encryption
- Does not prevent browser DevTools inspection
- Does not prevent screen recording or keyloggers
- Does not replace proper server-side security

This component is designed for scenarios where you need to prevent browser password saving (e.g., OTP inputs, temporary access codes, PINs), not as a replacement for secure password handling practices.

## Development

### Project Structure
```
no_save_password/
├── no_save_password_control.js  # Main component
├── index.html                   # Interactive demo
└── README.md                    # Documentation
```

### Running Locally

1. Clone the repository
2. Open `index.html` in a modern web browser
3. Experiment with the interactive playground

No build step required - it's pure vanilla JavaScript.

## License

MIT License - feel free to use in personal and commercial projects.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Support

For questions or issues, please open an issue on the GitHub repository.
