'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: ContactState['errors'] = {}
  if (name.length < 2 || name.length > 100) errors.name = 'Enter your full name.'
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = 'Enter a valid email address.'
  if (message.length < 10 || message.length > 2000) errors.message = 'Message must be 10 to 2000 characters.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors }
  }

  return {
    status: 'success',
    message: `Thanks, ${name.split(' ')[0]}. Marcus will reply to ${email} within 24 hours.`,
  }
}
