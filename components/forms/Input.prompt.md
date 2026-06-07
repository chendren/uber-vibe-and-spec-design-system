A labeled text input for forms (enrollment, contact, login) with optional leading icon, hint, and error states.

```jsx
<Input label="Work email" type="email" placeholder="you@company.com" required
       iconLeft={<i data-lucide="mail"></i>} />
<Input label="Team size" hint="Roughly how many engineers?" />
<Input label="Email" error="That doesn't look like an email." />
```

Focus shows the teal ring + teal border. Pass `error` to flip to the danger style; `hint` shows neutral helper text. Forwards all native input props.
