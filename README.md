# No Save Password Web Component

A custom web component that provides secure password input functionality while preventing browser password managers from interfering. This component is form-associated and integrates seamlessly with native HTML forms.

## Live Demo

[View Interactive Demo](https://muratbudun.github.io/NoSavePasswordInput/)

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

### Download Files

Download the appropriate file based on your use case:

| File | Size | Use Case |
|------|------|----------|
| `no_save_password_control.js` | ~25 KB | Source code with ES6 exports (for React, Vue, build tools) |
| `no_save_password_control.module.min.js` | ~16 KB | Minified with exports (for modern frameworks) |
| `no_save_password_control.min.js` | ~16 KB | Minified without exports (for vanilla HTML) |

### For React, Vue, or Modern Frameworks

Use the **module version** with ES6 imports:

```javascript
// Import the minified module version
import NoSavePasswordInput from './no_save_password_control.module.min.js';
// or named import
import { NoSavePasswordInput } from './no_save_password_control.module.min.js';

// React example
function App() {
  return (
    <form>
      <no-save-password name="password" reveal-toggle required />
      <button type="submit">Login</button>
    </form>
  );
}
```

### For Webpack, Vite, Rollup (with build tools)

Import the source file and let your bundler handle it:

```javascript
import { NoSavePasswordInput } from './no_save_password_control.js';

// Use the component
document.body.innerHTML = '<no-save-password name="pwd"></no-save-password>';
```

### For Vanilla HTML (no build tools)

Use the **standalone minified version** without exports:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="./no_save_password_control.min.js"></script>
</head>
<body>
  <form>
    <no-save-password name="password" reveal-toggle></no-save-password>
  </form>
  
  <script>
    // Component is automatically registered
    // NoSavePasswordInput is available globally
    
    // Replace existing input
    const oldInput = document.getElementById('password');
    NoSavePasswordInput.replaceInput(oldInput, {
      revealToggle: true,
      maskChar: '●'
    });
  </script>
</body>
</html>
```

### CommonJS (Node.js)

```javascript
const { NoSavePasswordInput } = require('./no_save_password_control.js');
```

### AMD (RequireJS)

```javascript
define(['./no_save_password_control'], function(NoSavePasswordInput) {
  // Use NoSavePasswordInput
});
```

### Which File Should I Use?

| Scenario | File to Use | Why |
|----------|-------------|-----|
| React, Vue, Svelte, Angular (production) | `no_save_password_control.module.min.js` | Minified with exports |
| React, Vue, Svelte, Angular (development) | `no_save_password_control.js` | Source with exports for debugging |
| Webpack, Vite, Rollup | `no_save_password_control.js` | Let bundler optimize |
| Plain HTML (no build tools) | `no_save_password_control.min.js` | No `export` syntax errors |
| Node.js (CommonJS) | `no_save_password_control.js` | Has `module.exports` |

### Building from Source

If you modify the source code, rebuild using:

```powershell
# PowerShell
.\build.ps1
```

This creates both versions:
- `no_save_password_control.module.min.js` (with exports)
- `no_save_password_control.min.js` (without exports)

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
- `--no-save-password-border-color` - Border color (default: `#d0d7de`)
- `--no-save-password-border-radius` - Corner radius (default: `4px`)
- `--no-save-password-font-family` - Font family (default: `inherit`)
- `--no-save-password-font-size` - Font size (default: `1rem`)
- `--no-save-password-line-height` - Line height (default: `1.4`)
- `--no-save-password-background` - Background color (default: `#fff`)
- `--no-save-password-color` - Text color (default: `inherit`)
- `--no-save-password-box-shadow` - Box shadow (default: `none`)
- `--no-save-password-placeholder-color` - Placeholder text color (default: `#6b7280`)
- `--no-save-password-placeholder-opacity` - Placeholder opacity (default: `1`)
- `--no-save-password-transition` - Transition effects (default: `border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out`)

### Focus States
- `--no-save-password-focus-ring` - Focus outline color (default: `#0969da`)
- `--no-save-password-focus-border-color` - Border color on focus (default: `#0969da`)
- `--no-save-password-focus-outline` - Outline style (default: `2px solid #0969da`)
- `--no-save-password-focus-outline-offset` - Outline offset (default: `1px`)

### Toggle Button
- `--no-save-password-toggle-padding` - Button padding (default: `0.25rem`)
- `--no-save-password-toggle-right` - Distance from right edge (default: `0.25rem`)
- `--no-save-password-toggle-top` - Vertical position (default: `50%`)
- `--no-save-password-toggle-size` - Button dimensions (default: `2.25rem`)
- `--no-save-password-toggle-border` - Button border (default: `none`)
- `--no-save-password-toggle-border-radius` - Button corner radius (default: `4px`)
- `--no-save-password-toggle-background` - Button background (default: `transparent`)
- `--no-save-password-toggle-color` - Button text color (default: `inherit`)
- `--no-save-password-toggle-min-width` - Minimum button width (default: `2.25rem`)
- `--no-save-password-toggle-hover-background` - Hover background (default: `rgba(0, 0, 0, 0.05)`)
- `--no-save-password-toggle-active-background` - Active state background (default: `#e2e8f0`)
- `--no-save-password-toggle-icon-size` - Icon dimensions (default: `1.25rem`)
- `--no-save-password-toggle-icon-color` - Icon color (default: `currentColor`)
- `--no-save-password-toggle-focus-ring` - Focus ring style (default: `0 0 0 2px rgba(9, 105, 218, 0.4)`)
- `--no-save-password-toggle-transition` - Button transition (default: `background-color 0.15s ease-in-out`)

### Disabled State
- `--no-save-password-disabled-background` - Background when disabled (default: `#f3f4f6`)
- `--no-save-password-disabled-color` - Text color when disabled (default: `#6b7280`)
- `--no-save-password-disabled-border-color` - Border color when disabled

### Layout
- `--no-save-password-display` - Display mode (default: `inline-block`)
- `--no-save-password-wrapper-display` - Wrapper display mode (default: `inline-block`)
- `--no-save-password-width` - Component width (default: `auto`)
- `--no-save-password-min-width` - Minimum width (default: `auto`)
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

## CSS Parts

The component exposes several parts for advanced styling via the `::part()` pseudo-element:

| Part Name | Description | Example Usage |
|-----------|-------------|---------------|
| `wrapper` | The main container wrapping the input and toggle button | Style the overall layout |
| `input` | The actual input element | Direct input styling |
| `toggle` | The reveal/hide toggle button | Customize button appearance |
| `icon-show` | The "show password" icon container | Style the eye icon |
| `icon-hide` | The "hide password" icon container | Style the eye-off icon |

### Using CSS Parts

CSS Parts allow you to style internal Shadow DOM elements from outside the component:

```css
/* Style the input directly */
no-save-password::part(input) {
  border: 2px solid #3b82f6;
  font-weight: 500;
}

/* Style the toggle button */
no-save-password::part(toggle) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  padding: 0.5rem;
}

/* Style the icons */
no-save-password::part(icon-show),
no-save-password::part(icon-hide) {
  opacity: 0.8;
  transition: opacity 0.2s;
}

no-save-password::part(toggle):hover::part(icon-show),
no-save-password::part(toggle):hover::part(icon-hide) {
  opacity: 1;
}

/* Combine with states */
no-save-password[disabled]::part(input) {
  opacity: 0.5;
}
```

### Parts vs CSS Custom Properties

- **CSS Custom Properties (Variables)**: Best for colors, spacing, and simple values. Works in all browsers.
- **CSS Parts**: Best for complex styling like borders, backgrounds, transforms. Requires modern browser support.

You can use both together for maximum flexibility:

```css
no-save-password {
  /* Custom properties for basic theming */
  --no-save-password-focus-ring: #8b5cf6;
  --no-save-password-padding: 1rem;
}

/* Parts for advanced styling */
no-save-password::part(input) {
  border-style: dashed;
  font-variant: small-caps;
}

no-save-password::part(toggle) {
  transform: scale(1.1);
}
```

**Note:** CSS Parts provide direct access to Shadow DOM elements, while CSS custom properties are the recommended approach for most styling needs due to better browser compatibility and maintainability.

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

// Listen for Enter key press
input.addEventListener('enter', (e) => {
  console.log('Enter pressed, value:', e.detail.value);
  // Custom enter event is fired before form submission
  // You can prevent default form submission if needed
});

// Note: Form is automatically submitted when Enter is pressed (native behavior)
// The component mimics standard input behavior by calling form.requestSubmit()


// Listen for invalid input
input.addEventListener('invalid', (e) => {
  console.log('Validation failed:', e.target.validationMessage);
});

// Listen for change (when focus is lost and value changed)
input.addEventListener('change', (e) => {
  console.log('Value changed on blur:', e.target.value);
});
```

**Available Events:**
- `input` - Fired when the value changes
- `enter` - Fired when Enter key is pressed (custom event with `detail.value`). **Note:** The form is automatically submitted after this event, mimicking native input behavior.
- `change` - Fired when focus is lost and value has changed
- `invalid` - Fired when validation fails
- `focus` - Fired when input receives focus
- `blur` - Fired when input loses focus

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

## Replacing Legacy Password Inputs

If you need to replace existing password inputs in legacy applications without breaking JavaScript references, use the static `replaceInput` method:

```javascript
// Get reference to existing password input
const oldPasswordInput = document.getElementById('password');

// Legacy code has event listeners and references
oldPasswordInput.addEventListener('input', (e) => {
  console.log('Password changed:', e.target.value);
});

// Replace with NoSavePasswordInput while preserving references
NoSavePasswordInput.replaceInput(oldPasswordInput, {
  revealToggle: true,
  maskChar: '●',
  disablePaste: true
});

// JavaScript references still work!
console.log(oldPasswordInput.value); // Works!
oldPasswordInput.addEventListener('enter', (e) => {
  console.log('Enter pressed:', e.detail.value); // Works!
});
```

### How It Works
1. Creates a new `<no-save-password>` component
2. Copies all attributes from the original input
3. Replaces the original input in the DOM
4. **Hijacks property getters/setters** on the original input reference
5. **Forwards all events** from the component to the original input reference

This means:
- ✅ Existing event listeners continue to work
- ✅ Property access (`input.value`, `input.disabled`) works seamlessly
- ✅ Methods (`focus()`, `blur()`, `checkValidity()`) are forwarded
- ✅ No need to change existing JavaScript code

### replaceInput Options

```javascript
NoSavePasswordInput.replaceInput(originalInput, {
  placeholder: 'Enter password',
  maskChar: '●',           // Character to display for each character
  revealToggle: true,      // Show reveal/hide toggle button
  disablePaste: true,      // Prevent paste operations
  minlength: 8,            // Override original minlength
  maxlength: 20,           // Override original maxlength
  // ... any other attribute
});
```

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

