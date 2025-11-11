const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      display: var(--no-save-password-display, inline-block);
      font: inherit;
      color: inherit;
      width: var(--no-save-password-width, auto);
      min-width: var(--no-save-password-min-width, auto);
    }

    .wrapper {
      position: relative;
      display: var(--no-save-password-wrapper-display, inline-block);
      width: 100%;
    }

    input {
      -webkit-appearance: none;
      appearance: none;
      flex: 1 1 auto;
      box-sizing: border-box;
      width: 100%;
      padding: var(--no-save-password-padding, 0.5rem 0.75rem);
      border: var(--no-save-password-border, 1px solid var(--no-save-password-border-color, #d0d7de));
      border-radius: var(--no-save-password-border-radius, 4px);
      font-family: var(--no-save-password-font-family, inherit);
      font-size: var(--no-save-password-font-size, 1rem);
      line-height: var(--no-save-password-line-height, 1.4);
      background-color: var(--no-save-password-background, #fff);
      color: var(--no-save-password-color, inherit);
      box-shadow: var(--no-save-password-box-shadow, none);
      transition: var(--no-save-password-transition, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out);
    }

    :host([reveal-toggle]) input {
      padding-right: var(--no-save-password-padding-right, 2.75rem);
    }

    input:focus {
      outline: var(--no-save-password-focus-outline, 2px solid var(--no-save-password-focus-ring, #0969da));
      outline-offset: var(--no-save-password-focus-outline-offset, 1px);
      border-color: var(--no-save-password-focus-border-color, var(--no-save-password-focus-ring, #0969da));
    }

    input::placeholder {
      color: var(--no-save-password-placeholder-color, #6b7280);
      opacity: var(--no-save-password-placeholder-opacity, 1);
    }

    :host([disabled]) input {
      background: var(--no-save-password-disabled-background, #f3f4f6);
      color: var(--no-save-password-disabled-color, #6b7280);
      border-color: var(--no-save-password-disabled-border-color, #d1d5db);
      cursor: not-allowed;
    }

    .toggle {
      flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: var(--no-save-password-toggle-top, 50%);
        right: var(--no-save-password-toggle-padding, 0.25rem);
        transform: translateY(-50%);
        width: var(--no-save-password-toggle-size, 2.25rem);
        height: calc(100% - calc(var(--no-save-password-toggle-padding, 0.25rem) * 2));
        border: var(--no-save-password-toggle-border, none);
        border-radius: var(--no-save-password-toggle-border-radius, 4px);
        background: var(--no-save-password-toggle-background, transparent);
        color: var(--no-save-password-toggle-color, inherit);
        font: 0.875rem/1.2 inherit;
        cursor: pointer;
        min-width: var(--no-save-password-toggle-min-width, 2.25rem);
        transition: var(--no-save-password-toggle-transition, background-color 0.15s ease-in-out);
    }

    .toggle[hidden] {
      display: none;
    }

    .toggle:hover {
      background: var(--no-save-password-toggle-hover-background, rgba(0, 0, 0, 0.05));
    }

    .toggle:focus {
      outline: none;
      box-shadow: var(--no-save-password-toggle-focus-ring, 0 0 0 2px rgba(9, 105, 218, 0.4));
    }

    .toggle[aria-pressed="true"] {
      background: var(--no-save-password-toggle-active-background, #e2e8f0);
    }

    .toggle[disabled] {
        background: var(--no-save-password-disabled-background, #f3f4f6);
        color: var(--no-save-password-disabled-color, #6b7280);
        cursor: not-allowed;
        pointer-events: none;
    }

    .toggle span {
        line-height: 0;
    }

    .toggle svg {
      width: var(--no-save-password-toggle-icon-size, 1.25rem);
      height: var(--no-save-password-toggle-icon-size, 1.25rem);
        color: var(--no-save-password-toggle-icon-color, currentColor);
    }

    @media (pointer: coarse) {
      input {
        min-height: var(--no-save-password-touch-target, 44px);
      }

      .toggle {
        width: max(var(--no-save-password-toggle-size, 2.25rem), var(--no-save-password-touch-target, 44px));
        height: max(var(--no-save-password-toggle-size, 2.25rem), var(--no-save-password-touch-target, 44px));
      }
    }
  </style>
  <div class="wrapper" part="wrapper">
    <input
      part="input"
      type="text"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="none"
      spellcheck="false"
      data-form-type="other"
      data-lpignore="true"
      data-1p-ignore="true"
    />
    <button
      type="button"
      class="toggle"
      part="toggle"
      aria-pressed="false"
      aria-hidden="true"
      hidden
    >
      <span class="icon-show" aria-hidden="true" part="icon-show">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
        </svg>
      </span>
      <span class="icon-hide" aria-hidden="true" hidden part="icon-hide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
          <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
          <path d="M3 3l18 18"></path>
        </svg>
      </span>
    </button>
  </div>
`;

class NoSavePasswordInput extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['disabled', 'placeholder', 'mask-char', 'minlength', 'maxlength', 'pattern', 'reveal-toggle', 'disable-paste', 'name'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open', delegatesFocus: true });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._internals = this.attachInternals();
    this._input = this.shadowRoot.querySelector('input');
    this._toggleButton = this.shadowRoot.querySelector('.toggle');
    this._iconShow = this.shadowRoot.querySelector('.icon-show');
    this._iconHide = this.shadowRoot.querySelector('.icon-hide');
    this._value = '';
    this._maskChar = this._normalizeMaskChar(this.getAttribute('mask-char'));
    this._isRevealed = false;
    this._lastCommittedValue = this._value;

    this._handleBeforeInput = this._handleBeforeInput.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleToggle = this._handleToggle.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);

    this._history = [{ value: this._value, caret: 0 }];
    this._historyIndex = 0;
  }

  connectedCallback() {
    this._input.addEventListener('beforeinput', this._handleBeforeInput);
    this._input.addEventListener('keydown', this._handleKeyDown);
    this._input.addEventListener('focus', this._handleFocus);
    this._input.addEventListener('blur', this._handleBlur);
    this._input.addEventListener('copy', this._handleCopy);
    this._input.addEventListener('paste', this._handlePaste);
    if (this._toggleButton) {
      this._toggleButton.addEventListener('click', this._handleToggle);
    }

    if (this.hasAttribute('placeholder')) {
      this._input.placeholder = this.getAttribute('placeholder') ?? '';
    }

    if (this.disabled) {
      this._input.disabled = true;
    }

    if (this._toggleButton) {
      this._toggleButton.disabled = this.disabled;
    }

    this._renderMaskedValue(this._value.length);
    this._updateToggleVisibility();
    this._updateValidity();
  }

  disconnectedCallback() {
    this._input.removeEventListener('beforeinput', this._handleBeforeInput);
    this._input.removeEventListener('keydown', this._handleKeyDown);
    this._input.removeEventListener('focus', this._handleFocus);
    this._input.removeEventListener('blur', this._handleBlur);
    this._input.removeEventListener('copy', this._handleCopy);
    this._input.removeEventListener('paste', this._handlePaste);
    if (this._toggleButton) {
      this._toggleButton.removeEventListener('click', this._handleToggle);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case 'disabled':
        this._input.disabled = this.disabled;
        if (this._toggleButton) {
          this._toggleButton.disabled = this.disabled;
        }
        break;
      case 'placeholder':
        this._input.placeholder = newValue ?? '';
        break;
      case 'mask-char':
        this._maskChar = this._normalizeMaskChar(newValue);
        this._renderMaskedValue(this._input.selectionStart ?? this._value.length);
        break;
      case 'reveal-toggle':
        this._updateToggleVisibility();
        break;
      case 'name':
        // name attribute sadece form submission için kullanılır
        break;
      default:
        this._updateValidity();
        break;
    }
  }

  formResetCallback() {
    this.value = '';
    this._setRevealed(false);
    this._resetHistory();
  }

  formStateRestoreCallback(state) {
    if (typeof state === 'string') {
      this.value = state;
    }
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    const normalized = typeof newValue === 'string' ? newValue : '';
    if (normalized === this._value) {
      return;
    }

    this._value = this._applyMaxLength(normalized);
    const caret = Math.min(this._value.length, this._input.selectionStart ?? this._value.length);
    this._renderMaskedValue(caret);
    this._recordHistory(this._value, caret);
    this._updateFormValue();
    this._updateValidity();
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(state) {
    if (state) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get minlength() {
    const attr = this.getAttribute('minlength');
    if (attr == null) {
      return -1;
    }
    const parsed = Number(attr);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : -1;
  }

  get maxlength() {
    const attr = this.getAttribute('maxlength');
    if (attr == null) {
      return -1;
    }
    const parsed = Number(attr);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : -1;
  }

  get pattern() {
    return this.getAttribute('pattern');
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    if (value) {
      this.setAttribute('name', value);
    } else {
      this.removeAttribute('name');
    }
  }

  focus(options) {
    this._input.focus(options);
  }

  blur() {
    this._input.blur();
  }

  checkValidity() {
    return this._updateValidity();
  }

  reportValidity() {
    const isValid = this._updateValidity();
    if (!isValid) {
      this._internals.reportValidity();
    }
    return isValid;
  }

  setCustomValidity(message) {
    this._internals.setValidity(message ? { customError: true } : {}, message, this._input);
  }

  _handleFocus() {
    this._lastCommittedValue = this._value;
  }

  _handleBlur() {
    if (this._value !== this._lastCommittedValue) {
      this.dispatchEvent(new Event('change', { bubbles: true }));
      this._lastCommittedValue = this._value;
    }
  }

  _handleCopy(event) {
    event.preventDefault();
  }

  _handlePaste(event) {
    if (this.hasAttribute('disable-paste')) {
      event.preventDefault();
    }
  }

  _handleKeyDown(event) {
    // Enter tuşuna basıldığında custom event tetikle
    if (event.key === 'Enter') {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent('enter', { 
        bubbles: true,
        composed: true,
        detail: { value: this._value }
      }));
    }
  }

  _handleBeforeInput(event) {
    const selectionStart = this._input.selectionStart ?? this._value.length;
    const selectionEnd = this._input.selectionEnd ?? this._value.length;
    let valueChanged = false;
    let historyApplied = false;

    const replaceSelection = (text) => {
      const replacement = text ?? '';
      let candidate = this._value.slice(0, selectionStart) + replacement + this._value.slice(selectionEnd);
      candidate = this._applyMaxLength(candidate);
      const insertedLength = candidate.length - (this._value.length - (selectionEnd - selectionStart));
      const caret = selectionStart + Math.max(insertedLength, 0);
      valueChanged = this._commitValue(candidate, caret) || valueChanged;
    };

    const removeRange = (from, to) => {
      const start = Math.max(0, from);
      const end = Math.max(start, to);
      const nextValue = this._value.slice(0, start) + this._value.slice(end);
      valueChanged = this._commitValue(nextValue, start) || valueChanged;
    };

    switch (event.inputType) {
      case 'insertText':
      case 'insertCompositionText':
        replaceSelection(event.data ?? '');
        break;
      case 'insertParagraph':
      case 'insertLineBreak':
        // Enter tuşu için \n ekleme, sadece eventi engelle
        event.preventDefault();
        return;
      case 'insertFromPaste':
      case 'insertFromDrop':
        // disable-paste attribute kontrolü
        if (this.hasAttribute('disable-paste')) {
          event.preventDefault();
          return;
        }
        replaceSelection(event.data ?? '');
        break;
      case 'deleteContentBackward':
        if (selectionStart === selectionEnd) {
          removeRange(selectionStart - 1, selectionEnd);
        } else {
          removeRange(selectionStart, selectionEnd);
        }
        break;
      case 'deleteContentForward':
        if (selectionStart === selectionEnd) {
          removeRange(selectionStart, selectionEnd + 1);
        } else {
          removeRange(selectionStart, selectionEnd);
        }
        break;
      case 'deleteByCut':
      case 'deleteContent':
        removeRange(selectionStart, selectionEnd);
        break;
      case 'insertReplacementText':
        replaceSelection(event.data ?? '');
        break;
      case 'historyUndo':
        historyApplied = this._stepHistory(-1);
        break;
      case 'historyRedo':
        historyApplied = this._stepHistory(1);
        break;
      default:
        return;
    }

    event.preventDefault();

    if (historyApplied || valueChanged) {
      this.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  _commitValue(nextValue, caretPosition) {
    const previousValue = this._value;
    const targetCaret = typeof caretPosition === 'number' ? caretPosition : nextValue.length;
    if (nextValue === previousValue) {
      this._renderMaskedValue(targetCaret);
      return false;
    }

    this._value = nextValue;
    this._renderMaskedValue(targetCaret);
    this._recordHistory(nextValue, targetCaret);
    this._updateFormValue();
    this._updateValidity();
    return true;
  }

  _applyMaxLength(text) {
    const limit = this.maxlength;
    if (limit > -1 && text.length > limit) {
      return text.slice(0, limit);
    }
    return text;
  }

  _renderMaskedValue(caretPosition) {
    const displayValue = this._isRevealed ? this._value : this._maskChar.repeat(this._value.length);
    this._input.value = displayValue;
    if (typeof caretPosition === 'number') {
      this._input.setSelectionRange(caretPosition, caretPosition);
    }
  }

  _updateFormValue() {
    this._internals.setFormValue(this._value);
  }

  _updateValidity() {
    if (this.disabled) {
      this._internals.setValidity({}, '', this._input);
      return true;
    }

    const issues = {};
    let message = '';

    if (this.hasAttribute('required') && this._value.length === 0) {
      issues.valueMissing = true;
      message = this.getAttribute('data-required-message') || 'Password is required.';
    }

    const min = this.minlength;
    if (!message && min > -1 && this._value.length < min) {
      issues.tooShort = true;
      message = this.getAttribute('data-too-short-message') || `Password must be at least ${min} characters.`;
    }

    const max = this.maxlength;
    if (!message && max > -1 && this._value.length > max) {
      issues.tooLong = true;
      message = this.getAttribute('data-too-long-message') || `Password must be at most ${max} characters.`;
    }

    const pattern = this.pattern;
    if (!message && pattern) {
      try {
        const regex = new RegExp(`^${pattern}$`);  // (?:) kaldırıldı
        if (!regex.test(this._value)) {
          issues.patternMismatch = true;
          message = this.getAttribute('data-pattern-message') || 'Password format is invalid.';
        }
      } catch (err) {
        console.warn('Invalid pattern:', pattern);
      }
    }

    this._internals.setValidity(issues, message, this._input);
    return !message;
  }

  _normalizeMaskChar(char) {
    if (!char || char.length === 0) {
      return '*';
    }
    return char[0];
  }

  _recordHistory(value, caret) {
    const state = { value, caret: Math.max(0, Math.min(caret ?? value.length, value.length)) };
    const last = this._history[this._historyIndex];
    if (last && last.value === state.value && last.caret === state.caret) {
      return;
    }
    this._history = this._history.slice(0, this._historyIndex + 1);
    this._history.push(state);
    
    // History limitini uygula
    const MAX_HISTORY = 50;
    if (this._history.length > MAX_HISTORY) {
      this._history = this._history.slice(-MAX_HISTORY);
    }
    
    this._historyIndex = this._history.length - 1;
  }

  _stepHistory(direction) {
    const nextIndex = this._historyIndex + direction;
    if (nextIndex < 0 || nextIndex >= this._history.length) {
      return false;
    }

    this._historyIndex = nextIndex;
    const state = this._history[this._historyIndex];
    this._value = state.value;
    this._renderMaskedValue(state.caret);
    this._updateFormValue();
    this._updateValidity();
    return true;
  }

  _resetHistory() {
    this._history = [{ value: this._value, caret: this._value.length }];
    this._historyIndex = 0;
    this._refreshToggleButton();
  }

  _handleToggle(event) {
    event.preventDefault();
    if (this.disabled) {
      return;
    }
    this._setRevealed(!this._isRevealed);
  }

  _setRevealed(state) {
    const allowed = this.hasAttribute('reveal-toggle');
    const desired = state && allowed;
    if (desired === this._isRevealed && allowed) {
      this._refreshToggleButton();
      return;
    }

    const caret = this._input.selectionStart ?? this._value.length;
    this._isRevealed = desired;
    this._renderMaskedValue(caret);
    this._refreshToggleButton();
  }

  _refreshToggleButton() {
    if (!this._toggleButton) {
      return;
    }
    const label = this._isRevealed ? 'Hide password' : 'Show password';
    this._toggleButton.setAttribute('aria-label', label);
    this._toggleButton.setAttribute('aria-pressed', this._isRevealed ? 'true' : 'false');
    this._toggleButton.disabled = this.disabled;
    if (this._iconShow) {
      this._iconShow.hidden = this._isRevealed;
    }
    if (this._iconHide) {
      this._iconHide.hidden = !this._isRevealed;
    }
  }

  _updateToggleVisibility() {
    if (!this._toggleButton) {
      return;
    }
    const shouldShow = this.hasAttribute('reveal-toggle');
    this._toggleButton.hidden = !shouldShow;
    this._toggleButton.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
    if (!shouldShow && this._isRevealed) {
      this._isRevealed = false;
      this._renderMaskedValue(this._input.selectionStart ?? this._value.length);
    }
    this._refreshToggleButton();
  }

  /**
   * Static method to replace an existing password input with NoSavePasswordInput
   * Preserves JavaScript references by forwarding all property accesses
   * @param {HTMLInputElement} originalInput - The original password input element
   * @param {Object} options - Optional configuration (placeholder, maskChar, etc.)
   * @returns {NoSavePasswordInput} The new component
   */
  static replaceInput(originalInput, options = {}) {
    if (!(originalInput instanceof HTMLInputElement)) {
      throw new TypeError('originalInput must be an HTMLInputElement');
    }

    // Create the new component
    const component = document.createElement('no-save-password');
    
    // Copy attributes from original input
    const attrs = ['name', 'placeholder', 'minlength', 'maxlength', 'pattern', 'required', 'disabled'];
    attrs.forEach(attr => {
      if (originalInput.hasAttribute(attr)) {
        component.setAttribute(attr, originalInput.getAttribute(attr));
      }
    });

    // Apply custom options
    Object.entries(options).forEach(([key, value]) => {
      if (key === 'maskChar') {
        component.setAttribute('mask-char', value);
      } else if (key === 'revealToggle') {
        if (value) component.setAttribute('reveal-toggle', '');
      } else if (key === 'disablePaste') {
        if (value) component.setAttribute('disable-paste', '');
      } else {
        component.setAttribute(key, value);
      }
    });

    // Copy initial value
    if (originalInput.value) {
      component.value = originalInput.value;
    }

    // Replace in DOM
    originalInput.parentNode.replaceChild(component, originalInput);

    // Create proxy to forward property accesses
    const properties = ['value', 'disabled', 'minLength', 'maxLength', 'pattern', 'name'];
    properties.forEach(prop => {
      Object.defineProperty(originalInput, prop, {
        get() { return component[prop]; },
        set(val) { component[prop] = val; },
        configurable: true
      });
    });

    // Forward methods
    const methods = ['focus', 'blur', 'checkValidity', 'reportValidity', 'setCustomValidity'];
    methods.forEach(method => {
      originalInput[method] = function(...args) {
        return component[method](...args);
      };
    });

    // Forward events from component to original input reference
    ['input', 'change', 'focus', 'blur', 'enter', 'invalid'].forEach(eventType => {
      component.addEventListener(eventType, (e) => {
        const forwardedEvent = new CustomEvent(eventType, {
          bubbles: e.bubbles,
          cancelable: e.cancelable,
          detail: e.detail
        });
        originalInput.dispatchEvent(forwardedEvent);
      });
    });

    return component;
  }
}

if (!customElements.get('no-save-password')) {
  customElements.define('no-save-password', NoSavePasswordInput);
}

// Dual-mode support: works as both ES6 module and normal script
if (typeof module !== 'undefined' && module.exports) {
  // CommonJS
  module.exports = { NoSavePasswordInput };
} else if (typeof define === 'function' && define.amd) {
  // AMD
  define([], function() { return NoSavePasswordInput; });
} else if (typeof window !== 'undefined') {
  // Browser global
  window.NoSavePasswordInput = NoSavePasswordInput;
}

// ES6 module export (will be ignored in non-module contexts)
export { NoSavePasswordInput };
