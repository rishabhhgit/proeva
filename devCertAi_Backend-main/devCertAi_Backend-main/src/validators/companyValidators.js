const { z } = require('zod')

const urlField = z.string().optional().or(z.literal('')).transform(v => {
  if (!v || v === '') return ''
  if (!/^https?:\/\//i.test(v)) return `https://${v}`
  return v
}).pipe(z.string().url().or(z.literal('')))

const createCompanySchema = z.object({
  name: z.string().min(2).max(150),
  website: urlField,
  logo: urlField,
  industry: z.string().max(80).optional(),
  size: z.enum(['1-10', '11-50', '51-200', '201-1000', '1000+']).optional(),
  description: z.string().max(2000).optional()
})

const updateCompanySchema = createCompanySchema.partial()

const submitVerificationSchema = z.object({
  verificationDocUrl: urlField
})

const verifyCompanySchema = z.object({
  approve: z.boolean(),
  note: z.string().max(1000).optional()
})

module.exports = { createCompanySchema, updateCompanySchema, submitVerificationSchema, verifyCompanySchema }
