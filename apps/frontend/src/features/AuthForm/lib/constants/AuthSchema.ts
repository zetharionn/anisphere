import * as v from 'valibot'

export const AuthSchema = v.object({
	email: v.pipe(
		v.string(),
		v.email('Please enter a valid email address.'),
		v.nonEmpty('Email field cannot be empty.')
	),
	password: v.pipe(
		v.string(),
		v.nonEmpty('Password field cannot be empty.'),
		v.minLength(8, 'Password must be between 8 and 16 characters long.'),
		v.maxLength(16, 'Password must be between 8 and 16 characters long.')
	)
})

export type AuthSchemaType = v.InferOutput<typeof AuthSchema>
